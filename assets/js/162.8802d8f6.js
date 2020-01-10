(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{379:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("原文地址："),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html#//apple_ref/doc/uid/TP40014132-CH4-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Writing Test Class and Methods》"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"文章导读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文章导读"}},[e._v("#")]),e._v(" 文章导读")]),e._v(" "),t("p",[e._v("本篇介绍了如何编写测试类和测试方法。")]),e._v(" "),t("p",[e._v("看完之后你能学习到：")]),e._v(" "),t("ul",[t("li",[e._v("如何编写一个测试类")]),e._v(" "),t("li",[e._v("如何编写测试方法")]),e._v(" "),t("li",[e._v("测试类和测试方法的架构")]),e._v(" "),t("li",[e._v("如何断言")]),e._v(" "),t("li",[e._v("Object——C与Swift在断言上的区别")])]),e._v(" "),t("h2",{attrs:{id:"声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[e._v("#")]),e._v(" 声明")]),e._v(" "),t("p",[e._v("文章翻译自Apple官方文档《Testing with Xcode》，不保证每个字都能翻译的精准，如有翻译错误，请留言指出，不胜感激。")]),e._v(" "),t("h1",{attrs:{id:"writing-test-classes-and-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-test-classes-and-methods"}},[e._v("#")]),e._v(" Writing Test Classes and Methods")]),e._v(" "),t("p",[e._v("当你通过测试导航菜单为一个项目添加测试目标时，Xcode会在测试导航菜单中展示目标的测试类和测试方法。在测试目标中，在测试中，目标是包含着测试方法的测试类。这章将想你解释如何创建测试类和编写测试方法。")]),e._v(" "),t("h2",{attrs:{id:"test-targets-test-bundles-and-the-test-navigator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-targets-test-bundles-and-the-test-navigator"}},[e._v("#")]),e._v(" Test Targets, Test Bundles, and the Test Navigator")]),e._v(" "),t("p",[e._v("在看创建测试类之前，先看看测试导航菜单是值得的。使用它是创建测试和使用测试的核心。")]),e._v(" "),t("p",[e._v("为一个项目增加测试目标，创建一个测试包。测试导航菜单列出了项目源代码中所有测试报。用层级列表的方式展示测试类和测试方法，这里展示了一个含有两个测试目标项目的测试导航菜单视图，显示了一套层级列表形式的测试包，测试类和测试方法。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/15377796422139132.jpg",alt:"twx-wtcm-1_2x"}})]),e._v(" "),t("p",[e._v("测试包能容纳许多测试类。无论是功能性的还是有组织目的的归类，你都能用测试类把有关联的测试分到同一组。举个例子，对于计算的示例项目，你可以创建"),t("code",[e._v("BasicFunctionsTests")]),e._v("，"),t("code",[e._v("AdvancedFunctionsTests")]),e._v("和"),t("code",[e._v("DisplayTests")]),e._v("类，所有类都在"),t("code",[e._v("Mac_Calc_Tests")]),e._v("包里。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537779668563064.jpg",alt:"twx-wtcm-2_2x"}})]),e._v(" "),t("p",[e._v("某些类型的测试可能需要共享确定的"),t("code",[e._v("sepUp")]),e._v("和"),t("code",[e._v("tesrDown")]),e._v("方法，有效地把不同的测试收集到不同的测试类中，仅适用一套"),t("code",[e._v("setUp")]),e._v("和"),t("code",[e._v("tearDown")]),e._v("的方法让编写各个测试方法的代码量最少。")]),e._v(" "),t("h2",{attrs:{id:"creating-a-test-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-test-class"}},[e._v("#")]),e._v(" Creating a Test Class")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意： 为了更好的通过图例说明，本章重点聚焦于单元测试的测试类和测试方法，创建UI测试目标，类和方法。它们和在单元测试中工作的区别，在"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/09-ui_testing.html#//apple_ref/doc/uid/TP40014132-CH13-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Interface Testing"),t("OutboundLink")],1),e._v("讨论。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("你可以使用测试导航菜单中的增加按钮（+）来创建新的测试类。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537779687637256.jpg",alt:"twx-wtcm-3_2x"}})]),e._v(" "),t("p",[e._v("你可以选择增加单元测试类或者UI测试类，选择其中一个之后，Xcode会展示一个含有默认选定模板的文件种类选择器。下图中高亮显示了一个单元测试类的模板。点击"),t("code",[e._v("Next")]),e._v("确认你的选择。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537779709972437.jpg",alt:"twx-wtcm-4_2x"}}),e._v("\n基于你在配置表中输入的测试类的名称，每个测试类会把你放置测试结果的文件命名为"),t("code",[e._v("TestClassName.m")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537779817146902.jpg",alt:"twx-wtcm-5_2x"}})]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：所有的测试类都是在XCTest框架下XCTestCase的子类。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("虽然Xcode的会默认的根据你的计划测试目标把组件分成不同的组，但是你也可以放在项目中任意一个你选择的位置。当你选择下一步的时候，标准的Xcode新增目录列表的配置图入如下所示。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/1537779727148631.jpg",alt:"twx-wtcm-6_2x"}})]),e._v(" "),t("p",[e._v("使用新增目录列表和你在项目导航中新增一个项目的方式也是一样的，更多有关"),t("em",[e._v("Add Files sheet")]),e._v("的内容，请看"),t("em",[e._v("Adding an Existing File or Folder")]),e._v("。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：当你新建一个项目的时候，测试目标和所关联的测试包会默认的基于你的项目名称而命名。在这种情况下，创建一个项目名称为"),t("em",[e._v("MyApp")]),e._v("的时候，会自行创建一个名为"),t("em",[e._v("MyAppTests")]),e._v("的测试包和一个名为"),t("em",[e._v("MyAppTests")]),e._v("测试类，此测试类带有关联的"),t("em",[e._v("MyAppTests.m")]),e._v("可执行文件。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"test-class-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-class-structure"}},[e._v("#")]),e._v(" Test Class Structure")]),e._v(" "),t("p",[e._v("测试类有这样的基本结构：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#import <XCTest/XCTest.h>\n \n@interface SampleCalcTests : XCTestCase\n@end\n \n@implementation SampleCalcTests\n \n- (void)setUp {\n    [super setUp];\n    // Put setup code here. This method is called before the invocation of each test method in the class.\n}\n \n- (void)tearDown {\n    // Put teardown code here. This method is called after the invocation of each test method in the class.\n    [super tearDown];\n}\n \n- (void)testExample {\n    // This is an example of a functional test case.\n    // Use XCTAssert and related functions to verify your tests produce the correct results.\n}\n \n- (void)testPerformanceExample {\n    // This is an example of a performance test case.\n    [self measureBlock:^{\n        // Put the code you want to measure the time of here.\n    }];\n}\n@end\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br")])]),t("p",[e._v("这个测试类的例子，不仅可以在Object-C中运行，也可以在Swift下运行。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：为了保证统一性，本文所有的可执行案例都是用Object-C编写。\nXCTest也全部支持使用Swift编写你的测试方法。所有的Object-C和Swift混编的方法也同样支持。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("需要注意的是，这些可执行案例会附带实现方法，例如含有"),t("code",[e._v("setUp")]),e._v("和"),t("code",[e._v("tearDown")]),e._v("的基础实现方法，但这些方法不是必须的。如果某个类中的所有方法都需要相同的代码。你可以自己编写"),t("code",[e._v("setUp")]),e._v("和"),t("code",[e._v("tearDown")]),e._v("的实现方法。这些代码在每一条测试用例前后都会执行一遍。你可以为测试类增加同样的类方法，"),t("code",[e._v("setUp(+(void)setUp)")]),e._v("和"),t("code",[e._v("tearDown((+void)tearDown)")]),e._v("。它们会在测试类的所有方法执行前和执行后执行。")]),e._v(" "),t("h2",{attrs:{id:"flow-of-test-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-of-test-execution"}},[e._v("#")]),e._v(" Flow of Test Execution")]),e._v(" "),t("p",[e._v("在默认的例子中，当我们执行测试，XCTest会找到所有的测试类，并执行它们下面的所有测试方法（所有的测试类继承于"),t("code",[e._v("XCTestCase")]),e._v("）。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：在XCTest运行时，一些配置允许你对测试做一些特定的更改。你可以在测试导航器中不执行某些测试或者编辑测试计划。你也可以使用测试导航器或者代码编辑器中的运行按钮来选择只执行一条测试用例或者一组测试用例或者在代码编辑器中直接编辑。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("对于每个类来说，从每个类的"),t("code",[e._v("setUp")]),e._v("方法开始执行测试。对于每个测试方法来说，一个类被实例化，就会先执行"),t("code",[e._v("setUp")]),e._v("方法，然后执行测试方法，最后执行"),t("code",[e._v("tearDown")]),e._v("方法。这一系列动作在每个测试方法中重复。在最后一个"),t("code",[e._v("tearDown")]),e._v("方法被执行后，测试类就被执行完毕了。Xcode执行完"),t("code",[e._v("tearDown")]),e._v("类方法后就开始执行下一个测试类。这一系列动作一致重复到所有的测试类都被执行完。")]),e._v(" "),t("h2",{attrs:{id:"writing-test-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-test-methods"}},[e._v("#")]),e._v(" Writing Test Methods")]),e._v(" "),t("p",[e._v("你通过编写测试方法来为测试类增加测试。一个测试方法是测试类一种实例，使用"),t("em",[e._v("test")]),e._v("作为前缀，没有参数，返回"),t("code",[e._v("void")]),e._v("。例如"),t("code",[e._v("(void)testColorIsRed()")]),e._v("。测试方法运用你项目中的代码，如果它没有产生预期的结果，报告会用一组断言API来报告失败。例如一个功能性的返回值和你预期的值做对比或者因为测试类中方法的不恰当使用导致抛出了一个异常。"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html#//apple_ref/doc/uid/TP40014132-CH4-SW34",target:"_blank",rel:"noopener noreferrer"}},[e._v("XCTest Assertions"),t("OutboundLink")],1),e._v("描述了这些断言。")]),e._v(" "),t("p",[e._v("对于一个测试方法，将相关的头文件导入到你的测试类中，来使用将被测试的代码。")]),e._v(" "),t("p",[e._v("当Xcode运行测试时，它会独立的运行每一条测试方法。因此，每一种方法必须准备和清理所有的辅助变量，结构和对象。它需要和主体的API进行交互。如果这些代码在类中的所有方法都会用到，你可以像"),t("em",[e._v("Test Class Structure")]),e._v("章节中描述的那样把它们加进"),t("code",[e._v("setUp")]),e._v("和"),t("code",[e._v("tearDown")]),e._v("方法中。")]),e._v(" "),t("p",[e._v("下面是一个单元测试方法的模板：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- (void)testColorIsRed {\n   // Set up, call test subject API. (Code could be shared in setUp method.)\n   // Test logic and values, assertions report pass/fail to testing framework.\n   // Tear down. (Code could be shared in tearDown method.\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("这里有一个简单的测试方法实例用来检查"),t("code",[e._v("CalcView")]),e._v("是否成功的被SampleCalc创建，app在"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/02-quick_start.html#//apple_ref/doc/uid/TP40014132-CH2-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick Start"),t("OutboundLink")],1),e._v("章节中展示了。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('- (void) testCalcView {\n   // setup\n   app = [NSApplication sharedApplication];\n   calcViewController = (CalcViewController*)[NSApplication sharedApplication] delegate];\n   calcView             = calcViewController.view;\n \n   XCTAssertNotNil(calcView, @"Cannot find CalcView instance");\n   // no teardown needed\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h2",{attrs:{id:"writing-tests-of-asynchronous-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-tests-of-asynchronous-operations"}},[e._v("#")]),e._v(" Writing Tests of Asynchronous Operations")]),e._v(" "),t("p",[e._v("测试是同步执行的，因为每一个测试用例都是相互独立的一条接一条的执行下去。但是越来越多的代码是异步执行的。要处理调用异步执行方法和函数的测试组件，从Xcode6开始，XCTest在测试方法中增加了连续异步执行测试用例的功能。通过等待异步回调完成或者超时。")]),e._v(" "),t("p",[e._v("一个源码的例子：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Test that the document is opened. Because opening is asynchronous,\n// use XCTestCase\'s asynchronous APIs to wait until the document has\n// finished opening.\n- (void)testDocumentOpening\n{\n    // Create an expectation object.\n    // This test only has one, but it\'s possible to wait on multiple expectations.\n    XCTestExpectation *documentOpenExpectation = [self expectationWithDescription:@"document open"];\n \n    NSURL *URL = [[NSBundle bundleForClass:[self class]]\n                              URLForResource:@"TestDocument" withExtension:@"mydoc"];\n    UIDocument *doc = [[UIDocument alloc] initWithFileURL:URL];\n    [doc openWithCompletionHandler:^(BOOL success) {\n        XCTAssert(success);\n        // Possibly assert other things here about the document after it has opened...\n \n        // Fulfill the expectation-this will cause -waitForExpectation\n        // to invoke its completion handler and then return.\n        [documentOpenExpectation fulfill];\n    }];\n \n    // The test will pause here, running the run loop, until the timeout is hit\n    // or all expectations are fulfilled.\n    [self waitForExpectationsWithTimeout:1 handler:^(NSError *error) {\n        [doc closeWithCompletionHandler:nil];\n    }];\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br")])]),t("p",[e._v("更多关于编写异步操作的详细信息，请看"),t("code",[e._v("XCTest.framework")]),e._v("的头文件"),t("code",[e._v("XCTestCase+AsynchronousTesting.h")])]),e._v(" "),t("h2",{attrs:{id:"writing-performance-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-performance-tests"}},[e._v("#")]),e._v(" Writing Performance Tests")]),e._v(" "),t("p",[e._v("性能测试需要一大堆代码，你会想要评估并运行这些代码十次，收集执行的平均耗时和标准偏移量。这些单独的测量的平均值，形成一个测试运行的值，可以与基线相比以评估成功或失败。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：基线是已经被你用来评估成功或者失败的值。报告界面提供了一个设置或更改基线值的途径")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("执行性能测试，你需要使用Xcode6或者以后版本提供的XCTest的新的API来编写运行方法。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- (void)testPerformanceExample {\n    // This is an example of a performance test case.\n    [self measureBlock:^{\n        // Put the code you want to measure the time of here.\n    }];\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("下面简单的例子展示了使用样例计算器APP编写性能测试来测试加法速度的场景。"),t("code",[e._v("measureBlock")]),e._v("是一个加法，随着一个XCTest的次数的迭代。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- (void) testAdditionPerformance {\n    [self measureBlock:^{\n        // set the initial state\n        [calcViewController press:[calcView viewWithTag: 6]];  // 6\n        // iterate for 100000 cycles of adding 2\n        for (int i=0; i<100000; i++) {\n           [calcViewController press:[calcView viewWithTag:13]];  // +\n           [calcViewController press:[calcView viewWithTag: 2]];  // 2\n           [calcViewController press:[calcView viewWithTag:12]];  // =\n        }\n    }];\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[e._v("性能测试运行一次，当查看执行文件时，会在代码编辑器上提供信息、也会在测试导航器和报告导航器上展示信息。点击信息会呈现单独的运行结果。测试结果显示包括设置测试结果作为未来测试标准的基线。基线存储在每个设备的配置文件中所以你如果在不同的设备上运行同样的测试用例，由于每个设备处理速度，内存等配置不同会导致出现不同的基线。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：性能测试第一次运行总是会报告失败，直到基线在设备的配置文件中被设置。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("更多关于性能测试的方法，请查看"),t("code",[e._v("XCTest.framework")]),e._v("的头文件"),t("code",[e._v("XCTestCase.h")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"writing-ui-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-ui-tests"}},[e._v("#")]),e._v(" Writing UI Tests")]),e._v(" "),t("p",[e._v("用XCTest创建UI测试就像创建单元测试一样，是对一个同样程序模型的扩展。总提上说，都是类似的操作和程序的模型是一样的。工作流程中的和执行中的区别主要集中在实施UI测试和使用XCTest UI测试API，这些在"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/09-ui_testing.html#//apple_ref/doc/uid/TP40014132-CH13-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Interface Testing"),t("OutboundLink")],1),e._v("有描述")]),e._v(" "),t("h2",{attrs:{id:"writing-tests-with-swift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#writing-tests-with-swift"}},[e._v("#")]),e._v(" Writing Tests with Swift")]),e._v(" "),t("p",[e._v("Swift存取控制模型阻止测试从app或者框架内部进入声明。为了在Xcode6中使用Swift的内部功能，你需要为测试设置这些入口点为公共的，降低Swift类型安全性。")]),e._v(" "),t("p",[e._v("Xcode7针对这个问题提供了一个氛围两部的解决方案：")]),e._v(" "),t("ol",[t("li",[e._v("Swift在构建编译的时候直接做成内部可访问的。改变编译的方式是在Xcode执行你测试构建的动作时发出一个新的"),t("code",[e._v("-enable-testing")]),e._v("标志。这个行为是由构建设置的"),t("code",[e._v("Enable Testability")]),e._v("来控制的，为新的项目设置默认为"),t("em",[e._v("Yes")]),e._v("。这样你不需要改变你的源代码。")]),e._v(" "),t("li",[e._v("可测试的入口点的可见性受限于客户端。它通过对导入声明的修改来控制。修改的实施是通过导入一个新的"),t("code",[e._v("@testable")]),e._v("属性，为你的测试代码做一次调整，app的代码不需要变动。")])]),e._v(" "),t("p",[e._v("例如，为一个名叫“MySwiftApp”的app考虑Swift的模型像"),t("code",[e._v("AppDelegate")]),e._v("这样的方式。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('import Cocoa\n@NSApplicationMain\nclass AppDelegate: NSObject, NSApplicationDelegate {\n    @IBOutlet weak var window: NSWindow!\n    func foo() {\n        println("Hello, World!")\n    }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("编写测试类允许"),t("code",[e._v("AppDelegate")]),e._v("类作为入口，你需要在你的测试代码中为"),t("code",[e._v("@testable")]),e._v("属性修改"),t("code",[e._v("import")]),e._v("语句，像下面这样：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Importing XCTest because of XCTestCase\nimport XCTest\n \n// Importing AppKit because of NSApplication\nimport AppKit\n \n// Importing MySwiftApp because of AppDelegate\n@testable import MySwiftApp\n \nclass MySwiftAppTests: XCTestCase {\n    func testExample() {\n        let appDelegate = NSApplication.sharedApplication().delegate as! AppDelegate\n        appDelegate.foo()\n    }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br")])]),t("p",[e._v("使用这种解决方案，你的Swift应用代码内部的功能就可以全部被你的测试类和测试方法访问。准许"),t("code",[e._v("@testable")]),e._v("的导入确认其他非测试客户端没有权限访问Swift控制的规则，即使是在编译测试的时候。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意："),t("code",[e._v("@testable")]),e._v("提供访问仅仅是内部功能，当使用"),t("code",[e._v("@testalbe")]),e._v("时，私有声明的目录也是无法访问的。")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"xctest-assertions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xctest-assertions"}},[e._v("#")]),e._v(" XCTest Assertions")]),e._v(" "),t("p",[e._v("你的测试方法使用XCTest框架提供的断言来展示Xcode显示的测试结果。所有的断言都有一个类似的格式，比对逻辑表达式的项目，一个失败结果的字符串格式和插入到字符串格式中的参数。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：所有断言的最后偶一个参数被格式化。一个格式化的字符串和它的变量参数列表。XCTest为所有的断言提供了一个默认失败结果的字符串，结合着传递给断言的参数一起使用，format字符串对失败的结果提供一个附加的、特定的说明，除此之外，你也可以自行添加。这个参数是可选的，也可以忽略的。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("例如，查看"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/02-quick_start.html#//apple_ref/doc/uid/TP40014132-CH2-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick Start"),t("OutboundLink")],1),e._v("中的"),t("code",[e._v("testAddition")]),e._v("这个断言：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('XCTAssertEqualObjects([calcViewController.displayField stringValue], @"8", @"Part 1 failed.");\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("像自然语言一样读它，是这样的"),t("em",[e._v("Indicate a failure when a string created from the value of the controller’s display field is not the same as the reference string ‘8’.”")]),e._v("。如果断言失败，在测试导航器上，Xcode会单独展示一个失败的标志，Xcode也会在问题导航器上或者代码编辑器或者其他地方展示一个失败的描述。在源码编辑器上一个典型的结果是这样的：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://blog-img-1251534856.cos.ap-guangzhou.myqcloud.com/15377798351518478.jpg",alt:""}})]),e._v(" "),t("p",[e._v("一个测试方法可以包括多个断言，任意一个断言报告了失败，Xcode会标记这个测试方法为失败。")]),e._v(" "),t("p",[e._v("断言失败有五个种类，一定失败，相等测试，为空测试，真值测试和预期测试，例如：")]),e._v(" "),t("h3",{attrs:{id:"unconditional-fail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unconditional-fail"}},[e._v("#")]),e._v(" Unconditional Fail")]),e._v(" "),t("p",[e._v("XCTFail,一定产生失败")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTFail(format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"equality-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#equality-tests"}},[e._v("#")]),e._v(" Equality Tests")]),e._v(" "),t("p",[e._v("XCTAssertEqual, 当表达式1和表达式2不相等时给出失败。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertEqual(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("在"),t("a",{attrs:{href:"https://developer.apple.com/library/prerelease/content/documentation/DeveloperTools/Conceptual/testing_with_xcode/chapters/04-writing_tests.html#//apple_ref/doc/uid/TP40014132-CH4-SW35",target:"_blank",rel:"noopener noreferrer"}},[e._v("Assertions Listed by Category"),t("OutboundLink")],1),e._v("获取所有XCTest的断言。")]),e._v(" "),t("h2",{attrs:{id:"using-assertions-with-objective-c-and-swift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-assertions-with-objective-c-and-swift"}},[e._v("#")]),e._v(" Using Assertions with Objective-C and Swift")]),e._v(" "),t("p",[e._v("当使用XCTest断言的时候，你需要知道断言Swift代码和断言Object-C（其他类C语言）代码的基本的不同点。了解这些不同点让你编写和debug你的测试更简单。")]),e._v(" "),t("p",[e._v("XCTest断言做相等测试的时候区分对象比较和非对象比较。例如，"),t("code",[e._v("XCTAssertEqualObjects")]),e._v("测试两个表达式对象类型是否相等。而"),t("code",[e._v("XCTAssertEqual")]),e._v("测试两个表达式的值是否相等。这些差异通过在描述中显示为“此测试是标量的”，使在XCTest断言列表中是被标记的。用标量的方式来告诉你断言的基本区别，但是它不能精确的描述表达式不匹配。")]),e._v(" "),t("ul",[t("li",[e._v("对于Objective-C来说，被标记为量化类型的断言标记可以使用以下等式比较的算子：==,!=,<=,<,>=,>等。如果表达式解析C语言类型，或者数组比较，需要使用这些操作方式，会被当成一个标量来处理。")]),e._v(" "),t("li",[e._v("对于Swift来说，标记为标量的断言遵从"),t("em",[e._v("Equatable")]),e._v("标准（对于所有的相等和不想等的断言）和"),t("em",[e._v("Comparable")]),e._v("标准（大于或者小于断言），可以用来比较任意类型的表达式。另外，当"),t("em",[e._v("T，K，V")]),e._v("遵循"),t("em",[e._v("Equatable")]),e._v("和"),t("em",[e._v("Comparable")]),e._v("标准时，量化标记的断言优先针对*[T]"),t("em",[e._v("或者")]),e._v("[k:v]"),t("em",[e._v("。例如，"),t("em",[e._v("XCTAssertEqual")]),e._v("兼容一个合理的数组类型，"),t("em",[e._v("XCTAssertLessThan")]),e._v("也兼容字典的")]),e._v("KV对*的比较。")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("注意：在Swift中，"),t("em",[e._v("NSObject")]),e._v("遵从"),t("em",[e._v("Equatable")]),e._v("，所以使用"),t("em",[e._v("XCTAssertEqualObjects")]),e._v("也是可以工作的，但是这样不是必须的。")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Object——C和Swift在测试中使用XCTest断言也是不同的是因为语言处理数据类型和内部转换的方式不同。")]),e._v(" "),t("ul",[t("li",[e._v("对于Object——C来说，在XCTest实施内部转换的时候运行相互独立表达式类型的对比，不会检查输入的数据类型。")]),e._v(" "),t("li",[e._v("对于Swift来说，内部转换是不允许的，由于Swift的类别安全更严格，所有比较的成员必须是相同类型的。类型不匹配会在代码编辑器编写代码的时候被标记出来。")])]),e._v(" "),t("h2",{attrs:{id:"assertions-listed-by-category"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assertions-listed-by-category"}},[e._v("#")]),e._v(" Assertions Listed by Category")]),e._v(" "),t("p",[e._v("XCTestAssertions被分类为五组，无条件失败断言，相等测试，为空测试，真值测试和预期测试。")]),e._v(" "),t("p",[e._v("下面部分是XCTest断言的清单。你可以在Xcode使用快速帮助查看"),t("code",[e._v("XCTestAssertions.h")]),e._v("了解更多关于XCTest断言的信息。")]),e._v(" "),t("h3",{attrs:{id:"unconditional-fail-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unconditional-fail-2"}},[e._v("#")]),e._v(" Unconditional Fail")]),e._v(" "),t("p",[e._v("XCTFail，直接产生一个失败")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTFail(format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"equality-tests-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#equality-tests-2"}},[e._v("#")]),e._v(" Equality Tests")]),e._v(" "),t("p",[t("strong",[e._v("XCTAssertEqualObjects")]),e._v("，当表达式1不等于表达式2（或者一个对象是空，另一个不是）产生失败")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertEqualObjects(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNotEqualObjects")]),e._v(",当表达式1等于表达式2的时候产生失败")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNotEqualObjects(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertEqual")]),e._v("，当表达式1不等于表达式2的时候产生失败，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertEqual(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNotEqual")]),e._v("，当表达式1等于表达式2的时候产生错误，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNotEqual(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertEqualWithAccuracy")]),e._v(",当表达式1和表达式2大于精确度时产生一个错误，这个标量测试一般针对浮点和双精度，微小的不同之处可以让这些项目他们精确的不相等，但是对所有标量有效。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertEqualWithAccuracy(expression1, expression2, accuracy, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNotEqualWithAccuracy")]),e._v(",当表达式1和表达式2小于精确度时产生一个错误，这个标量测试一般针对浮点和双精度，微小的不同之处可以让这些项目他们精确的不相等，但是对所有标量有效。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNotEqualWithAccuracy(expression1, expression2, accuracy, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertGreaterThan")]),e._v("，当表达式1小于或者等于表达式2时产生一个错误，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertGreaterThan(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertGreaterThanOrEqual")]),e._v(",当表达式1小于表达式2时产生一个错误，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertGreaterThanOrEqual(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertLessThan")]),e._v(",当表达式1大于或者等于表达式2时产生一个错误，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertLessThan(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertLessThanOrEqual")]),e._v("，当表达式1大于表达式2时产生一个错误，这个针对标量测试。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertLessThanOrEqual(expression1, expression2, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"nil-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nil-tests"}},[e._v("#")]),e._v(" Nil Tests")]),e._v(" "),t("p",[t("strong",[e._v("XCTAssertNil")]),e._v(",当表达式参数不为空时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNil(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNotNil")]),e._v(",当表达式参数为空时产生一个错误。")]),e._v(" "),t("h3",{attrs:{id:"boolean-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-tests"}},[e._v("#")]),e._v(" Boolean Tests")]),e._v(" "),t("p",[t("strong",[e._v("XCTAssertTrue")]),e._v("，当表达式为"),t("em",[e._v("false")]),e._v("时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertTrue(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssert")]),e._v(",当表达式为"),t("em",[e._v("false")]),e._v("时产生一个错误，与"),t("em",[e._v("XCTAssertTrue")]),e._v("一样。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssert(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertFalse")]),e._v("，当表达式为"),t("em",[e._v("true")]),e._v("时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertFalse(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"exception-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exception-tests"}},[e._v("#")]),e._v(" Exception Tests")]),e._v(" "),t("p",[t("strong",[e._v("XCTAssertThrows")]),e._v(",当表达式没有抛出异常时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertThrows(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertThrowsSpecific")]),e._v(",当表达式没有抛出一个特定的类时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertThrowsSpecific(expression, exception_class, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertThrowsSpecificNamed")]),e._v(",当表达式没有抛出一个特殊的类和一个特殊的名称时产生一个错误。对于那些像AppKit和Foundation的框架个很有用，抛出一个普通的带有特殊名称（"),t("em",[e._v("NSInvalidArgumentException")]),e._v("等等）的"),t("em",[e._v("NSException")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertThrowsSpecificNamed(expression, exception_class, exception_name, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNoThrow")]),e._v("，当表达式抛出异常时产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNoThrow(expression, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNoThrowSpecific")]),e._v(".当表达式抛出一个特定的类时产生一个错误。任意一个其他异常事通过的。这就意味着，不产生一个错误。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNoThrowSpecific(expression, exception_class, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("XCTAssertNoThrowSpecificNamed")]),e._v(",当表达式抛出一个特殊的类和一个特殊的名称时产生一个错误。对于那些像AppKit和Foundation的框架个很有用，抛出一个普通的带有特殊名称（"),t("em",[e._v("NSInvalidArgumentException")]),e._v("等等）的"),t("em",[e._v("NSException")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("XCTAssertNoThrowSpecificNamed(expression, exception_class, exception_name, format...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);