(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{517:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"流式传输-streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流式传输-streaming"}},[t._v("#")]),t._v(" 流式传输(Streaming)")]),t._v(" "),s("h2",{attrs:{id:"请求流-request-streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求流-request-streaming"}},[t._v("#")]),t._v(" 请求流(Request streaming)")]),t._v(" "),s("p",[t._v("Sanic 允许您以串流的形式接收并响应由客户端发送来的数据。")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("当在一个路由上启用了流式传输，您就可以使用 "),s("code",[t._v("await request.stream.read()")]),t._v(" 方法来获取请求数据流。")]),t._v(" "),s("p",[t._v("当请求中所有的数据都传输完毕后，该方法会返回 "),s("code",[t._v("None")]),t._v(" 值。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("views "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stream\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HTTPMethodView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@stream")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n            result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("在使用装饰器注册路由时也可以传入关键字参数来启动流式传输...")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/stream"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("... 或者在调用 "),s("code",[t._v("add_route")]),t._v(" 方法是传入该参数。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("bp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    bp_handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bp_stream"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("只有在 post，put 和 patch 装饰器中才有该参数。")])]),t._v(" "),s("h2",{attrs:{id:"响应流-response-streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应流-response-streaming"}},[t._v("#")]),t._v(" 响应流(Response streaming)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic 中的 "),s("code",[t._v("StreamingHTTPResponse")]),t._v(" 对象允许您将响应的内容串流给客户端。也可以使用 "),s("code",[t._v("sanic.response.stream")]),t._v(" 这个方法。")]),t._v(" "),s("p",[t._v("这个方法接受一个协程函数作为回调，同时，该回调必须接受一个参数，该参数是一个可以控制向客户端传输数据的对象。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" stream\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sample_streaming_fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo,"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sample_streaming_fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("流式传输在处理一些依赖第三方服务的场景下十分有用，比如数据库。下面的示例代码展示了使用 "),s("code",[t._v("asyncpg")]),t._v(" 提供的异步游标来为客户端串流数据库的查询结果。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stream_from_db")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncpg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" record "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT generate_series(0, 10)'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream_from_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),s("p",[t._v("如果客户端支持 HTTP/1.1，Sanic 将会使用 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("分块传输编码"),s("OutboundLink")],1),t._v(" 进行流式传输；您也可以指定是否启用分块传输编码选项。")])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("使用协程 + 回调的方式来进行流式传输已经是"),s("em",[t._v("明日黄花")]),t._v("。您应该使用新的方式来进行串流。新方式的好处是允许您以自然的语序来编写处理串流的响应函数代码（非回调）。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("respond"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo,"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eof"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response\n")])])])])]),t._v(" "),s("p",[t._v("在上述例子中调用 "),s("code",[t._v("await response.eof()")]),t._v(" 方法可以替代之前的 "),s("code",[t._v('await response.send("", True)')]),t._v(" 方法。为客户端传输完数据"),s("em",[t._v("后")]),t._v("，您应该在响应函数内调用"),s("strong",[t._v("一次")]),t._v("该方法。")]),t._v(" "),s("h2",{attrs:{id:"文件流-file-streaming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件流-file-streaming"}},[t._v("#")]),t._v(" 文件流(File streaming)")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic 提供了 "),s("code",[t._v("sanic.response.file_stream")]),t._v(" 函数来处理发送大文件的场景。该函数会返回一个 "),s("code",[t._v("StreamingHTTPResponse")]),t._v(" 对象，并且默认使用分块传输编码；因此 Sanic\n不会为该响应添加 "),s("code",[t._v("Content-Length")]),t._v(" 响应头。")]),t._v(" "),s("p",[t._v("通常，我们可能为客户端串流一个视频文件。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler_file_stream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file_stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/sample.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        chunk_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        mime_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/metalink4+xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Disposition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Attachment; filename=\"nicer_name.meta4\"'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/metalink4+xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("如果您想手动添加 "),s("code",[t._v("Content-Length")]),t._v(" 响应头，参考下面的代码。并且如果您添加了该头，则会自动禁用分块传输编码。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" aiofiles "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" async_os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" file_stream\n\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    file_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/srv/www/whatever.png"')]),t._v("\n\n    file_stat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" async_os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Length"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_stat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("st_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" file_stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        file_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);