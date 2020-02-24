(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{408:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("好久没发文章了，最近我在学习使用第三方接口来优化我的网站，这篇文章介绍两个接口吧，都是从百度API商店折腾了之后使用的，一个是天气资讯，另一个是名人名言。")]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("其实调接口很简单，原理和使用数据库的数据差不多，我们使用本地数据库的时候是通过： 连接数据库——获取数据——返回前端——前端处理这么一个流程，调用接口其实也差不多是这样，发送请求——收到数据——数据处理——返回前端——前端处理。理清思路后我们就来处理处理这块的使用方法。")]),s._v(" "),a("h2",{attrs:{id:"名人名言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名人名言"}},[s._v("#")]),s._v(" 名人名言")]),s._v(" "),a("p",[s._v("关于名人名言，我是放在我博客的首页展示。")]),s._v(" "),a("p",[s._v("整个调用流程和上文说的思路差不多，首先，进入百度API商店，传送门在这：http://apistore.baidu.com/apiworks/servicedetail/1756.html")]),s._v(" "),a("p",[s._v("查看API后，只要请求的时候带上相关参数就行了，API文档比较简单，百度API商店也给了Python的示例，不过百度的示例使用的是urllib这个python自带的库，我用的是requests这个库，对比起来requests这个库使用起来更简单，我的前端使用的是jQuery调用ajax来从Django后台异步获取数据，所以打开网页的时候你会发现这一块一开始是没有的，过了一秒后才会出现数据。废话不多说，上代码。")]),s._v(" "),a("h3",{attrs:{id:"views-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#views-py"}},[s._v("#")]),s._v(" views.py")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("famous")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("   \n  famous_word "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Mingrenmingyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" JsonResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("famous_word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_mrmy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" safe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("视图函数很简单，初始化这个类，然后返回一个json数据给前端。整个处理方法我单独写了一个common类来处理，所以还需要在views的开头引入这个方法。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("common "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Weather"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Mingrenmingyan\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"common-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-py"}},[s._v("#")]),s._v(" common.py")]),s._v(" "),a("p",[s._v("这个方法我是专门来处理一些数据的，所以会写好几个类。代码如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mingrenmingyan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    处理名人名言接口返回的数据\n    """')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        初始化相关数据,包括接口的url,headers和parm\n        :return: None\n        """')]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://apis.baidu.com/avatardata/mingrenmingyan/lookup'")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"apikey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dtype"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JSON"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"人生"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"page"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rows"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_mrmy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        从接口获取名人名言数据,随机选取一条返回,返回json数据.\n        :return:json, 名人名言数据\n        """')]),s._v("\n        wb_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wb_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error_code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            random_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("random_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("这个类是处理名人名言数据的，因为接口返回的是20条数据，因此我会随机选取一条返回给前端。")]),s._v(" "),a("h3",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[s._v("#")]),s._v(" 前端")]),s._v(" "),a("p",[s._v("在前端我是用js的ajax方法异步获取数据，所以这里我只贴js部分的代码，代码如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\nfunction famous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/get_famous/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        var famous_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parseJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("famous_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#mrmy-body'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" famous_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("famous_saying "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'</p>'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#mrmy-footer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<p>By--'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" famous_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("famous_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'</p>'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"url-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-py"}},[s._v("#")]),s._v(" url.py")]),s._v(" "),a("p",[s._v("在url部分就为前后端通讯加一条路由就行了。")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\nurl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'^get_famous'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" views"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("famous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'famous'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样一个名人名言的接口调用就完成了。")]),s._v(" "),a("h2",{attrs:{id:"天气资讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#天气资讯"}},[s._v("#")]),s._v(" 天气资讯")]),s._v(" "),a("p",[s._v("天气资讯接口的调用方式也非常简单，和这部分是一样的。我就不详细的贴了，就是一个页面一个搜索框一个展示，方法和上文说的是一样的，相信聪明的你自己就可以写出来。")])])}),[],!1,null,null,null);t.default=r.exports}}]);