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
}
