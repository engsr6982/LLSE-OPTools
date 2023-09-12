import { perm, perm_Form } from "../Perm/index.js";
import { indexForm } from "../form/index.js";
import { dataOperation } from "../utils/data.js";
import { tr } from "../utils/i18n.js";

interface resItem {
    ac: "add" | "remove" | "reload" | "mgr";
    name: string;
}

// 定义回调
const call = {
    add: (_: Command, ori: CommandOrigin, out: CommandOutput, res: resItem): boolean => {
        const { type } = ori;
        const { name } = res;
        // 检查是否为控制台
        if (type !== 7) return out.error("No permission, this command is only used by the console!");

        // 尝试获取xuid
        const xuid = mc.getPlayer(name) ? mc.getPlayer(name).xuid : data.name2xuid(name);
        if (!xuid) return out.error(tr("command.failedToObtainXuid", { 0: name }));

        // 进行增加管理员
        perm.addOP(xuid) ? out.success(tr("addAdministrator", { 0: name })) : out.error(tr("addingAdministratorFailed", { 0: res.name }));
    },
    remove: (_: Command, ori: CommandOrigin, out: CommandOutput, res: resItem): boolean => {
        const { type } = ori;
        const { name } = res;
        // 检查是否为控制台
        if (type !== 7) return out.error("No permission, this command is only used by the console!");

        // 尝试获取xuid
        const xuid = mc.getPlayer(name) ? mc.getPlayer(name).xuid : data.name2xuid(name);
        if (!xuid) return out.error(tr("command.failedToObtainXuid", { 0: name }));

        // 进行移除管理员
        perm.deOP(xuid) ? out.success(tr("removeAdministrator", { 0: name })) : out.error(tr("removingAdministratorFailed", { 0: res.name }));
    },
    reload: (_: Command, ori: CommandOrigin, out: CommandOutput /* , res: resItem */): void => {
        dataOperation.load();
        out.success(tr("reload"));
    },
    mgr: (_: Command, ori: CommandOrigin, out: CommandOutput /* , res: resItem */): boolean => {
        const { player } = ori;
        if (!player) return out.error(tr("failedToObtainPlayerObject"));
        // 打开表单
        perm_Form.index(player);
    },
};

export function command_callback(_: Command, ori: CommandOrigin, out: CommandOutput, res: resItem) {
    if (Object.prototype.hasOwnProperty.call(call, res.ac)) {
        call[res.ac](_, ori, out, res);
    }
    // default
    const { player } = ori;
    if (!player) return out.error(tr("failedToObtainPlayerObject"));
    // 打开表单
    indexForm(ori.player);
}
