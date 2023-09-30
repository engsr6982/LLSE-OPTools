import { color } from "../modules/Color.js";
interface _functionTable {
    [key: string]: (player: Player) => void;
}

/**
 * 函数表
 * 使用权限值映射函数
 */
const functionTable: _functionTable = {
    // "0x0": kick_UI,
    // "0x1": kill_UI,
    // "0x2": playerTalk_UI,
    // "0x3": playerCmd_UI,
    // "0x4": crashClient_UI,
    // "0x5": playerInfo_UI,
    // "0x6": modifyWeather,
    // "0x7": changeTime,
    // "0x9": gameRule_UI,
};


// default
const defaultFunction = (player: Player): boolean => {
    return player.tell(`This is a default function, see this message represents a plug-in extension registration information error or a form open configuration error`);
};

/**
 * 函数映射表(代理对象)
 */
export const functionMappingTable = new Proxy(functionTable, {
    // 获取值时的捕获器
    get: function (target, key) {
        logger.debug(`监听到了${key as string}被获取值`);
        return target[key as string] || defaultFunction;
    },
    // 设置值时的捕获器
    set: function (target, key: string, newValue) {
        logger.debug(`${color.bgGreen}${key as string} => ${color.reset}`);
        return (target[key as string] = newValue);
    },
});
