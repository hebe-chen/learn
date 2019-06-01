require.config({
  baseUrl:'amd', //默认加载模块的行为,该路径是绝对路径,不是相对于main.js的路径
  paths:{ //对模块的加载行为(加载路径)进行自定义
    jquery:'../js/jquery.min',
    peity:'../js/jquery.peity.min'
  },
  shim:{ //用来配置不兼容的模块
    peity:{
      deps:['jquery'], //依赖
      exports:'$.fn.peity' //表明该模块外部调用时的名称
    },
    hello:{
      exports:'hello'
    }
  }
})
// 非规范的模块,配置兼容之后,也还是没有导出一个对象,用require加载之后,可以无需用对象调用
require(['cat', 'hello', 'peity'],function(cat, peity){
  cat.say()
  test() //非规范的模块不要用导出对象调用
  $('.line').peity('line')
})