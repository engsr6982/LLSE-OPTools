## 按钮配置文件

- 路径`./plugins/PPOUI/OPTools/Data/ButtonData.json`

### 关于自定义  
- 自定义**游戏规则**  
    1. 如果当前游戏规则有缺失，你可以根据格式自行添加游戏规则  
    2. 某些游戏规则缺少或者需要GUI可以向作者反馈进行添加   

- 自定义“获取方块”
    1. 可自行根据格式添加方块   
    > [!warning]
    > 不支持特殊方块/物品   
    > 例如：带有特殊值的方块 玻璃、混凝土   

    2. 如需补充缺少的隐藏方块，可以向作者提交

> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件  

### 配置文件详解

- `json文件不允许添加注释，请勿直接复制`  


```json
{
    "Rule": [//游戏规则
        {
            "name": "随机刻", //名称
            "image": "", //图片
            "txt": "描述: 每游戏刻每区段中随机的方块刻发生的频率",//描述
            "type": "randomTickSpeed" //规则ID
        },
        {
            "name": "误伤/PVP",
            "image": "",
            "txt": "描述: 玩家之间能否造成伤害",
            "type": "pvp"
        },
        {
            "name": "显示坐标",
            "image": "",
            "txt": "描述: 是否在聊天框区域持续实时显示玩家坐标",
            "type": "showcoordinates"
        },
        {
            "name": "火焰蔓延",
            "image": "",
            "txt": "描述: 火是否蔓延及自然熄灭",
            "type": "dofiretick"
        },
        {
            "name": "TNT爆炸",
            "image": "",
            "txt": "描述: TNT是否会爆炸",
            "type": "tntexplodes"
        },
        {
            "name": "生物掉落",
            "image": "",
            "txt": "描述: 生物在死亡时是否掉落物品",
            "type": "domobloot"
        },
        {
            "name": "方块掉落",
            "image": "",
            "txt": "描述: 方块被破坏时是否掉落物品",
            "type": "dotiledrops"
        },
        {
            "name": "立即重生",
            "image": "",
            "txt": "描述: 玩家死亡时是否不显示死亡界面直接重生",
            "type": "doimmediaterespawn"
        },
        {
            "name": "重生半径",
            "image": "",
            "txt": "描述: 首次进入服务器的玩家和没有重生点的死亡玩家在重生时与世界重生点坐标的距离",
            "type": "spawnradius"
        },
        {
            "name": "昼夜更替",
            "image": "",
            "txt": "描述: 是否进行昼夜更替和月相变化",
            "type": "dodaylightcycle"
        },
        {
            "name": "天气更替",
            "image": "",
            "txt": "描述: 天气是否变化",
            "type": "doweathercycle"
        },
        {
            "name": "生物生成",
            "image": "",
            "txt": "描述: 生物是否自然生成",
            "type": "domobspawning"
        },
        {
            "name": "生物破坏",
            "image": "",
            "txt": "描述: 生物是否能够进行破坏",
            "type": "mobgriefing"
        },
        {
            "name": "实体掉落",
            "image": "",
            "txt": "描述: 非生物实体是否掉落物品",
            "type": "doentitydrops"
        },
        {
            "name": "幻翼生成",
            "image": "",
            "txt": "描述: 幻翼是否在夜晚生成",
            "type": "doinsomnia"
        },
        {
            "name": "死亡不掉落",
            "image": "",
            "txt": "描述: 玩家死亡后是否保留物品栏物品、经验",
            "type": "keepinventory"
        },
        {
            "name": "命令方块开关",
            "image": "",
            "txt": "描述: 命令方块在游戏中是否被启用",
            "type": "commandblocksenabled"
        },
        {
            "name": "命令方块输出",
            "image": "",
            "txt": "描述: 命令方块执行命令时是否在聊天框中向管理员显示",
            "type": "commandblockoutput"
        }
    ],
    "Block": [//获取方块
        {
            "name": "§l命令方块", //名称
            "image": "textures/ui/creator_glyph_color", //图片
            "type": "command_block" //方块ID
        },
        {
            "name": "§l屏障方块",
            "image": "textures/blocks/barrier",
            "type": "barrier"
        },
        {
            "name": "§l边界方块",
            "image": "textures/blocks/border",
            "type": "border_block"
        },
        {
            "name": "§l结构方块",
            "image": "textures/blocks/structure_block",
            "type": "structure_block"
        },
        {
            "name": "§l结构空位",
            "image": "textures/blocks/structure_void",
            "type": "structure_void"
        },
        {
            "name": "§l光源方块",
            "image": "textures/items/light_block_15.png",
            "type": "light_block"
        }
    ]
}
```