## 插件配置文件

- 路径
    - `./plugins/PPOUI/OPTools/data/BindCmd.json`

### 配置文件详解

- `json文件不允许添加注释，请勿直接复制`  

```json
[
    {
        "Cmd": "test",//命令名称
        "Describe": "测试",//命令描述
        "PermType": "Any",//命令权限 Any 所有玩家 Admin管理员OP
        "PluginVerification": true,//启用插件权限组
        "Type": "ConsoleCmd_Ui"//此命令要绑定的功能  填内部函数名 详见配置文件-主页文件
    }
]
```

> 更改配置文件后**控制台**输入`tools reload`即可重新加载配置文件  