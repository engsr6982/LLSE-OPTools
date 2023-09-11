import { pluginFolderPath } from "../enums/GlobalEnums.js";
import { config } from "../file/data.js";
import { fileOperation } from "../file/file.js";

const _language = {
    "zh_CN": {
        "introduce": "{0} 管理工具"
    }
}

let loadLanguage: string;

// 确定要加载的语言
if (fileOperation.hasLang(config.language)) {
    loadLanguage = config.language;
} else if (fileOperation.hasLang(ll.language)) {
    loadLanguage = ll.language;
} else {
    loadLanguage = "zh_CN";
}

// 检查
if (!fileOperation.hasLang(loadLanguage)) {
    for (const key in _language) {
        fileOperation.setLang(key, JSON.stringify(_language[key]));
        logger.info(`Release the translation file of the ${key} language`);
    }
}

i18n.load(pluginFolderPath.lang, loadLanguage, undefined);

export const tr = i18n.tr;