## 插件配置文件
配置文件路径
```path
./plugins/PPOUI/OPTools/Config.json
```
### 配置文件详解
> [!attention]
> json文件不允许添加注释，请勿直接复制  

```json
{
    "version": "2.0.0", //配置文件版本
    "language": "zh_CN.json", //语言文件
    "Kick_Txt": "你已被管理员踢出服务器", //踢出时默认显示内容
    "Broad_head": "§e[§d广播§r§e] §r", //广播消息头
    "Cleaner_API": 0,  //启用Cleaner_API
    "Clear_Cmd": "kill @e[type=item]",  //清理掉落物命令
    "Network": true, //网络版本检查
    "Ban_Cmd": {//具体看更新日志2.1.0～2.1.1
        "Ban": "ban '${Player}' ${time} ${Reason}",
        "UnBan": "unban '${Player}'"
    }
}
```

> [!tip]
> 更改配置文件后控制台输入“tools reload”即可重新加载配置文件  