/**插件信息 */
export const pluginInformation = {
    name: "OPTools",
    introduce: "OP管理插件",
    version: [3, 0, 0, Version.Dev],
    author: "PPOUI",
    minebbs: "https://www.minebbs.com/resources/optools-op-gui.4836/"
}

/**插件文件夹路径 */
export const enum pluginFolderPath {
    "global" = ".\\plugins\\PPOUI\\OPTools\\",
    "data" = global + "data\\",
    "lang" = global + "lang\\",
    "lib" = global + "lib\\"
}

/**插件文件 */
export const enum pluginFile {
    "config"= "Config.json",
    "bindcmd" = "BindCmd.json",
    "blackcmd" = "BlackCmd.json",
    "block" = "Block.json",
    "potion" = "Potion.json",
    "rule" = "Rule.json",
    "ui" = "UI.json"
}
