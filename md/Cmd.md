## 添加插件管理员
在确认插件正常加载的情况下  
控制台输入命令
```cmd
tools add [玩家ID]
```
> [!warning]
> [玩家ID]为玩家的名字，请不要带上[]

添加成功后会在控制台输出
```log
21:28:23 INFO [OP Tools] 玩家xxx已设置为插件管理
21:28:23 INFO [OP Tools] 重载完成
```
如果出现以下报错，请进入一次服务器后再添加
```log
21:30:40 ERROR [OP Tools] 玩家xxx不在服务器内,获取XUID失败！
```

## 移除插件管理员
> [!tip]
> 请确保要移除的管理员已被添加

控制台输入命令
```cmd
tools remove [玩家ID]
```
> [!warning]
> [玩家ID]为玩家的名字，请不要带上[]

移除成功后会在控制台输出
```log

21:27:55 INFO [OP Tools] 移除玩家xxx的插件管理成功！
21:27:55 INFO [OP Tools] 重载完成
```
如果出现以下报错，请检查输入的ID是否正确
```log
21:39:16 WARN [OP Tools] 玩家xxx不在服务器内，获取XUID失败！
```