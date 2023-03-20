## 插件配置文件

- 路径
    - `./plugins/PPOUI/OPTools/config/Config.json`

### 配置文件详解

- `json文件不允许添加注释，请勿直接复制`  

```json
{
    "version": "2.5.0",
    "language": "zh_CN",//语言
    "BindCmd": false,//命令绑定
    "Network": true,//网络请求
    "Cleaner_API": false,//Cleaner扫地机API
    "FilterSimulatedPlayers": true,//过滤模拟玩家
    "Motd": ["motd1", "motd2", "motd3"],//Motd内容
    "Motd_Time": 2000,//Motd切换时间
    "Kick_Txt": "你已被管理员踢出服务器",//踢出默认内容
    "Broad_head": "§e[§d广播§r§e] §r",//广播消息头
    "Clear_Cmd": "kill @e[type=item]",//清理掉落物命令
    "Ban_Cmd": {//具体看更新日志2.1.2
        "Ban": "ban #&#${Player}#&# ${time} ${Reason}",//#&#为引号"  ${Player}玩家  ${time}时间 ${Reason}原因
        "UnBan": "unban #&#${Player}#&#"
    },
    "Log": {
        "Output_Colsole": true,//部分日志是否输出到控制台
        "Output_csv": true,//是否将日志输出为CSV格式
        "Date_Differentiation": false//日志是否按天记录
    }
}
```

> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件  