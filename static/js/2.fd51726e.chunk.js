webpackJsonp([2],{1316:function(e,t,n){"use strict";function r(e){var t=[],n=new o.a(e);t.push(n);var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},c=e.languageId;t.push(monaco.languages.registerCompletionItemProvider(c,new i.a(r))),t.push(monaco.languages.registerHoverProvider(c,new i.g(r))),t.push(monaco.languages.registerDocumentSymbolProvider(c,new i.f(r))),t.push(monaco.languages.registerDocumentFormattingEditProvider(c,new i.d(r))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(c,new i.e(r))),t.push(new i.b(c,r,e)),t.push(monaco.languages.setTokensProvider(c,Object(a.a)(!0))),t.push(monaco.languages.setLanguageConfiguration(c,u)),t.push(monaco.languages.registerColorProvider(c,new i.c(r)))}Object.defineProperty(t,"__esModule",{value:!0}),t.setupMode=r;var o=n(1537),i=n(1538),a=n(1540),u={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}},1392:function(e,t,n){"use strict";function r(e,t){function n(t,n){for(var r=0,o=0;r<t||!n;){var i=e.charCodeAt(d);if(i>=48&&i<=57)o=16*o+i-48;else if(i>=65&&i<=70)o=16*o+i-65+10;else{if(!(i>=97&&i<=102))break;o=16*o+i-97+10}d++,r++}return r<t&&(o=-1),o}function r(e){d=e,g="",p=0,v=16,m=0}function u(){var t=d;if(48===e.charCodeAt(d))d++;else for(d++;d<e.length&&a(e.charCodeAt(d));)d++;if(d<e.length&&46===e.charCodeAt(d)){if(!(++d<e.length&&a(e.charCodeAt(d))))return m=3,e.substring(t,d);for(d++;d<e.length&&a(e.charCodeAt(d));)d++}var n=d;if(d<e.length&&(69===e.charCodeAt(d)||101===e.charCodeAt(d)))if(d++,(d<e.length&&43===e.charCodeAt(d)||45===e.charCodeAt(d))&&d++,d<e.length&&a(e.charCodeAt(d))){for(d++;d<e.length&&a(e.charCodeAt(d));)d++;n=d}else m=3;return e.substring(t,n)}function c(){for(var t="",r=d;;){if(d>=h){t+=e.substring(r,d),m=2;break}var o=e.charCodeAt(d);if(34===o){t+=e.substring(r,d),d++;break}if(92!==o){if(o>=0&&o<=31){if(i(o)){t+=e.substring(r,d),m=2;break}m=6}d++}else{if(t+=e.substring(r,d),++d>=h){m=2;break}switch(o=e.charCodeAt(d++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=n(4,!0);a>=0?t+=String.fromCharCode(a):m=4;break;default:m=5}r=d}}return t}function s(){if(g="",m=0,p=d,d>=h)return p=h,v=17;var t=e.charCodeAt(d);if(o(t)){do{d++,g+=String.fromCharCode(t),t=e.charCodeAt(d)}while(o(t));return v=15}if(i(t))return d++,g+=String.fromCharCode(t),13===t&&10===e.charCodeAt(d)&&(d++,g+="\n"),v=14;switch(t){case 123:return d++,v=1;case 125:return d++,v=2;case 91:return d++,v=3;case 93:return d++,v=4;case 58:return d++,v=6;case 44:return d++,v=5;case 34:return d++,g=c(),v=10;case 47:var n=d-1;if(47===e.charCodeAt(d+1)){for(d+=2;d<h&&!i(e.charCodeAt(d));)d++;return g=e.substring(n,d),v=12}if(42===e.charCodeAt(d+1)){d+=2;for(var r=!1;d<h;){if(42===e.charCodeAt(d)&&d+1<h&&47===e.charCodeAt(d+1)){d+=2,r=!0;break}d++}return r||(d++,m=1),g=e.substring(n,d),v=13}return g+=String.fromCharCode(t),d++,v=16;case 45:if(g+=String.fromCharCode(t),++d===h||!a(e.charCodeAt(d)))return v=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return g+=u(),v=11;default:for(;d<h&&f(t);)d++,t=e.charCodeAt(d);if(p!==d){switch(g=e.substring(p,d)){case"true":return v=8;case"false":return v=9;case"null":return v=7}return v=16}return g+=String.fromCharCode(t),d++,v=16}}function f(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:return!1}return!0}function l(){var e;do{e=s()}while(e>=12&&e<=15);return e}void 0===t&&(t=!1);var d=0,h=e.length,g="",p=0,v=16,m=0;return{setPosition:r,getPosition:function(){return d},scan:t?l:s,getToken:function(){return v},getTokenValue:function(){return g},getTokenOffset:function(){return p},getTokenLength:function(){return d-p},getTokenError:function(){return m}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}t.a=r},1434:function(e,t,n){"use strict";function r(e,t,n){function r(){return b+o(m,l+k)}function s(){var e=w.scan();for(y=!1;15===e||14===e;)y=y||14===e,e=w.scan();return _=16===e||0!==w.getTokenError(),e}function f(t,n,r){!_&&n<p&&r>g&&e.substring(n,r)!==t&&C.push({offset:n,length:r-n,content:t})}var l,d,h,g,p;if(t){for(g=t.offset,p=g+t.length,h=g;h>0&&!u(e,h-1);)h--;for(var v=p;v<e.length&&!u(e,v);)v++;d=e.substring(h,v),l=i(d,0,n)}else d=e,l=0,h=0,g=0,p=e.length;var m,b=a(n,e),y=!1,k=0;m=n.insertSpaces?o(" ",n.tabSize||4):"\t";var w=Object(c.a)(d,!1),_=!1,C=[],E=s();if(17!==E){var T=w.getTokenOffset()+h;f(o(m,l),h,T)}for(;17!==E;){for(var S=w.getTokenOffset()+w.getTokenLength()+h,A=s(),O="";!y&&(12===A||13===A);){f(" ",S,w.getTokenOffset()+h),S=w.getTokenOffset()+w.getTokenLength()+h,O=12===A?r():"",A=s()}if(2===A)1!==E&&(k--,O=r());else if(4===A)3!==E&&(k--,O=r());else{switch(E){case 3:case 1:k++,O=r();break;case 5:case 12:O=r();break;case 13:O=y?r():" ";break;case 6:O=" ";break;case 10:if(6===A){O="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===A||13===A?O=" ":5!==A&&17!==A&&(_=!0);break;case 16:_=!0}!y||12!==A&&13!==A||(O=r())}f(O,S,w.getTokenOffset()+h),E=A}return C}function o(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function i(e,t,n){for(var r=0,o=0,i=n.tabSize||4;r<e.length;){var a=e.charAt(r);if(" "===a)o++;else{if("\t"!==a)break;o+=i}r++}return Math.floor(o/i)}function a(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}function u(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}t.a=r,t.b=u;var c=n(1392)},1435:function(e,t,n){"use strict";function r(e,t){function n(e,t,n,r){a.value=e,a.offset=t,a.length=n,a.type=r,a.columnOffset=void 0,i=a}var r=[],o=new Object,i=void 0,a={value:{},offset:0,length:0,type:"object"},u=!1;try{c(e,{onObjectBegin:function(e,n){if(t<=e)throw o;i=void 0,u=t>e,r.push("")},onObjectProperty:function(e,i,a){if(t<i)throw o;if(n(e,i,a,"property"),r[r.length-1]=e,t<=i+a)throw o},onObjectEnd:function(e,n){if(t<=e)throw o;i=void 0,r.pop()},onArrayBegin:function(e,n){if(t<=e)throw o;i=void 0,r.push(0)},onArrayEnd:function(e,n){if(t<=e)throw o;i=void 0,r.pop()},onLiteralValue:function(e,r,i){if(t<r)throw o;if(n(e,r,i,f(e)),t<=r+i)throw o},onSeparator:function(e,n,a){if(t<=n)throw o;if(":"===e&&i&&"property"===i.type)i.columnOffset=n,u=!1,i=void 0;else if(","===e){var c=r[r.length-1];"number"===typeof c?r[r.length-1]=c+1:(u=!0,r[r.length-1]=""),i=void 0}}})}catch(e){if(e!==o)throw e}return{path:r,previousNode:i,isAtPropertyKey:u,matches:function(e){for(var t=0,n=0;t<e.length&&n<r.length;n++)if(e[t]===r[n]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}}function o(e,t,n){function r(e){Array.isArray(i)?i.push(e):o&&(i[o]=e)}void 0===t&&(t=[]);var o=null,i=[],a=[];return c(e,{onObjectBegin:function(){var e={};r(e),a.push(i),i=e,o=null},onObjectProperty:function(e){o=e},onObjectEnd:function(){i=a.pop()},onArrayBegin:function(){var e=[];r(e),a.push(i),i=e,o=null},onArrayEnd:function(){i=a.pop()},onLiteralValue:r,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),i[0]}function i(e,t,n){function r(e){"property"===i.type&&(i.length=e-i.offset,i=i.parent)}function o(e){return i.children.push(e),e}void 0===t&&(t=[]);var i={type:"array",offset:-1,length:-1,children:[]};c(e,{onObjectBegin:function(e){i=o({type:"object",offset:e,length:-1,parent:i,children:[]})},onObjectProperty:function(e,t,n){i=o({type:"property",offset:t,length:-1,parent:i,children:[]}),i.children.push({type:"string",value:e,offset:t,length:n,parent:i})},onObjectEnd:function(e,t){i.length=e+t-i.offset,i=i.parent,r(e+t)},onArrayBegin:function(e,t){i=o({type:"array",offset:e,length:-1,parent:i,children:[]})},onArrayEnd:function(e,t){i.length=e+t-i.offset,i=i.parent,r(e+t)},onLiteralValue:function(e,t,n){o({type:f(e),offset:t,length:n,parent:i,value:e}),r(t+n)},onSeparator:function(e,t,n){"property"===i.type&&(":"===e?i.columnOffset=t:","===e&&r(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var a=i.children[0];return a&&delete a.parent,a}function a(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r];if("string"===typeof i){if("object"!==n.type||!Array.isArray(n.children))return;for(var a=!1,u=0,c=n.children;u<c.length;u++){var s=c[u];if(Array.isArray(s.children)&&s.children[0].value===i){n=s.children[1],a=!0;break}}if(!a)return}else{var f=i;if("array"!==n.type||f<0||!Array.isArray(n.children)||f>=n.children.length)return;n=n.children[f]}}return n}}function u(e){if("array"===e.type)return e.children.map(u);if("object"===e.type){for(var t=Object.create(null),n=0,r=e.children;n<r.length;n++){var o=r[n];t[o.children[0].value]=u(o.children[1])}return t}return e.value}function c(e,t,n){function r(e){return e?function(){return e(g.getTokenOffset(),g.getTokenLength())}:function(){return!0}}function o(e){return e?function(t){return e(t,g.getTokenOffset(),g.getTokenLength())}:function(){return!0}}function i(){for(;;){var e=g.scan();switch(g.getTokenError()){case 4:a(14);break;case 5:a(15);break;case 3:a(13);break;case 1:E||a(11);break;case 2:a(12);break;case 6:a(16)}switch(e){case 12:case 13:E?a(10):_();break;case 16:a(1);break;case 15:case 14:break;default:return e}}}function a(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),C(e),t.length+n.length>0)for(var r=g.getToken();17!==r;){if(-1!==t.indexOf(r)){i();break}if(-1!==n.indexOf(r))break;r=i()}}function u(e){var t=g.getTokenValue();return e?k(t):v(t),i(),!0}function c(){switch(g.getToken()){case 11:var e=0;try{e=JSON.parse(g.getTokenValue()),"number"!==typeof e&&(a(2),e=0)}catch(e){a(2)}k(e);break;case 7:k(null);break;case 8:k(!0);break;case 9:k(!1);break;default:return!1}return i(),!0}function s(){return 10!==g.getToken()?(a(3,[],[2,5]),!1):(u(!1),6===g.getToken()?(w(":"),i(),h()||a(4,[],[2,5])):a(5,[],[2,5]),!0)}function f(){p(),i();for(var e=!1;2!==g.getToken()&&17!==g.getToken();){if(5===g.getToken()){if(e||a(4,[],[]),w(","),i(),2===g.getToken()&&T)break}else e&&a(6,[],[]);s()||a(4,[],[2,5]),e=!0}return m(),2!==g.getToken()?a(7,[2],[]):i(),!0}function d(){b(),i();for(var e=!1;4!==g.getToken()&&17!==g.getToken();){if(5===g.getToken()){if(e||a(4,[],[]),w(","),i(),4===g.getToken()&&T)break}else e&&a(6,[],[]);h()||a(4,[],[4,5]),e=!0}return y(),4!==g.getToken()?a(8,[4],[]):i(),!0}function h(){switch(g.getToken()){case 3:return d();case 1:return f();case 10:return u(!0);default:return c()}}var g=Object(l.a)(e,!1),p=r(t.onObjectBegin),v=o(t.onObjectProperty),m=r(t.onObjectEnd),b=r(t.onArrayBegin),y=r(t.onArrayEnd),k=o(t.onLiteralValue),w=o(t.onSeparator),_=r(t.onComment),C=o(t.onError),E=n&&n.disallowComments,T=n&&n.allowTrailingComma;return i(),17===g.getToken()||(h()?(17!==g.getToken()&&a(9,[],[]),!0):(a(4,[],[]),!1))}function s(e,t){var n,r,o=Object(l.a)(e),i=[],a=0;do{switch(r=o.getPosition(),n=o.scan()){case 12:case 13:case 17:a!==r&&i.push(e.substring(a,r)),void 0!==t&&i.push(o.getTokenValue().replace(/[^\r\n]/g,t)),a=o.getPosition()}}while(17!==n);return i.join("")}function f(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return"null"}}t.b=r,t.d=o,t.e=i,t.a=a,t.c=u,t.g=c,t.f=s;var l=n(1392)},1537:function(e,t,n){"use strict";function r(e){var t,n,r=new o(function(e,r){t=e,n=r},function(){});return e.then(t,n),r}n.d(t,"a",function(){return i});var o=monaco.Promise,i=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o;return r(this._getClient().then(function(e){o=e}).then(function(n){return e._worker.withSyncedResources(t)}).then(function(e){return o}))},e}()},1538:function(e,t,n){"use strict";function r(e){switch(e){case m.b.Error:return monaco.MarkerSeverity.Error;case m.b.Warning:return monaco.MarkerSeverity.Warning;case m.b.Information:return monaco.MarkerSeverity.Info;case m.b.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function o(e,t){var n="number"===typeof t.code?String(t.code):t.code;return{severity:r(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}function i(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function a(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function u(e){if(e)return new y(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function c(e){var t=monaco.languages.CompletionItemKind;switch(e){case m.a.Text:return t.Text;case m.a.Method:return t.Method;case m.a.Function:return t.Function;case m.a.Constructor:return t.Constructor;case m.a.Field:return t.Field;case m.a.Variable:return t.Variable;case m.a.Class:return t.Class;case m.a.Interface:return t.Interface;case m.a.Module:return t.Module;case m.a.Property:return t.Property;case m.a.Unit:return t.Unit;case m.a.Value:return t.Value;case m.a.Enum:return t.Enum;case m.a.Keyword:return t.Keyword;case m.a.Snippet:return t.Snippet;case m.a.Color:return t.Color;case m.a.File:return t.File;case m.a.Reference:return t.Reference}return t.Property}function s(e){if(e)return{range:u(e.range),text:e.newText}}function f(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function l(e){return"string"===typeof e?{value:e}:f(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function d(e){if(e)return Array.isArray(e)?e.map(l):[l(e)]}function h(e){return{uri:b.parse(e.uri),range:u(e.range)}}function g(e){var t=monaco.languages.SymbolKind;switch(e){case m.e.File:return t.Array;case m.e.Module:return t.Module;case m.e.Namespace:return t.Namespace;case m.e.Package:return t.Package;case m.e.Class:return t.Class;case m.e.Method:return t.Method;case m.e.Property:return t.Property;case m.e.Field:return t.Field;case m.e.Constructor:return t.Constructor;case m.e.Enum:return t.Enum;case m.e.Interface:return t.Interface;case m.e.Function:return t.Function;case m.e.Variable:return t.Variable;case m.e.Constant:return t.Constant;case m.e.String:return t.String;case m.e.Number:return t.Number;case m.e.Boolean:return t.Boolean;case m.e.Array:return t.Array}return t.Function}function p(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}function v(e,t){return t.cancel&&e.onCancellationRequested(function(){return t.cancel()}),t}n.d(t,"b",function(){return k}),n.d(t,"a",function(){return w}),n.d(t,"g",function(){return _}),n.d(t,"f",function(){return C}),n.d(t,"d",function(){return E}),n.d(t,"e",function(){return T}),n.d(t,"c",function(){return S});var m=n(1539),b=monaco.Uri,y=monaco.Range,k=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t=e.getModeId();if(t===r._languageId){var n;r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t)}},i=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){i(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){i(e.model),o(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(i(e),o(e))})})),this._disposables.push({dispose:function(){monaco.editor.getModels().forEach(i);for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(t){t.resetSchema(e.toString())})},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(t){return o(e,t)}),i=monaco.editor.getModel(e);i.getModeId()===t&&monaco.editor.setModelMarkers(i,t,r)})}).then(void 0,function(e){console.error(e)})},e}(),w=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){var r=(e.getWordUntilPosition(t),e.uri);return v(n,this._worker(r).then(function(e){return e.doComplete(r.toString(),i(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:c(e.kind)};return e.textEdit&&(t.range=u(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===m.c.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}(),_=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.doHover(r.toString(),i(t))}).then(function(e){if(e)return{range:u(e.range),contents:d(e.contents)}}))},e}(),C=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return v(t,this._worker(n).then(function(e){return e.findDocumentSymbols(n.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,containerName:e.containerName,kind:g(e.kind),location:h(e.location)}})}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.format(r.toString(),null,p(t)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}(),T=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri;return v(r,this._worker(o).then(function(e){return e.format(o.toString(),a(t),p(n)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}(),S=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return v(t,this._worker(n).then(function(e){return e.findDocumentColors(n.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:u(e.range)}})}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return v(n,this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),t.color,a(t.range))}).then(function(e){if(e)return e.map(function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=s(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(s)),t})}))},e}()},1539:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"d",function(){return p}),n.d(t,"a",function(){return v}),n.d(t,"c",function(){return m}),n.d(t,"e",function(){return T});var r;!function(e){function t(e,t){return{line:e,character:t}}function n(e){var t=e;return M.defined(t)&&M.number(t.line)&&M.number(t.character)}e.create=t,e.is=n}(r||(r={}));var o;!function(e){function t(e,t,n,o){if(M.number(e)&&M.number(t)&&M.number(n)&&M.number(o))return{start:r.create(e,t),end:r.create(n,o)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+o+"]")}function n(e){var t=e;return M.defined(t)&&r.is(t.start)&&r.is(t.end)}e.create=t,e.is=n}(o||(o={}));var i;!function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return M.defined(t)&&o.is(t.range)&&(M.string(t.uri)||M.undefined(t.uri))}e.create=t,e.is=n}(i||(i={}));var a;!function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(a||(a={}));var u;!function(e){function t(e,t,n,r,o){var i={range:e,message:t};return M.defined(n)&&(i.severity=n),M.defined(r)&&(i.code=r),M.defined(o)&&(i.source=o),i}function n(e){var t=e;return M.defined(t)&&o.is(t.range)&&M.string(t.message)&&(M.number(t.severity)||M.undefined(t.severity))&&(M.number(t.code)||M.string(t.code)||M.undefined(t.code))&&(M.string(t.source)||M.undefined(t.source))}e.create=t,e.is=n}(u||(u={}));var c;!function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={title:e,command:t};return M.defined(n)&&n.length>0&&(o.arguments=n),o}function n(e){var t=e;return M.defined(t)&&M.string(t.title)&&M.string(t.title)}e.create=t,e.is=n}(c||(c={}));var s;!function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}e.replace=t,e.insert=n,e.del=r}(s||(s={}));var f;!function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return M.defined(t)&&h.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(f||(f={}));var l,d=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(s.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(s.replace(e,t))},e.prototype.delete=function(e){this.edits.push(s.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new d(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new d(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(h.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e,n=this._textEditChanges[t.uri];if(!n){var r=[],o={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(o),n=new d(r),this._textEditChanges[t.uri]=n}return n}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new d(r),this._textEditChanges[e]=n}return n}}();!function(e){function t(e){return{uri:e}}function n(e){var t=e;return M.defined(t)&&M.string(t.uri)}e.create=t,e.is=n}(l||(l={}));var h;!function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return M.defined(t)&&M.string(t.uri)&&M.number(t.version)}e.create=t,e.is=n}(h||(h={}));var g;!function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return M.defined(t)&&M.string(t.uri)&&M.string(t.languageId)&&M.number(t.version)&&M.string(t.text)}e.create=t,e.is=n}(g||(g={}));var p;!function(e){e.PlainText="plaintext",e.Markdown="markdown"}(p||(p={}));var v;!function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(v||(v={}));var m;!function(e){e.PlainText=1,e.Snippet=2}(m||(m={}));var b;!function(e){function t(e){return{label:e}}e.create=t}(b||(b={}));var y;!function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(y||(y={}));var k;!function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=t}(k||(k={}));var w;!function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(w||(w={}));var _;!function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o={label:e};return M.defined(t)&&(o.documentation=t),M.defined(n)?o.parameters=n:o.parameters=[],o}e.create=t}(_||(_={}));var C;!function(e){e.Text=1,e.Read=2,e.Write=3}(C||(C={}));var E;!function(e){function t(e,t){var n={range:e};return M.number(t)&&(n.kind=t),n}e.create=t}(E||(E={}));var T;!function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(T||(T={}));var S;!function(e){function t(e,t,n,r,o){var i={name:e,kind:t,location:{uri:r,range:n}};return o&&(i.containerName=o),i}e.create=t}(S||(S={}));var A;!function(e){function t(e){return{diagnostics:e}}function n(e){var t=e;return M.defined(t)&&M.typedArray(t.diagnostics,u.is)}e.create=t,e.is=n}(A||(A={}));var O;!function(e){function t(e,t){var n={range:e};return M.defined(t)&&(n.data=t),n}function n(e){var t=e;return M.defined(t)&&o.is(t.range)&&(M.undefined(t.command)||c.is(t.command))}e.create=t,e.is=n}(O||(O={}));var x;!function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return M.defined(t)&&M.number(t.tabSize)&&M.boolean(t.insertSpaces)}e.create=t,e.is=n}(x||(x={}));var j=function(){function e(){}return e}();!function(e){function t(e,t){return{range:e,target:t}}function n(e){var t=e;return M.defined(t)&&o.is(t.range)&&(M.undefined(t.target)||M.string(t.target))}e.create=t,e.is=n}(j||(j={}));var I;!function(e){function t(e,t,n,r){return new D(e,t,n,r)}function n(e){var t=e;return!!(M.defined(t)&&M.string(t.uri)&&(M.undefined(t.languageId)||M.string(t.languageId))&&M.number(t.lineCount)&&M.func(t.getText)&&M.func(t.positionAt)&&M.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=o(t,function(e,t){return 0===e.range.start.line-t.range.start.line?e.range.start.character-t.range.start.character:0}),i=n.length,a=r.length-1;a>=0;a--){var u=r[a],c=e.offsetAt(u.range.start),s=e.offsetAt(u.range.end);if(!(s<=i))throw new Error("Ovelapping edit");n=n.substring(0,c)+u.newText+n.substring(s,n.length),i=c}return n}function o(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),i=e.slice(n);o(r,t),o(i,t);for(var a=0,u=0,c=0;a<r.length&&u<i.length;){var s=t(r[a],i[u]);e[c++]=s<=0?r[a++]:i[u++]}for(;a<r.length;)e[c++]=r[a++];for(;u<i.length;)e[c++]=i[u++];return e}e.create=t,e.is=n,e.applyEdits=r}(I||(I={}));var P;!function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(P||(P={}));var M,D=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var o=t.charAt(r);n="\r"===o||"\n"===o,"\r"===o&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,o=t.length;if(0===o)return r.create(0,e);for(;n<o;){var i=Math.floor((n+o)/2);t[i]>e?o=i:n=i+1}var a=n-1;return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){function t(e){return"undefined"!==typeof e}function n(e){return"undefined"===typeof e}function r(e){return!0===e||!1===e}function o(e){return"[object String]"===c.call(e)}function i(e){return"[object Number]"===c.call(e)}function a(e){return"[object Function]"===c.call(e)}function u(e,t){return Array.isArray(e)&&e.every(t)}var c=Object.prototype.toString;e.defined=t,e.undefined=n,e.boolean=r,e.string=o,e.number=i,e.func=a,e.typedArray=u}(M||(M={}))},1540:function(e,t,n){"use strict";function r(e){return{getInitialState:function(){return new m(null,null,!1)},tokenize:function(t,n,r,i){return o(e,t,n,r,i)}}}function o(e,t,n,r,o){void 0===r&&(r=0);var b=0,y=!1;switch(n.scanError){case 2:t='"'+t,b=1;break;case 1:t="/*"+t,b=2}var k,w,_=i.a(t),C=n.lastWasColon;for(w={tokens:[],endState:n.clone()};;){var E=r+_.getPosition(),T="";if(17===(k=_.scan()))break;if(E===r+_.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(_.getPosition(),3));switch(y&&(E-=b),y=b>0,k){case 1:case 2:T=a,C=!1;break;case 3:case 4:T=u,C=!1;break;case 6:T=c,C=!0;break;case 5:T=s,C=!1;break;case 8:case 9:T=f,C=!1;break;case 7:T=l,C=!1;break;case 10:T=C?d:g,C=!1;break;case 11:T=h,C=!1}if(e)switch(k){case 12:T=v;break;case 13:T=p}w.endState=new m(n.getStateData(),_.getTokenError(),C),w.tokens.push({startIndex:E,scopes:T})}return w}t.a=r;var i=n(1541),a="delimiter.bracket.json",u="delimiter.array.json",c="delimiter.colon.json",s="delimiter.comma.json",f="keyword.json",l="keyword.json",d="string.value.json",h="number.json",g="string.key.json",p="comment.block.json",v="comment.line.json",m=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}()},1541:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=(n(1434),n(1542),n(1392)),o=n(1435),i=r.a;o.b,o.d,o.e,o.a,o.c,o.g,o.f},1542:function(e,t,n){"use strict";function r(e,t,n,r,i){for(var a=[],c=Object(u.e)(e,a),s=void 0,f=void 0;t.length>0&&(f=t.pop(),void 0===(s=Object(u.a)(c,t))&&void 0!==n);)"string"===typeof f?(E={},E[f]=n,n=E):n=[n];if(s){if("object"===s.type&&"string"===typeof f&&Array.isArray(s.children)){var l=Object(u.a)(s,[f]);if(void 0!==l){if(void 0===n){if(!l.parent)throw new Error("Malformed AST");var d=s.children.indexOf(l.parent),h=void 0,g=l.parent.offset+l.parent.length;if(d>0){var p=s.children[d-1];h=p.offset+p.length}else if(h=s.offset+1,s.children.length>1){var v=s.children[1];g=v.offset}return o(e,{offset:h,length:g-h,content:""},r)}return o(e,{offset:l.offset,length:l.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var m=JSON.stringify(f)+": "+JSON.stringify(n),b=i?i(s.children.map(function(e){return e.children[0].value})):s.children.length,y=void 0;if(b>0){var p=s.children[b-1];y={offset:p.offset+p.length,length:0,content:","+m}}else y=0===s.children.length?{offset:s.offset+1,length:0,content:m}:{offset:s.offset+1,length:0,content:m+","};return o(e,y,r)}if("array"===s.type&&"number"===typeof f&&Array.isArray(s.children)){if(-1===f){var m=""+JSON.stringify(n),y=void 0;if(0===s.children.length)y={offset:s.offset+1,length:0,content:m};else{var p=s.children[s.children.length-1];y={offset:p.offset+p.length,length:0,content:","+m}}return o(e,y,r)}if(void 0===n&&s.children.length>=0){var k=f,w=s.children[k],y=void 0;if(1===s.children.length)y={offset:s.offset+1,length:s.length-2,content:""};else if(s.children.length-1===k){var p=s.children[k-1],_=p.offset+p.length,C=s.offset+s.length;y={offset:_,length:C-2-_,content:""}}else y={offset:w.offset,length:s.children[k+1].offset-w.offset,content:""};return o(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!==typeof f?"index":"property")+" to parent of type "+s.type)}if(void 0===n)throw new Error("Can not delete in empty document");return o(e,{offset:c?c.offset:0,length:c?c.length:0,content:JSON.stringify(n)},r);var E}function o(e,t,n){var r=i(e,t),o=t.offset,u=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!Object(a.b)(r,o-1);)o--;for(;u<r.length&&!Object(a.b)(r,u);)u++}for(var c=Object(a.a)(r,{offset:o,length:u-o},n),s=c.length-1;s>=0;s--){var f=c[s];r=i(r,f),o=Math.min(o,f.offset),u=Math.max(u,f.offset+f.length),u+=f.content.length-f.length}return[{offset:o,length:e.length-(r.length-u)-o,content:r.substring(o,u)}]}function i(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}t.b=r,t.a=i;var a=n(1434),u=n(1435)}});