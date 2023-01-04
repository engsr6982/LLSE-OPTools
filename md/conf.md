## 插件配置文件
配置文件路径
```path
./plugins/OP Tools/Config.json
```
### 配置文件详解
> [!attention]
> json文件不允许添加注释，请勿直接复制  

```json
{
    "Version": "1.2", 
    "Language": "zh_CN.json",      //语言
    "Clear_Item": "kill @e[type=item]"    //清理掉落物执行的命令（默认无需更改）
}
```

> [!tip]
> 更改配置文件后控制台输入“tools reload”即可重新加载配置文件  