import { pluginFolderPath } from "../enums/GlobalEnums";

interface _AllExtensions {
    [key: string]: ExtendedInformation;
}

interface _String_String {
    [key: string]: string;
}

export class extendedCache {
    constructor() {}

    /**
     * 名称 => { 扩展 }
     */
    private static _allExtensions: _AllExtensions = {};
    /**
     * 权限值 => 名称
     */
    private static _permValue_Mapping_Name: _String_String = {};
    /**
     * 名称 => 文件名
     */
    private static _name_Mapping_FileName: _String_String = {};
    /**
     * 访问键 => { 权限值、名称? }
     */
    static permissionValueDefinition = {};

    static hasKeyOnObject(object: object, key: string): boolean {
        return Object.prototype.hasOwnProperty.call(object, key);
    }

    /**
     * 权限值获取名称
     * @param permissionValue 权限值
     * @returns 名称
     */
    static permissionValueToName(permissionValue: string): string {
        return this._permValue_Mapping_Name[permissionValue] || null;
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
    static getExtendedFunction(name: string): Function {
        if (!this.hasKeyOnObject(this._allExtensions, name)) return null;
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

    static _checkExtended(ex: ExtendedInformation) {
        // 检查3个主要元素以及是否传入无用元素
        if (!ex["register"] || ex["authority"] || !ex["entryFunction"] || Object.keys(ex).length !== 3) return false;
        // 检查register

        // 检查authority
        return true;

        // 待验证
        // 此函数，可能会废弃
    }

    /**
     * 安装扩展
     * @param name 扩展名称
     * @param ext 扩展实例
     */
    static install(name: string, ext: ExtendedInformation): boolean {
        // 检查参数
        if (!name || !ext) {
            throw new Error("");
        }

        // todo 检查是否重复加载

        // todo 检查扩展元素
        if (!this._checkExtended(ext)) {
            throw new Error("");
        }

        // todo 检查完成，安装扩展
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
            const bak = this.getExtended(name);
            const fileName = this._name_Mapping_FileName[bak.register.name];
            // 删除扩展
            this._allExtensions[bak.register.name] = null;
            delete this._allExtensions[bak.register.name];
            // 删除映射
            delete this._permValue_Mapping_Name[bak.authority.permissionValue];
            delete this._name_Mapping_FileName[bak.register.name];
            // 删除权限组注册
            delete this.permissionValueDefinition[bak.authority.accessKey];
            // 删除require缓存
            // @ts-ignore
            delete require.cache[pluginFolderPath["lib-plugins"] + fileName];
            return true;
        } catch (err) {
            logger.error(err);
            logger.error(err.stack);
            return false;
        }
    }
}
