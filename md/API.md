## 前言  

我们欢迎各位开发者使用此API为商店之类的插件获取图片路径  

~~由于就一个API懒得额外再搭建文档站~~

欢迎访问线上部署的网站[点我前往](https://mcid.25565.top)

> [!warning]
> 虽然API接口对高并发有优化，但未做特殊处理，请勿重复(高频)发送无效请求  

## 绝对检索API  

> [!note]
> 何为“绝对检索”？绝对检索指你已知道“物品/方块”的ID和DV或使用LL的接口，想获取图片地址可以使用此API

> 请求地址|类型：`GET` 
```https
https://api.25565.top/serach?id=方块物品ID&dv=物品特殊值
```

### 完整请求举例

- 例如我想获取`苹果`的数据则请求发送以下请求

```https
https://api.25565.top/serach?id=minecraft:apple&dv=0
```

- 服务器响应查询到`物品/方块`则返回请求

```json
{
    "code": 200,
    "message": "查询完成",
    "data": [
        {
            "name": "苹果",  //这还要说吗？
            "id": "minecraft:apple",  //物品ID
            "dv": "0",   //物品特殊值 在LL中叫aux
            "type": "items",  //归属类  物品为items 方块为blocks
            "path": "textures/items/apple.png",  //图片地址
            "img": "./textures/items/apple.png"  //网页的预览图无视即可
        }
    ]
}
```

- 如果未查询到请求的`物品/方块`则返回

```json
{
    "cade": 404,
    "message": "未查询到请求的内容"
}
```

## 模糊检索API  

> [!note]
> 何为“模糊检索”？，模糊检索指不知道用户输入的名称是否为标准名称，一般用于网页检索[MCID检索](https://mcid.25565.top)、二次开发可以使用此API  

> 请求地址|类型`GET`  
```url
https://api.25565.top/api/web?name=“物品/方块的名称”&token=申请的Token
```

> [!warning]
> 此API请求较多，请联系获取64位Token   
> 请求未提交Token服务器返回状态码`401 ` 

### 完整请求举例  

- 例如用户在网页输入了`苹果`则发送以下请求  

```url
https://api.25565.top/api/web?name=苹果&token=64位Token
```

- 服务器响应根据请求模糊检索，检索到请求体则返回
    > 注意：服务器会返回包含`苹果`的所有条目  
```json
{
    "code":200,
    "message":"查询完成",
    "data":[
        {
            "name":"苹果",
            "id":"minecraft:apple",
            "dv":0,
            "type":"items",
            "path":"textures/items/apple.png",
            "img":"./textures/items/apple.png"
        },
        {
            "name":"金苹果",
            "id":"minecraft:golden_apple",
            "dv":0,
            "type":"items",
            "path":"textures/items/apple_golden.png",
            "img":"./textures/items/apple_golden.png"
        }
    ]
}
```

- 未检索到请求体则返回  
```json
{
    "code":404,
    "message":"未查询到请求苹果1"
}
```

> [!warning]
> 请求未发送`有效负载(如name='')`服务器返回状态码`400`  
> 请求未提交Token服务器返回状态码`401`  