interface _AllExtensions {
    [key: string]: ExtendedInformation;
}

interface _String_String {
    [key: string]: string;
}

export class extendedCache {
    constructor() { }

    /**
     * 名称 => { 扩展 }
     */
    static _allExtensions: _AllExtensions = {};
    /**
     * 权限值 => 名称
     */
    static _permValue_Mapping_Name: _String_String = {};
    /**
     * 名称 => 文件名
     */
    static _name_Mapping_FileName: _String_String = {};
    /**
     * 访问键 => { 权限值、名称? }
     */
    static permissionValueDefinition = {}

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
        return this._allExtensions[name]
    }
}
