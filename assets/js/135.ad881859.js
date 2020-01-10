(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{358:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("最近接手的"),s("code",[t._v("某平台")]),t._v("的某个服务与业务的通讯交互方式是通过"),s("code",[t._v("Unix Socket")]),t._v("的方式，这种通讯方式相对于已有的"),s("code",[t._v("TCP")]),t._v("来说，效率更高，传输效率大约是"),s("code",[t._v("TCP")]),t._v("的两倍。高效的同时，也是数据可靠的，但是它的缺点是必须本机通讯。由平台的机制，通过这种方式收进行通讯，对性能开销小、效率高的同时也保证了数据传输的可靠性。")]),t._v(" "),s("h2",{attrs:{id:"unix-socket显式文件的缺陷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unix-socket显式文件的缺陷"}},[t._v("#")]),t._v(" Unix Socket显式文件的缺陷")]),t._v(" "),s("p",[s("code",[t._v("Unix Socket")]),t._v("进行通讯时，必须绑定一个文件，也就是需要在服务器上写一个文件，这样就会引发几个问题：")]),t._v(" "),s("ol",[s("li",[t._v("服务必须具备对应路径的读写权限。")]),t._v(" "),s("li",[t._v("关闭通讯的时候，文件是不会自动删除的，每次关闭时都要单独增加删除的逻辑")]),t._v(" "),s("li",[t._v("这个临时文件会被"),s("code",[t._v("Linux")]),t._v("系统或其他程序不经意的删除，会导致一些不可控的问题，并且很难发现。")])]),t._v(" "),s("h2",{attrs:{id:"解决方案和测试难点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案和测试难点"}},[t._v("#")]),t._v(" 解决方案和测试难点")]),t._v(" "),s("p",[s("code",[t._v("UNIX域Socket抽象命名空间")]),t._v("是一个很好的解决方案。这个方案采用一个抽象的命名空间，直接在"),s("code",[t._v("Linux")]),t._v("的内存中维护一个虚拟文件系统，也就是说绑定的地址用常规方式是无法看到的，并且在连接断开后，会自动删除。")]),t._v(" "),s("p",[t._v("这种解决方案对于程序来说是一个非常好的方案，但是对于测试来说，却是一个非常难解决的问题，尤其是第一次接触这块内容的时候，会是一个灾难。")]),t._v(" "),s("h2",{attrs:{id:"问题浮现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题浮现"}},[t._v("#")]),t._v(" 问题浮现")]),t._v(" "),s("p",[t._v("通过查看代码可以直接看到"),s("code",[t._v("Unix Socket")]),t._v("绑定的地址是这样的：")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//xxx_agent监听地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" string UnixSocketServerPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/xxx.unix"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果用"),s("code",[t._v("Python")]),t._v("绑定去发包，会直接报连接被拒绝的错误。")]),t._v(" "),s("p",[t._v("再往下继续跟代码，发现开发在拼地址的时候，做了一个截断的操作：")]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("server_address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sun_family "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AF_UNIX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strncpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sun_path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sun_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("整个地址被截了一位。")]),t._v(" "),s("p",[t._v("再试试"),s("code",[t._v("/tmp/xxx.uni")]),t._v("这个地址。依然报错连接拒绝。")]),t._v(" "),s("p",[t._v("找开发沟通后，开发的意思是截断1位之后，会在前面补一个0，但是这个0是一个二进制的0。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/wintercheck.jpg",alt:"-w715"}})]),t._v(" "),s("p",[t._v("于是使用"),s("code",[t._v("Python")]),t._v("的"),s("code",[t._v("struct")]),t._v("库做了二进制转换。代码如下：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("b_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i{a}s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("依然连接拒绝，通过查看"),s("code",[t._v("struct")]),t._v("库的手册之后，发现使用"),s("code",[t._v("i")]),t._v("做去格式化，会占用4个字节，而在"),s("code",[t._v("C++")]),t._v("的代码中，只截断了1个字节。于是这里需要改用"),s("code",[t._v("b")]),t._v("去做格式化。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("b_addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b{a}s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("依然报错。同时我还尝试了各种转换字符串等方式，全部都失败了。这个方向已经是一个死循环了。")]),t._v(" "),s("h2",{attrs:{id:"峰回路转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#峰回路转"}},[t._v("#")]),t._v(" 峰回路转")]),t._v(" "),s("p",[t._v("换一个方向思考，如果从系统的角度来看，这个服务一定是起了某个进程，那么可以去这个进程的"),s("code",[t._v("proc")]),t._v("文件夹中，找到使用的文件描述符.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@eb1a5ee8d3d5 /proc/26043/fd]# sudo ls -lrt\ntotal 0\nlrwx------ 1 root root 64 Mar  8 14:20 8 -> anon_inode:[eventfd]\nlrwx------ 1 root root 64 Mar  8 14:20 7 -> anon_inode:[eventpoll]\nlrwx------ 1 root root 64 Mar  8 14:20 6 -> socket:[2628408710]\nl-wx------ 1 root root 64 Mar  8 14:20 5 -> /data/server/xxx_agent/log/xxx_agent_20190308_acc.log\nl-wx------ 1 root root 64 Mar  8 14:20 4 -> /data/server/xxx_agent/log/xxx_agent_app_20190308_app.log\nlrwx------ 1 root root 64 Mar  8 14:20 3 -> /var/tmp/xxx_agent.lock.pid\nlrwx------ 1 root root 64 Mar  8 14:20 2 -> /dev/null\nlrwx------ 1 root root 64 Mar  8 14:20 1 -> /dev/null\nlrwx------ 1 root root 64 Mar  8 14:20 0 -> /dev/null\nl-wx------ 1 root root 64 Mar  8 16:37 10 -> /data/server/xxx_agent/log/xxx_agent_stat_2019030815_stat.log\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("这里有一个"),s("code",[t._v("socket:[2628408710]")]),t._v("引起了我的注意，于是拿着这个去"),s("code",[t._v("Google")]),t._v("。虽然没有搜索到结果，但是这里找到了一个思路，相关信息中有看到可以在"),s("code",[t._v("/proc/net/tcp")]),t._v("位置查看所有进程的tcp的连接信息，那么我们这个协议是"),s("code",[t._v("unix socket")]),t._v("，是否也有对应的连接信息？")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@eb1a5ee8d3d5 /proc/net]# sudo ls -lrt\ntotal 0\n-r--r--r--  1 root root 0 Mar  8 16:40 xfrm_stat\ndr-xr-xr-x  2 root root 0 Mar  8 16:40 vlan\n-r--r--r--  1 root root 0 Mar  8 16:40 unix\n-r--r--r--  1 root root 0 Mar  8 16:40 udplite6\n-r--r--r--  1 root root 0 Mar  8 16:40 udplite\n-r--r--r--  1 root root 0 Mar  8 16:40 udp6\n-r--r--r--  1 root root 0 Mar  8 16:40 udp\n-r--r--r--  1 root root 0 Mar  8 16:40 tcp6\n-r--r--r--  1 root root 0 Mar  8 16:40 tcp\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("这里证实了我的猜想，使用"),s("code",[t._v("cat")]),t._v("即可查看"),s("code",[t._v("unix")]),t._v("的信息。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@eb1a5ee8d3d5 /proc/net]# cat unix\nNum       RefCount Protocol Flags    Type St Inode Path\nffff880058349c00: 00000002 00000000 00000000 0002 01 2629316422 /data/server/xxx_agent/data/xxx_api.sk\nffff880008e83100: 00000002 00000000 00000000 0002 01 2628408710 @/tmp/xxx.uni\nffff8807102aa680: 00000002 00000000 00000000 0001 03 349101185\nffff88001b279880: 00000002 00000000 00000000 0002 01 2629297346\nffff880725603800: 00000002 00000000 00000000 0002 01 2630221924\nffff8800af64de80: 00000002 00000000 00000000 0001 03 349094904\nffff88001b27cd00: 00000002 00000000 00000000 0002 01 2629373949\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("这里一个很扎眼的"),s("code",[t._v("@/tmp/xxx.uni")]),t._v("。并且地址前面的"),s("code",[t._v("2628408710")]),t._v("与之前在"),s("code",[t._v("fd")]),t._v("里面找到的数字是样的，因此可以确定就是我们要找的"),s("code",[t._v("Unix Socket")]),t._v("的连接信息了。")]),t._v(" "),s("p",[t._v("但是我尝试使用"),s("code",[t._v("@/tmp/xxx.uni")]),t._v("这个地址去连接，依旧是连接失败。")]),t._v(" "),s("p",[t._v("但是有了这个信息，继续去"),s("code",[t._v("Google")]),t._v("，可以找到这个内容的关键名词"),s("code",[t._v("abstract namespace Unix domain sockets")]),t._v("，也就是"),s("code",[t._v("抽象命名空间")]),t._v("。再根据关键字即可找到对应的解决方案。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://utcc.utoronto.ca/~cks/space/blog/python/AbstractUnixSocketsAndPeercred",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://utcc.utoronto.ca/~cks/space/blog/python/AbstractUnixSocketsAndPeercred"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("这里是最终的解决方案。也就是绑定地址是"),s("code",[t._v('addr = "\\0/tmp/xxx.uni"')])]),t._v(" "),s("p",[t._v("这里方法对于"),s("code",[t._v("Python2")]),t._v("和"),s("code",[t._v("Python3")]),t._v("都是有效的。")]),t._v(" "),s("h2",{attrs:{id:"后续思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续思考"}},[t._v("#")]),t._v(" 后续思考")]),t._v(" "),s("p",[s("code",[t._v('addr = "\\0/tmp/xxx.uni"')]),t._v("这个地址通过"),s("code",[t._v("print repr(addr)")]),t._v("方法打印出来的结果是"),s("code",[t._v("'\\x00/tmp/xxx.uni'")]),t._v("。也就是说前面是一个二进制的0。这个方法其实在调试的时候，用"),s("code",[t._v("struct")]),t._v("处理了之后是一个同样的结果。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("b_addr = struct.pack(\"c{a}s\".format(a=len(addr)), '\\0', addr)\n\n>>>\n\n'\\x00/tmp/xxx.uni'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("那么为什么在绑定的时候会连接失败呢？")]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux官方说明文档"),s("OutboundLink")],1),t._v("中其实对此是有专门的解释。")]),t._v(" "),s("blockquote",[s("p",[t._v("abstract: an abstract socket address is distinguished (from a\npathname socket) by the fact that sun_path[0] is a null byte\n('\\0').  The socket's address in this namespace is given by the\nadditional bytes in sun_path that are covered by the specified\nlength of the address structure.  (Null bytes in the name have no\nspecial significance.)  The name has no connection with filesystem\npathnames.  When the address of an abstract socket is returned,\nthe returned addrlen is greater than sizeof(sa_family_t) (i.e.,\ngreater than 2), and the name of the socket is contained in the\nfirst (addrlen - sizeof(sa_family_t)) bytes of sun_path.")])]),t._v(" "),s("p",[t._v("看官方的定义，似乎这是一个空字节的标识。"),s("code",[t._v("an abstract socket address is distinguished (from a pathname socket) by the fact that sun_path[0] is a null byte('\\0')")])]),t._v(" "),s("p",[t._v("而我们用"),s("code",[t._v("struct")]),t._v("转成二进制之后，会有一个字节的长度，虽然打出来的结果在控制台看起来是一样的，但是实际上占了一个字节的长度，这样就会导致绑定的地址不匹配。")])])}),[],!1,null,null,null);a.default=e.exports}}]);