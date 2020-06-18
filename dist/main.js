/* reuse-utility Library version: 3.0.2 */
function t(t,e,n,r){var o,c,u;return function(){if(u=this,c=Array.prototype.slice.call(arguments),!o||!n&&!r){if(!n)return s(),o=setTimeout(i,e);o=setTimeout(s,e),t.apply(u,c)}function i(){s(),t.apply(u,c)}function s(){clearTimeout(o),o=null}}}function e(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}const n=Object.prototype.hasOwnProperty,r=Object.prototype;function o(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":toString.call(t)}function c(t){if(null==t)return!0;if(function(t){return null!=t&&"function"!=typeof t&&e(t.length)}(t)&&(Array.isArray(t)||"string"==typeof t||"function"==typeof t.splice||function(t){return function(t){return"object"==typeof t&&null!==t}(t)&&"[object Arguments]"==o(t)}(t)))return!t.length;const c=o(t);if("[object Map]"==c||"[object Set]"==c)return!t.size;if(function(t){const e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}(t))return!Object.keys(t).length;for(const e in t)if(n.call(t,e))return!1;return!0}const u="[object Object]",i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=Object.getOwnPropertySymbols,a=Object.prototype.toString,f=/^(?:0|[1-9]\d*)$/;function p(t,e){const n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&f.test(t))&&t>-1&&t%1==0&&t<e}function y(t,e){const n=Array.isArray(t),r=!n&&function(t){return v(t)&&"[object Arguments]"==h(t)}(t),o=n||r||!n&&!r&&!1,c=t.length,u=new Array(o?c:0);let s=o?-1:c;for(;++s<c;)u[s]=""+s;for(const n in t)!e&&!i.call(t,n)||o&&("length"==n||p(n,c))||u.push(n);return u}function h(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a.call(t)}function _(t){return null!=(n=t)&&"function"!=typeof n&&e(n.length)?y(t):Object.keys(Object(t));var n}function b(t){const e=_(t);return Array.isArray(t)||e.push(...function(t){return null==t?[]:(t=Object(t),l(t).filter(e=>s.call(t,e)))}(t)),e}function d(t,e){let{length:n}=t;for(;n--;)if((r=t[n][0])===(o=e)||r!=r&&o!=o)return n;var r,o;return-1}class g{constructor(t){let e=-1;const n=null==t?0:t.length;for(this.clear();++e<n;){const n=t[e];this.set(n[0],n[1])}}clear(){this.__data__=[],this.size=0}delete(t){const e=this.__data__,n=d(e,t);if(n<0)return!1;return n==e.length-1?e.pop():e.splice(n,1),--this.size,!0}get(t){const e=this.__data__,n=d(e,t);return n<0?void 0:e[n][1]}has(t){return d(this.__data__,t)>-1}set(t,e){const n=this.__data__,r=d(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}}class j{constructor(t){const e=this.__data__=new g(t);this.size=e.size}clear(){this.__data__=new g,this.size=0}delete(t){const e=this.__data__,n=e.delete(t);return this.size=e.size,n}get(t){return this.__data__.get(t)}has(t){return this.__data__.has(t)}set(t,e){let n=this.__data__;return n.set(t,e),this.size=n.size,this}}function m(t,e,n,r,o,c){let s=Array.isArray(t);const l=Array.isArray(e);let a=s?"[object Array]":h(t),f=l?"[object Array]":h(e);a="[object Arguments]"==a?u:a,f="[object Arguments]"==f?u:f;let p=a==u;const y=f==u,_=a==f;if(_&&!p)return c||(c=new j),function(t,e,n,r,o,c){const u=1&n,i=t.length,s=e.length;if(i!=s&&!(u&&s>i))return!1;const l=c.get(t);if(l&&c.get(e))return l==e;let a=-1,f=!0;for(c.set(t,e),c.set(e,t);++a<i;){let i;const s=t[a],l=e[a];if(r&&(i=u?r(l,s,a,e,t,c):r(s,l,a,t,e,c)),void 0!==i){if(i)continue;f=!1;break}if(s!==l&&!o(s,l,n,r,c)){f=!1;break}}return c.delete(t),c.delete(e),f}(t,e,n,r,o,c);if(!(1&n)){const u=p&&i.call(t,"__wrapped__"),s=y&&i.call(e,"__wrapped__");if(u||s){const i=u?t.value():t,l=s?e.value():e;return c||(c=new j),o(i,l,n,r,c)}}return!!_&&(c||(c=new j),function(t,e,n,r,o,c){const u=1&n,s=b(t),l=s.length;if(l!=b(e).length&&!u)return!1;let a,f=l;for(;f--;)if(a=s[f],!(u?a in e:i.call(e,a)))return!1;const p=c.get(t);if(p&&c.get(e))return p==e;let y,h=!0;c.set(t,e),c.set(e,t);let _=u;for(;++f<l;){a=s[f];const i=t[a],l=e[a];if(r&&(y=u?r(l,i,a,e,t,c):r(i,l,a,t,e,c)),!(void 0===y?i===l||o(i,l,n,r,c):y)){h=!1;break}_||(_="constructor"==a)}if(h&&!_){const n=t.constructor,r=e.constructor;n==r||!("constructor"in t)||!("constructor"in e)||"function"==typeof n&&n instanceof n&&"function"==typeof r&&r instanceof r||(h=!1)}return c.delete(t),c.delete(e),h}(t,e,n,r,o,c))}function v(t){return"object"==typeof t&&null!==t}function A(t,e,n,r,o){return t===e||(null==t||null==e||!v(t)&&!v(e)?t!=t&&e!=e:m(t,e,n,r,A,o))}function w(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");const n=function(...r){const o=e?e.apply(this,r):r[0],c=n.cache;if(c.has(o))return c.get(o);const u=t.apply(this,r);return n.cache=c.set(o,u)||c,u};return n.cache=new(w.Cache||Map),n}function O(t,e){let n,r;if(null==t)return n;for(const o of t){const t=e(o);null!=t&&(void 0===r?t==t:t<r)&&(r=t,n=o)}return n}w.Cache=Map;const z={};function $(t="$prefix$"){z[t]||(z[t]=0);const e=++z[t];return"$prefix$"===t?""+e:""+(t+e)}const x=(t,e)=>{const n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/;for(let o=0;o<n.length;o+=1)if(t>=n[o].value)return(t/n[o].value).toFixed(e).replace(r,"$1")+n[o].symbol;return t.toFixed(e).replace(r,"$1")};function k(t,e=!0){const n="string"==typeof t?t.replace(",","."):t;return(e?Number(""+n):Number.parseInt(""+n,10)).toLocaleString().split(",").join(" ")}export{t as debounce,c as isEmpty,A as isEqual,w as memoize,O as minBy,x as numFormat,k as numGrouping,$ as uniqueId};
/* follow me on Github! https://github.com/velusgautam */
