## 常见问题解答  
**版本更新问题**  
<font color=#008000>LL插件自动适配新版本</font>
> [!tip]
> 除LL更新后插件出现报错、功能异常会更新，其余不会单独发更新
***

**遇到Bug/控制台报错？**
1.请确保你是按照要求安装的插件
2.请尝试重装插件，若依然无法解决
请在Minebbs讨论区反馈问题
> [!tip]
> 反馈时，请提交以下信息
> 1. 问题类型（全新安装/更新/其他）
> 2. Liteloader版本
> 3. BDServer版本
> 4. 报错截图/内容
> 5. 复现方法（可选）

***

**多语言更新后出现以下报错？**
```log
08:12:58 ERROR (LiteLoader] Fail in Loading Script Plugin!
08:12:58 ERROR [LiteLoader] Fail to load./plugins/OP Tools.js!
08:12:58 ERROR [LiteLoader] InPlugin: OP Tool
08:12:58 ERROR [LiteLoader] script::Exception
unexpected token:'undefined'
   at <input>: 1
   at parse (native)
   at‹eval> (./plugins/OP Tools.js:1)
```
- 问题原因：  
1.未安装多语言的语言包  
2.删除了默认中文语言包  
3.更改了默认语言包文件名  

> [!tip]
> 更改其他语言？  
> 打开配置文件Config.json  
> 找到配置项Language  
> 将zh_CN.json改成xxx.json  
> （xxx为你要更改的语言文件名）  
> 也可以在游戏内使用/tools set 打卡GUI更改  

***

**看到有更新，文档站却没有内容？**  
刷新，若刷新无法解决  
清除浏览器缓存后再访问文档站

**安全性问题**  
插件所有执行的命令都是预设好的  
<font color=#FF000>无任何联网功能</font>  
~~我也没那闲功夫学习植后门~~

***

**添加新功能**  
可以按用户要求进行功能添加  
但不是重复造车轮

