(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(e,t,r){"use strict";var n=r(2),o=r(101),c=r(35),l=r(11),f=r(18),d=r(102),m=r(50),v=r(51),h=r(19),y=v("splice"),x=h("splice",{ACCESSORS:!0,0:0,1:2}),w=Math.max,C=Math.min;n({target:"Array",proto:!0,forced:!y||!x},{splice:function(e,t){var r,n,v,h,y,x,k=f(this),_=l(k.length),S=o(e,_),j=arguments.length;if(0===j?r=n=0:1===j?(r=0,n=_-S):(r=j-2,n=C(w(c(t),0),_-S)),_+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(v=d(k,n),h=0;h<n;h++)(y=S+h)in k&&m(v,h,k[y]);if(v.length=n,r<n){for(h=S;h<_-n;h++)x=h+r,(y=h+n)in k?k[x]=k[y]:delete k[x];for(h=_;h>_-n+r;h--)delete k[h-1]}else if(r>n)for(h=_-n;h>S;h--)x=h+r-1,(y=h+n-1)in k?k[x]=k[y]:delete k[x];for(h=0;h<r;h++)k[h+S]=arguments[h+2];return k.length=_-n+r,v}})},194:function(e,t,r){"use strict";r.r(t);r(33);var n=r(6);r(34),r(48),r(49),r(52),r(147),r(53),r(193),r(24),r(14),r(148),r(36),r(37),r(54),r(146),r(149),r(74),r(103),r(104),r(55);function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){f=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function l(e,t){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function e(input,t){var code,r,n,output,c,l,f,d,m,v,line,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:code=input.split("\n"),r=t?"\t":"    ",n="",output=[],c="",l=!1,f=new RegExp(/(player|executor|victim|attacker|{.*?})/,"gim"),d=new RegExp(/ (of|to) (player|executor|victim|attacker|{.*?})/,"gim"),code.push(""),m=o(code);try{for(m.s();!(v=m.n()).done;)(line=v.value).startsWith(" ")||line.startsWith("\t")||!l?/open virtual/gim.test(line)?(n=f.exec(line),"inventory"!==(h=(h=/.*?(?<= with| named| to)/gim.exec(line)[0]).split(" "))[h.length-2]&&(h.splice(h.length-1,0,"inventory"),line=line.replace(/.*?(?<=with|named|to)/gim.exec(line)[0]||"",h.join(" "))),line=(line=line.replace(d,"")).replace(/open virtual/gim,"create a gui with virtual")+":",c=line.match(/\s+/g)[0],l=!0):/(make|format|create)( a)? gui slot/gim.test(line)?(line=(line=(line=line.replace(d,"")).replace(/to (do)? nothing/gim,"")).replace(/(make|format|create)( a)? gui slot/gim,"make gui slot"),/ (to )?(run|exec|execute) using /gim.test(line)&&(line=line.replace(/ (to )?(run|exec|execute) using /gim,":\n"+c+r.repeat(2)+"gui-click-type is ").slice(0,-1)),/ (to )?(run|exec|execute)( function)? /gim.test(line)&&(line=(line=line.replace(/ (to )?(run|exec|execute)( function)? /gim,":\n"+c+r.repeat(2))).replace(/,( )?/gm,"\n"+c+r.repeat(2))),line=(line=(line=line.replace(/ (to )?(run|exec|execute):/gim,":"+c+r.repeat(2))).replace(/ to close( then)?(:)?/gim,":\n"+c+r.repeat(2)+"close "+n[0]+"'s inventory")).replace(f,"make $1 execute"),line=r+line):l&&(line=r+line):(output.push(c+"open last created gui to "+n[0]),l=!1),output.push(line)}catch(e){m.e(e)}finally{m.f()}return e.abrupt("return",output.join("\n"));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={name:"GuiConverter",data:function(){return{code:"",isUsingTabs:!1,isConverted:!1}},methods:{parse:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e.code,e.isUsingTabs);case 2:e.code=t.sent,e.$buefy.snackbar.open("Your code has been converted correctly. You can copy it directly."),e.isConverted=!0;case 5:case"end":return t.stop()}}),t)})))()},reset:function(){this.code="",this.isConverted=!1}}},m=r(30),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("section",{staticClass:"section"},[r("div",{staticClass:"container"},[r("b-field",{attrs:{label:"Your TuSKe code"}},[r("b-input",{attrs:{type:"textarea",rows:"10",readonly:e.isConverted},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),r("b-field",[r("b-button",{staticClass:"mr-5",attrs:{type:"is-primary",disabled:e.isConverted},on:{click:e.parse}},[e._v("\n          Convert\n        ")]),e._v(" "),r("b-button",{staticClass:"mr-5",attrs:{type:"is-light",disabled:!e.isConverted},on:{click:e.reset}},[e._v("\n          Reset\n        ")]),e._v(" "),r("b-checkbox",{attrs:{"native-value":"Silver",disabled:e.isConverted},model:{value:e.isUsingTabs,callback:function(t){e.isUsingTabs=t},expression:"isUsingTabs"}},[e._v("\n          I use tabulations\n        ")])],1)],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero is-primary"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[this._v("\n          GUI Converter\n        ")]),this._v(" "),t("h2",{staticClass:"subtitle"},[this._v("\n          If you want to switch from TuSKe to skript-gui, this converter will do the job for you.\n        ")])])])])}],!1,null,null,null);t.default=component.exports}}]);