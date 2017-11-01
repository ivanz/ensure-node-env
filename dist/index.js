"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function createCommonjsModule(e,r){return r={exports:{}},e(r,r.exports),r.exports}var path=_interopDefault(require("path")),child_process=require("child_process"),semver=createCommonjsModule(function(e,r){function t(e,r){if(e instanceof n)return e;if("string"!=typeof e)return null;if(e.length>I)return null;if(!(r?_[H]:_[B]).test(e))return null;try{return new n(e,r)}catch(e){return null}}function n(e,r){if(e instanceof n){if(e.loose===r)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>I)throw new TypeError("version is longer than "+I+" characters");if(!(this instanceof n))return new n(e,r);T("SemVer",e,r),this.loose=r;var t=e.trim().match(r?_[H]:_[B]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>V||this.major<0)throw new TypeError("Invalid major version");if(this.minor>V||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>V||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<V)return r}return e}):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}function o(e,r){var t=we.test(e),n=we.test(r);return t&&n&&(e=+e,r=+r),t&&!n?-1:n&&!t?1:e<r?-1:e>r?1:0}function i(e,r,t){return new n(e,t).compare(new n(r,t))}function s(e,r,t){return i(e,r,t)>0}function a(e,r,t){return i(e,r,t)<0}function c(e,r,t){return 0===i(e,r,t)}function p(e,r,t){return 0!==i(e,r,t)}function u(e,r,t){return i(e,r,t)>=0}function l(e,r,t){return i(e,r,t)<=0}function h(e,r,t,n){var o;switch(r){case"===":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e===t;break;case"!==":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e!==t;break;case"":case"=":case"==":o=c(e,t,n);break;case"!=":o=p(e,t,n);break;case">":o=s(e,t,n);break;case">=":o=u(e,t,n);break;case"<":o=a(e,t,n);break;case"<=":o=l(e,t,n);break;default:throw new TypeError("Invalid operator: "+r)}return o}function f(e,r){if(e instanceof f){if(e.loose===r)return e;e=e.value}if(!(this instanceof f))return new f(e,r);T("comparator",e,r),this.loose=r,this.parse(e),this.semver===ye?this.value="":this.value=this.operator+this.semver.version,T("comp",this)}function v(e,r){if(e instanceof v)return e.loose===r?e:new v(e.raw,r);if(e instanceof f)return new v(e.value,r);if(!(this instanceof v))return new v(e,r);if(this.loose=r,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function m(e,r){return T("comp",e),e=d(e,r),T("caret",e),e=w(e,r),T("tildes",e),e=E(e,r),T("xrange",e),e=$(e,r),T("stars",e),e}function g(e){return!e||"x"===e.toLowerCase()||"*"===e}function w(e,r){return e.trim().split(/\s+/).map(function(e){return y(e,r)}).join(" ")}function y(e,r){var t=r?_[ie]:_[oe];return e.replace(t,function(r,t,n,o,i){T("tilde",e,r,t,n,o,i);var s;return g(t)?s="":g(n)?s=">="+t+".0.0 <"+(+t+1)+".0.0":g(o)?s=">="+t+"."+n+".0 <"+t+"."+(+n+1)+".0":i?(T("replaceTilde pr",i),"-"!==i.charAt(0)&&(i="-"+i),s=">="+t+"."+n+"."+o+i+" <"+t+"."+(+n+1)+".0"):s=">="+t+"."+n+"."+o+" <"+t+"."+(+n+1)+".0",T("tilde return",s),s})}function d(e,r){return e.trim().split(/\s+/).map(function(e){return j(e,r)}).join(" ")}function j(e,r){T("caret",e,r);var t=r?_[pe]:_[ce];return e.replace(t,function(r,t,n,o,i){T("caret",e,r,t,n,o,i);var s;return g(t)?s="":g(n)?s=">="+t+".0.0 <"+(+t+1)+".0.0":g(o)?s="0"===t?">="+t+"."+n+".0 <"+t+"."+(+n+1)+".0":">="+t+"."+n+".0 <"+(+t+1)+".0.0":i?(T("replaceCaret pr",i),"-"!==i.charAt(0)&&(i="-"+i),s="0"===t?"0"===n?">="+t+"."+n+"."+o+i+" <"+t+"."+n+"."+(+o+1):">="+t+"."+n+"."+o+i+" <"+t+"."+(+n+1)+".0":">="+t+"."+n+"."+o+i+" <"+(+t+1)+".0.0"):(T("no pr"),s="0"===t?"0"===n?">="+t+"."+n+"."+o+" <"+t+"."+n+"."+(+o+1):">="+t+"."+n+"."+o+" <"+t+"."+(+n+1)+".0":">="+t+"."+n+"."+o+" <"+(+t+1)+".0.0"),T("caret return",s),s})}function E(e,r){return T("replaceXRanges",e,r),e.split(/\s+/).map(function(e){return b(e,r)}).join(" ")}function b(e,r){e=e.trim();var t=r?_[re]:_[ee];return e.replace(t,function(r,t,n,o,i,s){T("xRange",e,r,t,n,o,i,s);var a=g(n),c=a||g(o),p=c||g(i),u=p;return"="===t&&u&&(t=""),a?r=">"===t||"<"===t?"<0.0.0":"*":t&&u?(c&&(o=0),p&&(i=0),">"===t?(t=">=",c?(n=+n+1,o=0,i=0):p&&(o=+o+1,i=0)):"<="===t&&(t="<",c?n=+n+1:o=+o+1),r=t+n+"."+o+"."+i):c?r=">="+n+".0.0 <"+(+n+1)+".0.0":p&&(r=">="+n+"."+o+".0 <"+n+"."+(+o+1)+".0"),T("xRange return",r),r})}function $(e,r){return T("replaceStars",e,r),e.trim().replace(_[me],"")}function k(e,r,t,n,o,i,s,a,c,p,u,l,h){return r=g(t)?"":g(n)?">="+t+".0.0":g(o)?">="+t+"."+n+".0":">="+r,a=g(c)?"":g(p)?"<"+(+c+1)+".0.0":g(u)?"<"+c+"."+(+p+1)+".0":l?"<="+c+"."+p+"."+u+"-"+l:"<="+a,(r+" "+a).trim()}function x(e,r){for(t=0;t<e.length;t++)if(!e[t].test(r))return!1;if(r.prerelease.length){for(var t=0;t<e.length;t++)if(T(e[t].semver),e[t].semver!==ye&&e[t].semver.prerelease.length>0){var n=e[t].semver;if(n.major===r.major&&n.minor===r.minor&&n.patch===r.patch)return!0}return!1}return!0}function S(e,r,t){try{r=new v(r,t)}catch(e){return!1}return r.test(e)}function R(e,r,t,o){e=new n(e,o),r=new v(r,o);var i,c,p,h,m;switch(t){case">":i=s,c=l,p=a,h=">",m=">=";break;case"<":i=a,c=u,p=s,h="<",m="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(S(e,r,o))return!1;for(var g=0;g<r.set.length;++g){var w=null,y=null;if(r.set[g].forEach(function(e){e.semver===ye&&(e=new f(">=0.0.0")),w=w||e,y=y||e,i(e.semver,w.semver,o)?w=e:p(e.semver,y.semver,o)&&(y=e)}),w.operator===h||w.operator===m)return!1;if((!y.operator||y.operator===h)&&c(e,y.semver))return!1;if(y.operator===m&&p(e,y.semver))return!1}return!0}r=e.exports=n;var T;T="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var I=256,V=Number.MAX_SAFE_INTEGER||9007199254740991,_=r.re=[],A=r.src=[],C=0,M=C++;A[M]="0|[1-9]\\d*";var q=C++;A[q]="[0-9]+";var D=C++;A[D]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var N=C++;A[N]="("+A[M]+")\\.("+A[M]+")\\.("+A[M]+")";var P=C++;A[P]="("+A[q]+")\\.("+A[q]+")\\.("+A[q]+")";var U=C++;A[U]="(?:"+A[M]+"|"+A[D]+")";var X=C++;A[X]="(?:"+A[q]+"|"+A[D]+")";var z=C++;A[z]="(?:-("+A[U]+"(?:\\."+A[U]+")*))";var G=C++;A[G]="(?:-?("+A[X]+"(?:\\."+A[X]+")*))";var O=C++;A[O]="[0-9A-Za-z-]+";var Z=C++;A[Z]="(?:\\+("+A[O]+"(?:\\."+A[O]+")*))";var B=C++,L="v?"+A[N]+A[z]+"?"+A[Z]+"?";A[B]="^"+L+"$";var F="[v=\\s]*"+A[P]+A[G]+"?"+A[Z]+"?",H=C++;A[H]="^"+F+"$";var J=C++;A[J]="((?:<|>)?=?)";var K=C++;A[K]=A[q]+"|x|X|\\*";var Q=C++;A[Q]=A[M]+"|x|X|\\*";var W=C++;A[W]="[v=\\s]*("+A[Q]+")(?:\\.("+A[Q]+")(?:\\.("+A[Q]+")(?:"+A[z]+")?"+A[Z]+"?)?)?";var Y=C++;A[Y]="[v=\\s]*("+A[K]+")(?:\\.("+A[K]+")(?:\\.("+A[K]+")(?:"+A[G]+")?"+A[Z]+"?)?)?";var ee=C++;A[ee]="^"+A[J]+"\\s*"+A[W]+"$";var re=C++;A[re]="^"+A[J]+"\\s*"+A[Y]+"$";var te=C++;A[te]="(?:~>?)";var ne=C++;A[ne]="(\\s*)"+A[te]+"\\s+",_[ne]=new RegExp(A[ne],"g");var oe=C++;A[oe]="^"+A[te]+A[W]+"$";var ie=C++;A[ie]="^"+A[te]+A[Y]+"$";var se=C++;A[se]="(?:\\^)";var ae=C++;A[ae]="(\\s*)"+A[se]+"\\s+",_[ae]=new RegExp(A[ae],"g");var ce=C++;A[ce]="^"+A[se]+A[W]+"$";var pe=C++;A[pe]="^"+A[se]+A[Y]+"$";var ue=C++;A[ue]="^"+A[J]+"\\s*("+F+")$|^$";var le=C++;A[le]="^"+A[J]+"\\s*("+L+")$|^$";var he=C++;A[he]="(\\s*)"+A[J]+"\\s*("+F+"|"+A[W]+")",_[he]=new RegExp(A[he],"g");var fe=C++;A[fe]="^\\s*("+A[W]+")\\s+-\\s+("+A[W]+")\\s*$";var ve=C++;A[ve]="^\\s*("+A[Y]+")\\s+-\\s+("+A[Y]+")\\s*$";var me=C++;A[me]="(<|>)?=?\\s*\\*";for(var ge=0;ge<C;ge++)T(ge,A[ge]),_[ge]||(_[ge]=new RegExp(A[ge]));r.parse=t,r.valid=function(e,r){var n=t(e,r);return n?n.version:null},r.clean=function(e,r){var n=t(e.trim().replace(/^[=v]+/,""),r);return n?n.version:null},r.SemVer=n,n.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},n.prototype.toString=function(){return this.version},n.prototype.compare=function(e){return T("SemVer.compare",this.version,this.loose,e),e instanceof n||(e=new n(e,this.loose)),this.compareMain(e)||this.comparePre(e)},n.prototype.compareMain=function(e){return e instanceof n||(e=new n(e,this.loose)),o(this.major,e.major)||o(this.minor,e.minor)||o(this.patch,e.patch)},n.prototype.comparePre=function(e){if(e instanceof n||(e=new n(e,this.loose)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],i=e.prerelease[r];if(T("prerelease compare",r,t,i),void 0===t&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===t)return-1;if(t!==i)return o(t,i)}while(++r)},n.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,o){"string"==typeof t&&(o=t,t=void 0);try{return new n(e,t).inc(r,o).version}catch(e){return null}},r.diff=function(e,r){if(c(e,r))return null;var n=t(e),o=t(r);if(n.prerelease.length||o.prerelease.length){for(var i in n)if(("major"===i||"minor"===i||"patch"===i)&&n[i]!==o[i])return"pre"+i;return"prerelease"}for(var i in n)if(("major"===i||"minor"===i||"patch"===i)&&n[i]!==o[i])return i},r.compareIdentifiers=o;var we=/^[0-9]+$/;r.rcompareIdentifiers=function(e,r){return o(r,e)},r.major=function(e,r){return new n(e,r).major},r.minor=function(e,r){return new n(e,r).minor},r.patch=function(e,r){return new n(e,r).patch},r.compare=i,r.compareLoose=function(e,r){return i(e,r,!0)},r.rcompare=function(e,r,t){return i(r,e,t)},r.sort=function(e,t){return e.sort(function(e,n){return r.compare(e,n,t)})},r.rsort=function(e,t){return e.sort(function(e,n){return r.rcompare(e,n,t)})},r.gt=s,r.lt=a,r.eq=c,r.neq=p,r.gte=u,r.lte=l,r.cmp=h,r.Comparator=f;var ye={};f.prototype.parse=function(e){var r=this.loose?_[ue]:_[le],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new n(t[2],this.loose):this.semver=ye},f.prototype.toString=function(){return this.value},f.prototype.test=function(e){return T("Comparator.test",e,this.loose),this.semver===ye||("string"==typeof e&&(e=new n(e,this.loose)),h(e,this.operator,this.semver,this.loose))},f.prototype.intersects=function(e,r){if(!(e instanceof f))throw new TypeError("a Comparator is required");var t;if(""===this.operator)return t=new v(e.value,r),S(this.value,t,r);if(""===e.operator)return t=new v(this.value,r),S(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=h(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=h(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||c},r.Range=v,v.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},v.prototype.toString=function(){return this.range},v.prototype.parseRange=function(e){var r=this.loose;e=e.trim(),T("range",e,r);var t=r?_[ve]:_[fe];e=e.replace(t,k),T("hyphen replace",e),e=e.replace(_[he],"$1$2$3"),T("comparator trim",e,_[he]),e=(e=(e=e.replace(_[ne],"$1~")).replace(_[ae],"$1^")).split(/\s+/).join(" ");var n=r?_[ue]:_[le],o=e.split(" ").map(function(e){return m(e,r)}).join(" ").split(/\s+/);return this.loose&&(o=o.filter(function(e){return!!e.match(n)})),o=o.map(function(e){return new f(e,r)})},v.prototype.intersects=function(e,r){if(!(e instanceof v))throw new TypeError("a Range is required");return this.set.some(function(t){return t.every(function(t){return e.set.some(function(e){return e.every(function(e){return t.intersects(e,r)})})})})},r.toComparators=function(e,r){return new v(e,r).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},v.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new n(e,this.loose));for(var r=0;r<this.set.length;r++)if(x(this.set[r],e))return!0;return!1},r.satisfies=S,r.maxSatisfying=function(e,r,t){var o=null,i=null;try{var s=new v(r,t)}catch(e){return null}return e.forEach(function(e){s.test(e)&&(o&&-1!==i.compare(e)||(i=new n(o=e,t)))}),o},r.minSatisfying=function(e,r,t){var o=null,i=null;try{var s=new v(r,t)}catch(e){return null}return e.forEach(function(e){s.test(e)&&(o&&1!==i.compare(e)||(i=new n(o=e,t)))}),o},r.validRange=function(e,r){try{return new v(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return R(e,r,"<",t)},r.gtr=function(e,r,t){return R(e,r,">",t)},r.outside=R,r.prerelease=function(e,r){var n=t(e,r);return n&&n.prerelease.length?n.prerelease:null},r.intersects=function(e,r,t){return e=new v(e,t),r=new v(r,t),e.intersects(r)}});const checkVersion=(e,r)=>{let t=null;const n=path.join(process.cwd(),"package.json");try{t=require(n)}catch(e){console.log(`Unable to find ${n}!  😱`),console.log(""),console.log("Please ensure that this script is executed in the same directory."),console.log(""),process.exit(1)}let o=null;try{o=t.engines[e]}catch(r){console.log(`There is no engine named ${e} specified in package.json!  😱`),console.log(""),process.exit(1)}let i=null;try{i=child_process.execSync(r).toString().replace("v","").trim()}catch(r){console.log(`Unable to get ${e} version!  😱`),console.log(""),process.exit(1)}if(!semver.satisfies(i,o)){console.log(`Expected ${e} version to match ${o}, but got ${i}.  😱`),console.log(""),console.log("Please follow Skyscanner's node environment guide (see https://github.com/Skyscanner/ensure-node-env/blob/master/README.md#guide)."),console.log(""),process.exit(1)}};console.log("Checking node & npm versions..."),console.log(""),checkVersion("node","node --version"),checkVersion("npm","npm --version"),console.log("All good.  👍"),console.log("");
