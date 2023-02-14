## 主页配置文件

- 路径`./plugins/PPOUI/OPTools/Data/MainGUI.json`

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

> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件  

### 配置文件详解

- `json文件不允许添加注释，请勿直接复制`  

- 如果**不需要某些功能，删除对应按钮数组即可**

```json
{
    "version": "2.0.0",//版本
    "Main": [
        {
            "name": "踢出玩家",//名称
            "image": "textures/ui/permissions_visitor_hand",//图片
            "type": "inside",//内部函数
            "open": "Kick_Ui"//内部函数
        },
        {
            "name": "杀死玩家",
            "image": "textures/ui/icon_recipe_equipment",
            "type": "inside",
            "open": "Kill_Ui"
        },
        {
            "name": "更改天气",
            "image": "textures/ui/icon_fall",
            "type": "inside",
            "open": "Weather_Ui"
        },
        {
            "name": "更改时间",
            "image": "textures/items/clock_item",
            "type": "inside",
            "open": "Time_Ui"
        },
        {
            "name": "广播消息",
            "image": "textures/ui/sound_glyph_color_2x",
            "type": "inside",
            "open": "Broad_Ui"
        },
        {
            "name": "设置MOTD",
            "image": "textures/ui/settings_glyph_color_2x",
            "type": "inside",
            "open": "Motd_Ui"
        },
        {
            "name": "设置人数",
            "image": "textures/ui/settings_glyph_color_2x",
            "type": "inside",
            "open": "Set_Player_Ui"
        },
        {
            "name": "玩家传送",
            "image": "textures/ui/dressing_room_skins.png",
            "type": "inside",
            "open": "Tp_Ui"
        },
        {
            "name": "清理掉落物",
            "image": "textures/ui/icon_trash",
            "type": "inside",
            "open": "Clear_Item_Ui"
        },
        {
            "name": "更改游戏模式",
            "image": "textures/ui/icon_setting",
            "type": "inside",
            "open": "setMode_Ui"
        },
        {
            "name": "更改游戏规则",
            "image": "textures/ui/icon_bookshelf",
            "type": "inside",
            "open": "setRule_Ui"
        },
        {
            "name": "获取隐藏方块",
            "image": "textures/ui/icon_blackfriday",
            "type": "inside",
            "open": "getBlock_Ui"
        },
        {
            "name": "执行后台命令",
            "image": "textures/ui/creator_glyph_color",
            "type": "inside",
            "open": "ConsoleCmd_Ui"
        },
        {
            "name": "发消息给玩家",
            "image": "textures/ui/message",
            "type": "inside",
            "open": "sendPlayer_Ui"
        },
        {
            "name": "崩溃玩家客户端",
            "image": "textures/ui/cancel",
            "type": "inside",
            "open": "Crash_Ui"
        },
        {
            "name": "以玩家身份说话",
            "image": "textures/ui/sound_glyph_color_2x",
            "type": "inside",
            "open": "Player_Talk_Ui"
        },
        {
            "name": "玩家身份执行命令",
            "image": "textures/ui/creator_glyph_color",
            "type": "inside",
            "open": "Player_Cmd_Ui"
        },
        {
            "name": "Ban GUI",
            "image": "textures/ui/ErrorGlyph",
            "type": "inside",
            "open": "Ban_Ui"
        }
    ]
}
```