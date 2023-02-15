// 插件配置
let HTML_Edit = {
  text: "[📝 Github Edit]({repo})\n",// 文字
  repo: "https://github.com/engsr6982/engsr6982", //仓库链接
  Position: "bottom"// 显示位置
}

function plugin(hook, vm) {
  hook.beforeEach(function (html) {
    var url = vm.config.HTML_Edit.repo + '/blob/main/' + vm.route.file;//获取仓库链接
    var Edit_HTML = vm.config.HTML_Edit.text.replace('{repo}', url);//获取文字
    var Position = String(vm.config.HTML_Edit.Position).toLowerCase();//获取显示位置
    switch (Position) {
      case "top"://顶部
        return (Edit_HTML + html);
      case "bottom"://底部
        return (html + '\n\n\n' + Edit_HTML);
      case "all"://所有
        return (Edit_HTML + html + '\n\n\n' + Edit_HTML);
      default://默认 顶部
        return (Edit_HTML + html);
    }
  });
}

window.$docsify = (window.$docsify || {})
window.$docsify["HTML_Edit"] = Object.assign(HTML_Edit, window.$docsify["HTML_Edit"])
window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin)