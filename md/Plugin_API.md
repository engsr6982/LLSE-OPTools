> [!warning]
> 注意：API接口的返回值可能会随插件更新变动，具体以插件内部为准

## 内部表单接口   
> 注意：此接口只需传入**玩家名或XUID**即可打开对应功能的表单，无任何权限检查，使用时请注意安全

**导入接口**
```javascript
const Form_inside_API = ll.import('Form_inside_API');
```

`Form_inside_API(name/xuid, func)`
- 参数:
    - name/xuid: `String`
    传入玩家名或XUID
    - func: `String`
    内部功能函数    
    详见[主页文件-内部函数表](./md/Main.md)

**调用举例**
```javascript
const Form_inside_API = ll.import('Form_inside_API');
Form_inside_API('steve', 'Kick_Ui'); // 向Steve发送“踢出玩家”表单
```

***

## 权限组接口

**导入接口**
```javascript
const PERMISSION_GROUP = ll.import('PERMISSION_GROUP');
```

`PERMISSION_GROUP(type,str1,str2)`
- 参数：   
    - type： `String`   
    操作类型，详见操作类型表   
    - str1: `String`  
    参数1
    - str2: `String`  
    参数2

|类型(type)|参数(str1,str2)|返回值|返回值类型|功能|
|--|--|--|--|--|
|CREATE_GROUP|`name`权限组名称|权限组GUID|`String`|创建权限组|
|DELETE_GROUP|`guid` 权限组ID|无|无|删除权限组|
|ADD_PERMISSION|`guid` 权限组ID, `key` 权限值|是否添加成功|`Boolean`|添加权限|
|DELETE_PERMISSIONS|`guid`权限组ID,` key` 权限值|无|无|删除权限|
|ADD_USER|`guid` 权限组ID,`xuid` 玩家XUID|是否添加成功|`Boolean`|添加用户|
|DELETE_USER|`guid` 权限组ID,`xuid` 玩家XUID|无|无|删除用户|
|INSPECTION_TEAM|`guid` 权限组ID|是否存在|`Boolean`|权限组是否存在|
|AFTER_INSPECTION|`guid` 权限组ID,`xuid` 玩家XUID|是否存在|`Boolean`|权限组是否有某个用户|
|USERS_GROUP|`xuid` 用户XUID|权限组|`Boolean`,不存在则返回`Null`|获取用户所在权限组|
|CHECK_PERMISSIONS|`xuid` 用户XUID,`key` 权限值|是否拥有|`Boolean`不存在则返回`Null`|用户所在权限组是否拥有权限|
|ALL_GROUPS|无参数|权限组|`Arry<Object...>`|获取所有权限组|
|GET_GROUP|`guid` 权限组|权限组|`Arry<Object...>`|获取指定权限组数据|
|RENAME_GROUP|`guid` 权限组ID，`name` 要更改的名称|无|无|修改权限组名称|

**调用举例**
```javascript
const PERMISSION_GROUP = ll.import('PERMISSION_GROUP');// 导入接口
let id = PERMISSION_GROUP('CREATE_GROUP','新建权限组');//创建一个名为“新建权限组”的权限组,并获取GUID
PERMISSION_GROUP('ADD_PERMISSION',id,'Kick_Ui');// 给刚刚创建的权限组，添加“踢出玩家”的权限
```