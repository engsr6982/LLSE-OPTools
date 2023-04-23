## 函数指南
> [!warning]
> 本页仅适用于2.5.3版本以后的OPTools  
> 本页更新可能不及时，请以JS为准  

### 目录结构
```dir
📁 Plugins目录
├── 📁 PPOUI
│   ├── 📁 OPTools
│   │   ├── 📁 config  //存储配置文件
│   │   │   └── 📄 Config.json  //配置文件
│   │   ├── 📁 data  //存储用户的数据
│   │   │   ├── 📄 BindCmd.json  //命令绑定
│   │   │   ├── 📄 BlackCmd.json  //命令黑名单
│   │   │   ├── 📄 ButtonData.json  //按钮文件
│   │   │   ├── 📄 MainGUI.json  //主页文件
│   │   │   ├── 📄 PotionData.json  //药水文件
│   │   │   ├── 📄 UserData.json  //用户文件
│   │   │   └── 📄 ...
│   │   ├── 📁 lang  //存储翻译文件
│   │   │   └── 📄 language.json  //语言文件
│   │   ├── 📁 lib  //存储核心JS
│   │   │   └── 📄 ...
│   │   └── 📁 plugins  //存储功能JS
│   │       └── 📄 ...
│   └── 📁 其他插件
└── 📄 OPTools.js  //主JS（入口文件）
```

## 导出函数  

`Config.js`
```javascript
exports.Config = Config;//配置文件对象
exports.Main_Data = Main_Data;//配置文件对象
exports.User_Data = User_Data;//配置文件对象
exports.Button_Data = Button_Data;//配置文件对象
exports.Reloads = Reloads;//函数
```

`FileCache.js`
```js
exports.Config_init = Config_init;//JSON
```

`Func_Module.js`
```js
exports.Func_Module = Func_Module;//对象函数
```

`header.js`
```js
exports.default = {
    PLUGINS_NAME,//常量
    PLUGINS_JS,//常量
    PLUGINS_VERSION,//常量
    PLUGINS_ZZ,//常量
    PLUGINS_URL,//常量
    Gm_Tell,//变量
    Path//常量
};
```

`i18n.js`
```js
exports.Tr = Tr;//函数 默认翻译文件
```

`Permission_Group.js`
```js
exports.Permission_Group = Permission_Group;//对象函数
```

`.js`
```js

```


