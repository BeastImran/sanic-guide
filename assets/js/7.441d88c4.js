(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8,12],{242:function(t,r,n){},244:function(t,r,n){"use strict";n(242)},245:function(t,r,n){"use strict";n.r(r);var i={props:["avatar","profile","login"]},o=(n(244),n(3)),a=Object(o.a)(i,(function(){var t=this._self._c;return t("div",[t("img",{attrs:{src:this.avatar}}),this._v(" "),t("a",{attrs:{href:this.profile,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n      @"+this._s(this.login)+"\n    ")])])}),[],!1,null,"5b1d9e99",null);r.default=a.exports},254:function(t,r,n){},257:function(t,r,n){"use strict";n.r(r);var i={components:{Contributor:n(245).default},props:["contrib"]},o=n(3),a=Object(o.a)(i,(function(){var t=this._self._c;return t("li",[t("Contributor",{attrs:{avatar:this.contrib.avatar_url,profile:this.contrib.html_url,login:this.contrib.login}})],1)}),[],!1,null,null,null);r.default=a.exports},263:function(t,r,n){"use strict";n(254)},288:function(t,r,n){"use strict";n.r(r);var i={components:{ContributorWrapper:n(257).default},props:["title","contributors","additional","more"]},o=(n(263),n(3)),a=Object(o.a)(i,(function(){var t=this,r=t._self._c;return r("div",[t.title?r("h4",[t._v(t._s(t.title))]):t._e(),t._v(" "),r("ul",[t._l(t.contributors,(function(t){return r("ContributorWrapper",{key:t.id,attrs:{contrib:t}})})),t._v(" "),t._t("default")],2),t._v(" "),t.additional?r("div",{staticClass:"additional"},[r("a",{attrs:{href:t.more,target:"_blank"}},[t._v("+"+t._s(t.additional)+" more")])]):t._e()])}),[],!1,null,"2ba36891",null);r.default=a.exports}}]);