import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { pluginInformation } from "../utils/GlobalVars.js";
import PermissionGroup from "./Core/Permission.js";
import PermGroup_Form from "./GUI/Form.js";

// 权限值定义
export const _Perm_Object = {
    //! 注意数据结构
    kick: {
        // 权限英文key用于访问数据
        name: "踢出玩家", // 权限名称
        value: "0x0", // 权限值
    },
    kill: {
        name: "杀死玩家",
        value: "0x1",
    },
    playerTalk: {
        name: "以玩家身份说话",
        value: "0x2",
    },
    playerCmd: {
        name: "以玩家身份执行命令",
        value: "0x3"
    },
    gameRule_UI: {
        name: "更改世界规则",
        value: "0x9"
    }
};

/** 权限组实例 */
export const perm = new PermissionGroup(pluginFolderPath.data + "Perm.json", false);

/** 权限组GUI */
export const perm_Form = new PermGroup_Form(pluginFolderPath.lang + "PermLang");

/** 权限组GUI表单标题 */
export const GUI_Title = pluginInformation.name;
