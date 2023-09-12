import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { pluginInformation } from "../utils/GlobalVars.js";
import { tr } from "../utils/i18n.js";
import PermissionGroup from "./Core/Permission.js";
import PermGroup_Form from "./GUI/Form.js";

// 权限值定义
export const _Perm_Object = {
    //! 注意数据结构
    "test": {// 权限英文key用于访问数据
        "name": "测试",// 权限名称
        "value": "ttt"// 权限值
    }
};

/** 权限组实例 */
export const perm = new PermissionGroup(pluginFolderPath.data + "Perm.json", false);

/** 权限组GUI */
export const perm_Form = new PermGroup_Form(pluginFolderPath.lang + "PermLang");

/** 权限组GUI表单标题 */
export const GUI_Title = tr("introduce", { 0: pluginInformation.name });