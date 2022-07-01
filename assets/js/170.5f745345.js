(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{480:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"スタートアップ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#スタートアップ"}},[t._v("#")]),t._v(" スタートアップ")]),t._v(" "),s("p",[t._v("Sanic Extensionsは、SCOが開発し、保守している"),s("em",[t._v("公式サポート")]),t._v("のプラグインです。このプロジェクトの主な目的は、Web API と Web アプリケーションの開発を容易にするための追加機能を提供することです。")]),t._v(" "),s("h2",{attrs:{id:"機能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#機能"}},[t._v("#")]),t._v(" 機能")]),t._v(" "),s("ul",[s("li",[t._v("自動で"),s("code",[t._v("HEAD")]),t._v("、"),s("code",[t._v("OPTIONS")]),t._v("、"),s("code",[t._v("TRACE")]),t._v("エンドポイントを作成")]),t._v(" "),s("li",[t._v("CORSによる保護")]),t._v(" "),s("li",[t._v("あらかじめ定義されたエンドポイント固有のレスポンスシリアライザー")]),t._v(" "),s("li",[t._v("ルートハンドラへの引数挿入")]),t._v(" "),s("li",[t._v("RedocやSwaggerを使ったOpenAPIドキュメンテーション")]),t._v(" "),s("li",[t._v("リクエストのクエリ引数とボディ入力のバリデーション")])]),t._v(" "),s("h2",{attrs:{id:"最低要件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最低要件"}},[t._v("#")]),t._v(" 最低要件")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Python")]),t._v(": 3.8+")]),t._v(" "),s("li",[s("strong",[t._v("Sanic")]),t._v(": 21.9+")])]),t._v(" "),s("h2",{attrs:{id:"インストール"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[t._v("#")]),t._v(" インストール")]),t._v(" "),s("p",[t._v("一番良い方法は、Sanic本体と一緒にSanic Extensionsをインストールするだけです。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("もちろん、単体でインストールすることも可能です。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sanic-ext\n")])])]),s("h2",{attrs:{id:"アプリケーションを拡張"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#アプリケーションを拡張"}},[t._v("#")]),t._v(" アプリケーションを拡張")]),t._v(" "),s("p",[t._v("Sanic Extensionsは、特別な操作なしに、たくさんの機能を有効にしてくれます。")]),t._v(" "),s("div",{staticClass:"custom-block new"},[s("p",{staticClass:"custom-block-title"},[t._v("NEW in v21.12")]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[t._v("Sanic Extensions (v21.12+) をセットアップするために必要なこと: "),s("strong",[t._v("何もない")]),t._v("。環境にインストールされていれば、セットアップが完了し、すぐに使えるようになっています。")]),t._v(" "),s("p",[t._v("このコードは、"),s("RouterLink",{attrs:{to:"/ja/guide/getting-started.html"}},[t._v("Sanic Getting Started page")]),t._v(" にある Hello, world アプリを変更せずにそのまま使用しています_。")],1)]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("div",{staticClass:"multicolumn",staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("p",[s("strong",[t._v("古い非推奨の設定")])]),t._v(" "),s("p",[t._v("v21.9 では、"),s("code",[t._v("Extend")]),t._v(" でインスタンス化するのが最も簡単な方法です。")]),t._v(" "),s("p",[t._v("Sanic Getting Started page](../../guide/getting-started.md) の Hello, world アプリを見返してみると、ここで追加されているのはハイライトした2行だけであることがわかると思います。")])]),t._v(" "),s("div",{staticClass:"multicolumn-column",staticStyle:{"flex-grow":"1","flex-basis":"0"}},[s("div",{staticClass:"language-python extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Sanic\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" text\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sanic_ext "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Extend\n\napp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sanic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyHelloWorldApp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nExtend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello_world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("どのように設定されているかに関わらず、これでOpenAPIのドキュメントを閲覧し、機能の一部を確認することができるはずです。"),s("a",{attrs:{href:"http://localhost:8000/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8000/docs"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);