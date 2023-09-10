import { pluginFolderPath } from "../utils/GlobalVars.js";

/**文件操作 */
export class fileOperation {
    /**
     * data中是否存在指定文件
     * @param fileName 文件名 a.json
     * @returns 是否存在
     */
    static hasData(fileName: string) {
        return file.exists(pluginFolderPath.data + fileName);
    }
    /**
     * 读取data指定文件内容
     * @param fileName 文件名 a.json
     * @returns 是否读取成功
     */
    static getData(fileName: string): string | null {
        return file.readFrom(pluginFolderPath.data + fileName);
    }
    /**
     * 写入数据到data指定文件
     * @param fileName 文件名 a.json
     * @param data 数据
     * @returns 是否写入成功
     */
    static setData(fileName: string, data: string) {
        return file.writeTo(pluginFolderPath.data + fileName, data);
    }
    /**
     * 写入翻译数据到lang
     * @param language 语言 如：zh_CN en
     * @param data 翻译数据
     * @returns 是否写入成功
     */
    static setLang(language: string, data: string) {
        return file.writeTo(pluginFolderPath.lang + language + ".json", data);
    }
}