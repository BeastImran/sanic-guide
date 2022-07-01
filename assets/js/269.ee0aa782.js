(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{577:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"跨域保护-cors-protection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域保护-cors-protection"}},[t._v("#")]),t._v(" 跨域保护（CORS protection）")]),t._v(" "),e("p",[t._v("跨域资源共享（aka CORS）本身就是一个 "),e("em",[t._v("巨大")]),t._v(" 的话题，这里的文档再多也不为过，至于它究竟是什么，建议您自行进行一些研究，以了解其存在的安全问题以及背后的理论解决方案。\n"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web Docs"),e("OutboundLink")],1),t._v(" 是很好的入门文章。")]),t._v(" "),e("p",[t._v("简而言之，CORS保护是一个框架，浏览器使用它来访问来自其他域的信息的时候能够有效地提升访问效率和缩短访问时间。它与任何构建单页应用程序的人都息息相关。 尤其是在您的前端页面位于类似 "),e("code",[t._v("https://portal.myapp.com")]),t._v("\n但它需要访问位于 "),e("code",[t._v("https://api.myapp.com")]),t._v(" 的后端的时候。")]),t._v(" "),e("p",[t._v("这一部分功能的实现深受 "),e("a",{attrs:{href:"https://github.com/ashleysommer/sanic-cors",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanic-cors"),e("OutboundLink")],1),t._v("\n的启发，它基于 "),e("a",{attrs:{href:"https://github.com/corydolphin/flask-cors",target:"_blank",rel:"noopener noreferrer"}},[t._v("flask-cors"),e("OutboundLink")],1),t._v(" 因此，您几乎可以直接使用 "),e("code",[t._v("sanic-ext")]),t._v(" 替换 "),e("code",[t._v("sanic-cors")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"基本实现-basic-implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本实现-basic-implementation"}},[t._v("#")]),t._v(" 基本实现（Basic implementation）")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("就如 "),e("RouterLink",{attrs:{to:"/zh/plugins/sanic-ext/http/methods.html#options"}},[t._v("自动创建响应程序示例")]),t._v(" 中所示例的那样，Sanic 拓展将会自动地启用跨域保护而不需要太多的操作，但是它也没有提供太多开箱即用的方法。")],1),t._v(" "),e("p",[t._v("强烈建议您设置 "),e("code",[t._v("config.CORS_ORIGINS")]),t._v(" 至少将需要访问的应用程序的域名添加到其中。")])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://foobar.com,http://bar.com"')]),t._v("\nExtend"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ curl localhost:8000 -X OPTIONS -i\nHTTP/1.1 204 No Content\nallow: GET,HEAD,OPTIONS\naccess-control-allow-origin: http://foobar.com\nconnection: keep-alive\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"配置-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-configuration"}},[t._v("#")]),t._v(" 配置（Configuration）")]),t._v(" "),e("p",[t._v("只有您合理地配置跨域保护，它才能发挥出真正的力量。下面是一张配置选项清单：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("配置名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_ALLOW_HEADERS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("str")]),t._v(", "),e("code",[t._v("List[str]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v('"*"')])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("被添加的值会在 "),e("code",[t._v("access-control-allow-headers")]),t._v(" 中的请求头列表中出现")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_ALWAYS_SEND")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bool")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("True")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当 "),e("code",[t._v("True")]),t._v(" 时，将总是为 "),e("code",[t._v("access-control-allow-headers")]),t._v(" 设置一个值。当 "),e("code",[t._v("False")]),t._v(" 时，仅当有 "),e("code",[t._v("Origin")]),t._v(" 请求头时才会设置值。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_AUTOMATIC_OPTIONS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bool")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("True")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当收到传入的预检请求时，是否自动设置 "),e("code",[t._v("access-control-allow-headers")]),t._v("、"),e("code",[t._v("access-control-max-age")]),t._v(" 和 "),e("code",[t._v("access-control-allow-methods")]),t._v(" 请求头的值。如果 "),e("code",[t._v("False")]),t._v(" 这些值将只应用在使用了 "),e("code",[t._v("@cors")]),t._v(" 装饰器装饰的路由上。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_EXPOSE_HEADERS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("str")]),t._v(", "),e("code",[t._v("List[str]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v('""')])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在"),e("code",[t._v("access-control-expose-headers")]),t._v(" 请求头中设置的特定请求头列表。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_MAX_AGE")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("str")]),t._v(", "),e("code",[t._v("int")]),t._v(", "),e("code",[t._v("timedelta")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("0")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("使用 "),e("code",[t._v("access-control-max-age")]),t._v(" 请求头可以缓存预检响应的最大秒数。 一个错误值将导致不设置请求头。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_METHODS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("str")]),t._v(", "),e("code",[t._v("List[str]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v('""')])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("允许的来源可以使用的 HTTP 访问方法，将设置在 "),e("code",[t._v("access-control-allow-methods")]),t._v(" 请求头中。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_ORIGINS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("str")]),t._v(", "),e("code",[t._v("List[str]")]),t._v(", "),e("code",[t._v("re.Pattern")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v('"*"')])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("允许访问资源的来源，将设置在 "),e("code",[t._v("access-control-allow-origin")]),t._v(" 请求头中。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_SEND_WILDCARD")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bool")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("False")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果为 "),e("code",[t._v("True")]),t._v("，将发送通配符 "),e("code",[t._v("*")]),t._v(" 源而不是 "),e("code",[t._v("Origin")]),t._v(" 请求头。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_SUPPORTS_CREDENTIALS")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bool")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("False")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否设置 "),e("code",[t._v("access-control-allow-credentials")]),t._v(" 请求头。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("CORS_VARY_HEADER")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("bool")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("True")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否在适当的时候添加 "),e("code",[t._v("vary")]),t._v(" 请求头。")])])])]),t._v(" "),e("p",[e("em",[t._v("为了提高易用性，上面提到的 "),e("code",[t._v("List[str]")]),t._v(" 任何一个 "),e("code",[t._v("list")]),t._v("、"),e("code",[t._v("set")]),t._v("、"),e("code",[t._v("frozenset")]),t._v(" 或 "),e("code",[t._v("tuple")]),t._v(" 的实例都将可用。或者，如果值是一个 "),e("code",[t._v("str")]),t._v("，它可以是一个逗号分隔的列表。")])]),t._v(" "),e("h2",{attrs:{id:"路由级别覆盖-route-level-overrides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由级别覆盖-route-level-overrides"}},[t._v("#")]),t._v(" 路由级别覆盖（Route level overrides）")]),t._v(" "),e("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("p",[t._v("有些时候我们需要对特定的路由进行跨域保护设置，为此，您可以使用 "),e("code",[t._v("@sanic_ext.cors()")]),t._v(" 装饰器来为不同的路由设置不同的跨域保护配置。")]),t._v(" "),e("p",[t._v("可以被此装饰器设置的值包括：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("origins")])]),t._v(" "),e("li",[e("code",[t._v("expose_headers")])]),t._v(" "),e("li",[e("code",[t._v("allow_headers")])]),t._v(" "),e("li",[e("code",[t._v("allow_methods")])]),t._v(" "),e("li",[e("code",[t._v("supports_credentials")])]),t._v(" "),e("li",[e("code",[t._v("max_age")])])])]),t._v(" "),e("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cors\n\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://foo.com"')]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@cors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bar.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);