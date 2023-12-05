import { pluginFile } from "./GlobalEnums.js";
import { formatPrintError } from "./util.js";
import { fileOperation } from "./file.js";

const __inits = {
    config: {
        version: "3.0.0",
        language: "zh_CN",
    },
    block: {
        version: "3.0.0",
        data: [
            {
                name: "§l命令方块",
                image: "textures/ui/creator_glyph_color",
                type: "command_block",
            },
            {
                name: "§l屏障方块",
                image: "textures/blocks/barrier",
                type: "barrier",
            },
            {
                name: "§l边界方块",
                image: "textures/blocks/border",
                type: "border_block",
            },
            {
                name: "§l结构方块",
                image: "textures/blocks/structure_block",
                type: "structure_block",
            },
            {
                name: "§l结构空位",
                image: "textures/blocks/structure_void",
                type: "structure_void",
            },
            {
                name: "§l光源方块",
                image: "textures/items/light_block_15.png",
                type: "light_block",
            },
        ],
    },
    potion: [
        {
            name: "伤害吸收",
            image: "",
            id: 22,
        },
        {
            name: "不祥之兆",
            image: "",
            id: 28,
        },
        {
            name: "失明",
            image: "",
            id: 15,
        },
        {
            name: "潮涌能量",
            image: "",
            id: 26,
        },
        {
            name: "黑暗",
            image: "",
            id: 30,
        },
        {
            name: "中毒（致命）",
            image: "",
            id: 25,
        },
        {
            name: "防火",
            image: "",
            id: 12,
        },
        {
            name: "急迫",
            image: "",
            id: 3,
        },
        {
            name: "生命提升",
            image: "",
            id: 21,
        },
        {
            name: "饱和",
            image: "",
            id: 23,
        },
        {
            name: "饥饿",
            image: "",
            id: 17,
        },
        {
            name: "瞬间伤害",
            image: "",
            id: 7,
        },
        {
            name: "瞬间治疗",
            image: "",
            id: 6,
        },
        {
            name: "隐身",
            image: "",
            id: 14,
        },
        {
            name: "跳跃提升",
            image: "",
            id: 8,
        },
        {
            name: "飘浮",
            image: "",
            id: 24,
        },
        {
            name: "挖掘疲劳",
            image: "",
            id: 4,
        },
        {
            name: "反胃",
            image: "",
            id: 9,
        },
        {
            name: "夜视",
            image: "",
            id: 16,
        },
        {
            name: "中毒",
            image: "",
            id: 19,
        },
        {
            name: "生命恢复",
            image: "",
            id: 10,
        },
        {
            name: "抗性提升",
            image: "",
            id: 11,
        },
        {
            name: "缓降",
            image: "",
            id: 27,
        },
        {
            name: "缓慢",
            image: "",
            id: 2,
        },
        {
            name: "速度",
            image: "",
            id: 1,
        },
        {
            name: "力量",
            image: "",
            id: 5,
        },
        {
            name: "村庄英雄",
            image: "",
            id: 29,
        },
        {
            name: "水下呼吸",
            image: "",
            id: 13,
        },
        {
            name: "虚弱",
            image: "",
            id: 18,
        },
        {
            name: "凋零",
            image: "",
            id: 20,
        },
    ],
    rule: {
        version: "3.0.0",
        data: [
            {
                name: "随机刻",
                image: "",
                introduce: "每游戏刻每区段中随机的方块刻发生的频率",
                rule: "randomTickSpeed",
            },
            {
                name: "误伤/PVP",
                image: "",
                introduce: "玩家之间能否造成伤害",
                rule: "pvp",
            },
            {
                name: "显示坐标",
                image: "",
                introduce: "是否在聊天框区域持续实时显示玩家坐标",
                rule: "showcoordinates",
            },
            {
                name: "火焰蔓延",
                image: "",
                introduce: "火是否蔓延及自然熄灭",
                rule: "dofiretick",
            },
            {
                name: "TNT爆炸",
                image: "",
                introduce: "TNT是否会爆炸",
                rule: "tntexplodes",
            },
            {
                name: "生物掉落",
                image: "",
                introduce: "生物在死亡时是否掉落物品",
                rule: "domobloot",
            },
            {
                name: "方块掉落",
                image: "",
                introduce: "方块被破坏时是否掉落物品",
                rule: "dotiledrops",
            },
            {
                name: "立即重生",
                image: "",
                introduce: "玩家死亡时是否不显示死亡界面直接重生",
                rule: "doimmediaterespawn",
            },
            {
                name: "重生半径",
                image: "",
                introduce: "首次进入服务器的玩家和没有重生点的死亡玩家在重生时与世界重生点坐标的距离",
                rule: "spawnradius",
            },
            {
                name: "昼夜更替",
                image: "",
                introduce: "是否进行昼夜更替和月相变化",
                rule: "dodaylightcycle",
            },
            {
                name: "天气更替",
                image: "",
                introduce: "天气是否变化",
                rule: "doweathercycle",
            },
            {
                name: "生物生成",
                image: "",
                introduce: "生物是否自然生成",
                rule: "domobspawning",
            },
            {
                name: "生物破坏",
                image: "",
                introduce: "生物是否能够进行破坏",
                rule: "mobgriefing",
            },
            {
                name: "实体掉落",
                image: "",
                introduce: "非生物实体是否掉落物品",
                rule: "doentitydrops",
            },
            {
                name: "幻翼生成",
                image: "",
                introduce: "幻翼是否在夜晚生成",
                rule: "doinsomnia",
            },
            {
                name: "死亡不掉落",
                image: "",
                introduce: "玩家死亡后是否保留物品栏物品、经验",
                rule: "keepinventory",
            },
            {
                name: "命令方块开关",
                image: "",
                introduce: "命令方块在游戏中是否被启用",
                rule: "commandblocksenabled",
            },
            {
                name: "命令方块输出",
                image: "",
                introduce: "命令方块执行命令时是否在聊天框中向管理员显示",
                rule: "commandblockoutput",
            },
        ],
    },
    ui: {
        version: "3.0.0",
        data: [
            {
                name: "踢出玩家",
                image: "textures/ui/permissions_visitor_hand",
                type: "inside",
                open: "kick",
            },
            {
                name: "杀死玩家",
                image: "textures/ui/icon_recipe_equipment",
                type: "inside",
                open: "Kill_Ui",
            },
            {
                name: "更改天气",
                image: "textures/ui/icon_fall",
                type: "inside",
                open: "Weather_Ui",
            },
            {
                name: "更改时间",
                image: "textures/items/clock_item",
                type: "inside",
                open: "Time_Ui",
            },
            {
                name: "广播消息",
                image: "textures/ui/sound_glyph_color_2x",
                type: "inside",
                open: "Broad_Ui",
            },
            {
                name: "设置MOTD",
                image: "textures/ui/settings_glyph_color_2x",
                type: "inside",
                open: "Motd_Ui",
            },
            {
                name: "设置人数",
                image: "textures/ui/settings_glyph_color_2x",
                type: "inside",
                open: "Set_Player_Ui",
            },
            {
                name: "玩家传送",
                image: "textures/ui/dressing_room_skins.png",
                type: "inside",
                open: "Tp_Ui",
            },
            {
                name: "清理掉落物",
                image: "textures/ui/icon_trash",
                type: "inside",
                open: "Clear_Item_Ui",
            },
            {
                name: "更改游戏模式",
                image: "textures/ui/icon_setting",
                type: "inside",
                open: "setMode_Ui",
            },
            {
                name: "更改游戏规则",
                image: "textures/ui/icon_bookshelf",
                type: "inside",
                open: "setRule_Ui",
            },
            {
                name: "获取隐藏方块",
                image: "textures/ui/icon_blackfriday",
                type: "inside",
                open: "getBlock_Ui",
            },
            {
                name: "执行后台命令",
                image: "textures/ui/creator_glyph_color",
                type: "inside",
                open: "ConsoleCmd_Ui",
            },
            {
                name: "发消息给玩家",
                image: "textures/ui/message",
                type: "inside",
                open: "sendPlayer_Ui",
            },
            {
                name: "崩溃玩家客户端",
                image: "textures/ui/cancel",
                type: "inside",
                open: "Crash_Ui",
            },
            {
                name: "以玩家身份说话",
                image: "textures/ui/sound_glyph_color_2x",
                type: "inside",
                open: "Player_Talk_Ui",
            },
            {
                name: "玩家身份执行命令",
                image: "textures/ui/creator_glyph_color",
                type: "inside",
                open: "Player_Cmd_Ui",
            },
            {
                name: "Ban GUI",
                image: "textures/ui/ErrorGlyph",
                type: "inside",
                open: "Ban_Ui",
            },
            {
                name: "发送表单",
                image: "",
                type: "inside",
                open: "Forms_Ui",
            },
            {
                name: "玩家详细信息",
                image: "",
                type: "inside",
                open: "Info_Ui",
            },
            {
                name: "命令黑名单",
                image: "",
                type: "inside",
                open: "Black_Cmd_Ui",
            },
            {
                name: "药水GUI",
                image: "",
                type: "inside",
                open: "Potion_Ui",
            },
        ],
    },
};

