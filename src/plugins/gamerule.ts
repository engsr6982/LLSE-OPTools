import { gmTell, pluginInformation } from "../utils/globalVars.js";
import { rule } from "../utils/data.js";
import { tr } from "../utils/i18n.js";

// 拼接命令
function _spliceCommand(rule: string): string {
    return `gamerule ${rule}`;
}

// 解析规则值
function _extractCommandResultValue(value: string): string {
    return value.replace(RegExp(/.+=./g), "");
}

// 获取规则值
function getRuleValue(rule: string): string {
    const command = _spliceCommand(rule); // 拼接命令
    const { output, success } = mc.runcmdEx(command); // 执行命令
    logger.debug(`command: ${command} => status: ${success} | output: ${output}`);
    return _extractCommandResultValue(output); // 解析并返回
}

// function obtainDataType(data: any): string {
//     return Object.prototype.toString.call(data);
// }

export function gameRule_UI(player: Player) {
    const fm = mc.newCustomForm();
    fm.setTitle(tr("plugins.gameRule_UI.formTitle", { 0: pluginInformation.name }));

    const rawData = {}; // 原始数据，用于记录数据是否变动

    rule.data.forEach((i) => {
        const value = getRuleValue(i.rule); // 获取数据值

        const stringBoolToBool = (stringBool: string) => {
            return /true/.test(stringBool); // 使用正则辅助转换string => bool
        };

        const title = `${i.name}\n${i.describe}\n${i.effect}\n----------------`;
        if (value === "true" || value === "false") {
            fm.addSwitch(title, stringBoolToBool(value)); // 类型bool
            rawData[i.rule] = stringBoolToBool(value);
        } else {
            fm.addInput(title, "string number", value); // 类型string
            rawData[i.rule] = value;
        }
    });
    player.sendForm(fm, (player2, data) => {
        if (data == null) return player2.tell(gmTell + tr("formClose"));
        // logger.debug(JSON.stringify(data));
        let index = 0;
        for (const key in rawData) {
            // 遍历原始数据
            if (data[index] !== rawData[key]) {
                // 检查回调数据是否与原始数据不匹配
                !mc.runcmd(_spliceCommand(key) + ` ${data[index]}`)
                    ? logger.error(`game rule update fail: ${key}: ${rawData[key]} => ${data[index]}`)
                    : null;
            }
            index++;
        }
        player2.tell(gmTell + tr("plugins.gameRule_UI.success"));
    });
}
