(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{382:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("都说MongoDB这个NoSql数据库特别友好，使用起来也非常方便，今天稍微接触了一下，发现真的是非常非常简单，但是网上对这块内容涉及的很少，而且很多内容都是很老的版本使用的方法，我看了一下官方API文档中描述的内容也不多，顺手翻译一下吧，造福一下后来人。")]),s._v(" "),e("p",[e("strong",[s._v("注：我并不是逐字逐句的翻译，在某些地方我无法精确翻译的时候，我概括了大概的意思，有能力的可以直接看"),e("a",{attrs:{href:"http://api.mongodb.org/python/current/tutorial.html?_ga=1.218270941.558755682.1457943607#getting-a-single-document-with-find-one",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),e("p",[s._v("首先，我们需要安装PyMongo模块，在PythonShell中下面的代码能正常运行且无报错。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> import pymongo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当然，你的MongoDB需要在默认地址和端口开启，你可以按照这个方法确认你是否安装了MongoDB：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ mongod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"建立一个mongoclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立一个mongoclient"}},[s._v("#")]),s._v(" 建立一个MongoClient")]),s._v(" "),e("p",[s._v("第一步我们需要建立一个MongoClient来运行MongoDB，这个做起来非常简单：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> from pymongo import MongoClient\n>>> client = MongoClient()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面的代码会连接默认的地址和端口，我们也可以自己指定地址和端口，像下面这样：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> client = MongoClient('localhost', 27017)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者使用MongoDB的URI连接：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> client = MongoClient('mongodb://localhost:27017/')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"获取数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取数据库"}},[s._v("#")]),s._v(" 获取数据库")]),s._v(" "),e("p",[s._v("一个MongoDB可以提供多个数据库接口。当使用PyMongo的时候，你可以使用获取属性的方式建立MongoClient：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> db = client.test_database\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果你使用上面的方法无法获取数据库的时候，你可以使用字典的方式来获取数据库。")]),s._v(" "),e("h2",{attrs:{id:"获取连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取连接"}},[s._v("#")]),s._v(" 获取连接")]),s._v(" "),e("p",[s._v("获取连接的方式和获取数据库的方式一样，也可以使用获取属性的方式：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> collection = db.test_collection\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者使用字典的方式：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> collection = db['test-collection']\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意：使用MongoDB建立连接非常容易，但是上面的所有操作都不是实实在在的操作了MongoDB，当第一次获取数据库和建立连接的时候，数据库和连接会被创建。")]),s._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[s._v("#")]),s._v(" 文档")]),s._v(" "),e("p",[s._v("MongoDB的数据格式存储使用的是JSON风格，在PyMongo中，我们使用的字典类型就相当于数据。比如下面的数据就类似博客中的post信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('>>> import datetime\n>>> post = {"author": "Mike",\n...         "text": "My first blog post!",\n...         "tags": ["mongodb", "python", "pymongo"],\n...         "date": datetime.datetime.utcnow()}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("数据格式可以容纳python的类型（就像datetime.datetime）")]),s._v(" "),e("h2",{attrs:{id:"插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入数据"}},[s._v("#")]),s._v(" 插入数据")]),s._v(" "),e("p",[s._v("往数据库插入一条数据我们使用insert_one()方法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> posts = db.posts\n>>> post_id = posts.insert_one(post).inserted_id\n>>> post_id\nObjectId('...')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("当我们插入数据成功的时候，MongoDB会生成一个特殊的主键“_id”。这个主键“_id”的值是唯一的。insert_one()返回的值就是这个主键的值。")]),s._v(" "),e("p",[s._v("插入第一条数据后，数据库、数据表和连接都建立了，我们可以查看列表中的所有信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> db.collection_names(include_system_collections=False)\n[u'posts']\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"使用find-one-方法获取一条记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用find-one-方法获取一条记录"}},[s._v("#")]),s._v(" 使用find_one()方法获取一条记录")]),s._v(" "),e("p",[s._v("在MongoDB中最基本的方法就是find_one()。这个方法返回一条符合条件的记录（或者None）。当你知道某条信息只有一个的时候，这个方法非常有用，或者返回第一条数据，这里我们使用这个方法获取第一条数据：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> posts.find_one()\n{u'date': datetime.datetime(...), u'text': u'My first blog post!', u'_id': ObjectId('...'), u'author': u'Mike'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("结果是我们之前插入的一条字典型的数据。")]),s._v(" "),e("p",[e("strong",[s._v("注意：返回结果中的“_id”是插入数据时自动添加的。")])]),s._v(" "),e("p",[s._v("find_one()同时也提供了精确查找的功能，下面的示例是我们定位author为Mike的代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> posts.find_one({\"author\": \"Mike\"})\n{u'date': datetime.datetime(...), u'text': u'My first blog post!', u'_id': ObjectId('...'), u'author': u'Mike'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果我们把author换成另外一个，则不会返回结果：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('>>> posts.find_one({"author": "Eliot"})\n>>>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"使用objectid查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用objectid查询"}},[s._v("#")]),s._v(" 使用ObjectId查询")]),s._v(" "),e("p",[s._v("我们也可以用“_id”来查询，下面是我们的示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> post_id\nObjectId(...)\n>>> posts.find_one({\"_id\": post_id})\n{u'date': datetime.datetime(...), u'text': u'My first blog post!', u'_id': ObjectId('...'), u'author': u'Mike'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意：ObjectId和转换为字符串的ObjectId是不一样的：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('>>> post_id_as_str = str(post_id)\n>>> posts.find_one({"_id": post_id_as_str}) # No result\n>>>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("在web应用中一个很常见的现象就是从URI中获取ObjectId来查询后台记录。在使用这个之前需要把str类型转换成ObjectId类型：")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objectid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ObjectId\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The web framework gets post_id from the URL and passes it as a string")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("post_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Convert from string to ObjectId:")]),s._v("\n    document "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_one"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ObjectId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("post_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"unicode-strings注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unicode-strings注意事项"}},[s._v("#")]),s._v(" Unicode Strings注意事项")]),s._v(" "),e("p",[s._v("你可能会注意到我们的数据和存进去的数据有一些不一样，比如（ u’Mike’ 而不是‘Mike’）。")]),s._v(" "),e("p",[s._v("MongoDB是使用BSON来存储数据。BSON是使用utf-8来编码的。所以PyMongo存储的str类型必须是utf-8的。（‘str’类型）也是要被支持的，因此Unicode类型(<‘unicode’类型>)需要先编码成utf-8，我们的示例中PythonShell显示的是u’Mike’而不是‘Mike’就是因为PyMongo解码了BSON的string变成Python的unicode string。")]),s._v(" "),e("h2",{attrs:{id:"大量的插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大量的插入数据"}},[s._v("#")]),s._v(" 大量的插入数据")]),s._v(" "),e("p",[s._v("为了让查询更有意思，我们需要插入多一些数据。能够新增一条记录，我们也可以做到新增多条记录。使用insert_many()方法插入由第一条数据组成的列表，只需要往服务端发送一条命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('>>> new_posts = [{"author": "Mike",\n...               "text": "Another post!",\n...               "tags": ["bulk", "insert"],\n...               "date": datetime.datetime(2009, 11, 12, 11, 14)},\n...              {"author": "Eliot",\n...               "title": "MongoDB is fun",\n...               "text": "and pretty easy too!",\n...               "date": datetime.datetime(2009, 11, 10, 10, 45)}]\n>>> result = posts.insert_many(new_posts)\n>>> result.inserted_ids\n[ObjectId(\'...\'), ObjectId(\'...\')]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("这个例子有几个有意思的地方：")]),s._v(" "),e("ul",[e("li",[s._v("insert_many()返回了两个相互对应ObjectId")]),s._v(" "),e("li",[s._v("new_post[1]有一个不同的地方，多了一个“tags”字段。而现在我们又多了一个字段，这就是我们说MongoDB非常"),e("em",[s._v("schema-free")]),s._v("（开放？）")])]),s._v(" "),e("h2",{attrs:{id:"查询一条以上的记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询一条以上的记录"}},[s._v("#")]),s._v(" 查询一条以上的记录")]),s._v(" "),e("p",[s._v("我们使用find()方法来获取一条以上的记录。find()返回一组符合条件的记录，并且允许我们通过迭代的方式获取它们。例如，在post中我们可以迭代的获取所有查询的数据：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> for post in posts.find():\n...   post\n...\n{u'date': datetime.datetime(...), u'text': u'My first blog post!', u'_id': ObjectId('...'), u'author': u'Mike', u'tags': [u'mongodb', u'python', u'pymongo']}\n{u'date': datetime.datetime(2009, 11, 12, 11, 14), u'text': u'Another post!', u'_id': ObjectId('...'), u'author': u'Mike', u'tags': [u'bulk', u'insert']}\n{u'date': datetime.datetime(2009, 11, 10, 10, 45), u'text': u'and pretty easy too!', u'_id': ObjectId('...'), u'author': u'Eliot', u'title': u'MongoDB is fun'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("就像我们使用find_one()一样，我们也可以在这里加上查询条件来获取符合条件的数据：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> for post in posts.find({\"author\": \"Mike\"}):\n...   post\n...\n{u'date': datetime.datetime(...), u'text': u'My first blog post!', u'_id': ObjectId('...'), u'author': u'Mike', u'tags': [u'mongodb', u'python', u'pymongo']}\n{u'date': datetime.datetime(2009, 11, 12, 11, 14), u'text': u'Another post!', u'_id': ObjectId('...'), u'author': u'Mike', u'tags': [u'bulk', u'insert']}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"计数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计数"}},[s._v("#")]),s._v(" 计数")]),s._v(" "),e("p",[s._v("如果我们只想获取数量，我们可以使用count()方法来代替全记录查询。我们可以获得查询的数量：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> posts.count()\n3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("或者获得符合条件的数量：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('>>> posts.find({"author": "Mike"}).count()\n2\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"不同种类的查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同种类的查询"}},[s._v("#")]),s._v(" 不同种类的查询")]),s._v(" "),e("p",[s._v("MongoDB还提供了许多种类的查询方式。例如我们查询数据的日期小于某一个日期，且按照author字段来排序：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> d = datetime.datetime(2009, 11, 12, 12)\n>>> for post in posts.find({\"date\": {\"$lt\": d}}).sort(\"author\"):\n...   print post\n...\n{u'date': datetime.datetime(2009, 11, 10, 10, 45), u'text': u'and pretty easy too!', u'_id': ObjectId('...'), u'author': u'Eliot', u'title': u'MongoDB is fun'}\n{u'date': datetime.datetime(2009, 11, 12, 11, 14), u'text': u'Another post!', u'_id': ObjectId('...'), u'author': u'Mike', u'tags': [u'bulk', u'insert']}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("这里我们使用“$lt”来做一个限制的查询，使用sort()来对author字段排序。")]),s._v(" "),e("h2",{attrs:{id:"主键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主键"}},[s._v("#")]),s._v(" 主键")]),s._v(" "),e("p",[s._v("增加一个主键能够帮助我们快速而准确的查询记录，也可以使我们存储的数据更加有用。在这个示例中，我们将会展示在一个已存在主键的表中新增一个主键：")]),s._v(" "),e("p",[s._v("首先，我们要新增一个主键：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> result = db.profiles.create_index([('user_id', pymongo.ASCENDING)],\n...                                   unique=True)\n>>> list(db.profiles.index_information())\n[u'user_id_1', u'_id_']\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("注意，我们现在有两个主键了，一个是MongoDB自带的”_id“，另一个是我们新增的”user_id“。")]),s._v(" "),e("p",[s._v("现在，我们来新增一些用户信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> user_profiles = [\n...     {'user_id': 211, 'name': 'Luke'},\n...     {'user_id': 212, 'name': 'Ziltoid'}]\n>>> result = db.profiles.insert_many(user_profiles)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("我们新增的主键阻止我们新增一条已存在这个主键的记录。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> new_profile = {'user_id': 213, 'name': 'Drew'}\n>>> duplicate_profile = {'user_id': 212, 'name': 'Tommy'}\n>>> result = db.profiles.insert_one(new_profile)  # This is fine.\n>>> result = db.profiles.insert_one(duplicate_profile)\nTraceback (most recent call last):\npymongo.errors.DuplicateKeyError: E11000 duplicate key error index: test_database.profiles.$user_id_1 dup key: { : 212 }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("p",[s._v("官方文档上并没有给出删除，修改记录的方法，或许是我目前还没看到吧，等看到了我会再补充上来的。文档比较短，翻译的过程中由于本人英语水平有限，并不能做到逐字逐句的翻译，也无法保证完全准确，并且会有一些地方的内容念起来并不是那么的顺口，但是官方文档想表达的大概意思应该是不会错的。")])])}),[],!1,null,null,null);t.default=n.exports}}]);