export let config = __inits.config;
export let bindcmd: BindCmdData;
export let blackCmd: BlackCmdData;
export let block: BlockData;
export let potion: PotionData;
export let rule: RuleData;
export let ui: UIData;
export let motd: MotdData;

export class dataOperation extends fileOperation {
    static init() {
        try {
            if (!super.hasConfig()) super.setConfig(JSON.stringify(__inits.config));
            if (!super.hasData(pluginFile.bindcmd)) super.setData(pluginFile.bindcmd, JSON.stringify([]));
            if (!super.hasData(pluginFile.blackcmd)) super.setData(pluginFile.blackcmd, JSON.stringify([]));
            if (!super.hasData(pluginFile.block)) super.setData(pluginFile.block, JSON.stringify(__inits.block));
            if (!super.hasData(pluginFile.potion)) super.setData(pluginFile.potion, JSON.stringify(__inits.potion));
            if (!super.hasData(pluginFile.rule)) super.setData(pluginFile.rule, JSON.stringify(__inits.rule));
            if (!super.hasData(pluginFile.ui)) super.setData(pluginFile.ui, JSON.stringify(__inits.ui));
            if (!super.hasData(pluginFile.motd)) super.setData(pluginFile.motd, JSON.stringify([]));
            return true;
        } catch (err) {
            formatPrintError(err);
            return false;
        }
    }

    static load() {
        try {
            this.init();
            config = JSON.parse(super.getConfig());
            bindcmd = JSON.parse(super.getData(pluginFile.bindcmd));
            blackCmd = JSON.parse(super.getData(pluginFile.blackcmd));
            block = JSON.parse(super.getData(pluginFile.block));
            potion = JSON.parse(super.getData(pluginFile.potion));
            rule = JSON.parse(super.getData(pluginFile.rule));
            ui = JSON.parse(super.getData(pluginFile.ui));
            motd = JSON.parse(super.getData(pluginFile.motd));
            return true;
        } catch (err) {
            formatPrintError(err);
            return false;
        }
    }
}
