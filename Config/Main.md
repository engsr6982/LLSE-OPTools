# /data/MainGUI.json

## 主页配置文件

> 此文件用于定义OPTools主表单显示内容

- 路径
  - `./plugins/PPOUI/OPTools/Data/MainGUI.json`

### 关于JSON定义

> 这是一个钮所需要的参数

- `name`**名称**
  - 表单的显示名称
- `image`**图片**
  - 按钮左边显示的图片
    - 填写`路径/URL`, 如不需要图片留空即可
- `type`**类**，表单打开类型
  - `type`目前有三个可用的类
    - `inside`
        插件内部函数，如`Kill_Ui`
    - `command`
        执行命令
    - `form`
        为一般子菜单
- `open`**开**  
    是使用的命令或者表单文件名或内部函数名(`不用加后缀`)

例如：

```json
{
    "name": "杀死玩家",
    "image": "textures/ui/icon_recipe_equipment",
    "type": "inside",
    "open": "Kill_Ui"
}
```

- `type`为`inside`
- `open`为`Kill_Ui`
  - 表示**调用插件内部函数，并打开Kill_Ui函数**

- `inside`内部函数列表

> [!tip]
> [点我前往查看内部函数定义](./README.md#功能一览表)
>
> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件  

### 文件详解

- `json文件不允许添加注释，请勿直接复制`  

- 如果**不需要某些功能，删除对应按钮数组即可**

```json
{
    "version": "2.3.0",//版本
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
        },
        {
            "name": "发送表单",
            "image": "",
            "type": "inside",
            "open": "Forms_Ui"
        },
        {
            "name": "玩家详细信息",
            "image": "",
            "type": "inside",
            "open": "Info_Ui"
        },
        {
            "name": "命令黑名单",
            "image": "",
            "type": "inside",
            "open": "Black_Cmd_Ui"
        }
    ]
}
```
