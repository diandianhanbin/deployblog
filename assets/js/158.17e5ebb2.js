(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{341:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("在使用RobotFramework的过程中，会发现写起来跟写代码有点类似，但是比起直接写代码，RobotFramework又有点奇怪，这里总结一下RobotFramework的使用过程中的一些奇淫技巧，本文主要涉及的是变量。")]),s._v(" "),t("h2",{attrs:{id:"标量和链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标量和链表"}},[s._v("#")]),s._v(" 标量和链表")]),s._v(" "),t("p",[s._v("在RobotFramework中，标量指的是"),t("code",[s._v("${}")]),s._v(",链表指的是"),t("code",[s._v("@{}")]),s._v(",大括号中间的变量名如果是一样的，那么就是一个变量，不过有一个很明显的区别，当使用标量时，整个值就会是一个整体，而使用链表的时候，则是一个个分散的个体。")]),s._v(" "),t("p",[s._v("举个例子：")]),s._v(" "),t("p",[s._v("在写脚本的过程中，经常会遇到要写FOR循环，比如下面一个例子：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Test Cases ***\ntest\n    ${t}    create list     abcde   fghijk\n    :FOR    ${x}    IN      ${t}\n    \\   log     ${x}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然而，你会发现这样执行是错的，并没有吧"),t("code",[s._v("${t}")]),s._v("给迭代出来。正确的姿势应该是这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Test Cases ***\ntest\n    ${t}    create list     abcde   fghijk\n    :FOR    ${x}    IN      @{t}\n    \\   log     ${x}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("第一个脚本中，For循环迭代的是一个标量，也就是一个整体，执行结果就会把整个"),t("code",[s._v("list")]),s._v("打印出来，而第二个脚本中，迭代的是一个链表，也就是分散的个体，所以在循环的时候会被全部迭代出来打印。")]),s._v(" "),t("p",[s._v("再看一个直观的例子。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Settings ***\nLibrary     Collections\n\n*** Variables ***\n@{t}    1   2   3\n\n*** Test Cases ***\ntest\n    log list    @{t}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("上面的例子看脚本没毛病，直接打印定义的list变量"),t("code",[s._v("@{t}")]),s._v(",但是执行的时候你会发现，执行失败了，报错"),t("code",[s._v("Keyword 'Collections.Log List' expected 1 to 2 arguments, got 3.")]),s._v("，这里的"),t("code",[s._v("@{t}")]),s._v("使用的是链表，所以相当于这个位置你给了1，2，3三个参数，而"),t("code",[s._v("log list")]),s._v("方法只能接受两个参数，所以这里报错了。")]),s._v(" "),t("h2",{attrs:{id:"变量标识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量标识"}},[s._v("#")]),s._v(" 变量标识")]),s._v(" "),t("p",[t("code",[s._v("${}")]),s._v("这个表示定义一个变量，当然，在定义数字的时候，加上这个标识才是数值类型，比如：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Test Cases ***\ntest\n    ${a}    set variable    ${4}\n    ${b}    set variable    4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中a获得的是数字4，b获得的是字符串4。在json中的提现就是"),t("code",[s._v('{“a”: 4, "b": "4"}')])]),s._v(" "),t("p",[s._v("布尔值真假用的是"),t("code",[s._v("${true}")]),s._v("和"),t("code",[s._v("${false}")])]),s._v(" "),t("p",[s._v("空格用的是"),t("code",[s._v("${SPACE}")])]),s._v(" "),t("p",[s._v("空变量用的是"),t("code",[s._v("${EMPTY}")])]),s._v(" "),t("h2",{attrs:{id:"变量扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量扩展"}},[s._v("#")]),s._v(" 变量扩展")]),s._v(" "),t("p",[s._v("RobotFramework的变量可以很好的支持扩展，使用得当可以事半功倍。")]),s._v(" "),t("h3",{attrs:{id:"变量拼接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量拼接"}},[s._v("#")]),s._v(" 变量拼接")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Test Cases ***\ntest\n    ${ip}       set variable    192.168.9.1\n    ${a}        set variable  p\n    log     ${i${a}}\n====>\t192.168.9.1    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("上面的拼接方式中，RobotFramework会首先解析"),t("code",[s._v("${a}")]),s._v("这个变量，然后变量就变成了"),t("code",[s._v("${ip}")]),s._v("，最终结果打印的就是"),t("code",[s._v("${ip}")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"字典列表元素值的获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字典列表元素值的获取"}},[s._v("#")]),s._v(" 字典列表元素值的获取")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("字典取值示例\n*** Test Cases ***\ntest\n    ${a}    create dictionary   a=1     b=2\n    log     ${a['a']}\n====>\t1    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("RobotFramework的字典值的获取方式非常简单，跟"),t("code",[s._v("Python")]),s._v("是一个套路，")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("列表取值示例\n*** Test Cases ***\ntest\n    ${a}    create list   a     b\n    log     ${a[0]}\n====>\ta    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("当然，字典和列表是可以串在一起取值的，比如这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Test Cases ***\ntest\n    ${b}    create dictionary   a=1\n    ${c}    create dictionary   b=2\n    ${a}    create list   ${b}  ${c}\n    log     ${a[0]['a']}\n    \n====>\t1    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"变量文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量文件"}},[s._v("#")]),s._v(" 变量文件")]),s._v(" "),t("p",[s._v("常用的变量文件的定义方式主要是在"),t("code",[s._v("*.robot")]),s._v("文件中定义"),t("code",[s._v("Variable")]),s._v("，值得一提的是，"),t("code",[s._v("*.py")]),s._v("是可以作为RobotFramework的变量文件的。相比于RobotFramework，Python的格式定义更清晰一些，而且也是支持字段和列表类型，例如：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TEST'")]),s._v("\nDICT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CONFIG"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nLIST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Settings ***\nVariables  test.py\n\n*** Test Cases ***\ntest\n    log     ${OBJ}\n    log     ${DICT['CONFIG']}\n    log     ${LIST[0]}\n\n====>\nTEST\nTEST\n1    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("如果只是这样，那么变量文件用"),t("code",[s._v("*.py")]),s._v("就没意义了，引入"),t("code",[s._v("py")]),s._v("的变量文件的意义在于，能够动态的获取数据，举个例子：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Settings ***\nVariables  test.py\n\n*** Test Cases ***\ntest\n    log     ${OBJ}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("每次执行时，获取的值都是1到100之间的随机数。同理，也可以自定义返回的规则，这种方式在某些报文字段生成时，可以非常方便的给自己的规则。")]),s._v(" "),t("p",[s._v("如果你定义的是一个对象，那么还可以直接执行对象里面的方法。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" random\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("random")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nOBJ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("*** Settings ***\nVariables  test.py\n\n*** Test Cases ***\ntest\n    log     ${OBJ.random()}\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);