# /config/Config.json

## 插件配置文件

> 用于配置插件各个功能，以及开启、关闭一些功能

- 路径
    - `./plugins/PPOUI/OPTools/config/Config.json`

### 文件详解

- `json文件不允许添加注释，请勿直接复制`  

```json
{
    "version": "2.5.3",// 文件版本
    "language": "zh_CN",// 语言
    "BindCmd": false,// 是否启用命令绑定
    "Cleaner_API": false,// 是否启用Cleaner API来清理掉落物
    "FilterSimulatedPlayers": true,// 过滤模拟玩家（假人）
    "Motd_Enable": false,// 是否启用滚动Motd
    "Motd_Time": 2000,// Motd切换时间
    "Kick_Txt": "你已被管理员踢出服务器",// 踢出玩家显示内容
    "Broad_head": "§e[§d广播§r§e] §r",// 广播消息的消息前缀
    "Clear_Cmd": "kill @e[type=item]",// 不启用CleanerAP时的默认清理命令
    "Ban_Cmd": {// BanGUI功能 命令配置
        "Ban": "ban #&#${Player}#&# ${time} ${Reason}",//封禁命令
        "UnBan": "unban #&#${Player}#&#"// 解封命令
    },
    "Log": {// 日志配置
        "Output_Colsole": true, // 是否输出控制台
        "Output_csv": true,// 输出CSV
        "Date_Differentiation": false// 按天记录日志
    },
    "Motd": ["motd1", "motd2", "motd3"]// 滚动Motd的内容
}
```

> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件
