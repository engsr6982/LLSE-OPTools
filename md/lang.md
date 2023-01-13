语言包文件路径
```path
./plugins/PPOUI/OPTools/Config.json
```

### 语言文件详解
> [!attention]
> json文件不允许添加注释，请勿直接复制

> [!tip]
> 欢迎自行翻译制作其他语言包并发布到Minebbs

```json
{
  "version": "2.0.0",
  "lang": "默认中文语言包",
  "reloads": "重载完成",
  "cmd.gui": "管理工具",
  "cmd.gui.set": "管理工具｜设置",
  "gui.main": "请选择一个操作",
  "kick.drop": "选择需要踢出的玩家",
  "kick.input.tip": "踢出时显示的内容",
  "switch": "确认",
  "kick.ui.succes": ["成功踢出","踢出失败，请重试"],
  "kill.drop": "选择一个需要Kill的玩家\nTip: 创造模式的玩家也能Kill",
  "kill.ui.succes": ["成功Kill玩家","Kill玩家失败 ID："],
  "weather.ui.txt": "滑动选择天气",
  "weather.ui.slider.txt": "<晴天>---------------<雨天>---------------<雷暴>\n\n已选择",
  "weather.ui.slider":["晴天","雨天","雷暴"],
  "weather.ui.succes": ["成功将天气更改为","更改天气失败，请重试"],
  "time.ui.txt": "滑动选择时间",
  "time.ui.slider.txt": "<上午>---<中午>--<傍晚>--<晚上>--<深夜>---<凌晨>\n\n已选择",
  "time.ui.slider": ["上午","中午","傍晚","晚上","深夜","凌晨"],
  "time.ui.succes": ["成功更改游戏时间为","更改游戏时间失败，请重试"],
  "news.ui.txt": "输入要广播的内容",
  "news.ui.slider.txt": "选择广播等级 默认普通消息\n\n<普通消息>--------<聊天消息>--------<物品栏消息>\n\n已选择",
  "news.ui.slider": ["普通消息","聊天消息","物品栏消息"],
  "news.ui.succes": ["广播成功！","广播失败，请重试"],
  "motd.ui.txt": "输入要更改的Motd内容",
  "motd.ui.succes": ["更改MOTD成功！","更改MOTD失败，请重试"],
  "player.ui.txt": "输入要设置的最大人数",
  "input.num": "检测到输入的内容不是数字，请重试！",
  "player.ui.succes": ["设置人数成功！","设置人数失败，请重试"],
  "item.succes": ["清理成功！","清理失败，请重试！"],
  "tp.here.ui.slider": ["传送玩家","玩家传玩家","玩家传坐标"],
  "tp.here.slider.txt": "<传送玩家>--------<玩家传玩家>-------<玩家传坐标>\n\n已选择",
  "tp.player.ui.txt": "选择一个玩家",
  "tp.player.ui.swich": ["自己传送至玩家","玩家传送至自己"],
  "tp.player.ui.succes": ["传送成功！","传送失败！请重试！"],
  "tp.here.ui.txt": "请选择一个操作",
  "tp.player.ui.drop": ["选择一个需传送的玩家","选择一个目标玩家"],
  "tp.player.ui.input": "输入坐标 XYZ\n注：坐标XYZ请使用空格隔开",
  "tp.player.ui.xyz.succes": ["传送成功！","传送失败！请检查输入坐标是否正确！\n§e输入的坐标 §c"],
  "tp.player.Dimensions.txt": "选择一个维度",
  "tp.player.Dimensions": ["主世界","地狱","末地"],
  "gmode.ui.slider.txt": "滑动选择模式\n\n<生存>--------<创造>--------<冒险>--------<旁观>\n\n已选择",
  "gmode.ui.swich": ["更改自己","更改玩家"],
  "gmode.ui.slider": ["生存","创造","冒险","旁观"],
  "gmode.ui.succes": ["成功更改游戏模式\n变动值:","更改游戏模式失败! \n变动值："],
  "grule.ui.txt": "选择需要设置的游戏规则",
  "grule.ui.modalform": ["开启或关闭游戏规则\n","开启","关闭"],
  "grule.ui.success": ["更改游戏规则完成\n更改值： ","更改游戏规则失败\n错误值："],
  "block.ui.txt": "选择需要获取的方块",
  "block.ui.success": ["获取成功！","获取失败！"],
  "block.ui.light": "请输入光源等级",
  "block.ui.light.number": "请按要求输入数值！",
  "getblock.input": "请输入数量",
  "crash.ui.success": ["崩溃玩家客户端成功！","崩溃玩家客户端失败！请重试"],
  "talk.ui.input": "输入要说的内容",
  "talk.ui.dropdown": "选择一个玩家(受害者)",
  "talk.ui.success": ["执行成功！","执行失败！请重试！"],
  "close": "表单已放弃",
  "consolecmd.input": "• 输入待执行的命令",
  "player.cmd.success": ["以玩家身份执行命令成功！","执行失败！请重试！"],
  "tell.input.msg": "输入待发送的消息",
  "tell.send.mode": "选择发送消息显示的位置\n\n已选择",
  "tell.mode": ["普通消息","聊天消息","成就消息","音乐盒消息","物品栏上方消息"],
  "tell.input.title": "输入成就消息的标题",
  "rule.input.speed": "输入要设置的随机刻",
  "rule.speed.success": ["设置随机刻完成","设置随机刻失败!"],
  "ban.success": ["封禁成功","封禁失败"],
  "unban.success": ["解禁成功","解禁失败"],
  "ui.setepslider": "§e模式§r",
  "cmd.error": "错误！您无权访问OP Tools管理工具！",
  "ban.reason": "封禁原因",
  "ban.time": "封禁时长(分钟)",
  "ban.step.txt": "选择操作类型\n已选择",
  "ban.player": "选择需要封禁的玩家",
  "ban.step": ["封禁玩家","解禁玩家"],
  "cmd.add": "添加插件管理员",
  "game.player": "玩家",
  "cmd.xuid.error": "不在服务器内，获取XUID失败！",
  "cmd.add.op": "已设置为插件管理",
  "cmd.add.error": "已是插件管理，请勿重复添加！",
  "cmd.remove.op": "删除插件管理员",
  "cmd.remove": "成功移除插件管理员",
  "set.button": ["插件设置","热重载插件","重载配置文件"],
  "set.lang":"选择语言文件",
  "set.input": ["踢出默认内容","广播消息头","清理掉落物命令(启用Cleaner时不可用)"],
  "set.cleaner": "启用Cleaner API清理",
  "input.null": "检测到输入框为空，执行失败"
}
```