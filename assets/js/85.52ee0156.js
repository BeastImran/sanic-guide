(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{530:function(t,e,a){"use strict";a.r(e);var s=a(20),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cors-protection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-protection"}},[t._v("#")]),t._v(" CORS protection")]),t._v(" "),a("p",[t._v("Cross-Origin Resource Sharing (aka CORS) is a "),a("em",[t._v("huge")]),t._v(" topic by itself. The documentation here cannot go into enough detail about "),a("em",[t._v("what")]),t._v(" it is. You are highly encouraged to do some research on your own to understand the security problem presented by it, and the theory behind the solutions. "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Web Docs"),a("OutboundLink")],1),t._v(" are a great first step.")]),t._v(" "),a("p",[t._v("In super brief terms, CORS protection is a framework that browsers use to facilitate how and when a web page can access information from another domain. It is extremely relevant to anyone building a single-page application. Often times your frontend might be on a domain like "),a("code",[t._v("https://portal.myapp.com")]),t._v(", but it needs to access the backend from "),a("code",[t._v("https://api.myapp.com")]),t._v(".")]),t._v(" "),a("p",[t._v("The implementation here is heavily inspired by "),a("a",{attrs:{href:"https://github.com/ashleysommer/sanic-cors",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("sanic-cors")]),a("OutboundLink")],1),t._v(", which is in turn based upon "),a("a",{attrs:{href:"https://github.com/corydolphin/flask-cors",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("flask-cors")]),a("OutboundLink")],1),t._v(". It is therefore very likely that you can achieve a near drop-in replacement of "),a("code",[t._v("sanic-cors")]),t._v(" with "),a("code",[t._v("sanic-ext")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"basic-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-implementation"}},[t._v("#")]),t._v(" Basic implementation")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("As shown in the example in the "),a("RouterLink",{attrs:{to:"/en/plugins/sanic-ext/http/methods.html#options"}},[t._v("auto-endpoints example")]),t._v(", Sanic Extensions will automatically enable CORS protection without further action. But, it does not offer too much out of the box.")],1),t._v(" "),a("p",[t._v("At a "),a("em",[t._v("bare minimum")]),t._v(", it is "),a("strong",[t._v("highly")]),t._v(" recommended that you set "),a("code",[t._v("config.CORS_ORIGINS")]),t._v(" to the intended origin(s) that will be accessing the application.")])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://foobar.com,http://bar.com"')]),t._v("\nExtend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ curl localhost:8000 -X OPTIONS -i\nHTTP/1.1 204 No Content\nallow: GET,HEAD,OPTIONS\naccess-control-allow-origin: http://foobar.com\nconnection: keep-alive\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The true power of CORS protection, however, comes into play once you start configuring it. Here is a table of all of the options.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("CORS_ALLOW_HEADERS")])]),t._v(" "),a("td",[a("code",[t._v("str")]),t._v(" or "),a("code",[t._v("List[str]")])]),t._v(" "),a("td",[a("code",[t._v('"*"')])]),t._v(" "),a("td",[t._v("The list of headers that will appear in "),a("code",[t._v("access-control-allow-headers")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_ALWAYS_SEND")])]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("True")])]),t._v(" "),a("td",[t._v("When "),a("code",[t._v("True")]),t._v(", will always set a value for "),a("code",[t._v("access-control-allow-origin")]),t._v(". When "),a("code",[t._v("False")]),t._v(", will only set it if there is an "),a("code",[t._v("Origin")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_AUTOMATIC_OPTIONS")])]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("True")])]),t._v(" "),a("td",[t._v("When the incoming preflight request is received, whether to automatically set values for "),a("code",[t._v("access-control-allow-headers")]),t._v(", "),a("code",[t._v("access-control-max-age")]),t._v(", and "),a("code",[t._v("access-control-allow-methods")]),t._v(" headers. If "),a("code",[t._v("False")]),t._v(" these values will only be set on routes that are decorated with the "),a("code",[t._v("@cors")]),t._v(" decorator.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_EXPOSE_HEADERS")])]),t._v(" "),a("td",[a("code",[t._v("str")]),t._v(" or "),a("code",[t._v("List[str]")])]),t._v(" "),a("td",[a("code",[t._v('""')])]),t._v(" "),a("td",[t._v("Specific list of headers to be set in "),a("code",[t._v("access-control-expose-headers")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_MAX_AGE")])]),t._v(" "),a("td",[a("code",[t._v("str")]),t._v(", "),a("code",[t._v("int")]),t._v(", "),a("code",[t._v("timedelta")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The maximum number of seconds the preflight response may be cached using the "),a("code",[t._v("access-control-max-age")]),t._v(" header. A falsey value will cause the header to not be set.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_METHODS")])]),t._v(" "),a("td",[a("code",[t._v("str")]),t._v(" or "),a("code",[t._v("List[str]")])]),t._v(" "),a("td",[a("code",[t._v('""')])]),t._v(" "),a("td",[t._v("The HTTP methods that the allowed origins can access, as set on the "),a("code",[t._v("access-control-allow-methods")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_ORIGINS")])]),t._v(" "),a("td",[a("code",[t._v("str")]),t._v(", "),a("code",[t._v("List[str]")]),t._v(", "),a("code",[t._v("re.Pattern")])]),t._v(" "),a("td",[a("code",[t._v('"*"')])]),t._v(" "),a("td",[t._v("The origins that are allowed to access the resource, as set on the "),a("code",[t._v("access-control-allow-origin")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_SEND_WILDCARD")])]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("False")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("True")]),t._v(", will send the wildcard "),a("code",[t._v("*")]),t._v(" origin instead of the "),a("code",[t._v("origin")]),t._v(" request header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_SUPPORTS_CREDENTIALS")])]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("False")])]),t._v(" "),a("td",[t._v("Whether to set the "),a("code",[t._v("access-control-allow-credentials")]),t._v(" header.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CORS_VARY_HEADER")])]),t._v(" "),a("td",[a("code",[t._v("bool")])]),t._v(" "),a("td",[a("code",[t._v("True")])]),t._v(" "),a("td",[t._v("Whether to add "),a("code",[t._v("vary")]),t._v(" header, when appropriate.")])])])]),t._v(" "),a("p",[a("em",[t._v("For the sake of brevity, where the above says "),a("code",[t._v("List[str]")]),t._v(" any instance of a "),a("code",[t._v("list")]),t._v(", "),a("code",[t._v("set")]),t._v(", "),a("code",[t._v("frozenset")]),t._v(", or "),a("code",[t._v("tuple")]),t._v(" will be acceptable. Alternatively, if the value is a "),a("code",[t._v("str")]),t._v(", it can be a comma delimited list.")])]),t._v(" "),a("h2",{attrs:{id:"route-level-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-level-overrides"}},[t._v("#")]),t._v(" Route level overrides")]),t._v(" "),a("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("p",[t._v("It may sometimes be necessary to override app-wide settings for a specific route. To allow for this, you can use the "),a("code",[t._v("@sanic_ext.cors()")]),t._v(" decorator to set different route-specific values.")]),t._v(" "),a("p",[t._v("The values that can be overridden with this decorator are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("origins")])]),t._v(" "),a("li",[a("code",[t._v("expose_headers")])]),t._v(" "),a("li",[a("code",[t._v("allow_headers")])]),t._v(" "),a("li",[a("code",[t._v("allow_methods")])]),t._v(" "),a("li",[a("code",[t._v("supports_credentials")])]),t._v(" "),a("li",[a("code",[t._v("max_age")])])])]),t._v(" "),a("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cors\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CORS_ORIGINS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://foo.com"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bar.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);