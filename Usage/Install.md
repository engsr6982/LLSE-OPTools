# 安装/更新插件  

## 安装插件  

1. 首先,你需要确保你的**VPS/面板服**拥有[Liteloader BDS](https://www.minebbs.com/liteloader/)

2. 从**MineBBS**购买[OPTools](https://www.minebbs.com/resources/optools-op-gui.4836/)后，点击下载，下载最新版的[OPTools](https://www.minebbs.com/resources/optools-op-gui.4836/)  

3. 打开你的服务器目录，找到**Plugins**文件夹并进入
     - 没有**Plugins**文件夹？  
          - 请确保已正常安装[Liteloader BDS](https://www.minebbs.com/liteloader/)

4. 把下载的插件上传到**Plugins**文件夹下  

5. 启动你的服务器，**观察控制台**

     ```log
     21:57:44 INFO [OPTools] Loading...

                  ____  _____    _______          _
                 / __ \|  __ \  |__   __|        | |
                | |  | | |__) |    | | ___   ___ | |___
                | |  | |  ___/     | |/ _ \ / _ \| / __|
                | |__| | |         | | (_) | (_) | \__ \
                 \____/|_|         |_|\___/ \___/|_|___/

    ---- https://www.minebbs.com/resources/op-tools-op-gui.4836/ ----
                        By: PPOUI   Version: 2.2.0
     21:57:44 INFO [OPTools] 加载语言<zh_CN>
     21:57:44 INFO [OPTools] The language file was loaded successfully <zh_CN>
     21:57:44 INFO [LiteLoader] Js 插件 <OPTools> 已加载。
     ```

出现以上内容，且**无报错**代表插件安装完成

## 更新插件

1. 老样子，从**MineBBS**下载最新版的[OPTools](https://www.minebbs.com/resources/optools-op-gui.4836/)  

2. 把下载的插件上传到**Plugins**文件夹下  
     - `VPS`遇到是否覆盖请选择**覆盖**  
     - `面板`如果提示文件名重复，请删除旧版插件再上传  

3. 启动你的服务器，**观察控制台**

     ```log
     21:57:44 INFO [OPTools] Loading...

                  ____  _____    _______          _
                 / __ \|  __ \  |__   __|        | |
                | |  | | |__) |    | | ___   ___ | |___
                | |  | |  ___/     | |/ _ \ / _ \| / __|
                | |__| | |         | | (_) | (_) | \__ \
                 \____/|_|         |_|\___/ \___/|_|___/

    ---- https://www.minebbs.com/resources/op-tools-op-gui.4836/ ----
                        By: PPOUI   Version: 这里为新版本号
     21:57:44 INFO [OPTools] 加载语言<zh_CN>
     21:57:44 INFO [OPTools] The language file was loaded successfully <zh_CN>
     21:57:44 INFO [LiteLoader] Js 插件 <OPTools> 已加载。
     ```

出现以上内容，且**无报错**代表插件更新完成

> [!tip]
> 如果`更新后`遇到以下报错
>
> ```log
> 21:57:44 ERROR [OPTools] The homepage file version does not match!
> Current version: 2.0.0 Latest version: 2.2.0
> ```
>
> 请掏出你的**翻译软件**，翻译一下就知道为什么报错了
>
> - 比如上面这个, 翻译后为**主页文件版本不匹配**
>   - 解决办法参考:
>       1. 删除**主页文件**，重启服务器
>       2. 查看更新日志，自行**补全更新内容**并**更改版本号**(`不建议`)
