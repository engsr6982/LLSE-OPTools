import { initModulePerm } from "../../../LLSE-Modules/src/Perm/index.js";
import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { pluginInformation } from "../utils/globalVars.js";
import { printError } from "../utils/util.js";

interface _AllExtensions {
    [key: string]: ExtendedInformation;
}

interface _String_String {
    [key: string]: string;
}

const __permissionValueDefinition: object = {};
/**
 * 访问键 => { 权限值、名称? }
 */
const permissionValueDefinition = new Proxy(__permissionValueDefinition, {
    set(target, p, newValue, rec) {
        const a = Reflect.set(target, p, newValue, rec);
        initModulePerm(
            {
                perm: {
                    path: pluginFolderPath.data + "Perm.json",
                    default: false,
                },
                permForm: pluginFolderPath.lang + "PermLang",
                formTitle: pluginInformation.name,
            },
            __permissionValueDefinition
        );
        return a;
    },
});

export class extendedCache {
    constructor() {}

    /**
     * 权限值 => 名称
     */
    private static _permissionValue_Mapping_Name: _String_String = {};
    /**
     * 名称 => { 扩展 }
     */
    private static _allExtensions: _AllExtensions = {};
    /**
     * 名称 => 文件名
     */
    private static _name_Mapping_FileName: _String_String = {};

    private static hasKeyOnObject(object: object, key: string): boolean {
        return Object.prototype.hasOwnProperty.call(object, key);
    }

    /**
     * 权限值获取名称
     * @param permissionValue 权限值
     * @returns 名称
     */
    static permissionValueToName(permissionValue: string): string {
        return this._permissionValue_Mapping_Name[permissionValue] || null;
    }

    /**
     * 名称获取扩展文件名
     * @param name 名称
     * @returns 扩展文件名
     */
    static nameToFileName(name: string): string {
        return this._name_Mapping_FileName[name] || null;
    }

    /**
     * 获取扩展入口函数
     * @param name 扩展名称
     * @returns 入口函数
     */
    static getExtendedFunction(name: string): (player: Player) => any {
        if (!this.hasKeyOnObject(this._allExtensions, name)) return null; // 检查扩展
        return this._allExtensions[name].entryFunction;
    }

    /**
     * 获取一个扩展实例
     * @param name 扩展名称
     * @returns 扩展实例
     */
    static getExtended(name: string): ExtendedInformation {
        if (!this.hasKeyOnObject(this._allExtensions, name)) return null;
        return this._allExtensions[name];
    }

    private static _checkExtended(extend: ExtendedInformation) {
        // 检查元素是否空值
        if (!extend["register"] || !extend["authority"] || !extend["entryFunction"]) return false; // 检查是否含有3个主元素
        const { register, authority } = extend;
        if (!register["name"] || !authority["permissionValue"] || !authority["accessKey"]) return false; // 检查3个必要的元素是否空值
        logger.debug(`Element check passed`);
        // 检查是否重复load
        if (this.hasKeyOnObject(this._allExtensions, register.name)) return false; // 扩展名已占用（已加载）
        if (this.permissionValueToName(authority.permissionValue)) return false; // 权限值已占用（已注册）
        if (permissionValueDefinition[authority.accessKey]) return false; // 访问键已占用（已注册）
        logger.debug(`Repeat loading check is passed`);
        return true;
    }

    /**
     * 安装扩展
     * @param name 扩展名称
     * @param extend 扩展实例
     */
    static install(name: string, extend: ExtendedInformation, fileName: string): boolean {
        try {
            if (!name || !extend || !fileName) {
                throw new Error("The parameter is missing");
            }
            if (!this._checkExtended(extend)) {
                throw new Error(`Loading extension ${name} failed, this extension is loaded`);
            }
            const { register, authority } = extend;
            this._allExtensions[register.name] = extend; // name > { extend }
            this._permissionValue_Mapping_Name[authority.permissionValue] = name; // permissionValue > name
            this._name_Mapping_FileName[register.name] = fileName; // name > fileName
            return true;
        } catch (err) {
            printError(err);
            return false;
        }
    }

    /**
     * 卸载一个实例
     * @param name 扩展名称
     */
    static uninstall(name: string): boolean {
        try {
            // 检查是否加载
            if (!this.hasKeyOnObject(this._allExtensions, name)) return false;
            // 备份实例（方便后续卸载）
            const { register, authority } = this.getExtended(name);
            const fileName = this._name_Mapping_FileName[register.name];
            // 删除扩展
            this._allExtensions[register.name] = null;
            delete this._allExtensions[register.name];
            // 删除映射
            delete this._permissionValue_Mapping_Name[authority.permissionValue];
            delete this._name_Mapping_FileName[register.name];
            // 删除权限组注册
            delete permissionValueDefinition[authority.accessKey];
            // 删除require缓存
            // @ts-ignore
            delete require.cache[pluginFolderPath["lib-plugins"] + fileName];
            return true;
        } catch (err) {
            printError(err);
            return false;
        }
    }
}
