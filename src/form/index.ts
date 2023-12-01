import { gmTell, pluginInformation } from "../utils/globalVars.js";
import { ui } from "../utils/data.js";
import { tr } from "../utils/i18n.js";
import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { printError } from "../utils/util.js";
import { fileOperation } from "../utils/file.js";

export function indexForm(player: Player, uiData: UIData | UI_Data_Item = ui) {
    // 初步检查权限
    if (!perm.isOP(player.xuid) && !perm.getUserInGroup(player.xuid)) {
        // 不是OP也不是用户
        return player.tell(gmTell + tr("form.indexForm.noPermissions"));
    }
    const fm = mc.newSimpleForm();
    fm.setTitle(tr("form.indexForm.formTitle", { 0: pluginInformation.name }));
    fm.setContent(tr("form.indexForm.formContent"));

    const newArray: UI_Data_Item = [];
    const forArray: UI_Data_Item =
        !Array.isArray(uiData) && Object.prototype.hasOwnProperty.call(uiData, "data") ? <UI_Data_Item>uiData.data : <UI_Data_Item>uiData;

    // 构建表单
    forArray.forEach((i: _UIDataItems) => {
        logger.debug(`indexForm.forArray: ${i.type}`);
        if (perm.isOP(player.xuid)) {
            // 插件管理员
            fm.addButton(i.name, i.image);
            newArray.push(i);
        } else if (i.type === "subform" || perm.hasUserPerm(player.xuid, <string>i.open /* 注意：此处函数定义需要与权限值相同 */)) {
            // 子用户 / subform
            fm.addButton(i.name, i.image);
            newArray.push(i);
        }
    });

    // 检查是否无任何可用功能
    if (newArray.length === 0) return player.tell(gmTell + tr("form.indexForm.noFunction"));
    // 发送表单
    player.sendForm(fm, (player2: Player, id: number) => {
        if (id == null) return player2.tell(gmTell + tr("formClose"));
        switch (newArray[id].type) {
            case "inside":
                // 通过映射调用函数
                // functionMappingTable[<string>newArray[id].open](player2);
                // todo
                break;
            case "cmd":
                player2.runcmd(<string>newArray[id].open);
                break;
            case "form":
                try {
                    if (!file.exists(pluginFolderPath.data + newArray[id].open)) {
                        // 文件不存在
                        return player2.tell(gmTell + tr("form.indexForm.theSubformDoesNotExist", { 0: newArray[id].open }));
                    }
                    // 调用表单
                    indexForm(player2, JSON.parse(fileOperation.getData(<string>newArray[id].open)));
                } catch (err) {
                    printError(err);
                }
                break;
            case "subform":
                indexForm(player2, <UI_Data_Item>newArray[id].open);
                break;
            default:
                player2.tell(gmTell + tr("form.indexForm.configurationError"));
                logger.error(tr("form.indexForm.configurationError"));
        }
    });
}
