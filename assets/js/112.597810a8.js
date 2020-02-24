(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{393:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),n("p",[s._v("最近由于工作需要，需要做一些"),n("code",[s._v("IDL")]),s._v("的事情，参考对象就是"),n("code",[s._v("Google Protocol Buffers")]),s._v("。学习的过程中做一些记录")]),s._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档：https://developers.google.com/protocol-buffers/"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/tree/master/python",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github：https://github.com/protocolbuffers/protobuf/tree/master/python"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("安装其实比较简单，按照步骤安装就好了，"),n("code",[s._v("Mac")]),s._v("自带的"),n("code",[s._v("Python")]),s._v("就可以直接支持，但是有几个坑需要注意")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Protocol Buffers")]),s._v("现阶段的安装包没有"),n("code",[s._v("configure")]),s._v("文件，需要自己打包")])]),s._v(" "),n("p",[s._v("从"),n("code",[s._v("Github")]),s._v("上下载下源码之后，需要运行"),n("code",[s._v("./autogen.sh")]),s._v("来自行生成"),n("code",[s._v("configure")]),s._v("文件。")]),s._v(" "),n("ul",[n("li",[s._v("生成"),n("code",[s._v("configure")]),s._v("的过程中报错"),n("code",[s._v("autoconf")]),s._v("不存在")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("brew install autoreconf\nbrew install automake\nbrew install libtool\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("用"),n("code",[s._v("brew")]),s._v("直接安装这三个东西即可解决")]),s._v(" "),n("ul",[n("li",[s._v("运行"),n("code",[s._v("python setup.py install")]),s._v("后依然会报错"),n("code",[s._v("google not found")])])]),s._v(" "),n("p",[s._v("这个报错是比较奇怪，一般来说会直接把依赖包安装完毕，但是我这里确实是遇到了这个坑，解决办法是直接手工安装"),n("code",[s._v("google")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo pip install protobuf\nsudo pip install google\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"参考官方文档撸码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考官方文档撸码"}},[s._v("#")]),s._v(" 参考官方文档撸码")]),s._v(" "),n("p",[s._v("具体的过程就不记录了，基本上完全照搬官方文档的代码，记录几个坑。")]),s._v(" "),n("h4",{attrs:{id:"proto文件的版本标识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proto文件的版本标识"}},[s._v("#")]),s._v(" proto文件的版本标识")]),s._v(" "),n("p",[n("code",[s._v('syntax = "proto2";')]),s._v("在协议文件的最上方需要标识出版本号，2和3是有一些区别的：")]),s._v(" "),n("ul",[n("li",[s._v("3中不需要定义"),n("code",[s._v("require")]),s._v("和"),n("code",[s._v("optional")]),s._v("，只有"),n("code",[s._v("repeat")]),s._v("声明仍然保留")]),s._v(" "),n("li",[s._v("3中自带默认值，不能自定义默认值，这样在序列化的时候就可以节省空间")]),s._v(" "),n("li",[s._v("3中支持map的编写")]),s._v(" "),n("li",[s._v("3中支持"),n("code",[s._v("json")]),s._v("的映射")])]),s._v(" "),n("h4",{attrs:{id:"编写的记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写的记录"}},[s._v("#")]),s._v(" 编写的记录")]),s._v(" "),n("p",[s._v("首先要根据协议生成一个"),n("code",[s._v("Python")]),s._v("对象。比如"),n("code",[s._v("addressbook_pb2")]),s._v("。有兴趣的可以直接去看这个类的内容，基本上是定义一些空类和方法的声明，具体的操作"),n("code",[s._v("API")]),s._v("还是参考官方的说明比较靠谱。")]),s._v(" "),n("p",[s._v("用"),n("code",[s._v("Python")]),s._v("操作"),n("code",[s._v("Protocol Buffers")]),s._v("的时候，有几个注意点。")]),s._v(" "),n("ul",[n("li",[s._v("操作"),n("code",[s._v("repeat")]),s._v("对象")])]),s._v(" "),n("p",[n("code",[s._v("repeat")]),s._v("对象在"),n("code",[s._v("Python")]),s._v("中的对应可以理解为是数组。如果需要新增一个数组元素的话，需要这样调用")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("phone_number "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nphone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" number\nphone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MOBILE\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("说实话，并不太符合"),n("code",[s._v("Python")]),s._v("优雅的语法。如果要再新增一个数组元素，那么就要再调用一次"),n("code",[s._v("add")]),s._v("生成一个对象。再给对象赋值。")]),s._v(" "),n("ul",[n("li",[s._v("序列化与反序列化")])]),s._v(" "),n("p",[s._v("官方文档中的序列化方法为"),n("code",[s._v("SerializeToString")]),s._v("。实际上序列化的方法还有一个是"),n("code",[s._v("SerializePartialToString")]),s._v("，它们的区别是第一个会检查是否所有的元素都被初始化了，而第二个方法不会检查。序列化之后会变成一个二进制的字符串，然而我看到的结果是这样的：\n"),n("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/15449789449465.jpg",alt:""}}),s._v("\n也就是说序列化成二进制之后，值并没有被序列化成二进制。")]),s._v(" "),n("p",[s._v("反序列化的方法为"),n("code",[s._v("ParseFromString")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"思考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[s._v("#")]),s._v(" 思考")]),s._v(" "),n("p",[n("code",[s._v("Google Protocol Buffers")]),s._v("无疑是一个不错的传输载体，优点是很明显的：")]),s._v(" "),n("ol",[n("li",[s._v("以二进制的方式来传递能够更加高效。")]),s._v(" "),n("li",[s._v("相比于"),n("code",[s._v("XML")]),s._v(","),n("code",[s._v("JSON")]),s._v("等协议来说，它更加规范化。")]),s._v(" "),n("li",[s._v("由于自身编译的机制，确保了两端的接口字段一定是对齐的，减少了一些调试的工作，也可以杜绝一些一端私自增加删除字段导致的bug问题。")]),s._v(" "),n("li",[s._v("能够自动的生成对应的解析代码。减少了代码的复杂度，更专注于业务代码的编写")])]),s._v(" "),n("p",[s._v("但是缺点也很明显：")]),s._v(" "),n("ol",[n("li",[s._v("以"),n("code",[s._v("IDL")]),s._v("的方式来定义接口，本身就是一个比较重的事情。")]),s._v(" "),n("li",[s._v("协议文件需要编译，额外增加了程序的复杂度，在一些小型项目中并不适用。")]),s._v(" "),n("li",[s._v("由于编译之后会生成对应编程语言的操作对象，因此对于编码语言也有一定的限制，所幸"),n("code",[s._v("Google")]),s._v("毕竟是大公司，主流的语言也都支持。")]),s._v(" "),n("li",[s._v("以二进制的方式传输，调试起来会有一定的复杂度。")])]),s._v(" "),n("h2",{attrs:{id:"吐槽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#吐槽"}},[s._v("#")]),s._v(" 吐槽")]),s._v(" "),n("p",[s._v("当前版本的协议已经是3.6的版本了，但是官方文档中的示例依然用的是2的版本")]),s._v(" "),n("p",[s._v("在官方文档下方的语言选择中可以看出来，是支持简体中文的，但是。。\n"),n("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/15449798674560.jpg",alt:""}}),s._v("\n你的汉化程度就只有这些也敢说支持简体中文吗？？？")]),s._v(" "),n("h2",{attrs:{id:"最后附上代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后附上代码"}},[s._v("#")]),s._v(" 最后附上代码")]),s._v(" "),n("p",[s._v("我把官方的示例做了一些修改，原来官方的示例是以文件的形式传递的，这里我修改为以"),n("code",[s._v("TCP")]),s._v("的方式传递。")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("pb_client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ecoding=utf-8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: Sven_Weng")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Email : sven_weng@wengyb.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Web   : http://www.wengyb.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" addressbook_pb2\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("PromptForAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\tperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\tperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"svenweng"')]),s._v("\n\tperson"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sven_weng@wengyb.com"')]),s._v("\n\tnumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"17700000001"')]),s._v("\n\tphone_number "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tphone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" number\n\tphone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MOBILE\n\tphone_num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tphone_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"17700000002"')]),s._v("\n\tphone_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HOME\n\n\naddress_book "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AddressBook"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nPromptForAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address_book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("people"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" address_book\n\nss "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AF_INET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SOCK_STREAM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6969")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" address_book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SerializeToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address_book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SerializeToString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("\npb_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ecoding=utf-8")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: Sven_Weng")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Email : sven_weng@wengyb.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Web   : http://www.wengyb.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" socket\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" addressbook_pb2\naddress_book "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AddressBook"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListPeople")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\taddress_book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ParseFromString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" person "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" address_book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("people"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Person ID:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  Name:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HasField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  E-mail address:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" phone_number "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("phones"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" phone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MOBILE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  Mobile phone #: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" phone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HOME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  Home phone #: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" phone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" addressbook_pb2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Person"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WORK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"  Work phone #: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" phone_number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("number\n\n\nss "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AF_INET"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SOCK_STREAM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6969")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Wait for connection ...'")]),s._v("\n\tsock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tdata "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tListPeople"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);