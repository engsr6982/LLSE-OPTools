## 1.x.x版本安装
> [!tip]
> 配端请自行查看加载器文档

从Minebbs上下载 OP Tools.zip  
使用压缩软件，解压缩后会得到以下文件  
```文件
OP Tools.js //插件本体
OP Tools  //插件文件夹（内含语言文件）
```
然后将以上两个文件复制或上传到Plugins文件夹

然后运行bedrock_server_mod.exe
> [!TIP]
> 面板点击启动即可

静静观察控制台
```log
20:05:31 INFO [OP Tools] 配置文件版本匹配，加载插件中
20:05:31 INFO [OP Tools] 加载成功！版本：1,4,0
20:05:31 INFO [OP Tools] 作者:PPOUI
20:05:31 INFO [OP Tools] 发布网站：https://www.minebbs.com/resources/op-tools-op-gui.4836/
20:05:31 INFO [LiteLoader]Js 插件<OP Tools>已加载
```
出现以上内容代表插件加载成功

## 更新插件

> [!tip]
> 此内容与安装插件类似
> 写给不会更新的人看的

1. 从MineBBS上下载新版本插件

2. 删除旧版本插件和配置文件

> [!tip]
> 配置文件能否保留查看[更新日志](./md/log.md)  
> 如果需保留配置文件，请按照更新日志更改的内容或对比新旧两个文件进行复制  

> [!warning]
> 若[更新日志](./md/log.md)有说明更改了配置/语言/图片/文件，请勿将旧配置文件用于新版本插件，这可能会导致插件无法正常加载！

3. 按照安装插件的方法安装插件

4. 查看控制台信息

出现以下内容即更新完成

```log
20:05:31 INFO [OP Tools] 配置文件版本匹配，加载插件中
20:05:31 INFO [OP Tools] 加载成功！版本：1,4,0（此处显示为更新后的版本）
20:05:31 INFO [OP Tools] 作者:PPOUI
20:05:31 INFO [OP Tools] 发布网站：https://www.minebbs.com/resources/op-tools-op-gui.4836/
20:05:31 INFO [LiteLoader]Js 插件<OP Tools>已加载
```

- 如果报错“配置文件版本不匹配”或报错之类的错误，请删除旧配置文件后重启服务器待插件重新生成配置文件


> [!tip]
> **更新后遇到[报错/无法加载/功能异常]等问题？**  
> 请尝试重新安装插件（删除本插件所有文件）  
> 若无法解决 请前往[常见问题](./md/QA.md)查看反馈方法