# /data/BindCmd.json

## 命令绑定配置文件

> 此文件用于给OPTools内部的一些功能绑定到一个单独的命令上，通过绑定的命令打开绑定的功能

- 路径
  - `./plugins/PPOUI/OPTools/data/BindCmd.json`

### 文件详解

- `json文件不允许添加注释，请勿直接复制`  

```json
[
    {
        "Cmd": "test",//命令名称
        "Describe": "测试",//命令描述
        "PermType": "Any",//命令权限 Any 所有玩家 Admin管理员OP
        "PluginVerification": true,//启用插件权限组
        "Type": "ConsoleCmd_Ui"//此命令要绑定的功能  填内部函数名 内部函数定义在首页
    }
]
```

> [!warning]
> 注意：绑定命令只能在服务器启动时绑定，不能热重载，修改了BindCmd文件只能重启服务器！
