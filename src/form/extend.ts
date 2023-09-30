import { pluginFolderPath } from "../enums/GlobalEnums.js";





export class pluginExtension {
    constructor() {
        if (!file.exists(pluginFolderPath["lib-plugins"])) {
            file.mkdir(pluginFolderPath["lib-plugins"]);
        }
    }

    static install(extend: string) {
        if (!extend) return;
    }

    static uninstall(key: string) {
        if (!key) return;
    }

    static loadAndInstall(fileName: string) {}

    static uninstallAndClearCache(file: string) {}


    static loading() {

    }
}
