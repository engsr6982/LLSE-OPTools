import { pluginFolderPath } from "../utils/GlobalEnums.js";
import { extendedCache } from "./extendedCache.js";

export class pluginExtension extends extendedCache {
    constructor() {
        super();
        if (!file.exists(pluginFolderPath["lib-plugins"])) {
            file.mkdir(pluginFolderPath["lib-plugins"]);
        }
    }

    static loadAll() {}

    static load(fileName: string) {
        if (file.exists(pluginFolderPath["lib-plugins"] + fileName)) return false;

        // return super.install();
    }

    static unload() {}

    static reload() {}
}
