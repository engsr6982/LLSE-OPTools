import { pluginFolderPath } from "./GlobalVars.js";

// if (file.exists(pluginFolderPath.lang + ll.language + ".json"))

i18n.load(pluginFolderPath.lang, "zh_CN", undefined);

export const tr = i18n.tr;