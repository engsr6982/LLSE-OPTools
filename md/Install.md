## 安装插件
> [!warning]
> 本页分为1.0版本和2.0版本的安装/更新教程   
> 请注意版本！

### 2.x.x版本安装   
> [!warning]
> 请确保你已安装Liteloader，如果未安装请安装后再阅读本教程！    

1. 从MineBBS上下载插件，2.0版本为单文件
下载后得到文件“OPTools.js”  
2. 上传/复制/移动 到Plugins文件夹
3. 运行B e dedrock_Server_Mod.exe   
> [!TIP]
> 面板点击启动即可

4. 观察控制台出现以下内容且无报错代表安装完成
```log
14:15:41 INFO [LiteLoader] 加载 Js 插件...
14:15:41 INFO [OPTools] Loading....
         ██████╗ ██████╗ ████████╗ ██████╗  ██████╗ ██╗     ███████╗
        ██╔═══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
        ██║   ██║██████╔╝   ██║   ██║   ██║██║   ██║██║     ███████╗
        ██║   ██║██╔═══╝    ██║   ██║   ██║██║   ██║██║     ╚════██║
        ╚██████╔╝██║        ██║   ╚██████╔╝╚██████╔╝███████╗███████║
         ╚═════╝ ╚═╝        ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
    ------https://www.minebbs.com/resources/op-tools-op-gui.4836/------
                        By: PPOUI  Version: 2,0,0
14:15:41 ERROR [OPTools] [错误捕获] 检测到语言包不存在！ 已释放简体中文语言包
14:15:41 ERROR [OPTools] [Error Capture] It was detected that the language package did not exist! Simplified Chinese language package released
14:15:41 INFO [OPTools] 成功加载语言文件<zh_CN.json>
14:15:41 INFO [OPTools] The language file was loaded successfully <zh_CN.json>
14:15:41 INFO [LiteLoader] Js 插件 <OPTools> 已加载。
``` 

### 1.x.x版本安装
> [!warning]
> 请确保你已安装Liteloader，如果未安装请安装后再阅读本教程！    

从Minebbs上下载 OP Tools_1.x.x.zip  
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

2. 根据更新日志给出的提示，删除某些不兼容的文件

> [!warning]
> 若[更新日志](./md/Update.md)有说明更改了配置/语言/图片/文件，请勿将旧配置文件用于新版本插件，这可能会导致插件无法正常加载！   
> 如果需保留配置文件，请按照更新日志更改的内容或对比新旧两个文件进行复制  

3. 按照安装插件的方法安装插件

4. 查看控制台信息

出现以下内容且无报错代表更新完成

```log
20:05:31 INFO [LiteLoader]Js 插件<OP Tools>已加载
```

- 如果报错“配置文件版本不匹配”或报错之类的错误，请删除旧配置文件后重启服务器待插件重新生成配置文件