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