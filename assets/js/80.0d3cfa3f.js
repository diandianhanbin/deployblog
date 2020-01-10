(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{421:function(a,s,n){"use strict";n.r(s);var e=n(0),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537976617927228.jpg",alt:"de3a0cf6eb61abffb6e02d79d5c51bb4"}})]),a._v(" "),n("p",[a._v("真的是非常难得的周末啊，好不容易可以静下心来慢慢的学习，慢慢的整理一些东西。")]),a._v(" "),n("h2",{attrs:{id:"一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一"}},[a._v("#")]),a._v(" 一")]),a._v(" "),n("p",[a._v("第一次见到Git的这个功能，我简直惊呆了。尤其是我这种非专业开发人员，常年线性撸代码，简直就是福音啊！")]),a._v(" "),n("h2",{attrs:{id:"二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二"}},[a._v("#")]),a._v(" 二")]),a._v(" "),n("p",[a._v("我们来做一个实验，首先先在本地生成一个"),n("code",[a._v("git仓库")]),a._v("，建立一个文件叫做"),n("code",[a._v("file")]),a._v(".里面的内容是五行A。如下所示：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SvenWeng@wengyanbin:~/Desktop/gittest|master\n⇒  echo a > file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  echo a >> file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  echo a >> file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  echo a >> file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  echo a >> file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  cat file\na\na\na\na\na\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("p",[a._v("现在把我们的文件提交。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  git add file\nSvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  git commit -am'init'\n[master (root-commit) a3e5e97] init\n 1 file changed, 5 insertions(+)\n create mode 100644 file\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("h2",{attrs:{id:"三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三"}},[a._v("#")]),a._v(" 三")]),a._v(" "),n("p",[a._v("提交文件之后，我们对文件做一些修改。修改内容如下：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("diff --git a/file b/file\nindex 72e1fe3..a39bec5 100644\n--- a/file\n+++ b/file\n@@ -1,5 +1,5 @@\n+ab\n a\n a\n a\n-a\n-a\n+abc\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("p",[a._v("第一行，把a变成了ab,第五行，我把a变成了abc。那么就存在两个地方修改，现在要把这两个地方修改分次提交上去。")]),a._v(" "),n("h2",{attrs:{id:"四"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四"}},[a._v("#")]),a._v(" 四")]),a._v(" "),n("p",[a._v("我们使用"),n("code",[a._v("git add -p")]),a._v("。得到如下结果：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  git add -p\ndiff --git a/file b/file\nindex 72e1fe3..a39bec5 100644\n--- a/file\n+++ b/file\n@@ -1,5 +1,5 @@\n+ab\n a\n a\n a\n-a\n-a\n+abc\nStage this hunk [y,n,q,a,d,/,s,e,?]?\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br")])]),n("p",[a._v("最后一句"),n("code",[a._v("Stage this hunk [y,n,q,a,d,/,s,e,?]?")]),a._v("是让我们选择一种方式，我们选择"),n("code",[a._v("s")]),a._v("，表示我们要做"),n("code",[a._v("拆分（split）")]),a._v("。拆分之后，我们可以查看拆分的内容。输入"),n("code",[a._v("g")]),a._v("可以查看拆分的区块：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Stage this hunk [y,n,q,a,d,/,j,J,g,e,?]? g\n  1:  -1,3 +1,4          +ab\n  2:  -1,5 +2,4          -a\n  go to which hunk?\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("最后一句"),n("code",[a._v("go to which hunk?")]),a._v("是问我们跳转到哪个区块。我们选择1。")]),a._v(" "),n("p",[a._v("进入1之后，我们选择"),n("code",[a._v("y")]),a._v("表示提交这一块。选择"),n("code",[a._v("y")]),a._v("之后，会吧第二个区块展示给我们看，这个时候我们输入"),n("code",[a._v("q")]),a._v("表示退出。然后我们提交，这时会出现一个很有意思的情况，我们看这个：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("SvenWeng@wengyanbin:~/Desktop/gittest|master⚡\n⇒  git status -s\nMM file\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[n("code",[a._v("file")]),a._v("这个文件一部分在暂存区，一部分在修改区")]),a._v(" "),n("h2",{attrs:{id:"五"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五"}},[a._v("#")]),a._v(" 五")]),a._v(" "),n("p",[a._v("我们做一次提交查看一次不同:")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("diff --git a/file b/file\nindex fc27ec6..a39bec5 100644\n--- a/file\n+++ b/file\n@@ -2,5 +2,4 @@ ab\n a\n a\n a\n-a\n-a\n+abc\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])]),n("p",[a._v("现在就之后一处修改暂未提交了。我们再次提交。")]),a._v(" "),n("p",[a._v("使用"),n("code",[a._v("git log")]),a._v("查看一下提交的记录：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("commit a0804d4aa4fa413c74c6f03e9fb938036b4d1a8d\nAuthor: 翁彦彬 <diandianhanbin@gmail.com>\nDate:   Sun Jul 3 15:39:17 2016 +0800\n\n    hunk2 commit\n\ncommit 85e1635c6542b47d40ea74dacfce3ba68dfaa677\nAuthor: 翁彦彬 <diandianhanbin@gmail.com>\nDate:   Sun Jul 3 15:36:35 2016 +0800\n\n    hunk1 commit\n\ncommit a3e5e97a6e7eaacc2acdcf5fc20c7947b168d587\nAuthor: 翁彦彬 <diandianhanbin@gmail.com>\nDate:   Sun Jul 3 15:24:06 2016 +0800\n\n    init\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br")])]),n("p",[a._v("可以很清楚的看到，我们提交了三次，第一次是init，第二次是hunk1 commit，第三次是hunk2 commit。")]),a._v(" "),n("h2",{attrs:{id:"六"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六"}},[a._v("#")]),a._v(" 六")]),a._v(" "),n("p",[a._v("当然，我们也可以查看每次提交的不同的具体位置。")]),a._v(" "),n("p",[a._v("使用"),n("code",[a._v("git show head -2")]),a._v("表示查看近两次提交的不同点。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("commit a0804d4aa4fa413c74c6f03e9fb938036b4d1a8d\nAuthor: 翁彦彬 <diandianhanbin@gmail.com>\nDate:   Sun Jul 3 15:39:17 2016 +0800\n\n    hunk2 commit\n\ndiff --git a/file b/file\nindex fc27ec6..a39bec5 100644\n--- a/file\n+++ b/file\n@@ -2,5 +2,4 @@ ab\n a\n a\n a\n-a\n-a\n+abc\n\ncommit 85e1635c6542b47d40ea74dacfce3ba68dfaa677\nAuthor: 翁彦彬 <diandianhanbin@gmail.com>\nDate:   Sun Jul 3 15:36:35 2016 +0800\n\n    hunk1 commit\n\ndiff --git a/file b/file\nindex 72e1fe3..fc27ec6 100644\n--- a/file\n+++ b/file\n@@ -1,3 +1,4 @@\n+ab\n a\n a\n a\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br")])]),n("p",[a._v("可以很清晰的看到，hunk1修改的是第一行我把a变成ab的结果。hunk2是我把a变成abc的结果。")])])}),[],!1,null,null,null);s.default=t.exports}}]);