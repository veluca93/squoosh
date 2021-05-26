
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa,r;e.ready=new Promise(function(a,b){aa=a;r=b});var t={},u;for(u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);var v="./this.program",ba,w,y,ca;ba=function(a){y||(y=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);return y.readFileSync(a,null)};w=function(a){a=ba(a);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(v=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);
process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",z);e.inspect=function(){return"[Emscripten Module object]"};var da=e.print||console.log.bind(console),A=e.printErr||console.warn.bind(console);for(u in t)t.hasOwnProperty(u)&&(e[u]=t[u]);t=null;e.thisProgram&&(v=e.thisProgram);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var ea,fa=!1,ha=new TextDecoder("utf8");
function ia(a,b,c){var d=D;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ja=new TextDecoder("utf-16le");
function ka(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&E[c];)++c;return ja.decode(D.subarray(a,c<<1))}function la(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)G[b>>1]=a.charCodeAt(f),b+=2;G[b>>1]=0;return b-d}function ma(a){return 2*a.length}function na(a,b){for(var c=0,d="";!(c>=b/4);){var f=H[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function oa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}H[b>>2]=g;b+=4;if(b+4>c)break}H[b>>2]=0;return b-d}function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var qa,I,D,G,E,H,K,ra,sa;
function ta(){var a=ea.buffer;qa=a;e.HEAP8=I=new Int8Array(a);e.HEAP16=G=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=E=new Uint16Array(a);e.HEAPU32=K=new Uint32Array(a);e.HEAPF32=ra=new Float32Array(a);e.HEAPF64=sa=new Float64Array(a)}var L,ua=[],va=[],wa=[];function xa(){var a=e.preRun.shift();ua.unshift(a)}var M=0,ya=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function z(a){if(e.onAbort)e.onAbort(a);A(a);fa=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");r(a);throw a;}var O=(new URL("jxl_node_dec.wasm",import.meta.url)).toString();function za(){return Promise.resolve().then(function(){a:{try{if(O==O&&C){var a=new Uint8Array(C);break a}if(w){a=w(O);break a}throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}a=void 0}return a})}
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.N;"number"===typeof c?void 0===b.J?L.get(c)():L.get(c)(b.J):c(void 0===b.J?null:b.J)}}}function Ba(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ca=void 0;function P(a){for(var b="";D[a];)b+=Ca[D[a++]];return b}var Q={},R={},S={};
function Da(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ea(a,b){a=Da(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Fa(a){var b=Error,c=Ea(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ga=void 0;function T(a){throw new Ga(a);}var Ha=void 0;
function Ia(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Ha("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.M)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Ja=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ka(a){4<a&&0===--V[a].K&&(V[a]=void 0,Ja.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ja.length?Ja.pop():V.length;V[b]={K:1,value:a};return b}}function La(a){return this.fromWireType(K[a>>2])}function Oa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Pa(a,b){switch(b){case 2:return function(c){return this.fromWireType(ra[c>>2])};case 3:return function(c){return this.fromWireType(sa[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Qa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ea(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Ra(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Sa(a,b){var c=e;if(void 0===c[a].H){var d=c[a];c[a]=function(){c[a].H.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].H+")!");return c[a].H[arguments.length].apply(this,arguments)};c[a].H=[];c[a].H[d.L]=d}}
function Ta(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].H&&void 0!==e[a].H[c])&&T("Cannot register public name '"+a+"' twice"),Sa(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].H[c]=b):(e[a]=b,void 0!==c&&(e[a].P=c))}function Ua(a,b){for(var c=[],d=0;d<a;d++)c.push(H[(b>>2)+d]);return c}
function Va(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=e["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=L.get(b).apply(null,c);return d}}function Wa(a,b){a=P(a);var c=a.includes("j")?Va(a,b):L.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var Xa=void 0;function Ya(a){a=Za(a);var b=P(a);X(a);return b}
function $a(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new Xa(a+": "+d.map(Ya).join([", "]));}function ab(a,b,c){switch(b){case 0:return c?function(d){return I[d]}:function(d){return D[d]};case 1:return c?function(d){return G[d>>1]}:function(d){return E[d>>1]};case 2:return c?function(d){return H[d>>2]}:function(d){return K[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var bb={};
function cb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function db(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+Ya(a));return c}var eb={},fb={};function gb(){if(!hb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:v||"./this.program"},b;for(b in fb)a[b]=fb[b];var c=[];for(b in a)c.push(b+"="+a[b]);hb=c}return hb}
for(var hb,ib=[null,[],[]],jb=Array(256),Y=0;256>Y;++Y)jb[Y]=String.fromCharCode(Y);Ca=jb;Ga=e.BindingError=Fa("BindingError");Ha=e.InternalError=Fa("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};Xa=e.UnboundTypeError=Fa("UnboundTypeError");
var lb={l:function(){},q:function(){},m:function(a,b,c,d,f){var g=Ba(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=I;else if(2===c)h=G;else if(4===c)h=H;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},I:null})},x:function(a,b){b=P(b);U(a,{name:b,fromWireType:function(c){var d=V[c].value;Ka(c);return d},toWireType:function(c,d){return W(d)},
argPackAdvance:8,readValueFromPointer:La,I:null})},j:function(a,b,c){c=Ba(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Oa(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Pa(b,c),I:null})},o:function(a,b,c,d,f,g){var l=Ua(b,c);a=P(a);f=Wa(d,f);Ta(a,function(){$a("Cannot call "+a+" due to unbound types",l)},b-1);Ia(l,function(h){var k=[h[0],null].concat(h.slice(1)),
m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].I){B=!0;break}var Ma="void"!==k[0].name,F="",J="";for(q=0;q<p-2;++q)F+=(0!==q?", ":"")+"arg"+q,J+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Da(m)+"("+F+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";
B&&(m+="var destructors = [];\n");var Na=B?"destructors":"null";F="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Ra,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Na+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Na+", arg"+q+"); // "+k[q+2].name+"\n",F.push("argType"+q),n.push(k[q+2]);x&&(J="thisWired"+(0<J.length?", ":"")+J);m+=(Ma?"var rv = ":"")+"invoker(fn"+(0<J.length?", ":"")+J+");\n";if(B)m+="runDestructors(destructors);\n";
else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].I&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",F.push(p+"_dtor"),n.push(k[q].I));Ma&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");F.push(m+"}\n");k=Qa(F).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new Ha("Replacing nonexistant public symbol");void 0!==e[h].H&&void 0!==q?e[h].H[q]=k:(e[h]=k,e[h].L=q);return[]})},c:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Ba(c);
if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=b.includes("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+Oa(n)+'" to '+this.name);if(n<d||n>f)throw new TypeError('Passing a number "'+Oa(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:ab(b,l,0!==d),I:null})},b:function(a,
b,c){function d(g){g>>=2;var l=K;return new f(qa,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},g:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=K[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;if(l==f||0==D[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&D[m];)++m;g=ha.decode(D.subarray(g,m))}else g="";if(void 0===
n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(D[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&
1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=kb(4+l+1);K[h>>2]=l;if(c&&g)ia(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));D[h+4+g]=k}else for(g=0;g<l;++g)D[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:La,I:function(d){X(d)}})},f:function(a,b,c){c=P(c);if(2===b){var d=ka;var f=la;var g=ma;var l=function(){return E};var h=1}else 4===
b&&(d=na,f=oa,g=pa,l=function(){return K},h=2);U(a,{name:c,fromWireType:function(k){for(var m=K[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=kb(4+n+b);K[p>>2]=n>>h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:La,I:function(k){X(k)}})},n:function(a,b){b=
P(b);U(a,{O:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},d:Ka,k:function(a){if(0===a)return W(cb());var b=bb[a];a=void 0===b?P(a):b;return W(cb()[a])},h:function(a){4<a&&(V[a].K+=1)},i:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=eb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+
g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(db,e,W);eb[b]=f}return f(a,c,d)},a:function(){z()},s:function(a,b,c){D.copyWithin(a,b,b+c)},e:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,
d);0<d%65536&&(d+=65536-d%65536);a:{try{ea.grow(Math.min(2147483648,d)-qa.byteLength+65535>>>16);ta();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},t:function(a,b){var c=0;gb().forEach(function(d,f){var g=b+c;f=H[a+4*f>>2]=g;for(g=0;g<d.length;++g)I[f++>>0]=d.charCodeAt(g);I[f>>0]=0;c+=d.length+1});return 0},u:function(a,b){var c=gb();H[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});H[b>>2]=d;return 0},w:function(){return 0},p:function(){},v:function(a,b,c,d){for(var f=
0,g=0;g<c;g++){for(var l=H[b+8*g>>2],h=H[b+(8*g+4)>>2],k=0;k<h;k++){var m=D[l+k],n=ib[a];if(0===m||10===m){m=1===a?da:A;var p;for(p=0;n[p]&&!(NaN<=p);)++p;p=ha.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}H[d>>2]=f;return 0},r:function(){}};
(function(){function a(f){e.asm=f.exports;ea=e.asm.y;ta();L=e.asm.E;va.unshift(e.asm.z);M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==ya&&(clearInterval(ya),ya=null),N&&(f=N,N=null,f()))}function b(f){a(f.instance)}function c(f){return za().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){A("failed to asynchronously prepare wasm: "+g);z(g)})}var d={a:lb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return A("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||O.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){A("wasm streaming compile failed: "+g);A("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(r);return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.z).apply(null,arguments)};var kb=e._malloc=function(){return(kb=e._malloc=e.asm.A).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.B).apply(null,arguments)},Za=e.___getTypeName=function(){return(Za=e.___getTypeName=e.asm.C).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.D).apply(null,arguments)};
e.dynCall_iiji=function(){return(e.dynCall_iiji=e.asm.F).apply(null,arguments)};e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.G).apply(null,arguments)};var Z;N=function mb(){Z||nb();Z||(N=mb)};
function nb(){function a(){if(!Z&&(Z=!0,e.calledRun=!0,!fa)){Aa(va);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();wa.unshift(b)}Aa(wa)}}if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)xa();Aa(ua);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=nb;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();nb();


  return Module.ready
}
);
})();
export default Module;