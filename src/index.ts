import { regCommand } from "./Command/RegCommand.js";
import { dataOperation } from "./utils/data.js";
import { pluginInformation } from "./utils/GlobalVars.js";
import { load_i18n } from "./utils/i18n.js";

logger.info(`Loading...\n
                  ____  _____    _______          _     
                 / __ \\|  __ \\  |__   __|        | |    
                | |  | | |__) |    | | ___   ___ | |___ 
                | |  | |  ___/     | |/ _ \\ / _ \\| / __|
                | |__| | |         | | (_) | (_) | \\__ \\
                 \\____/|_|         |_|\\___/ \\___/|_|___/\n
    ---- ${pluginInformation.minebbs} ----
                    Author: ${pluginInformation.author}   Version: ${pluginInformation.version.join(".").replace(/,/g, ".").replace(/\.0$/gm, "")}
`);

// 注册插件
ll.registerPlugin(pluginInformation.name, pluginInformation.introduce, pluginInformation.version, { Author: pluginInformation.author });

// 设置日志
if (file.exists(".\\plugins\\PPOUI\\debug")) {
    logger.setLogLevel(5);
    logger.setTitle(pluginInformation.name + " Debug");
    logger.warn(`The debug mode is already enabled`);
    mc.listen("onUseItemOn", (pl, it) => {
        if (it.type == "minecraft:clock") {
            pl.runcmd("tools");
        }
    });
}

// 加载文件
dataOperation.load() ? logger.info(`Loading files successfully`) : logger.error(`Failed to load file`);

// 加载i18n
load_i18n();

// 注册命令
regCommand();
