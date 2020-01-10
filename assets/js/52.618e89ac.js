(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{441:function(t,a,s){"use strict";s.r(a);var i=s(0),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("准备工作其实是比较简单了，现阶段我测试的是安卓，所以就需要准备一台安卓手机了，在环境准备中已经把电脑的环境变量配置完毕了，所以现在需要的就是一些安卓测试的一些前奏知识。")]),t._v(" "),s("h2",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("操作系统：Mac OS X EI Caption")]),t._v(" "),s("p",[t._v("Appium: 1.4.16")]),t._v(" "),s("p",[t._v('Java: java version "1.7.0_79"')]),t._v(" "),s("p",[t._v("node.js: v5.3.0")]),t._v(" "),s("p",[t._v("npm: 3.3.12")]),t._v(" "),s("p",[t._v("一切的前提，需要配置好环境")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"获取包名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取包名"}},[t._v("#")]),t._v(" 获取包名")]),t._v(" "),s("p",[t._v("我这里假设是我们都没有源码的情况下，有源码当然比较简单，如果只有一个apk文件，我们要获取包名的方式也一样很简单。在终端中输入下列命令：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb logcat ActivityManager:I *:s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然后打开需要测试的APP，找到topActivity.packageName，里面就是待测应用的包名了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ww3.sinaimg.cn/mw690/811987cbgw1f20rbgiuv4j20wi0kcqcu.jpg",alt:"示例"}})]),t._v(" "),s("p",[t._v("这条命令的实质就是Android手机的日志打印之后，通过管道符过滤，LInux也同样有效，Windows可能就没办法使用这条命令了，当然，windows的朋友可以使用管道符之前的命令，然后找到topActivity.packageName。也同样可以获取到包名。")]),t._v(" "),s("h2",{attrs:{id:"当前activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前activity"}},[t._v("#")]),t._v(" 当前Activity")]),t._v(" "),s("p",[t._v("同样是无源码，也可以通过命令来获取当前Activity。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Mac/Linux： adb shell dumpsys window windows | grep mFocusedApp\nWindows: adb shell dump sys window windows  并且手动查找mFocusedApp行\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("效果如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/811987cbgw1f20ri5te6xj21kw11ok72.jpg",alt:"效果图"}})]),t._v(" "),s("h2",{attrs:{id:"获取页面元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取页面元素"}},[t._v("#")]),t._v(" 获取页面元素")]),t._v(" "),s("p",[t._v("Appium和Selenium一样，需要通过一些元素来定位，达到自动化测试的目的，这里我使用的是Android Studio里面的一个工具：Android Device Monitor。")]),t._v(" "),s("p",[t._v("这个工具可以获取屏幕快照，然后点击相关元素就可以获得上面的信息了，如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ww1.sinaimg.cn/mw690/811987cbgw1f20rlzwtwwj21kw103thr.jpg",alt:"示例图"}})]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("熟悉使用这些东西，我们就可以开始Appium之旅了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);