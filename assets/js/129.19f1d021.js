(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{590:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),s("p",[t._v("Sanicでは、"),s("a",{attrs:{href:"https://docs.python.org/3/howto/logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python logging API"),s("OutboundLink")],1),t._v("に基づいて、さまざまなタイプのロギング(アクセスログ、エラーログ)を要求に対して実行できます。新しい設定を作成する場合は、Pythonロギングに関する基本的な知識が必要です。")]),t._v(" "),s("h2",{attrs:{id:"クイックスタート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#クイックスタート"}},[t._v("#")]),t._v(" クイックスタート")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("デフォルト設定を使用する簡単な例を次に示します。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logger\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Here is your log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("サーバーの実行後、次のようなログが表示されます。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[2021-01-04 15:26:26 +0200] [1929659] [INFO] Goin' Fast @ http://127.0.0.1:8000\n[2021-01-04 15:26:26 +0200] [1929659] [INFO] Starting worker [1929659]\n")])])]),s("p",[t._v("サーバに要求を送信すると、ログメッセージが出力されます。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[2021-01-04 15:26:28 +0200] [1929659] [INFO] Here is your log\n[2021-01-04 15:26:28 +0200] - (sanic.access)[INFO][127.0.0.1:44228]: GET http://localhost:8000/  200 -1\n")])])]),s("h2",{attrs:{id:"sanicのログを変える"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sanicのログを変える"}},[t._v("#")]),t._v(" Sanicのログを変える")]),t._v(" "),s("p",[t._v("独自のロギング設定を使用するには、"),s("code",[t._v("logging.config.dictConfig")]),t._v("を使用するか、Sanicアプリケーションを初期化するときに"),s("code",[t._v("log_config")]),t._v("を渡します。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log_config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOGGING_CONFIG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),s("p",[t._v("Pythonでのロギングは比較的安価な操作です。ただし、多数の要求を処理していて、パフォーマンスが懸念される場合は、アクセスログをログアウトする時間が増え、非常にコストがかかります。")]),t._v(" "),s("p",[t._v("これは、 (nginxのような) プロキシの背後にSanicを置き、そこでアクセスログを取る良い機会です。"),s("code",[t._v("access_log")]),t._v("を無効にすると、全体的なパフォーマンスが"),s("em",[t._v("大幅に")]),t._v("向上します。")]),t._v(" "),s("p",[t._v("最適な運用パフォーマンスを得るには、"),s("code",[t._v("debug")]),t._v("と"),s("code",[t._v("access_log")]),t._v("を無効にした状態で、"),s("code",[t._v("app.run(debug=False、access_log=False)")]),t._v("でSanicを実行することをお勧めします。")])]),t._v(" "),s("h2",{attrs:{id:"構成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#構成"}},[t._v("#")]),t._v(" 構成")]),t._v(" "),s("p",[t._v("Sanicのデフォルトのロギング設定は、"),s("code",[t._v("sanic.log。LOGGING_CONFIG_DEFAULTS")]),t._v("を参照してください。")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("sanicで使用されるロガーは3つあり、独自のロギング設定を作成する場合は定義する必要があります。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Logger Name")])]),t._v(" "),s("th",[s("strong",[t._v("Use Case")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("sanic.root")])]),t._v(" "),s("td",[t._v("内部メッセージのログに使用されます。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("sanic.error")])]),t._v(" "),s("td",[t._v("エラーログの記録に使用されます。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("sanic.access")])]),t._v(" "),s("td",[t._v("アクセスログの記録に使用されます。")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})]),t._v(" "),s("h3",{attrs:{id:"ログのフォーマット"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ログのフォーマット"}},[t._v("#")]),t._v(" ログのフォーマット")]),t._v(" "),s("p",[t._v("Pythonが提供するデフォルトのパラメータ("),s("code",[t._v("asctime")]),t._v(","),s("code",[t._v("levelname")]),t._v(","),s("code",[t._v("message")]),t._v(")に加えて、SanicはAccess Loggerに追加のパラメータを提供します。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Log Context Parameter")]),t._v(" "),s("th",[t._v("Parameter Value")]),t._v(" "),s("th",[t._v("Datatype")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("host")])]),t._v(" "),s("td",[s("code",[t._v("request.ip")])]),t._v(" "),s("td",[s("code",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("request")])]),t._v(" "),s("td",[s("code",[t._v('request.method + " " + request.url')])]),t._v(" "),s("td",[s("code",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("status")])]),t._v(" "),s("td",[s("code",[t._v("response")])]),t._v(" "),s("td",[s("code",[t._v("int")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("byte")])]),t._v(" "),s("td",[s("code",[t._v("len(response.body)")])]),t._v(" "),s("td",[s("code",[t._v("int")])])])])]),t._v(" "),s("p",[t._v("デフォルトのアクセスログ形式は次のとおりです。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("%(asctime)s - (%(name)s)[%(levelname)s][%(host)s]: %(request)s %(message)s %(status)d %(byte)d\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);