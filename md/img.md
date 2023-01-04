## 按钮配置文件
按钮配置文件路径
```path
./plugins/OP Tools/Button.json
```

### 配置文件详解
> [!attention]
> json文件不允许添加注释，请勿直接复制  

> 关于自定义请看文末[点我跳转](#自定义插件)

```json
{
    "Main": [   //主页面
        {
            "name":"踢出玩家",  //按钮显示的名称
            "images": "textures/ui/permissions_visitor_hand",   //按钮图标
            "type": "inside",   //类 “inside”为本插件内部调用  “command”为执行命令
            "open": "kick_player"   //执行的命令
        },
        {
            "name":"杀死玩家",
            "images": "textures/ui/icon_recipe_equipment",
            "type": "inside",
            "open": "kill_player"
        },
        {
            "name":"更改天气",
            "images": "textures/ui/icon_fall",
            "type": "inside",
            "open": "weather_ui"
        },
        {
            "name":"更改时间",
            "images": "textures/items/clock_item",
            "type": "inside",
            "open": "time_ui"
        },
        {
            "name":"广播消息",
            "images": "textures/ui/sound_glyph_color_2x",
            "type": "inside",
            "open": "guangbo_ui"
        },
        {
            "name":"设置MOTD",
            "images": "textures/ui/settings_glyph_color_2x",
            "type": "inside",
            "open": "motd_ui"
        },
        {
            "name":"设置人数",
            "images": "textures/ui/settings_glyph_color_2x",
            "type": "inside",
            "open": "player_ui"
        },
        {
            "name":"玩家传送",
            "images": "textures/ui/dressing_room_skins.png",
            "type": "inside",
            "open": "tp_here_ui"
        },
        {
            "name":"清理掉落物",
            "images": "textures/ui/icon_trash",
            "type": "inside",
            "open": "killitem_ui"
        },
        {
            "name":"更改游戏模式",
            "images": "textures/ui/icon_setting",
            "type": "inside",
            "open": "setgm_ui"
        },
        {
            "name":"更改游戏规则",
            "images": "textures/ui/icon_bookshelf",
            "type": "inside",
            "open": "gamerule_ui"
        },
        {
            "name":"获取隐藏方块",
            "images": "textures/ui/icon_blackfriday",
            "type": "inside",
            "open": "blocks_ui"
        },
        {
            "name":"崩溃玩家客户端",
            "images": "textures/ui/cancel",
            "type": "inside",
            "open": "cash_ui"
        },
        {
            "name":"以某个玩家身份说话",
            "images": "textures/ui/sound_glyph_color_2x",
            "type": "inside",
            "open": "player_talk_ui"
        }
    ],
    "gamerule": [   //更改游戏规则
        {
            "name": "误伤/PVP", //按钮名称
            "images": "",   //按钮图标
            "type": "pvp"   //规则id
        },
        {
            "name": "显示坐标",
            "images": "",
            "type": "showcoordinates"
        },
        {
            "name": "火焰蔓延",
            "images": "",
            "type": "dofiretick"
        },
        {
            "name": "TNT爆炸",
            "images": "",
            "type": "tntexplodes"
        },
        {
            "name": "生物掉落",
            "images": "",
            "type": "domobloot"
        },
        {
            "name": "方块掉落",
            "images": "",
            "type": "dotiledrops"
        },
        {
            "name": "立即重生",
            "images": "",
            "type": "doimmediaterespawn"
        },
        {
            "name": "重生半径",
            "images": "",
            "type": "spawnradius"
        },
        {
            "name": "昼夜更替",
            "images": "",
            "type": "dodaylightcycle"
        },
        {
            "name": "天气更替",
            "images": "",
            "type": "doweathercycle"
        },
        {
            "name": "生物生成",
            "images": "",
            "type": "domobspawning"
        },
        {
            "name": "生物破坏",
            "images": "",
            "type": "mobgriefing"
        },
        {
            "name": "实体掉落",
            "images": "",
            "type": "doentitydrops"
        },
        {
            "name": "幻翼生成",
            "images": "",
            "type": "doinsomnia"
        },
        {
            "name": "死亡不掉落",
            "images": "",
            "type": "keepinventory"
        },
        {
            "name": "命令方块开关",
            "images": "",
            "type": "commandblocksenabled"
        },
        {
            "name": "命令方块输出",
            "images": "",
            "type": "commandblockoutput"
        }
    ],
    "block": [  //获取隐藏方块
        {
            "name": "§l命令方块",   //按钮名称
            "images": "textures/ui/creator_glyph_color",    //按钮图标
            "type": "command_block"     //方块id
        },
        {
            "name": "§l屏障方块",
            "images": "textures/blocks/barrier",
            "type": "barrier"
        },
        {
            "name": "§l边界方块",
            "images": "textures/blocks/border",
            "type": "border_block"
        },
        {
            "name": "§l结构方块",
            "images": "textures/blocks/structure_block",
            "type": "structure_block"
        },
        {
            "name": "§l结构空位",
            "images": "textures/blocks/structure_void",
            "type": "structure_void"
        },
        {
            "name": "§l光源方块",
            "images": "textures/items/light_block_15.png",
            "type": "light_block"
        }
    ]
}
```
### 自定义插件
> [!note]
> "type"有两个可用的类，“inside”和“command”  
> “inside”为插件内部函数，自定义时请勿使用此类  
> “command”为执行命令，用于从主页跳转到其他插件页面，与菜单插件同理  
> 例如把"插件设置"添加进菜单主页
> ```json
> {
>   "name": "插件设置",
>   "images": "",
>   "type": "command",
>   "open": "/tools set"    
> }
> ```
> TIPS:   
> 1.“images”为图标可自行添加  
> 2.你可以自由对主页按钮顺序进行更改  

> [!tip]
> 更改配置文件后控制台输入“tools reload”即可重新加载配置文件  