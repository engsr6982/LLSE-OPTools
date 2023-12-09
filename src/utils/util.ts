import PermissionCore from "../../../LLSE-Modules/src/Permission/PermissionCore.js";
import { pluginFolderPath } from "./GlobalEnums.js";
import PermissionForm from "../../../LLSE-Modules/src/Permission/PermissionForm.js";

export function formatPrintError(err: Error) {
    logger.error(`捕获错误: ${err}\n${err.stack}`);
}

export const pcore = new PermissionCore(pluginFolderPath.data + "perm.json", false);

export const pform = new PermissionForm(pluginFolderPath.lang + "perm\\", () => {
    return pcore;
});
