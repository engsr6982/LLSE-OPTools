## 插件配置文件

- 路径
    - `./plugins/PPOUI/OPTools/config/Config.json`

### 配置文件详解

- `json文件不允许添加注释，请勿直接复制`  

```json
{
    "version": "2.4.3", //配置文件版本
    "language": "zh_CN", //语言
    "Kick_Txt": "你已被管理员踢出服务器", //踢出时默认显示内容
    "Broad_head": "§e[§d广播§r§e] §r", //广播消息头
    "Cleaner_API": 0,  //启用Cleaner_API
    "Clear_Cmd": "kill @e[type=item]",  //清理掉落物命令
    "Network": true, //网络版本检查
    "ServerStarted_Alter": true,//服务器启动时 修改初始内容  如motd等
    "Motd_txt": "",//motd内容
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