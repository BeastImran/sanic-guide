(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{356:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),s("p",[t._v("Sanic allows you to do different types of logging (access log, error log) on the requests based on the "),s("a",{attrs:{href:"https://docs.python.org/3/howto/logging.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python logging API"),s("OutboundLink")],1),t._v(". You should have some basic knowledge on Python logging if you want to create a new configuration.")]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("A simple example using default settings would be like this:")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" logger\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Here is your log'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("After the server is running, you should see logs like this.")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[2021-01-04 15:26:26 +0200] [1929659] [INFO] Goin' Fast @ http://127.0.0.1:8000\n[2021-01-04 15:26:26 +0200] [1929659] [INFO] Starting worker [1929659]\n")])])]),s("p",[t._v("You can send a request to server and it will print the log messages.")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[2021-01-04 15:26:28 +0200] [1929659] [INFO] Here is your log\n[2021-01-04 15:26:28 +0200] - (sanic.access)[INFO][127.0.0.1:44228]: GET http://localhost:8000/  200 -1\n")])])]),s("h2",{attrs:{id:"changing-sanic-loggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-sanic-loggers"}},[t._v("#")]),t._v(" Changing Sanic loggers")]),t._v(" "),s("p",[t._v("To use your own logging config, simply use "),s("code",[t._v("logging.config.dictConfig")]),t._v(", or pass "),s("code",[t._v("log_config")]),t._v(" when you initialize Sanic app.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logging_example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" log_config"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOGGING_CONFIG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("access_log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("FYI")]),t._v(" "),s("p",[t._v("Logging in Python is a relatively cheap operation. However, if you are serving a high number of requests and performance is a concern, all of that time logging out access logs adds up and becomes quite expensive.")]),t._v(" "),s("p",[t._v("This is a good opportunity to place Sanic behind a proxy (like nginx) and to do your access logging there. You will see a "),s("em",[t._v("significant")]),t._v(" increase in overall performance by disabling the "),s("code",[t._v("access_log")]),t._v(".")]),t._v(" "),s("p",[t._v("For optimal production performance, it is advised to run Sanic with "),s("code",[t._v("debug")]),t._v(" and "),s("code",[t._v("access_log")]),t._v(" disabled: "),s("code",[t._v("app.run(debug=False, access_log=False)")])])]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Sanic's default logging configuration is: "),s("code",[t._v("sanic.log.LOGGING_CONFIG_DEFAULTS")]),t._v(".")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("There are three loggers used in sanic, and must be defined if you want to create your own logging configuration:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Logger Name")])]),t._v(" "),s("th",[s("strong",[t._v("Use Case")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("sanic.root")])]),t._v(" "),s("td",[t._v("Used to log internal messages.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("sanic.error")])]),t._v(" "),s("td",[t._v("Used to log error logs.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("sanic.access")])]),t._v(" "),s("td",[t._v("Used to log access logs.")])])])])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}})]),t._v(" "),s("h3",{attrs:{id:"log-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-format"}},[t._v("#")]),t._v(" Log format")]),t._v(" "),s("p",[t._v("In addition to default parameters provided by Python ("),s("code",[t._v("asctime")]),t._v(", "),s("code",[t._v("levelname")]),t._v(", "),s("code",[t._v("message")]),t._v("), Sanic provides additional parameters for access logger with.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Log Context Parameter")]),t._v(" "),s("th",[t._v("Parameter Value")]),t._v(" "),s("th",[t._v("Datatype")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("host")])]),t._v(" "),s("td",[s("code",[t._v("request.ip")])]),t._v(" "),s("td",[s("code",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("request")])]),t._v(" "),s("td",[s("code",[t._v('request.method + " " + request.url')])]),t._v(" "),s("td",[s("code",[t._v("str")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("status")])]),t._v(" "),s("td",[s("code",[t._v("response")])]),t._v(" "),s("td",[s("code",[t._v("int")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("byte")])]),t._v(" "),s("td",[s("code",[t._v("len(response.body)")])]),t._v(" "),s("td",[s("code",[t._v("int")])])])])]),t._v(" "),s("p",[t._v("The default access log format is:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("%(asctime)s - (%(name)s)[%(levelname)s][%(host)s]: %(request)s %(message)s %(status)d %(byte)d\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);