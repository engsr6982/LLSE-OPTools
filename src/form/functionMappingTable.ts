import { gameRule_UI } from "../plugins/gamerule.js";
import { kick_UI } from "../plugins/kick.js";
import { kill_UI } from "../plugins/kill.js";
import { playerCmd_UI } from "../plugins/player_cmd.js";
import { playerTalk_UI } from "../plugins/player_talk.js";

/**函数映射表 */
export const functionMappingTable = {
    "0x0": kick_UI,
    "0x1": kill_UI,
    "0x2": playerTalk_UI,
    "0x3": playerCmd_UI,
    "0x9": gameRule_UI,
};
