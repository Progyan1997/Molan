webpackJsonp([3],{1317:function(e,t,n){"use strict";function r(e){var t=new i.a(e),n=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new o.a(n)),monaco.languages.registerDocumentHighlightProvider(r,new o.d(n)),monaco.languages.registerLinkProvider(r,new o.e(n)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new o.c(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new o.f(n)),new o.b(r,n,e))}Object.defineProperty(t,"__esModule",{value:!0}),t.setupMode=r;var i=n(1543),o=n(1544)},1543:function(e,t,n){"use strict";function r(e){var t,n,r=new i(function(e,r){t=e,n=r},function(){});return e.then(t,n),r}n.d(t,"a",function(){return o});var i=monaco.Promise,o=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i;return r(this._getClient().then(function(e){i=e}).then(function(n){return e._worker.withSyncedResources(t)}).then(function(e){return i}))},e}()},1544:function(e,t,n){"use strict";function r(e){switch(e){case g.b.Error:return monaco.MarkerSeverity.Error;case g.b.Warning:return monaco.MarkerSeverity.Warning;case g.b.Information:return monaco.MarkerSeverity.Info;case g.b.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function i(e,t){var n="number"===typeof t.code?String(t.code):t.code;return{severity:r(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}function o(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function a(e){if(e)return{start:o(e.getStartPosition()),end:o(e.getEndPosition())}}function u(e){if(e)return new h(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function c(e){var t=monaco.languages.CompletionItemKind;switch(e){case g.a.Text:return t.Text;case g.a.Method:return t.Method;case g.a.Function:return t.Function;case g.a.Constructor:return t.Constructor;case g.a.Field:return t.Field;case g.a.Variable:return t.Variable;case g.a.Class:return t.Class;case g.a.Interface:return t.Interface;case g.a.Module:return t.Module;case g.a.Property:return t.Property;case g.a.Unit:return t.Unit;case g.a.Value:return t.Value;case g.a.Enum:return t.Enum;case g.a.Keyword:return t.Keyword;case g.a.Snippet:return t.Snippet;case g.a.Color:return t.Color;case g.a.File:return t.File;case g.a.Reference:return t.Reference}return t.Property}function s(e){if(e)return{range:u(e.range),text:e.newText}}function f(e){var t=monaco.languages.DocumentHighlightKind;switch(e){case g.c.Read:return t.Read;case g.c.Write:return t.Write;case g.c.Text:return t.Text}return t.Text}function d(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}function l(e,t){return t.cancel&&e.onCancellationRequested(function(){return t.cancel()}),t}n.d(t,"b",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return _}),n.d(t,"c",function(){return b}),n.d(t,"f",function(){return y});var g=n(1545),h=(monaco.Uri,monaco.Range),p=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t=e.getModeId();if(t===r._languageId){var n;r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t)}},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(t){return i(e,t)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t,r)})}).then(void 0,function(e){console.error(e)})},e}(),m=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){var r=(e.getWordUntilPosition(t),e.uri);return l(n,this._worker(r).then(function(e){return e.doComplete(r.toString(),o(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:c(e.kind)};return e.textEdit&&(t.range=u(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===g.d.Snippet&&(t.insertText={value:t.insertText}),t});return{isIncomplete:e.isIncomplete,items:t}}}))},e}(),v=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return l(n,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),o(t))}).then(function(e){if(e)return e.map(function(e){return{range:u(e.range),kind:f(e.kind)}})}))},e}(),_=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return l(t,this._worker(n).then(function(e){return e.findDocumentLinks(n.toString())}).then(function(e){if(e)return e.map(function(e){return{range:u(e.range),url:e.target}})}))},e}(),b=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return l(n,this._worker(r).then(function(e){return e.format(r.toString(),null,d(t)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}(),y=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return l(r,this._worker(i).then(function(e){return e.format(i.toString(),a(t),d(n)).then(function(e){if(e&&0!==e.length)return e.map(s)})}))},e}()},1545:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"e",function(){return p}),n.d(t,"a",function(){return m}),n.d(t,"d",function(){return v}),n.d(t,"c",function(){return x}),n.d(t,"f",function(){return E});var r;!function(e){function t(e,t){return{line:e,character:t}}function n(e){var t=e;return F.defined(t)&&F.number(t.line)&&F.number(t.character)}e.create=t,e.is=n}(r||(r={}));var i;!function(e){function t(e,t,n,i){if(F.number(e)&&F.number(t)&&F.number(n)&&F.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")}function n(e){var t=e;return F.defined(t)&&r.is(t.start)&&r.is(t.end)}e.create=t,e.is=n}(i||(i={}));var o;!function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.string(t.uri)||F.undefined(t.uri))}e.create=t,e.is=n}(o||(o={}));var a;!function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(a||(a={}));var u;!function(e){function t(e,t,n,r,i){var o={range:e,message:t};return F.defined(n)&&(o.severity=n),F.defined(r)&&(o.code=r),F.defined(i)&&(o.source=i),o}function n(e){var t=e;return F.defined(t)&&i.is(t.range)&&F.string(t.message)&&(F.number(t.severity)||F.undefined(t.severity))&&(F.number(t.code)||F.string(t.code)||F.undefined(t.code))&&(F.string(t.source)||F.undefined(t.source))}e.create=t,e.is=n}(u||(u={}));var c;!function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return F.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return F.defined(t)&&F.string(t.title)&&F.string(t.title)}e.create=t,e.is=n}(c||(c={}));var s;!function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}e.replace=t,e.insert=n,e.del=r}(s||(s={}));var f;!function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return F.defined(t)&&g.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(f||(f={}));var d,l=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(s.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(s.replace(e,t))},e.prototype.delete=function(e){this.edits.push(s.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new l(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new l(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(g.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e,n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new l(r),this._textEditChanges[t.uri]=n}return n}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new l(r),this._textEditChanges[e]=n}return n}}();!function(e){function t(e){return{uri:e}}function n(e){var t=e;return F.defined(t)&&F.string(t.uri)}e.create=t,e.is=n}(d||(d={}));var g;!function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return F.defined(t)&&F.string(t.uri)&&F.number(t.version)}e.create=t,e.is=n}(g||(g={}));var h;!function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return F.defined(t)&&F.string(t.uri)&&F.string(t.languageId)&&F.number(t.version)&&F.string(t.text)}e.create=t,e.is=n}(h||(h={}));var p;!function(e){e.PlainText="plaintext",e.Markdown="markdown"}(p||(p={}));var m;!function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(m||(m={}));var v;!function(e){e.PlainText=1,e.Snippet=2}(v||(v={}));var _;!function(e){function t(e){return{label:e}}e.create=t}(_||(_={}));var b;!function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(b||(b={}));var y;!function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=t}(y||(y={}));var w;!function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(w||(w={}));var k;!function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return F.defined(t)&&(i.documentation=t),F.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(k||(k={}));var x;!function(e){e.Text=1,e.Read=2,e.Write=3}(x||(x={}));var C;!function(e){function t(e,t){var n={range:e};return F.number(t)&&(n.kind=t),n}e.create=t}(C||(C={}));var E;!function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(E||(E={}));var I;!function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(I||(I={}));var S;!function(e){function t(e){return{diagnostics:e}}function n(e){var t=e;return F.defined(t)&&F.typedArray(t.diagnostics,u.is)}e.create=t,e.is=n}(S||(S={}));var T;!function(e){function t(e,t){var n={range:e};return F.defined(t)&&(n.data=t),n}function n(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.undefined(t.command)||c.is(t.command))}e.create=t,e.is=n}(T||(T={}));var M;!function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return F.defined(t)&&F.number(t.tabSize)&&F.boolean(t.insertSpaces)}e.create=t,e.is=n}(M||(M={}));var P=function(){function e(){}return e}();!function(e){function t(e,t){return{range:e,target:t}}function n(e){var t=e;return F.defined(t)&&i.is(t.range)&&(F.undefined(t.target)||F.string(t.target))}e.create=t,e.is=n}(P||(P={}));var O;!function(e){function t(e,t,n,r){return new W(e,t,n,r)}function n(e){var t=e;return!!(F.defined(t)&&F.string(t.uri)&&(F.undefined(t.languageId)||F.string(t.languageId))&&F.number(t.lineCount)&&F.func(t.getText)&&F.func(t.positionAt)&&F.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,function(e,t){return 0===e.range.start.line-t.range.start.line?e.range.start.character-t.range.start.character:0}),o=n.length,a=r.length-1;a>=0;a--){var u=r[a],c=e.offsetAt(u.range.start),s=e.offsetAt(u.range.end);if(!(s<=o))throw new Error("Ovelapping edit");n=n.substring(0,c)+u.newText+n.substring(s,n.length),o=c}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);for(var a=0,u=0,c=0;a<r.length&&u<o.length;){var s=t(r[a],o[u]);e[c++]=s<=0?r[a++]:o[u++]}for(;a<r.length;)e[c++]=r[a++];for(;u<o.length;)e[c++]=o[u++];return e}e.create=t,e.is=n,e.applyEdits=r}(O||(O={}));var D;!function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(D||(D={}));var F,W=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);for(;n<i;){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var a=n-1;return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){function t(e){return"undefined"!==typeof e}function n(e){return"undefined"===typeof e}function r(e){return!0===e||!1===e}function i(e){return"[object String]"===c.call(e)}function o(e){return"[object Number]"===c.call(e)}function a(e){return"[object Function]"===c.call(e)}function u(e,t){return Array.isArray(e)&&e.every(t)}var c=Object.prototype.toString;e.defined=t,e.undefined=n,e.boolean=r,e.string=i,e.number=o,e.func=a,e.typedArray=u}(F||(F={}))}});