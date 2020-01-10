(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{378:function(e,a,o){"use strict";o.r(a);var v=o(0),t=Object(v.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"使用环境"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用环境"}},[e._v("#")]),e._v(" 使用环境")]),e._v(" "),o("p",[e._v("电脑是"),o("strong",[e._v("MacBook")]),e._v("，已经安装adb环境。")]),e._v(" "),o("h2",{attrs:{id:"抓取命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#抓取命令"}},[e._v("#")]),e._v(" 抓取命令")]),e._v(" "),o("p",[o("code",[e._v("adb logcat >/Users/svenweng/Desktop/aaa.log")]),e._v("这条命令表示抓取安卓手机中的所有日志，然后输出到"),o("code",[e._v("aaa.log")]),e._v("这个文件中，"),o("code",[e._v("Windows")]),e._v("系统的路径也类似，填写绝对路径。一旦这样打出日志后，你只要在手机上发起某些操作，就能够实时的看到。在"),o("code",[e._v("Unix")]),e._v("或者"),o("code",[e._v("Linux")]),e._v("系统上，可以使用"),o("code",[e._v("tail -f aaa.log")]),e._v("来实时打出日志。所有被推动到"),o("code",[e._v("aaa.log")]),e._v("的日志都会实时打出来。")]),e._v(" "),o("h3",{attrs:{id:"根据进程过滤"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#根据进程过滤"}},[e._v("#")]),e._v(" 根据进程过滤")]),e._v(" "),o("p",[e._v("操作类似"),o("code",[e._v("Unix")]),e._v("的命令，使用"),o("code",[e._v("|grep")]),e._v("来过滤。"),o("code",[e._v("adb logcat |grep 4333>/Users/svenweng/Desktop/aaa.log")]),e._v("，这样就只会打印"),o("code",[e._v("4333")]),e._v("这个进程的日志。\n查询进程的方式很简单.输入"),o("code",[e._v("adb shell top | grep 包名")]),e._v("。如下所示：")]),e._v(" "),o("blockquote",[o("p",[e._v("SvenWengdeMacBook-Pro:~ svenweng$ adb shell top | grep com.weizq\n7253  0  14% R    28 950800K  46000K  fg u0_a524  com.weizq\n7253  1  16% S    28 950800K  46000K  fg u0_a524  com.weizq\n7253  1   0% S    28 950800K  46000K  fg u0_a524  com.weizq")])]),e._v(" "),o("p",[e._v("上面显示的第一列就是"),o("code",[e._v("com.weizq")]),e._v("的进程（PID）")]),e._v(" "),o("h3",{attrs:{id:"log的种类"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log的种类"}},[e._v("#")]),e._v(" Log的种类")]),e._v(" "),o("p",[o("code",[e._v("Android")]),e._v("一般来说使用的Log类型有这么几个：")]),e._v(" "),o("blockquote",[o("p",[e._v("Log.v() Log.d() Log.i() Log.w() ， Log.e()以及Log.a() (android 4.0新增加的)。根据首字母对应：VERBOSE，DEBUG,INFO,WARN，ERROR,Assert。")])]),e._v(" "),o("p",[e._v("过滤的命令如下：")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("adb logcat *:e |grep PID\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("命令中的*:e就表示查看Log.e()的日志，同样可以使用grep命令来根据进程过滤需要的信息")]),e._v(" "),o("h3",{attrs:{id:"log的产生"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log的产生"}},[e._v("#")]),e._v(" Log的产生")]),e._v(" "),o("blockquote",[o("p",[e._v("什么时候会有Log文件的产生？\nLog的产生大家都知道， 大家也都知道通过DDMS来看log（这个就不用说了），但什么时候会产生log文件呢？一般在如下几种情况会产生log文件。\n1，程序异常退出，uncausedexception      （Fatal）\n2，程序强制关闭，ForceClosed (简称FC)       （Fatal）\n3，程序无响应，ApplicationNo Response（简称ANR)")])]),e._v(" "),o("ul",[o("li",[e._v("ANR")])]),e._v(" "),o("p",[e._v("ANR产生的原因如下：1、界面操作按钮的点击等待响应时间超过5秒。2、HandleMessage回调函数执行超过10秒，BroadcasterReciver里的onRecive（）方法处理超过10秒")])])}),[],!1,null,null,null);a.default=t.exports}}]);