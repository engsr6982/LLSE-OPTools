> [!tip]
> 以下所有接口调用均为 `ll.import(命名空间)` 详见[Liteloader BDS文档](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/ScriptAPI/Ll?id=%e5%af%bc%e5%85%a5%e5%87%bd%e6%95%b0)

## 权限组接口

#### 添加一个权限组
`Permission_Group_add(name)`
- 参数:
    - name: `String`  
    权限组的名称

#### 删除一个权限组
`Permission_Group_remove(guid)`
- 参数:  
    - guid: `String`  
    权限组的GUID

#### 获取指定权限组数据
`Permission_Group_Appoint(guid)`
- 参数:  
    - guid: `String`  
    权限组的GUID
- 返回值: 权限组
- 返回值类型：`Arry<Object...>`

#### 权限组添加权限
`Permission_Group_add_Permission(guid, key)`
- 参数:  
    - guid: `String`  
    权限组的GUID
    - key: `String`  
    权限ID，详见[主页文件](./md/Main.md)的open项
- 返回值: 是否添加成功
- 返回值类型：`Boolean`

#### 权限组删除权限
`Permission_Group_remove_Permission(guid, key)`
- 参数:  
    - guid: `String`  
    权限组的GUID
    - key: `String`  
    权限ID，详见[主页文件](./md/Main.md)的open项

#### 权限组添加用户
`Permission_Group_add_user(guid, xuid)`
- 参数:  
    - guid: `String`  
    权限组的GUID
    - xuid: `String`  
    要添加的玩家XUID
- 返回值: 是否添加成功
- 返回值类型：`Boolean`

#### 权限组删除用户
`Permission_Group_remove_user(guid, xuid)`
- 参数:  
    - guid: `String`  
    权限组的GUID 
    - xuid: `String`  
    要删除的玩家XUID

#### 权限组是否存在
`Permission_Group_Examine(guid)`
- 参数:  
    - guid: `String`  
    权限组的GUID 
- 返回值: 是否存在
- 返回值类型：`Boolean`


#### 权限组是否有某个用户
`Permission_Group_User_Examine(guid, xuid)`
- 参数:  
    - guid: `String`  
    权限组的GUID 
    - xuid: `String`  
    要查询的玩家XUID
- 返回值: 是否存在
- 返回值类型：`Boolean`

#### 获取用户所在权限组
`get_Permission_Group(xuid)`
- 参数:  
    - xuid: `String`  
    要查询的玩家XUID
- 返回值: 权限组
- 返回值类型：`Boolean`   
注意：如果玩家不存在于任何一个权限组将返回`Null`

#### 用户所在权限组是否拥有权限
`Permission_Group_user(xuid, key)`
- 参数:  
    - xuid: `String`  
    要查询的玩家XUID
    - key: `String`  
    权限ID，详见[主页文件](./md/Main.md)的open项
- 返回值: 是否拥有
- 返回值类型：`Boolean`  
注意：如果玩家不存在于任何一个权限组将返回`Null`

#### 获取所有权限组
`Permission_Group_list()`
- 返回值:  权限组
- 返回值类型：`Arry<Object...>`

#### 修改权限组名称
`Permission_Group_rname(guid, name)`
- 参数:  
    - guid: `String`  
    权限组的GUID 
    - name: `String`  
    要修改的名称