import { perm } from "../Perm/index.js";
import { functionMappingTable } from "./functionMappingTable.js";
import { gmTell, pluginInformation } from "../utils/GlobalVars.js";
import { ui } from "../utils/data.js";
import { tr } from "../utils/i18n.js";
import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { parseError } from "../utils/parseError.js";
import { fileOperation } from "../utils/file.js";

export function indexForm(player: Player, data: UIData = ui) {
    const fm = mc.newSimpleForm();
    fm.setTitle(tr("indexForm.formTitle", { 0: pluginInformation.name }));
    fm.setContent(tr("indexForm.formContent"));
    // 遍历添加按钮
    const newArray: UI_Data_Item = [];
    data.data.forEach((i) => {
        if (perm.isOP(player.xuid)) {
            // 插件管理员
            fm.addButton(i.name, i.image);
            newArray.push(i);
        } else if (perm.hasUserPerm(player.xuid, i.open /* todo 注意：此处权限值需要映射 */)) {
            // 子用户
            fm.addButton(i.name, i.image);
            newArray.push(i);
        }
    });
    // 检查是否无任何可用功能
    if (newArray.length === 0) return player.tell(gmTell + tr("indexForm.noFunction"));
    // 发送表单
    player.sendForm(fm, (player: Player, id: number) => {
        if (id == null) return player.tell(tr("formClose"));
        switch (newArray[id].type) {
            case "inside":
                // 通过映射调用函数
                functionMappingTable[newArray[id].open](player);
                break;
            case "cmd":
                player.runcmd(newArray[id].open);
                break;
            case "form":
                try {
                    if (!file.exists(pluginFolderPath.data + newArray[id].open)) {
                        // 文件不存在
                        return player.tell(gmTell + tr("indexForm.theSubformDoesNotExist", { 0: newArray[id].open }));
                    }
                    // 调用表单
                    indexForm(player, JSON.parse(fileOperation.getData(newArray[id].open)));
                } catch (err) {
                    parseError(err);
                }
                break;
            default:
                player.tell(gmTell + tr("indexForm.configurationError"));
                logger.error(tr("indexForm.configurationError"));
        }
    });
}
