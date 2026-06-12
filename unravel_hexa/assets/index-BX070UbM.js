var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function fe(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function A(e,t){ue++,le[ue]=e.current,e.current=t}var pe=de(null),me=de(null),he=de(null),ge=de(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}fe(pe),A(pe,e)}function ve(){fe(pe),fe(me),fe(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(fe(pe),fe(me)),ge.current===e&&(fe(ge),Qf._currentValue=ce)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function j(e){e[xt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return Oe.call(Nt,e)?!0:Oe.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),M=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=En(h({},Dn,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=gn&&`CompositionEvent`in window,$n=null;gn&&`documentMode`in document&&($n=document.documentMode);var er=gn&&`TextEvent`in window&&!$n,tr=gn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Ht(Tt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),kt(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=mi(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Ge(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=de(null),Zi=null,Qi=null;function $i(e,t,n){A(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,fe(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,F={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new la,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=O.S;O.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=de(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?A(Sa,Sa.current):A(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:F._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=Ma(t),f(e,t,n)}if(se(t)||ie(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,sa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=Ma(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,sa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=Ma(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,sa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=Ma(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,sa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=de(null),ro=de(0);function io(e,t){e=Wl,A(ro,e),A(no,t),Wl=e|t.baseLanes}function ao(){A(ro,Wl),A(no,no.current)}function oo(){Wl=ro.current,fe(no),fe(ro)}var so=de(null),co=null;function lo(e){var t=e.alternate;A(I,I.current&1),A(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){A(I,I.current),A(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(A(I,I.current),A(so,e),co===null&&(co=e)):po(e)}function po(){A(I,I.current),A(so,so.current)}function mo(e){fe(so),co===e&&(co=null),fe(I)}var I=de(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,z=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Vs:Hs,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){O.H=Bs;var t=R!==null&&R.next!==null;if(go=0,z=R=L=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||H||(e=e.dependencies,e!==null&&ia(e)&&(H=!0))}function Do(e,t,n,r){L=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,z=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Us,o=t(n,r)}while(vo);return o}function Oo(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}go=0,z=R=L=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?L.memoizedState=z=e:z=z.next=e,z}function V(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=z===null?L.memoizedState:z.next;if(t!==null)z=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},z===null?L.memoizedState=z=e:z=z.next=e}return z}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ja(So,e,t),t=L,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Vs:Hs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===C)return oa(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(V(),R,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((go&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(H=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=V(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(H=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=L,a=V(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,H=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||z!==null&&z.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=No(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Ko(e){var t=li(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,R,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ps.bind(null,L,r),r.dispatch=n,r=qo(!1),a=Is.bind(null,L,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(V(),R,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=V();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=V(),n=R;if(n!==null)return is(t,n,e);V(),t=t.memoizedState,n=V();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=No(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return V().memoizedState}function ls(e,t,n,r){var i=Mo();L.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=V();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&wo(r,R.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(L.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=No(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ms(e){var t=V().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function hs(e,t){return us(4,2,e,t)}function gs(e,t){return us(4,4,e,t)}function _s(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vs(e,t,n){n=n==null?null:n.concat([e]),us(4,4,_s.bind(null,t,e),n)}function ys(){}function bs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=V();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function Cs(e,t,n,r){return Or(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(J&261930)?(H=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=Ss(e,n,r),Or(e,t)||(H=!0),e)}function ws(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Is(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ba(c,r),pu(e)):Fs(e,t,r,pu(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,ce,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},pu())}function ks(){return oa(Qf)}function As(){return V().memoizedState}function js(){return V().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,pu())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Ls(e){var t=e.alternate;return e===L||t!==null&&t===L}function Rs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Bs={readContext:oa,use:Fo,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};Bs.useEffectEvent=B;var Vs={readContext:oa,use:Fo,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,_s.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ps.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ys,useDeferredValue:function(e,t){return Ss(Mo(),e,t)},useTransition:function(){var e=qo(!1);return e=ws.bind(null,L,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Mo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return Mo().memoizedState=Ms.bind(null,L)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){return Cs(V(),R.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(V(),R,e,t)},useMemoCache:Io,useCacheRefresh:js};Hs.useEffectEvent=ms;var Us={readContext:oa,use:Fo,useCallback:bs,useContext:oa,useEffect:fs,useImperativeHandle:vs,useInsertionEffect:hs,useLayoutEffect:gs,useMemo:xs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:ys,useDeferredValue:function(e,t){var n=V();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=V().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:As,useHostTransitionStatus:ks,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=V();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,R,e,t)},useMemoCache:Io,useCacheRefresh:js};Us.useEffectEvent=ms;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ni(e)}function Xs(e){console.error(e)}function Zs(e){ni(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=qa(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=ec(e.stateNode,r,a),Xa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),H=!1;function ac(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!H?(Ao(e,t,i),Ac(e,t,i)):(P&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(H=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(H=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ha(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(uo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(H||ra(e,t,n,!1),a=(n&e.childLanes)!==0,H||a){if(r=K,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),ic;Du(),t=pc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return aa(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!H?(Ao(e,t,i),Ac(e,t,i)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!H?(Ao(e,t,a),Ac(e,t,a)):(P&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Wa||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Wa||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return qi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ta()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(I.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?lo(t):po(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(lo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(H||ra(e,t,n,!1),s=(n&e.childLanes)!==0,H||s){if(s=K,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),ic;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ta():(l=F._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ha(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=I.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(I,o),ac(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ia(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),$i(t,F,e.memoizedState.cache),qi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(I,I.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:$i(t,F,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)H=!0;else{if(!jc(e,n)&&!(t.flags&128))return H=!1,Mc(e,t,n);H=!!(e.flags&131072)}else H=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Js(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,F,r),r!==o.cache&&na(t,[F],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),j(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return Cc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(F),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,F,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,F,r),r!==a.cache&&na(t,[F],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,F,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(F),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=pe.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=pe.current,Ki(t))Wi(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return ea(t.type),U(t),null;case 19:if(fe(I),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return A(I,I.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return U(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=I.current,A(I,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&fe(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(F),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(F),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(I),null;case 4:return ve(),null;case 10:return ea(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&fe(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(F),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:ea(F),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:fe(I);break;case 10:ea(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&fe(Sa);break;case 24:ea(F)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,j(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,j(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(F).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:O.T===null?dt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||P){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=so.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),it(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Vl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,jo(e),Ia=null,La=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=et(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){L=null,O.H=Bs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Qs(e,wi(t,e.current)))}function wu(){var e=so.current;return e===null?!0:(J&4194048)===J?co===null:(J&62914560)===J||J&536870912?e===co:!1}function Tu(){var e=O.H;return O.H=Bs,e===null?Bs:e}function Eu(){var e=O.A;return O.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&so.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,O.H=i,O.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Ne()+500,Su(e,t)):Hl=et(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,O.H=r,O.A=a,G=n,q===null?(K=null,J=0,oi(),X):0}function ju(){for(;q!==null&&!je();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:jo(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,jo(t),Ia=null,La=0;var i=t.return;try{if(rc(e,i,t,n,J)){X=1,Qs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Qs(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,at(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=ec(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=tc(2),r=Ja(t,n,2),r!==null&&(nc(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Ne()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=li(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=$e(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=M;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),j(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),j(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);j(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),j(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),j(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,j(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),j(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,j(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),j(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,j(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),j(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,j(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),j(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/unravel_hexa/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return te(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ne(t)}return ie(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function D(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function te(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?re(t):t,state:n,key:t&&t.key||r||ee(),mask:i}}function ne({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function re(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function ie(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u()+1;let d=D(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:te(h.location,e,t);n&&n(r,e),l=u();let i=D(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),T(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ne(t);return i=i.replace(/ $/,`%20`),!n&&i.startsWith(`//`)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=Ce((typeof t==`string`?re(t):t).pathname||`/`,n);if(a==null)return null;let o=i??k(e),s=null,c=Se(a);for(let e=0;s==null&&e<o.length;++e)s=ye(o[e],c,r);return s}function O(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function k(e){let t=ce(e);return ue(t),t}function ce(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Me([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ce(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:_e(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of le(e.path))a(e,t,!0,n)}),t}function le(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=le(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ue(e){e.sort((e,t)=>e.score===t.score?ve(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var de=/^:[\w-]+$/,fe=3,A=2,pe=1,me=10,he=-2,ge=e=>e===`*`;function _e(e,t){let n=e.split(`/`),r=n.length;return n.some(ge)&&(r+=he),t&&(r+=A),n.filter(e=>!ge(e)).reduce((e,t)=>e+(de.test(t)?fe:t===``?pe:me),r)}function ve(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ye(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=be({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Me([a,u.pathname]),pathnameBase:Pe(Me([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Me([a,u.pathnameBase]))}return o}function be(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function xe(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Se(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ce(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Te(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?re(e):e,a;return n?(n=je(n),a=n.startsWith(`/`)?Ee(n.substring(1),`/`):Ee(n,t)):a=t,{pathname:a,search:Fe(r),hash:Ie(i)}}function Ee(e,t){let n=Ne(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function De(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ke(e){let t=Oe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ae(e,t,n,r=!1){let i;typeof e==`string`?i=re(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),De(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),De(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),De(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Te(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var je=e=>e.replace(/\/\/+/g,`/`),Me=e=>je(e.join(`/`)),Ne=e=>e.replace(/\/+$/,``),Pe=e=>Ne(e).replace(/^\/*/,`/`),Fe=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Ie=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Le=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Re(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ze(e){return Me(e.map(e=>e.route.path).filter(Boolean))||`/`}var Be=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ve(e,t){let n=e;if(typeof n!=`string`||!we.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Be)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ce(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var He=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(He);var Ue=[`GET`,...He];new Set(Ue);var We=x.createContext(null);We.displayName=`DataRouter`;var Ge=x.createContext(null);Ge.displayName=`DataRouterState`;var Ke=x.createContext(!1);function qe(){return x.useContext(Ke)}var Je=x.createContext({isTransitioning:!1});Je.displayName=`ViewTransition`;var Ye=x.createContext(new Map);Ye.displayName=`Fetchers`;var Xe=x.createContext(null);Xe.displayName=`Await`;var Ze=x.createContext(null);Ze.displayName=`Navigation`;var Qe=x.createContext(null);Qe.displayName=`Location`;var $e=x.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=x.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Le(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){T(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(Ze),{hash:i,pathname:a,search:o}=pt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Me([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return x.useContext(Qe)!=null}function ct(){return T(st(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){x.useContext(Ze).static||x.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=x.useContext($e);return e?jt():ft()}function ft(){T(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(We),{basename:t,navigator:n}=x.useContext(Ze),{matches:r}=x.useContext($e),{pathname:i}=ct(),a=JSON.stringify(ke(r)),o=x.useRef(!1);return ut(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(E(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ae(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Me([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function pt(e,{relative:t}={}){let{matches:n}=x.useContext($e),{pathname:r}=ct(),i=JSON.stringify(ke(n));return x.useMemo(()=>Ae(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function mt(e,t){return ht(e,t)}function ht(e,t,n){T(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(Ze),{matches:i}=x.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Nt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?re(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=St(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Me([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Me([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function gt(){let e=At(),t=Re(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var _t=x.createElement(gt,null),vt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement($e.Provider,{value:this.props.routeContext},x.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(bt,{error:e},t):t}};vt.contextType=Ke;var yt=new WeakMap;function bt({children:e,error:t}){let{basename:n}=x.useContext(Ze);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=yt.get(t);if(r)throw r;let i=Ve(e.location,n);if(Be&&!yt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw yt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function xt({routeContext:e,match:t,children:n}){let r=x.useContext(We);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement($e.Provider,{value:e},n)}function St(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:ze(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||_t,o&&(s<0&&c===0?(Nt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(xt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(vt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ct(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=x.useContext(We);return T(t,Ct(e)),t}function Tt(e){let t=x.useContext(Ge);return T(t,Ct(e)),t}function Et(e){let t=x.useContext($e);return T(t,Ct(e)),t}function j(e){let t=Et(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Dt(){return j(`useRouteId`)}function Ot(){let e=Tt(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function kt(){let{matches:e,loaderData:t}=Tt(`useMatches`);return x.useMemo(()=>e.map(e=>O(e,t)),[e,t])}function At(){let e=x.useContext(et),t=Tt(`useRouteError`),n=j(`useRouteError`);return e===void 0?t.errors?.[n]:e}function jt(){let{router:e}=wt(`useNavigate`),t=j(`useNavigate`),n=x.useRef(!1);return ut(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{E(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Mt={};function Nt(e,t,n){!t&&!Mt[e]&&(Mt[e]=!0,E(!1,n))}x.memo(Pt);function Pt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return ht(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ft(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function It({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){T(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=re(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Ce(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(Ze.Provider,{value:c},x.createElement(Qe.Provider,{children:t,value:h}))}function Lt({children:e,location:t}){return mt(Rt(e),t)}x.Component;function Rt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Rt(e.props.children,i));return}T(e.type===Ft,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Rt(e.props.children,i)),n.push(a)}),n}var zt=`get`,Bt=`application/x-www-form-urlencoded`;function Vt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ht(e){return Vt(e)&&e.tagName.toLowerCase()===`button`}function Ut(e){return Vt(e)&&e.tagName.toLowerCase()===`form`}function Wt(e){return Vt(e)&&e.tagName.toLowerCase()===`input`}function Gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kt(e,t){return e.button===0&&(!t||t===`_self`)&&!Gt(e)}var qt=null;function Jt(){if(qt===null)try{new FormData(document.createElement(`form`),0),qt=!1}catch{qt=!0}return qt}var Yt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Xt(e){return e!=null&&!Yt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bt}"`),null):e}function Zt(e,t){let n,r,i,a,o;if(Ut(e)){let o=e.getAttribute(`action`);r=o?Ce(o,t):null,n=e.getAttribute(`method`)||zt,i=Xt(e.getAttribute(`enctype`))||Bt,a=new FormData(e)}else if(Ht(e)||Wt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ce(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||zt,i=Xt(e.getAttribute(`formenctype`))||Xt(o.getAttribute(`enctype`))||Bt,a=new FormData(o,e),!Jt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Vt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=zt,r=null,i=Bt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Qt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},$t=/[&><\u2028\u2029]/g;function en(e){return e.replace($t,e=>Qt[e])}function tn(e,t){if(e===!1||e==null)throw Error(t)}function nn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ce(i.pathname,t)===`/`?i.pathname=`${Ne(t)}/_root.${r}`:i.pathname=`${Ne(i.pathname)}.${r}`,i}async function rn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function an(e){return e!=null&&typeof e.page==`string`}function on(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function sn(e,t,n){return fn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await rn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(on).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function cn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function ln(e,t,{includeHydrateFallback:n}={}){return un(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function un(e){return[...new Set(e)]}function dn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function fn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!an(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(dn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function pn(){let e=x.useContext(We);return tn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function mn(){let e=x.useContext(Ge);return tn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var hn=x.createContext(void 0);hn.displayName=`FrameworkContext`;function gn(){let e=x.useContext(hn);return tn(e,`You must render this element inside a <HydratedRouter> element`),e}function _n(e,t){let n=x.useContext(hn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:vn(s,p),onBlur:vn(c,m),onMouseEnter:vn(l,p),onMouseLeave:vn(u,m),onTouchStart:vn(d,p)}]:[a,f,{}]:[!1,f,{}]}function vn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function yn({page:e,...t}){let n=qe(),{router:r}=pn(),i=x.useMemo(()=>oe(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(xn,{page:e,matches:i,...t}):x.createElement(Sn,{page:e,matches:i,...t}):null}function bn(e){let{manifest:t,routeModules:n}=gn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return sn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function xn({page:e,matches:t,...n}){let r=ct(),{future:i}=gn(),{basename:a}=pn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=nn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Sn({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=gn(),{basename:s}=pn(),{loaderData:c,matches:l}=mn(),u=x.useMemo(()=>cn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>cn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=nn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>ln(d,a),[d,a]),m=bn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Cn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var wn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{wn&&(window.__reactRouterVersion=`7.17.0`)}catch{}function Tn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(It,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function En({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(It,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}En.displayName=`unstable_HistoryRouter`;var Dn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,On=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext(Ze),v=typeof l==`string`&&Dn.test(l),y=Ve(l,h);l=y.to;let b=ot(l,{relative:r}),S=ct(),C=null;if(o){let e=Ae(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Me([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=_n(n,p),ee=Fn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||ee(t)}let te=!(y.isExternal||i),ne=x.createElement(`a`,{...p,...E,href:(te?C:void 0)||y.absoluteURL||b,onClick:te?D:e,ref:Cn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?x.createElement(x.Fragment,null,ne,x.createElement(yn,{page:b})):ne});On.displayName=`Link`;var kn=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=pt(a,{relative:c.relative}),d=ct(),f=x.useContext(Ge),{navigator:p,basename:m}=x.useContext(Ze),h=f!=null&&Gn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ce(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(On,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});kn.displayName=`NavLink`;var An=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=zt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext(Ze),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Dn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn({getKey:e,storageKey:t,...n}){let r=x.useContext(hn),{basename:i}=x.useContext(Ze),a=ct(),o=kt();Un({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Hn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${en(JSON.stringify(t||Bn))}, ${en(JSON.stringify(s))})`}})}jn.displayName=`ScrollRestoration`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=x.useContext(We);return T(t,Mn(e)),t}function Pn(e){let t=x.useContext(Ge);return T(t,Mn(e)),t}function Fn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=pt(e,{relative:o});return x.useCallback(p=>{if(Kt(p,t)){p.preventDefault();let t=n===void 0?ne(d)===ne(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Nn(`useSubmit`),{basename:t}=x.useContext(Ze),n=Dt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Zt(e,t);a.navigate===!1?await r(a.fetcherKey||Ln(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=x.useContext(Ze),r=x.useContext($e);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...pt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Me([n,a.pathname])),ne(a)}var Bn=`react-router-scroll-positions`,Vn={};function Hn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ce(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Un({getKey:e,storageKey:t}={}){let{router:n}=Nn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Pn(`useScrollRestoration`),{basename:a}=x.useContext(Ze),o=ct(),s=kt(),c=Ot();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Wn(x.useCallback(()=>{if(c.state===`idle`){let t=Hn(o,s,a,e);Vn[t]=window.scrollY}try{sessionStorage.setItem(t||Bn,JSON.stringify(Vn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Bn);e&&(Vn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Vn,()=>window.scrollY,e?(t,n)=>Hn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Wn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Gn(e,{relative:t}={}){let n=x.useContext(Je);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=pt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ce(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ce(n.nextLocation.pathname,r)||n.nextLocation.pathname;return be(i.pathname,o)!=null||be(i.pathname,a)!=null}var Kn=g(),qn=`/unravel_hexa/assets/header_logo-BfWiH3qu.png`,Jn=`/unravel_hexa/assets/hero_logo-dzZm3dl4.png`,Yn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),M=o(((e,t)=>{t.exports=Yn()}))(),Xn=[{phase:`Registration & Onboarding`,phaseNum:`01`,color:`#f58220`,steps:[{icon:`form`,title:`Registration Form`,tech:`HTML · CSS · JavaScript`,desc:`Full registration portal with personalization, team formation up to 4 members, and real-time custom validation.`,before:`Manual Google Form with no personalization and customization`,after:`Automated portal with personalization and nd real-time custom validation`,metric:`300+ registrations processed`},{icon:`script`,title:`Casebook Mailer`,tech:`Google Apps Script`,desc:`Webhook that captures form data, logs it to Google Sheets, and auto-sends branded Round 1 casebook confirmation emails.`,before:`Manually copying data to sheets, sending emails one by one or using bcc without personalization`,after:`Instant auto-logging + auto-email on submission as it was an open case`,metric:`Zero manual data entry`},{icon:`script`,title:`Standalone Verifier`,tech:`Google Apps Script`,desc:`Trigger-based verifier that watches for admin approval in Sheets and dispatches confirmation emails to verified teams.`,before:`Admin manually sends confirmation after checking payment`,after:`One-click approve triggers automatic confirmation email`,metric:`Instant verification pipeline`},{icon:`bot`,title:`WhatsApp Bot Integration`,tech:`Apps Script · Webhook`,desc:`Instant onsite registration alternative to the main form. Built for quick walk-in registrations during the event launch phase.`,before:`Walk-ins had to fill long Google Forms on-site`,after:`Quick WhatsApp chat completes registration and sends the open casebook instantly`,metric:`On-site registration in 60s`}]},{phase:`Round 1`,phaseNum:`02`,color:`#d72027`,steps:[{icon:`email`,title:`Casebook Distribution`,tech:`HTML Email Template`,desc:`Branded HTML email template sent to all registered teams with casebook download link and submission deadline.`,before:`Plain-text email, manual recipient list`,after:`Branded email blast to 100+ teams in seconds`,metric:`100+ emails in one click`},{icon:`form`,title:`R1 Submission Portal`,tech:`HTML · JavaScript · Apps Script`,desc:`Submission portal with auto-logging, file upload verification, and instant confirmation emails to participants.`,before:`Email-based submissions, manual tracking`,after:`Auto-logged submissions with instant confirmations`,metric:`All submissions auto-tracked`}]},{phase:`Finals`,phaseNum:`03`,color:`#4f6ef7`,steps:[{icon:`email`,title:`Finalist Congratulations`,tech:`HTML Email · Apps Script`,desc:`Automated celebratory email sent to finalist teams with final round details, venue info, and preparation guidelines.`,before:`Individual congratulations messages, inconsistent info`,after:`Branded congratulatory email with all details, sent in bulk`,metric:`Finalists notified instantly`},{icon:`email`,title:`Final Casebook Mail`,tech:`HTML Email Template`,desc:`Final round case distribution email with branded template, casebook link, and submission deadline for the grand finale.`,before:`Manual email with attached PDF`,after:`Branded template with download link + deadline`,metric:`Professional case delivery`},{icon:`script`,title:`Finalist Mailer`,tech:`Google Apps Script`,desc:`Bulk mailer automation that processes finalist data from Sheets and dispatches personalized communications to each team.`,before:`Copy-paste emails to each team individually`,after:`One-click bulk send with personalization`,metric:`Bulk mail in seconds`}]},{phase:`Onboardings`,phaseNum:`04`,color:`#34d399`,steps:[{icon:`form`,title:`Judge Onboarding`,tech:`HTML Form · Apps Script · Email`,desc:`Complete judge management pipeline: onboarding form, invitation emails, evaluation sheet distribution, and thank-you mails.`,before:`Separate forms, emails, and tracking for each judge`,after:`End-to-end automated pipeline per judge`,metric:`4-step pipeline automated`},{icon:`form`,title:`Mentor Onboarding`,tech:`HTML Form · Apps Script · Email`,desc:`Mentor invitation and confirmation pipeline with branded form, auto-confirmation, and session scheduling communications.`,before:`Individual outreach, manual confirmation tracking`,after:`Automated invitation + confirmation flow`,metric:`Seamless mentor pipeline`},{icon:`form`,title:`Workshop Speaker Onboarding`,tech:`HTML Form · Apps Script · Email`,desc:`Full speaker management system: onboarding form, session details email, logistics coordination, and post-event thank-you.`,before:`Phone calls and scattered WhatsApp messages`,after:`Structured digital pipeline with automated emails`,metric:`Complete speaker management`}]}],Zn=[{value:`300+`,label:`Participants`,icon:`users`},{value:`50+`,label:`Branded Emails Automated`,icon:`mail`},{value:`4`,label:`Pipelines Automated`,icon:`pipeline`},{value:`0`,label:`Manual Data Entries`,icon:`check`}];function Qn({type:e}){return(0,M.jsx)(`div`,{className:`wf-step-icon`,children:{form:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`3`}),(0,M.jsx)(`line`,{x1:`9`,y1:`9`,x2:`15`,y2:`9`}),(0,M.jsx)(`line`,{x1:`9`,y1:`13`,x2:`15`,y2:`13`}),(0,M.jsx)(`line`,{x1:`9`,y1:`17`,x2:`12`,y2:`17`})]}),email:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`3`}),(0,M.jsx)(`polyline`,{points:`22 4 12 13 2 4`})]}),script:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`polyline`,{points:`16 18 22 12 16 6`}),(0,M.jsx)(`polyline`,{points:`8 6 2 12 8 18`})]}),bot:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`rect`,{x:`3`,y:`8`,width:`18`,height:`12`,rx:`3`}),(0,M.jsx)(`circle`,{cx:`9`,cy:`14`,r:`1.5`}),(0,M.jsx)(`circle`,{cx:`15`,cy:`14`,r:`1.5`}),(0,M.jsx)(`line`,{x1:`12`,y1:`4`,x2:`12`,y2:`8`}),(0,M.jsx)(`circle`,{cx:`12`,cy:`3`,r:`1`})]})}[e]})}function $n({type:e}){return(0,M.jsx)(`div`,{className:`wf-impact-icon`,children:{users:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),(0,M.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,M.jsx)(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87`}),(0,M.jsx)(`path`,{d:`M16 3.13a4 4 0 0 1 0 7.75`})]}),mail:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`3`}),(0,M.jsx)(`polyline`,{points:`22 4 12 13 2 4`})]}),pipeline:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`5`,r:`3`}),(0,M.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12`,y2:`14`}),(0,M.jsx)(`circle`,{cx:`6`,cy:`19`,r:`3`}),(0,M.jsx)(`circle`,{cx:`18`,cy:`19`,r:`3`}),(0,M.jsx)(`path`,{d:`M12 14l-6 2`}),(0,M.jsx)(`path`,{d:`M12 14l6 2`})]}),check:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,M.jsx)(`polyline`,{points:`9 12 11 14 15 10`})]})}[e]})}function er(){let e=(0,x.useRef)(null),[t,n]=(0,x.useState)(!1),r=dt();return(0,x.useEffect)(()=>{let e=()=>{n(window.scrollY>150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,x.useEffect)(()=>(e.current=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`revealed`),e.current?.unobserve(t.target))})},{threshold:.15,rootMargin:`0px 0px -40px 0px`}),document.querySelectorAll(`.wf-reveal`).forEach(t=>e.current?.observe(t)),()=>e.current?.disconnect()),[]),(0,M.jsxs)(`div`,{className:`workflow-page`,id:`workflow-page`,children:[(0,M.jsx)(`header`,{className:`wf-main-header ${t?`visible`:``}`,children:(0,M.jsxs)(`div`,{className:`wf-main-header-inner`,children:[(0,M.jsx)(`img`,{src:qn,alt:`Unravel Hexa Header Logo`,className:`wf-main-logo`}),(0,M.jsx)(`span`,{className:`wf-main-header-title`,children:`Operations Workflow`})]})}),(0,M.jsxs)(`div`,{className:`wf-top-section`,children:[(0,M.jsxs)(`header`,{className:`wf-hero-header`,children:[(0,M.jsxs)(`div`,{className:`wf-hero-bg-shapes`,children:[(0,M.jsx)(`div`,{className:`wf-hero-shape wf-hero-shape-1`}),(0,M.jsx)(`div`,{className:`wf-hero-shape wf-hero-shape-2`}),(0,M.jsx)(`div`,{className:`wf-hero-shape wf-hero-shape-3`})]}),(0,M.jsxs)(`div`,{className:`wf-hero-content`,children:[(0,M.jsx)(`img`,{src:Jn,alt:`Unravel Hexa`,className:`wf-hero-logo`}),(0,M.jsx)(`h1`,{className:`wf-hero-title`,children:`Operations Workflow`}),(0,M.jsx)(`p`,{className:`wf-hero-desc`,children:`Every pipeline below was designed, coded, and automated from scratch to run Unravel Hexa, north-Bengal's biggest inter-university case competition.`})]})]}),(0,M.jsx)(`section`,{className:`wf-impact wf-reveal`,children:(0,M.jsx)(`div`,{className:`wf-impact-inner`,children:(0,M.jsx)(`div`,{className:`wf-impact-grid`,children:Zn.map(e=>(0,M.jsxs)(`div`,{className:`wf-impact-card wf-reveal`,children:[(0,M.jsx)($n,{type:e.icon}),(0,M.jsx)(`span`,{className:`wf-impact-value`,children:e.value}),(0,M.jsx)(`span`,{className:`wf-impact-label`,children:e.label})]},e.label))})})})]}),(0,M.jsxs)(`main`,{className:`wf-timeline-container`,children:[(0,M.jsx)(`div`,{className:`wf-timeline-line`}),Xn.map((e,t)=>(0,M.jsxs)(`section`,{className:`wf-phase wf-reveal`,style:{"--phase-color":e.color},children:[(0,M.jsxs)(`div`,{className:`wf-phase-header`,children:[(0,M.jsx)(`span`,{className:`wf-phase-num`,children:e.phaseNum}),(0,M.jsx)(`h2`,{className:`wf-phase-title`,children:e.phase}),(0,M.jsx)(`div`,{className:`wf-phase-line`})]}),(0,M.jsx)(`div`,{className:`wf-steps`,children:e.steps.map((t,n)=>(0,M.jsxs)(`div`,{className:`wf-step-card wf-reveal ${n%2==0?`from-left`:`from-right`}`,style:{"--step-delay":`${n*.12}s`},children:[(0,M.jsx)(`div`,{className:`wf-step-dot`,style:{background:e.color}}),(0,M.jsxs)(`div`,{className:`wf-step-content`,children:[(0,M.jsxs)(`div`,{className:`wf-step-header`,children:[(0,M.jsx)(Qn,{type:t.icon}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{className:`wf-step-title`,children:t.title}),(0,M.jsx)(`span`,{className:`wf-step-tech`,children:t.tech})]})]}),(0,M.jsx)(`p`,{className:`wf-step-desc`,children:t.desc}),(0,M.jsxs)(`div`,{className:`wf-step-comparison`,children:[(0,M.jsxs)(`div`,{className:`wf-step-before`,children:[(0,M.jsx)(`span`,{className:`wf-step-tag wf-step-tag-before`,children:`Before`}),(0,M.jsx)(`span`,{className:`wf-step-tag-text`,children:t.before})]}),(0,M.jsx)(`div`,{className:`wf-step-arrow`,children:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,M.jsx)(`polyline`,{points:`14 7 19 12 14 17`})]})}),(0,M.jsxs)(`div`,{className:`wf-step-after`,children:[(0,M.jsx)(`span`,{className:`wf-step-tag wf-step-tag-after`,children:`After`}),(0,M.jsx)(`span`,{className:`wf-step-tag-text`,children:t.after})]})]}),(0,M.jsxs)(`div`,{className:`wf-step-metric`,children:[(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`polyline`,{points:`23 6 13.5 15.5 8.5 10.5 1 18`}),(0,M.jsx)(`polyline`,{points:`17 6 23 6 23 12`})]}),(0,M.jsx)(`span`,{children:t.metric})]})]})]},t.title))})]},e.phase))]}),(0,M.jsxs)(`div`,{className:`wf-bottom-section`,children:[(0,M.jsx)(`section`,{className:`wf-cta-section wf-reveal`,children:(0,M.jsxs)(`div`,{className:`wf-cta-inner`,children:[(0,M.jsx)(`h2`,{className:`wf-cta-title`,children:`Curious about the implementation?`}),(0,M.jsx)(`p`,{className:`wf-cta-desc`,children:`Explore the exact codebase and scripts that powered these automations.`}),(0,M.jsxs)(`button`,{className:`wf-cta-btn`,onClick:()=>r(`/IDE`),children:[(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`polyline`,{points:`16 18 22 12 16 6`}),(0,M.jsx)(`polyline`,{points:`8 6 2 12 8 18`})]}),`Check the Codebase`]})]})}),(0,M.jsx)(`footer`,{className:`wf-footer`,children:(0,M.jsxs)(`div`,{className:`wf-footer-inner`,children:[(0,M.jsx)(`p`,{className:`wf-footer-summary`,children:`This automated ecosystem replaced fragmented manual processes with a seamless, interconnected pipeline—saving countless hours and ensuring a professional experience for all stakeholders throughout Unravel Hexa.`}),(0,M.jsx)(`div`,{className:`wf-footer-bottom`,children:(0,M.jsx)(`a`,{href:`https://www.linkedin.com/in/ahmadjubayer`,target:`_blank`,rel:`noopener noreferrer`,className:`wf-footer-link`,children:`Jubayer Ahmad \xA0|\xA0 IBA, RU`})})]})})]})]})}function tr(){let[e,t]=(0,x.useState)(!0),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(!1),o=dt();(0,x.useEffect)(()=>{let e=setTimeout(()=>r(!0),50);return()=>clearTimeout(e)},[]);let s=()=>{a(!0),setTimeout(()=>t(!1),450)},c=()=>{a(!0),setTimeout(()=>{t(!1),o(`/IDE`)},400)};return e?(0,M.jsx)(`div`,{className:`hero-popup-overlay ${n?`active`:``} ${i?`closing`:``}`,id:`hero-popup`,children:(0,M.jsxs)(`div`,{className:`hero-popup-card ${n?`active`:``} ${i?`closing`:``}`,children:[(0,M.jsx)(`div`,{className:`hero-popup-particles`,children:[...[,,,,,,]].map((e,t)=>(0,M.jsx)(`div`,{className:`hero-particle`,style:{"--delay":`${t*.4}s`,"--x":`${20+t*13}%`,"--size":`${3+t%3*2}px`}},t))}),(0,M.jsx)(`div`,{className:`hero-popup-image-wrap`,children:(0,M.jsx)(`img`,{src:Jn,alt:`Unravel Hexa`,className:`hero-popup-image`})}),(0,M.jsxs)(`h1`,{className:`hero-popup-title`,children:[`The Automated Engine Behind`,(0,M.jsx)(`span`,{className:`hero-popup-title-accent`,children:` Unravel Hexa`})]}),(0,M.jsxs)(`p`,{className:`hero-popup-summary`,children:[`From registration to finals, from judge onboarding to speaker management, every operational pipeline of north-Bengal's biggest case competition was designed, coded, and automated single-handedly. `,(0,M.jsx)(`strong`,{children:`300+ participants`}),`,`,` `,(0,M.jsx)(`strong`,{children:`50+ branded emails`}),`, `,(0,M.jsx)(`strong`,{children:`4 stakeholder pipelines`}),`, and `,(0,M.jsx)(`strong`,{children:`zero manual data entry`}),`.`]}),(0,M.jsxs)(`div`,{className:`hero-popup-actions`,children:[(0,M.jsxs)(`button`,{className:`hero-popup-btn hero-popup-btn-primary`,onClick:s,id:`view-workflow-btn`,children:[(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`polyline`,{points:`6 9 12 15 18 9`})}),`View Full Workflow`]}),(0,M.jsxs)(`button`,{className:`hero-popup-btn hero-popup-btn-secondary`,onClick:c,id:`check-codebase-btn`,children:[(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`polyline`,{points:`16 18 22 12 16 6`}),(0,M.jsx)(`polyline`,{points:`8 6 2 12 8 18`})]}),`Check the Codebase`]})]}),(0,M.jsxs)(`p`,{className:`hero-popup-credit`,children:[`Built by `,(0,M.jsx)(`a`,{href:`https://www.linkedin.com/in/ahmadjubayer`,target:`_blank`,rel:`noopener noreferrer`,children:`Jubayer Ahmad`})]})]})}):null}var nr=[{id:`registration-form`,shortName:`RegistrationForm.html`,language:`html`,category:`Round 1`,summary:`Full registration portal with payment verification, team formation, and live validation. Collected 300+ participants' details for the competition.`,content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unravel 6.0 | Full Registration</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #ff9f43;
      --secondary: #ee5253;
      --accent: #5f27cd;
      --success: #1dd1a1;
      --bg: #0a0a12;
      --card-bg: #1e1e2f;
      --text: #ffffff;
      --optional: #8395a7;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
    body {
      background-color: var(--bg);
      background-image: radial-gradient(at 0% 0%, rgba(95, 39, 205, 0.15) 0px, transparent 50%);
      color: var(--text);
      display: flex;
      justify-content: center;
      min-height: 100vh;
      padding: 15px;
    }
    .container {
      width: 100%;
      max-width: 650px;
      background: var(--card-bg);
      padding: 30px;
      border-radius: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.05);
      margin: auto;
    }
    header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo-container {
      margin-bottom: 15px;
    }
    .logo {
      max-width: 400px;
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(245, 130, 32, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .section-head {
      display: flex;
      align-items: center;
      margin: 25px 0 15px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
    }
    .section-head::after {
      content: "";
      height: 1px;
      flex: 1;
      background: rgba(255, 255, 255, 0.1);
      margin-left: 15px;
    }
    .optional-tag {
      font-size: 0.7rem;
      color: var(--optional);
      margin-left: 8px;
      text-transform: none;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .full-width {
      grid-column: span 2;
    }
    label {
      font-size: 0.75rem;
      color: var(--optional);
      margin-bottom: 4px;
      display: block;
      margin-left: 5px;
    }
    input,
    select {
      width: 100%;
      padding: 12px 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: white;
      font-size: 0.95rem;
      transition: 0.3s;
    }
    input:focus,
    select:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.07);
    }
    select option {
      background: #1e1e2f;
      color: white;
    }
    .payment-box {
      background: rgba(255, 159, 67, 0.08);
      border: 1px dashed var(--primary);
      padding: 15px;
      border-radius: 15px;
      margin-bottom: 20px;
      text-align: center;
    }
    .submit-btn {
      width: 100%;
      padding: 18px;
      margin-top: 30px;
      border: none;
      border-radius: 5px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    .submit-btn:active:not(:disabled) {
      transform: translateY(0);
    }
    .submit-btn:disabled {
      pointer-events: none;
      color: transparent;
    }
    .submit-btn:disabled::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spin 0.6s linear infinite;
    }
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    .error-msg {
      background: rgba(238, 82, 83, 0.15);
      border: 1px solid var(--secondary);
      color: #ff6b6b;
      padding: 12px 15px;
      border-radius: 12px;
      font-size: 0.85rem;
      margin-top: 15px;
      display: none;
      text-align: center;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: none;
      justify-content: center;
      align-items: center;
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.5);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .success-modal.active {
      transform: scale(1);
      opacity: 1;
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.15rem;
      color: #b8c6db;
      line-height: 1.7;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .facebook-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
      margin-bottom: 25px;
    }
    .facebook-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.45);
      color: white;
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.05rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 0.95rem;
      }
    }
    @media (max-width: 600px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      .full-width {
        grid-column: span 1;
      }
    }
  </style>
  <style>
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  </style>
</head>
<body wotdisconnected="true" data-new-gr-c-s-check-loaded="14.1290.0" data-gr-ext-installed=""><span
    id="warning-container"><i data-reactroot=""></i></span>
  <div class="container">
    <header>
      <div class="logo-container">
        <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
          class="logo">
      </div>
      <p style="opacity: 0.5; font-size: 0.7rem;">Registration Form</p>
    </header>
    <form id="unravelForm">
      <div class="section-head">Team Information</div>
      <div class="form-grid">
        <div class="input-item"><label>Team Name *</label><input type="text" name="team_name" required=""></div>
        <div class="input-item"><label>University *</label><input type="text" name="uni_name" required=""></div>
      </div>
      <div class="section-head">Team Leader</div>
      <div class="form-grid">
        <div class="full-width"><label>Full Name *</label><input type="text" name="l_name" required=""></div>
        <div class="input-item"><label>Department</label><input type="text" name="l_dept"></div>
        <div class="input-item"><label>Year</label><input type="text" name="l_year"></div>
        <div class="input-item"><label>Email *</label><input type="email" name="l_email" required=""></div>
        <div class="input-item"><label>Contact *</label><input type="tel" name="l_phone" required=""></div>
      </div>
      <div class="section-head">Second Member <span class="optional-tag">(Optional)</span></div>
      <div class="form-grid">
        <div class="full-width"><label>Full Name</label><input type="text" name="m2_name"></div>
        <div class="input-item"><label>Department</label><input type="text" name="m2_dept"></div>
        <div class="input-item"><label>Year</label><input type="text" name="m2_year"></div>
        <div class="input-item"><label>Email</label><input type="email" name="m2_email"></div>
        <div class="input-item"><label>Contact</label><input type="tel" name="m2_phone"></div>
      </div>
      <div class="section-head">Payment</div>
      <div class="payment-box">
        <p style="font-size: 0.9rem;">Registration Fee: <b>200 TK</b></p>
        <p style="font-size: 0.9rem;">Send Money (Bkash/Nagad): <b>01586120216</b></p>
      </div>
      <div class="form-grid">
        <div class="input-item">
          <label>Method *</label>
          <select name="pay_method" required="">
            <option value="" disabled="" selected="">Select</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div class="input-item">
          <label>Transaction ID *</label>
          <input type="text" name="trx_id" placeholder="Ex: 8N76XW..." required="">
        </div>
      </div>
      <div class="error-msg" id="errorMsg">❌ Submission failed. Please try again.</div>
      <div class="section-head">Reference <span class="optional-tag">(Optional)</span></div>
      <div class="form-grid">
        <div class="full-width"><label>Reference Name</label><input type="text" name="ref_name"
            placeholder="Who referred you? (optional)"></div>
      </div>
      <button type="submit" class="submit-btn" id="submitBtn">Submit Registration</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal" id="successModalCard">
      <div class="close-modal" onclick="closePopup()">×</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Submitted!</h1>
      <div class="success-message">
        Dear team <strong id="pTeam"></strong>,<br>
        Round 1 casebook has been sent to your email.<br>
        Check your inbox and <strong>start brainstorming now!</strong>
      </div>
      <a href="https://www.facebook.com/hello.rubc" target="_blank" rel="noopener noreferrer" class="facebook-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Follow for Updates
      </a>
      <div style="color: #8892b0; font-size: 0.9rem; margin-top: 15px;">
        The grind never stops! 🚀
      </div>
    </div>
  </div>
  <script>
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxeX0XRvBBkteeYGusmKAalxzT3cQNe4x3HZErCcwP7JrGmhDyivZ86VP-XvOXiLtnN/exec";
    const form = document.getElementById('unravelForm');
    const overlay = document.getElementById('successModal');
    const card = document.getElementById('successModalCard');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      errorMsg.style.display = 'none';
      submitBtn.disabled = true;
      const formData = {
        team_name: form.team_name.value,
        uni_name: form.uni_name.value,
        l_name: form.l_name.value,
        l_dept: form.l_dept.value,
        l_year: form.l_year.value,
        l_email: form.l_email.value,
        l_phone: form.l_phone.value,
        m2_name: form.m2_name.value,
        m2_dept: form.m2_dept.value,
        m2_year: form.m2_year.value,
        m2_email: form.m2_email.value,
        m2_phone: form.m2_phone.value,
        pay_method: form.pay_method.value,
        trx_id: form.trx_id.value,
        ref_name: form.ref_name.value,
      };
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(formData)
        });
        document.getElementById('pTeam').innerText = formData.team_name;
        overlay.style.display = 'flex';
        setTimeout(() => card.classList.add('active'), 10);
      } catch (err) {
        errorMsg.style.display = 'block';
        console.error('Submission error:', err);
      } finally {
        submitBtn.disabled = false;
      }
    });
    function closePopup() {
      card.classList.remove('active');
      setTimeout(() => {
        overlay.style.display = 'none';
        form.reset();
      }, 300);
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closePopup();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });
  <\/script>
</body><grammarly-desktop-integration data-grammarly-shadow-root="true"><template shadowrootmode="open">
    <style>
      div.grammarly-desktop-integration {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      div.grammarly-desktop-integration:before {
        content: attr(data-content);
      }
    </style>
    <div aria-label="grammarly-integration" role="group" tabindex="-1" class="grammarly-desktop-integration"
      data-content="{&quot;mode&quot;:&quot;full&quot;,&quot;isActive&quot;:true,&quot;isUserDisabled&quot;:false}">
    </div>
  </template></grammarly-desktop-integration>
</html>`},{id:`submission-mailer`,shortName:`SubmissionMailer.js`,language:`javascript`,category:`Round 1`,summary:`Google Apps Script webhook that logs registration data to Sheets and auto-sends Round 1 casebook confirmation emails.`,content:`function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    let data;
    try {
        data = JSON.parse(e.postData.contents);
    } catch (err) {
        data = JSON.parse(e.postData.getDataAsString());
    }
    sheet.appendRow([
        new Date().toLocaleString(),
        data.team_name || '',
        data.uni_name || '',
        data.l_name || '',
        data.l_dept || '',
        data.l_year || '',
        data.l_email || '',
        data.l_phone || '',
        data.m2_name || '',
        data.m2_dept || '',
        data.m2_year || '',
        data.m2_email || '',
        data.m2_phone || '',
        data.pay_method || '',
        data.trx_id || '',
        data.ref_name || ''
    ]);
    const newRow = sheet.getLastRow();
    sendR1ConfirmationEmail(sheet, newRow, data.team_name, data.l_email);
    return ContentService
        .createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
function sendR1ConfirmationEmail(sheet, row, teamName, leaderEmail) {
    const COLUMN_TO_WATCH = 17;
    const STATUS_COLUMN = 18;
    const TEMPLATE_FILE = "R1SubmissionConfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    try {
        if (!leaderEmail) {
            Logger.log("No leader email for row " + row + ". Email not sent.");
            sheet.getRange(row, STATUS_COLUMN).setValue("Error: No leader email.");
            return;
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        sheet.getRange(row, COLUMN_TO_WATCH).setValue("✅ Verified!");
        sheet.getRange(row, STATUS_COLUMN).setValue("Sent!");
        Logger.log("R1 confirmation sent to " + leaderEmail + " (row " + row + ")");
    } catch (error) {
        Logger.log("Error sending email for row " + row + ": " + error.toString());
        sheet.getRange(row, STATUS_COLUMN).setValue("Error: " + error.message);
    }
}
function doGet(e) {
    return ContentService
        .createTextOutput("OK")
        .setMimeType(ContentService.MimeType.TEXT);
}
`},{id:`standalone-verifier`,shortName:`StandaloneVerifier.js`,language:`javascript`,category:`Round 1`,summary:`Trigger-based verifier that watches for admin approval in Sheets and dispatches confirmation emails to verified teams.`,content:`function sendR1ConfirmationEmail(e) {
    const SHEET_TO_WATCH = "Sheet1";
    const TEAM_NAME_COLUMN = 2;
    const EMAIL_COLUMN = 7;
    const COLUMN_TO_WATCH = 17;
    const STATUS_COLUMN = 18;
    const VALUE_TO_WATCH = "Verify";
    const TEMPLATE_FILE = "R1SubmissionConfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    const range = e.range;
    const sheet = range.getSheet();
    const editedRow = range.getRow();
    if (
        sheet.getName() !== SHEET_TO_WATCH ||
        range.getColumn() !== COLUMN_TO_WATCH ||
        e.value !== VALUE_TO_WATCH ||
        editedRow <= 1
    ) {
        return;
    }
    try {
        const dataRow = sheet.getRange(editedRow, 1, 1, sheet.getLastColumn()).getValues()[0];
        const teamName = dataRow[TEAM_NAME_COLUMN - 1];
        const leaderEmail = dataRow[EMAIL_COLUMN - 1];
        if (!leaderEmail) {
            Logger.log("No leader email found for row " + editedRow + ". Email not sent.");
            sheet.getRange(editedRow, STATUS_COLUMN).setValue("Error: No leader email.");
            return;
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        sheet.getRange(editedRow, COLUMN_TO_WATCH).setValue("✅ Verified!");
        sheet.getRange(editedRow, STATUS_COLUMN).setValue("Sent!");
        Logger.log("R1 confirmation sent to " + leaderEmail + " (row " + editedRow + ")");
    } catch (error) {
        Logger.log("Error in R1 confirmation script for row " + editedRow + ": " + error.toString());
        sheet.getRange(editedRow, STATUS_COLUMN).setValue("Error: " + error.message);
    }
}`},{id:`casebook-mail`,shortName:`CasebookMail.html`,language:`html`,category:`Round 1`,summary:`Branded HTML email template sent to all registered teams with casebook download link and submission deadline.`,content:`<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Round 1 Submission Confirmed | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="/unravel_hexa/logos/hero_logo.png"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            YOU'RE IN. LET'S GO!</h2>
        <p
            style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
            Round 1 Casebook Released</p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
            Dear team <strong>{{team_name}}</strong>,
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Welcome to <strong>Xeron IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered
            by
            <strong>RAMPS BD</strong>. It is the biggest case competition designed exclusively for the north-bengal
            region’s 1st and 2nd-year students, organized by <strong>Rajshahi University Business Club</strong>.
            <br><br>
            We're pleased to inform you that your registration has been confirmed. You're on the list and the real
            challenge
            begins now.
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Here is your Round 1 casebook. Open it, analyze it and prepare your solution. Please follow the instructions
            in
            the casebook carefully. Any violation of the rules may lead to disqualification.
        </p>
        <div style="text-align: center; margin: 28px 0;">
            <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
                target="_blank"
                style="display: inline-block; margin-top: 1px; width: 50%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                Round 1 Casebook</a>
        </div>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please submit your solution by <strong style="color: #d72027;">May 20, 2026 at 11:59 AM (Noon)</strong>.
            Keep in mind that winners don't wait for the last second, they show up ready.
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Time to lock in and give it your best shot. We'll be watching. Questions? We're one message away.
        </p>
        <p
            style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                Let's Unravel,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="/unravel_hexa/logos/facebook.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="/unravel_hexa/logos/internet.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="/unravel_hexa/logos/email.png" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="/unravel_hexa/logos/phone.png" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`},{id:`whatsapp-bot-mailer`,shortName:`WhatsAppBotMailer.js`,language:`javascript`,category:`Round 1`,summary:`Webhook endpoint that processes WhatsApp bot registration data and triggers automated email confirmations.`,content:`function doPost(e) {
    const TEMPLATE_FILE = "Botregconfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    try {
        const data = JSON.parse(e.postData.contents);
        const answers = data.user_input_data || [];
        const findAnswer = (keyword) => {
            const item = answers.find(a =>
                a.question && a.question.toLowerCase().includes(keyword.toLowerCase())
            );
            return item ? item.answer : null;
        };
        const teamName = findAnswer("team");
        const leaderEmail = findAnswer("email");
        const phone = findAnswer("phone") || data.chat_id;
        const firstName = data.first_name || "";
        if (!leaderEmail) {
            Logger.log("No email found in payload");
            return ContentService
                .createTextOutput(JSON.stringify({ status: "error", message: "No email found" }))
                .setMimeType(ContentService.MimeType.JSON);
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        Logger.log("✅ R1 confirmation sent to " + leaderEmail + " (team: " + teamName + ")");
        return ContentService
            .createTextOutput(JSON.stringify({
                status: "success",
                email: leaderEmail,
                team: teamName
            }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        Logger.log("❌ Error: " + error.toString());
        return ContentService
            .createTextOutput(JSON.stringify({ status: "error", message: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}`},{id:`wa-bot-mail-sender`,shortName:`WABotMailSender.js`,language:`javascript`,category:`Round 1`,summary:`Companion mailer for WhatsApp bot that parses chatbot conversation payloads, extracts team details, and sends personalized emails.`,content:`function doPost(e) {
  const TEMPLATE_FILE = "Botregconfirmation";
  const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
  const FROM_NAME     = "Unravel Hexa | Round 1";
  try {
    const data = JSON.parse(e.postData.contents);
    const answers = data.user_input_data || [];
    const findAnswer = (keyword) => {
      const item = answers.find(a => 
        a.question && a.question.toLowerCase().includes(keyword.toLowerCase())
      );
      return item ? item.answer : null;
    };
    const teamName    = findAnswer("team");
    const leaderEmail = findAnswer("email");
    const phone       = findAnswer("phone") || data.chat_id;
    const firstName   = data.first_name || "";
    if (!leaderEmail) {
      Logger.log("No email found in payload");
      return ContentService
        .createTextOutput(JSON.stringify({status: "error", message: "No email found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const htmlTemplate  = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
    const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
    GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
      htmlBody: finalHtmlBody,
      name: FROM_NAME
    });
    Logger.log("✅ R1 confirmation sent to " + leaderEmail + " (team: " + teamName + ")");
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        email: leaderEmail,
        team: teamName
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("❌ Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`},{id:`r1-submission-html`,shortName:`R1Submission.html`,language:`html`,category:`Round 1`,summary:`Full submission portal with drag-and-drop file uploads and base64 encoding for Google Drive storage.`,content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <title>Round 1 Submission | Unravel 6X </title>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
    rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #0a0a0c;
      min-height: 100vh;
      color: white;
      overflow-x: hidden;
    }
    .header {
      text-align: center;
      padding: 40px 20px;
    }
    .logo-container {
      margin-bottom: 30px;
    }
    .logo {
      max-width: 500px;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .subtitle {
      font-size: 1.1rem;
      color: #b8c6db;
      font-weight: 300;
    }
    .form-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 30px 50px;
    }
    form {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding: 40px 50px;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    form:hover {
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      border-color: rgba(245, 130, 32, 0.2);
    }
    h2 {
      text-align: center;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: #f58220;
      margin: 30px 0 15px;
      border-bottom: 2px solid #d72027;
      padding-bottom: 6px;
      letter-spacing: 2px;
      user-select: none;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 6px;
      margin-top: 18px;
      color: #b8c6db;
      user-select: none;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea,
    select {
      width: 100%;
      padding: 12px 15px;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
      transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      font-weight: 500;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
      outline-offset: 2px;
    }
    textarea {
      font-family: 'Montserrat', sans-serif;
      resize: vertical;
      min-height: 110px;
      line-height: 1.5;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
      padding-right: 40px;
      min-height: 48px;
      line-height: 1.5;
      cursor: pointer;
    }
    select option {
      background-color: #1a1a2e;
      color: white;
      padding: 8px 12px;
      font-weight: 500;
      border: none;
      background: #1a1a2e;
    }
    select option:checked {
      background-color: #007bff;
      color: white;
    }
    select option:hover {
      background-color: #007bff;
      color: white;
    }
    select option:disabled {
      background-color: #2a2a3e;
      color: #666;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: #f58220;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
    }
    select:focus {
      background-color: rgba(255, 255, 255, 0.1);
    }
    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    input[type="tel"]::placeholder,
    textarea::placeholder {
      color: #8892b0;
    }
    input:invalid,
    select:invalid {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input.error,
    select.error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
    }
    .checkbox {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      user-select: none;
      color: #b8c6db;
      line-height: 1.5;
    }
    .checkbox input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #f58220;
      border-radius: 4px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      flex-shrink: 0;
    }
    .checkbox label {
      display: inline;
      margin: 0;
    }
    .checkbox input[type="checkbox"]:focus {
      border-color: #f58220;
      outline: none;
      box-shadow: 0 0 15px rgba(245, 130, 32, 0.4);
    }
    button {
      margin-top: 40px;
      width: 100%;
      padding: 18px;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      color: white;
      background: linear-gradient(135deg, #f58220, #d72027);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    button:hover:not(.loading) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    button:active {
      transform: translateY(0);
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    button.loading {
      pointer-events: none;
      color: transparent;
    }
    button.loading::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
    }
    .success {
      display: none;
    }
    .error-message {
      color: #e74c3c;
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
      user-select: none;
      display: none;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: 12px;
      border-radius: 8px;
    }
    .upload-progress {
      display: none;
      margin-top: 20px;
      padding: 18px 20px;
      background: rgba(245, 130, 32, 0.06);
      border: 1px solid rgba(245, 130, 32, 0.25);
      border-radius: 12px;
      user-select: none;
    }
    .upload-progress.show {
      display: block;
      animation: progressFadeIn 0.3s ease-out;
    }
    @keyframes progressFadeIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .upload-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    .upload-progress-status {
      color: #f58220;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .upload-progress-status .spinner-mini {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(245, 130, 32, 0.3);
      border-top-color: #f58220;
      border-radius: 50%;
      animation: spinner 0.7s linear infinite;
      flex-shrink: 0;
    }
    .upload-progress.done .upload-progress-status {
      color: #2ecc71;
    }
    .upload-progress.done .spinner-mini {
      display: none;
    }
    .upload-progress.error-state {
      background: rgba(231, 76, 60, 0.08);
      border-color: rgba(231, 76, 60, 0.35);
    }
    .upload-progress.error-state .upload-progress-status {
      color: #e74c3c;
    }
    .upload-progress.error-state .spinner-mini {
      display: none;
    }
    .upload-progress-percent {
      color: #b8c6db;
      font-weight: 700;
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .upload-progress-bar {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .upload-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 999px;
      transition: width 0.25s ease-out;
      position: relative;
      overflow: hidden;
    }
    .upload-progress-fill::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.35),
          transparent);
      animation: shimmer 1.4s linear infinite;
    }
    .upload-progress.done .upload-progress-fill {
      background: linear-gradient(135deg, #27ae60, #2ecc71);
    }
    .upload-progress.done .upload-progress-fill::after,
    .upload-progress.error-state .upload-progress-fill::after {
      display: none;
    }
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .upload-progress-detail {
      margin-top: 8px;
      color: #8892b0;
      font-size: 0.82rem;
      font-variant-numeric: tabular-nums;
    }
    .file-upload-area {
      position: relative;
      width: 100%;
      border: 2px dashed rgba(245, 130, 32, 0.35);
      border-radius: 10px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.03);
      margin-top: 4px;
    }
    .file-upload-area:hover,
    .file-upload-area.drag-over {
      border-color: #f58220;
      background: rgba(245, 130, 32, 0.06);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
    }
    .file-upload-area input[type="file"] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    .file-upload-icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    .file-upload-text {
      color: #b8c6db;
      font-weight: 500;
      font-size: 0.95rem;
      word-break: break-all;
    }
    .file-upload-hint {
      color: #566573;
      font-size: 0.8rem;
      margin-top: 6px;
    }
    .file-upload-area.has-file {
      border-style: solid;
      border-color: #27ae60;
      background: rgba(39, 174, 96, 0.06);
    }
    .file-upload-area.has-file .file-upload-text {
      color: #2ecc71;
    }
    .file-upload-area.file-error {
      border-style: solid;
      border-color: #e74c3c;
      background: rgba(231, 76, 60, 0.06);
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
    }
    .team-leader-info {
      margin-bottom: 25px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }
    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.7) translateY(50px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .modal-overlay.show .success-modal {
      transform: scale(1) translateY(0);
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.8rem;
      font-weight: 400;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.2rem;
      color: #b8c6db;
      line-height: 1.6;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .facebook-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
      margin-bottom: 25px;
    }
    .facebook-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.45);
      color: white;
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .form-container {
        padding: 0 15px 30px;
      }
      form {
        padding: 30px 25px;
      }
      h2 {
        font-size: 2.2rem;
      }
      .logo {
        max-width: 300px;
      }
      select {
        min-height: 52px;
        font-size: 16px;
        background-size: 18px;
        background-position: right 15px center;
        padding-right: 45px;
      }
      select option {
        padding: 12px 15px;
        font-size: 16px;
      }
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.1rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .header {
        padding: 30px 15px;
      }
      .logo {
        max-width: 200px;
      }
      h2 {
        font-size: 1.8rem;
      }
      .section-title {
        font-size: 1.2rem;
      }
      select {
        min-height: 54px;
        padding: 15px 50px 15px 15px;
      }
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 1rem;
      }
    }
    @supports not (appearance: none) {
      select {
        background-image: none;
        padding-right: 15px;
      }
    }
    @media (prefers-contrast: high) {
      select option {
        background-color: black;
        color: white;
      }
      select option:checked {
        background-color: white;
        color: black;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo" class="logo">
    </div>
    <p class="subtitle">Submit your Round 1 solution
      below.</p>
  </div>
  <div class=”form-container”>
    <form id="registrationForm" novalidate>
      <h2>Round 1 Submission</h2>
      <div class="team-leader-info">
        <label for="teamName">Team Name</label>
        <input id="teamName" name="Team Name" type="text" required autocomplete="off" placeholder="Your team name" />
        <label for="teamLeaderName">Team Leader's Name</label>
        <input id="teamLeaderName" name="Team Leader's Name" type="text" required autocomplete="off"
          placeholder="Full name of the team leader" />
        <label for="teamLeaderEmail">Team Leader's Email Address</label>
        <input id="teamLeaderEmail" name="Team Leader's Email Address" type="email" required autocomplete="off"
          placeholder="Email that you used to register" />
        <label for="teamLeaderPhone">Team Leader's WhatsApp Number</label>
        <input id="teamLeaderPhone" name="Team Leader's Phone Number" type="tel" required autocomplete="off"
          placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
        <label for="pptxFile">Presentation File (PPTX / PPT)</label>
        <div class="file-upload-area" id="pptxArea" data-placeholder="Click or drag to upload PPTX / PPT file">
          <input id="pptxFile" name="pptxFile" type="file" accept=".pptx,.ppt" required />
          <div class="file-upload-icon"><img src="/unravel_hexa/logos/pptx.png"
              alt="PPTX icon" style="width:48px;height:48px;"></div>
          <div class="file-upload-text" id="pptxText">Click or drag to upload PPTX / PPT file</div>
          <div class="file-upload-hint">Accepted: .pptx, .ppt &bull; Max 30 MB</div>
        </div>
        <label for="pdfFile">Solution PDF</label>
        <div class="file-upload-area" id="pdfArea" data-placeholder="Click or drag to upload PDF file">
          <input id="pdfFile" name="pdfFile" type="file" accept=".pdf" required />
          <div class="file-upload-icon"><img src="/unravel_hexa/logos/pdf.png"
              alt="PDF icon" style="width:48px;height:48px;"></div>
          <div class="file-upload-text" id="pdfText">Click or drag to upload PDF file</div>
          <div class="file-upload-hint">Accepted: .pdf &bull; Max 30 MB</div>
        </div>
        <label for="feedback">Feedback / Comments <span
            style="color:#8892b0; font-weight:400;">(optional)</span></label>
        <textarea id="feedback" name="Feedback" rows="4" maxlength="1000"
          placeholder="Anything you'd like the organizers to know? Suggestions, issues faced, shoutouts - drop them here."></textarea>
        <br>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="confirmation" name="Confirmation" value="Confirmed" required />
        <label for="confirmation">I confirm that my submission is complete and ready to be evaluated.</label>
      </div>
      <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
      <div class="upload-progress" id="uploadProgress" aria-live="polite">
        <div class="upload-progress-header">
          <div class="upload-progress-status" id="uploadStatus">
            <span class="spinner-mini"></span>
            <span id="uploadStatusText">Preparing files...</span>
          </div>
          <div class="upload-progress-percent" id="uploadPercent">0%</div>
        </div>
        <div class="upload-progress-bar">
          <div class="upload-progress-fill" id="uploadFill"></div>
        </div>
        <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload completes.
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal">
      <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Submission Locked In!</h1>
      <div class="success-message">
        Your solution is in! Now sit tight and wait for the results.<br><br>
        Good luck! 🔥🏆
      </div>
      <a href="https://www.facebook.com/hello.rubc" target="_blank" rel="noopener noreferrer" class="facebook-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Follow for Updates
      </a>
      <div style="color: #8892b0; font-size: 0.9rem; margin-top: 15px;">
        The grind never stops! 🚀
      </div>
    </div>
  </div>
  <script>
    const form = document.getElementById("registrationForm");
    const submitBtn = form.querySelector("button[type='submit']");
    const successModal = document.getElementById("successModal");
    const errorMsg = document.getElementById("errorMsg");
    const fields = form.querySelectorAll("input:not([type='file']), select");
    const uploadProgress = document.getElementById("uploadProgress");
    const uploadStatusText = document.getElementById("uploadStatusText");
    const uploadPercent = document.getElementById("uploadPercent");
    const uploadFill = document.getElementById("uploadFill");
    const uploadDetail = document.getElementById("uploadDetail");
    function showProgress() {
      uploadProgress.classList.remove('done', 'error-state');
      uploadProgress.classList.add('show');
    }
    function hideProgress() {
      uploadProgress.classList.remove('show', 'done', 'error-state');
    }
    function setProgress(percent, statusText, detail) {
      const p = Math.max(0, Math.min(100, Math.round(percent)));
      uploadFill.style.width = p + '%';
      uploadPercent.textContent = p + '%';
      if (statusText !== undefined) uploadStatusText.textContent = statusText;
      if (detail !== undefined) uploadDetail.textContent = detail;
    }
    function markProgressDone(text) {
      uploadProgress.classList.add('done');
      uploadFill.style.width = '100%';
      uploadPercent.textContent = '100%';
      uploadStatusText.textContent = text || 'Submission complete!';
      uploadDetail.textContent = 'You can close this tab anytime.';
    }
    function markProgressError(text) {
      uploadProgress.classList.add('error-state');
      uploadStatusText.textContent = text || 'Upload failed';
      uploadDetail.textContent = 'See message above for details.';
    }
    function formatMB(bytes) {
      return (bytes / 1024 / 1024).toFixed(1) + ' MB';
    }
    const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxeX0XRvBBkteeYGusmKAalxzT3cQNe4x3HZErCcwP7JrGmhDyivZ86VP-XvOXiLtnN/exec";
    function logError(message, data = null) {
      try {
        const existingLogs = JSON.parse(localStorage.getItem('errorLogs') || '[]');
        existingLogs.push({ timestamp: new Date().toISOString(), message, data, userAgent: navigator.userAgent, url: window.location.href });
        if (existingLogs.length > 10) existingLogs.shift();
        localStorage.setItem('errorLogs', JSON.stringify(existingLogs));
      } catch (e) { }
    }
    function validateField(field) {
      if (field.id === 'teamLeaderPhone') {
        const v = field.value.trim();
        if (v.length === 11 && /^\\d{11}$/.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else {
        if (!field.checkValidity()) {
          field.classList.add("error");
          return false;
        } else {
          field.classList.remove("error");
          return true;
        }
      }
    }
    function validateFileArea(inputId, areaId, allowedExts) {
      const input = document.getElementById(inputId);
      const area = document.getElementById(areaId);
      if (!input.files || input.files.length === 0) {
        area.classList.add('file-error');
        return false;
      }
      const name = input.files[0].name.toLowerCase();
      if (!allowedExts.some(ext => name.endsWith(ext))) {
        area.classList.add('file-error');
        return false;
      }
      area.classList.remove('file-error');
      return true;
    }
    function sanitizeFileName(name) {
      return name.replace(/[^a-zA-Z0-9_\\- ]/g, '').replace(/\\s+/g, '_').slice(0, 50) || 'team';
    }
    function showSuccessModal() {
      successModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) { }
    }
    function closeSuccessModal() {
      successModal.classList.remove('show');
      document.body.style.overflow = '';
    }
    window.closeSuccessModal = closeSuccessModal;
    successModal.addEventListener('click', function (e) {
      if (e.target === successModal) closeSuccessModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
    });
    function setupFileInput(inputId, areaId, textId) {
      const input = document.getElementById(inputId);
      const area = document.getElementById(areaId);
      const text = document.getElementById(textId);
      input.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
          const file = this.files[0];
          const sizeMB = (file.size / 1024 / 1024).toFixed(1);
          text.textContent = file.name + ' (' + sizeMB + ' MB)';
          area.classList.add('has-file');
          area.classList.remove('file-error');
        } else {
          text.textContent = area.dataset.placeholder;
          area.classList.remove('has-file');
        }
      });
      area.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('drag-over');
      });
      area.addEventListener('dragleave', function () {
        this.classList.remove('drag-over');
      });
      area.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          input.files = e.dataTransfer.files;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
      clearOldErrorLogs();
      setupFileInput('pptxFile', 'pptxArea', 'pptxText');
      setupFileInput('pdfFile', 'pdfArea', 'pdfText');
      const phoneInput = document.getElementById('teamLeaderPhone');
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\\D/g, '');
        if (this.value.length > 11) this.value = this.value.slice(0, 11);
        validateField(this);
      });
      phoneInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
        validateField(this);
      });
    });
    function clearOldErrorLogs() {
      try {
        const logs = JSON.parse(localStorage.getItem('errorLogs') || '[]');
        const oneDayAgo = Date.now() - 86400000;
        localStorage.setItem('errorLogs', JSON.stringify(logs.filter(l => new Date(l.timestamp).getTime() > oneDayAgo)));
      } catch (e) { }
    }
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (submitBtn.classList.contains("loading")) return;
      hideProgress();
      let invalidFound = false;
      fields.forEach(field => {
        if (!validateField(field)) {
          if (!invalidFound) { field.focus(); invalidFound = true; }
        }
      });
      const pptxValid = validateFileArea('pptxFile', 'pptxArea', ['.pptx', '.ppt']);
      const pdfValid = validateFileArea('pdfFile', 'pdfArea', ['.pdf']);
      if (!pptxValid || !pdfValid) invalidFound = true;
      if (invalidFound) {
        errorMsg.textContent = "Please fill all required fields and attach both files correctly.";
        errorMsg.style.display = "block";
        return;
      }
      errorMsg.style.display = "none";
      const now = Date.now();
      if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
        errorMsg.textContent = "Please wait a few seconds before submitting again.";
        errorMsg.style.display = "block";
        return;
      }
      const pptxFile = document.getElementById('pptxFile').files[0];
      const pdfFile = document.getElementById('pdfFile').files[0];
      const MAX_SIZE = 30 * 1024 * 1024;
      if (pptxFile.size > MAX_SIZE || pdfFile.size > MAX_SIZE) {
        errorMsg.textContent = "Each file must be 30 MB or smaller.";
        errorMsg.style.display = "block";
        return;
      }
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Uploading...";
      const totalBytes = pptxFile.size + pdfFile.size;
      showProgress();
      setProgress(0,
        'Reading files...',
        'Preparing ' + formatMB(totalBytes) + ' for upload. Keep this tab open.');
      let serverPhaseTimer = null;
      try {
        const teamName = document.getElementById('teamName').value.trim();
        const safeName = sanitizeFileName(teamName);
        const pptxExt = pptxFile.name.toLowerCase().endsWith('.ppt') ? '.ppt' : '.pptx';
        let pptxRead = 0, pdfRead = 0;
        const updateReadProgress = () => {
          const readBytes = Math.round(pptxFile.size * pptxRead + pdfFile.size * pdfRead);
          const pct = totalBytes > 0 ? (readBytes / totalBytes) * 15 : 0;
          setProgress(pct, 'Reading files...',
            'Read ' + formatMB(readBytes) + ' of ' + formatMB(totalBytes));
        };
        const [pptxBase64, pdfBase64] = await Promise.all([
          readFileAsBase64WithProgress(pptxFile, p => { pptxRead = p; updateReadProgress(); }),
          readFileAsBase64WithProgress(pdfFile, p => { pdfRead = p; updateReadProgress(); })
        ]);
        const payload = {
          teamName: teamName,
          leaderName: document.getElementById('teamLeaderName').value.trim(),
          leaderEmail: document.getElementById('teamLeaderEmail').value.trim(),
          leaderPhone: document.getElementById('teamLeaderPhone').value.trim(),
          feedback: document.getElementById('feedback').value.trim(),
          pptxBase64: pptxBase64,
          pptxName: safeName + '_R1_Unravel Hexa' + pptxExt,
          pptxMime: pptxFile.type || 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          pdfBase64: pdfBase64,
          pdfName: safeName + '_R1_Unravel Hexa.pdf',
          pdfMime: 'application/pdf'
        };
        const body = JSON.stringify(payload);
        const bodyBytes = new Blob([body]).size;
        setProgress(15, 'Uploading to server...',
          'Sending ' + formatMB(bodyBytes) + ' to Google Drive. Larger files take longer.');
        let creep = 15;
        serverPhaseTimer = setInterval(() => {
          creep += (90 - creep) * 0.04;
          setProgress(creep, 'Uploading to server...',
            'Sending ' + formatMB(bodyBytes) + ' to Google Drive. Larger files take longer.');
        }, 400);
        const response = await fetch(WEBAPP_URL, {
          method: 'POST',
          body: body
        });
        clearInterval(serverPhaseTimer);
        serverPhaseTimer = null;
        if (!response.ok) {
          const errText = await response.text().catch(() => '');
          console.error('HTTP ' + response.status, errText.slice(0, 500));
          throw new Error('HTTP ' + response.status + ' from Apps Script.');
        }
        setProgress(95, 'Finalizing on Drive...',
          'Saving files and recording your submission.');
        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseErr) {
          console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
          throw new Error('Server returned non-JSON. Likely the web app is not deployed with "Anyone" access, or the URL is stale.');
        }
        if (data.success) {
          localStorage.setItem('lastSubmission', Date.now().toString());
          markProgressDone('Submission complete!');
          setTimeout(() => {
            form.reset();
            document.getElementById('pptxText').textContent = 'Click or drag to upload PPTX / PPT file';
            document.getElementById('pdfText').textContent = 'Click or drag to upload PDF file';
            document.getElementById('pptxArea').classList.remove('has-file', 'file-error');
            document.getElementById('pdfArea').classList.remove('has-file', 'file-error');
            showSuccessModal();
            fields.forEach(f => f.classList.remove("error"));
            hideProgress();
          }, 700);
        } else {
          logError('Backend error', data.error);
          errorMsg.textContent = data.error || "Submission failed. Please try again.";
          errorMsg.style.display = "block";
          markProgressError('Server rejected submission');
        }
      } catch (error) {
        console.error('Submission error:', error);
        logError('Submission error', error.message);
        errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error') + ' — open browser console (F12) for details.';
        errorMsg.style.display = "block";
        markProgressError('Upload failed');
      } finally {
        if (serverPhaseTimer) clearInterval(serverPhaseTimer);
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Submit";
      }
    });
    function readFileAsBase64WithProgress(file, onProgress) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onprogress = (e) => {
          if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
        };
        reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    fields.forEach(field => {
      field.addEventListener("input", () => {
        validateField(field);
        if (errorMsg.style.display === "block") errorMsg.style.display = "none";
      });
      field.addEventListener("change", () => validateField(field));
    });
  <\/script>
</body>
</html>`},{id:`r1-submission-js`,shortName:`R1Submission.js`,language:`javascript`,category:`Round 1`,summary:`Server-side Apps Script that validates, sanitizes, and stores submitted PPTX/PDF files to Google Drive with automatic sheet logging.`,content:`
const SHEET_ID       = 'HIDDEN';
const PPTX_FOLDER_ID = 'HIDDEN';
const PDF_FOLDER_ID  = 'HIDDEN';
const MAX_FILE_BYTES = 30 * 1024 * 1024; 
const ALLOWED_PPTX_MIMES = [
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.ms-powerpoint',
  'application/octet-stream'
];
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const teamName    = sanitizeText(data.teamName, 100);
    const leaderName  = sanitizeText(data.leaderName, 100);
    const leaderEmail = sanitizeText(data.leaderEmail, 150).toLowerCase();
    const leaderPhone = sanitizeText(data.leaderPhone, 20);
    const feedback    = sanitizeText(data.feedback, 1000);
    if (!teamName || !leaderName || !leaderEmail || !leaderPhone) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(leaderEmail)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^\\d{11}$/.test(leaderPhone)) {
      return jsonResponse({ success: false, error: 'Invalid phone number.' });
    }
    if (!data.pptxBase64 || !data.pdfBase64) {
      return jsonResponse({ success: false, error: 'Missing file data.' });
    }
    const pptxName = sanitizeFileName(data.pptxName) || (sanitizeText(teamName, 50) + '_R1.pptx');
    const pdfName  = sanitizeFileName(data.pdfName)  || (sanitizeText(teamName, 50) + '_R1.pdf');
    if (!/\\.(pptx|ppt)$/i.test(pptxName)) {
      return jsonResponse({ success: false, error: 'Presentation must be .pptx or .ppt' });
    }
    if (!/\\.pdf$/i.test(pdfName)) {
      return jsonResponse({ success: false, error: 'Solution file must be .pdf' });
    }
    const pptxBytes = Utilities.base64Decode(data.pptxBase64);
    const pdfBytes  = Utilities.base64Decode(data.pdfBase64);
    if (pptxBytes.length > MAX_FILE_BYTES || pdfBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Each file must be 30 MB or smaller.' });
    }
    const pptxMime = data.pptxMime && ALLOWED_PPTX_MIMES.indexOf(data.pptxMime) !== -1
      ? data.pptxMime
      : 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    const pptxBlob = Utilities.newBlob(pptxBytes, pptxMime, pptxName);
    const pptxFile = DriveApp.getFolderById(PPTX_FOLDER_ID).createFile(pptxBlob);
    pptxFile.setDescription('Round 1 PPTX — ' + teamName);
    pptxFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const pptxLink = 'https://drive.google.com/file/d/' + pptxFile.getId() + '/view?usp=sharing';
    const pdfBlob = Utilities.newBlob(pdfBytes, 'application/pdf', pdfName);
    const pdfFile = DriveApp.getFolderById(PDF_FOLDER_ID).createFile(pdfBlob);
    pdfFile.setDescription('Round 1 PDF — ' + teamName);
    pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const pdfLink = 'https://drive.google.com/file/d/' + pdfFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),    
      teamName,      
      leaderName,    
      leaderEmail,   
      leaderPhone,   
      pptxLink,      
      pdfLink,       
      feedback       
    ]);
    return jsonResponse({ success: true, pptxUrl: pptxLink, pdfUrl: pdfLink });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X R1 Submission' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[^a-zA-Z0-9_\\-. ]/g, '')
    .replace(/\\s+/g, '_')
    .slice(0, 120);
}
`},{id:`finalist-congrats`,shortName:`FinalistCongrats.html`,language:`html`,category:`Final Round`,summary:`Congratulatory email template sent to finalist teams with prize pool details and Grand Finale preparation instructions.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎉 You're a Finalist! | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      CONGRATULATIONS, FINALIST!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      You Made It to the Grand Finale</p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We are thrilled to announce that your team has been selected as one of the finalists of <strong>Xeron IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>!
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Out of all the participating teams, yours stood out with exceptional analysis and strategic thinking. This is a
      remarkable achievement, and you should be incredibly proud of your hard work and dedication.
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 24px 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 4px; font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #f58220;">
        You're Already In The</p>
      <p
        style="margin: 0; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        ৳25,000 Prize Pool!</p>
      <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">
        As a finalist, you are guaranteed to be part of it.</p>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      What Happens Next?</h3>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We are currently finalizing the details for the <strong>Grand Finale</strong>. Here's what you need to know:
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #334155;">
            <strong><span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 18px; height: 18px; background-color: #d72027; border-radius: 4px; text-align: center; line-height: 18px; font-size: 11px; color: #ffffff; font-family: Arial, sans-serif;">&#9650;</span> Grand Finale Date</strong> &mdash; will be announced very soon. Stay tuned for the official
            announcement.
          </p>
          <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #334155;">
            <strong><span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 18px; height: 18px; background-color: #f58220; border-radius: 4px; text-align: center; line-height: 18px; font-size: 11px; color: #ffffff; font-family: Arial, sans-serif;">&#9654;</span> Final Round Casebook</strong> &mdash; will be sent to you shortly before the event. Keep an eye on
            your inbox.
          </p>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Until then, stay prepared and keep the momentum going!
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 20px; background-color: #fdf2f2; border: 1px dashed #d72027; border-radius: 12px;">
      <p
        style="margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
        <span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 22px; height: 22px; background-color: #d72027; border-radius: 50%; text-align: center; line-height: 22px; font-size: 12px; color: #ffffff; font-family: Arial, sans-serif;">&#10033;</span>
        One Quick Request!</p>
      <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #334155;">
        Please send us a <strong>professional photo of your team</strong> by simply <strong style="color: #d72027;">replying
          to this email</strong>. We'll feature it in our event materials and social media coverage.
      </p>
    </div>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      Once again, congratulations on this incredible milestone. The best is yet to come!
    </p>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`},{id:`final-casebook`,shortName:`FinalCasebook.html`,language:`html`,category:`Final Round`,summary:`Final round casebook distribution email with submission guidelines, deadlines, and event venue details.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎯 Final Round Casebook | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      FINAL ROUND CASEBOOK</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      It's Time to Unravel the Final Challenge</p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      The ultimate challenge is finally here! We are incredibly excited to share the <strong>Final Round
        Casebook</strong> for <strong>Xeron IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      You’ve shown exceptional strategic brilliance to make it this far, and now
      it's time to bring your absolute best to the Grand Finale.
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 24px 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 16px; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        GET READY TO UNRAVEL THE CASE!</p>
      <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #334155;">
        The casebook contains all the details regarding <strong>submission</strong>, <strong>Grand Finale
          presentation instructions</strong>, and important information.</p>
      <a href="https://drive.google.com/file/d/1lKat-e_gyTR76X9hqcJObkaEOGgMwDZt/view?usp=drive_link" target="_blank"
        style="display: inline-block; background-color: #d72027; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(215, 32, 39, 0.25);">
        ACCESS THE CASEBOOK HERE
      </a>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Submission Details</h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Deadline:</strong> 12 June | 11:59 AM <strong
                style="color: #d72027; background-color: #fde8e8; padding: 2px 6px; border-radius: 4px; border: 1px solid #fca5a5;">(Noon)</strong>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Format:</strong> <code
                style="background-color: #f1f5f9; padding: 2px 4px; border-radius: 4px; color: #475569; font-family: monospace;">Team_Name_UNRAVELHEXA_FINALROUND</code>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Note:</strong> Only <strong>one submission</strong> per team will be accepted.
            </li>
            <li style="margin: 0;">
              <strong>Important:</strong> Please read the casebook carefully for more detailed instructions.
            </li>
          </ul>
        </td>
      </tr>
    </table>
    <div
      style="text-align: center; margin: 10px 0 18px;">
      <a href="https://forms.gle/dvXd8TVqS8oE3U9G8" target="_blank"
        style="display: inline-block; background-color: #f58220; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(245, 130, 32, 0.25);">
        SUBMIT YOUR SOLUTION HERE
      </a>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium
            </li>
            <li style="margin: 0;">
              <strong>Time:</strong> TBA
            </li>
          </ul>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Best of luck with your final preparations! We can't wait to see what you bring to the Grand Finale. Let's make it
      a day to remember!
    </p>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`},{id:`finalist-mailer`,shortName:`FinalistMailer.js`,language:`javascript`,category:`Final Round`,summary:`Spreadsheet-integrated bulk mailer with custom UI menu for selecting and sending finalist notifications to multiple teams.`,content:`
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Send Mail")
    .addItem("Send to Selected Rows", "sendToSelected")
    .addToUi();
}
function sendToSelected() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const selection = sheet.getActiveRange();
  const ui = SpreadsheetApp.getUi();
  if (!selection) {
    ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
    return;
  }
  const startRow = selection.getRow();
  const numRows = selection.getNumRows();
  const confirm = ui.alert(
    "Confirm Send",
    \`You're about to send emails to \${numRows} team(s) (rows \${startRow} to \${startRow + numRows - 1}).\\n\\nProceed?\`,
    ui.ButtonSet.YES_NO
  );
  if (confirm !== ui.Button.YES) return;
  const htmlTemplate = HtmlService.createHtmlOutputFromFile("Email").getContent();
  let sent = 0;
  let failed = 0;
  const errors = [];
  for (let i = 0; i < numRows; i++) {
    const row = startRow + i;
    const teamName = sheet.getRange(row, 1).getValue().toString().trim();
    const email = sheet.getRange(row, 2).getValue().toString().trim();
    if (!teamName || !email) {
      errors.push(\`Row \${row}: Missing team name or email — skipped.\`);
      failed++;
      continue;
    }
    const body = htmlTemplate.replace(/\\{\\{team_name\\}\\}/g, teamName);
    try {
      GmailApp.sendEmail(email, "🏆 Congratulations, Finalist! | Unravel Hexa", "", {
        htmlBody: body,
        name: "Unravel Hexa — RUBC",
      });
      sent++;
    } catch (e) {
      errors.push(\`Row \${row} (\${email}): \${e.message}\`);
      failed++;
    }
  }
  let summary = \`✅ Sent: \${sent}\\n❌ Failed: \${failed}\`;
  if (errors.length > 0) {
    summary += "\\n\\nErrors:\\n" + errors.join("\\n");
  }
  ui.alert("Send Complete", summary, ui.ButtonSet.OK);
}
`},{id:`final-round-invitation-mailer`,shortName:`InvitationMailer.js`,language:`javascript`,category:`Final Round`,summary:`Script to send invitation emails to various stakeholders for the final round.`,content:`function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Click Here to Send Email 🔥")
    .addItem("Send to Sponsors", "sendSponsorMail")
    .addItem("Send to Guests", "sendGuestMail")
    .addItem("Send to Campus Ambassadors", "sendAmbassadorMail")
    .addItem("Send to RU Clubs", "sendClubMail")
    .addItem("Send to Partner Clubs", "sendPartnerClubMail")
    .addSeparator()
    .addItem("Send to Apus", "sendApuMail")
    .addItem("Send to Vaiyas", "sendVaiyaMail")
    .addItem("Send to Advisors", "sendAdvisorMail")
    .addToUi();
}

const FROM_NAME = "Unravel Hexa | RUBC";
const NAME_COL = 1;
const EMAIL_COL = 2;
const SPONSOR_TYPE_COL = 3;

const SPONSOR_TEMPLATE_MAP = {
  title: "TitleSponsorMail",
  poweredby: "PoweredBySponsorMail",
  sabroad: "StudyAbroadPartnerMail",
};
const DEFAULT_SPONSOR_TEMPLATE = "SponsorMail";

const MAIL_CONFIGS = {
  sponsor: {
    label: "Sponsors",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{sponsor_name}}",
    fallbackName: "Partner",
    usesSponsorType: true,
  },
  guest: {
    label: "Guests",
    templateFile: "GuestMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{guest_name}}",
    fallbackName: "Guest",
  },
  ambassador: {
    label: "Campus Ambassadors",
    templateFile: "CampusAmbassadorMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{ambassador_name}}",
    fallbackName: "Ambassador",
  },
  club: {
    label: "RU Clubs",
    templateFile: "ClubMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{club_name}}",
    fallbackName: "Club",
  },
  partnerClub: {
    label: "Partner Clubs",
    templateFile: "PartnerClubMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{club_name}}",
    fallbackName: "Club",
  },
  apu: {
    label: "Apus",
    templateFile: "AlumniMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{alumni_name}}",
    fallbackName: "Alumnus",
  },
  vaiya: {
    label: "Vaiyas",
    templateFile: "AlumniMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{alumni_name}}",
    fallbackName: "Alumnus",
  },
  advisor: {
    label: "Advisors",
    templateFile: "AdvisorMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{advisor_name}}",
    fallbackName: "Advisor",
  },
};

function sendSponsorMail() {
  sendInvitationMail_("sponsor");
}

function sendGuestMail() {
  sendInvitationMail_("guest");
}

function sendAmbassadorMail() {
  sendInvitationMail_("ambassador");
}

function sendClubMail() {
  sendInvitationMail_("club");
}

function sendPartnerClubMail() {
  sendInvitationMail_("partnerClub");
}

function sendApuMail() {
  sendInvitationMail_("apu");
}

function sendVaiyaMail() {
  sendInvitationMail_("vaiya");
}

function sendAdvisorMail() {
  sendInvitationMail_("advisor");
}

function sendInvitationMail_(type) {
  const config = MAIL_CONFIGS[type];
  if (!config) {
    SpreadsheetApp.getUi().alert("⚠️ Error", "Unknown mail type: " + type, SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSheet();
  const selection = sheet.getActiveRange();

  if (!selection) {
    ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
    return;
  }

  const startRow = selection.getRow();
  const numRows = selection.getNumRows();
  const endRow = startRow + numRows - 1;

  if (startRow < 2) {
    ui.alert(
      "⚠️ Invalid Selection",
      "Please select data rows only (row 2 onwards). Don't include the header.",
      ui.ButtonSet.OK
    );
    return;
  }

  const lastCol = config.usesSponsorType ? SPONSOR_TYPE_COL : EMAIL_COL;
  const rows = sheet.getRange(startRow, NAME_COL, endRow, lastCol).getValues();

  let validCount = 0;
  for (let i = 0; i < rows.length; i++) {
    if (isValidEmail_(rows[i][EMAIL_COL - 1])) {
      validCount++;
    }
  }

  if (validCount === 0) {
    ui.alert("⚠️ No Emails", "No valid email addresses found in column B for the selected rows.", ui.ButtonSet.OK);
    return;
  }

  const sponsorNote = config.usesSponsorType
    ? "\\n\\nSponsor type is read from column C (Title / Powered By / Study Abroad)."
    : "";

  const confirm = ui.alert(
    "📧 Confirm Send",
    "Send mail to " + config.label + "?\\n\\n" +
      "This will email " + validCount + " recipient(s) (rows " + startRow + "–" + endRow + ")." +
      sponsorNote + "\\n\\nProceed?",
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) {
    ui.alert("Cancelled", "No emails were sent.", ui.ButtonSet.OK);
    return;
  }

  const templateCache = {};
  let defaultTemplate = null;

  if (!config.usesSponsorType) {
    try {
      defaultTemplate = loadTemplate_(config.templateFile, templateCache);
    } catch (err) {
      ui.alert(
        "⚠️ Template Missing",
        'Could not load HTML template "' + config.templateFile + '".\\n\\n' +
          "Add it in Apps Script (File → New → HTML file) and paste the matching .html content.",
        ui.ButtonSet.OK
      );
      return;
    }
  }

  let sentCount = 0;
  let failedCount = 0;
  const errors = [];
  for (let i = 0; i < rows.length; i++) {
    const rowNum = startRow + i;
    const email = String(rows[i][EMAIL_COL - 1] || "").trim();
    const name = String(rows[i][NAME_COL - 1] || "").trim() || config.fallbackName;

    if (!isValidEmail_(email)) continue;

    try {
      const templateFile = config.usesSponsorType
        ? resolveSponsorTemplate_(rows[i][SPONSOR_TYPE_COL - 1])
        : config.templateFile;
      const htmlTemplate = config.usesSponsorType
        ? loadTemplate_(templateFile, templateCache)
        : defaultTemplate;
      const finalHtml = fillPlaceholder_(htmlTemplate, config.placeholder, name);

      GmailApp.sendEmail(email, config.subject, "", {
        htmlBody: finalHtml,
        name: FROM_NAME,
      });

      sentCount++;
    } catch (err) {
      failedCount++;
      errors.push("Row " + rowNum + " (" + email + "): " + err.message);
      Logger.log("Failed row " + rowNum + ": " + err.toString());
    }
  }

  let summary = "Send mail to " + config.label + "\\n\\n✅ Sent: " + sentCount + "\\n❌ Failed: " + failedCount;
  if (errors.length > 0) {
    summary += "\\n\\nErrors:\\n" + errors.join("\\n");
  }

  ui.alert("📧 Done!", summary, ui.ButtonSet.OK);
  Logger.log(config.label + " invitation — Sent: " + sentCount + ", Failed: " + failedCount);
}

function resolveSponsorTemplate_(typeValue) {
  const normalized = String(typeValue || "")
    .trim()
    .toLowerCase()
    .replace(/[\\s_-]+/g, "");

  if (!normalized) {
    return DEFAULT_SPONSOR_TEMPLATE;
  }
  if (normalized.indexOf("title") !== -1) {
    return SPONSOR_TEMPLATE_MAP.title;
  }
  if (normalized.indexOf("powered") !== -1 || normalized === "poweredby") {
    return SPONSOR_TEMPLATE_MAP.poweredby;
  }
  if (
    normalized.indexOf("study") !== -1 ||
    normalized.indexOf("abroad") !== -1 ||
    normalized === "sabroad"
  ) {
    return SPONSOR_TEMPLATE_MAP.sabroad;
  }

  return DEFAULT_SPONSOR_TEMPLATE;
}

function loadTemplate_(templateFile, cache) {
  if (cache[templateFile]) {
    return cache[templateFile];
  }

  const content = HtmlService.createHtmlOutputFromFile(templateFile).getContent();
  cache[templateFile] = content;
  return content;
}

function isValidEmail_(value) {
  const email = String(value || "").trim();
  return email !== "" && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function fillPlaceholder_(html, placeholder, name) {
  return html.split(placeholder).join(escapeHtml_(name));
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}`},{id:`final-round-judge-mail`,shortName:`JudgeMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting judges to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Final Round | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Join Us as a Distinguished Judge for the Grand Finale</p>
 

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{judge_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for kindly agreeing to judge the Grand Finale of <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have you
      on the panel.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Having received your response through the form on the website, we are pleased to share the
      <strong>Final Round Casebook</strong> and <strong>Brandbook</strong> with you below for your reference.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please review both documents at your convenience ahead of the Grand Finale. We look forward to your valuable
      insights and contribution on the judging panel.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1lKat-e_gyTR76X9hqcJObkaEOGgMwDZt/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Casebook</a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1UoMekk4Xr76SXD76MsoOMK0fJPPf7CKe/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Brandbook</a>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for your valuable time and
      contribution.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-title-sponsor-mail`,shortName:`TitleSponsorMail.html`,language:`html`,category:`Final Round`,summary:`Email template for the title sponsor of the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Title Sponsor at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Title Sponsor</strong> of
      <strong style="color: #d72027;">Unravel Hexa</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      As our Title Sponsor, you have played a pivotal role in bringing this competition to life. Now, we would be
      honored to welcome you to the Grand Finale, the culminating celebration of months of strategic brilliance,
      dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage. We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-powered-by-sponsor-mail`,shortName:`PoweredBySponsorMail.html`,language:`html`,category:`Final Round`,summary:`Email template for the powered-by sponsor of the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Powered By Sponsor at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Powered by</strong> sponsor of
      <strong style="color: #d72027;">Unravel Hexa</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      As our Powered by sponsor, you have been a vital force behind the success of this competition. Now, we would be
      honored to welcome you to the Grand Finale, the culminating celebration of months of strategic brilliance,
      dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage.
      We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>`},{id:`final-round-study-abroad-partner-mail`,shortName:`StudyAbroadPartnerMail.html`,language:`html`,category:`Final Round`,summary:`Email template for the study abroad partner of the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Study Abroad Partner at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Study Abroad Partner</strong> of <strong>Xerone IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Now, we would be honored to welcome you to the Grand Finale,
      the culminating celebration of months of strategic brilliance, dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage. We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-guest-mail`,shortName:`GuestMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting guests to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      An Exclusive Invitation for Our Distinguished Guests</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{guest_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      It is with great honor that we extend this special invitation to you for the Grand Finale of
      <strong>Xerone IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by
      <strong>RAMPS BD</strong>, organized by <strong>Rajshahi University Business Club</strong>. Your presence
      would be a privilege for us and a source of inspiration for every participant on stage.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be delighted to welcome you as we witness the culmination of months of strategic brilliance,
      dedication, and competition. Below is a brief overview of what Unravel Hexa stands for.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      About Unravel Hexa</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <p style="margin: 0 0 12px; color: #334155; font-size: 16px; line-height: 1.6;">
            <strong>Unravel</strong> is the flagship business case competition of <strong>Rajshahi University
              Business Club</strong>. It is now in its <strong>sixth edition</strong>, bringing together the brightest 1st
            and 2nd year undergraduates from universities across North Bengal to tackle real, market-inspired business
            challenges.
          </p>
          <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6;">
            At the Grand Finale, the <strong>top 8 teams</strong> will present their solutions before a distinguished
            panel, the culminating moment of a competition built to <em style="color: #d72027;">Unravel Your
              Potential</em> and showcase the next generation of business talent from the region.
          </p>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us for this
      milestone event.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-campus-ambassador-mail`,shortName:`CampusAmbassadorMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting campus ambassadors to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Honoring Our Campus Ambassadors at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{ambassador_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your dedication and hard work as a Campus Ambassador for <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized
      by <strong>Rajshahi University Business Club</strong>. Your efforts in spreading the word across campuses played
      a vital role in making this competition reach students far and wide.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be delighted to have you join us at the Grand Finale — the culminating celebration of everything you
      helped build. Your presence would mean a great deal to the entire team.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an essential part of
      Unravel Hexa — we truly appreciate everything you've done.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-club-mail`,shortName:`ClubMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting university clubs to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      An Invitation to Our Fellow Clubs at the University of Rajshahi</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{club_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      On behalf of <strong>Rajshahi University Business Club</strong>, we extend our heartfelt gratitude to you and
      your members for the camaraderie and support you have shown throughout <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. As fellow clubs
      under the same university, your encouragement means a great deal to us.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be honored to welcome you and your members to the Grand Finale — a celebration of student talent,
      teamwork, and the vibrant club culture we all share at the University of Rajshahi.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to sharing this special evening together on campus.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-partner-club-mail`,shortName:`PartnerClubMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting partner clubs to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      With heartfelt gratitude for your partnership
    </p>


    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{club_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      On behalf of <strong>Rajshahi University Business Club</strong>, we extend our heartfelt gratitude to you and
      your members for partnering with us throughout <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. Your
      collaboration in reaching students across campuses has been invaluable to the success of this competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be honored to welcome you and your members to the Grand Finale at the University of Rajshahi — the
      culminating celebration of student talent, teamwork, and the partnerships that brought Unravel Hexa to
      universities across the country.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to celebrating this milestone together.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-alumni-mail`,shortName:`AlumniMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting alumni to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Honoring Our Beloved Alumni at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{alumni_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for the legacy you have built and the footsteps you have left for us at
      <strong>Rajshahi University Business Club</strong>. As an alumnus, your contributions, dedication, and
      spirit continue to inspire every generation of members who follow in your path.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be truly delighted to welcome you to the Grand Finale of <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong> — the culminating
      celebration of everything our club stands for, and a moment we would be proud to share with those who helped
      shape who we are today.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to reuniting with you on this special evening.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With love and gratitude,<br />
        Rajshahi University Business Club
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-advisor-mail`,shortName:`AdvisorMail.html`,language:`html`,category:`Final Round`,summary:`Email template for inviting advisors to the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      A Humble Invitation to Our Respected Advisors</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Respected <strong>{{advisor_name}}</strong> sir,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We hope this message finds you in good health and high spirits. On behalf of
      <strong>Rajshahi University Business Club</strong>, we express our deepest gratitude for the guidance,
      encouragement, and invaluable support you have extended to us as our advisor. Your wisdom and mentorship have
      been a constant source of strength for our members and our endeavors.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be profoundly honored by your esteemed presence at the Grand Finale of <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, the
      culminating event of our regional business case competition. Your blessings and presence would greatly inspire
      our participants and the entire organizing team.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Should you require any further information, please do not hesitate to contact us. We humbly hope you will
      grace us with your presence on this occasion.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With profound respect and gratitude,<br />
        Rajshahi University Business Club
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`final-round-deadline-extension-mail`,shortName:`DeadlineExtensionMail.html`,language:`html`,category:`Final Round`,summary:`Email template announcing a deadline extension for the final round.`,content:`<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Deadline Extended — Final Round | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      DEADLINE EXTENDED!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Final Round Submission Update</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Greetings from <strong>Team Unravel Hexa 2026</strong>. We are pleased to inform you that the
      <strong>final presentation submission deadline has been extended by 12 hours</strong>. The new submission
      deadline is:
    </p>

    <div
      style="text-align: center; margin: 28px 0; padding: 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 4px; font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #f58220;">
        New Submission Deadline</p>
      <p
        style="margin: 0; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        12 June 2026 (Friday), 11:59 PM</p>
    </div>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      This extension is being provided to ensure that all teams have adequate time to refine and finalize their
      solutions before the Grand Finale.
    </p>

    <div style="text-align: center; margin: 10px 0 18px;">
      <a href="https://forms.gle/dvXd8TVqS8oE3U9G8" target="_blank"
        style="display: inline-block; background-color: #f58220; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(245, 130, 32, 0.25);">
        SUBMIT YOUR SOLUTION HERE
      </a>
    </div>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Important Timings</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Reporting Time:</strong> 1:30 PM
            </li>
            <li style="margin: 0;">
              <strong>Presentation Session Starts:</strong> 2:00 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      All teams are requested to arrive on time and complete the necessary formalities before the presentation session
      begins. Late arrivals may affect the presentation schedule.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Reminder</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please ensure that:
          </p>
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              Your final presentation is submitted before the extended deadline.
            </li>
            <li style="margin-bottom: 8px;">
              All team members are aware of the reporting and presentation schedule.
            </li>
            <li style="margin: 0;">
              You carry any necessary materials required for your presentation.
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We congratulate you once again on reaching the Grand Finale and look forward to witnessing your innovative
      solutions on the final stage.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best regards,<br />
        Team Unravel Hexa 2026
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`},{id:`judge-onboarding-form`,shortName:`JudgeOnboarding.html`,language:`html`,category:`Judges`,summary:`Judge registration and onboarding portal to collect details and availability.`,content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>Judge Onboarding | Unravel Hexa</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0a0a0c;
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
        }
        .logo-container {
            margin-bottom: 30px;
        }
        .logo {
            max-width: 550px;
            height: auto;
            filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
            transition: transform 0.3s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }
        .subtitle {
            font-size: 1.1rem;
            color: #b8c6db;
            font-weight: 300;
        }
        .form-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0 60px 50px;
        }
        form {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 50px;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        form:hover {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
            border-color: rgba(245, 130, 32, 0.2);
        }
        h2 {
            text-align: center;
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 6px;
            margin-top: 18px;
            color: #b8c6db;
            user-select: none;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        input[type="tel"]::placeholder {
            color: #8892b0;
        }
        input:invalid {
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        input.error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
        }
        button {
            margin-top: 40px;
            width: 100%;
            padding: 18px;
            font-size: 1.5rem;
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 2px;
            color: white;
            background: linear-gradient(135deg, #f58220, #d72027);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
            user-select: none;
            position: relative;
            overflow: hidden;
        }
        button:hover:not(.loading) {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
        }
        button:active {
            transform: translateY(0);
        }
        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
        button.loading {
            pointer-events: none;
            color: transparent;
        }
        button.loading::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 3px solid white;
            border-top-color: transparent;
            animation: spinner 0.6s linear infinite;
        }
        .error-message {
            color: #e74c3c;
            font-weight: 600;
            margin-top: 15px;
            text-align: center;
            user-select: none;
            display: none;
            background: rgba(231, 76, 60, 0.1);
            border: 1px solid rgba(231, 76, 60, 0.3);
            padding: 12px;
            border-radius: 8px;
        }
        .upload-progress {
            display: none;
            margin-top: 20px;
            padding: 18px 20px;
            background: rgba(245, 130, 32, 0.06);
            border: 1px solid rgba(245, 130, 32, 0.25);
            border-radius: 12px;
            user-select: none;
        }
        .upload-progress.show {
            display: block;
            animation: progressFadeIn 0.3s ease-out;
        }
        @keyframes progressFadeIn {
            from {
                opacity: 0;
                transform: translateY(-6px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .upload-progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            gap: 10px;
        }
        .upload-progress-status {
            color: #f58220;
            font-weight: 600;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }
        .upload-progress-status .spinner-mini {
            width: 14px;
            height: 14px;
            border: 2px solid rgba(245, 130, 32, 0.3);
            border-top-color: #f58220;
            border-radius: 50%;
            animation: spinner 0.7s linear infinite;
            flex-shrink: 0;
        }
        .upload-progress.done .upload-progress-status {
            color: #2ecc71;
        }
        .upload-progress.done .spinner-mini {
            display: none;
        }
        .upload-progress.error-state {
            background: rgba(231, 76, 60, 0.08);
            border-color: rgba(231, 76, 60, 0.35);
        }
        .upload-progress.error-state .upload-progress-status {
            color: #e74c3c;
        }
        .upload-progress.error-state .spinner-mini {
            display: none;
        }
        .upload-progress-percent {
            color: #b8c6db;
            font-weight: 700;
            font-size: 0.95rem;
            font-variant-numeric: tabular-nums;
        }
        .upload-progress-bar {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            overflow: hidden;
            position: relative;
        }
        .upload-progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 999px;
            transition: width 0.25s ease-out;
            position: relative;
            overflow: hidden;
        }
        .upload-progress-fill::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg,
                    transparent,
                    rgba(255, 255, 255, 0.35),
                    transparent);
            animation: shimmer 1.4s linear infinite;
        }
        .upload-progress.done .upload-progress-fill {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
        }
        .upload-progress.done .upload-progress-fill::after,
        .upload-progress.error-state .upload-progress-fill::after {
            display: none;
        }
        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
        .upload-progress-detail {
            margin-top: 8px;
            color: #8892b0;
            font-size: 0.82rem;
            font-variant-numeric: tabular-nums;
        }
        .file-upload-area {
            position: relative;
            width: 100%;
            border: 2px dashed rgba(245, 130, 32, 0.35);
            border-radius: 10px;
            padding: 24px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.03);
            margin-top: 4px;
        }
        .file-upload-area:hover,
        .file-upload-area.drag-over {
            border-color: #f58220;
            background: rgba(245, 130, 32, 0.06);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
        }
        .file-upload-area input[type="file"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .file-upload-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .file-upload-text {
            color: #b8c6db;
            font-weight: 500;
            font-size: 0.95rem;
            word-break: break-all;
        }
        .file-upload-hint {
            color: #566573;
            font-size: 0.8rem;
            margin-top: 6px;
        }
        .file-upload-area.has-file {
            border-style: solid;
            border-color: #27ae60;
            background: rgba(39, 174, 96, 0.06);
        }
        .file-upload-area.has-file .file-upload-text {
            color: #2ecc71;
        }
        .file-upload-area.file-error {
            border-style: solid;
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.06);
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
        }
        .form-info {
            margin-bottom: 25px;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .success-modal {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(245, 130, 32, 0.35);
            border-radius: 25px;
            padding: 50px 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
            transform: scale(0.7) translateY(50px);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-overlay.show .success-modal {
            transform: scale(1) translateY(0);
        }
        .success-modal::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
            animation: rotate 4s linear infinite;
            z-index: -1;
        }
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
            animation: bounce 0.8s ease-out 0.3s both;
        }
        @keyframes bounce {
            0% {
                transform: scale(0) rotate(180deg);
            }
            50% {
                transform: scale(1.2) rotate(360deg);
            }
            100% {
                transform: scale(1) rotate(360deg);
            }
        }
        .success-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.8rem;
            font-weight: 400;
            letter-spacing: 2px;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from {
                filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
            }
            to {
                filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
            }
        }
        .success-message {
            font-size: 1.15rem;
            color: #b8c6db;
            line-height: 1.7;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .success-message strong {
            color: #f58220;
            font-weight: 700;
        }
        .ok-button {
            display: inline-block;
            background: linear-gradient(135deg, #f58220, #d72027);
            color: white;
            border: none;
            padding: 14px 50px;
            border-radius: 50px;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.4rem;
            letter-spacing: 3px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
        }
        .ok-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
        }
        .close-modal {
            position: absolute;
            top: 20px;
            right: 25px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        }
        .close-modal:hover {
            background: rgba(245, 130, 32, 0.25);
            transform: rotate(90deg);
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #f58220;
            animation: confetti-fall 3s linear infinite;
        }
        .confetti:nth-child(odd) {
            background: #d72027;
            animation-delay: -0.5s;
        }
        .confetti:nth-child(3n) {
            background: #ff6b6b;
            animation-delay: -1s;
        }
        .confetti:nth-child(4n) {
            background: #ffd93d;
            animation-delay: -1.5s;
        }
        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        .firework {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #f58220;
            border-radius: 50%;
            animation: firework 1.5s ease-out infinite;
        }
        @keyframes firework {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            .form-container {
                padding: 0 25px 30px;
            }
            form {
                padding: 30px 25px;
            }
            h2 {
                font-size: 2.2rem;
            }
            .logo {
                max-width: 340px;
            }
            .success-modal {
                padding: 40px 25px;
                margin: 20px;
            }
            .success-title {
                font-size: 2.2rem;
            }
            .success-message {
                font-size: 1.05rem;
            }
            .success-icon {
                width: 70px;
                height: 70px;
                font-size: 35px;
            }
        }
        @media (max-width: 480px) {
            .header {
                padding: 30px 15px;
            }
            .form-container {
                padding: 0 18px 30px;
            }
            .logo {
                max-width: 240px;
            }
            h2 {
                font-size: 1.8rem;
            }
            .success-modal {
                padding: 30px 20px;
            }
            .success-title {
                font-size: 1.8rem;
            }
            .success-message {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo-container">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
                class="logo">
        </div>
    </div>
    <div class="form-container">
        <form id="onboardingForm" novalidate>
            <h2>Judge Onboarding</h2>
            <div class="form-info">
                <label for="fullName">Full Name</label>
                <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="Email" type="email" required autocomplete="off"
                    placeholder="your.email@example.com" />
                <label for="companyName">Company's Name</label>
                <input id="companyName" name="Company" type="text" required autocomplete="off"
                    placeholder="Name of your organization" />
                <label for="designation">Designation</label>
                <input id="designation" name="Designation" type="text" required autocomplete="off"
                    placeholder="Your role / position" />
                <label for="whatsappNumber">WhatsApp Number</label>
                <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off"
                    placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
                <label for="photoFile">Formal Photo</label>
                <div class="file-upload-area" id="photoArea"
                    data-placeholder="Click or drag to upload your formal photo">
                    <input id="photoFile" name="photoFile" type="file"
                        accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                        required />
                    <div class="file-upload-icon">📸</div>
                    <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
                    <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
                </div>
            </div>
            <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
            <div class="upload-progress" id="uploadProgress" aria-live="polite">
                <div class="upload-progress-header">
                    <div class="upload-progress-status" id="uploadStatus">
                        <span class="spinner-mini"></span>
                        <span id="uploadStatusText">Preparing file...</span>
                    </div>
                    <div class="upload-progress-percent" id="uploadPercent">0%</div>
                </div>
                <div class="upload-progress-bar">
                    <div class="upload-progress-fill" id="uploadFill"></div>
                </div>
                <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload
                    completes.
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="modal-overlay" id="successModal">
        <div class="success-modal">
            <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
            <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
            <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
            <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
            <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
            <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
            <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
            <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
            <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
            <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
            <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
            <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
            <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
            <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
            <div class="success-icon">✓</div>
            <h1 class="success-title">Thank You!</h1>
            <div class="success-message">
                We sincerely appreciate your time.<br><br>
                Kindly check your <strong>email inbox</strong> for the further details. We
                look forward to having you with us.
            </div>
            <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
        </div>
    </div>
    <script>
        const form = document.getElementById("onboardingForm");
        const submitBtn = form.querySelector("button[type='submit']");
        const successModal = document.getElementById("successModal");
        const errorMsg = document.getElementById("errorMsg");
        const fields = form.querySelectorAll("input:not([type='file'])");
        const uploadProgress = document.getElementById("uploadProgress");
        const uploadStatusText = document.getElementById("uploadStatusText");
        const uploadPercent = document.getElementById("uploadPercent");
        const uploadFill = document.getElementById("uploadFill");
        const uploadDetail = document.getElementById("uploadDetail");
        function showProgress() {
            uploadProgress.classList.remove('done', 'error-state');
            uploadProgress.classList.add('show');
        }
        function hideProgress() {
            uploadProgress.classList.remove('show', 'done', 'error-state');
        }
        function setProgress(percent, statusText, detail) {
            const p = Math.max(0, Math.min(100, Math.round(percent)));
            uploadFill.style.width = p + '%';
            uploadPercent.textContent = p + '%';
            if (statusText !== undefined) uploadStatusText.textContent = statusText;
            if (detail !== undefined) uploadDetail.textContent = detail;
        }
        function markProgressDone(text) {
            uploadProgress.classList.add('done');
            uploadFill.style.width = '100%';
            uploadPercent.textContent = '100%';
            uploadStatusText.textContent = text || 'Onboarding complete!';
            uploadDetail.textContent = 'You can close this tab anytime.';
        }
        function markProgressError(text) {
            uploadProgress.classList.add('error-state');
            uploadStatusText.textContent = text || 'Upload failed';
            uploadDetail.textContent = 'See message above for details.';
        }
        function formatMB(bytes) {
            return (bytes / 1024 / 1024).toFixed(2) + ' MB';
        }
        const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxllymqzkOs5oJDIV0EL5hjpX8mRh0vJL-hAkFks2Lx8zqr3HeWrQTe9-Xxk83slrNZ/exec";
        const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        function validateField(field) {
            if (field.id === 'whatsappNumber') {
                const v = field.value.trim();
                if (v.length === 11 && /^01\\d{9}$/.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else if (field.id === 'emailAddress') {
                const v = field.value.trim();
                if (EMAIL_REGEX.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else {
                if (!field.checkValidity() || !field.value.trim()) {
                    field.classList.add("error");
                    return false;
                } else {
                    field.classList.remove("error");
                    return true;
                }
            }
        }
        const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
        function validateFileArea() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            if (!input.files || input.files.length === 0) {
                area.classList.add('file-error');
                return false;
            }
            const file = input.files[0];
            if (!ALLOWED_PHOTO_EXT.test(file.name)) {
                area.classList.add('file-error');
                return false;
            }
            area.classList.remove('file-error');
            return true;
        }
        function getExtension(filename) {
            const idx = filename.lastIndexOf('.');
            return idx >= 0 ? filename.slice(idx) : '';
        }
        function sanitizeName(name) {
            return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
        }
        function showSuccessModal() {
            successModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (e) { }
        }
        function closeSuccessModal() {
            successModal.classList.remove('show');
            document.body.style.overflow = '';
        }
        window.closeSuccessModal = closeSuccessModal;
        successModal.addEventListener('click', function (e) {
            if (e.target === successModal) closeSuccessModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
        });
        function setupFileInput() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            const text = document.getElementById('photoText');
            input.addEventListener('change', function () {
                if (this.files && this.files.length > 0) {
                    const file = this.files[0];
                    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                    text.textContent = file.name + ' (' + sizeMB + ' MB)';
                    area.classList.add('has-file');
                    area.classList.remove('file-error');
                } else {
                    text.textContent = area.dataset.placeholder;
                    area.classList.remove('has-file');
                }
            });
            area.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('drag-over');
            });
            area.addEventListener('dragleave', function () {
                this.classList.remove('drag-over');
            });
            area.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    input.files = e.dataTransfer.files;
                    input.dispatchEvent(new Event('change'));
                }
            });
        }
        document.addEventListener('DOMContentLoaded', function () {
            setupFileInput();
            const phoneInput = document.getElementById('whatsappNumber');
            phoneInput.addEventListener('input', function () {
                this.value = this.value.replace(/\\D/g, '');
                if (this.value.length > 11) this.value = this.value.slice(0, 11);
                validateField(this);
            });
            phoneInput.addEventListener('paste', function (e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
                validateField(this);
            });
        });
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (submitBtn.classList.contains("loading")) return;
            hideProgress();
            let invalidFound = false;
            fields.forEach(field => {
                if (!validateField(field)) {
                    if (!invalidFound) { field.focus(); invalidFound = true; }
                }
            });
            const photoValid = validateFileArea();
            if (!photoValid) invalidFound = true;
            if (invalidFound) {
                errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
                errorMsg.style.display = "block";
                return;
            }
            errorMsg.style.display = "none";
            const now = Date.now();
            if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
                errorMsg.textContent = "Please wait a few seconds before submitting again.";
                errorMsg.style.display = "block";
                return;
            }
            const photoFile = document.getElementById('photoFile').files[0];
            const MAX_SIZE = 10 * 1024 * 1024;
            if (photoFile.size > MAX_SIZE) {
                errorMsg.textContent = "Photo must be 10 MB or smaller.";
                errorMsg.style.display = "block";
                return;
            }
            submitBtn.classList.add("loading");
            submitBtn.textContent = "Uploading...";
            showProgress();
            setProgress(0, 'Reading file...',
                'Preparing ' + formatMB(photoFile.size) + ' for upload. Keep this tab open.');
            let serverPhaseTimer = null;
            try {
                const fullName = document.getElementById('fullName').value.trim();
                const safeName = sanitizeName(fullName);
                const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
                const renamedFile = safeName + ' - Judge' + ext;
                const photoBase64 = await readFileAsBase64WithProgress(photoFile, p => {
                    setProgress(p * 15, 'Reading file...',
                        'Read ' + formatMB(photoFile.size * p) + ' of ' + formatMB(photoFile.size));
                });
                const payload = {
                    name: fullName,
                    email: document.getElementById('emailAddress').value.trim(),
                    company: document.getElementById('companyName').value.trim(),
                    designation: document.getElementById('designation').value.trim(),
                    whatsapp: document.getElementById('whatsappNumber').value.trim(),
                    photoBase64: photoBase64,
                    photoName: renamedFile,
                    photoMime: photoFile.type || 'image/jpeg'
                };
                const body = JSON.stringify(payload);
                const bodyBytes = new Blob([body]).size;
                setProgress(15, 'Uploading...',
                    'Uploading ' + formatMB(bodyBytes) + '. Please keep this tab open.');
                let creep = 15;
                serverPhaseTimer = setInterval(() => {
                    creep += (90 - creep) * 0.05;
                    setProgress(creep, 'Uploading...',
                        'Uploading ' + formatMB(bodyBytes) + '. Keep this tab open.');
                }, 400);
                const response = await fetch(WEBAPP_URL, {
                    method: 'POST',
                    body: body
                });
                clearInterval(serverPhaseTimer);
                serverPhaseTimer = null;
                if (!response.ok) {
                    const errText = await response.text().catch(() => '');
                    console.error('HTTP ' + response.status, errText.slice(0, 500));
                    throw new Error('HTTP ' + response.status + ' from Apps Script.');
                }
                setProgress(95, 'Finalizing...', 'Uploading photo and recording your details.');
                const responseText = await response.text();
                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
                    throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
                }
                if (data.success) {
                    localStorage.setItem('lastSubmission', Date.now().toString());
                    markProgressDone('Onboarding complete!');
                    setTimeout(() => {
                        form.reset();
                        document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
                        document.getElementById('photoArea').classList.remove('has-file', 'file-error');
                        showSuccessModal();
                        fields.forEach(f => f.classList.remove("error"));
                        hideProgress();
                    }, 700);
                } else {
                    errorMsg.textContent = data.error || "Submission failed. Please try again.";
                    errorMsg.style.display = "block";
                    markProgressError('Server rejected submission');
                }
            } catch (error) {
                console.error('Submission error:', error);
                errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
                errorMsg.style.display = "block";
                markProgressError('Upload failed');
            } finally {
                if (serverPhaseTimer) clearInterval(serverPhaseTimer);
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Submit";
            }
        });
        function readFileAsBase64WithProgress(file, onProgress) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onprogress = (e) => {
                    if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
                };
                reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        fields.forEach(field => {
            field.addEventListener("input", () => {
                validateField(field);
                if (errorMsg.style.display === "block") errorMsg.style.display = "none";
            });
            field.addEventListener("change", () => validateField(field));
        });
    <\/script>
</body>
</html>`},{id:`judge-onboarding-js`,shortName:`JudgeOnboarding.js`,language:`javascript`,category:`Judges`,summary:`Backend webhook to process judge onboarding data and log it into the centralized database.`,content:`const SHEET_ID = '15m5dLcHLjlFrOu1fHO0y4t7cILT54nIyY_nqRqik3Uk';
const SHEET_NAME = 'Sheet1';
const PHOTO_FOLDER_ID = '1zd39NPYZEPeBiaRi7bKWRNRSNcPipotz';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const WS_EMAIL_TEMPLATE_FILE = "Email";
const WS_EMAIL_SUBJECT = "Unravel Hexa: Judge Onboarding";
const WS_EMAIL_FROM_NAME = "Unravel Hexa | Judge";
const ALLOWED_IMAGE_MIMES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'application/octet-stream'
];
function doPost(e) {
    const lock = LockService.getScriptLock();
    try {
        lock.waitLock(20000);
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
    }
    try {
        if (!e || !e.postData || !e.postData.contents) {
            return jsonResponse({ success: false, error: 'No payload received.' });
        }
        const data = JSON.parse(e.postData.contents);
        const name = sanitizeText(data.name, 100);
        const email = sanitizeText(data.email, 150).toLowerCase();
        const company = sanitizeText(data.company, 150);
        const designation = sanitizeText(data.designation, 150);
        const whatsapp = sanitizeText(data.whatsapp, 20);
        if (!name || !email || !company || !designation || !whatsapp) {
            return jsonResponse({ success: false, error: 'Missing required fields.' });
        }
        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            return jsonResponse({ success: false, error: 'Invalid email address.' });
        }
        if (!/^01\\d{9}$/.test(whatsapp)) {
            return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
        }
        if (!data.photoBase64) {
            return jsonResponse({ success: false, error: 'Missing photo data.' });
        }
        const photoName = sanitizeFileName(data.photoName) || (name + ' - Judge.jpg');
        if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
            return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
        }
        const photoBytes = Utilities.base64Decode(data.photoBase64);
        if (photoBytes.length > MAX_FILE_BYTES) {
            return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
        }
        const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
            ? data.photoMime
            : 'image/jpeg';
        const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
        const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
        photoFile.setDescription('Judge Photo — ' + name);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
        const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
        if (!sheet) {
            return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
        }
        const nextRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(nextRow, 1).setValue(new Date());
        sheet.getRange(nextRow, 2).setValue(name);
        sheet.getRange(nextRow, 3).setValue(email);
        sheet.getRange(nextRow, 4).setValue(company);
        sheet.getRange(nextRow, 5).setValue(designation);
        const phoneCell = sheet.getRange(nextRow, 6);
        phoneCell.setNumberFormat('@');
        phoneCell.setValue(whatsapp);
        sheet.getRange(nextRow, 7).setValue(photoLink);
        let emailSent = false;
        try {
            const htmlTemplate = HtmlService.createTemplateFromFile(WS_EMAIL_TEMPLATE_FILE).getRawContent();
            const finalHtmlBody = htmlTemplate.replace(/{{judge_name}}/g, name || "Judge");
            GmailApp.sendEmail(email, WS_EMAIL_SUBJECT, "", {
                htmlBody: finalHtmlBody,
                name: WS_EMAIL_FROM_NAME
            });
            emailSent = true;
            Logger.log("Judge email sent to " + email);
        } catch (mailErr) {
            Logger.log("Email dispatch failed for " + email + ": " + mailErr.toString());
        }
        return jsonResponse({ success: true, photoUrl: photoLink, emailSent: emailSent });
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server error: ' + err.message });
    } finally {
        try { lock.releaseLock(); } catch (e) { }
    }
}
function doGet() {
    return jsonResponse({ status: 'ok', service: 'Unravel 6X Judge Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
    return ContentService
        .createTextOutput(JSON.stringify(obj))
        .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
    if (s === null || s === undefined) return '';
    return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
    if (!name) return '';
    return String(name)
        .replace(/[\\\\/:*?"<>|]/g, '')
        .trim()
        .slice(0, 150);
}
`},{id:`judge-mail`,shortName:`JudgeMail.html`,language:`html`,category:`Judges`,summary:`Welcome email template sent to judges upon successful onboarding.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Judge Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{judge_name}}</strong>,
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for kindly agreeing to judge <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have you
      on the panel.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please find the <strong>casebook</strong> and <strong>rulebook</strong> below. The rulebook contains the
      <strong>evaluation criteria</strong> you'll use during judging. Kindly review both at your convenience.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Casebook</a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/15V6fvF37wJhHUYYJS2U99weqYqnUENqI/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Rulebook</a>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Submissions close on <strong>20 May, 11:59 PM</strong>. We will share the assigned presentation files and
      judging details with you shortly after the deadline.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for your valuable time.
    </p>
    <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`},{id:`judge-evaluation-mail`,shortName:`EvaluationMail.html`,language:`html`,category:`Judges`,summary:`Automated email delivering evaluation rubrics and scoring instructions to the panel.`,content:`<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evaluation Sheet Ready | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="/unravel_hexa/logos/hero_logo.png"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            TIME TO JUDGE!</h2>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
            Dear <strong>{{judge_name}}</strong>,
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We hope you're doing well. Your individual <strong>evaluation sheet</strong> for
            <strong style="color: #d72027;">Unravel Hexa</strong> has been prepared and is now ready for you to access.
            Please
            use the button below to open it.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="{{evaluation_sheet_link}}" target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #22c55e, #15803d); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Evaluation Sheet</a>
                </td>
            </tr>
        </table>
        <p
            style="margin-bottom: 14px; font-size: 15px; line-height: 1.5; color: #92400e; background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 10px 14px; border-radius: 6px;">
            <strong>Important:</strong> Please make sure to access the evaluation sheet using the <strong>same email
                address</strong> you provided in the onboarding form.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We kindly request you to complete the evaluation by <strong>26 May, 2026 (Tuesday)</strong>.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            For your convenience, we are also attaching the <strong>casebook</strong> and <strong>rulebook</strong>
            again
            below. These are the same documents that were shared with you previously during onboarding.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Casebook</a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/15V6fvF37wJhHUYYJS2U99weqYqnUENqI/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Rulebook</a>
                </td>
            </tr>
        </table>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please don't hesitate to reach out if you have any questions or face any issues accessing the sheet. Thank
            you once
            again for your valuable time and contribution.
        </p>
        <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                With gratitude,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="/unravel_hexa/logos/facebook.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="/unravel_hexa/logos/internet.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="/unravel_hexa/logos/email.png" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="/unravel_hexa/logos/phone.png" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`},{id:`judge-evaluation-mailer`,shortName:`EvaluationMailer.js`,language:`javascript`,category:`Judges`,summary:`Script to distribute customized evaluation materials securely to all registered judges.`,content:`
function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu("📧 Unravel Mailer")
        .addItem("Send Evaluation Sheets", "sendEvaluationSheetEmail")
        .addToUi();
}
function sendEvaluationSheetEmail() {
    const TEMPLATE_FILE = "Email";
    const EMAIL_SUBJECT = "Evaluation Sheet of Round 1 | Unravel Hexa";
    const FROM_NAME = "Unravel Hexa | RUBC";
    const NAME_COL = 2;  
    const EMAIL_COL = 3;  
    const LINK_COL = 4;  
    const ui = SpreadsheetApp.getUi();
    const sheet = SpreadsheetApp.getActiveSheet();
    const selection = sheet.getActiveRange();
    if (!selection) {
        ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
        return;
    }
    const startRow = selection.getRow();
    const numRows = selection.getNumRows();
    if (startRow < 2) {
        ui.alert("⚠️ Invalid Selection", "Please select data rows only (row 2 onwards). Don't include the header.", ui.ButtonSet.OK);
        return;
    }
    const names = sheet.getRange(startRow, NAME_COL, numRows, 1).getValues();
    const emails = sheet.getRange(startRow, EMAIL_COL, numRows, 1).getValues();
    const links = sheet.getRange(startRow, LINK_COL, numRows, 1).getValues();
    let validCount = 0;
    for (let i = 0; i < numRows; i++) {
        if (emails[i][0] && String(emails[i][0]).trim() !== "") {
            validCount++;
        }
    }
    if (validCount === 0) {
        ui.alert("⚠️ No Emails", "No email addresses found in column C for the selected rows.", ui.ButtonSet.OK);
        return;
    }
    const confirm = ui.alert(
        "📧 Confirm Send",
        "This will send the evaluation sheet email to " + validCount + " judge(s) (rows " + startRow + "–" + (startRow + numRows - 1) + ").\\n\\nProceed?",
        ui.ButtonSet.YES_NO
    );
    if (confirm !== ui.Button.YES) {
        ui.alert("Cancelled", "No emails were sent.", ui.ButtonSet.OK);
        return;
    }
    const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
    let sentCount = 0;
    let failedCount = 0;
    const errors = [];
    for (let i = 0; i < numRows; i++) {
        const email = String(emails[i][0]).trim();
        const judgeName = String(names[i][0]).trim() || "Judge";
        const sheetLink = String(links[i][0]).trim();
        const rowNum = startRow + i;
        if (!email) continue;
        if (!sheetLink) {
            failedCount++;
            errors.push("Row " + rowNum + " (" + email + "): Missing evaluation sheet link in column D.");
            continue;
        }
        try {
            const finalHtml = htmlTemplate
                .replace(/{{judge_name}}/g, judgeName)
                .replace(/{{evaluation_sheet_link}}/g, sheetLink);
            GmailApp.sendEmail(email, EMAIL_SUBJECT, "", {
                htmlBody: finalHtml,
                name: FROM_NAME
            });
            sentCount++;
        } catch (err) {
            failedCount++;
            errors.push("Row " + rowNum + " (" + email + "): " + err.message);
            Logger.log("Failed row " + rowNum + ": " + err.toString());
        }
    }
    let summary = "✅ Sent: " + sentCount + "\\n❌ Failed: " + failedCount;
    if (errors.length > 0) {
        summary += "\\n\\nErrors:\\n" + errors.join("\\n");
    }
    ui.alert("📧 Done!", summary, ui.ButtonSet.OK);
    Logger.log("Evaluation sheet email — Sent: " + sentCount + ", Failed: " + failedCount);
}
`},{id:`judge-thank-you-mail`,shortName:`JudgeThankYou.html`,language:`html`,category:`Judges`,summary:`Post-event gratitude email template acknowledging the judges' contribution.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Judging | UNRAVEL HEXA 2026</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      THANK YOU!</h2>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{Name}}</strong>,
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Greetings from Rajshahi University Business Club!
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would like to extend our heartfelt gratitude for your invaluable contribution as a judge in the First Round of UNRAVEL HEXA 2026. Your time, guidance, and thoughtful evaluation played a crucial role in making the competition insightful, fair, and inspiring for all participants.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your expertise and perspective helped us recognize the most promising ideas and encouraged participants to push their boundaries. We deeply appreciate your support and dedication throughout this journey.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      For your reference and to celebrate your contribution, please find the judges' appreciation post here:
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://www.facebook.com/hello.rubc/posts/pfbid02KCCdGiCUvsaMrVoJmcLmDTheRRZqLEevBWB4zx2TQ6eJsdkJVm2RgQAZPwcTCGwCl"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">View Appreciation Post</a>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you once again for being an integral part of UNRAVEL HEXA 2026.
    </p>
    <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best regards,<br />
        Team UNRAVEL HEXA
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`},{id:`judge-thank-you-mailer`,shortName:`ThankYouMailer.js`,language:`javascript`,category:`Judges`,summary:`Automation to send personalized post-event thank you emails to the judging panel.`,content:`
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Unravel Emails')
    .addItem('Send Thank You Emails (Selected Range)', 'sendThankYouEmails')
    .addToUi();
}
function sendThankYouEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const selection = sheet.getSelection();
  const activeRange = selection.getActiveRange();
  if (!activeRange) {
    SpreadsheetApp.getUi().alert('Error', 'Please select a range of cells containing Names in Column A and Emails in Column B.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }
  const startRow = activeRange.getRow();
  const numRows = activeRange.getNumRows();
  const dataRange = sheet.getRange(startRow, 1, numRows, 2);
  const data = dataRange.getValues();
  const htmlTemplate = HtmlService.createHtmlOutputFromFile('06. ThankYouMail').getContent();
  let emailsSent = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const name = row[0];
    const email = row[1];
    if (name && email && typeof email === 'string' && email.includes('@')) {
      let emailBody = htmlTemplate.replace('{{Name}}', name);
      try {
        MailApp.sendEmail({
          to: email,
          subject: 'Thank You for Judging UNRAVEL HEXA 2026',
          htmlBody: emailBody,
          name: 'Team UNRAVEL HEXA'
        });
        emailsSent++;
      } catch (e) {
        Logger.log('Error sending email to ' + email + ': ' + e.message);
      }
    }
  }
  SpreadsheetApp.getUi().alert('Success', 'Successfully sent ' + emailsSent + ' emails.', SpreadsheetApp.getUi().ButtonSet.OK);
}
`},{id:`mentor-form`,shortName:`MentorForm.html`,language:`html`,category:`Mentors`,summary:`Mentor onboarding and registration portal.`,content:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>Mentor Onboarding | Unravel Hexa</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0a0a0c;
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
        }
        .logo-container {
            margin-bottom: 30px;
        }
        .logo {
            max-width: 550px;
            height: auto;
            filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
            transition: transform 0.3s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }
        .subtitle {
            font-size: 1.1rem;
            color: #b8c6db;
            font-weight: 300;
        }
        .form-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0 60px 50px;
        }
        form {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 50px;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        form:hover {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
            border-color: rgba(245, 130, 32, 0.2);
        }
        h2 {
            text-align: center;
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 6px;
            margin-top: 18px;
            color: #b8c6db;
            user-select: none;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        input[type="tel"]::placeholder {
            color: #8892b0;
        }
        input:invalid {
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        input.error, textarea.error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
        }
        textarea {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
            font-family: inherit;
            resize: vertical;
        }
        textarea:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        textarea::placeholder {
            color: #8892b0;
        }
        button {
            margin-top: 40px;
            width: 100%;
            padding: 18px;
            font-size: 1.5rem;
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 2px;
            color: white;
            background: linear-gradient(135deg, #f58220, #d72027);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
            user-select: none;
            position: relative;
            overflow: hidden;
        }
        button:hover:not(.loading) {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
        }
        button:active {
            transform: translateY(0);
        }
        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
        button.loading {
            pointer-events: none;
            color: transparent;
        }
        button.loading::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 3px solid white;
            border-top-color: transparent;
            animation: spinner 0.6s linear infinite;
        }
        .error-message {
            color: #e74c3c;
            font-weight: 600;
            margin-top: 15px;
            text-align: center;
            user-select: none;
            display: none;
            background: rgba(231, 76, 60, 0.1);
            border: 1px solid rgba(231, 76, 60, 0.3);
            padding: 12px;
            border-radius: 8px;
        }
        .upload-warning {
            display: none;
            margin-top: 20px;
            padding: 14px 18px;
            background: rgba(245, 130, 32, 0.08);
            border: 1px solid rgba(245, 130, 32, 0.3);
            border-radius: 10px;
            text-align: center;
            color: #f58220;
            font-weight: 600;
            font-size: 0.92rem;
            user-select: none;
            animation: warningPulse 1.5s ease-in-out infinite;
        }
        .upload-warning.show {
            display: block;
        }
        @keyframes warningPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        .file-upload-area {
            position: relative;
            width: 100%;
            border: 2px dashed rgba(245, 130, 32, 0.35);
            border-radius: 10px;
            padding: 24px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.03);
            margin-top: 4px;
        }
        .file-upload-area:hover,
        .file-upload-area.drag-over {
            border-color: #f58220;
            background: rgba(245, 130, 32, 0.06);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
        }
        .file-upload-area input[type="file"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .file-upload-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .file-upload-text {
            color: #b8c6db;
            font-weight: 500;
            font-size: 0.95rem;
            word-break: break-all;
        }
        .file-upload-hint {
            color: #566573;
            font-size: 0.8rem;
            margin-top: 6px;
        }
        .file-upload-area.has-file {
            border-style: solid;
            border-color: #27ae60;
            background: rgba(39, 174, 96, 0.06);
        }
        .file-upload-area.has-file .file-upload-text {
            color: #2ecc71;
        }
        .file-upload-area.file-error {
            border-style: solid;
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.06);
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
        }
        .form-info {
            margin-bottom: 25px;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .success-modal {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(245, 130, 32, 0.35);
            border-radius: 25px;
            padding: 50px 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
            transform: scale(0.7) translateY(50px);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-overlay.show .success-modal {
            transform: scale(1) translateY(0);
        }
        .success-modal::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
            animation: rotate 4s linear infinite;
            z-index: -1;
        }
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
            animation: bounce 0.8s ease-out 0.3s both;
        }
        @keyframes bounce {
            0% {
                transform: scale(0) rotate(180deg);
            }
            50% {
                transform: scale(1.2) rotate(360deg);
            }
            100% {
                transform: scale(1) rotate(360deg);
            }
        }
        .success-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.8rem;
            font-weight: 400;
            letter-spacing: 2px;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from {
                filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
            }
            to {
                filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
            }
        }
        .success-message {
            font-size: 1.15rem;
            color: #b8c6db;
            line-height: 1.7;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .success-message strong {
            color: #f58220;
            font-weight: 700;
        }
        .ok-button {
            display: inline-block;
            background: linear-gradient(135deg, #f58220, #d72027);
            color: white;
            border: none;
            padding: 14px 50px;
            border-radius: 50px;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.4rem;
            letter-spacing: 3px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
        }
        .ok-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
        }
        .close-modal {
            position: absolute;
            top: 20px;
            right: 25px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        }
        .close-modal:hover {
            background: rgba(245, 130, 32, 0.25);
            transform: rotate(90deg);
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #f58220;
            animation: confetti-fall 3s linear infinite;
        }
        .confetti:nth-child(odd) {
            background: #d72027;
            animation-delay: -0.5s;
        }
        .confetti:nth-child(3n) {
            background: #ff6b6b;
            animation-delay: -1s;
        }
        .confetti:nth-child(4n) {
            background: #ffd93d;
            animation-delay: -1.5s;
        }
        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        .firework {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #f58220;
            border-radius: 50%;
            animation: firework 1.5s ease-out infinite;
        }
        @keyframes firework {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            .form-container {
                padding: 0 25px 30px;
            }
            form {
                padding: 30px 25px;
            }
            h2 {
                font-size: 2.2rem;
            }
            .logo {
                max-width: 340px;
            }
            .success-modal {
                padding: 40px 25px;
                margin: 20px;
            }
            .success-title {
                font-size: 2.2rem;
            }
            .success-message {
                font-size: 1.05rem;
            }
            .success-icon {
                width: 70px;
                height: 70px;
                font-size: 35px;
            }
        }
        @media (max-width: 480px) {
            .header {
                padding: 30px 15px;
            }
            .form-container {
                padding: 0 18px 30px;
            }
            .logo {
                max-width: 240px;
            }
            h2 {
                font-size: 1.8rem;
            }
            .success-modal {
                padding: 30px 20px;
            }
            .success-title {
                font-size: 1.8rem;
            }
            .success-message {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo-container">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
                class="logo">
        </div>
    </div>
    <div class="form-container">
        <form id="onboardingForm" novalidate>
            <h2>Mentor Onboarding</h2>
            <div class="form-info">
                <label for="fullName">Full Name</label>
                <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="Email" type="email" required autocomplete="off"
                    placeholder="your.email@example.com" />
                <label for="whatsappNumber">WhatsApp Number</label>
                <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off"
                    placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
                <label for="university">University</label>
                <input id="university" name="University" type="text" required autocomplete="off"
                    placeholder="Your university name" />
                <label for="department">Department</label>
                <input id="department" name="Department" type="text" required autocomplete="off"
                    placeholder="Your department" />
                <label for="paragraphText">Achievements</label>
                <textarea id="paragraphText" name="ParagraphText" required autocomplete="off"
                    placeholder="Your achievements" rows="4"></textarea>
                <label for="companyDesignation">Company & Designation <span
                        style="color: #566573; font-weight: 400;">(Optional)</span></label>
                <input id="companyDesignation" name="CompanyDesignation" type="text" autocomplete="off"
                    placeholder="(If any)" />
                <label for="photoFile">Formal Photo</label>
                <div class="file-upload-area" id="photoArea"
                    data-placeholder="Click or drag to upload your formal photo">
                    <input id="photoFile" name="photoFile" type="file"
                        accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                        required />
                    <div class="file-upload-icon">📸</div>
                    <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
                    <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
                </div>
            </div>
            <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
            <div class="upload-warning" id="uploadWarning">
                ⚠️ Uploading... Please do not close this tab.
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="modal-overlay" id="successModal">
        <div class="success-modal">
            <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
            <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
            <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
            <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
            <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
            <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
            <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
            <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
            <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
            <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
            <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
            <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
            <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
            <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
            <div class="success-icon">✓</div>
            <h1 class="success-title">Thank You!</h1>
            <div class="success-message">
                We sincerely appreciate your time.<br><br>
                Kindly check your <strong>email inbox</strong> for the further details. We
                look forward to having you with us.
            </div>
            <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
        </div>
    </div>
    <script>
        const form = document.getElementById("onboardingForm");
        const submitBtn = form.querySelector("button[type='submit']");
        const successModal = document.getElementById("successModal");
        const errorMsg = document.getElementById("errorMsg");
        const fields = form.querySelectorAll("input:not([type='file']), textarea");
        const uploadWarning = document.getElementById("uploadWarning");
        const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwtZANHcsXtFYFJzsN0duy6TSFdi0d7h1bNn4zCQYy-3Dwcj8B4qHYqT-2KbI1FaHN9/exec";
        const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        function validateField(field) {
            if (field.id === 'companyDesignation') {
                field.classList.remove("error");
                return true;
            }
            if (field.id === 'whatsappNumber') {
                const v = field.value.trim();
                if (v.length === 11 && /^01\\d{9}$/.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else if (field.id === 'emailAddress') {
                const v = field.value.trim();
                if (EMAIL_REGEX.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else {
                if (!field.checkValidity() || !field.value.trim()) {
                    field.classList.add("error");
                    return false;
                } else {
                    field.classList.remove("error");
                    return true;
                }
            }
        }
        const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
        function validateFileArea() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            if (!input.files || input.files.length === 0) {
                area.classList.add('file-error');
                return false;
            }
            const file = input.files[0];
            if (!ALLOWED_PHOTO_EXT.test(file.name)) {
                area.classList.add('file-error');
                return false;
            }
            area.classList.remove('file-error');
            return true;
        }
        function getExtension(filename) {
            const idx = filename.lastIndexOf('.');
            return idx >= 0 ? filename.slice(idx) : '';
        }
        function sanitizeName(name) {
            return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
        }
        function showSuccessModal() {
            successModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (e) { }
        }
        function closeSuccessModal() {
            successModal.classList.remove('show');
            document.body.style.overflow = '';
        }
        window.closeSuccessModal = closeSuccessModal;
        successModal.addEventListener('click', function (e) {
            if (e.target === successModal) closeSuccessModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
        });
        function setupFileInput() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            const text = document.getElementById('photoText');
            input.addEventListener('change', function () {
                if (this.files && this.files.length > 0) {
                    const file = this.files[0];
                    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                    text.textContent = file.name + ' (' + sizeMB + ' MB)';
                    area.classList.add('has-file');
                    area.classList.remove('file-error');
                } else {
                    text.textContent = area.dataset.placeholder;
                    area.classList.remove('has-file');
                }
            });
            area.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('drag-over');
            });
            area.addEventListener('dragleave', function () {
                this.classList.remove('drag-over');
            });
            area.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    input.files = e.dataTransfer.files;
                    input.dispatchEvent(new Event('change'));
                }
            });
        }
        document.addEventListener('DOMContentLoaded', function () {
            setupFileInput();
            const phoneInput = document.getElementById('whatsappNumber');
            phoneInput.addEventListener('input', function () {
                this.value = this.value.replace(/\\D/g, '');
                if (this.value.length > 11) this.value = this.value.slice(0, 11);
                validateField(this);
            });
            phoneInput.addEventListener('paste', function (e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
                validateField(this);
            });
        });
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (submitBtn.classList.contains("loading")) return;
            let invalidFound = false;
            fields.forEach(field => {
                if (!validateField(field)) {
                    if (!invalidFound) { field.focus(); invalidFound = true; }
                }
            });
            const photoValid = validateFileArea();
            if (!photoValid) invalidFound = true;
            if (invalidFound) {
                errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
                errorMsg.style.display = "block";
                return;
            }
            errorMsg.style.display = "none";
            const now = Date.now();
            if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
                errorMsg.textContent = "Please wait a few seconds before submitting again.";
                errorMsg.style.display = "block";
                return;
            }
            const photoFile = document.getElementById('photoFile').files[0];
            const MAX_SIZE = 10 * 1024 * 1024;
            if (photoFile.size > MAX_SIZE) {
                errorMsg.textContent = "Photo must be 10 MB or smaller.";
                errorMsg.style.display = "block";
                return;
            }
            submitBtn.classList.add("loading");
            submitBtn.textContent = "Uploading...";
            uploadWarning.classList.add('show');
            try {
                const fullName = document.getElementById('fullName').value.trim();
                const safeName = sanitizeName(fullName);
                const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
                const renamedFile = safeName + ' - Mentor' + ext;
                const photoBase64 = await readFileAsBase64(photoFile);
                const payload = {
                    name: fullName,
                    email: document.getElementById('emailAddress').value.trim(),
                    whatsapp: document.getElementById('whatsappNumber').value.trim(),
                    university: document.getElementById('university').value.trim(),
                    department: document.getElementById('department').value.trim(),
                    paragraphText: document.getElementById('paragraphText').value.trim(),
                    companyDesignation: document.getElementById('companyDesignation').value.trim(),
                    photoBase64: photoBase64,
                    photoName: renamedFile,
                    photoMime: photoFile.type || 'image/jpeg'
                };
                const response = await fetch(WEBAPP_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    const errText = await response.text().catch(() => '');
                    console.error('HTTP ' + response.status, errText.slice(0, 500));
                    throw new Error('HTTP ' + response.status + ' from Apps Script.');
                }
                const responseText = await response.text();
                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
                    throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
                }
                if (data.success) {
                    localStorage.setItem('lastSubmission', Date.now().toString());
                    form.reset();
                    document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
                    document.getElementById('photoArea').classList.remove('has-file', 'file-error');
                    fields.forEach(f => f.classList.remove("error"));
                    showSuccessModal();
                } else {
                    errorMsg.textContent = data.error || "Submission failed. Please try again.";
                    errorMsg.style.display = "block";
                }
            } catch (error) {
                console.error('Submission error:', error);
                errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
                errorMsg.style.display = "block";
            } finally {
                uploadWarning.classList.remove('show');
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Submit";
            }
        });
        function readFileAsBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        fields.forEach(field => {
            field.addEventListener("input", () => {
                validateField(field);
                if (errorMsg.style.display === "block") errorMsg.style.display = "none";
            });
            field.addEventListener("change", () => validateField(field));
        });
    <\/script>
</body>
</html>`},{id:`mentor-mailer`,shortName:`MentorMailer.js`,language:`javascript`,category:`Mentors`,summary:`Automated script to process mentor registrations and dispatch confirmation emails.`,content:`const SHEET_ID = '1hK16zpQQLEVyX0tFcMjDnbeln8yV3INHWxIB8UnX5Mk';
const SHEET_NAME = 'Sheet1';
const PHOTO_FOLDER_ID = '1ZHEyU5gP256_3_X5cbvAcLo16KAms0cE';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const WS_EMAIL_TEMPLATE_FILE = "Email";
const WS_EMAIL_SUBJECT = "Unravel Hexa: Mentor Onboarding";
const WS_EMAIL_FROM_NAME = "Unravel Hexa | RUBC";
const ALLOWED_IMAGE_MIMES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'application/octet-stream'
];
function doPost(e) {
    const lock = LockService.getScriptLock();
    try {
        lock.waitLock(20000);
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
    }
    try {
        if (!e || !e.postData || !e.postData.contents) {
            return jsonResponse({ success: false, error: 'No payload received.' });
        }
        const data = JSON.parse(e.postData.contents);
        const name = sanitizeText(data.name, 100);
        const email = sanitizeText(data.email, 150).toLowerCase();
        const whatsapp = sanitizeText(data.whatsapp, 20);
        const university = sanitizeText(data.university, 200);
        const department = sanitizeText(data.department, 200);
        const paragraphText = sanitizeText(data.paragraphText, 2000);
        const companyDesignation = sanitizeText(data.companyDesignation, 300); 
        if (!name || !email || !whatsapp || !university || !department) {
            return jsonResponse({ success: false, error: 'Missing required fields.' });
        }
        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            return jsonResponse({ success: false, error: 'Invalid email address.' });
        }
        if (!/^01\\d{9}$/.test(whatsapp)) {
            return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
        }
        if (!data.photoBase64) {
            return jsonResponse({ success: false, error: 'Missing photo data.' });
        }
        const photoName = sanitizeFileName(data.photoName) || (name + ' - Mentor.jpg');
        if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
            return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
        }
        const photoBytes = Utilities.base64Decode(data.photoBase64);
        if (photoBytes.length > MAX_FILE_BYTES) {
            return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
        }
        const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
            ? data.photoMime
            : 'image/jpeg';
        const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
        const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
        photoFile.setDescription('Mentor Photo — ' + name);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
        const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
        if (!sheet) {
            return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
        }
        const nextRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(nextRow, 1).setValue(new Date());
        sheet.getRange(nextRow, 2).setValue(name);
        sheet.getRange(nextRow, 3).setValue(email);
        const phoneCell = sheet.getRange(nextRow, 4);
        phoneCell.setNumberFormat('@');
        phoneCell.setValue(whatsapp);
        sheet.getRange(nextRow, 5).setValue(university);
        sheet.getRange(nextRow, 6).setValue(department);
        sheet.getRange(nextRow, 7).setValue(paragraphText);
        sheet.getRange(nextRow, 8).setValue(companyDesignation);
        sheet.getRange(nextRow, 9).setValue(photoLink);
        let emailSent = false;
        try {
            const htmlTemplate = HtmlService.createTemplateFromFile(WS_EMAIL_TEMPLATE_FILE).getRawContent();
            const finalHtmlBody = htmlTemplate.replace(/{{name}}/g, name || "Mentor");
            GmailApp.sendEmail(email, WS_EMAIL_SUBJECT, "", {
                htmlBody: finalHtmlBody,
                name: WS_EMAIL_FROM_NAME
            });
            emailSent = true;
            Logger.log("Mentor email sent to " + email);
        } catch (mailErr) {
            Logger.log("Email dispatch failed for " + email + ": " + mailErr.toString());
        }
        return jsonResponse({ success: true, photoUrl: photoLink, emailSent: emailSent });
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server error: ' + err.message });
    } finally {
        try { lock.releaseLock(); } catch (e) { }
    }
}
function doGet() {
    return jsonResponse({ status: 'ok', service: 'Unravel 6X Mentor Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
    return ContentService
        .createTextOutput(JSON.stringify(obj))
        .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
    if (s === null || s === undefined) return '';
    return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
    if (!name) return '';
    return String(name)
        .replace(/[\\\\/:*?"<>|]/g, '')
        .trim()
        .slice(0, 150);
}
`},{id:`mentor-email`,shortName:`MentorEmail.html`,language:`html`,category:`Mentors`,summary:`Welcome and onboarding confirmation email template for assigned mentors.`,content:`<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mentor Onboarding Confirmed | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="/unravel_hexa/logos/hero_logo.png"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            WELCOME ABOARD, MENTOR!</h2>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
            Dear <strong>{{name}}</strong>,
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Thank you so much for kindly agreeing to mentor at <strong>Xeron IT</strong> presents
            <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
            <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have
            you
            guide our finalist teams.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            You will be assigned to a finalist team once the finalists are announced. Your mentorship window runs from
            <strong>June 1 – 12</strong>, with the Final Round taking place on <strong>June 13</strong>. There are no
            fixed
            sessions, the engagement is entirely flexible around your schedule.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please find the <strong>Mentor Rulebook</strong> below. It outlines your role, guidelines, and the do's and
            don'ts to ensure a fair and enriching experience for the participants. Kindly review it at your convenience.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/1gdRzKrALPDWdTBcFGIrLDc1NqvGCmr3x/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Mentor Rulebook</a>
                </td>
            </tr>
        </table>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We will share your assigned team details once the finalists are confirmed. Please don't hesitate to reach
            out if
            you have any questions. Thank you once again for your valuable time and generosity.
        </p>
        <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                With gratitude,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="/unravel_hexa/logos/facebook.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="/unravel_hexa/logos/internet.png"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="/unravel_hexa/logos/email.png" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="/unravel_hexa/logos/phone.png" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`},{id:`speaker-onboarding`,shortName:`SpeakerOnboarding.html`,language:`html`,category:`Workshop Speakers`,summary:`Workshop speaker registration and detail collection form.`,content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <title>Workshop Speaker Onboarding | Unravel 6X</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
    rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #0a0a0c;
      min-height: 100vh;
      color: white;
      overflow-x: hidden;
    }
    .header {
      text-align: center;
      padding: 40px 20px;
    }
    .logo-container {
      margin-bottom: 30px;
    }
    .logo {
      max-width: 550px;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .subtitle {
      font-size: 1.1rem;
      color: #b8c6db;
      font-weight: 300;
    }
    .form-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 60px 50px;
    }
    form {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding: 40px 50px;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    form:hover {
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      border-color: rgba(245, 130, 32, 0.2);
    }
    h2 {
      text-align: center;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 6px;
      margin-top: 18px;
      color: #b8c6db;
      user-select: none;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      width: 100%;
      padding: 12px 15px;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
      transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      font-weight: 500;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
      outline-offset: 2px;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus {
      outline: none;
      border-color: #f58220;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
    }
    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    input[type="tel"]::placeholder {
      color: #8892b0;
    }
    input:invalid {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input.error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
    }
    button {
      margin-top: 40px;
      width: 100%;
      padding: 18px;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      color: white;
      background: linear-gradient(135deg, #f58220, #d72027);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    button:hover:not(.loading) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    button:active {
      transform: translateY(0);
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    button.loading {
      pointer-events: none;
      color: transparent;
    }
    button.loading::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
    }
    .error-message {
      color: #e74c3c;
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
      user-select: none;
      display: none;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: 12px;
      border-radius: 8px;
    }
    .upload-progress {
      display: none;
      margin-top: 20px;
      padding: 18px 20px;
      background: rgba(245, 130, 32, 0.06);
      border: 1px solid rgba(245, 130, 32, 0.25);
      border-radius: 12px;
      user-select: none;
    }
    .upload-progress.show {
      display: block;
      animation: progressFadeIn 0.3s ease-out;
    }
    @keyframes progressFadeIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .upload-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    .upload-progress-status {
      color: #f58220;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .upload-progress-status .spinner-mini {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(245, 130, 32, 0.3);
      border-top-color: #f58220;
      border-radius: 50%;
      animation: spinner 0.7s linear infinite;
      flex-shrink: 0;
    }
    .upload-progress.done .upload-progress-status {
      color: #2ecc71;
    }
    .upload-progress.done .spinner-mini {
      display: none;
    }
    .upload-progress.error-state {
      background: rgba(231, 76, 60, 0.08);
      border-color: rgba(231, 76, 60, 0.35);
    }
    .upload-progress.error-state .upload-progress-status {
      color: #e74c3c;
    }
    .upload-progress.error-state .spinner-mini {
      display: none;
    }
    .upload-progress-percent {
      color: #b8c6db;
      font-weight: 700;
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .upload-progress-bar {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .upload-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 999px;
      transition: width 0.25s ease-out;
      position: relative;
      overflow: hidden;
    }
    .upload-progress-fill::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.35),
          transparent);
      animation: shimmer 1.4s linear infinite;
    }
    .upload-progress.done .upload-progress-fill {
      background: linear-gradient(135deg, #27ae60, #2ecc71);
    }
    .upload-progress.done .upload-progress-fill::after,
    .upload-progress.error-state .upload-progress-fill::after {
      display: none;
    }
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .upload-progress-detail {
      margin-top: 8px;
      color: #8892b0;
      font-size: 0.82rem;
      font-variant-numeric: tabular-nums;
    }
    .file-upload-area {
      position: relative;
      width: 100%;
      border: 2px dashed rgba(245, 130, 32, 0.35);
      border-radius: 10px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.03);
      margin-top: 4px;
    }
    .file-upload-area:hover,
    .file-upload-area.drag-over {
      border-color: #f58220;
      background: rgba(245, 130, 32, 0.06);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
    }
    .file-upload-area input[type="file"] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    .file-upload-icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    .file-upload-text {
      color: #b8c6db;
      font-weight: 500;
      font-size: 0.95rem;
      word-break: break-all;
    }
    .file-upload-hint {
      color: #566573;
      font-size: 0.8rem;
      margin-top: 6px;
    }
    .file-upload-area.has-file {
      border-style: solid;
      border-color: #27ae60;
      background: rgba(39, 174, 96, 0.06);
    }
    .file-upload-area.has-file .file-upload-text {
      color: #2ecc71;
    }
    .file-upload-area.file-error {
      border-style: solid;
      border-color: #e74c3c;
      background: rgba(231, 76, 60, 0.06);
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
    }
    .form-info {
      margin-bottom: 25px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }
    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.7) translateY(50px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .modal-overlay.show .success-modal {
      transform: scale(1) translateY(0);
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.8rem;
      font-weight: 400;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.15rem;
      color: #b8c6db;
      line-height: 1.7;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .ok-button {
      display: inline-block;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      border: none;
      padding: 14px 50px;
      border-radius: 50px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.4rem;
      letter-spacing: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
    }
    .ok-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .form-container {
        padding: 0 25px 30px;
      }
      form {
        padding: 30px 25px;
      }
      h2 {
        font-size: 2.2rem;
      }
      .logo {
        max-width: 340px;
      }
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.05rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .header {
        padding: 30px 15px;
      }
      .form-container {
        padding: 0 18px 30px;
      }
      .logo {
        max-width: 240px;
      }
      h2 {
        font-size: 1.8rem;
      }
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo" class="logo">
    </div>
  </div>
  <div class="form-container">
    <form id="onboardingForm" novalidate>
      <h2>Speaker Onboarding</h2>
      <div class="form-info">
        <label for="fullName">Full Name</label>
        <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
        <label for="emailAddress">Email Address</label>
        <input id="emailAddress" name="Email" type="email" required autocomplete="off"
          placeholder="your.email@example.com" />
        <label for="companyName">Company's Name</label>
        <input id="companyName" name="Company" type="text" required autocomplete="off"
          placeholder="Name of your organization" />
        <label for="designation">Designation</label>
        <input id="designation" name="Designation" type="text" required autocomplete="off"
          placeholder="Your role / position" />
        <label for="whatsappNumber">WhatsApp Number</label>
        <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off" placeholder="01XXXXXXXXX"
          pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
        <label for="photoFile">Formal Photo</label>
        <div class="file-upload-area" id="photoArea" data-placeholder="Click or drag to upload your formal photo">
          <input id="photoFile" name="photoFile" type="file" accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif" required />
          <div class="file-upload-icon">📸</div>
          <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
          <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
        </div>
      </div>
      <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
      <div class="upload-progress" id="uploadProgress" aria-live="polite">
        <div class="upload-progress-header">
          <div class="upload-progress-status" id="uploadStatus">
            <span class="spinner-mini"></span>
            <span id="uploadStatusText">Preparing file...</span>
          </div>
          <div class="upload-progress-percent" id="uploadPercent">0%</div>
        </div>
        <div class="upload-progress-bar">
          <div class="upload-progress-fill" id="uploadFill"></div>
        </div>
        <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload completes.
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal">
      <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Thank You!</h1>
      <div class="success-message">
        We sincerely appreciate your time.<br><br>
        Kindly check your <strong>email inbox</strong> for the further details regarding the workshop. We
        look forward to having you with us.
      </div>
      <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
    </div>
  </div>
  <script>
    const form = document.getElementById("onboardingForm");
    const submitBtn = form.querySelector("button[type='submit']");
    const successModal = document.getElementById("successModal");
    const errorMsg = document.getElementById("errorMsg");
    const fields = form.querySelectorAll("input:not([type='file'])");
    const uploadProgress = document.getElementById("uploadProgress");
    const uploadStatusText = document.getElementById("uploadStatusText");
    const uploadPercent = document.getElementById("uploadPercent");
    const uploadFill = document.getElementById("uploadFill");
    const uploadDetail = document.getElementById("uploadDetail");
    function showProgress() {
      uploadProgress.classList.remove('done', 'error-state');
      uploadProgress.classList.add('show');
    }
    function hideProgress() {
      uploadProgress.classList.remove('show', 'done', 'error-state');
    }
    function setProgress(percent, statusText, detail) {
      const p = Math.max(0, Math.min(100, Math.round(percent)));
      uploadFill.style.width = p + '%';
      uploadPercent.textContent = p + '%';
      if (statusText !== undefined) uploadStatusText.textContent = statusText;
      if (detail !== undefined) uploadDetail.textContent = detail;
    }
    function markProgressDone(text) {
      uploadProgress.classList.add('done');
      uploadFill.style.width = '100%';
      uploadPercent.textContent = '100%';
      uploadStatusText.textContent = text || 'Onboarding complete!';
      uploadDetail.textContent = 'You can close this tab anytime.';
    }
    function markProgressError(text) {
      uploadProgress.classList.add('error-state');
      uploadStatusText.textContent = text || 'Upload failed';
      uploadDetail.textContent = 'See message above for details.';
    }
    function formatMB(bytes) {
      return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    }
    const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbw8wu6plzK21oHC7_PuK8gO7_xO6CvEUxio7bUgJ-LgoJ81GQKjLDRoAyh6JHNT_PQg/exec";
    const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    function validateField(field) {
      if (field.id === 'whatsappNumber') {
        const v = field.value.trim();
        if (v.length === 11 && /^01\\d{9}$/.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else if (field.id === 'emailAddress') {
        const v = field.value.trim();
        if (EMAIL_REGEX.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else {
        if (!field.checkValidity() || !field.value.trim()) {
          field.classList.add("error");
          return false;
        } else {
          field.classList.remove("error");
          return true;
        }
      }
    }
    const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
    function validateFileArea() {
      const input = document.getElementById('photoFile');
      const area = document.getElementById('photoArea');
      if (!input.files || input.files.length === 0) {
        area.classList.add('file-error');
        return false;
      }
      const file = input.files[0];
      if (!ALLOWED_PHOTO_EXT.test(file.name)) {
        area.classList.add('file-error');
        return false;
      }
      area.classList.remove('file-error');
      return true;
    }
    function getExtension(filename) {
      const idx = filename.lastIndexOf('.');
      return idx >= 0 ? filename.slice(idx) : '';
    }
    function sanitizeName(name) {
      return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
    }
    function showSuccessModal() {
      successModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) { }
    }
    function closeSuccessModal() {
      successModal.classList.remove('show');
      document.body.style.overflow = '';
    }
    window.closeSuccessModal = closeSuccessModal;
    successModal.addEventListener('click', function (e) {
      if (e.target === successModal) closeSuccessModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
    });
    function setupFileInput() {
      const input = document.getElementById('photoFile');
      const area = document.getElementById('photoArea');
      const text = document.getElementById('photoText');
      input.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
          const file = this.files[0];
          const sizeMB = (file.size / 1024 / 1024).toFixed(2);
          text.textContent = file.name + ' (' + sizeMB + ' MB)';
          area.classList.add('has-file');
          area.classList.remove('file-error');
        } else {
          text.textContent = area.dataset.placeholder;
          area.classList.remove('has-file');
        }
      });
      area.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('drag-over');
      });
      area.addEventListener('dragleave', function () {
        this.classList.remove('drag-over');
      });
      area.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          input.files = e.dataTransfer.files;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
      setupFileInput();
      const phoneInput = document.getElementById('whatsappNumber');
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\\D/g, '');
        if (this.value.length > 11) this.value = this.value.slice(0, 11);
        validateField(this);
      });
      phoneInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
        validateField(this);
      });
    });
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (submitBtn.classList.contains("loading")) return;
      hideProgress();
      let invalidFound = false;
      fields.forEach(field => {
        if (!validateField(field)) {
          if (!invalidFound) { field.focus(); invalidFound = true; }
        }
      });
      const photoValid = validateFileArea();
      if (!photoValid) invalidFound = true;
      if (invalidFound) {
        errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
        errorMsg.style.display = "block";
        return;
      }
      errorMsg.style.display = "none";
      const now = Date.now();
      if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
        errorMsg.textContent = "Please wait a few seconds before submitting again.";
        errorMsg.style.display = "block";
        return;
      }
      const photoFile = document.getElementById('photoFile').files[0];
      const MAX_SIZE = 10 * 1024 * 1024;
      if (photoFile.size > MAX_SIZE) {
        errorMsg.textContent = "Photo must be 10 MB or smaller.";
        errorMsg.style.display = "block";
        return;
      }
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Uploading...";
      showProgress();
      setProgress(0, 'Reading file...',
        'Preparing ' + formatMB(photoFile.size) + ' for upload. Keep this tab open.');
      let serverPhaseTimer = null;
      try {
        const fullName = document.getElementById('fullName').value.trim();
        const safeName = sanitizeName(fullName);
        const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
        const renamedFile = safeName + ' - WS_Speaker' + ext;
        const photoBase64 = await readFileAsBase64WithProgress(photoFile, p => {
          setProgress(p * 15, 'Reading file...',
            'Read ' + formatMB(photoFile.size * p) + ' of ' + formatMB(photoFile.size));
        });
        const payload = {
          name: fullName,
          email: document.getElementById('emailAddress').value.trim(),
          company: document.getElementById('companyName').value.trim(),
          designation: document.getElementById('designation').value.trim(),
          whatsapp: document.getElementById('whatsappNumber').value.trim(),
          photoBase64: photoBase64,
          photoName: renamedFile,
          photoMime: photoFile.type || 'image/jpeg'
        };
        const body = JSON.stringify(payload);
        const bodyBytes = new Blob([body]).size;
        setProgress(15, 'Uploading...',
          'Uploading ' + formatMB(bodyBytes) + '. Please keep this tab open.');
        let creep = 15;
        serverPhaseTimer = setInterval(() => {
          creep += (90 - creep) * 0.05;
          setProgress(creep, 'Uploading...',
            'Uploading ' + formatMB(bodyBytes) + '. Keep this tab open.');
        }, 400);
        const response = await fetch(WEBAPP_URL, {
          method: 'POST',
          body: body
        });
        clearInterval(serverPhaseTimer);
        serverPhaseTimer = null;
        if (!response.ok) {
          const errText = await response.text().catch(() => '');
          console.error('HTTP ' + response.status, errText.slice(0, 500));
          throw new Error('HTTP ' + response.status + ' from Apps Script.');
        }
        setProgress(95, 'Finalizing...', 'Uploading photo and recording your details.');
        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseErr) {
          console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
          throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
        }
        if (data.success) {
          localStorage.setItem('lastSubmission', Date.now().toString());
          if (data.emailSent === false && data.emailError) {
            console.warn('Email dispatch failed:', data.emailError);
            markProgressDone('Saved, but email failed');
            errorMsg.textContent = "Submission saved, but the email could not be sent: " + data.emailError;
            errorMsg.style.display = "block";
          } else {
            markProgressDone('Onboarding complete!');
          }
          setTimeout(() => {
            form.reset();
            document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
            document.getElementById('photoArea').classList.remove('has-file', 'file-error');
            showSuccessModal();
            fields.forEach(f => f.classList.remove("error"));
            hideProgress();
          }, 700);
        } else {
          errorMsg.textContent = data.error || "Submission failed. Please try again.";
          errorMsg.style.display = "block";
          markProgressError('Server rejected submission');
        }
      } catch (error) {
        console.error('Submission error:', error);
        errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
        errorMsg.style.display = "block";
        markProgressError('Upload failed');
      } finally {
        if (serverPhaseTimer) clearInterval(serverPhaseTimer);
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Submit";
      }
    });
    function readFileAsBase64WithProgress(file, onProgress) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onprogress = (e) => {
          if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
        };
        reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    fields.forEach(field => {
      field.addEventListener("input", () => {
        validateField(field);
        if (errorMsg.style.display === "block") errorMsg.style.display = "none";
      });
      field.addEventListener("change", () => validateField(field));
    });
  <\/script>
</body>
</html>`},{id:`speaker-onboarding-js`,shortName:`SpeakerOnboarding.js`,language:`javascript`,category:`Workshop Speakers`,summary:`Backend automation handling speaker registration data and syncing to Sheets.`,content:`
const SHEET_ID       = 'REPLACE_WITH_SHEET_ID';
const SHEET_NAME     = 'Sheet1';
const PHOTO_FOLDER_ID = '17HSUyBCMstD9QV0cixsfJ6FYCxaP5qZ_';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/octet-stream'
];
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const name        = sanitizeText(data.name, 100);
    const email       = sanitizeText(data.email, 150).toLowerCase();
    const company     = sanitizeText(data.company, 150);
    const designation = sanitizeText(data.designation, 150);
    const whatsapp    = sanitizeText(data.whatsapp, 20);
    if (!name || !email || !company || !designation || !whatsapp) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^01\\d{9}$/.test(whatsapp)) {
      return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
    }
    if (!data.photoBase64) {
      return jsonResponse({ success: false, error: 'Missing photo data.' });
    }
    const photoName = sanitizeFileName(data.photoName) || (name + ' - WS_Speaker.jpg');
    if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
      return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
    }
    const photoBytes = Utilities.base64Decode(data.photoBase64);
    if (photoBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
    }
    const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
      ? data.photoMime
      : 'image/jpeg';
    const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
    const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
    photoFile.setDescription('Workshop Speaker Photo - ' + name);
    photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
    }
    const nextRow = Math.max(sheet.getLastRow() + 1, 2);
    sheet.getRange(nextRow, 1).setValue(new Date());
    sheet.getRange(nextRow, 2).setValue(name);
    sheet.getRange(nextRow, 3).setValue(email);
    sheet.getRange(nextRow, 4).setValue(company);
    sheet.getRange(nextRow, 5).setValue(designation);
    const phoneCell = sheet.getRange(nextRow, 6);
    phoneCell.setNumberFormat('@');
    phoneCell.setValue(whatsapp);
    sheet.getRange(nextRow, 7).setValue(photoLink);
    return jsonResponse({ success: true, photoUrl: photoLink });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X Workshop Speaker Onboarding' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[\\\\/:*?"<>|]/g, '')
    .trim()
    .slice(0, 150);
}
`},{id:`speaker-mail`,shortName:`SpeakerMail.html`,language:`html`,category:`Workshop Speakers`,summary:`Confirmation and itinerary email template for workshop speakers.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Workshop Speaker Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for joining us as a Workshop Speaker for <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. It is the biggest
      <strong>business case competition</strong> designed exclusively for the north-bengal region’s 1st and 2nd-year
      students, organized by <strong>Rajshahi University Business Club</strong>. Your onboarding has been confirmed
      and we are truly honored to have you on board.
    </p>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      The Case at a Glance
    </h3>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      <strong>Becoming Bangladesh's #1 Mobile Financial Platform.</strong> Participants step into the shoes of
      <strong>CASh-E</strong>, the country's #2 MFS player (~27% share, ~90M registered users, backed by Bangladesh
      Post Office), and design a 3 to 5 year strategy to close the gap with <strong>bKash</strong>. The brief is split
      into three connected tasks:
    </p>
    <ol style="margin: 0 0 18px 22px; padding: 0; font-size: 15px; line-height: 1.6; color: #334155;">
      <li style="margin-bottom: 6px;"><strong>App Innovation & Strategic Partnerships:</strong> new features and
        ecosystem plays to drive engagement and retention.</li>
      <li style="margin-bottom: 6px;"><strong>Marketing & Promotional Campaign Design:</strong> at least 6 distinct,
        high-impact campaigns to win urban youth, rural masses, and merchants.</li>
      <li style="margin-bottom: 6px;"><strong>Financial Modeling, Investment, Budget & ROI:</strong> capex,
        partnership costs, campaign budgets, incremental revenue, payback & NPV/IRR.</li>
    </ol>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      Evaluation Criteria (Total: 100)
    </h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="border-collapse: collapse; margin-bottom: 18px; font-family: 'Times New Roman', Times, serif; font-size: 15px;">
      <thead>
        <tr style="background-color: #f58220; color: #ffffff;">
          <th align="left" style="padding: 10px 12px; font-weight: 700;">Criteria</th>
          <th align="right" style="padding: 10px 12px; font-weight: 700;">Marks</th>
        </tr>
      </thead>
      <tbody style="color: #334155;">
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Situation Analysis</td>
          <td align="right" style="padding: 8px 12px;">5</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Problem Identification</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Market Understanding</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Big Idea</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;"><strong>Strategy Formulation (Service Features)</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Integrated Marketing & Communication Plan</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Financial & Timeline</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Feasibility Analysis</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Clarity & Structure of Presentation</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #1e293b; color: #ffffff;">
          <td style="padding: 10px 12px; font-weight: 700;">TOTAL</td>
          <td align="right" style="padding: 10px 12px; font-weight: 700;">100</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-bottom: 18px; font-size: 14px; line-height: 1.6; color: #64748b; font-style: italic;">
      Note: Big Idea, Strategy Formulation, and Integrated Marketing & Communication Plan carry the highest weightage.
      Judges will prioritize originality, strategic coherence, and real-world feasibility.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Our team will be in touch shortly with the schedule and other details. Should you have any questions or specific
      requirements for your session, please feel free to reach out to us.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`},{id:`speaker-direct-mailer`,shortName:`DirectMailSender.js`,language:`javascript`,category:`Workshop Speakers`,summary:`Utility script for sending direct, personalized communication to speakers.`,content:`
const SHEET_ID        = '1FFoDj2tG86HwiL7vvLkIvHYisq9U0IvrtCJr7hYePpM';
const SHEET_NAME      = 'Sheet1';
const PHOTO_FOLDER_ID = '17HSUyBCMstD9QV0cixsfJ6FYCxaP5qZ_';
const MAX_FILE_BYTES  = 10 * 1024 * 1024; 
const WS_EMAIL_SUBJECT   = 'Unravel Hexa: Workshop Speaker Casebook';
const WS_EMAIL_FROM_NAME = 'Unravel Hexa | Workshop';
const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/octet-stream'
];
const WS_EMAIL_HTML = \`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Workshop Speaker Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for joining us as a Workshop Speaker for <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. It is the biggest
      <strong>business case competition</strong> designed exclusively for the north-bengal region's 1st and 2nd-year
      students, organized by <strong>Rajshahi University Business Club</strong>. Your onboarding has been confirmed
      and we are truly honored to have you on board.
    </p>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      The Case at a Glance
    </h3>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      <strong>Becoming Bangladesh's #1 Mobile Financial Platform.</strong> Participants step into the shoes of
      <strong>CASh-E</strong>, the country's #2 MFS player (~27% share, ~90M registered users, backed by Bangladesh
      Post Office), and design a 3 to 5 year strategy to close the gap with <strong>bKash</strong>. The brief is split
      into three connected tasks:
    </p>
    <ol style="margin: 0 0 18px 22px; padding: 0; font-size: 15px; line-height: 1.6; color: #334155;">
      <li style="margin-bottom: 6px;"><strong>App Innovation & Strategic Partnerships:</strong> new features and
        ecosystem plays to drive engagement and retention.</li>
      <li style="margin-bottom: 6px;"><strong>Marketing & Promotional Campaign Design:</strong> at least 6 distinct,
        high-impact campaigns to win urban youth, rural masses, and merchants.</li>
      <li style="margin-bottom: 6px;"><strong>Financial Modeling, Investment, Budget & ROI:</strong> capex,
        partnership costs, campaign budgets, incremental revenue, payback & NPV/IRR.</li>
    </ol>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      Evaluation Criteria (Total: 100)
    </h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="border-collapse: collapse; margin-bottom: 18px; font-family: 'Times New Roman', Times, serif; font-size: 15px;">
      <thead>
        <tr style="background-color: #f58220; color: #ffffff;">
          <th align="left" style="padding: 10px 12px; font-weight: 700;">Criteria</th>
          <th align="right" style="padding: 10px 12px; font-weight: 700;">Marks</th>
        </tr>
      </thead>
      <tbody style="color: #334155;">
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Situation Analysis</td>
          <td align="right" style="padding: 8px 12px;">5</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Problem Identification</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Market Understanding</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Big Idea</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;"><strong>Strategy Formulation (Service Features)</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Integrated Marketing & Communication Plan</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Financial & Timeline</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Feasibility Analysis</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Clarity & Structure of Presentation</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #1e293b; color: #ffffff;">
          <td style="padding: 10px 12px; font-weight: 700;">TOTAL</td>
          <td align="right" style="padding: 10px 12px; font-weight: 700;">100</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-bottom: 18px; font-size: 14px; line-height: 1.6; color: #64748b; font-style: italic;">
      Note: Big Idea, Strategy Formulation, and Integrated Marketing & Communication Plan carry the highest weightage.
      Judges will prioritize originality, strategic coherence, and real-world feasibility.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Our team will be in touch shortly with the schedule and other details. Should you have any questions or specific
      requirements for your session, please feel free to reach out to us.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>\`;
function buildEmailBody(speakerName) {
  return WS_EMAIL_HTML.replace(/{{speaker_name}}/g, speakerName || 'Speaker');
}
function sendCasebookEmail(toEmail, speakerName) {
  const body = buildEmailBody(speakerName);
  GmailApp.sendEmail(toEmail, WS_EMAIL_SUBJECT, '', {
    htmlBody: body,
    name: WS_EMAIL_FROM_NAME
  });
}
function testSendEmail() {
  const TEST_TO = Session.getActiveUser().getEmail() || 'YOUR_EMAIL@example.com';
  sendCasebookEmail(TEST_TO, 'Test Speaker');
  Logger.log('Test email sent to ' + TEST_TO);
}
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const name        = sanitizeText(data.name, 100);
    const email       = sanitizeText(data.email, 150).toLowerCase();
    const company     = sanitizeText(data.company, 150);
    const designation = sanitizeText(data.designation, 150);
    const whatsapp    = sanitizeText(data.whatsapp, 20);
    if (!name || !email || !company || !designation || !whatsapp) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^01\\d{9}$/.test(whatsapp)) {
      return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
    }
    if (!data.photoBase64) {
      return jsonResponse({ success: false, error: 'Missing photo data.' });
    }
    const photoName = sanitizeFileName(data.photoName) || (name + ' - WS_Speaker.jpg');
    if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
      return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
    }
    const photoBytes = Utilities.base64Decode(data.photoBase64);
    if (photoBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
    }
    const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
      ? data.photoMime
      : 'image/jpeg';
    const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
    const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
    photoFile.setDescription('Workshop Speaker Photo - ' + name);
    photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
    }
    const nextRow = Math.max(sheet.getLastRow() + 1, 2);
    sheet.getRange(nextRow, 1).setValue(new Date());
    sheet.getRange(nextRow, 2).setValue(name);
    sheet.getRange(nextRow, 3).setValue(email);
    sheet.getRange(nextRow, 4).setValue(company);
    sheet.getRange(nextRow, 5).setValue(designation);
    const phoneCell = sheet.getRange(nextRow, 6);
    phoneCell.setNumberFormat('@');
    phoneCell.setValue(whatsapp);
    sheet.getRange(nextRow, 7).setValue(photoLink);
    let emailSent = false;
    let emailError = null;
    try {
      sendCasebookEmail(email, name);
      emailSent = true;
      Logger.log('Workshop speaker email sent to ' + email);
    } catch (mailErr) {
      emailError = mailErr && mailErr.message ? mailErr.message : String(mailErr);
      Logger.log('Email dispatch failed for ' + email + ': ' + emailError);
    }
    return jsonResponse({
      success: true,
      photoUrl: photoLink,
      emailSent: emailSent,
      emailError: emailError
    });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) { }
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X Workshop Speaker Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[\\\\/:*?"<>|]/g, '')
    .trim()
    .slice(0, 150);
}
`},{id:`speaker-thank-you`,shortName:`SpeakerThankYou.html`,language:`html`,category:`Workshop Speakers`,summary:`Post-event thank you email template for workshop facilitators.`,content:`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for an Insightful Session | Unravel Hexa</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="/unravel_hexa/logos/hero_logo.png" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      THANK YOU!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Workshop Speaker Appreciation
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for conducting the Online Workshop on <strong>Business Case Solving</strong> for the participants of
      <strong>Xeron IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong>, powered by
      <strong>RAMPS BD</strong>.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your time and expertise added real value to the session, and we appreciate you sharing them with our participants.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We hope to stay in touch and look forward to future collaborations.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best Regards,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="/unravel_hexa/logos/rubclogo.png" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="/unravel_hexa/logos/facebook.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="/unravel_hexa/logos/internet.png"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="/unravel_hexa/logos/email.png" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="/unravel_hexa/logos/phone.png" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`}];function rr({fileCount:e}){return(0,M.jsx)(`div`,{className:`header-section`,children:(0,M.jsxs)(`div`,{className:`header-content`,children:[(0,M.jsx)(`img`,{src:qn,alt:`Unravel Hexa`,className:`header-logo`}),(0,M.jsxs)(`div`,{className:`header-text`,children:[(0,M.jsx)(`h1`,{className:`header-title`,children:`The workflow automated by Jubayer Ahmad in Unravel Hexa`}),(0,M.jsx)(`p`,{className:`header-subtitle`,children:`Registration, submissions, emails, and mailer automations built end-to-end`})]})]})})}function ir({files:e,activeFileId:t,onFileSelect:n,isOpen:r}){let i=e.reduce((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e),{});return(0,M.jsxs)(`aside`,{className:`sidebar ${r?`open`:``}`,children:[(0,M.jsxs)(`div`,{className:`sidebar-header`,children:[(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`path`,{d:`M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z`})}),(0,M.jsx)(`span`,{className:`sidebar-header-text`,children:`Explorer`})]}),(0,M.jsx)(`div`,{className:`file-list`,children:[`Round 1`,`Final Round`,`Judges`,`Mentors`,`Workshop Speakers`].map((e,r)=>{let a=i[e];return!a||a.length===0?null:(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{className:`sidebar-section-label`,style:{marginTop:r===0?0:8},children:e}),a.map(e=>(0,M.jsx)(ar,{file:e,isActive:e.id===t,onClick:()=>n(e.id)},e.id))]},e)})})]})}function ar({file:e,isActive:t,onClick:n}){return(0,M.jsxs)(`div`,{className:`file-item ${t?`active`:``}`,onClick:n,role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&n()},children:[e.language===`html`?(0,M.jsx)(or,{}):(0,M.jsx)(sr,{}),(0,M.jsx)(`span`,{className:`file-name`,children:e.shortName})]})}function or(){return(0,M.jsxs)(`svg`,{className:`file-icon-svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,M.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`4`,fill:`#e44d26`}),(0,M.jsx)(`text`,{x:`12`,y:`16`,textAnchor:`middle`,fontSize:`9`,fontWeight:`800`,fontFamily:`Inter, sans-serif`,fill:`#fff`,children:`</>`})]})}function sr(){return(0,M.jsxs)(`svg`,{className:`file-icon-svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,M.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`4`,fill:`#f0db4f`}),(0,M.jsx)(`text`,{x:`12`,y:`16`,textAnchor:`middle`,fontSize:`10`,fontWeight:`800`,fontFamily:`Inter, sans-serif`,fill:`#323330`,children:`JS`})]})}function cr({file:e}){return e?(0,M.jsxs)(`div`,{className:`summary-bar`,children:[(0,M.jsx)(`div`,{className:`summary-icon`,children:(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,M.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12`,y2:`12`}),(0,M.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12.01`,y2:`8`})]})}),(0,M.jsx)(`p`,{className:`summary-text`,children:e.summary})]},e.id):null}function lr({file:e,viewMode:t,onViewChange:n,isHtml:r}){return e?(0,M.jsxs)(`div`,{className:`toolbar`,children:[(0,M.jsxs)(`div`,{className:`toolbar-left`,children:[(0,M.jsx)(`span`,{className:`toolbar-filename`,children:e.shortName}),(0,M.jsx)(`span`,{className:`toolbar-lang`,children:e.language})]}),(0,M.jsx)(`div`,{className:`toolbar-right`,children:r&&(0,M.jsxs)(`div`,{className:`view-toggle`,children:[(0,M.jsxs)(`button`,{className:`view-toggle-btn ${t===`code`?`active`:``}`,onClick:()=>n(`code`),children:[(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`polyline`,{points:`16 18 22 12 16 6`}),(0,M.jsx)(`polyline`,{points:`8 6 2 12 8 18`})]}),`Code`]}),(0,M.jsxs)(`button`,{className:`view-toggle-btn ${t===`preview`?`active`:``}`,onClick:()=>n(`preview`),children:[(0,M.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),`Preview`]})]})})]}):null}var ur=c(o(((e,t)=>{var n=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\u00a0/g,` `)},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){n||={};var r,a;switch(i.util.type(t)){case`Object`:if(a=i.util.objId(t),n[a])return n[a];for(var o in r={},n[a]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case`Array`:return a=i.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(t,i){r[i]=e(t,n)}),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return`none`},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,`gi`),``),e.classList.add(`language-`+n)},currentScript:function(){if(typeof document>`u`)return null;if(document.currentScript&&document.currentScript.tagName===`SCRIPT`)return document.currentScript;try{throw Error()}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName(`script`);for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r=`no-`+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r||=i.languages;var a=r[e],o={};for(var s in a)if(a.hasOwnProperty(s)){if(s==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(s)||(o[s]=a[s])}var l=r[e];return r[e]=o,i.languages.DFS(i.languages,function(t,n){n===l&&t!=e&&(this[t]=o)}),o},DFS:function e(t,n,r,a){a||={};var o=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],r||s);var c=t[s],l=i.util.type(c);l===`Object`&&!a[o(c)]?(a[o(c)]=!0,e(c,n,null,a)):l===`Array`&&!a[o(c)]&&(a[o(c)]=!0,e(c,n,s,a))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:`code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code`};i.hooks.run(`before-highlightall`,r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run(`before-all-elements-highlight`,r);for(var a=0,o;o=r.elements[a++];)i.highlightElement(o,t===!0,r.callback)},highlightElement:function(t,n,r){var a=i.util.getLanguage(t),o=i.languages[a];i.util.setLanguage(t,a);var s=t.parentElement;s&&s.nodeName.toLowerCase()===`pre`&&i.util.setLanguage(s,a);var c={element:t,language:a,grammar:o,code:t.textContent};function l(e){c.highlightedCode=e,i.hooks.run(`before-insert`,c),c.element.innerHTML=c.highlightedCode,i.hooks.run(`after-highlight`,c),i.hooks.run(`complete`,c),r&&r.call(c.element)}if(i.hooks.run(`before-sanity-check`,c),s=c.element.parentElement,s&&s.nodeName.toLowerCase()===`pre`&&!s.hasAttribute(`tabindex`)&&s.setAttribute(`tabindex`,`0`),!c.code){i.hooks.run(`complete`,c),r&&r.call(c.element);return}if(i.hooks.run(`before-highlight`,c),!c.grammar){l(i.util.encode(c.code));return}if(n&&e.Worker){var u=new Worker(i.filename);u.onmessage=function(e){l(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(i.highlight(c.code,c.grammar,c.language))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run(`before-tokenize`,r),!r.grammar)throw Error(`The language "`+r.language+`" has no grammar.`);return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run(`after-tokenize`,r),a.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return l(i,i.head,e),s(e,i,t,i.head,0),d(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(!(!n||!n.length))for(var r=0,a;a=n[r++];)a(t)}},Token:a};e.Prism=i;function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||``).length|0}a.stringify=function e(t,n){if(typeof t==`string`)return t;if(Array.isArray(t)){var r=``;return t.forEach(function(t){r+=e(t,n)}),r}var a={type:t.type,content:e(t.content,n),tag:`span`,classes:[`token`,t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(a.classes,o):a.classes.push(o)),i.hooks.run(`wrap`,a);var s=``;for(var c in a.attributes)s+=` `+c+`="`+(a.attributes[c]||``).replace(/"/g,`&quot;`)+`"`;return`<`+a.tag+` class="`+a.classes.join(` `)+`"`+s+`>`+a.content+`</`+a.tag+`>`};function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var a=i[1].length;i.index+=a,i[0]=i[0].slice(a)}return i}function s(e,t,n,r,c,d){for(var f in n)if(!(!n.hasOwnProperty(f)||!n[f])){var p=n[f];p=Array.isArray(p)?p:[p];for(var m=0;m<p.length;++m){if(d&&d.cause==f+`,`+m)return;var h=p[m],g=h.inside,_=!!h.lookbehind,v=!!h.greedy,y=h.alias;if(v&&!h.pattern.global){var b=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,b+`g`)}for(var x=h.pattern||h,S=r.next,C=c;S!==t.tail&&!(d&&C>=d.reach);C+=S.value.length,S=S.next){var w=S.value;if(t.length>e.length)return;if(!(w instanceof a)){var T=1,E;if(v){if(E=o(x,C,e,_),!E||E.index>=e.length)break;var ee=E.index,D=E.index+E[0].length,te=C;for(te+=S.value.length;ee>=te;)S=S.next,te+=S.value.length;if(te-=S.value.length,C=te,S.value instanceof a)continue;for(var ne=S;ne!==t.tail&&(te<D||typeof ne.value==`string`);ne=ne.next)T++,te+=ne.value.length;T--,w=e.slice(C,te),E.index-=C}else if(E=o(x,0,w,_),!E)continue;var ee=E.index,re=E[0],ie=w.slice(0,ee),ae=w.slice(ee+re.length),oe=C+w.length;d&&oe>d.reach&&(d.reach=oe);var se=S.prev;ie&&(se=l(t,se,ie),C+=ie.length),u(t,se,T);var O=new a(f,g?i.tokenize(re,g):re,y,re);if(S=l(t,se,O),ae&&l(t,S,ae),T>1){var k={cause:f+`,`+m,reach:oe};s(e,t,n,S.prev,C,k),d&&k.reach>d.reach&&(d.reach=k.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function u(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function d(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener(`message`,function(t){var n=JSON.parse(t.data),r=n.language,a=n.code,o=n.immediateClose;e.postMessage(i.highlight(a,i.languages[r],r)),o&&e.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute(`data-manual`)&&(i.manual=!0));function p(){i.manual||i.highlightAll()}if(!i.manual){var m=document.readyState;m===`loading`||m===`interactive`&&f&&f.defer?document.addEventListener(`DOMContentLoaded`,p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return i}(typeof window<`u`?window:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?self:{});t!==void 0&&t.exports&&(t.exports=n),typeof global<`u`&&(global.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside[`attr-value`].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside[`internal-subset`].inside=n.languages.markup,n.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var r={};r[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i[`language-`+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var a={};a[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore(`markup`,`cdata`,a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(e,t){n.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend(`markup`,{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend(`clike`,{"class-name":[n.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),n.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),n.languages.markup&&(n.languages.markup.tag.addInlined(`script`,`javascript`),n.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),n.languages.js=n.languages.javascript,(function(){if(n===void 0||typeof document>`u`)return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=`Loading…`,t=function(e,t){return`✖ Error `+e+` while fetching file: `+t},r=`✖ Error: File does not exist or is empty`,i={js:`javascript`,py:`python`,rb:`ruby`,ps1:`powershell`,psm1:`powershell`,sh:`bash`,bat:`batch`,h:`c`,tex:`latex`},a=`data-src-status`,o=`loading`,s=`loaded`,c=`failed`,l=`pre[data-src]:not([`+a+`="`+s+`"]):not([`+a+`="`+o+`"])`;function u(e,n,i){var a=new XMLHttpRequest;a.open(`GET`,e,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?n(a.responseText):a.status>=400?i(t(a.status,a.statusText)):i(r))},a.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||``);if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}n.hooks.add(`before-highlightall`,function(e){e.selector+=`, `+l}),n.hooks.add(`before-sanity-check`,function(t){var r=t.element;if(r.matches(l)){t.code=``,r.setAttribute(a,o);var f=r.appendChild(document.createElement(`CODE`));f.textContent=e;var p=r.getAttribute(`data-src`),m=t.language;if(m===`none`){var h=(/\.(\w+)$/.exec(p)||[,`none`])[1];m=i[h]||h}n.util.setLanguage(f,m),n.util.setLanguage(r,m);var g=n.plugins.autoloader;g&&g.loadLanguages(m),u(p,function(e){r.setAttribute(a,s);var t=d(r.getAttribute(`data-range`));if(t){var i=e.split(/\r\n?|\n/g),o=t[0],c=t[1]==null?i.length:t[1];o<0&&(o+=i.length),o=Math.max(0,Math.min(o-1,i.length)),c<0&&(c+=i.length),c=Math.max(0,Math.min(c,i.length)),e=i.slice(o,c).join(`
`),r.hasAttribute(`data-start`)||r.setAttribute(`data-start`,String(o+1))}f.textContent=e,n.highlightElement(f)},function(e){r.setAttribute(a,c),f.textContent=e})}}),n.plugins.fileHighlight={highlight:function(e){for(var t=(e||document).querySelectorAll(l),r=0,i;i=t[r++];)n.highlightElement(i)}};var f=!1;n.fileHighlight=function(){f||=(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}})()}))(),1);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:`attr-equals`},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:`named-entity`},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside[`attr-value`].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside[`internal-subset`].inside=Prism.languages.markup,Prism.hooks.add(`wrap`,function(e){e.type===`entity`&&(e.attributes.title=e.content.replace(/&amp;/,`&`))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n[`language-`+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r[`language-`+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var i={};i[e]={pattern:RegExp(`(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)`.replace(/__/g,function(){return e}),`i`),lookbehind:!0,greedy:!0,inside:r},Prism.languages.insertBefore(`markup`,`cdata`,i)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside[`special-attr`].push({pattern:RegExp(`(^|["'\\s])(?:`+e+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,`i`),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,`language-`+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend(`markup`,{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,Prism.languages.javascript=Prism.languages.extend(`clike`,{"class-name":[Prism.languages.clike[`class-name`],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(`(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])`),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript[`class-name`][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore(`javascript`,`keyword`,{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:`function`},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore(`javascript`,`string`,{hashbang:{pattern:/^#!.*/,greedy:!0,alias:`comment`},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:`string`},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:`punctuation`},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:`property`}}),Prism.languages.insertBefore(`javascript`,`operator`,{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:`property`}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined(`script`,`javascript`),Prism.languages.markup.tag.addAttribute(`on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)`,`javascript`)),Prism.languages.js=Prism.languages.javascript,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+`)*?(?:;|(?=\\s*\\{))`),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:`selector`},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp(`\\burl\\((?:`+t.source+`|(?:[^\\\\\\r\\n()"']|\\\\[\\s\\S])*)\\)`,`i`),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp(`^`+t.source+`$`),alias:`url`}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+`)*(?=\\s*\\{)`),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined(`style`,`css`),n.tag.addAttribute(`style`,`css`))})(Prism);function dr({file:e}){let t=(0,x.useRef)(null),n=(0,x.useMemo)(()=>e?.content?e.content.split(`
`):[],[e]);return(0,x.useEffect)(()=>{t.current&&(t.current.scrollTop=0)},[e.id]),(0,M.jsx)(`div`,{className:`code-viewer`,ref:t,children:(0,M.jsx)(`div`,{className:`code-block`,children:(0,x.useMemo)(()=>{let t=e.language===`html`?ur.default.languages.markup:ur.default.languages.javascript,r=e.language===`html`?`markup`:`javascript`;return n.map(e=>ur.default.highlight(e||` `,t,r))},[n,e.language]).map((e,t)=>(0,M.jsxs)(`div`,{className:`code-line`,children:[(0,M.jsx)(`span`,{className:`line-number`,children:t+1}),(0,M.jsx)(`span`,{className:`line-content`,dangerouslySetInnerHTML:{__html:e}})]},t))})})}function fr({file:e}){return(0,M.jsx)(`iframe`,{className:`preview-frame`,srcDoc:(0,x.useMemo)(()=>e?.content?e.content:``,[e]),title:`Preview of ${e.shortName}`,sandbox:`allow-scripts allow-same-origin`})}function pr({fileCount:e}){return(0,M.jsxs)(`div`,{className:`footer-section`,children:[(0,M.jsx)(`div`,{className:`footer-left`,children:(0,M.jsx)(`a`,{href:`https://www.linkedin.com/in/ahmadjubayer`,target:`_blank`,rel:`noopener noreferrer`,className:`footer-link`,children:`Jubayer Ahmad \xA0|\xA0 IBA, RU`})}),(0,M.jsxs)(`div`,{className:`footer-right`,children:[(0,M.jsxs)(`div`,{className:`footer-stat`,children:[(0,M.jsx)(`span`,{className:`footer-stat-dot`}),e,` files`]}),(0,M.jsx)(`span`,{children:`Unravel Hexa`})]})]})}function mr(){let[e,t]=(0,x.useState)(nr[0].id),[n,r]=(0,x.useState)(nr[0].language===`html`?`preview`:`code`),[i,a]=(0,x.useState)(typeof window<`u`&&window.innerWidth<=768),o=nr.find(t=>t.id===e),s=o?.language===`html`,c=(0,x.useCallback)(e=>{let n=nr.find(t=>t.id===e);t(e),r(n?.language===`html`?`preview`:`code`),a(!1)},[]),l=(0,x.useCallback)(e=>{r(e)},[]);return(0,M.jsxs)(`div`,{className:`app`,children:[(0,M.jsx)(rr,{fileCount:nr.length}),(0,M.jsxs)(`div`,{className:`ide-layout`,children:[(0,M.jsx)(`div`,{className:`sidebar-overlay ${i?`visible`:``}`,onClick:()=>a(!1)}),(0,M.jsx)(ir,{files:nr,activeFileId:e,onFileSelect:c,isOpen:i}),(0,M.jsxs)(`div`,{className:`main-content`,children:[(0,M.jsx)(cr,{file:o}),(0,M.jsx)(lr,{file:o,viewMode:n,onViewChange:l,isHtml:s}),(0,M.jsx)(`div`,{className:`code-viewer-wrapper`,children:n===`code`?(0,M.jsx)(dr,{file:o},o.id):(0,M.jsx)(fr,{file:o},o.id+`-preview`)})]})]}),(0,M.jsx)(pr,{fileCount:nr.length}),(0,M.jsxs)(On,{to:`/`,className:`back-to-workflow-btn`,id:`back-to-workflow`,children:[(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`polyline`,{points:`15 18 9 12 15 6`})}),(0,M.jsx)(`span`,{children:`Workflow`})]}),(0,M.jsx)(`button`,{className:`mobile-sidebar-toggle`,onClick:()=>a(!i),"aria-label":`Toggle file explorer`,children:(0,M.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:i?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,M.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,M.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,M.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]})})})]})}function hr(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(er,{}),(0,M.jsx)(tr,{})]})}function gr(){return(0,M.jsxs)(Lt,{children:[(0,M.jsx)(Ft,{path:`/`,element:(0,M.jsx)(hr,{})}),(0,M.jsx)(Ft,{path:`/IDE`,element:(0,M.jsx)(mr,{})})]})}(0,Kn.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(x.StrictMode,{children:(0,M.jsx)(Tn,{basename:`/unravel_hexa`,children:(0,M.jsx)(gr,{})})}));