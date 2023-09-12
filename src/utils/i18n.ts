import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { config } from "./data.js";
import { fileOperation } from "./file.js";
import { parseError } from "./parseError.js";

const _language = {
    zh_CN: {
        introduce: "{0} 管理工具",
    },
};

let loadLanguage: string;

export function load_i18n() {
    try {
        // 确定要加载的语言
        if (fileOperation.hasLang(config.language)) {
            loadLanguage = config.language;
        } else if (fileOperation.hasLang(ll.language)) {
            loadLanguage = ll.language;
        } else {
            loadLanguage = "zh_CN";
        }

        // 检查语言文件是否存在，不存在释放文件
        if (!fileOperation.hasLang(loadLanguage)) {
            for (const key in _language) {
                fileOperation.setLang(key, JSON.stringify(_language[key]));
                logger.info(`Release the translation file of the ${key} language`);
            }
        }

        // loadLanguage = loadLanguage + ".json"
        i18n.load(pluginFolderPath.lang, loadLanguage);
        logger.info(`Successfully loaded the language pack ${loadLanguage}`);
    } catch (error) {
        parseError(error);
        return false;
    }
}

export const tr = i18n.tr;
