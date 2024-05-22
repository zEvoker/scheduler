var yI=Object.defineProperty;var vI=(t,e,n)=>e in t?yI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var B=(t,e,n)=>(vI(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},qu={},P0={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),_I=Symbol.for("react.portal"),wI=Symbol.for("react.fragment"),EI=Symbol.for("react.strict_mode"),TI=Symbol.for("react.profiler"),II=Symbol.for("react.provider"),kI=Symbol.for("react.context"),SI=Symbol.for("react.forward_ref"),AI=Symbol.for("react.suspense"),PI=Symbol.for("react.memo"),bI=Symbol.for("react.lazy"),Sg=Symbol.iterator;function CI(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,R0={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=R0,this.updater=n||b0}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function x0(){}x0.prototype=Cs.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=R0,this.updater=n||b0}var Pd=Ad.prototype=new x0;Pd.constructor=Ad;C0(Pd,Cs.prototype);Pd.isPureReactComponent=!0;var Ag=Array.isArray,N0=Object.prototype.hasOwnProperty,bd={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)N0.call(e,r)&&!O0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ga,type:t,key:s,ref:o,props:i,_owner:bd.current}}function RI(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function xI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pg=/\/+/g;function nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xI(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case _I:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nh(o,0):r,Ag(i)?(n="",t!=null&&(n=t.replace(Pg,"$&/")+"/"),Rl(i,e,n,"",function(c){return c})):i!=null&&(Cd(i)&&(i=RI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ag(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+nh(s,l);o+=Rl(s,e,n,u,i)}else if(u=CI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+nh(s,l++),o+=Rl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},xl={transition:null},OI={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:bd};re.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!Cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Cs;re.Fragment=wI;re.Profiler=TI;re.PureComponent=Ad;re.StrictMode=EI;re.Suspense=AI;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=C0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)N0.call(e,u)&&!O0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ga,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:kI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:II,_context:t},t.Consumer=t};re.createElement=D0;re.createFactory=function(t){var e=D0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:SI,render:t}};re.isValidElement=Cd;re.lazy=function(t){return{$$typeof:bI,_payload:{_status:-1,_result:t},_init:NI}};re.memo=function(t,e){return{$$typeof:PI,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return Tt.current.useCallback(t,e)};re.useContext=function(t){return Tt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Tt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Tt.current.useEffect(t,e)};re.useId=function(){return Tt.current.useId()};re.useImperativeHandle=function(t,e,n){return Tt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Tt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Tt.current.useReducer(t,e,n)};re.useRef=function(t){return Tt.current.useRef(t)};re.useState=function(t){return Tt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Tt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Tt.current.useTransition()};re.version="18.2.0";P0.exports=re;var Ve=P0.exports;const Rd=S0(Ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DI=Ve,MI=Symbol.for("react.element"),LI=Symbol.for("react.fragment"),VI=Object.prototype.hasOwnProperty,FI=DI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UI={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:MI,type:t,key:s,ref:o,props:i,_owner:FI.current}}qu.Fragment=LI;qu.jsx=M0;qu.jsxs=M0;A0.exports=qu;var j=A0.exports,Hh={},L0={exports:{}},Mt={},V0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var ee=z.length;z.push(X);e:for(;0<ee;){var ke=ee-1>>>1,de=z[ke];if(0<i(de,X))z[ke]=X,z[ee]=de,ee=ke;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],ee=z.pop();if(ee!==X){z[0]=ee;e:for(var ke=0,de=z.length,Me=de>>>1;ke<Me;){var Tn=2*(ke+1)-1,In=z[Tn],kn=Tn+1,sn=z[kn];if(0>i(In,ee))kn<de&&0>i(sn,In)?(z[ke]=sn,z[kn]=ee,ke=kn):(z[ke]=In,z[Tn]=ee,ke=Tn);else if(kn<de&&0>i(sn,ee))z[ke]=sn,z[kn]=ee,ke=kn;else break e}}return X}function i(z,X){var ee=z.sortIndex-X.sortIndex;return ee!==0?ee:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,y=3,T=!1,b=!1,C=!1,A=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=z)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function O(z){if(C=!1,I(z),!b)if(n(u)!==null)b=!0,Us(D);else{var X=n(c);X!==null&&En(O,X.startTime-z)}}function D(z,X){b=!1,C&&(C=!1,E(g),g=-1),T=!0;var ee=y;try{for(I(X),p=n(u);p!==null&&(!(p.expirationTime>X)||z&&!P());){var ke=p.callback;if(typeof ke=="function"){p.callback=null,y=p.priorityLevel;var de=ke(p.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),I(X)}else r(u);p=n(u)}if(p!==null)var Me=!0;else{var Tn=n(c);Tn!==null&&En(O,Tn.startTime-X),Me=!1}return Me}finally{p=null,y=ee,T=!1}}var F=!1,_=null,g=-1,w=5,k=-1;function P(){return!(t.unstable_now()-k<w)}function x(){if(_!==null){var z=t.unstable_now();k=z;var X=!0;try{X=_(!0,z)}finally{X?S():(F=!1,_=null)}}else F=!1}var S;if(typeof v=="function")S=function(){v(x)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,jr=Ft.port2;Ft.port1.onmessage=x,S=function(){jr.postMessage(null)}}else S=function(){A(x,0)};function Us(z){_=z,F||(F=!0,S())}function En(z,X){g=A(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){b||T||(b=!0,Us(D))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var ee=y;y=X;try{return z()}finally{y=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=y;y=z;try{return X()}finally{y=ee}},t.unstable_scheduleCallback=function(z,X,ee){var ke=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ke+ee:ke):ee=ke,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,z={id:d++,callback:X,priorityLevel:z,startTime:ee,expirationTime:de,sortIndex:-1},ee>ke?(z.sortIndex=ee,e(c,z),n(u)===null&&z===n(c)&&(C?(E(g),g=-1):C=!0,En(O,ee-ke))):(z.sortIndex=de,e(u,z),b||T||(b=!0,Us(D))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var X=y;return function(){var ee=y;y=X;try{return z.apply(this,arguments)}finally{y=ee}}}})(F0);V0.exports=F0;var jI=V0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=Ve,Dt=jI;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,Uo={};function _i(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(Uo[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qh=Object.prototype.hasOwnProperty,zI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Cg={};function BI(t){return qh.call(Cg,t)?!0:qh.call(bg,t)?!1:zI.test(t)?Cg[t]=!0:(bg[t]=!0,!1)}function $I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function WI(t,e,n,r){if(e===null||typeof e>"u"||$I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Nd);it[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Nd);it[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Nd);it[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(WI(e,n,i,r)&&(n=null),r||i===null?BI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Mi=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Yh=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Kh=Symbol.for("react.suspense_list"),Ld=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),Rg=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,rh;function ho(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var ih=!1;function sh(t,e){if(!t||ih)return"";ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function HI(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=sh(t.type,!1),t;case 11:return t=sh(t.type.render,!1),t;case 1:return t=sh(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case Mi:return"Portal";case Yh:return"Profiler";case Dd:return"StrictMode";case Gh:return"Suspense";case Kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case Md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ld:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function qI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YI(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=YI(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xh(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function Jh(t,e){q0(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zh(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zh(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(fo(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function Y0(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,K0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GI=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){GI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function Q0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function X0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Q0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KI=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(t,e){if(e){if(KI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var of=null,Ji=null,Zi=null;function Mg(t){if(t=_a(t)){if(typeof of!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Xu(e),of(t.stateNode,t.type,e))}}function J0(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function Z0(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function e_(t,e){return t(e)}function t_(){}var oh=!1;function n_(t,e,n){if(oh)return t(e,n);oh=!0;try{return e_(t,e,n)}finally{oh=!1,(Ji!==null||Zi!==null)&&(t_(),Z0())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var af=!1;if(Vn)try{var to={};Object.defineProperty(to,"passive",{get:function(){af=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{af=!1}function QI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ko=!1,eu=null,tu=!1,lf=null,XI={onError:function(t){ko=!0,eu=t}};function JI(t,e,n,r,i,s,o,l,u){ko=!1,eu=null,QI.apply(XI,arguments)}function ZI(t,e,n,r,i,s,o,l,u){if(JI.apply(this,arguments),ko){if(ko){var c=eu;ko=!1,eu=null}else throw Error(V(198));tu||(tu=!0,lf=c)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lg(t){if(wi(t)!==t)throw Error(V(188))}function ek(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Lg(i),t;if(s===r)return Lg(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function i_(t){return t=ek(t),t!==null?s_(t):null}function s_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s_(t);if(e!==null)return e;t=t.sibling}return null}var o_=Dt.unstable_scheduleCallback,Vg=Dt.unstable_cancelCallback,tk=Dt.unstable_shouldYield,nk=Dt.unstable_requestPaint,Le=Dt.unstable_now,rk=Dt.unstable_getCurrentPriorityLevel,Fd=Dt.unstable_ImmediatePriority,a_=Dt.unstable_UserBlockingPriority,nu=Dt.unstable_NormalPriority,ik=Dt.unstable_LowPriority,l_=Dt.unstable_IdlePriority,Yu=null,dn=null;function sk(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Yu,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:lk,ok=Math.log,ak=Math.LN2;function lk(t){return t>>>=0,t===0?32:31-(ok(t)/ak|0)|0}var rl=64,il=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=po(l):(s&=o,s!==0&&(r=po(s)))}else o=n&~i,o!==0?r=po(o):s!==0&&(r=po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function uk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ck(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=uk(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u_(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function hk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function c_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h_,jd,f_,d_,p_,cf=!1,sl=[],gr=null,yr=null,vr=null,Bo=new Map,$o=new Map,or=[],fk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function no(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_a(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dk(t,e,n,r,i){switch(e){case"focusin":return gr=no(gr,t,e,n,r,i),!0;case"dragenter":return yr=no(yr,t,e,n,r,i),!0;case"mouseover":return vr=no(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,no(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$o.set(s,no($o.get(s)||null,t,e,n,r,i)),!0}return!1}function m_(t){var e=Kr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=r_(n),e!==null){t.blockedOn=e,p_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return e=_a(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ug(t,e,n){Nl(t)&&n.delete(e)}function pk(){cf=!1,gr!==null&&Nl(gr)&&(gr=null),yr!==null&&Nl(yr)&&(yr=null),vr!==null&&Nl(vr)&&(vr=null),Bo.forEach(Ug),$o.forEach(Ug)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,cf||(cf=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,pk)))}function Wo(t){function e(i){return ro(i,t)}if(0<sl.length){ro(sl[0],t);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&ro(gr,t),yr!==null&&ro(yr,t),vr!==null&&ro(vr,t),Bo.forEach(e),$o.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)m_(n),n.blockedOn===null&&or.shift()}var es=Gn.ReactCurrentBatchConfig,iu=!0;function mk(t,e,n,r){var i=fe,s=es.transition;es.transition=null;try{fe=1,zd(t,e,n,r)}finally{fe=i,es.transition=s}}function gk(t,e,n,r){var i=fe,s=es.transition;es.transition=null;try{fe=4,zd(t,e,n,r)}finally{fe=i,es.transition=s}}function zd(t,e,n,r){if(iu){var i=hf(t,e,n,r);if(i===null)yh(t,e,r,su,n),Fg(t,r);else if(dk(i,t,e,n,r))r.stopPropagation();else if(Fg(t,r),e&4&&-1<fk.indexOf(t)){for(;i!==null;){var s=_a(i);if(s!==null&&h_(s),s=hf(t,e,n,r),s===null&&yh(t,e,r,su,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yh(t,e,r,null,n)}}var su=null;function hf(t,e,n,r){if(su=null,t=Vd(r),t=Kr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function g_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rk()){case Fd:return 1;case a_:return 4;case nu:case ik:return 16;case l_:return 536870912;default:return 16}default:return 16}}var fr=null,Bd=null,Ol=null;function y_(){if(Ol)return Ol;var t,e=Bd,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ol=i.slice(t,1<r?1-r:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function jg(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:jg,this.isPropagationStopped=jg,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=Lt(Rs),va=be({},Rs,{view:0,detail:0}),yk=Lt(va),lh,uh,io,Gu=be({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(lh=t.screenX-io.screenX,uh=t.screenY-io.screenY):uh=lh=0,io=t),lh)},movementY:function(t){return"movementY"in t?t.movementY:uh}}),zg=Lt(Gu),vk=be({},Gu,{dataTransfer:0}),_k=Lt(vk),wk=be({},va,{relatedTarget:0}),ch=Lt(wk),Ek=be({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Tk=Lt(Ek),Ik=be({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kk=Lt(Ik),Sk=be({},Rs,{data:0}),Bg=Lt(Sk),Ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ck(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bk[t])?!!e[t]:!1}function Wd(){return Ck}var Rk=be({},va,{key:function(t){if(t.key){var e=Ak[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xk=Lt(Rk),Nk=be({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=Lt(Nk),Ok=be({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),Dk=Lt(Ok),Mk=be({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lk=Lt(Mk),Vk=be({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fk=Lt(Vk),Uk=[9,13,27,32],Hd=Vn&&"CompositionEvent"in window,So=null;Vn&&"documentMode"in document&&(So=document.documentMode);var jk=Vn&&"TextEvent"in window&&!So,v_=Vn&&(!Hd||So&&8<So&&11>=So),Wg=" ",Hg=!1;function __(t,e){switch(t){case"keyup":return Uk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function zk(t,e){switch(t){case"compositionend":return w_(e);case"keypress":return e.which!==32?null:(Hg=!0,Wg);case"textInput":return t=e.data,t===Wg&&Hg?null:t;default:return null}}function Bk(t,e){if(Vi)return t==="compositionend"||!Hd&&__(t,e)?(t=y_(),Ol=Bd=fr=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var $k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$k[t.type]:e==="textarea"}function E_(t,e,n,r){J0(r),e=ou(e,"onChange"),0<e.length&&(n=new $d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,Ho=null;function Wk(t){N_(t,0)}function Ku(t){var e=ji(t);if(H0(e))return t}function Hk(t,e){if(t==="change")return e}var T_=!1;if(Vn){var hh;if(Vn){var fh="oninput"in document;if(!fh){var Yg=document.createElement("div");Yg.setAttribute("oninput","return;"),fh=typeof Yg.oninput=="function"}hh=fh}else hh=!1;T_=hh&&(!document.documentMode||9<document.documentMode)}function Gg(){Ao&&(Ao.detachEvent("onpropertychange",I_),Ho=Ao=null)}function I_(t){if(t.propertyName==="value"&&Ku(Ho)){var e=[];E_(e,Ho,t,Vd(t)),n_(Wk,e)}}function qk(t,e,n){t==="focusin"?(Gg(),Ao=e,Ho=n,Ao.attachEvent("onpropertychange",I_)):t==="focusout"&&Gg()}function Yk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ku(Ho)}function Gk(t,e){if(t==="click")return Ku(e)}function Kk(t,e){if(t==="input"||t==="change")return Ku(e)}function Qk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:Qk;function qo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qh.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function Kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qg(t,e){var n=Kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kg(n)}}function k_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xk(t){var e=S_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k_(n.ownerDocument.documentElement,n)){if(r!==null&&qd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qg(n,s);var o=Qg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jk=Vn&&"documentMode"in document&&11>=document.documentMode,Fi=null,ff=null,Po=null,df=!1;function Xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||Fi==null||Fi!==Zl(r)||(r=Fi,"selectionStart"in r&&qd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&qo(Po,r)||(Po=r,r=ou(ff,"onSelect"),0<r.length&&(e=new $d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},dh={},A_={};Vn&&(A_=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Qu(t){if(dh[t])return dh[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A_)return dh[t]=e[n];return t}var P_=Qu("animationend"),b_=Qu("animationiteration"),C_=Qu("animationstart"),R_=Qu("transitionend"),x_=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){x_.set(t,e),_i(e,[t])}for(var ph=0;ph<Jg.length;ph++){var mh=Jg[ph],Zk=mh.toLowerCase(),eS=mh[0].toUpperCase()+mh.slice(1);Mr(Zk,"on"+eS)}Mr(P_,"onAnimationEnd");Mr(b_,"onAnimationIteration");Mr(C_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(R_,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Zg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZI(r,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zg(i,l,c),s=u}}}if(tu)throw t=lf,tu=!1,lf=null,t}function _e(t,e){var n=e[vf];n===void 0&&(n=e[vf]=new Set);var r=t+"__bubble";n.has(r)||(O_(e,t,2,!1),n.add(r))}function gh(t,e,n){var r=0;e&&(r|=4),O_(n,t,r,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[ll]){t[ll]=!0,j0.forEach(function(n){n!=="selectionchange"&&(tS.has(n)||gh(n,!1,t),gh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,gh("selectionchange",!1,e))}}function O_(t,e,n,r){switch(g_(e)){case 1:var i=mk;break;case 4:i=gk;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}n_(function(){var c=s,d=Vd(n),p=[];e:{var y=x_.get(t);if(y!==void 0){var T=$d,b=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":T=xk;break;case"focusin":b="focus",T=ch;break;case"focusout":b="blur",T=ch;break;case"beforeblur":case"afterblur":T=ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=_k;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Dk;break;case P_:case b_:case C_:T=Tk;break;case R_:T=Lk;break;case"scroll":T=yk;break;case"wheel":T=Fk;break;case"copy":case"cut":case"paste":T=kk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=$g}var C=(e&4)!==0,A=!C&&t==="scroll",E=C?y!==null?y+"Capture":null:y;C=[];for(var v=c,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,E!==null&&(O=zo(v,E),O!=null&&C.push(Go(v,O,I)))),A)break;v=v.return}0<C.length&&(y=new T(y,b,null,n,d),p.push({event:y,listeners:C}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",y&&n!==sf&&(b=n.relatedTarget||n.fromElement)&&(Kr(b)||b[Fn]))break e;if((T||y)&&(y=d.window===d?d:(y=d.ownerDocument)?y.defaultView||y.parentWindow:window,T?(b=n.relatedTarget||n.toElement,T=c,b=b?Kr(b):null,b!==null&&(A=wi(b),b!==A||b.tag!==5&&b.tag!==6)&&(b=null)):(T=null,b=c),T!==b)){if(C=zg,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=$g,O="onPointerLeave",E="onPointerEnter",v="pointer"),A=T==null?y:ji(T),I=b==null?y:ji(b),y=new C(O,v+"leave",T,n,d),y.target=A,y.relatedTarget=I,O=null,Kr(d)===c&&(C=new C(E,v+"enter",b,n,d),C.target=I,C.relatedTarget=A,O=C),A=O,T&&b)t:{for(C=T,E=b,v=0,I=C;I;I=Ri(I))v++;for(I=0,O=E;O;O=Ri(O))I++;for(;0<v-I;)C=Ri(C),v--;for(;0<I-v;)E=Ri(E),I--;for(;v--;){if(C===E||E!==null&&C===E.alternate)break t;C=Ri(C),E=Ri(E)}C=null}else C=null;T!==null&&ey(p,y,T,C,!1),b!==null&&A!==null&&ey(p,A,b,C,!0)}}e:{if(y=c?ji(c):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var D=Hk;else if(qg(y))if(T_)D=Kk;else{D=Yk;var F=qk}else(T=y.nodeName)&&T.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=Gk);if(D&&(D=D(t,c))){E_(p,D,n,d);break e}F&&F(t,y,c),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Zh(y,"number",y.value)}switch(F=c?ji(c):window,t){case"focusin":(qg(F)||F.contentEditable==="true")&&(Fi=F,ff=c,Po=null);break;case"focusout":Po=ff=Fi=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,Xg(p,n,d);break;case"selectionchange":if(Jk)break;case"keydown":case"keyup":Xg(p,n,d)}var _;if(Hd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Vi?__(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(v_&&n.locale!=="ko"&&(Vi||g!=="onCompositionStart"?g==="onCompositionEnd"&&Vi&&(_=y_()):(fr=d,Bd="value"in fr?fr.value:fr.textContent,Vi=!0)),F=ou(c,g),0<F.length&&(g=new Bg(g,t,null,n,d),p.push({event:g,listeners:F}),_?g.data=_:(_=w_(n),_!==null&&(g.data=_)))),(_=jk?zk(t,n):Bk(t,n))&&(c=ou(c,"onBeforeInput"),0<c.length&&(d=new Bg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}N_(p,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(t,n),s!=null&&r.unshift(Go(t,s,i)),s=zo(t,e),s!=null&&r.push(Go(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=zo(n,s),u!=null&&o.unshift(Go(n,u,l))):i||(u=zo(n,s),u!=null&&o.push(Go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(rS,"")}function ul(t,e,n){if(e=ty(e),ty(t)!==e&&n)throw Error(V(425))}function au(){}var pf=null,mf=null;function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(t){return ny.resolve(null).then(t).catch(oS)}:yf;function oS(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ry(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),ln="__reactFiber$"+xs,Ko="__reactProps$"+xs,Fn="__reactContainer$"+xs,vf="__reactEvents$"+xs,aS="__reactListeners$"+xs,lS="__reactHandles$"+xs;function Kr(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ry(t);t!==null;){if(n=t[ln])return n;t=ry(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[ln]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Xu(t){return t[Ko]||null}var _f=[],zi=-1;function Lr(t){return{current:t}}function Ee(t){0>zi||(t.current=_f[zi],_f[zi]=null,zi--)}function ge(t,e){zi++,_f[zi]=t.current,t.current=e}var br={},gt=Lr(br),At=Lr(!1),si=br;function cs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function lu(){Ee(At),Ee(gt)}function iy(t,e,n){if(gt.current!==br)throw Error(V(168));ge(gt,e),ge(At,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,qI(t)||"Unknown",i));return be({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,si=gt.current,ge(gt,t),ge(At,At.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=D_(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,Ee(At),Ee(gt),ge(gt,t)):Ee(At),ge(At,n)}var bn=null,Ju=!1,_h=!1;function M_(t){bn===null?bn=[t]:bn.push(t)}function uS(t){Ju=!0,M_(t)}function Vr(){if(!_h&&bn!==null){_h=!0;var t=0,e=fe;try{var n=bn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Ju=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),o_(Fd,Vr),i}finally{fe=e,_h=!1}}return null}var Bi=[],$i=0,cu=null,hu=0,Ut=[],jt=0,oi=null,Cn=1,Rn="";function Hr(t,e){Bi[$i++]=hu,Bi[$i++]=cu,cu=t,hu=e}function L_(t,e,n){Ut[jt++]=Cn,Ut[jt++]=Rn,Ut[jt++]=oi,oi=t;var r=Cn;t=Rn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-en(e)+i|n<<i|r,Rn=s+t}else Cn=1<<s|n<<i|r,Rn=t}function Yd(t){t.return!==null&&(Hr(t,1),L_(t,1,0))}function Gd(t){for(;t===cu;)cu=Bi[--$i],Bi[$i]=null,hu=Bi[--$i],Bi[$i]=null;for(;t===oi;)oi=Ut[--jt],Ut[jt]=null,Rn=Ut[--jt],Ut[jt]=null,Cn=Ut[--jt],Ut[jt]=null}var Ot=null,Nt=null,Ie=!1,Xt=null;function V_(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,Nt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Cn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,Nt=null,!0):!1;default:return!1}}function wf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ef(t){if(Ie){var e=Nt;if(e){var n=e;if(!oy(t,e)){if(wf(t))throw Error(V(418));e=_r(n.nextSibling);var r=Ot;e&&oy(t,e)?V_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ot=t)}}else{if(wf(t))throw Error(V(418));t.flags=t.flags&-4097|2,Ie=!1,Ot=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function cl(t){if(t!==Ot)return!1;if(!Ie)return ay(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gf(t.type,t.memoizedProps)),e&&(e=Nt)){if(wf(t))throw F_(),Error(V(418));for(;e;)V_(t,e),e=_r(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Ot?_r(t.stateNode.nextSibling):null;return!0}function F_(){for(var t=Nt;t;)t=_r(t.nextSibling)}function hs(){Nt=Ot=null,Ie=!1}function Kd(t){Xt===null?Xt=[t]:Xt.push(t)}var cS=Gn.ReactCurrentBatchConfig;function Kt(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fu=Lr(null),du=null,Wi=null,Qd=null;function Xd(){Qd=Wi=du=null}function Jd(t){var e=fu.current;Ee(fu),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){du=t,Qd=Wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Wi===null){if(du===null)throw Error(V(308));Wi=t,du.dependencies={lanes:0,firstContext:t}}else Wi=Wi.next=t;return e}var Qr=null;function Zd(t){Qr===null?Qr=[t]:Qr.push(t)}function U_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Un(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Un(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}function ly(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var y=l.lane,T=l.eventTime;if((r&y)===y){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,C=l;switch(y=e,T=n,C.tag){case 1:if(b=C.payload,typeof b=="function"){p=b.call(T,p,y);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=C.payload,y=typeof b=="function"?b.call(T,p,y):b,y==null)break e;p=be({},p,y);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else T={eventTime:T,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=p):d=d.next=T,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=p}}function uy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var z_=new U0.Component().refs;function If(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Tr(t),s=Dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(tn(e,t,i,r),Ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Tr(t),s=Dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(tn(e,t,i,r),Ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Tr(t),i=Dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(tn(e,t,r,n),Ml(e,t,r))}};function cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,r)||!qo(i,s):!0}function B_(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Pt(e)?si:gt.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=z_,ep(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Pt(e)?si:gt.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===z_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fy(t){var e=t._init;return e(t._payload)}function $_(t){function e(E,v){if(t){var I=E.deletions;I===null?(E.deletions=[v],E.flags|=16):I.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Ir(E,v),E.index=0,E.sibling=null,E}function s(E,v,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<v?(E.flags|=2,v):I):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,I,O){return v===null||v.tag!==6?(v=Ah(I,E.mode,O),v.return=E,v):(v=i(v,I),v.return=E,v)}function u(E,v,I,O){var D=I.type;return D===Li?d(E,v,I.props.children,O,I.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ir&&fy(D)===v.type)?(O=i(v,I.props),O.ref=so(E,v,I),O.return=E,O):(O=zl(I.type,I.key,I.props,null,E.mode,O),O.ref=so(E,v,I),O.return=E,O)}function c(E,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Ph(I,E.mode,O),v.return=E,v):(v=i(v,I.children||[]),v.return=E,v)}function d(E,v,I,O,D){return v===null||v.tag!==7?(v=ni(I,E.mode,O,D),v.return=E,v):(v=i(v,I),v.return=E,v)}function p(E,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ah(""+v,E.mode,I),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return I=zl(v.type,v.key,v.props,null,E.mode,I),I.ref=so(E,null,v),I.return=E,I;case Mi:return v=Ph(v,E.mode,I),v.return=E,v;case ir:var O=v._init;return p(E,O(v._payload),I)}if(fo(v)||eo(v))return v=ni(v,E.mode,I,null),v.return=E,v;hl(E,v)}return null}function y(E,v,I,O){var D=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return D!==null?null:l(E,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case el:return I.key===D?u(E,v,I,O):null;case Mi:return I.key===D?c(E,v,I,O):null;case ir:return D=I._init,y(E,v,D(I._payload),O)}if(fo(I)||eo(I))return D!==null?null:d(E,v,I,O,null);hl(E,I)}return null}function T(E,v,I,O,D){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(I)||null,l(v,E,""+O,D);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case el:return E=E.get(O.key===null?I:O.key)||null,u(v,E,O,D);case Mi:return E=E.get(O.key===null?I:O.key)||null,c(v,E,O,D);case ir:var F=O._init;return T(E,v,I,F(O._payload),D)}if(fo(O)||eo(O))return E=E.get(I)||null,d(v,E,O,D,null);hl(v,O)}return null}function b(E,v,I,O){for(var D=null,F=null,_=v,g=v=0,w=null;_!==null&&g<I.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var k=y(E,_,I[g],O);if(k===null){_===null&&(_=w);break}t&&_&&k.alternate===null&&e(E,_),v=s(k,v,g),F===null?D=k:F.sibling=k,F=k,_=w}if(g===I.length)return n(E,_),Ie&&Hr(E,g),D;if(_===null){for(;g<I.length;g++)_=p(E,I[g],O),_!==null&&(v=s(_,v,g),F===null?D=_:F.sibling=_,F=_);return Ie&&Hr(E,g),D}for(_=r(E,_);g<I.length;g++)w=T(_,E,g,I[g],O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),v=s(w,v,g),F===null?D=w:F.sibling=w,F=w);return t&&_.forEach(function(P){return e(E,P)}),Ie&&Hr(E,g),D}function C(E,v,I,O){var D=eo(I);if(typeof D!="function")throw Error(V(150));if(I=D.call(I),I==null)throw Error(V(151));for(var F=D=null,_=v,g=v=0,w=null,k=I.next();_!==null&&!k.done;g++,k=I.next()){_.index>g?(w=_,_=null):w=_.sibling;var P=y(E,_,k.value,O);if(P===null){_===null&&(_=w);break}t&&_&&P.alternate===null&&e(E,_),v=s(P,v,g),F===null?D=P:F.sibling=P,F=P,_=w}if(k.done)return n(E,_),Ie&&Hr(E,g),D;if(_===null){for(;!k.done;g++,k=I.next())k=p(E,k.value,O),k!==null&&(v=s(k,v,g),F===null?D=k:F.sibling=k,F=k);return Ie&&Hr(E,g),D}for(_=r(E,_);!k.done;g++,k=I.next())k=T(_,E,g,k.value,O),k!==null&&(t&&k.alternate!==null&&_.delete(k.key===null?g:k.key),v=s(k,v,g),F===null?D=k:F.sibling=k,F=k);return t&&_.forEach(function(x){return e(E,x)}),Ie&&Hr(E,g),D}function A(E,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Li&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case el:e:{for(var D=I.key,F=v;F!==null;){if(F.key===D){if(D=I.type,D===Li){if(F.tag===7){n(E,F.sibling),v=i(F,I.props.children),v.return=E,E=v;break e}}else if(F.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===ir&&fy(D)===F.type){n(E,F.sibling),v=i(F,I.props),v.ref=so(E,F,I),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}I.type===Li?(v=ni(I.props.children,E.mode,O,I.key),v.return=E,E=v):(O=zl(I.type,I.key,I.props,null,E.mode,O),O.ref=so(E,v,I),O.return=E,E=O)}return o(E);case Mi:e:{for(F=I.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(E,v.sibling),v=i(v,I.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Ph(I,E.mode,O),v.return=E,E=v}return o(E);case ir:return F=I._init,A(E,v,F(I._payload),O)}if(fo(I))return b(E,v,I,O);if(eo(I))return C(E,v,I,O);hl(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,I),v.return=E,E=v):(n(E,v),v=Ah(I,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return A}var fs=$_(!0),W_=$_(!1),wa={},pn=Lr(wa),Qo=Lr(wa),Xo=Lr(wa);function Xr(t){if(t===wa)throw Error(V(174));return t}function tp(t,e){switch(ge(Xo,e),ge(Qo,t),ge(pn,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tf(e,t)}Ee(pn),ge(pn,e)}function ds(){Ee(pn),Ee(Qo),Ee(Xo)}function H_(t){Xr(Xo.current);var e=Xr(pn.current),n=tf(e,t.type);e!==n&&(ge(Qo,t),ge(pn,n))}function np(t){Qo.current===t&&(Ee(pn),Ee(Qo))}var Se=Lr(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wh=[];function rp(){for(var t=0;t<wh.length;t++)wh[t]._workInProgressVersionPrimary=null;wh.length=0}var Ll=Gn.ReactCurrentDispatcher,Eh=Gn.ReactCurrentBatchConfig,ai=0,Pe=null,$e=null,Qe=null,gu=!1,bo=!1,Jo=0,hS=0;function ct(){throw Error(V(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function sp(t,e,n,r,i,s){if(ai=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=t===null||t.memoizedState===null?mS:gS,t=n(r,i),bo){s=0;do{if(bo=!1,Jo=0,25<=s)throw Error(V(301));s+=1,Qe=$e=null,e.updateQueue=null,Ll.current=yS,t=n(r,i)}while(bo)}if(Ll.current=yu,e=$e!==null&&$e.next!==null,ai=0,Qe=$e=Pe=null,gu=!1,e)throw Error(V(300));return t}function op(){var t=Jo!==0;return Jo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function qt(){if($e===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Qe===null?Pe.memoizedState:Qe.next;if(e!==null)Qe=e,$e=t;else{if(t===null)throw Error(V(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Qe===null?Pe.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Zo(t,e){return typeof e=="function"?e(t):e}function Th(t){var e=qt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ai&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Pe.lanes|=d,li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ih(t){var e=qt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q_(){}function Y_(t,e){var n=Pe,r=qt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,ap(Q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ea(9,K_.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(V(349));ai&30||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&J_(t)}function Q_(t,e,n){return n(function(){X_(e)&&J_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function J_(t){var e=Un(t,1);e!==null&&tn(e,t,1,-1)}function dy(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:t},e.queue=t,t=t.dispatch=pS.bind(null,Pe,t),[e.memoizedState,t]}function ea(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z_(){return qt().memoizedState}function Vl(t,e,n,r){var i=an();Pe.flags|=t,i.memoizedState=ea(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&ip(r,o.deps)){i.memoizedState=ea(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=ea(1|e,n,s,r)}function py(t,e){return Vl(8390656,8,t,e)}function ap(t,e){return ec(2048,8,t,e)}function ew(t,e){return ec(4,2,t,e)}function tw(t,e){return ec(4,4,t,e)}function nw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rw(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,nw.bind(null,e,t),n)}function lp(){}function iw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ow(t,e,n){return ai&21?(nn(n,e)||(n=u_(),Pe.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function fS(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Eh.transition;Eh.transition={};try{t(!1),e()}finally{fe=n,Eh.transition=r}}function aw(){return qt().memoizedState}function dS(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lw(t))uw(e,n);else if(n=U_(t,e,n,r),n!==null){var i=Et();tn(n,t,r,i),cw(n,e,r)}}function pS(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lw(t))uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,Zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=U_(t,e,i,r),n!==null&&(i=Et(),tn(n,t,r,i),cw(n,e,r))}}function lw(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function uw(t,e){bo=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ud(t,n)}}var yu={readContext:Ht,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},mS={readContext:Ht,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4194308,4,nw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dS.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:lp,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=fS.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=an();if(Ie){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Xe===null)throw Error(V(349));ai&30||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,py(Q_.bind(null,r,s,t),[t]),r.flags|=2048,ea(9,K_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=Xe.identifierPrefix;if(Ie){var n=Rn,r=Cn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gS={readContext:Ht,useCallback:iw,useContext:Ht,useEffect:ap,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:Th,useRef:Z_,useState:function(){return Th(Zo)},useDebugValue:lp,useDeferredValue:function(t){var e=qt();return ow(e,$e.memoizedState,t)},useTransition:function(){var t=Th(Zo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:Y_,useId:aw,unstable_isNewReconciler:!1},yS={readContext:Ht,useCallback:iw,useContext:Ht,useEffect:ap,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:Ih,useRef:Z_,useState:function(){return Ih(Zo)},useDebugValue:lp,useDeferredValue:function(t){var e=qt();return $e===null?e.memoizedState=t:ow(e,$e.memoizedState,t)},useTransition:function(){var t=Ih(Zo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:q_,useSyncExternalStore:Y_,useId:aw,unstable_isNewReconciler:!1};function ps(t,e){try{var n="",r=e;do n+=HI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vS=typeof WeakMap=="function"?WeakMap:Map;function hw(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,Mf=r),Sf(t,e)},n}function fw(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function my(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NS.bind(null,t,e,n),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var _S=Gn.ReactCurrentOwner,St=!1;function wt(t,e,n,r){e.child=t===null?W_(e,null,n,r):fs(e,t.child,n,r)}function vy(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=sp(t,e,n,r,s,i),n=op(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ie&&n&&Yd(e),e.flags|=1,wt(t,e,r,i),e.child)}function _y(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dw(t,e,s,r,i)):(t=zl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=Ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qo(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,jn(t,e,i)}return Af(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(qi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(qi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(qi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(qi,Rt),Rt|=r;return wt(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Af(t,e,n,r,i){var s=Pt(n)?si:gt.current;return s=cs(e,s),ts(e,i),n=sp(t,e,n,r,s,i),r=op(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(Ie&&r&&Yd(e),e.flags|=1,wt(t,e,n,i),e.child)}function wy(t,e,n,r,i){if(Pt(n)){var s=!0;uu(e)}else s=!1;if(ts(e,i),e.stateNode===null)Fl(t,e),B_(e,n,r),kf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Pt(n)?si:gt.current,c=cs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&hy(e,o,r,c),sr=!1;var y=e.memoizedState;o.state=y,pu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||At.current||sr?(typeof d=="function"&&(If(e,n,d,r),u=e.memoizedState),(l=sr||cy(e,n,l,r,y,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Kt(e.type,l),o.props=c,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Pt(n)?si:gt.current,u=cs(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&hy(e,o,r,u),sr=!1,y=e.memoizedState,o.state=y,pu(e,r,o,i);var b=e.memoizedState;l!==p||y!==b||At.current||sr?(typeof T=="function"&&(If(e,n,T,r),b=e.memoizedState),(c=sr||cy(e,n,c,r,y,b,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Pf(t,e,n,r,s,i)}function Pf(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sy(e,n,!1),jn(t,e,s);r=e.stateNode,_S.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):wt(t,e,l,s),e.memoizedState=r.state,i&&sy(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),tp(t,e.containerInfo)}function Ey(t,e,n,r,i){return hs(),Kd(i),e.flags|=256,wt(t,e,n,r),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Cf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yw(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Se,i&1),t===null)return Ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cf(n),e.memoizedState=bf,t):up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return wS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bf,r}return s=t.child,t=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function up(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fl(t,e,n,r){return r!==null&&Kd(r),fs(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kh(Error(V(422))),fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Cf(o),e.memoizedState=bf,s);if(!(e.mode&1))return fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(V(419)),r=kh(s,r,void 0),fl(t,e,o,r)}if(l=(o&t.childLanes)!==0,St||l){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(t,i),tn(r,t,i,-1))}return mp(),r=kh(Error(V(421))),fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=OS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=_r(i.nextSibling),Ot=e,Ie=!0,Xt=null,t!==null&&(Ut[jt++]=Cn,Ut[jt++]=Rn,Ut[jt++]=oi,Cn=t.id,Rn=t.overflow,oi=e),e=up(e,r.children),e.flags|=4096,e)}function Ty(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tf(t.return,e,n)}function Sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(wt(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ty(t,n,e);else if(t.tag===19)Ty(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sh(e,!0,n,null,s);break;case"together":Sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ES(t,e,n){switch(e.tag){case 3:gw(e),hs();break;case 5:H_(e);break;case 1:Pt(e.type)&&uu(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?yw(t,e,n):(ge(Se,Se.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return jn(t,e,n)}var _w,Rf,ww,Ew;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rf=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xr(pn.current);var s=null;switch(n){case"input":i=Xh(t,i),r=Xh(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=ef(t,i),r=ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}nf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TS(t,e,n){var r=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Pt(e.type)&&lu(),ht(e),null;case 3:return r=e.stateNode,ds(),Ee(At),Ee(gt),rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(Ff(Xt),Xt=null))),Rf(t,e),ht(e),null;case 5:np(e);var i=Xr(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return ht(e),null}if(t=Xr(pn.current),cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)_e(mo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":xg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Og(r,s),_e("invalid",r)}nf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),i=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":tl(r),Ng(r,s,!0);break;case"textarea":tl(r),Dg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=au)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Ko]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=rf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)_e(mo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":xg(t,r),i=Xh(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Og(t,r),i=ef(t,r),_e("invalid",t);break;default:i=r}nf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?X0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jo(t,u):typeof u=="number"&&jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&Od(t,s,u,o))}switch(n){case"input":tl(t),Ng(t,r,!1);break;case"textarea":tl(t),Dg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=Xr(Xo.current),Xr(pn.current),cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return ht(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Nt!==null&&e.mode&1&&!(e.flags&128))F_(),hs(),e.flags|=98560,s=!1;else if(s=cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[ln]=e}else hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else Xt!==null&&(Ff(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?He===0&&(He=3):mp())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return ds(),Rf(t,e),t===null&&Yo(e.stateNode.containerInfo),ht(e),null;case 10:return Jd(e.type._context),ht(e),null;case 17:return Pt(e.type)&&lu(),ht(e),null;case 19:if(Ee(Se),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oo(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,oo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>ms&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ht(e),null}else 2*Le()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,r=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function IS(t,e){switch(Gd(e),e.tag){case 1:return Pt(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),Ee(At),Ee(gt),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return ds(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var dl=!1,pt=!1,kS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Iy=!1;function SS(t,e){if(pf=iu,t=S_(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,y=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)y=p,p=T;for(;;){if(p===t)break t;if(y===n&&++c===i&&(l=o),y===s&&++d===r&&(u=o),(T=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:t,selectionRange:n},iu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var C=b.memoizedProps,A=b.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:Kt(e.type,C),A);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(O){xe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return b=Iy,Iy=!1,b}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tw(t){var e=t.alternate;e!==null&&(t.alternate=null,Tw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Ko],delete e[vf],delete e[aS],delete e[lS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var Ze=null,Qt=!1;function er(t,e,n){for(n=n.child;n!==null;)kw(t,e,n),n=n.sibling}function kw(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Yu,n)}catch{}switch(n.tag){case 5:pt||Hi(n,e);case 6:var r=Ze,i=Qt;Ze=null,er(t,e,n),Ze=r,Qt=i,Ze!==null&&(Qt?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Qt?(t=Ze,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),Wo(t)):vh(Ze,n.stateNode));break;case 4:r=Ze,i=Qt,Ze=n.stateNode.containerInfo,Qt=!0,er(t,e,n),Ze=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xf(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!pt&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,er(t,e,n),pt=r):er(t,e,n);break;default:er(t,e,n)}}function Sy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var i=DS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Qt=!1;break e;case 3:Ze=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ze=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ze===null)throw Error(V(160));kw(s,o,i),Ze=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sw(e,t),e=e.sibling}function Sw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),on(t),r&4){try{Co(3,t,t.return),tc(3,t)}catch(C){xe(t,t.return,C)}try{Co(5,t,t.return)}catch(C){xe(t,t.return,C)}}break;case 1:Gt(e,t),on(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Gt(e,t),on(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{jo(i,"")}catch(C){xe(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&q0(i,s),rf(l,o);var c=rf(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?X0(i,p):d==="dangerouslySetInnerHTML"?K0(i,p):d==="children"?jo(i,p):Od(i,d,p,c)}switch(l){case"input":Jh(i,s);break;case"textarea":Y0(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Xi(i,!!s.multiple,T,!1):y!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ko]=s}catch(C){xe(t,t.return,C)}}break;case 6:if(Gt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){xe(t,t.return,C)}}break;case 3:if(Gt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(C){xe(t,t.return,C)}break;case 4:Gt(e,t),on(t);break;case 13:Gt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fp=Le())),r&4&&Sy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||d,Gt(e,t),pt=c):Gt(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(y=W,T=y.child,y.tag){case 0:case 11:case 14:case 15:Co(4,y,y.return);break;case 1:Hi(y,y.return);var b=y.stateNode;if(typeof b.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(C){xe(r,n,C)}}break;case 5:Hi(y,y.return);break;case 22:if(y.memoizedState!==null){Py(p);continue}}T!==null?(T.return=y,W=T):Py(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Q0("display",o))}catch(C){xe(t,t.return,C)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){xe(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gt(e,t),on(t),r&4&&Sy(t);break;case 21:break;default:Gt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jo(i,""),r.flags&=-33);var s=ky(t);Df(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ky(t);Of(t,l,o);break;default:throw Error(V(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AS(t,e,n){W=t,Aw(t)}function Aw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pt;l=dl;var c=pt;if(dl=o,(pt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?by(i):u!==null?(u.return=o,W=u):by(i);for(;s!==null;)W=s,Aw(s),s=s.sibling;W=i,dl=l,pt=c}Ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Ay(t)}}function Ay(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Wo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}pt||e.flags&512&&Nf(e)}catch(y){xe(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Py(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function by(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{Nf(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{Nf(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var PS=Math.ceil,vu=Gn.ReactCurrentDispatcher,cp=Gn.ReactCurrentOwner,$t=Gn.ReactCurrentBatchConfig,oe=0,Xe=null,Be=null,nt=0,Rt=0,qi=Lr(0),He=0,ta=null,li=0,nc=0,hp=0,Ro=null,kt=null,fp=0,ms=1/0,Pn=null,_u=!1,Mf=null,Er=null,pl=!1,dr=null,wu=0,xo=0,Lf=null,Ul=-1,jl=0;function Et(){return oe&6?Le():Ul!==-1?Ul:Ul=Le()}function Tr(t){return t.mode&1?oe&2&&nt!==0?nt&-nt:cS.transition!==null?(jl===0&&(jl=u_()),jl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:g_(t.type)),t):1}function tn(t,e,n,r){if(50<xo)throw xo=0,Lf=null,Error(V(185));ya(t,n,r),(!(oe&2)||t!==Xe)&&(t===Xe&&(!(oe&2)&&(nc|=n),He===4&&ar(t,nt)),bt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ms=Le()+500,Ju&&Vr()))}function bt(t,e){var n=t.callbackNode;ck(t,e);var r=ru(t,t===Xe?nt:0);if(r===0)n!==null&&Vg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vg(n),e===1)t.tag===0?uS(Cy.bind(null,t)):M_(Cy.bind(null,t)),sS(function(){!(oe&6)&&Vr()}),n=null;else{switch(c_(r)){case 1:n=Fd;break;case 4:n=a_;break;case 16:n=nu;break;case 536870912:n=l_;break;default:n=nu}n=Dw(n,Pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pw(t,e){if(Ul=-1,jl=0,oe&6)throw Error(V(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=ru(t,t===Xe?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var i=oe;oe|=2;var s=Cw();(Xe!==t||nt!==e)&&(Pn=null,ms=Le()+500,ti(t,e));do try{RS();break}catch(l){bw(t,l)}while(!0);Xd(),vu.current=s,oe=i,Be!==null?e=0:(Xe=null,nt=0,e=He)}if(e!==0){if(e===2&&(i=uf(t),i!==0&&(r=i,e=Vf(t,i))),e===1)throw n=ta,ti(t,0),ar(t,r),bt(t,Le()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!bS(i)&&(e=Eu(t,r),e===2&&(s=uf(t),s!==0&&(r=s,e=Vf(t,s))),e===1))throw n=ta,ti(t,0),ar(t,r),bt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:qr(t,kt,Pn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=fp+500-Le(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yf(qr.bind(null,t,kt,Pn),e);break}qr(t,kt,Pn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PS(r/1960))-r,10<r){t.timeoutHandle=yf(qr.bind(null,t,kt,Pn),r);break}qr(t,kt,Pn);break;case 5:qr(t,kt,Pn);break;default:throw Error(V(329))}}}return bt(t,Le()),t.callbackNode===n?Pw.bind(null,t):null}function Vf(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=kt,kt=n,e!==null&&Ff(e)),t}function Ff(t){kt===null?kt=t:kt.push.apply(kt,t)}function bS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~hp,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function Cy(t){if(oe&6)throw Error(V(327));ns();var e=ru(t,0);if(!(e&1))return bt(t,Le()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=uf(t);r!==0&&(e=r,n=Vf(t,r))}if(n===1)throw n=ta,ti(t,0),ar(t,e),bt(t,Le()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,kt,Pn),bt(t,Le()),null}function dp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ms=Le()+500,Ju&&Vr())}}function ui(t){dr!==null&&dr.tag===0&&!(oe&6)&&ns();var e=oe;oe|=1;var n=$t.transition,r=fe;try{if($t.transition=null,fe=1,t)return t()}finally{fe=r,$t.transition=n,oe=e,!(oe&6)&&Vr()}}function pp(){Rt=qi.current,Ee(qi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iS(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:ds(),Ee(At),Ee(gt),rp();break;case 5:np(r);break;case 4:ds();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:Jd(r.type._context);break;case 22:case 23:pp()}n=n.return}if(Xe=t,Be=t=Ir(t.current,null),nt=Rt=e,He=0,ta=null,hp=nc=li=0,kt=Ro=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qr=null}return t}function bw(t,e){do{var n=Be;try{if(Xd(),Ll.current=yu,gu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(ai=0,Qe=$e=Pe=null,bo=!1,Jo=0,cp.current=null,n===null||n.return===null){He=1,ta=e,Be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=nt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var y=d.alternate;y?(d.updateQueue=y.updateQueue,d.memoizedState=y.memoizedState,d.lanes=y.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=gy(o);if(T!==null){T.flags&=-257,yy(T,o,l,s,e),T.mode&1&&my(s,c,e),e=T,u=c;var b=e.updateQueue;if(b===null){var C=new Set;C.add(u),e.updateQueue=C}else b.add(u);break e}else{if(!(e&1)){my(s,c,e),mp();break e}u=Error(V(426))}}else if(Ie&&l.mode&1){var A=gy(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),yy(A,o,l,s,e),Kd(ps(u,l));break e}}s=u=ps(u,l),He!==4&&(He=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=hw(s,u,e);ly(s,E);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Er===null||!Er.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=fw(s,l,e);ly(s,O);break e}}s=s.return}while(s!==null)}xw(n)}catch(D){e=D,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Cw(){var t=vu.current;return vu.current=yu,t===null?yu:t}function mp(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(li&268435455)&&!(nc&268435455)||ar(Xe,nt)}function Eu(t,e){var n=oe;oe|=2;var r=Cw();(Xe!==t||nt!==e)&&(Pn=null,ti(t,e));do try{CS();break}catch(i){bw(t,i)}while(!0);if(Xd(),oe=n,vu.current=r,Be!==null)throw Error(V(261));return Xe=null,nt=0,He}function CS(){for(;Be!==null;)Rw(Be)}function RS(){for(;Be!==null&&!tk();)Rw(Be)}function Rw(t){var e=Ow(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?xw(t):Be=e,cp.current=null}function xw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IS(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Be=null;return}}else if(n=TS(n,e,Rt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);He===0&&(He=5)}function qr(t,e,n){var r=fe,i=$t.transition;try{$t.transition=null,fe=1,xS(t,e,n,r)}finally{$t.transition=i,fe=r}return null}function xS(t,e,n,r){do ns();while(dr!==null);if(oe&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hk(t,s),t===Xe&&(Be=Xe=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,Dw(nu,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=fe;fe=1;var l=oe;oe|=4,cp.current=null,SS(t,n),Sw(n,t),Xk(mf),iu=!!pf,mf=pf=null,t.current=n,AS(n),nk(),oe=l,fe=o,$t.transition=s}else t.current=n;if(pl&&(pl=!1,dr=t,wu=i),s=t.pendingLanes,s===0&&(Er=null),sk(n.stateNode),bt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_u)throw _u=!1,t=Mf,Mf=null,t;return wu&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===Lf?xo++:(xo=0,Lf=t):xo=0,Vr(),null}function ns(){if(dr!==null){var t=c_(wu),e=$t.transition,n=fe;try{if($t.transition=null,fe=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,wu=0,oe&6)throw Error(V(331));var i=oe;for(oe|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Co(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var y=d.sibling,T=d.return;if(Tw(d),d===c){W=null;break}if(y!==null){y.return=T,W=y;break}W=T}}}var b=s.alternate;if(b!==null){var C=b.child;if(C!==null){b.child=null;do{var A=C.sibling;C.sibling=null,C=A}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tc(9,l)}}catch(D){xe(l,l.return,D)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(oe=i,Vr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Yu,t)}catch{}r=!0}return r}finally{fe=n,$t.transition=e}}return!1}function Ry(t,e,n){e=ps(n,e),e=hw(t,e,1),t=wr(t,e,1),e=Et(),t!==null&&(ya(t,1,e),bt(t,e))}function xe(t,e,n){if(t.tag===3)Ry(t,t,n);else for(;e!==null;){if(e.tag===3){Ry(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ps(n,t),t=fw(e,t,1),e=wr(e,t,1),t=Et(),e!==null&&(ya(e,1,t),bt(e,t));break}}e=e.return}}function NS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(nt&n)===n&&(He===4||He===3&&(nt&130023424)===nt&&500>Le()-fp?ti(t,0):hp|=n),bt(t,e)}function Nw(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=Et();t=Un(t,e),t!==null&&(ya(t,e,n),bt(t,n))}function OS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nw(t,n)}function DS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),Nw(t,n)}var Ow;Ow=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,ES(t,e,n);St=!!(t.flags&131072)}else St=!1,Ie&&e.flags&1048576&&L_(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fl(t,e),t=e.pendingProps;var i=cs(e,gt.current);ts(e,n),i=sp(null,e,r,t,i,n);var s=op();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ep(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,kf(e,r,t,n),e=Pf(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Yd(e),wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LS(r),t=Kt(r,t),i){case 0:e=Af(null,e,r,t,n);break e;case 1:e=wy(null,e,r,t,n);break e;case 11:e=vy(null,e,r,t,n);break e;case 14:e=_y(null,e,r,Kt(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Af(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),wy(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j_(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(V(423)),e),e=Ey(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(V(424)),e),e=Ey(t,e,r,n,i);break e}else for(Nt=_r(e.stateNode.containerInfo.firstChild),Ot=e,Ie=!0,Xt=null,n=W_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){e=jn(t,e,n);break e}wt(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&Ef(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gf(r,i)?o=null:s!==null&&gf(r,s)&&(e.flags|=32),mw(t,e),wt(t,e,o,n),e.child;case 6:return t===null&&Ef(e),null;case 13:return yw(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),vy(t,e,r,i,n);case 7:return wt(t,e,e.pendingProps,n),e.child;case 8:return wt(t,e,e.pendingProps.children,n),e.child;case 12:return wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(fu,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!At.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Dn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Tf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=Ht(i),r=r(i),e.flags|=1,wt(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),_y(t,e,r,i,n);case 15:return dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Fl(t,e),e.tag=1,Pt(r)?(t=!0,uu(e)):t=!1,ts(e,n),B_(e,r,i),kf(e,r,i,n),Pf(null,e,r,!0,t,n);case 19:return vw(t,e,n);case 22:return pw(t,e,n)}throw Error(V(156,e.tag))};function Dw(t,e){return o_(t,e)}function MS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new MS(t,e,n,r)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LS(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Md)return 11;if(t===Ld)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return ni(n.children,i,s,e);case Dd:o=8,i|=8;break;case Yh:return t=Bt(12,n,e,i|2),t.elementType=Yh,t.lanes=s,t;case Gh:return t=Bt(13,n,e,i),t.elementType=Gh,t.lanes=s,t;case Kh:return t=Bt(19,n,e,i),t.elementType=Kh,t.lanes=s,t;case $0:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case B0:o=9;break e;case Md:o=11;break e;case Ld:o=14;break e;case ir:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=$0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ah(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function Ph(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ah(0),this.expirationTimes=ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(t,e,n,r,i,s,o,l,u){return t=new VS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function FS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mw(t){if(!t)return br;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(Pt(n))return D_(t,n,e)}return e}function Lw(t,e,n,r,i,s,o,l,u){return t=yp(n,r,!0,t,i,s,o,l,u),t.context=Mw(null),n=t.current,r=Et(),i=Tr(n),s=Dn(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,ya(t,i,r),bt(t,r),t}function ic(t,e,n,r){var i=e.current,s=Et(),o=Tr(i);return n=Mw(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(tn(t,i,o,s),Ml(t,i,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){xy(t,e),(t=t.alternate)&&xy(t,e)}function US(){return null}var Vw=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}sc.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));ic(t,e,null,null)};sc.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){ic(null,t,null,null)}),e[Fn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=d_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&m_(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function jS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Tu(o);s.call(c)}}var o=Lw(e,r,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=o,t[Fn]=o.current,Yo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Tu(u);l.call(c)}}var u=yp(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=u,t[Fn]=u.current,Yo(t.nodeType===8?t.parentNode:t),ui(function(){ic(e,u,n,r)}),u}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Tu(o);l.call(u)}}ic(e,o,t,i)}else o=jS(n,e,t,i,r);return Tu(o)}h_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Ud(e,n|1),bt(e,Le()),!(oe&6)&&(ms=Le()+500,Vr()))}break;case 13:ui(function(){var r=Un(t,1);if(r!==null){var i=Et();tn(r,t,1,i)}}),vp(t,1)}};jd=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=Et();tn(e,t,134217728,n)}vp(t,134217728)}};f_=function(t){if(t.tag===13){var e=Tr(t),n=Un(t,e);if(n!==null){var r=Et();tn(n,t,e,r)}vp(t,e)}};d_=function(){return fe};p_=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};of=function(t,e,n){switch(e){case"input":if(Jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(V(90));H0(r),Jh(r,i)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};e_=dp;t_=ui;var zS={usingClientEntryPoint:!1,Events:[_a,ji,Xu,J0,Z0,dp]},ao={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},BS={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i_(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Yu=ml.inject(BS),dn=ml}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zS;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(e))throw Error(V(200));return FS(t,e,null,n)};Mt.createRoot=function(t,e){if(!wp(t))throw Error(V(299));var n=!1,r="",i=Vw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yp(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Yo(t.nodeType===8?t.parentNode:t),new _p(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=i_(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return ui(t)};Mt.hydrate=function(t,e,n){if(!oc(e))throw Error(V(200));return ac(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!wp(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lw(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};Mt.render=function(t,e,n){if(!oc(e))throw Error(V(200));return ac(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!oc(t))throw Error(V(40));return t._reactRootContainer?(ui(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Mt.unstable_batchedUpdates=dp;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return ac(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function Fw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fw)}catch(t){console.error(t)}}Fw(),L0.exports=Mt;var $S=L0.exports,Oy=$S;Hh.createRoot=Oy.createRoot,Hh.hydrateRoot=Oy.hydrateRoot;var WS={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},HS=WS,qS={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},YS={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},GS={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},KS={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},QS={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},XS={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},JS={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ZS={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},eA={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};function Dy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dy(Object(n),!0).forEach(function(r){Ye(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Iu(t){"@babel/helpers - typeof";return Iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Iu(t)}function tA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function My(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nA(t,e,n){return e&&My(t.prototype,e),n&&My(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ep(t,e){return iA(t)||oA(t,e)||Uw(t,e)||lA()}function Ea(t){return rA(t)||sA(t)||Uw(t)||aA()}function rA(t){if(Array.isArray(t))return Uf(t)}function iA(t){if(Array.isArray(t))return t}function sA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,l;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw l}}return r}}function Uw(t,e){if(t){if(typeof t=="string")return Uf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uf(t,e)}}function Uf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function aA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ly=function(){},Tp={},jw={},zw=null,Bw={mark:Ly,measure:Ly};try{typeof window<"u"&&(Tp=window),typeof document<"u"&&(jw=document),typeof MutationObserver<"u"&&(zw=MutationObserver),typeof performance<"u"&&(Bw=performance)}catch{}var uA=Tp.navigator||{},Vy=uA.userAgent,Fy=Vy===void 0?"":Vy,Cr=Tp,Te=jw,Uy=zw,gl=Bw;Cr.document;var Kn=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",$w=~Fy.indexOf("MSIE")||~Fy.indexOf("Trident/"),yl,vl,_l,wl,El,zn="___FONT_AWESOME___",jf=16,Ww="fa",Hw="svg-inline--fa",ci="data-fa-i2svg",zf="data-fa-pseudo-element",cA="data-fa-pseudo-element-pending",Ip="data-prefix",kp="data-icon",jy="fontawesome-i2svg",hA="async",fA=["HTML","HEAD","STYLE","SCRIPT"],qw=function(){try{return!0}catch{return!1}}(),we="classic",Ne="sharp",Sp=[we,Ne];function Ta(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var na=Ta((yl={},Ye(yl,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ye(yl,Ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yl)),ra=Ta((vl={},Ye(vl,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ye(vl,Ne,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vl)),ia=Ta((_l={},Ye(_l,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ye(_l,Ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_l)),dA=Ta((wl={},Ye(wl,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ye(wl,Ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wl)),pA=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Yw="fa-layers-text",mA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,gA=Ta((El={},Ye(El,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ye(El,Ne,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),El)),Gw=[1,2,3,4,5,6,7,8,9,10],yA=Gw.concat([11,12,13,14,15,16,17,18,19,20]),vA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sa=new Set;Object.keys(ra[we]).map(sa.add.bind(sa));Object.keys(ra[Ne]).map(sa.add.bind(sa));var _A=[].concat(Sp,Ea(sa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jr.GROUP,Jr.SWAP_OPACITY,Jr.PRIMARY,Jr.SECONDARY]).concat(Gw.map(function(t){return"".concat(t,"x")})).concat(yA.map(function(t){return"w-".concat(t)})),No=Cr.FontAwesomeConfig||{};function wA(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function EA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var TA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];TA.forEach(function(t){var e=Ep(t,2),n=e[0],r=e[1],i=EA(wA(n));i!=null&&(No[r]=i)})}var Kw={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ww,replacementClass:Hw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};No.familyPrefix&&(No.cssPrefix=No.familyPrefix);var gs=$($({},Kw),No);gs.autoReplaceSvg||(gs.observeMutations=!1);var q={};Object.keys(Kw).forEach(function(t){Object.defineProperty(q,t,{enumerable:!0,set:function(n){gs[t]=n,Oo.forEach(function(r){return r(q)})},get:function(){return gs[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){gs.cssPrefix=e,Oo.forEach(function(n){return n(q)})},get:function(){return gs.cssPrefix}});Cr.FontAwesomeConfig=q;var Oo=[];function IA(t){return Oo.push(t),function(){Oo.splice(Oo.indexOf(t),1)}}var tr=jf,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kA(t){if(!(!t||!Kn)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}}var SA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function oa(){for(var t=12,e="";t-- >0;)e+=SA[Math.random()*62|0];return e}function Ns(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ap(t){return t.classList?Ns(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Qw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function AA(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Qw(t[n]),'" ')},"").trim()}function lc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Pp(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function PA(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function bA(t){var e=t.transform,n=t.width,r=n===void 0?jf:n,i=t.height,s=i===void 0?jf:i,o=t.startCentered,l=o===void 0?!1:o,u="";return l&&$w?u+="translate(".concat(e.x/tr-r/2,"em, ").concat(e.y/tr-s/2,"em) "):l?u+="translate(calc(-50% + ".concat(e.x/tr,"em), calc(-50% + ").concat(e.y/tr,"em)) "):u+="translate(".concat(e.x/tr,"em, ").concat(e.y/tr,"em) "),u+="scale(".concat(e.size/tr*(e.flipX?-1:1),", ").concat(e.size/tr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var CA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xw(){var t=Ww,e=Hw,n=q.cssPrefix,r=q.replacementClass,i=CA;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var zy=!1;function bh(){q.autoAddCss&&!zy&&(kA(Xw()),zy=!0)}var RA={mixout:function(){return{dom:{css:Xw,insertCss:bh}}},hooks:function(){return{beforeDOMElementCreation:function(){bh()},beforeI2svg:function(){bh()}}}},Bn=Cr||{};Bn[zn]||(Bn[zn]={});Bn[zn].styles||(Bn[zn].styles={});Bn[zn].hooks||(Bn[zn].hooks={});Bn[zn].shims||(Bn[zn].shims=[]);var Jt=Bn[zn],Jw=[],xA=function t(){Te.removeEventListener("DOMContentLoaded",t),ku=1,Jw.map(function(e){return e()})},ku=!1;Kn&&(ku=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),ku||Te.addEventListener("DOMContentLoaded",xA));function NA(t){Kn&&(ku?setTimeout(t,0):Jw.push(t))}function Ia(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Qw(t):"<".concat(e," ").concat(AA(r),">").concat(s.map(Ia).join(""),"</").concat(e,">")}function By(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var OA=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Ch=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=i!==void 0?OA(n,i):n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=l(d,e[c],c,e);return d};function DA(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bf(t){var e=DA(t);return e.length===1?e[0].toString(16):null}function MA(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function $y(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function $f(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=$y(e);typeof Jt.hooks.addPack=="function"&&!i?Jt.hooks.addPack(t,$y(e)):Jt.styles[t]=$($({},Jt.styles[t]||{}),s),t==="fas"&&$f("fa",e)}var Tl,Il,kl,Yi=Jt.styles,LA=Jt.shims,VA=(Tl={},Ye(Tl,we,Object.values(ia[we])),Ye(Tl,Ne,Object.values(ia[Ne])),Tl),bp=null,Zw={},e1={},t1={},n1={},r1={},FA=(Il={},Ye(Il,we,Object.keys(na[we])),Ye(Il,Ne,Object.keys(na[Ne])),Il);function UA(t){return~_A.indexOf(t)}function jA(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!UA(i)?i:null}var i1=function(){var e=function(s){return Ch(Yi,function(o,l,u){return o[u]=Ch(l,s,{}),o},{})};Zw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var l=s[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=o})}return i}),e1=e(function(i,s,o){if(i[o]=o,s[2]){var l=s[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=o})}return i}),r1=e(function(i,s,o){var l=s[2];return i[o]=o,l.forEach(function(u){i[u]=o}),i});var n="far"in Yi||q.autoFetchSvg,r=Ch(LA,function(i,s){var o=s[0],l=s[1],u=s[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});t1=r.names,n1=r.unicodes,bp=uc(q.styleDefault,{family:q.familyDefault})};IA(function(t){bp=uc(t.styleDefault,{family:q.familyDefault})});i1();function Cp(t,e){return(Zw[t]||{})[e]}function zA(t,e){return(e1[t]||{})[e]}function Zr(t,e){return(r1[t]||{})[e]}function s1(t){return t1[t]||{prefix:null,iconName:null}}function BA(t){var e=n1[t],n=Cp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rr(){return bp}var Rp=function(){return{prefix:null,iconName:null,rest:[]}};function uc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=na[r][t],s=ra[r][t]||ra[r][i],o=t in Jt.styles?t:null;return s||o||null}var Wy=(kl={},Ye(kl,we,Object.keys(ia[we])),Ye(kl,Ne,Object.keys(ia[Ne])),kl);function cc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ye(e,we,"".concat(q.cssPrefix,"-").concat(we)),Ye(e,Ne,"".concat(q.cssPrefix,"-").concat(Ne)),e),o=null,l=we;(t.includes(s[we])||t.some(function(c){return Wy[we].includes(c)}))&&(l=we),(t.includes(s[Ne])||t.some(function(c){return Wy[Ne].includes(c)}))&&(l=Ne);var u=t.reduce(function(c,d){var p=jA(q.cssPrefix,d);if(Yi[d]?(d=VA[l].includes(d)?dA[l][d]:d,o=d,c.prefix=d):FA[l].indexOf(d)>-1?(o=d,c.prefix=uc(d,{family:l})):p?c.iconName=p:d!==q.replacementClass&&d!==s[we]&&d!==s[Ne]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var y=o==="fa"?s1(c.iconName):{},T=Zr(c.prefix,c.iconName);y.prefix&&(o=null),c.iconName=y.iconName||T||c.iconName,c.prefix=y.prefix||c.prefix,c.prefix==="far"&&!Yi.far&&Yi.fas&&!q.autoFetchSvg&&(c.prefix="fas")}return c},Rp());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===Ne&&(Yi.fass||q.autoFetchSvg)&&(u.prefix="fass",u.iconName=Zr(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Rr()||"fas"),u}var $A=function(){function t(){tA(this,t),this.definitions={}}return nA(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=$($({},n.definitions[l]||{}),o[l]),$f(l,o[l]);var u=ia[we][l];u&&$f(u,o[l]),i1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],l=o.prefix,u=o.iconName,c=o.icon,d=c[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[l][p]=c)}),n[l][u]=c}),n}}]),t}(),Hy=[],Gi={},rs={},WA=Object.keys(rs);function HA(t,e){var n=e.mixoutsTo;return Hy=t,Gi={},Object.keys(rs).forEach(function(r){WA.indexOf(r)===-1&&delete rs[r]}),Hy.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Iu(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Gi[o]||(Gi[o]=[]),Gi[o].push(s[o])})}r.provides&&r.provides(rs)}),n}function Wf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Gi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function hi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Gi[t]||[];i.forEach(function(s){s.apply(null,n)})}function $n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rs[t]?rs[t].apply(null,e):void 0}function Hf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Rr();if(e)return e=Zr(n,e)||e,By(o1.definitions,n,e)||By(Jt.styles,n,e)}var o1=new $A,qA=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,hi("noAuto")},YA={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kn?(hi("beforeI2svg",e),$n("pseudoElements2svg",e),$n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,NA(function(){KA({autoReplaceSvgRoot:n}),hi("watch",e)})}},GA={icon:function(e){if(e===null)return null;if(Iu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Zr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=uc(e[0]);return{prefix:r,iconName:Zr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(q.cssPrefix,"-"))>-1||e.match(pA))){var i=cc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Rr(),iconName:Zr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Rr();return{prefix:s,iconName:Zr(s,e)||e}}}},Vt={noAuto:qA,config:q,dom:YA,parse:GA,library:o1,findIconDefinition:Hf,toHtml:Ia},KA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Te:n;(Object.keys(Jt.styles).length>0||q.autoFetchSvg)&&Kn&&q.autoReplaceSvg&&Vt.dom.i2svg({node:r})};function hc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ia(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Kn){var r=Te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function QA(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Pp(o)&&n.found&&!r.found){var l=n.width,u=n.height,c={x:l/u/2,y:.5};i.style=lc($($({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function XA(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function xp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,l=t.symbol,u=t.title,c=t.maskId,d=t.titleId,p=t.extra,y=t.watchable,T=y===void 0?!1:y,b=r.found?r:n,C=b.width,A=b.height,E=i==="fak",v=[q.replacementClass,s?"".concat(q.cssPrefix,"-").concat(s):""].filter(function(w){return p.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(p.classes).join(" "),I={children:[],attributes:$($({},p.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(A)})},O=E&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/A*16*.0625,"em")}:{};T&&(I.attributes[ci]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(d||oa())},children:[u]}),delete I.attributes.title);var D=$($({},I),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:$($({},O),p.styles)}),F=r.found&&n.found?$n("generateAbstractMask",D)||{children:[],attributes:{}}:$n("generateAbstractIcon",D)||{children:[],attributes:{}},_=F.children,g=F.attributes;return D.children=_,D.attributes=g,l?XA(D):QA(D)}function qy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,l=t.watchable,u=l===void 0?!1:l,c=$($($({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[ci]="");var d=$({},o.styles);Pp(i)&&(d.transform=bA({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var p=lc(d);p.length>0&&(c.style=p);var y=[];return y.push({tag:"span",attributes:c,children:[e]}),s&&y.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),y}function JA(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=lc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Rh=Jt.styles;function qf(t){var e=t[0],n=t[1],r=t.slice(4),i=Ep(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Jr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Jr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Jr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var ZA={found:!1,width:512,height:512};function eP(t,e){!qw&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yf(t,e){var n=e;return e==="fa"&&q.styleDefault!==null&&(e=Rr()),new Promise(function(r,i){if($n("missingIconAbstract"),n==="fa"){var s=s1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Rh[e]&&Rh[e][t]){var o=Rh[e][t];return r(qf(o))}eP(t,e),r($($({},ZA),{},{icon:q.showMissingIcons&&t?$n("missingIconAbstract")||{}:{}}))})}var Yy=function(){},Gf=q.measurePerformance&&gl&&gl.mark&&gl.measure?gl:{mark:Yy,measure:Yy},go='FA "6.5.1"',tP=function(e){return Gf.mark("".concat(go," ").concat(e," begins")),function(){return a1(e)}},a1=function(e){Gf.mark("".concat(go," ").concat(e," ends")),Gf.measure("".concat(go," ").concat(e),"".concat(go," ").concat(e," begins"),"".concat(go," ").concat(e," ends"))},Np={begin:tP,end:a1},Bl=function(){};function Gy(t){var e=t.getAttribute?t.getAttribute(ci):null;return typeof e=="string"}function nP(t){var e=t.getAttribute?t.getAttribute(Ip):null,n=t.getAttribute?t.getAttribute(kp):null;return e&&n}function rP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function iP(){if(q.autoReplaceSvg===!0)return $l.replace;var t=$l[q.autoReplaceSvg];return t||$l.replace}function sP(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function oP(t){return Te.createElement(t)}function l1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?sP:oP:n;if(typeof t=="string")return Te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(l1(o,{ceFn:r}))}),i}function aP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var $l={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(l1(i),n)}),n.getAttribute(ci)===null&&q.keepOriginalSource){var r=Te.createComment(aP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ap(n).indexOf(q.replacementClass))return $l.replace(e);var i=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,u){return u===q.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(l){return Ia(l)}).join(`
`);n.setAttribute(ci,""),n.innerHTML=o}};function Ky(t){t()}function u1(t,e){var n=typeof e=="function"?e:Bl;if(t.length===0)n();else{var r=Ky;q.mutateApproach===hA&&(r=Cr.requestAnimationFrame||Ky),r(function(){var i=iP(),s=Np.begin("mutate");t.map(i),s(),n()})}}var Op=!1;function c1(){Op=!0}function Kf(){Op=!1}var Su=null;function Qy(t){if(Uy&&q.observeMutations){var e=t.treeCallback,n=e===void 0?Bl:e,r=t.nodeCallback,i=r===void 0?Bl:r,s=t.pseudoElementsCallback,o=s===void 0?Bl:s,l=t.observeMutationsRoot,u=l===void 0?Te:l;Su=new Uy(function(c){if(!Op){var d=Rr();Ns(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Gy(p.addedNodes[0])&&(q.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&q.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Gy(p.target)&&~vA.indexOf(p.attributeName))if(p.attributeName==="class"&&nP(p.target)){var y=cc(Ap(p.target)),T=y.prefix,b=y.iconName;p.target.setAttribute(Ip,T||d),b&&p.target.setAttribute(kp,b)}else rP(p.target)&&i(p.target)})}}),Kn&&Su.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lP(){Su&&Su.disconnect()}function uP(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function cP(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=cc(Ap(t));return i.prefix||(i.prefix=Rr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=zA(i.prefix,t.innerText)||Cp(i.prefix,Bf(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function hP(t){var e=Ns(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||oa()):(e["aria-hidden"]="true",e.focusable="false")),e}function fP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cP(t),r=n.iconName,i=n.prefix,s=n.rest,o=hP(t),l=Wf("parseNodeAttributes",{},t),u=e.styleParser?uP(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},l)}var dP=Jt.styles;function h1(t){var e=q.autoReplaceSvg==="nest"?Xy(t,{styleParser:!1}):Xy(t);return~e.extra.classes.indexOf(Yw)?$n("generateLayersText",t,e):$n("generateSvgReplacementMutation",t,e)}var xr=new Set;Sp.map(function(t){xr.add("fa-".concat(t))});Object.keys(na[we]).map(xr.add.bind(xr));Object.keys(na[Ne]).map(xr.add.bind(xr));xr=Ea(xr);function Jy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kn)return Promise.resolve();var n=Te.documentElement.classList,r=function(p){return n.add("".concat(jy,"-").concat(p))},i=function(p){return n.remove("".concat(jy,"-").concat(p))},s=q.autoFetchSvg?xr:Sp.map(function(d){return"fa-".concat(d)}).concat(Object.keys(dP));s.includes("fa")||s.push("fa");var o=[".".concat(Yw,":not([").concat(ci,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(ci,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Ns(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Np.begin("onTree"),c=l.reduce(function(d,p){try{var y=h1(p);y&&d.push(y)}catch(T){qw||T.name==="MissingIcon"&&console.error(T)}return d},[]);return new Promise(function(d,p){Promise.all(c).then(function(y){u1(y,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(function(y){u(),p(y)})})}function pP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;h1(t).then(function(n){n&&u1([n],e)})}function mP(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Hf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hf(i||{})),t(r,$($({},n),{},{mask:i}))}}var gP=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?hn:r,s=n.symbol,o=s===void 0?!1:s,l=n.mask,u=l===void 0?null:l,c=n.maskId,d=c===void 0?null:c,p=n.title,y=p===void 0?null:p,T=n.titleId,b=T===void 0?null:T,C=n.classes,A=C===void 0?[]:C,E=n.attributes,v=E===void 0?{}:E,I=n.styles,O=I===void 0?{}:I;if(e){var D=e.prefix,F=e.iconName,_=e.icon;return hc($({type:"icon"},e),function(){return hi("beforeDOMElementCreation",{iconDefinition:e,params:n}),q.autoA11y&&(y?v["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(b||oa()):(v["aria-hidden"]="true",v.focusable="false")),xp({icons:{main:qf(_),mask:u?qf(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:F,transform:$($({},hn),i),symbol:o,title:y,maskId:d,titleId:b,extra:{attributes:v,styles:O,classes:A}})})}},yP={mixout:function(){return{icon:mP(gP)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Jy,n.nodeCallback=pP,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Te:r,s=n.callback,o=s===void 0?function(){}:s;return Jy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,l=r.prefix,u=r.transform,c=r.symbol,d=r.mask,p=r.maskId,y=r.extra;return new Promise(function(T,b){Promise.all([Yf(i,l),d.iconName?Yf(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var A=Ep(C,2),E=A[0],v=A[1];T([n,xp({icons:{main:E,mask:v},prefix:l,iconName:i,transform:u,symbol:c,maskId:p,title:s,titleId:o,extra:y,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,l=n.styles,u=lc(l);u.length>0&&(i.style=u);var c;return Pp(o)&&(c=$n("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},vP={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return hc({type:"layer"},function(){hi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(Ea(s)).join(" ")},children:o}]})}}}},_P={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,d=r.styles,p=d===void 0?{}:d;return hc({type:"counter",content:n},function(){return hi("beforeDOMElementCreation",{content:n,params:r}),JA({content:n.toString(),title:s,extra:{attributes:c,styles:p,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(Ea(l))}})})}}}},wP={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?hn:i,o=r.title,l=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,d=r.attributes,p=d===void 0?{}:d,y=r.styles,T=y===void 0?{}:y;return hc({type:"text",content:n},function(){return hi("beforeDOMElementCreation",{content:n,params:r}),qy({content:n,transform:$($({},hn),s),title:l,extra:{attributes:p,styles:T,classes:["".concat(q.cssPrefix,"-layers-text")].concat(Ea(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,l=null,u=null;if($w){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();l=d.width/c,u=d.height/c}return q.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qy({content:n.innerHTML,width:l,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},EP=new RegExp('"',"ug"),Zy=[1105920,1112319];function TP(t){var e=t.replace(EP,""),n=MA(e,0),r=n>=Zy[0]&&n<=Zy[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bf(i?e[0]:e),isSecondary:r||i}}function ev(t,e){var n="".concat(cA).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ns(t.children),o=s.filter(function(_){return _.getAttribute(zf)===e})[0],l=Cr.getComputedStyle(t,e),u=l.getPropertyValue("font-family").match(mA),c=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var p=l.getPropertyValue("content"),y=~["Sharp"].indexOf(u[2])?Ne:we,T=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?ra[y][u[2].toLowerCase()]:gA[y][c],b=TP(p),C=b.value,A=b.isSecondary,E=u[0].startsWith("FontAwesome"),v=Cp(T,C),I=v;if(E){var O=BA(C);O.iconName&&O.prefix&&(v=O.iconName,T=O.prefix)}if(v&&!A&&(!o||o.getAttribute(Ip)!==T||o.getAttribute(kp)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);var D=fP(),F=D.extra;F.attributes[zf]=e,Yf(v,T).then(function(_){var g=xp($($({},D),{},{icons:{main:_,mask:Rp()},prefix:T,iconName:I,extra:F,watchable:!0})),w=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=g.map(function(k){return Ia(k)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function IP(t){return Promise.all([ev(t,"::before"),ev(t,"::after")])}function kP(t){return t.parentNode!==document.head&&!~fA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tv(t){if(Kn)return new Promise(function(e,n){var r=Ns(t.querySelectorAll("*")).filter(kP).map(IP),i=Np.begin("searchPseudoElements");c1(),Promise.all(r).then(function(){i(),Kf(),e()}).catch(function(){i(),Kf(),n()})})}var SP={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=tv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Te:r;q.searchPseudoElements&&tv(i)}}},nv=!1,AP={mixout:function(){return{dom:{unwatch:function(){c1(),nv=!0}}}},hooks:function(){return{bootstrap:function(){Qy(Wf("mutationObserverCallbacks",{}))},noAuto:function(){lP()},watch:function(n){var r=n.observeMutationsRoot;nv?Kf():Qy(Wf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},rv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},PP={mixout:function(){return{parse:{transform:function(n){return rv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=rv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(u," ").concat(c," ").concat(d)},y={transform:"translate(".concat(o/2*-1," -256)")},T={outer:l,inner:p,path:y};return{tag:"g",attributes:$({},T.outer),children:[{tag:"g",attributes:$({},T.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),T.path)}]}]}}}},xh={x:0,y:0,width:"100%",height:"100%"};function iv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function bP(t){return t.tag==="g"?t.children:[t]}var CP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?cc(i.split(" ").map(function(o){return o.trim()})):Rp();return s.prefix||(s.prefix=Rr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,l=n.maskId,u=n.transform,c=s.width,d=s.icon,p=o.width,y=o.icon,T=PA({transform:u,containerWidth:p,iconWidth:c}),b={tag:"rect",attributes:$($({},xh),{},{fill:"white"})},C=d.children?{children:d.children.map(iv)}:{},A={tag:"g",attributes:$({},T.inner),children:[iv($({tag:d.tag,attributes:$($({},d.attributes),T.path)},C))]},E={tag:"g",attributes:$({},T.outer),children:[A]},v="mask-".concat(l||oa()),I="clip-".concat(l||oa()),O={tag:"mask",attributes:$($({},xh),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,E]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:bP(y)},O]};return r.push(D,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(v,")")},xh)}),{children:r,attributes:i}}}},RP={provides:function(e){var n=!1;Cr.matchMedia&&(n=Cr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xP={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},NP=[RA,yP,vP,_P,wP,SP,AP,PP,CP,RP,xP];HA(NP,{mixoutsTo:Vt});Vt.noAuto;Vt.config;Vt.library;Vt.dom;var Qf=Vt.parse;Vt.findIconDefinition;Vt.toHtml;var OP=Vt.icon;Vt.layer;Vt.text;Vt.counter;var f1={exports:{}},DP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MP=DP,LP=MP;function d1(){}function p1(){}p1.resetWarningCache=d1;var VP=function(){function t(r,i,s,o,l,u){if(u!==LP){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:p1,resetWarningCache:d1};return n.PropTypes=n,n};f1.exports=VP();var FP=f1.exports;const te=S0(FP);function sv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sv(Object(n),!0).forEach(function(r){Ki(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Au(t){"@babel/helpers - typeof";return Au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Au(t)}function Ki(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function jP(t,e){if(t==null)return{};var n=UP(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Xf(t){return zP(t)||BP(t)||$P(t)||WP()}function zP(t){if(Array.isArray(t))return Jf(t)}function BP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $P(t,e){if(t){if(typeof t=="string")return Jf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jf(t,e)}}function Jf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function WP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HP(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,y=t.fixedWidth,T=t.inverse,b=t.border,C=t.listItem,A=t.flip,E=t.size,v=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":y,"fa-inverse":T,"fa-border":b,"fa-li":C,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},Ki(e,"fa-".concat(E),typeof E<"u"&&E!==null),Ki(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Ki(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),Ki(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(D){return O[D]?D:null}).filter(function(D){return D})}function qP(t){return t=t-0,t===t}function m1(t){return qP(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var YP=["style"];function GP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function KP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=m1(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[GP(i)]=s:e[i]=s,e},{})}function g1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return g1(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=KP(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[m1(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=jP(n,YP);return i.attrs.style=pr(pr({},i.attrs.style),o),t.apply(void 0,[e.tag,pr(pr({},i.attrs),l)].concat(Xf(r)))}var y1=!1;try{y1=!0}catch{}function QP(){if(!y1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ov(t){if(t&&Au(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qf.icon)return Qf.icon(t);if(t===null)return null;if(t&&Au(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Nh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ki({},t,e):{}}var zt=Rd.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,l=t.titleId,u=t.maskId,c=ov(n),d=Nh("classes",[].concat(Xf(HP(t)),Xf(s.split(" ")))),p=Nh("transform",typeof t.transform=="string"?Qf.transform(t.transform):t.transform),y=Nh("mask",ov(r)),T=OP(c,pr(pr(pr(pr({},d),p),y),{},{symbol:i,title:o,titleId:l,maskId:u}));if(!T)return QP("Could not find icon",c),null;var b=T.abstract,C={ref:e};return Object.keys(t).forEach(function(A){zt.defaultProps.hasOwnProperty(A)||(C[A]=t[A])}),XP(b[0],C)});zt.displayName="FontAwesomeIcon";zt.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};zt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var XP=g1.bind(null,Rd.createElement);function ce(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function me(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function Dp(t,e){const n=ce(t);return isNaN(e)?me(t,NaN):(e&&n.setDate(n.getDate()+e),n)}function JP(t,e){const n=ce(t);if(isNaN(e))return me(t,NaN);if(!e)return n;const r=n.getDate(),i=me(t,n.getTime());i.setMonth(n.getMonth()+e+1,0);const s=i.getDate();return r>=s?i:(n.setFullYear(i.getFullYear(),i.getMonth(),r),n)}function av(t,e){const{years:n=0,months:r=0,weeks:i=0,days:s=0,hours:o=0,minutes:l=0,seconds:u=0}=e,c=ce(t),d=r||n?JP(c,r+n*12):c,p=s||i?Dp(d,s+i*7):d,y=l+o*60,b=(u+y*60)*1e3;return me(t,p.getTime()+b)}const v1=6048e5,ZP=864e5,e2=6e4,t2=36e5,n2=1e3;let r2={};function Ei(){return r2}function Wn(t,e){var l,u,c,d;const n=Ei(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,i=ce(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function ys(t){return Wn(t,{weekStartsOn:1})}function _1(t){const e=ce(t),n=e.getFullYear(),r=me(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=ys(r),s=me(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=ys(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function aa(t){const e=ce(t);return e.setHours(0,0,0,0),e}function Pu(t){const e=ce(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function i2(t,e){const n=aa(t),r=aa(e),i=+n-Pu(n),s=+r-Pu(r);return Math.round((i-s)/ZP)}function s2(t){const e=_1(t),n=me(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),ys(n)}function o2(t){return me(t,Date.now())}function a2(t,e){const n=aa(t),r=aa(e);return+n==+r}function l2(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function u2(t){if(!l2(t)&&typeof t!="number")return!1;const e=ce(t);return!isNaN(Number(e))}function c2(t){const e=ce(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function h2(t,e){const n=ce(t.start),r=ce(t.end);let i=+n>+r;const s=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let l=(e==null?void 0:e.step)??1;if(!l)return[];l<0&&(l=-l,i=!i);const u=[];for(;+o<=s;)u.push(ce(o)),o.setDate(o.getDate()+l),o.setHours(0,0,0,0);return i?u.reverse():u}function f2(t){const e=ce(t),n=me(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function d2(t,e){var l,u,c,d;const n=Ei(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??n.weekStartsOn??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??0,i=ce(t),s=i.getDay(),o=(s<r?-7:0)+6-(s-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}const p2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},m2=(t,e,n)=>{let r;const i=p2[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Oh(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const g2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},y2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},v2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},_2={date:Oh({formats:g2,defaultWidth:"full"}),time:Oh({formats:y2,defaultWidth:"full"}),dateTime:Oh({formats:v2,defaultWidth:"full"})},w2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},E2=(t,e,n,r)=>w2[t];function lo(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,l=n!=null&&n.width?String(n.width):o;i=t.formattingValues[l]||t.formattingValues[o]}else{const o=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const T2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},I2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},k2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},S2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},A2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},P2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},b2=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},C2={ordinalNumber:b2,era:lo({values:T2,defaultWidth:"wide"}),quarter:lo({values:I2,defaultWidth:"wide",argumentCallback:t=>t-1}),month:lo({values:k2,defaultWidth:"wide"}),day:lo({values:S2,defaultWidth:"wide"}),dayPeriod:lo({values:A2,defaultWidth:"wide",formattingValues:P2,defaultFormattingWidth:"wide"})};function uo(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?x2(l,p=>p.test(o)):R2(l,p=>p.test(o));let c;c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}function R2(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function x2(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function N2(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const l=e.slice(i.length);return{value:o,rest:l}}}const O2=/^(\d+)(th|st|nd|rd)?/i,D2=/\d+/i,M2={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},L2={any:[/^b/i,/^(a|c)/i]},V2={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},F2={any:[/1/i,/2/i,/3/i,/4/i]},U2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},j2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z2={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B2={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$2={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},W2={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},H2={ordinalNumber:N2({matchPattern:O2,parsePattern:D2,valueCallback:t=>parseInt(t,10)}),era:uo({matchPatterns:M2,defaultMatchWidth:"wide",parsePatterns:L2,defaultParseWidth:"any"}),quarter:uo({matchPatterns:V2,defaultMatchWidth:"wide",parsePatterns:F2,defaultParseWidth:"any",valueCallback:t=>t+1}),month:uo({matchPatterns:U2,defaultMatchWidth:"wide",parsePatterns:j2,defaultParseWidth:"any"}),day:uo({matchPatterns:z2,defaultMatchWidth:"wide",parsePatterns:B2,defaultParseWidth:"any"}),dayPeriod:uo({matchPatterns:$2,defaultMatchWidth:"any",parsePatterns:W2,defaultParseWidth:"any"})},w1={code:"en-US",formatDistance:m2,formatLong:_2,formatRelative:E2,localize:C2,match:H2,options:{weekStartsOn:0,firstWeekContainsDate:1}};function q2(t){const e=ce(t);return i2(e,f2(e))+1}function E1(t){const e=ce(t),n=+ys(e)-+s2(e);return Math.round(n/v1)+1}function Mp(t,e){var d,p,y,T;const n=ce(t),r=n.getFullYear(),i=Ei(),s=(e==null?void 0:e.firstWeekContainsDate)??((p=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((T=(y=i.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??1,o=me(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const l=Wn(o,e),u=me(t,0);u.setFullYear(r,0,s),u.setHours(0,0,0,0);const c=Wn(u,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function Y2(t,e){var l,u,c,d;const n=Ei(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(c=n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??1,i=Mp(t,e),s=me(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Wn(s,e)}function T1(t,e){const n=ce(t),r=+Wn(n,e)-+Y2(n,e);return Math.round(r/v1)+1}function he(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const nr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return he(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):he(n+1,2)},d(t,e){return he(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return he(t.getHours()%12||12,e.length)},H(t,e){return he(t.getHours(),e.length)},m(t,e){return he(t.getMinutes(),e.length)},s(t,e){return he(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return he(i,e.length)}},xi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},lv={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return nr.y(t,e)},Y:function(t,e,n,r){const i=Mp(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return he(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):he(s,e.length)},R:function(t,e){const n=_1(t);return he(n,e.length)},u:function(t,e){const n=t.getFullYear();return he(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return he(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return he(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return nr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return he(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=T1(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):he(i,e.length)},I:function(t,e,n){const r=E1(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):he(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):nr.d(t,e)},D:function(t,e,n){const r=q2(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):he(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return he(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return he(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return he(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=xi.noon:r===0?i=xi.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=xi.evening:r>=12?i=xi.afternoon:r>=4?i=xi.morning:i=xi.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return nr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):nr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):he(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):he(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):nr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):nr.s(t,e)},S:function(t,e){return nr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return cv(r);case"XXXX":case"XX":return Yr(r);case"XXXXX":case"XXX":default:return Yr(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return cv(r);case"xxxx":case"xx":return Yr(r);case"xxxxx":case"xxx":default:return Yr(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+uv(r,":");case"OOOO":default:return"GMT"+Yr(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+uv(r,":");case"zzzz":default:return"GMT"+Yr(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return he(r,e.length)},T:function(t,e,n){const r=t.getTime();return he(r,e.length)}};function uv(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+he(s,2)}function cv(t,e){return t%60===0?(t>0?"-":"+")+he(Math.abs(t)/60,2):Yr(t,e)}function Yr(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=he(Math.trunc(r/60),2),s=he(r%60,2);return n+i+e+s}const hv=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},I1=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},G2=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return hv(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",hv(r,e)).replace("{{time}}",I1(i,e))},Zf={p:I1,P:G2},K2=/^D+$/,Q2=/^Y+$/,X2=["D","DD","YY","YYYY"];function k1(t){return K2.test(t)}function S1(t){return Q2.test(t)}function ed(t,e,n){const r=J2(t,e,n);if(console.warn(r),X2.includes(t))throw new RangeError(r)}function J2(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Z2=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,eb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tb=/^'([^]*?)'?$/,nb=/''/g,rb=/[a-zA-Z]/;function Ge(t,e,n){var d,p,y,T,b,C,A,E;const r=Ei(),i=(n==null?void 0:n.locale)??r.locale??w1,s=(n==null?void 0:n.firstWeekContainsDate)??((p=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((T=(y=r.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??1,o=(n==null?void 0:n.weekStartsOn)??((C=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:C.weekStartsOn)??r.weekStartsOn??((E=(A=r.locale)==null?void 0:A.options)==null?void 0:E.weekStartsOn)??0,l=ce(t);if(!u2(l))throw new RangeError("Invalid time value");let u=e.match(eb).map(v=>{const I=v[0];if(I==="p"||I==="P"){const O=Zf[I];return O(v,i.formatLong)}return v}).join("").match(Z2).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const I=v[0];if(I==="'")return{isToken:!1,value:ib(v)};if(lv[I])return{isToken:!0,value:v};if(I.match(rb))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const c={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return u.map(v=>{if(!v.isToken)return v.value;const I=v.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&S1(I)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&k1(I))&&ed(I,e,String(t));const O=lv[I[0]];return O(l,I,i.localize,c)}).join("")}function ib(t){const e=t.match(tb);return e?e[1].replace(nb,"'"):t}function sb(){return Object.assign({},Ei())}function ob(t){let n=ce(t).getDay();return n===0&&(n=7),n}function ab(t,e){const n=ce(t),r=ce(e);return+n==+r}function lb(t,e){const n=e instanceof Date?me(e,0):new e(0);return n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),n}const ub=10;class A1{constructor(){B(this,"subPriority",0)}validate(e,n){return!0}}class cb extends A1{constructor(e,n,r,i,s){super(),this.value=e,this.validateValue=n,this.setValue=r,this.priority=i,s&&(this.subPriority=s)}validate(e,n){return this.validateValue(e,this.value,n)}set(e,n,r){return this.setValue(e,n,this.value,r)}}class hb extends A1{constructor(){super(...arguments);B(this,"priority",ub);B(this,"subPriority",-1)}set(n,r){return r.timestampIsSet?n:me(n,lb(n,Date))}}class ue{run(e,n,r,i){const s=this.parse(e,n,r,i);return s?{setter:new cb(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(e,n,r){return!0}}class fb extends ue{constructor(){super(...arguments);B(this,"priority",140);B(this,"incompatibleTokens",["R","u","t","T"])}parse(n,r,i){switch(r){case"G":case"GG":case"GGG":return i.era(n,{width:"abbreviated"})||i.era(n,{width:"narrow"});case"GGGGG":return i.era(n,{width:"narrow"});case"GGGG":default:return i.era(n,{width:"wide"})||i.era(n,{width:"abbreviated"})||i.era(n,{width:"narrow"})}}set(n,r,i){return r.era=i,n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}}const Fe={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},un={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ue(t,e){return t&&{value:e(t.value),rest:t.rest}}function Ae(t,e){const n=e.match(t);return n?{value:parseInt(n[0],10),rest:e.slice(n[0].length)}:null}function cn(t,e){const n=e.match(t);if(!n)return null;if(n[0]==="Z")return{value:0,rest:e.slice(1)};const r=n[1]==="+"?1:-1,i=n[2]?parseInt(n[2],10):0,s=n[3]?parseInt(n[3],10):0,o=n[5]?parseInt(n[5],10):0;return{value:r*(i*t2+s*e2+o*n2),rest:e.slice(n[0].length)}}function P1(t){return Ae(Fe.anyDigitsSigned,t)}function De(t,e){switch(t){case 1:return Ae(Fe.singleDigit,e);case 2:return Ae(Fe.twoDigits,e);case 3:return Ae(Fe.threeDigits,e);case 4:return Ae(Fe.fourDigits,e);default:return Ae(new RegExp("^\\d{1,"+t+"}"),e)}}function bu(t,e){switch(t){case 1:return Ae(Fe.singleDigitSigned,e);case 2:return Ae(Fe.twoDigitsSigned,e);case 3:return Ae(Fe.threeDigitsSigned,e);case 4:return Ae(Fe.fourDigitsSigned,e);default:return Ae(new RegExp("^-?\\d{1,"+t+"}"),e)}}function Lp(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function b1(t,e){const n=e>0,r=n?e:1-e;let i;if(r<=50)i=t||100;else{const s=r+50,o=Math.trunc(s/100)*100,l=t>=s%100;i=t+o-(l?100:0)}return n?i:1-i}function C1(t){return t%400===0||t%4===0&&t%100!==0}class db extends ue{constructor(){super(...arguments);B(this,"priority",130);B(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(n,r,i){const s=o=>({year:o,isTwoDigitYear:r==="yy"});switch(r){case"y":return Ue(De(4,n),s);case"yo":return Ue(i.ordinalNumber(n,{unit:"year"}),s);default:return Ue(De(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,i){const s=n.getFullYear();if(i.isTwoDigitYear){const l=b1(i.year,s);return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}const o=!("era"in r)||r.era===1?i.year:1-i.year;return n.setFullYear(o,0,1),n.setHours(0,0,0,0),n}}class pb extends ue{constructor(){super(...arguments);B(this,"priority",130);B(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(n,r,i){const s=o=>({year:o,isTwoDigitYear:r==="YY"});switch(r){case"Y":return Ue(De(4,n),s);case"Yo":return Ue(i.ordinalNumber(n,{unit:"year"}),s);default:return Ue(De(r.length,n),s)}}validate(n,r){return r.isTwoDigitYear||r.year>0}set(n,r,i,s){const o=Mp(n,s);if(i.isTwoDigitYear){const u=b1(i.year,o);return n.setFullYear(u,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),Wn(n,s)}const l=!("era"in r)||r.era===1?i.year:1-i.year;return n.setFullYear(l,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),Wn(n,s)}}class mb extends ue{constructor(){super(...arguments);B(this,"priority",130);B(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(n,r){return bu(r==="R"?4:r.length,n)}set(n,r,i){const s=me(n,0);return s.setFullYear(i,0,4),s.setHours(0,0,0,0),ys(s)}}class gb extends ue{constructor(){super(...arguments);B(this,"priority",130);B(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(n,r){return bu(r==="u"?4:r.length,n)}set(n,r,i){return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}}class yb extends ue{constructor(){super(...arguments);B(this,"priority",120);B(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"Q":case"QQ":return De(r.length,n);case"Qo":return i.ordinalNumber(n,{unit:"quarter"});case"QQQ":return i.quarter(n,{width:"abbreviated",context:"formatting"})||i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return i.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(n,{width:"wide",context:"formatting"})||i.quarter(n,{width:"abbreviated",context:"formatting"})||i.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=1&&r<=4}set(n,r,i){return n.setMonth((i-1)*3,1),n.setHours(0,0,0,0),n}}class vb extends ue{constructor(){super(...arguments);B(this,"priority",120);B(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"q":case"qq":return De(r.length,n);case"qo":return i.ordinalNumber(n,{unit:"quarter"});case"qqq":return i.quarter(n,{width:"abbreviated",context:"standalone"})||i.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return i.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(n,{width:"wide",context:"standalone"})||i.quarter(n,{width:"abbreviated",context:"standalone"})||i.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=1&&r<=4}set(n,r,i){return n.setMonth((i-1)*3,1),n.setHours(0,0,0,0),n}}class _b extends ue{constructor(){super(...arguments);B(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);B(this,"priority",110)}parse(n,r,i){const s=o=>o-1;switch(r){case"M":return Ue(Ae(Fe.month,n),s);case"MM":return Ue(De(2,n),s);case"Mo":return Ue(i.ordinalNumber(n,{unit:"month"}),s);case"MMM":return i.month(n,{width:"abbreviated",context:"formatting"})||i.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return i.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(n,{width:"wide",context:"formatting"})||i.month(n,{width:"abbreviated",context:"formatting"})||i.month(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.setMonth(i,1),n.setHours(0,0,0,0),n}}class wb extends ue{constructor(){super(...arguments);B(this,"priority",110);B(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(n,r,i){const s=o=>o-1;switch(r){case"L":return Ue(Ae(Fe.month,n),s);case"LL":return Ue(De(2,n),s);case"Lo":return Ue(i.ordinalNumber(n,{unit:"month"}),s);case"LLL":return i.month(n,{width:"abbreviated",context:"standalone"})||i.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return i.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(n,{width:"wide",context:"standalone"})||i.month(n,{width:"abbreviated",context:"standalone"})||i.month(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.setMonth(i,1),n.setHours(0,0,0,0),n}}function Eb(t,e,n){const r=ce(t),i=T1(r,n)-e;return r.setDate(r.getDate()-i*7),r}class Tb extends ue{constructor(){super(...arguments);B(this,"priority",100);B(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(n,r,i){switch(r){case"w":return Ae(Fe.week,n);case"wo":return i.ordinalNumber(n,{unit:"week"});default:return De(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,i,s){return Wn(Eb(n,i,s),s)}}function Ib(t,e){const n=ce(t),r=E1(n)-e;return n.setDate(n.getDate()-r*7),n}class kb extends ue{constructor(){super(...arguments);B(this,"priority",100);B(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(n,r,i){switch(r){case"I":return Ae(Fe.week,n);case"Io":return i.ordinalNumber(n,{unit:"week"});default:return De(r.length,n)}}validate(n,r){return r>=1&&r<=53}set(n,r,i){return ys(Ib(n,i))}}const Sb=[31,28,31,30,31,30,31,31,30,31,30,31],Ab=[31,29,31,30,31,30,31,31,30,31,30,31];class Pb extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"subPriority",1);B(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"d":return Ae(Fe.date,n);case"do":return i.ordinalNumber(n,{unit:"date"});default:return De(r.length,n)}}validate(n,r){const i=n.getFullYear(),s=C1(i),o=n.getMonth();return s?r>=1&&r<=Ab[o]:r>=1&&r<=Sb[o]}set(n,r,i){return n.setDate(i),n.setHours(0,0,0,0),n}}class bb extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"subpriority",1);B(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(n,r,i){switch(r){case"D":case"DD":return Ae(Fe.dayOfYear,n);case"Do":return i.ordinalNumber(n,{unit:"date"});default:return De(r.length,n)}}validate(n,r){const i=n.getFullYear();return C1(i)?r>=1&&r<=366:r>=1&&r<=365}set(n,r,i){return n.setMonth(0,i),n.setHours(0,0,0,0),n}}function Vp(t,e,n){var p,y,T,b;const r=Ei(),i=(n==null?void 0:n.weekStartsOn)??((y=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??r.weekStartsOn??((b=(T=r.locale)==null?void 0:T.options)==null?void 0:b.weekStartsOn)??0,s=ce(t),o=s.getDay(),u=(e%7+7)%7,c=7-i,d=e<0||e>6?e-(o+c)%7:(u+c)%7-(o+c)%7;return Dp(s,d)}class Cb extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(n,r,i){switch(r){case"E":case"EE":case"EEE":return i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return i.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Vp(n,i,s),n.setHours(0,0,0,0),n}}class Rb extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(n,r,i,s){const o=l=>{const u=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+u};switch(r){case"e":case"ee":return Ue(De(r.length,n),o);case"eo":return Ue(i.ordinalNumber(n,{unit:"day"}),o);case"eee":return i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"eeeee":return i.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Vp(n,i,s),n.setHours(0,0,0,0),n}}class xb extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(n,r,i,s){const o=l=>{const u=Math.floor((l-1)/7)*7;return(l+s.weekStartsOn+6)%7+u};switch(r){case"c":case"cc":return Ue(De(r.length,n),o);case"co":return Ue(i.ordinalNumber(n,{unit:"day"}),o);case"ccc":return i.day(n,{width:"abbreviated",context:"standalone"})||i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"});case"ccccc":return i.day(n,{width:"narrow",context:"standalone"});case"cccccc":return i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return i.day(n,{width:"wide",context:"standalone"})||i.day(n,{width:"abbreviated",context:"standalone"})||i.day(n,{width:"short",context:"standalone"})||i.day(n,{width:"narrow",context:"standalone"})}}validate(n,r){return r>=0&&r<=6}set(n,r,i,s){return n=Vp(n,i,s),n.setHours(0,0,0,0),n}}function Nb(t,e){const n=ce(t),r=ob(n),i=e-r;return Dp(n,i)}class Ob extends ue{constructor(){super(...arguments);B(this,"priority",90);B(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(n,r,i){const s=o=>o===0?7:o;switch(r){case"i":case"ii":return De(r.length,n);case"io":return i.ordinalNumber(n,{unit:"day"});case"iii":return Ue(i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return Ue(i.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return Ue(i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return Ue(i.day(n,{width:"wide",context:"formatting"})||i.day(n,{width:"abbreviated",context:"formatting"})||i.day(n,{width:"short",context:"formatting"})||i.day(n,{width:"narrow",context:"formatting"}),s)}}validate(n,r){return r>=1&&r<=7}set(n,r,i){return n=Nb(n,i),n.setHours(0,0,0,0),n}}class Db extends ue{constructor(){super(...arguments);B(this,"priority",80);B(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(n,r,i){switch(r){case"a":case"aa":case"aaa":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(Lp(i),0,0,0),n}}class Mb extends ue{constructor(){super(...arguments);B(this,"priority",80);B(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(n,r,i){switch(r){case"b":case"bb":case"bbb":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(Lp(i),0,0,0),n}}class Lb extends ue{constructor(){super(...arguments);B(this,"priority",80);B(this,"incompatibleTokens",["a","b","t","T"])}parse(n,r,i){switch(r){case"B":case"BB":case"BBB":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})||i.dayPeriod(n,{width:"abbreviated",context:"formatting"})||i.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,r,i){return n.setHours(Lp(i),0,0,0),n}}class Vb extends ue{constructor(){super(...arguments);B(this,"priority",70);B(this,"incompatibleTokens",["H","K","k","t","T"])}parse(n,r,i){switch(r){case"h":return Ae(Fe.hour12h,n);case"ho":return i.ordinalNumber(n,{unit:"hour"});default:return De(r.length,n)}}validate(n,r){return r>=1&&r<=12}set(n,r,i){const s=n.getHours()>=12;return s&&i<12?n.setHours(i+12,0,0,0):!s&&i===12?n.setHours(0,0,0,0):n.setHours(i,0,0,0),n}}class Fb extends ue{constructor(){super(...arguments);B(this,"priority",70);B(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(n,r,i){switch(r){case"H":return Ae(Fe.hour23h,n);case"Ho":return i.ordinalNumber(n,{unit:"hour"});default:return De(r.length,n)}}validate(n,r){return r>=0&&r<=23}set(n,r,i){return n.setHours(i,0,0,0),n}}class Ub extends ue{constructor(){super(...arguments);B(this,"priority",70);B(this,"incompatibleTokens",["h","H","k","t","T"])}parse(n,r,i){switch(r){case"K":return Ae(Fe.hour11h,n);case"Ko":return i.ordinalNumber(n,{unit:"hour"});default:return De(r.length,n)}}validate(n,r){return r>=0&&r<=11}set(n,r,i){return n.getHours()>=12&&i<12?n.setHours(i+12,0,0,0):n.setHours(i,0,0,0),n}}class jb extends ue{constructor(){super(...arguments);B(this,"priority",70);B(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(n,r,i){switch(r){case"k":return Ae(Fe.hour24h,n);case"ko":return i.ordinalNumber(n,{unit:"hour"});default:return De(r.length,n)}}validate(n,r){return r>=1&&r<=24}set(n,r,i){const s=i<=24?i%24:i;return n.setHours(s,0,0,0),n}}class zb extends ue{constructor(){super(...arguments);B(this,"priority",60);B(this,"incompatibleTokens",["t","T"])}parse(n,r,i){switch(r){case"m":return Ae(Fe.minute,n);case"mo":return i.ordinalNumber(n,{unit:"minute"});default:return De(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,i){return n.setMinutes(i,0,0),n}}class Bb extends ue{constructor(){super(...arguments);B(this,"priority",50);B(this,"incompatibleTokens",["t","T"])}parse(n,r,i){switch(r){case"s":return Ae(Fe.second,n);case"so":return i.ordinalNumber(n,{unit:"second"});default:return De(r.length,n)}}validate(n,r){return r>=0&&r<=59}set(n,r,i){return n.setSeconds(i,0),n}}class $b extends ue{constructor(){super(...arguments);B(this,"priority",30);B(this,"incompatibleTokens",["t","T"])}parse(n,r){const i=s=>Math.trunc(s*Math.pow(10,-r.length+3));return Ue(De(r.length,n),i)}set(n,r,i){return n.setMilliseconds(i),n}}class Wb extends ue{constructor(){super(...arguments);B(this,"priority",10);B(this,"incompatibleTokens",["t","T","x"])}parse(n,r){switch(r){case"X":return cn(un.basicOptionalMinutes,n);case"XX":return cn(un.basic,n);case"XXXX":return cn(un.basicOptionalSeconds,n);case"XXXXX":return cn(un.extendedOptionalSeconds,n);case"XXX":default:return cn(un.extended,n)}}set(n,r,i){return r.timestampIsSet?n:me(n,n.getTime()-Pu(n)-i)}}class Hb extends ue{constructor(){super(...arguments);B(this,"priority",10);B(this,"incompatibleTokens",["t","T","X"])}parse(n,r){switch(r){case"x":return cn(un.basicOptionalMinutes,n);case"xx":return cn(un.basic,n);case"xxxx":return cn(un.basicOptionalSeconds,n);case"xxxxx":return cn(un.extendedOptionalSeconds,n);case"xxx":default:return cn(un.extended,n)}}set(n,r,i){return r.timestampIsSet?n:me(n,n.getTime()-Pu(n)-i)}}class qb extends ue{constructor(){super(...arguments);B(this,"priority",40);B(this,"incompatibleTokens","*")}parse(n){return P1(n)}set(n,r,i){return[me(n,i*1e3),{timestampIsSet:!0}]}}class Yb extends ue{constructor(){super(...arguments);B(this,"priority",20);B(this,"incompatibleTokens","*")}parse(n){return P1(n)}set(n,r,i){return[me(n,i),{timestampIsSet:!0}]}}const Gb={G:new fb,y:new db,Y:new pb,R:new mb,u:new gb,Q:new yb,q:new vb,M:new _b,L:new wb,w:new Tb,I:new kb,d:new Pb,D:new bb,E:new Cb,e:new Rb,c:new xb,i:new Ob,a:new Db,b:new Mb,B:new Lb,h:new Vb,H:new Fb,K:new Ub,k:new jb,m:new zb,s:new Bb,S:new $b,X:new Wb,x:new Hb,t:new qb,T:new Yb},Kb=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qb=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Xb=/^'([^]*?)'?$/,Jb=/''/g,Zb=/\S/,eC=/[a-zA-Z]/;function tC(t,e,n,r){var C,A,E,v,I,O,D,F;const i=sb(),s=(r==null?void 0:r.locale)??i.locale??w1,o=(r==null?void 0:r.firstWeekContainsDate)??((A=(C=r==null?void 0:r.locale)==null?void 0:C.options)==null?void 0:A.firstWeekContainsDate)??i.firstWeekContainsDate??((v=(E=i.locale)==null?void 0:E.options)==null?void 0:v.firstWeekContainsDate)??1,l=(r==null?void 0:r.weekStartsOn)??((O=(I=r==null?void 0:r.locale)==null?void 0:I.options)==null?void 0:O.weekStartsOn)??i.weekStartsOn??((F=(D=i.locale)==null?void 0:D.options)==null?void 0:F.weekStartsOn)??0;if(e==="")return t===""?ce(n):me(n,NaN);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:s},c=[new hb],d=e.match(Qb).map(_=>{const g=_[0];if(g in Zf){const w=Zf[g];return w(_,s.formatLong)}return _}).join("").match(Kb),p=[];for(let _ of d){!(r!=null&&r.useAdditionalWeekYearTokens)&&S1(_)&&ed(_,e,t),!(r!=null&&r.useAdditionalDayOfYearTokens)&&k1(_)&&ed(_,e,t);const g=_[0],w=Gb[g];if(w){const{incompatibleTokens:k}=w;if(Array.isArray(k)){const x=p.find(S=>k.includes(S.token)||S.token===g);if(x)throw new RangeError(`The format string mustn't contain \`${x.fullToken}\` and \`${_}\` at the same time`)}else if(w.incompatibleTokens==="*"&&p.length>0)throw new RangeError(`The format string mustn't contain \`${_}\` and any other token at the same time`);p.push({token:g,fullToken:_});const P=w.run(t,_,s.match,u);if(!P)return me(n,NaN);c.push(P.setter),t=P.rest}else{if(g.match(eC))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");if(_==="''"?_="'":g==="'"&&(_=nC(_)),t.indexOf(_)===0)t=t.slice(_.length);else return me(n,NaN)}}if(t.length>0&&Zb.test(t))return me(n,NaN);const y=c.map(_=>_.priority).sort((_,g)=>g-_).filter((_,g,w)=>w.indexOf(_)===g).map(_=>c.filter(g=>g.priority===_).sort((g,w)=>w.subPriority-g.subPriority)).map(_=>_[0]);let T=ce(n);if(isNaN(T.getTime()))return me(n,NaN);const b={};for(const _ of y){if(!_.validate(T,u))return me(n,NaN);const g=_.set(T,b,u);Array.isArray(g)?(T=g[0],Object.assign(b,g[1])):T=g}return me(n,T)}function nC(t){return t.match(Xb)[1].replace(Jb,"'")}function rC(t,e){const n=ce(t),r=ce(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function td(t){return a2(t,o2(t))}function Fp(){return aa(Date.now())}const iC=({selectedDay:t,setselectedDay:e,allTasks:n})=>{let r=Fp();const[i,s]=Ve.useState(Ge(r,"MMM-yyyy")),[o,l]=Ve.useState(n.filter(A=>{const E=A.date.toDate();return Ge(r,"yyyy-MM")===Ge(E,"yyyy-MM")})),[u,c]=Ve.useState(""),d=tC(i,"MMM-yyyy",new Date);let p=h2({start:Wn(d),end:d2(c2(d))});Ve.useEffect(()=>{l(n.filter(A=>{const E=A.date.toDate();return Ge(E,"yyyy-MM")===Ge(i,"yyyy-MM")}))},[i,n]);const y=()=>{const A=av(d,{months:1});s(Ge(A,"MMM-yyyy"))},T=()=>{const A=av(d,{months:-1});s(Ge(A,"MMM-yyyy"))},b=A=>{const E=Ge(A,"yyyy-MM-dd");return o.some(v=>Ge(v.date.toDate(),"yyyy-MM-dd")===E)},C=()=>{if(/^\d{2}\/\d{4}$/.test(u)){const[E,v]=u.split("/"),I=new Date(`${v}-${E}-01`);s(Ge(I,"MMM-yyyy"))}else console.error("Invalid input format. Please enter in the format 'mm/yyyy'.")};return j.jsx(j.Fragment,{children:j.jsxs("div",{className:`w-1/2 m-5 relative flex flex-col flex-wrap justify-between text-zy rounded-md bg-white \r
            after:absolute after:top-1/2 after:left-full after:w-3 after:h-[97%] after:rounded-l-none after:rounded-r-md after:bg-paper after:-translate-y-1/2\r
            before:absolute before:top-1/2 before:w-3 before:h-[94%] before:left-[calc(100%+12px)] before:rounded-l-none before:rounded-r-md before:-translate-y-1/2 before:bg-[rgb(153,153,153)]\r
            lg:w-full lg:h-full lg:py-5 lg:px-0 lg:before:top-[calc(100%+12px)] lg:before:left-1/2 lg:before:w-[94%] lg:before:h-3 lg:before:rounded-b-md lg:before:rounded-t-none lg:before:-translate-x-1/2\r
            lg:after:top-full lg:after:left-1/2 lg:after:w-[97%] lg:after:h-3 lg:after:rounded-b-md lg:after:rounded-t-none lg:after:-translate-x-1/2`,children:[j.jsxs("div",{className:"w-full h-14 mt-5 flex items-center justify-between py-0 px-48 text-xl font-medium capitalize",children:[j.jsx(zt,{className:"cursor-pointer hover:text-black",onClick:T,icon:eA}),j.jsx("div",{className:"flex items-center justify-center",children:j.jsx("span",{children:Ge(d,"MMMM yyyy")})}),j.jsx(zt,{className:"cursor-pointer hover:text-black",onClick:y,icon:YS})]}),j.jsx("div",{className:"w-full h-10 flex items-center justify-between py-0 px-5 capitalize font-medium",children:sC.map((A,E)=>j.jsx("div",{className:"w-[14.28%] h-full flex items-center justify-center",children:A}))}),j.jsx("div",{className:"w-full flex flex-wrap justify-between py-0 px-5 text-base font-medium mb-5",children:p.map((A,E)=>j.jsx("div",{onClick:()=>e(A),className:`w-[14.28%] h-[80px] flex items-center justify-center cursor-pointer border border-solid
                        ${rC(A,d)?" text-violet-300 hover:text-white hover:bg-violet-300":"text-[#b3b3b3] opacity-60"}
                        ${A<r?"text-violet-200":""}
                        ${td(A)?"text-3xl":""}
                        ${b(A)?"relative after:absolute after:bottom-[10%] after:left-1/2 after:w-3/4 after:h-1 after:rounded-3xl after:-translate-x-1/2 after:bg-violet-300 hover:after:bg-white":""}
                        ${ab(A,t)?"bg-violet-300 text-2xl text-white relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:shadow-[0_0_10px_2px_white]":""}`,children:j.jsx("time",{dateTime:Ge(A,"yyyy-MM-dd"),children:Ge(A,"d")})},A.toString()))}),j.jsxs("div",{className:"w-full h-12 flex items-center justify-between gap-1 py-0 px-5 mb-5 text-violet-300",children:[j.jsxs("div",{className:"flex items-center rounded-md overflow-hidden border-solid border border-violet-300",children:[j.jsx("input",{type:"text",onChange:A=>c(A.target.value),onKeyDown:A=>{A.key==="Enter"&&C()},value:u,placeholder:"mm/yyyy",className:"w-full h-8 outline-none border-none rounded-md px-2"}),j.jsx("button",{onClick:C,className:"py-1 px-3 border-r-0 border-t-0 border-b-0 border-l border-solid border-violet-300 bg-transparent cursor-pointer text-violet-300 hover:text-white hover:bg-violet-300",children:"go"})]}),j.jsx("button",{onClick:()=>{e(r),s(Ge(r,"MMM-yyyy"))},className:"py-1 px-3 border border-solid border-violet-300 rounded-md bg-transparent cursor-pointer text-violet-300 hover:text-white hover:bg-violet-300",children:"today"})]})]})})};let sC=["sun","mon","tue","wed","thu","fri","sat"];var fv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},x1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(y=64)),r.push(n[d],n[p],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(R1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new aC;const y=s<<2|l>>4;if(r.push(y),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const b=c<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lC=function(t){const e=R1(t);return x1.encodeByteArray(e,!0)},Cu=function(t){return lC(t).replace(/\./g,"")},N1=function(t){try{return x1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=()=>uC().__FIREBASE_DEFAULTS__,hC=()=>{if(typeof process>"u"||typeof fv>"u")return;const t=fv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&N1(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return cC()||hC()||fC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O1=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dC=t=>{const e=O1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},D1=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},M1=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cu(JSON.stringify(n)),Cu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function yC(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _C(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wC(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EC(){return!yC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TC(){try{return typeof indexedDB=="object"}catch{return!1}}function IC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kC,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,l,r)}}function SC(t,e){return t.replace(AC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AC=/\{\$([^}]+)}/g;function PC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dv(s)&&dv(o)){if(!vs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bC(t,e){const n=new CC(t,e);return n.subscribe.bind(n)}class CC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dh),i.error===void 0&&(i.error=Dh),i.complete===void 0&&(i.complete=Dh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}class fi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OC(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NC(t){return t===Gr?void 0:t}function OC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const MC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},LC=ie.INFO,VC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},FC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Up{constructor(e){this.name=e,this._logLevel=LC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const UC=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function jC(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zC(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L1=new WeakMap,nd=new WeakMap,V1=new WeakMap,Mh=new WeakMap,jp=new WeakMap;function BC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&L1.set(n,t)}).catch(()=>{}),jp.set(e,t),e}function $C(t){if(nd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nd.set(t,e)}let rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||V1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WC(t){rd=t(rd)}function HC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lh(this),e,...n);return V1.set(r,e.sort?e.sort():[e]),kr(r)}:zC().includes(t)?function(...e){return t.apply(Lh(this),e),kr(L1.get(this))}:function(...e){return kr(t.apply(Lh(this),e))}}function qC(t){return typeof t=="function"?HC(t):(t instanceof IDBTransaction&&$C(t),UC(t,jC())?new Proxy(t,rd):t)}function kr(t){if(t instanceof IDBRequest)return BC(t);if(Mh.has(t))return Mh.get(t);const e=qC(t);return e!==t&&(Mh.set(t,e),jp.set(e,t)),e}const Lh=t=>jp.get(t);function YC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const GC=["get","getKey","getAll","getAllKeys","count"],KC=["put","add","delete","clear"],Vh=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vh.get(e))return Vh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||GC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Vh.set(e,s),s}WC(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",yv="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new Up("@firebase/app"),JC="@firebase/app-compat",ZC="@firebase/analytics-compat",eR="@firebase/analytics",tR="@firebase/app-check-compat",nR="@firebase/app-check",rR="@firebase/auth",iR="@firebase/auth-compat",sR="@firebase/database",oR="@firebase/database-compat",aR="@firebase/functions",lR="@firebase/functions-compat",uR="@firebase/installations",cR="@firebase/installations-compat",hR="@firebase/messaging",fR="@firebase/messaging-compat",dR="@firebase/performance",pR="@firebase/performance-compat",mR="@firebase/remote-config",gR="@firebase/remote-config-compat",yR="@firebase/storage",vR="@firebase/storage-compat",_R="@firebase/firestore",wR="@firebase/vertexai-preview",ER="@firebase/firestore-compat",TR="firebase",IR="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="[DEFAULT]",kR={[id]:"fire-core",[JC]:"fire-core-compat",[eR]:"fire-analytics",[ZC]:"fire-analytics-compat",[nR]:"fire-app-check",[tR]:"fire-app-check-compat",[rR]:"fire-auth",[iR]:"fire-auth-compat",[sR]:"fire-rtdb",[oR]:"fire-rtdb-compat",[aR]:"fire-fn",[lR]:"fire-fn-compat",[uR]:"fire-iid",[cR]:"fire-iid-compat",[hR]:"fire-fcm",[fR]:"fire-fcm-compat",[dR]:"fire-perf",[pR]:"fire-perf-compat",[mR]:"fire-rc",[gR]:"fire-rc-compat",[yR]:"fire-gcs",[vR]:"fire-gcs-compat",[_R]:"fire-fst",[ER]:"fire-fst-compat",[wR]:"fire-vertex","fire-js":"fire-js",[TR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map,SR=new Map,od=new Map;function vv(t,e){try{t.container.addComponent(e)}catch(n){di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(od.has(e))return di.debug(`There were multiple attempts to register component ${e}.`),!1;od.set(e,t);for(const n of Ru.values())vv(n,t);for(const n of SR.values())vv(n,t);return!0}function zp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new ka("app","Firebase",AR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=IR;function F1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=D1()),!n)throw Sr.create("no-options");const s=Ru.get(i);if(s){if(vs(n,s.options)&&vs(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new DC(i);for(const u of od.values())o.addComponent(u);const l=new PR(n,r,o);return Ru.set(i,l),l}function U1(t=sd){const e=Ru.get(t);if(!e&&t===sd&&D1())return F1();if(!e)throw Sr.create("no-app",{appName:t});return e}function Ar(t,e,n){var r;let i=(r=kR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),di.warn(l.join(" "));return}_s(new fi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="firebase-heartbeat-database",CR=1,la="firebase-heartbeat-store";let Fh=null;function j1(){return Fh||(Fh=YC(bR,CR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(la)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Fh}async function RR(t){try{const n=(await j1()).transaction(la),r=await n.objectStore(la).get(z1(t));return await n.done,r}catch(e){if(e instanceof Qn)di.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});di.warn(n.message)}}}async function _v(t,e){try{const r=(await j1()).transaction(la,"readwrite");await r.objectStore(la).put(e,z1(t)),await r.done}catch(n){if(n instanceof Qn)di.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});di.warn(r.message)}}}function z1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=1024,NR=30*24*60*60*1e3;class OR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=NR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wv(),{heartbeatsToSend:r,unsentEntries:i}=DR(this._heartbeatsCache.heartbeats),s=Cu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function wv(){return new Date().toISOString().substring(0,10)}function DR(t,e=xR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ev(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ev(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TC()?IC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _v(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ev(t){return Cu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){_s(new fi("platform-logger",e=>new QC(e),"PRIVATE")),_s(new fi("heartbeat",e=>new OR(e),"PRIVATE")),Ar(id,yv,t),Ar(id,yv,"esm2017"),Ar("fire-js","")}LR("");var Tv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ri,B1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(k,P,x){for(var S=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)S[Ft-2]=arguments[Ft];return g.prototype[P].apply(k,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var k=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)k[P]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(P=0;16>P;++P)k[P]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],P=_.g[2];var x=_.g[3],S=g+(x^w&(P^x))+k[0]+3614090360&4294967295;g=w+(S<<7&4294967295|S>>>25),S=x+(P^g&(w^P))+k[1]+3905402710&4294967295,x=g+(S<<12&4294967295|S>>>20),S=P+(w^x&(g^w))+k[2]+606105819&4294967295,P=x+(S<<17&4294967295|S>>>15),S=w+(g^P&(x^g))+k[3]+3250441966&4294967295,w=P+(S<<22&4294967295|S>>>10),S=g+(x^w&(P^x))+k[4]+4118548399&4294967295,g=w+(S<<7&4294967295|S>>>25),S=x+(P^g&(w^P))+k[5]+1200080426&4294967295,x=g+(S<<12&4294967295|S>>>20),S=P+(w^x&(g^w))+k[6]+2821735955&4294967295,P=x+(S<<17&4294967295|S>>>15),S=w+(g^P&(x^g))+k[7]+4249261313&4294967295,w=P+(S<<22&4294967295|S>>>10),S=g+(x^w&(P^x))+k[8]+1770035416&4294967295,g=w+(S<<7&4294967295|S>>>25),S=x+(P^g&(w^P))+k[9]+2336552879&4294967295,x=g+(S<<12&4294967295|S>>>20),S=P+(w^x&(g^w))+k[10]+4294925233&4294967295,P=x+(S<<17&4294967295|S>>>15),S=w+(g^P&(x^g))+k[11]+2304563134&4294967295,w=P+(S<<22&4294967295|S>>>10),S=g+(x^w&(P^x))+k[12]+1804603682&4294967295,g=w+(S<<7&4294967295|S>>>25),S=x+(P^g&(w^P))+k[13]+4254626195&4294967295,x=g+(S<<12&4294967295|S>>>20),S=P+(w^x&(g^w))+k[14]+2792965006&4294967295,P=x+(S<<17&4294967295|S>>>15),S=w+(g^P&(x^g))+k[15]+1236535329&4294967295,w=P+(S<<22&4294967295|S>>>10),S=g+(P^x&(w^P))+k[1]+4129170786&4294967295,g=w+(S<<5&4294967295|S>>>27),S=x+(w^P&(g^w))+k[6]+3225465664&4294967295,x=g+(S<<9&4294967295|S>>>23),S=P+(g^w&(x^g))+k[11]+643717713&4294967295,P=x+(S<<14&4294967295|S>>>18),S=w+(x^g&(P^x))+k[0]+3921069994&4294967295,w=P+(S<<20&4294967295|S>>>12),S=g+(P^x&(w^P))+k[5]+3593408605&4294967295,g=w+(S<<5&4294967295|S>>>27),S=x+(w^P&(g^w))+k[10]+38016083&4294967295,x=g+(S<<9&4294967295|S>>>23),S=P+(g^w&(x^g))+k[15]+3634488961&4294967295,P=x+(S<<14&4294967295|S>>>18),S=w+(x^g&(P^x))+k[4]+3889429448&4294967295,w=P+(S<<20&4294967295|S>>>12),S=g+(P^x&(w^P))+k[9]+568446438&4294967295,g=w+(S<<5&4294967295|S>>>27),S=x+(w^P&(g^w))+k[14]+3275163606&4294967295,x=g+(S<<9&4294967295|S>>>23),S=P+(g^w&(x^g))+k[3]+4107603335&4294967295,P=x+(S<<14&4294967295|S>>>18),S=w+(x^g&(P^x))+k[8]+1163531501&4294967295,w=P+(S<<20&4294967295|S>>>12),S=g+(P^x&(w^P))+k[13]+2850285829&4294967295,g=w+(S<<5&4294967295|S>>>27),S=x+(w^P&(g^w))+k[2]+4243563512&4294967295,x=g+(S<<9&4294967295|S>>>23),S=P+(g^w&(x^g))+k[7]+1735328473&4294967295,P=x+(S<<14&4294967295|S>>>18),S=w+(x^g&(P^x))+k[12]+2368359562&4294967295,w=P+(S<<20&4294967295|S>>>12),S=g+(w^P^x)+k[5]+4294588738&4294967295,g=w+(S<<4&4294967295|S>>>28),S=x+(g^w^P)+k[8]+2272392833&4294967295,x=g+(S<<11&4294967295|S>>>21),S=P+(x^g^w)+k[11]+1839030562&4294967295,P=x+(S<<16&4294967295|S>>>16),S=w+(P^x^g)+k[14]+4259657740&4294967295,w=P+(S<<23&4294967295|S>>>9),S=g+(w^P^x)+k[1]+2763975236&4294967295,g=w+(S<<4&4294967295|S>>>28),S=x+(g^w^P)+k[4]+1272893353&4294967295,x=g+(S<<11&4294967295|S>>>21),S=P+(x^g^w)+k[7]+4139469664&4294967295,P=x+(S<<16&4294967295|S>>>16),S=w+(P^x^g)+k[10]+3200236656&4294967295,w=P+(S<<23&4294967295|S>>>9),S=g+(w^P^x)+k[13]+681279174&4294967295,g=w+(S<<4&4294967295|S>>>28),S=x+(g^w^P)+k[0]+3936430074&4294967295,x=g+(S<<11&4294967295|S>>>21),S=P+(x^g^w)+k[3]+3572445317&4294967295,P=x+(S<<16&4294967295|S>>>16),S=w+(P^x^g)+k[6]+76029189&4294967295,w=P+(S<<23&4294967295|S>>>9),S=g+(w^P^x)+k[9]+3654602809&4294967295,g=w+(S<<4&4294967295|S>>>28),S=x+(g^w^P)+k[12]+3873151461&4294967295,x=g+(S<<11&4294967295|S>>>21),S=P+(x^g^w)+k[15]+530742520&4294967295,P=x+(S<<16&4294967295|S>>>16),S=w+(P^x^g)+k[2]+3299628645&4294967295,w=P+(S<<23&4294967295|S>>>9),S=g+(P^(w|~x))+k[0]+4096336452&4294967295,g=w+(S<<6&4294967295|S>>>26),S=x+(w^(g|~P))+k[7]+1126891415&4294967295,x=g+(S<<10&4294967295|S>>>22),S=P+(g^(x|~w))+k[14]+2878612391&4294967295,P=x+(S<<15&4294967295|S>>>17),S=w+(x^(P|~g))+k[5]+4237533241&4294967295,w=P+(S<<21&4294967295|S>>>11),S=g+(P^(w|~x))+k[12]+1700485571&4294967295,g=w+(S<<6&4294967295|S>>>26),S=x+(w^(g|~P))+k[3]+2399980690&4294967295,x=g+(S<<10&4294967295|S>>>22),S=P+(g^(x|~w))+k[10]+4293915773&4294967295,P=x+(S<<15&4294967295|S>>>17),S=w+(x^(P|~g))+k[1]+2240044497&4294967295,w=P+(S<<21&4294967295|S>>>11),S=g+(P^(w|~x))+k[8]+1873313359&4294967295,g=w+(S<<6&4294967295|S>>>26),S=x+(w^(g|~P))+k[15]+4264355552&4294967295,x=g+(S<<10&4294967295|S>>>22),S=P+(g^(x|~w))+k[6]+2734768916&4294967295,P=x+(S<<15&4294967295|S>>>17),S=w+(x^(P|~g))+k[13]+1309151649&4294967295,w=P+(S<<21&4294967295|S>>>11),S=g+(P^(w|~x))+k[4]+4149444226&4294967295,g=w+(S<<6&4294967295|S>>>26),S=x+(w^(g|~P))+k[11]+3174756917&4294967295,x=g+(S<<10&4294967295|S>>>22),S=P+(g^(x|~w))+k[2]+718787259&4294967295,P=x+(S<<15&4294967295|S>>>17),S=w+(x^(P|~g))+k[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,_.g[2]=_.g[2]+P&4294967295,_.g[3]=_.g[3]+x&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,k=this.B,P=this.h,x=0;x<g;){if(P==0)for(;x<=w;)i(this,_,x),x+=this.blockSize;if(typeof _=="string"){for(;x<g;)if(k[P++]=_.charCodeAt(x++),P==this.blockSize){i(this,k),P=0;break}}else for(;x<g;)if(k[P++]=_[x++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var k=0;32>k;k+=8)_[w++]=this.g[g]>>>k&255;return _};function s(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],k=!0,P=_.length-1;0<=P;P--){var x=_[P]|0;k&&x==g||(w[P]=x,k=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return A(c(-_));for(var g=[],w=1,k=0;_>=w;k++)g[k]=_/w|0,w*=4294967296;return new o(g,0)}function d(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return A(d(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),k=p,P=0;P<_.length;P+=8){var x=Math.min(8,_.length-P),S=parseInt(_.substring(P,P+x),g);8>x?(x=c(Math.pow(g,x)),k=k.j(x).add(c(S))):(k=k.j(w),k=k.add(c(S)))}return k}var p=u(0),y=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-A(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var k=this.i(w);_+=(0<=k?k:4294967296+k)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b(this))return"0";if(C(this))return"-"+A(this).toString(_);for(var g=c(Math.pow(_,6)),w=this,k="";;){var P=O(w,g).g;w=E(w,P.j(g));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=P,b(w))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function b(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function C(_){return _.h==-1}t.l=function(_){return _=E(this,_),C(_)?-1:b(_)?0:1};function A(_){for(var g=_.g.length,w=[],k=0;k<g;k++)w[k]=~_.g[k];return new o(w,~_.h).add(y)}t.abs=function(){return C(this)?A(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],k=0,P=0;P<=g;P++){var x=k+(this.i(P)&65535)+(_.i(P)&65535),S=(x>>>16)+(this.i(P)>>>16)+(_.i(P)>>>16);k=S>>>16,x&=65535,S&=65535,w[P]=S<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,g){return _.add(A(g))}t.j=function(_){if(b(this)||b(_))return p;if(C(this))return C(_)?A(this).j(A(_)):A(A(this).j(_));if(C(_))return A(this.j(A(_)));if(0>this.l(T)&&0>_.l(T))return c(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],k=0;k<2*g;k++)w[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<_.g.length;P++){var x=this.i(k)>>>16,S=this.i(k)&65535,Ft=_.i(P)>>>16,jr=_.i(P)&65535;w[2*k+2*P]+=S*jr,v(w,2*k+2*P),w[2*k+2*P+1]+=x*jr,v(w,2*k+2*P+1),w[2*k+2*P+1]+=S*Ft,v(w,2*k+2*P+1),w[2*k+2*P+2]+=x*Ft,v(w,2*k+2*P+2)}for(k=0;k<g;k++)w[k]=w[2*k+1]<<16|w[2*k];for(k=g;k<2*g;k++)w[k]=0;return new o(w,0)};function v(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function I(_,g){this.g=_,this.h=g}function O(_,g){if(b(g))throw Error("division by zero");if(b(_))return new I(p,p);if(C(_))return g=O(A(_),g),new I(A(g.g),A(g.h));if(C(g))return g=O(_,A(g)),new I(A(g.g),g.h);if(30<_.g.length){if(C(_)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,k=g;0>=k.l(_);)w=D(w),k=D(k);var P=F(w,1),x=F(k,1);for(k=F(k,2),w=F(w,2);!b(k);){var S=x.add(k);0>=S.l(_)&&(P=P.add(w),x=S),k=F(k,1),w=F(w,1)}return g=E(_,P.j(g)),new I(P,g)}for(P=p;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),k=Math.ceil(Math.log(w)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=c(w),S=x.j(g);C(S)||0<S.l(_);)w-=k,x=c(w),S=x.j(g);b(x)&&(x=y),P=P.add(x),_=E(_,S)}return new I(P,_)}t.A=function(_){return O(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],k=0;k<g;k++)w[k]=this.i(k)&_.i(k);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],k=0;k<g;k++)w[k]=this.i(k)|_.i(k);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],k=0;k<g;k++)w[k]=this.i(k)^_.i(k);return new o(w,this.h^_.h)};function D(_){for(var g=_.g.length+1,w=[],k=0;k<g;k++)w[k]=_.i(k)<<1|_.i(k-1)>>>31;return new o(w,_.h)}function F(_,g){var w=g>>5;g%=32;for(var k=_.g.length-w,P=[],x=0;x<k;x++)P[x]=0<g?_.i(x+w)>>>g|_.i(x+w+1)<<32-g:_.i(x+w);return new o(P,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,B1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ri=o}).apply(typeof Tv<"u"?Tv:typeof self<"u"?self:typeof window<"u"?window:{});var Sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $1,W1,_o,H1,Wl,ad,q1,Y1,G1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sl=="object"&&Sl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in f))break e;f=f[R]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,m=!1,R={next:function(){if(!m&&f<a.length){var N=f++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(h,R)}}return function(){return a.apply(h,arguments)}}function y(a,h,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function b(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,R,N){for(var U=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)U[pe-2]=arguments[pe];return h.prototype[R].apply(m,U)}}function C(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function A(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(u(m)){const R=a.length||0,N=m.length||0;a.length=R+N;for(let U=0;U<N;U++)a[R+U]=m[U]}else a.push(m)}}class E{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var D=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function _(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)a[f]=m[f];for(let N=0;N<w.length;N++)f=w[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function S(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ft{constructor(){this.h=this.g=null}add(h,f){const m=jr.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var jr=new E(()=>new Us,a=>a.reset());class Us{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let En,z=!1,X=new Ft,ee=()=>{const a=l.Promise.resolve(void 0);En=()=>{a.then(ke)}};var ke=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){x(f)}var h=jr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function In(a,h){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{O(h.nodeName);var R=!0;break e}catch{}R=!1}R||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&In.aa.h.call(this)}}b(In,Me);var kn={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),zT=0;function BT(a,h,f,m,R){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=R,this.key=++zT,this.da=this.fa=!1}function La(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Va(a){this.src=a,this.g={},this.h=0}Va.prototype.add=function(a,h,f,m,R){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=Oc(a,h,m,R);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new BT(h,this.src,N,!!m,R),h.fa=f,a.push(h)),h};function Nc(a,h){var f=h.type;if(f in a.g){var m=a.g[f],R=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=R)&&Array.prototype.splice.call(m,R,1),N&&(La(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Oc(a,h,f,m){for(var R=0;R<a.length;++R){var N=a[R];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==m)return R}return-1}var Dc="closure_lm_"+(1e6*Math.random()|0),Mc={};function Sm(a,h,f,m,R){if(m&&m.once)return Pm(a,h,f,m,R);if(Array.isArray(h)){for(var N=0;N<h.length;N++)Sm(a,h[N],f,m,R);return null}return f=Uc(f),a&&a[sn]?a.K(h,f,c(m)?!!m.capture:!!m,R):Am(a,h,f,!1,m,R)}function Am(a,h,f,m,R,N){if(!h)throw Error("Invalid event type");var U=c(R)?!!R.capture:!!R,pe=Vc(a);if(pe||(a[Dc]=pe=new Va(a)),f=pe.add(h,f,m,U,N),f.proxy)return f;if(m=$T(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Tn||(R=U),R===void 0&&(R=!1),a.addEventListener(h.toString(),m,R);else if(a.attachEvent)a.attachEvent(Cm(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $T(){function a(f){return h.call(a.src,a.listener,f)}const h=WT;return a}function Pm(a,h,f,m,R){if(Array.isArray(h)){for(var N=0;N<h.length;N++)Pm(a,h[N],f,m,R);return null}return f=Uc(f),a&&a[sn]?a.L(h,f,c(m)?!!m.capture:!!m,R):Am(a,h,f,!0,m,R)}function bm(a,h,f,m,R){if(Array.isArray(h))for(var N=0;N<h.length;N++)bm(a,h[N],f,m,R);else m=c(m)?!!m.capture:!!m,f=Uc(f),a&&a[sn]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],f=Oc(N,f,m,R),-1<f&&(La(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Vc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Oc(h,f,m,R)),(f=-1<a?h[a]:null)&&Lc(f))}function Lc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[sn])Nc(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(Cm(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Vc(h))?(Nc(f,a),f.h==0&&(f.src=null,h[Dc]=null)):La(a)}}}function Cm(a){return a in Mc?Mc[a]:Mc[a]="on"+a}function WT(a,h){if(a.da)a=!0;else{h=new In(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&Lc(a),a=f.call(m,h)}return a}function Vc(a){return a=a[Dc],a instanceof Va?a:null}var Fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(a){return typeof a=="function"?a:(a[Fc]||(a[Fc]=function(h){return a.handleEvent(h)}),a[Fc])}function at(){de.call(this),this.i=new Va(this),this.M=this,this.F=null}b(at,de),at.prototype[sn]=!0,at.prototype.removeEventListener=function(a,h,f,m){bm(this,a,h,f,m)};function vt(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Me(h,a);else if(h instanceof Me)h.target=h.target||a;else{var R=h;h=new Me(m,a),k(h,R)}if(R=!0,f)for(var N=f.length-1;0<=N;N--){var U=h.g=f[N];R=Fa(U,m,!0,h)&&R}if(U=h.g=a,R=Fa(U,m,!0,h)&&R,R=Fa(U,m,!1,h)&&R,f)for(N=0;N<f.length;N++)U=h.g=f[N],R=Fa(U,m,!1,h)&&R}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)La(f[m]);delete a.g[h],a.h--}}this.F=null},at.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},at.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Fa(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var R=!0,N=0;N<h.length;++N){var U=h[N];if(U&&!U.da&&U.capture==f){var pe=U.listener,Je=U.ha||U.src;U.fa&&Nc(a.i,U),R=pe.call(Je,m)!==!1&&R}}return R&&!m.defaultPrevented}function Rm(a,h,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function xm(a){a.g=Rm(()=>{a.g=null,a.i&&(a.i=!1,xm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HT extends de{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:xm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(a){de.call(this),this.h=a,this.g={}}b(js,de);var Nm=[];function Om(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&Lc(h)},a),a.g={}}js.prototype.N=function(){js.aa.N.call(this),Om(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jc=l.JSON.stringify,qT=l.JSON.parse,YT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function zc(){}zc.prototype.h=null;function Dm(a){return a.h||(a.h=a.i())}function Mm(){}var zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){Me.call(this,"d")}b(Bc,Me);function $c(){Me.call(this,"c")}b($c,Me);var zr={},Lm=null;function Ua(){return Lm=Lm||new at}zr.La="serverreachability";function Vm(a){Me.call(this,zr.La,a)}b(Vm,Me);function Bs(a){const h=Ua();vt(h,new Vm(h))}zr.STAT_EVENT="statevent";function Fm(a,h){Me.call(this,zr.STAT_EVENT,a),this.stat=h}b(Fm,Me);function _t(a){const h=Ua();vt(h,new Fm(h,a))}zr.Ma="timingevent";function Um(a,h){Me.call(this,zr.Ma,a),this.size=h}b(Um,Me);function $s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.xa=function(){this.g=!1};function GT(a,h,f,m,R,N){a.info(function(){if(a.g)if(N)for(var U="",pe=N.split("&"),Je=0;Je<pe.length;Je++){var ae=pe[Je].split("=");if(1<ae.length){var lt=ae[0];ae=ae[1];var ut=lt.split("_");U=2<=ut.length&&ut[1]=="type"?U+(lt+"="+ae+"&"):U+(lt+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+h+`
`+f+`
`+U})}function KT(a,h,f,m,R,N,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+h+`
`+f+`
`+N+" "+U})}function Ai(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+XT(a,f)+(m?" "+m:"")})}function QT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function XT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return jc(f)}catch{return h}}var ja={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function za(){}b(za,zc),za.prototype.g=function(){return new XMLHttpRequest},za.prototype.i=function(){return{}},Wc=new za;function Xn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zm}function zm(){this.i=null,this.g="",this.h=!1}var Bm={},Hc={};function qc(a,h,f){a.L=1,a.v=Ha(Sn(h)),a.m=f,a.P=!0,$m(a,null)}function $m(a,h){a.F=Date.now(),Ba(a),a.A=Sn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),rg(f.i,"t",m),a.C=0,f=a.j.J,a.h=new zm,a.g=Eg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new HT(y(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Nm[0]=R.toString()),R=Nm);for(var N=0;N<R.length;N++){var U=Sm(f,R[N],m||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Bs(),GT(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=An(this.g);var h=this.g.Ba();const Ci=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||cg(this.g)))){this.J||ut!=4||h==7||(h==8||0>=Ci?Bs(3):Bs(2)),Yc(this);var f=this.g.Z();this.X=f;t:if(Wm(this)){var m=cg(this.g);a="";var R=m.length,N=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Hs(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<R;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==R-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,KT(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Je=this.g;if((pe=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(pe)){var ae=pe;break t}}ae=null}if(f=ae)Ai(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gc(this,f);else{this.o=!1,this.s=3,_t(12),Br(this),Hs(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<U.length;)if(Yt=JT(this,U),Yt==Hc){ut==4&&(this.s=4,_t(14),f=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Bm){this.s=4,_t(15),Ai(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Ai(this.i,this.l,Yt,null),Gc(this,Yt);if(Wm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||U.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)Ai(this.i,this.l,U,"[Invalid Chunked Response]"),Br(this),Hs(this);else if(0<U.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),eh(lt),lt.M=!0,_t(11))}}else Ai(this.i,this.l,U,null),Gc(this,U);ut==4&&Br(this),this.o&&!this.J&&(ut==4?yg(this.j,this):(this.o=!1,Ba(this)))}else mI(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Br(this),Hs(this)}}}catch{}finally{}};function Wm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function JT(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Hc:(f=Number(h.substring(f,m)),isNaN(f)?Bm:(m+=1,m+f>h.length?Hc:(h=h.slice(m,m+f),a.C=m+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Br(this)};function Ba(a){a.S=Date.now()+a.I,Hm(a,a.I)}function Hm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$s(y(a.ba,a),h)}function Yc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QT(this.i,this.A),this.L!=2&&(Bs(),_t(17)),Br(this),this.s=2,Hs(this)):Hm(this,this.S-a)};function Hs(a){a.j.G==0||a.J||yg(a.j,a)}function Br(a){Yc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Om(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Gc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Kc(f.h,a))){if(!a.K&&Kc(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Qa(f),Ga(f);else break e;Zc(f),_t(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=$s(y(f.Za,f),6e3));if(1>=Gm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Wr(f,11)}else if((a.K||f.g==a)&&Qa(f),!v(h))for(R=f.Da.g.parse(h),h=0;h<R.length;h++){let ae=R[h];if(f.T=ae[0],ae=ae[1],f.G==2)if(ae[0]=="c"){f.K=ae[1],f.ia=ae[2];const lt=ae[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ut=ae[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const Ci=ae[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(m=1.5*Ci,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Yt=a.g;if(Yt){const Ja=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var N=m.h;N.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Qc(N,N.h),N.h=null))}if(m.D){const th=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;th&&(m.ya=th,ve(m.I,m.D,th))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var U=a;if(m.qa=wg(m,m.J?m.ia:null,m.W),U.K){Km(m.h,U);var pe=U,Je=m.L;Je&&(pe.I=Je),pe.B&&(Yc(pe),Ba(pe)),m.g=U}else mg(m);0<f.i.length&&Ka(f)}else ae[0]!="stop"&&ae[0]!="close"||Wr(f,7);else f.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Wr(f,7):Jc(f):ae[0]!="noop"&&f.l&&f.l.ta(ae),f.v=0)}}Bs(4)}catch{}}var ZT=class{constructor(a,h){this.g=a,this.map=h}};function qm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ym(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gm(a){return a.h?1:a.g?a.g.size:0}function Kc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Qc(a,h){a.g?a.g.add(h):a.h=h}function Km(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}qm.prototype.cancel=function(){if(this.i=Qm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return C(a.i)}function eI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function tI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Xm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=tI(a),m=eI(a),R=m.length,N=0;N<R;N++)h.call(void 0,m[N],f&&f[N],a)}var Jm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),R=null;if(0<=m){var N=a[f].substring(0,m);R=a[f].substring(m+1)}else N=a[f];h(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,$a(this,a.j),this.o=a.o,this.g=a.g,Wa(this,a.s),this.l=a.l;var h=a.i,f=new Gs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zm(this,f),this.m=a.m}else a&&(h=String(a).match(Jm))?(this.h=!1,$a(this,h[1]||"",!0),this.o=qs(h[2]||""),this.g=qs(h[3]||"",!0),Wa(this,h[4]),this.l=qs(h[5]||"",!0),Zm(this,h[6]||"",!0),this.m=qs(h[7]||"")):(this.h=!1,this.i=new Gs(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ys(h,eg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ys(h,eg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ys(f,f.charAt(0)=="/"?sI:iI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ys(f,aI)),a.join("")};function Sn(a){return new $r(a)}function $a(a,h,f){a.j=f?qs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Wa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zm(a,h,f){h instanceof Gs?(a.i=h,lI(a.i,a.h)):(f||(h=Ys(h,oI)),a.i=new Gs(h,a.h))}function ve(a,h,f){a.i.set(h,f)}function Ha(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,rI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var eg=/[#\/\?@]/g,iI=/[#\?:]/g,sI=/[#\?]/g,oI=/[#\?@]/g,aI=/#/g;function Gs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&nI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Gs.prototype,t.add=function(a,h){Jn(this),this.i=null,a=Pi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function tg(a,h){Jn(a),h=Pi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ng(a,h){return Jn(a),h=Pi(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,m){f.forEach(function(R){a.call(h,R,m,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const R=a[m];for(let N=0;N<R.length;N++)f.push(h[m])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")ng(this,a)&&(h=h.concat(this.g.get(Pi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=Pi(this,a),ng(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rg(a,h,f){tg(a,h),0<f.length&&(a.i=null,a.g.set(Pi(a,h),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const N=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var R=N;U[m]!==""&&(R+="="+encodeURIComponent(String(U[m]))),a.push(R)}}return this.i=a.join("&")};function Pi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lI(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,m){var R=m.toLowerCase();m!=R&&(tg(this,m),rg(this,R,f))},a)),a.j=h}function uI(a,h){const f=new Ws;if(l.Image){const m=new Image;m.onload=T(Zn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=T(Zn,f,"TestLoadImage: error",!1,h,m),m.onabort=T(Zn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=T(Zn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function cI(a,h){const f=new Ws,m=new AbortController,R=setTimeout(()=>{m.abort(),Zn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?Zn(f,"TestPingServer: ok",!0,h):Zn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Zn(f,"TestPingServer: error",!1,h)})}function Zn(a,h,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function hI(){this.g=new YT}function fI(a,h,f){const m=f||"";try{Xm(a,function(R,N){let U=R;c(R)&&(U=jc(R)),h.push(m+N+"="+encodeURIComponent(U))})}catch(R){throw h.push(m+"type="+encodeURIComponent("_badmap")),R}}function Ks(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Ks,zc),Ks.prototype.g=function(){return new qa(this.l,this.j)},Ks.prototype.i=function(a){return function(){return a}}({});function qa(a,h){at.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(qa,at),t=qa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ig(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ig(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Xs(this),this.readyState==3&&ig(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Qa=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sg(a){let h="";return F(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Xc(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=sg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,h,f))}function Re(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Re,at);var dI=/^https?$/i,pI=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?Dm(this.o):Dm(Wc),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){og(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pI,h,void 0))||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ug(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){og(this,N)}};function og(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ag(a),Ya(a)}function ag(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,vt(this,"complete"),vt(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lg(this):this.bb())},t.bb=function(){lg(this)};function lg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Rm(a.Ea,0,a);else if(vt(a,"readystatechange"),An(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=U===0){var R=String(a.D).match(Jm)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!dI.test(R?R.toLowerCase():"")}f=m}if(f)vt(a,"complete"),vt(a,"success");else{a.m=6;try{var N=2<An(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ag(a)}}finally{Ya(a)}}}}function Ya(a,h){if(a.g){ug(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||vt(a,"ready");try{f.onreadystatechange=m}catch{}}}function ug(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qT(h)}};function cg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mI(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var f=P(a[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[R]||[];h[R]=N,N.push(f)}_(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hg(a){this.Aa=0,this.i=[],this.j=new Ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,a),this.cb=Js("retryDelaySeedMs",1e4,a),this.Wa=Js("forwardChannelMaxRetries",2,a),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new qm(a&&a.concurrentRequestLimit),this.Da=new hI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){_t(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=wg(this,null,this.W),Ka(this)};function Jc(a){if(fg(a),a.G==3){var h=a.U++,f=Sn(a.I);if(ve(f,"SID",a.K),ve(f,"RID",h),ve(f,"TYPE","terminate"),Zs(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=Ha(Sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Eg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ba(h)}_g(a)}function Ga(a){a.g&&(eh(a),a.g.cancel(),a.g=null)}function fg(a){Ga(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ka(a){if(!Ym(a.h)&&!a.s){a.s=!0;var h=a.Ga;En||ee(),z||(En(),z=!0),X.add(h,a),a.B=0}}function gI(a,h){return Gm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$s(y(a.Ga,a,h),vg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Xn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),k(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pg(this,R,h),f=Sn(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),Zs(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(sg(N)))+"&"+h:this.m&&Xc(f,this.m,N)),Qc(this.h,R),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",h),ve(f,"SID","null"),R.T=!0,qc(R,f,null)):qc(R,f,h),this.G=2}}else this.G==3&&(a?dg(this,a):this.i.length==0||Ym(this.h)||dg(this))};function dg(a,h){var f;h?f=h.l:f=a.U++;const m=Sn(a.I);ve(m,"SID",a.K),ve(m,"RID",f),ve(m,"AID",a.T),Zs(a,m),a.m&&a.o&&Xc(m,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qc(a.h,f),qc(f,m,h)}function Zs(a,h){a.H&&F(a.H,function(f,m){ve(h,m,f)}),a.l&&Xm({},function(f,m){ve(h,m,f)})}function pg(a,h,f){f=Math.min(a.i.length,f);var m=a.l?y(a.l.Na,a.l,a):null;e:{var R=a.i;let N=-1;for(;;){const U=["count="+f];N==-1?0<f?(N=R[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let pe=!0;for(let Je=0;Je<f;Je++){let ae=R[Je].g;const lt=R[Je].map;if(ae-=N,0>ae)N=Math.max(0,R[Je].g-100),pe=!1;else try{fI(lt,U,"req"+ae+"_")}catch{m&&m(lt)}}if(pe){m=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function mg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;En||ee(),z||(En(),z=!0),X.add(h,a),a.v=0}}function Zc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$s(y(a.Fa,a),vg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$s(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Ga(this),gg(this))};function eh(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gg(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);ve(h,"RID","rpc"),ve(h,"SID",a.K),ve(h,"AID",a.T),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(h,"TO",a.ja),ve(h,"TYPE","xmlhttp"),Zs(a,h),a.m&&a.o&&Xc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ha(Sn(h)),f.m=null,f.P=!0,$m(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ga(this),Zc(this),_t(19))};function Qa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function yg(a,h){var f=null;if(a.g==h){Qa(a),eh(a),a.g=null;var m=2}else if(Kc(a.h,h))f=h.D,Km(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var R=a.B;m=Ua(),vt(m,new Um(m,f)),Ka(a)}else mg(a);else if(R=h.s,R==3||R==0&&0<h.X||!(m==1&&gI(a,h)||m==2&&Zc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),R){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function vg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Wr(a,h){if(a.j.info("Error code "+h),h==2){var f=y(a.fb,a),m=a.Xa;const R=!m;m=new $r(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||$a(m,"https"),Ha(m),R?uI(m.toString(),f):cI(m.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(h),_g(a),fg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function _g(a){if(a.G=0,a.ka=[],a.l){const h=Qm(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function wg(a,h,f){var m=f instanceof $r?Sn(f):new $r(f);if(m.g!="")h&&(m.g=h+"."+m.g),Wa(m,m.s);else{var R=l.location;m=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;var N=new $r(null);m&&$a(N,m),h&&(N.g=h),R&&Wa(N,R),f&&(N.l=f),m=N}return f=a.D,h=a.ya,f&&h&&ve(m,f,h),ve(m,"VER",a.la),Zs(a,m),m}function Eg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new Ks({eb:f})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tg(){}t=Tg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xa(){}Xa.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){at.call(this),this.g=new hg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new bi(this)}b(Ct,at),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Jc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=jc(a),a=f);h.i.push(new ZT(h.Ya++,a)),h.G==3&&Ka(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Ct.aa.N.call(this)};function Ig(a){Bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(Ig,Bc);function kg(){$c.call(this),this.status=1}b(kg,$c);function bi(a){this.g=a}b(bi,Tg),bi.prototype.ua=function(){vt(this.g,"a")},bi.prototype.ta=function(a){vt(this.g,new Ig(a))},bi.prototype.sa=function(a){vt(this.g,new kg)},bi.prototype.ra=function(){vt(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,G1=function(){return new Xa},Y1=function(){return Ua()},q1=zr,ad={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,Wl=ja,jm.COMPLETE="complete",H1=jm,Mm.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",at.prototype.listen=at.prototype.K,_o=Mm,W1=Ks,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,$1=Re}).apply(typeof Sl<"u"?Sl:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Up("@firebase/firestore");function co(){return pi.logLevel}function H(t,...e){if(pi.logLevel<=ie.DEBUG){const n=e.map(Bp);pi.debug(`Firestore (${Ds}): ${t}`,...n)}}function Hn(t,...e){if(pi.logLevel<=ie.ERROR){const n=e.map(Bp);pi.error(`Firestore (${Ds}): ${t}`,...n)}}function ws(t,...e){if(pi.logLevel<=ie.WARN){const n=e.map(Bp);pi.warn(`Firestore (${Ds}): ${t}`,...n)}}function Bp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function ye(t,e){t||Q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class FR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new K1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new dt(e)}}class jR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new jR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $R{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ye(typeof n.token=="string"),this.R=n.token,new BR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new qe(0,0))}static max(){return new J(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ua{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const HR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends ua{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return HR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Oe.fromString(e))}static fromName(e){return new Y(Oe.fromString(e).popFirst(5))}static empty(){return new Y(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Oe(e.slice()))}}function qR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Nr(i,Y.empty(),e)}function YR(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(J.min(),Y.empty(),-1)}static max(){return new Nr(J.max(),Y.empty(),-1)}}function GR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==KR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function XR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Pa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$p.oe=-1;function dc(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function JR(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Al(this.root,e,this.comparator,!1)}getReverseIterator(){return new Al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Al(this.root,e,this.comparator,!0)}}class Al{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new J1("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const ZR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(ye(!!t),typeof t=="string"){let e=0;const n=ZR.exec(t);if(ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hp(t){const e=t.mapValue.fields.__previous_value__;return Wp(e)?Hp(e):e}function ca(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wp(t)?4:tx(t)?9007199254740991:10:Q()}function _n(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ca(t).isEqual(ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),l=Or(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mi(i.bytesValue).isEqual(mi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),l=ze(s.doubleValue);return o===l?xu(o)===xu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(kv(o)!==kv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function fa(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ze(s.integerValue||s.doubleValue),u=ze(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Av(t.timestampValue,e.timestampValue);case 4:return Av(ca(t),ca(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mi(s),u=mi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=le(l[c],u[c]);if(d!==0)return d}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=le(ze(s.latitude),ze(o.latitude));return l!==0?l:le(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=Ts(l[c],u[c]);if(d)return d}return le(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pl.mapValue&&o===Pl.mapValue)return 0;if(s===Pl.mapValue)return 1;if(o===Pl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=le(u[p],d[p]);if(y!==0)return y;const T=Ts(l[u[p]],c[d[p]]);if(T!==0)return T}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Or(t),r=Or(e),i=le(n.seconds,r.seconds);return i!==0?i:le(n.nanos,r.nanos)}function Is(t){return ld(t)}function ld(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ld(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ld(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function ud(t){return!!t&&"integerValue"in t}function qp(t){return!!t&&"arrayValue"in t}function Pv(t){return!!t&&"nullValue"in t}function bv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Do(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Do(this.value))}}function Z1(t){const e=[];return Ti(t.fields,(n,r)=>{const i=new tt([n]);if(Hl(r)){const s=Z1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,J.min(),J.min(),J.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,J.min(),J.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,J.min(),J.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function Cv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function nx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{}class We extends eE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ix(e,n,r):n==="array-contains"?new ax(e,r):n==="in"?new lx(e,r):n==="not-in"?new ux(e,r):n==="array-contains-any"?new cx(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sx(e,r):new ox(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wn extends eE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new wn(e,n)}matches(e){return tE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tE(t){return t.op==="and"}function nE(t){return rx(t)&&tE(t)}function rx(t){for(const e of t.filters)if(e instanceof wn)return!1;return!0}function cd(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(nE(t))return t.filters.map(e=>cd(e)).join(",");{const e=t.filters.map(n=>cd(n)).join(",");return`${t.op}(${e})`}}function rE(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&rE(o,i.filters[l]),!0):!1}(t,e):void Q()}function iE(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(iE).join(" ,")+"}"}(t):"Filter"}class ix extends We{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class sx extends We{constructor(e,n){super(e,"in",n),this.keys=sE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ox extends We{constructor(e,n){super(e,"not-in",n),this.keys=sE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class ax extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qp(n)&&fa(n.arrayValue,this.value)}}class lx extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class ux extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fa(this.value.arrayValue,n)}}class cx extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function xv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hx(t,e,n,r,i,s,o)}function Yp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ue=n}return e.ue}function Gp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rv(t.startAt,e.startAt)&&Rv(t.endAt,e.endAt)}function hd(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fx(t,e,n,r,i,s,o,l){return new pc(t,e,n,r,i,s,o,l)}function Kp(t){return new pc(t)}function Nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dx(t){return t.collectionGroup!==null}function Mo(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ou(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Ou(tt.keyField(),r))}return e.ce}function mn(t){const e=Z(t);return e.le||(e.le=px(e,Mo(t))),e.le}function px(t,e){if(t.limitType==="F")return xv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ou(i.field,s)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return xv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fd(t,e,n){return new pc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return Gp(mn(t),mn(e))&&t.limitType===e.limitType}function oE(t){return`${Yp(mn(t))}|lt:${t.limitType}`}function Ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iE(i)).join(", ")}]`),dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Is(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Cv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,u){const c=Cv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Mo(r),i))}(t,e)}function mx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aE(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=gx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gx(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ts(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return X1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Ce(Y.comparator);function qn(){return yx}const lE=new Ce(Y.comparator);function wo(...t){let e=lE;for(const n of t)e=e.insert(n.key,n);return e}function uE(t){let e=lE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Lo()}function cE(){return Lo()}function Lo(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const vx=new Ce(Y.comparator),_x=new rt(Y.comparator);function ne(...t){let e=_x;for(const n of t)e=e.add(n);return e}const wx=new rt(le);function Ex(){return wx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function fE(t){return{integerValue:""+t}}function Tx(t,e){return JR(e)?fE(e):hE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function Ix(t,e,n){return t instanceof Du?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wp(s)&&(s=Hp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ks?pE(t,e):t instanceof Ss?mE(t,e):function(i,s){const o=dE(i,s),l=Ov(o)+Ov(i.Pe);return ud(o)&&ud(i.Pe)?fE(l):hE(i.serializer,l)}(t,e)}function kx(t,e,n){return t instanceof ks?pE(t,e):t instanceof Ss?mE(t,e):n}function dE(t,e){return t instanceof Mu?function(r){return ud(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Du extends yc{}class ks extends yc{constructor(e){super(),this.elements=e}}function pE(t,e){const n=gE(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ss extends yc{constructor(e){super(),this.elements=e}}function mE(t,e){let n=gE(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Mu extends yc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ov(t){return ze(t.integerValue||t.doubleValue)}function gE(t){return qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.field=e,this.transform=n}}function Sx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ks&&i instanceof ks||r instanceof Ss&&i instanceof Ss?Es(r.elements,i.elements,_n):r instanceof Mu&&i instanceof Mu?_n(r.Pe,i.Pe):r instanceof Du&&i instanceof Du}(t.transform,e.transform)}class Ax{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vc{}function vE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wE(t.key,Mn.none()):new _c(t.key,t.data,Mn.none());{const n=t.data,r=xt.empty();let i=new rt(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(t.key,r,new Zt(i.toArray()),Mn.none())}}function Px(t,e,n){t instanceof _c?function(i,s,o){const l=i.value.clone(),u=Mv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(i,s,o){if(!ql(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Mv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(_E(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vo(t,e,n,r){return t instanceof _c?function(s,o,l,u){if(!ql(s.precondition,o))return l;const c=s.value.clone(),d=Lv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(s,o,l,u){if(!ql(s.precondition,o))return l;const c=Lv(s.fieldTransforms,u,o),d=o.data;return d.setAll(_E(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ql(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dE(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function Dv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Es(r,i,(s,o)=>Sx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _c extends vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _E(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mv(t,e,n){const r=new Map;ye(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kx(o,l,n[i]))}return r}function Lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ix(s,o,e))}return r}class wE extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cx extends vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Px(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=vE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>Dv(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>Dv(n,r))}}class Qp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ye(e.mutations.length===r.length);let i=function(){return vx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,se;function Ox(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function EE(t){if(t===void 0)return Hn("GRPC error has no .code"),L.UNKNOWN;switch(t){case je.OK:return L.OK;case je.CANCELLED:return L.CANCELLED;case je.UNKNOWN:return L.UNKNOWN;case je.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case je.INTERNAL:return L.INTERNAL;case je.UNAVAILABLE:return L.UNAVAILABLE;case je.UNAUTHENTICATED:return L.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case je.NOT_FOUND:return L.NOT_FOUND;case je.ALREADY_EXISTS:return L.ALREADY_EXISTS;case je.PERMISSION_DENIED:return L.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case je.ABORTED:return L.ABORTED;case je.OUT_OF_RANGE:return L.OUT_OF_RANGE;case je.UNIMPLEMENTED:return L.UNIMPLEMENTED;case je.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(se=je||(je={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=new ri([4294967295,4294967295],0);function Vv(t){const e=Dx().encode(t),n=new B1;return n.update(e),new Uint8Array(n.digest())}function Fv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ri([n,r],0),new ri([i,s],0)]}class Xp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Eo(`Invalid padding: ${n}`);if(r<0)throw new Eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Eo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ri.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ri.fromNumber(r)));return i.compare(Mx)===1&&(i=new ri([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Vv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(J.min(),i,new Ce(le),qn(),ne())}}class ba{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ba(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class TE{constructor(e,n){this.targetId=e,this.me=n}}class IE{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uv{constructor(){this.fe=0,this.ge=zv(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new ba(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=zv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Lx{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=jv(),this.Qe=new Ce(le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(hd(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,mt.newNoDocument(o,J.min()))}else ye(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mi(r).toUint8Array()}catch(u){if(u instanceof J1)return ws("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xp(o,i,s)}catch(u){return ws(u instanceof Eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&hd(l.target)){const u=new Y(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,mt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wc(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=jv(),this.Qe=new Ce(le),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Uv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Uv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function jv(){return new Ce(Y.comparator)}function zv(){return new Ce(Y.comparator)}const Vx={asc:"ASCENDING",desc:"DESCENDING"},Fx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ux={and:"AND",or:"OR"};class jx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dd(t,e){return t.useProto3Json||dc(e)?e:{value:e}}function Lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zx(t,e){return Lu(t,e.toTimestamp())}function gn(t){return ye(!!t),J.fromTimestamp(function(n){const r=Or(n);return new qe(r.seconds,r.nanos)}(t))}function Jp(t,e){return pd(t,e).canonicalString()}function pd(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SE(t){const e=Oe.fromString(t);return ye(RE(e)),e}function md(t,e){return Jp(t.databaseId,e.path)}function Uh(t,e){const n=SE(e);if(n.get(1)!==t.databaseId.projectId)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(PE(n))}function AE(t,e){return Jp(t.databaseId,e)}function Bx(t){const e=SE(t);return e.length===4?Oe.emptyPath():PE(e)}function gd(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function PE(t){return ye(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:md(t,e),fields:n.value.mapValue.fields}}function $x(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ye(d===void 0||typeof d=="string"),yt.fromBase64String(d||"")):(ye(d===void 0||d instanceof Buffer||d instanceof Uint8Array),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:EE(c.code);return new G(d,c.message||"")}(o);n=new IE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):J.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Yl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?gn(r.readTime):J.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new Yl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Nx(i,s),l=r.targetId;n=new TE(l,o)}}return n}function Wx(t,e){let n;if(e instanceof _c)n={update:Bv(t,e.key,e.value)};else if(e instanceof wE)n={delete:md(t,e.key)};else if(e instanceof Ii)n={update:Bv(t,e.key,e.data),updateMask:Zx(e.fieldMask)};else{if(!(e instanceof Cx))return Q();n={verify:md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Du)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ss)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Hx(t,e){return t&&t.length>0?(ye(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(J.min())&&(o=gn(s)),new Ax(o,i.transformResults||[])}(n,e))):[]}function qx(t,e){return{documents:[AE(t,e.path)]}}function Yx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=AE(t,i);const s=function(c){if(c.length!==0)return CE(wn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(y){return{field:Oi(y.field),direction:Qx(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Gx(t){let e=Bx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ye(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const y=bE(p);return y instanceof wn&&nE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(b){return new Ou(Di(b.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,dc(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,T=p.values||[];return new Nu(T,y)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const y=!p.before,T=p.values||[];return new Nu(T,y)}(n.endAt)),fx(e,i,o,s,l,"F",u,c)}function Kx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Di(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Di(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Di(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>bE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Qx(t){return Vx[t]}function Xx(t){return Fx[t]}function Jx(t){return Ux[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Di(t){return tt.fromServerFormat(t.fieldPath)}function CE(t){return t instanceof We?function(n){if(n.op==="=="){if(bv(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bv(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:Xx(n.op),value:n.value}}}(t):t instanceof wn?function(n){const r=n.getFilters().map(i=>CE(i));return r.length===1?r[0]:{compositeFilter:{op:Jx(n.op),filters:r}}}(t):Q()}function Zx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.ct=e}}function tN(t){const e=Gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this._n=new rN}addToCollectionParentIndex(e,n){return this._n.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class rN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new As(0)}static Ln(){return new As(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vo(r.mutation,i,Zt.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=Lo(),l=function(){return Lo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ii)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Vo(d.mutation,c,d.mutation.getFieldMask(),qe.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new sN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Lo();let i=new Ce((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Zt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=cE();d.forEach(y=>{if(!s.has(y)){const T=vE(n.get(y),r.get(y));T!==null&&p.set(y,T),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(ei());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:uE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,y){return new pc(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let l=wo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Vo(d.mutation,c,Zt.empty(),qe.now()),gc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return M.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:tN(i.bundledQuery),readTime:gn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.overlays=new Ce(Y.comparator),this.hr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ei(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ei(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xx(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.Pr=new rt(Ke.Ir),this.Tr=new rt(Ke.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ke(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new Oe([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new Oe([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||le(e.pr,n.pr)}static Er(e,n){return le(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new rt(Ke.Ir)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(le);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),M.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new Y(s),0);let l=new rt(le);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),M.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ye(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return M.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ke(n,0),i=this.wr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.vr=e,this.docs=function(){return new Ce(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new Y(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GR(YR(d),r)<=0||(i.has(d.key)||gc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Fr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hN(this)}getSize(e){return M.resolve(this.size)}}class hN extends iN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.persistence=e,this.Mr=new Ms(n=>Yp(n),Gp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zp,this.targetCount=0,this.Lr=As.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),M.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.qn(n),M.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.Br={},this.overlays={},this.kr=new $p(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new fN(this),this.indexManager=new nN,this.remoteDocumentCache=function(i){return new cN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new eN(n),this.$r=new aN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new uN(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new pN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return M.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class pN extends QR{constructor(e){super(),this.currentSequenceNumber=e}}class em{constructor(e){this.persistence=e,this.zr=new Zp,this.jr=null}static Hr(e){return new em(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),M.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return M.or([()=>M.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return EC()?8:XR(st())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new mN;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(co()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),M.resolve()):(co()<=ie.DEBUG&&H("QueryEngine","Query:",Ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(co()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):M.resolve())}ji(e,n){if(Nv(n))return M.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fd(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,fd(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return Nv(n)||i.isEqual(J.min())?M.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?M.resolve(null):(co()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ni(n)),this.es(e,o,n,qR(i,-1)).next(l=>l))})}Zi(e,n){let r=new rt(aE(e));return n.forEach((i,s)=>{gc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return co()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ni(n)),this.zi.getDocumentsMatchingQuery(e,n,Nr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ce(le),this.rs=new Ms(s=>Yp(s),Gp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function vN(t,e,n,r){return new yN(t,e,n,r)}async function xE(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function _N(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,y=p.keys();let T=M.resolve();return y.forEach(b=>{T=T.next(()=>d.getEntry(u,b)).next(C=>{const A=c.docVersions.get(b);ye(A!==null),C.version.compareTo(A)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function wN(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((d,p)=>{const y=i.get(p);if(!y)return;l.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,p)));let T=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(yt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(p,T),function(C,A,E){return C.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(y,T,d)&&l.push(n.Qr.updateTargetData(s,T))});let u=qn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(EN(s,o,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!r.isEqual(J.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function EN(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function TN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function IN(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function yd(t,e,n){const r=Z(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $v(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),y=p.rs.get(d);return y!==void 0?M.resolve(p.ns.get(y)):p.Qr.getTargetData(c,d)}(r,o,mn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(kN(r,mx(e),l),{documents:l,hs:s})))}function kN(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Wv{constructor(){this.activeTargetIds=Ex()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SN{constructor(){this.no=new Wv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl=null;function jh(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class CN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=jh(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ws("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=PN[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=jh();return new Promise((o,l)=>{const u=new $1;u.setWithCredentials(!0),u.listenOnce(H1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Wl.NO_ERROR:const d=u.getResponseJson();H(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Wl.TIMEOUT:H(ft,`RPC '${e}' ${s} timed out`),l(new G(L.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const p=u.getStatus();if(H(ft,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const b=function(A){const E=A.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(T.status);l(new G(b,T.message))}else l(new G(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=jh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=G1(),l=Y1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new W1({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(ft,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let y=!1,T=!1;const b=new bN({lo:A=>{T?H(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(y||(H(ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),H(ft,`RPC '${e}' stream ${i} sending:`,A),p.send(A))},ho:()=>p.close()}),C=(A,E,v)=>{A.listen(E,I=>{try{v(I)}catch(O){setTimeout(()=>{throw O},0)}})};return C(p,_o.EventType.OPEN,()=>{T||(H(ft,`RPC '${e}' stream ${i} transport opened.`),b.mo())}),C(p,_o.EventType.CLOSE,()=>{T||(T=!0,H(ft,`RPC '${e}' stream ${i} transport closed`),b.po())}),C(p,_o.EventType.ERROR,A=>{T||(T=!0,ws(ft,`RPC '${e}' stream ${i} transport errored:`,A),b.po(new G(L.UNAVAILABLE,"The operation could not be completed")))}),C(p,_o.EventType.MESSAGE,A=>{var E;if(!T){const v=A.data[0];ye(!!v);const I=v,O=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(O){H(ft,`RPC '${e}' stream ${i} received error:`,O);const D=O.status;let F=function(w){const k=je[w];if(k!==void 0)return EE(k)}(D),_=O.message;F===void 0&&(F=L.INTERNAL,_="Unknown error status: "+D+" with message "+O.message),T=!0,b.po(new G(F,_)),p.close()}else H(ft,`RPC '${e}' stream ${i} received:`,v),b.yo(v)}}),C(l,q1.STAT_EVENT,A=>{A.stat===ad.PROXY?H(ft,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===ad.NOPROXY&&H(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){return new jx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new OE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new G(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RN extends DE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=$x(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gn(o.readTime):J.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=gd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=hd(u)?{documents:qx(s,u)}:{query:Yx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kE(s,o.resumeToken);const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Lu(s,o.snapshotVersion.toTimestamp());const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Kx(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=gd(this.serializer),n.removeTarget=e,this.i_(n)}}class xN extends DE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Hx(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.A_(r,n)}return ye(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=gd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Wx(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,pd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(L.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,pd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class ON{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Hn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ki(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.M_.add(4),await Ca(c),c.N_.set("Unknown"),c.M_.delete(4),await Tc(c)}(this))})}),this.N_=new ON(r,i)}}async function Tc(t){if(ki(t))for(const e of t.x_)await e(!0)}async function Ca(t){for(const e of t.x_)await e(!1)}function ME(t,e){const n=Z(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),sm(n)?im(n):Ls(n).Xo()&&rm(n,e))}function nm(t,e){const n=Z(t),r=Ls(n);n.F_.delete(e),r.Xo()&&LE(n,e),n.F_.size===0&&(r.Xo()?r.n_():ki(n)&&n.N_.set("Unknown"))}function rm(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).P_(e)}function LE(t,e){t.L_.xe(e),Ls(t).I_(e)}function im(t){t.L_=new Lx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.N_.w_()}function sm(t){return ki(t)&&!Ls(t).Zo()&&t.F_.size>0}function ki(t){return Z(t).M_.size===0}function VE(t){t.L_=void 0}async function MN(t){t.N_.set("Online")}async function LN(t){t.F_.forEach((e,n)=>{rm(t,e)})}async function VN(t,e){VE(t),sm(t)?(t.N_.D_(e),im(t)):t.N_.set("Unknown")}async function FN(t,e,n){if(t.N_.set("Online"),e instanceof IE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof Yl?t.L_.Ke(e):e instanceof TE?t.L_.He(e):t.L_.We(e),!n.isEqual(J.min()))try{const r=await NE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),LE(s,u);const p=new mr(d.target,u,c,d.sequenceNumber);rm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!Pa(e))throw e;t.M_.add(1),await Ca(t),t.N_.set("Offline"),n||(n=()=>NE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Tc(t)})}function FE(t,e){return e().catch(n=>Vu(t,n,e))}async function Ic(t){const e=Z(t),n=Dr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;UN(e);)try{const i=await TN(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,jN(e,i)}catch(i){await Vu(e,i)}UE(e)&&jE(e)}function UN(t){return ki(t)&&t.v_.length<10}function jN(t,e){t.v_.push(e);const n=Dr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function UE(t){return ki(t)&&!Dr(t).Zo()&&t.v_.length>0}function jE(t){Dr(t).start()}async function zN(t){Dr(t).V_()}async function BN(t){const e=Dr(t);for(const n of t.v_)e.d_(n.mutations)}async function $N(t,e,n){const r=t.v_.shift(),i=Qp.from(r,e,n);await FE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ic(t)}async function WN(t,e){e&&Dr(t).E_&&await async function(r,i){if(function(o){return Ox(o)&&o!==L.ABORTED}(i.code)){const s=r.v_.shift();Dr(r).t_(),await FE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ic(r)}}(t,e),UE(t)&&jE(t)}async function qv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.M_.add(3),await Ca(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Tc(n)}async function HN(t,e){const n=Z(t);e?(n.M_.delete(2),await Tc(n)):e||(n.M_.add(2),await Ca(n),n.N_.set("Unknown"))}function Ls(t){return t.B_||(t.B_=function(n,r,i){const s=Z(n);return s.f_(),new RN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:MN.bind(null,t),To:LN.bind(null,t),Ao:VN.bind(null,t),h_:FN.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),sm(t)?im(t):t.N_.set("Unknown")):(await t.B_.stop(),VE(t))})),t.B_}function Dr(t){return t.k_||(t.k_=function(n,r,i){const s=Z(n);return s.f_(),new xN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:zN.bind(null,t),Ao:WN.bind(null,t),R_:BN.bind(null,t),A_:$N.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Ic(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new om(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function am(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Pa(t))return new G(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new is(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.q_=new Ce(Y.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ps(e,n,is.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class YN{constructor(){this.queries=new Ms(e=>oE(e),mc),this.onlineState="Unknown",this.z_=new Set}}async function GN(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new qN,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=am(o,`Initialization of query '${Ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&lm(n)}async function KN(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function QN(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&lm(n)}function XN(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function lm(t){t.z_.forEach(e=>{e.next()})}var vd,Gv;(Gv=vd||(vd={})).J_="default",Gv.Cache="cache";class JN{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class ZN{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ne(),this.mutatedKeys=ne(),this.Ia=aE(e),this.Ta=new is(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Yv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const y=i.get(d),T=gc(this.query,p)?p:null,b=!!y&&this.mutatedKeys.has(y.key),C=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let A=!1;y&&T?y.data.isEqual(T.data)?b!==C&&(r.track({type:3,doc:T}),A=!0):this.Ra(y,T)||(r.track({type:2,doc:T}),A=!0,(u&&this.Ia(T,u)>0||c&&this.Ia(T,c)<0)&&(l=!0)):!y&&T?(r.track({type:0,doc:T}),A=!0):y&&!T&&(r.track({type:1,doc:y}),A=!0,(u||c)&&(l=!0)),A&&(T?(o=o.add(T),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(T,b){const C=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return C(T)-C(b)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Ps(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Yv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ne(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new BE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new zE(r))}),n}pa(e){this.la=e.hs,this.Pa=ne();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ps.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class eO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class tO{constructor(e){this.key=e,this.wa=!1}}class nO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ms(l=>oE(l),mc),this.Da=new Map,this.Ca=new Set,this.va=new Ce(Y.comparator),this.Fa=new Map,this.Ma=new Zp,this.xa={},this.Oa=new Map,this.Na=As.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function rO(t,e,n=!0){const r=GE(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await $E(r,e,n,!0),i}async function iO(t,e){const n=GE(t);await $E(n,e,!0,!1)}async function $E(t,e,n,r){const i=await IN(t.localStore,mn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await sO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ME(t.remoteStore,i),l}async function sO(t,e,n,r,i){t.Ba=(p,y,T)=>async function(C,A,E,v){let I=A.view.da(E);I.Xi&&(I=await $v(C.localStore,A.query,!1).then(({documents:_})=>A.view.da(_,I)));const O=v&&v.targetChanges.get(A.targetId),D=v&&v.targetMismatches.get(A.targetId)!=null,F=A.view.applyChanges(I,C.isPrimaryClient,O,D);return Qv(C,A.targetId,F.fa),F.snapshot}(t,p,y,T);const s=await $v(t.localStore,e,!0),o=new ZN(e,s.hs),l=o.da(s.documents),u=ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Qv(t,n,c.fa);const d=new eO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function oO(t,e,n){const r=Z(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!mc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await yd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&nm(r.remoteStore,i.targetId),_d(r,i.targetId)}).catch(Aa)):(_d(r,i.targetId),await yd(r.localStore,i.targetId,!0))}async function aO(t,e){const n=Z(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nm(n.remoteStore,r.targetId))}async function lO(t,e,n){const r=mO(t);try{const i=await function(o,l){const u=Z(o),c=qe.now(),d=l.reduce((T,b)=>T.add(b.key),ne());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let b=qn(),C=ne();return u.os.getEntries(T,d).next(A=>{b=A,b.forEach((E,v)=>{v.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,b)).next(A=>{p=A;const E=[];for(const v of l){const I=bx(v,p.get(v.key).overlayedDocument);I!=null&&E.push(new Ii(v.key,I,Z1(I.value.mapValue),Mn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,E,l)}).next(A=>{y=A;const E=A.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(T,A.batchId,E)})}).then(()=>({batchId:y.batchId,changes:uE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Ce(le)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await Ic(r.remoteStore)}catch(i){const s=am(i,"Failed to persist write");n.reject(s)}}async function WE(t,e){const n=Z(t);try{const r=await wN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ye(o.wa):i.removedDocuments.size>0&&(ye(o.wa),o.wa=!1))}),await Ra(n,r,e)}catch(r){await Aa(r)}}function Kv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const y of p.U_)y.j_(l)&&(c=!0)}),c&&lm(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ce(Y.comparator);o=o.insert(s,mt.newNoDocument(s,J.min()));const l=ne().add(s),u=new wc(J.min(),new Map,new Ce(le),o,l);await WE(r,u),r.va=r.va.remove(s),r.Fa.delete(e),um(r)}else await yd(r.localStore,e,!1).then(()=>_d(r,e,n)).catch(Aa)}async function cO(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await _N(n.localStore,e);qE(n,r,null),HE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Aa(i)}}async function hO(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ye(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);qE(r,e,n),HE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Aa(i)}}function HE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function qE(t,e,n){const r=Z(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||YE(t,r)})}function YE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(nm(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),um(t))}function Qv(t,e,n){for(const r of n)r instanceof zE?(t.Ma.addReference(r.key,e),fO(t,r)):r instanceof BE?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||YE(t,r.key)):Q()}function fO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),um(t))}function um(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Y(Oe.fromString(e)),r=t.Na.next();t.Fa.set(r,new tO(n)),t.va=t.va.insert(n,r),ME(t.remoteStore,new mr(mn(Kp(n.path)),r,"TargetPurposeLimboResolution",$p.oe))}}async function Ra(t,e,n){const r=Z(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const d=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){i.push(c);const d=tm.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,y=>M.forEach(y.qi,T=>d.persistence.referenceDelegate.addReference(p,y.targetId,T)).next(()=>M.forEach(y.Qi,T=>d.persistence.referenceDelegate.removeReference(p,y.targetId,T)))))}catch(p){if(!Pa(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const y=p.targetId;if(!p.fromCache){const T=d.ns.get(y),b=T.snapshotVersion,C=T.withLastLimboFreeSnapshotVersion(b);d.ns=d.ns.insert(y,C)}}}(r.localStore,s))}async function dO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await xE(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new G(L.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.us)}}function pO(t,e){const n=Z(t),r=n.Fa.get(e);if(r&&r.wa)return ne().add(r.key);{let i=ne();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function GE(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=WE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uO.bind(null,e),e.Sa.h_=QN.bind(null,e.eventManager),e.Sa.ka=XN.bind(null,e.eventManager),e}function mO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hO.bind(null,e),e}class Xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vN(this.persistence,new gN,e.initialUser,this.serializer)}createPersistence(e){return new dN(em.Hr,this.serializer)}createSharedClientState(e){return new SN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dO.bind(null,this.syncEngine),await HN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YN}()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=function(s){return new CN(s)}(e.databaseInfo);return function(s,o,l,u){return new NN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new DN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Kv(this.syncEngine,n,0),function(){return Hv.D()?new Hv:new AN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new nO(i,s,o,l,u,c);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Z(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ca(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Q1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=am(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wO(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qv(e.remoteStore,i)),t._onlineComponents=e}function _O(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function wO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!_O(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Bh(t,new Xv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Bh(t,new Xv);return t._offlineComponents}async function KE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Jv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Jv(t,new gO))),t._onlineComponents}function EO(t){return KE(t).then(e=>e.syncEngine)}async function Zv(t){const e=await KE(t),n=e.eventManager;return n.onListen=rO.bind(null,e.syncEngine),n.onUnlisten=oO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=aO.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t,e,n){if(!n)throw new G(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IO(t,e,n,r){if(e===!0&&r===!0)throw new G(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t0(t){if(!Y.isDocumentKey(t))throw new G(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cm(t);throw new G(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VR;switch(r.type){case"firstParty":return new zR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e0.get(n);r&&(H("ComponentProvider","Removing Datastore"),e0.delete(n),r.terminate())}(this),Promise.resolve()}}function kO(t,e,n,r={}){var i;const s=(t=ss(t,hm))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=dt.MOCK_USER;else{l=mC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new dt(c)}t._authCredentials=new FR(new K1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kc(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class da extends kc{constructor(e,n,r){super(e,n,Kp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new Y(e))}withConverter(e){return new da(this.firestore,e,this._path)}}function wd(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Q1.newId()),TO("doc","path",e),t instanceof hm){const r=Oe.fromString(e,...n);return t0(r),new Wt(t,null,new Y(r))}{if(!(t instanceof Wt||t instanceof da))throw new G(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return t0(r),new Wt(t.firestore,t instanceof da?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new OE(this,"async_queue_retry"),this.hu=()=>{const n=zh();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new ii;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Pa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=om.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function r0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Fu extends hm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new SO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||JE(this),this._firestoreClient.terminate()}}function AO(t,e){const n=typeof t=="object"?t:U1(),r=typeof t=="string"?t:e||"(default)",i=zp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dC("firestore");s&&kO(i,...s)}return i}function XE(t){return t._firestoreClient||JE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JE(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new ex(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,QE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new vO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(yt.fromBase64String(e))}catch(n){throw new G(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=/^__.*__$/;class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ac{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Uu(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(eT(this.fu)&&PO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class bO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}Fu(e,n,r,i=!1){return new Ac({fu:e,methodName:n,vu:r,path:tt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function CO(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new bO(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Pc extends xa{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pc}}function tT(t,e,n){return new Ac({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dm extends xa{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=tT(this,e,!0),r=this.Mu.map(s=>Vs(s,n)),i=new ks(r);return new yE(e.path,i)}isEqual(e){return e instanceof dm&&vs(this.Mu,e.Mu)}}class pm extends xa{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=tT(this,e,!0),r=this.Mu.map(s=>Vs(s,n)),i=new Ss(r);return new yE(e.path,i)}isEqual(e){return e instanceof pm&&vs(this.Mu,e.Mu)}}function RO(t,e,n,r){const i=t.Fu(1,e,n);rT("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();Ti(r,(u,c)=>{const d=mm(e,u,n);c=ot(c);const p=i.Su(d);if(c instanceof Pc)s.push(d);else{const y=Vs(c,p);y!=null&&(s.push(d),o.set(d,y))}});const l=new Zt(s);return new ZE(o,l,i.fieldTransforms)}function xO(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[i0(e,r,n)],u=[i];if(s.length%2!=0)throw new G(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(i0(e,s[y])),u.push(s[y+1]);const c=[],d=xt.empty();for(let y=l.length-1;y>=0;--y)if(!DO(c,l[y])){const T=l[y];let b=u[y];b=ot(b);const C=o.Su(T);if(b instanceof Pc)c.push(T);else{const A=Vs(b,C);A!=null&&(c.push(T),d.set(T,A))}}const p=new Zt(c);return new ZE(d,p,o.fieldTransforms)}function Vs(t,e){if(nT(t=ot(t)))return rT("Unsupported field value:",e,t),NO(t,e);if(t instanceof xa)return function(r,i){if(!eT(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Vs(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Lu(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lu(i.serializer,s)}}if(r instanceof fm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:kE(i.serializer,r._byteString)};if(r instanceof Wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${cm(r)}`)}(t,e)}function NO(t,e){const n={};return X1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,i)=>{const s=Vs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof fm||t instanceof bs||t instanceof Wt||t instanceof xa)}function rT(t,e,n){if(!nT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=cm(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function i0(t,e,n){if((e=ot(e))instanceof Sc)return e._internalPath;if(typeof e=="string")return mm(t,e);throw Uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const OO=new RegExp("[~\\*/\\[\\]]");function mm(t,e,n){if(e.search(OO)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sc(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(L.INVALID_ARGUMENT,l+t+u)}function DO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MO extends iT{data(){return super.data()}}function sT(t,e){return typeof e=="string"?mm(t,e):e instanceof Sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VO{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ti(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new fm(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ca(e));default:return null}}convertTimestamp(e){const n=Or(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);ye(RE(r));const i=new ha(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oT extends iT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gl extends oT{data(e={}){return super.data(e)}}class FO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new To(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new To(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new To(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:UO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class aT extends VO{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function s0(t,e,n,...r){t=ss(t,Wt);const i=ss(t.firestore,Fu),s=CO(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof Sc?xO(s,"updateDoc",t._key,e,n,r):RO(s,"updateDoc",t._key,e),zO(i,[o.toMutation(t._key,Mn.exists(!0))])}function jO(t,...e){var n,r,i;t=ot(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||r0(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(r0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof Wt)c=ss(t.firestore,Fu),d=Kp(t._key.path),u={next:p=>{e[o]&&e[o](BO(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=ss(t,kc);c=ss(p.firestore,Fu),d=p._query;const y=new aT(c);u={next:T=>{e[o]&&e[o](new FO(c,y,p,T))},error:e[o+1],complete:e[o+2]},LO(t._query)}return function(y,T,b,C){const A=new yO(C),E=new JN(T,A,b);return y.asyncQueue.enqueueAndForget(async()=>GN(await Zv(y),E)),()=>{A.$a(),y.asyncQueue.enqueueAndForget(async()=>KN(await Zv(y),E))}}(XE(c),d,l,u)}function zO(t,e){return function(r,i){const s=new ii;return r.asyncQueue.enqueueAndForget(async()=>lO(await EO(r),i,s)),s.promise}(XE(t),e)}function BO(t,e,n){const r=n.docs.get(e._key),i=new aT(t);return new oT(t,i,e._key,r,new To(n.hasPendingWrites,n.fromCache),e.converter)}function $O(...t){return new dm("arrayUnion",t)}function WO(...t){return new pm("arrayRemove",t)}(function(e,n=!0){(function(i){Ds=i})(Os),_s(new fi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Fu(new UR(r.getProvider("auth-internal")),new $R(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ar(Iv,"4.6.3",e),Ar(Iv,"4.6.3","esm2017")})();var HO="firebase",qO="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar(HO,qO,"app");function gm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YO=lT,uT=new ka("auth","Firebase",lT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Up("@firebase/auth");function GO(t,...e){ju.logLevel<=ie.WARN&&ju.warn(`Auth (${Os}): ${t}`,...e)}function Kl(t,...e){ju.logLevel<=ie.ERROR&&ju.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw ym(t,...e)}function yn(t,...e){return ym(t,...e)}function cT(t,e,n){const r=Object.assign(Object.assign({},YO()),{[e]:n});return new ka("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return cT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uT.create(t,...e)}function K(t,e,...n){if(!t)throw ym(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function Yn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KO(){return o0()==="http:"||o0()==="https:"}function o0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KO()||vC()||"connection"in navigator)?navigator.onLine:!0}function XO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=gC()||_C()}get(){return QO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new Na(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,r,i={}){return fT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Sa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),hT.fetch()(dT(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function fT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JO),e);try{const i=new tD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cT(t,d,c);rn(t,d)}}catch(i){if(i instanceof Qn)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function Oa(t,e,n,r,i={}){const s=await Ur(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vm(t.config,i):`${t.config.apiScheme}://${i}`}function eD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),ZO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function a0(t){return t!==void 0&&t.enterprise!==void 0}class nD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rD(t,e){return Ur(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function pT(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sD(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=_m(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo($h(i.auth_time)),issuedAtTime:Fo($h(i.iat)),expirationTime:Fo($h(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $h(t){return Number(t)*1e3}function _m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=N1(n);return i?JSON.parse(i):(Kl("Failed to decode base64 JWT payload"),null)}catch(i){return Kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function l0(t){const e=_m(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&oD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pa(t,pT(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mT(s.providerUserInfo):[],l=uD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Td(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lD(t){const e=ot(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mT(t){return t.map(e=>{var{providerId:n}=e,r=gm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e){const n=await fT(t,{},async()=>{const r=Sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hD(t,e){return Ur(t,"POST","/v2/accounts:revokeToken",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):l0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=l0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new os;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Td(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sD(this,e)}reload(){return lD(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await pa(this,iD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:O,isAnonymous:D,providerData:F,stsTokenManager:_}=n;K(I&&_,e,"internal-error");const g=os.fromJSON(this.name,_);K(typeof I=="string",e,"internal-error"),rr(p,e.name),rr(y,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof D=="boolean",e,"internal-error"),rr(T,e.name),rr(b,e.name),rr(C,e.name),rr(A,e.name),rr(E,e.name),rr(v,e.name);const w=new Nn({uid:I,auth:e,email:y,emailVerified:O,displayName:p,isAnonymous:D,photoURL:b,phoneNumber:T,tenantId:C,stsTokenManager:g,createdAt:E,lastLoginAt:v});return F&&Array.isArray(F)&&(w.providerData=F.map(k=>Object.assign({},k))),A&&(w._redirectEventId=A),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new os;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new os;l.updateFromIdToken(r);const u=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Td(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;function On(t){Yn(t instanceof Function,"Expected a class definition");let e=u0.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,u0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gT.type="NONE";const c0=gT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(On(c0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||On(c0);const o=Ql(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Nn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new as(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new as(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_T(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ET(e))return"Blackberry";if(TT(e))return"Webos";if(wm(e))return"Safari";if((e.includes("chrome/")||vT(e))&&!e.includes("edge/"))return"Chrome";if(wT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yT(t=st()){return/firefox\//i.test(t)}function wm(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vT(t=st()){return/crios\//i.test(t)}function _T(t=st()){return/iemobile/i.test(t)}function wT(t=st()){return/android/i.test(t)}function ET(t=st()){return/blackberry/i.test(t)}function TT(t=st()){return/webos/i.test(t)}function bc(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fD(t=st()){var e;return bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dD(){return wC()&&document.documentMode===10}function IT(t=st()){return bc(t)||wT(t)||TT(t)||ET(t)||/windows phone/i.test(t)||_T(t)}function pD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e=[]){let n;switch(t){case"Browser":n=h0(st());break;case"Worker":n=`${h0(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e={}){return Ur(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=6;class vD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new f0(this),this.idTokenSubscription=new f0(this),this.beforeStateQueue=new mD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pT(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Ln(this));const n=e?ot(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gD(this),n=new vD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ka("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return ot(t)}class f0{constructor(e){this.auth=e,this.observer=null,this.addObserver=bC(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wD(t){Cc=t}function ST(t){return Cc.loadJS(t)}function ED(){return Cc.recaptchaEnterpriseScript}function TD(){return Cc.gapiScript}function ID(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kD="recaptcha-enterprise",SD="NO_RECAPTCHA";class AD{constructor(e){this.type=kD,this.auth=Si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{rD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new nD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;a0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(SD)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&a0(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ED();u.length!==0&&(u+=l),ST(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function d0(t,e,n,r=!1){const i=new AD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Id(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await d0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await d0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t,e){const n=zp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vs(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function bD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CD(t,e,n){const r=Si(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=AT(e),{host:o,port:l}=RD(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xD()}function AT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RD(t){const e=AT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:p0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:p0(o)}}}function p0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function ND(t,e){return Ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DD(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function MD(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Em{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,n,"signInWithPassword",OD);case"emailLink":return DD(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,r,"signUpPassword",ND);case"emailLink":return MD(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="http://localhost";class yi extends Em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:LD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FD(t){const e=yo(vo(t)).link,n=e?yo(vo(e)).deep_link_id:null,r=yo(vo(t)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||e||t}class Tm{constructor(e){var n,r,i,s,o,l;const u=yo(vo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=VD((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=FD(e);try{return new Tm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tm.parseLink(n);return K(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends PT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Da{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Da{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Da{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){return Oa(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=m0(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=m0(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function m0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function bT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function jD(t,e,n=!1){const r=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Ln(r));const i="reauthenticate";try{const s=await pa(t,bT(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=_m(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e,n=!1){if(fn(t.app))return Promise.reject(Ln(t));const r="signIn",i=await bT(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BD(t,e){return CT(Si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t){const e=Si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $D(t,e,n){if(fn(t.app))return Promise.reject(Ln(t));const r=Si(t),o=await Id(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&RT(t),u}),l=await vi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function WD(t,e,n){return fn(t.app)?Promise.reject(Ln(t)):BD(ot(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&RT(t),r})}function HD(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function qD(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function YD(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function GD(t){return ot(t).signOut()}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(){const t=st();return wm(t)||bc(t)}const QD=1e3,XD=10;class NT extends xT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KD()&&pD(),this.fallbackToPolling=IT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NT.type="LOCAL";const JD=NT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends xT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const DT=OT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await ZD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Im("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function tM(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function nM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iM(){return MT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebaseLocalStorageDb",sM=1,Wu="firebaseLocalStorage",VT="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function oM(){const t=indexedDB.deleteDatabase(LT);return new Ma(t).toPromise()}function kd(){const t=indexedDB.open(LT,sM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:VT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await oM(),e(await kd()))})})}async function g0(t,e,n){const r=xc(t,!0).put({[VT]:e,value:n});return new Ma(r).toPromise()}async function aM(t,e){const n=xc(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function y0(t,e){const n=xc(t,!0).delete(e);return new Ma(n).toPromise()}const lM=800,uM=3;class FT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(iM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nM(),!this.activeServiceWorker)return;this.sender=new eM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await g0(e,$u,"1"),await y0(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>g0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FT.type="LOCAL";const cM=FT;new Na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t,e){return e?On(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km extends Em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fM(t){return CT(t.auth,new km(t),t.bypassAuthState)}function dM(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),zD(n,new km(t),t.bypassAuthState)}async function pM(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),jD(n,new km(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fM;case"linkViaPopup":case"linkViaRedirect":return pM;case"reauthViaPopup":case"reauthViaRedirect":return dM;default:rn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=new Na(2e3,1e4);class Qi extends UT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mM.get())};e()}}Qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="pendingRedirect",Xl=new Map;class yM extends UT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await vM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vM(t,e){const n=EM(e),r=wM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _M(t,e){Xl.set(t._key(),e)}function wM(t){return On(t._redirectPersistence)}function EM(t){return Ql(gM,t.config.apiKey,t.name)}async function TM(t,e,n=!1){if(fn(t.app))return Promise.reject(Ln(t));const r=Si(t),i=hM(r,e),o=await new yM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=10*60*1e3;class kM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IM&&this.cachedEventUids.clear(),this.cachedEventUids.has(v0(e))}saveEventToCache(e){this.cachedEventUids.add(v0(e)),this.lastProcessedEventTime=Date.now()}}function v0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AM(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bM=/^https?/;async function CM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AM(t);for(const n of e)try{if(RM(n))return}catch{}rn(t,"unauthorized-domain")}function RM(t){const e=Ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bM.test(n))return!1;if(PM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM=new Na(3e4,6e4);function _0(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NM(t){return new Promise((e,n)=>{var r,i,s;function o(){_0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_0(),n(yn(t,"network-request-failed"))},timeout:xM.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=ID("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},ST(`${TD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function OM(t){return Jl=Jl||NM(t),Jl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=new Na(5e3,15e3),MM="__/auth/iframe",LM="emulator/auth/iframe",VM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UM(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vm(e,LM):`https://${t.config.authDomain}/${MM}`,r={apiKey:e.apiKey,appName:t.name,v:Os},i=FM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sa(r).slice(1)}`}async function jM(t){const e=await OM(t),n=vn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:UM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},DM.get());function u(){vn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BM=500,$M=600,WM="_blank",HM="http://localhost";class w0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qM(t,e,n,r=BM,i=$M){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},zM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=st().toLowerCase();n&&(l=vT(c)?WM:n),yT(c)&&(e=e||HM,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[T,b])=>`${y}${T}=${b},`,"");if(fD(c)&&l!=="_self")return YM(e||"",l),new w0(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new w0(p)}function YM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="__/auth/handler",KM="emulator/auth/handler",QM=encodeURIComponent("fac");async function E0(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:i};if(e instanceof PT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof Da){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${QM}=${encodeURIComponent(u)}`:"";return`${XM(t)}?${Sa(l).slice(1)}${c}`}function XM({config:t}){return t.emulator?vm(t,KM):`https://${t.authDomain}/${GM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="webStorageSupport";class JM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DT,this._completeRedirectFn=TM,this._overrideRedirectResult=_M}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await E0(e,n,r,Ed(),i);return qM(e,o,Im())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await E0(e,n,r,Ed(),i);return tM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jM(e),r=new kM(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wh];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return IT()||wm()||bc()}}const ZM=JM;var T0="@firebase/auth",I0="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n4(t){_s(new fi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kT(t)},c=new _D(r,i,s,u);return bD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new fi("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(r=>new e4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ar(T0,I0,t4(t)),Ar(T0,I0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4=5*60,i4=M1("authIdTokenMaxAge")||r4;let k0=null;const s4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i4)return;const i=n==null?void 0:n.token;k0!==i&&(k0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function o4(t=U1()){const e=zp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PD(t,{popupRedirectResolver:ZM,persistence:[cM,JD,DT]}),r=M1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=s4(s.toString());qD(n,o,()=>o(n.currentUser)),HD(n,l=>o(l))}}const i=O1("auth");return i&&CD(n,`http://${i}`),n}function a4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",a4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n4("Browser");const l4={apiKey:"AIzaSyCpROQNhRGCjbYJHNxpEoTiJhhoJefaVlk",authDomain:"scheduler-adef2.firebaseapp.com",projectId:"scheduler-adef2",storageBucket:"scheduler-adef2.appspot.com",messagingSenderId:"882507871628",appId:"1:882507871628:web:095a8b136f1894ff7912a9"};F1(l4);const Hu=o4(),Sd=AO(),u4="/scheduler/assets/clock-BE6j0dJX.png",c4=({selectedDay:t,user:e,allTasks:n})=>{const[r,i]=Ve.useState([]),[s,o]=Ve.useState({name:"",type:"task",time:"",desc:"",status:!1}),[l,u]=Ve.useState(!1),c=["task","deadline","occasion","reminder","other"];Ve.useEffect(()=>{i(n.filter(A=>{const E=A.date.toDate();return Ge(t,"yyyy-MM-dd")===Ge(E,"yyyy-MM-dd")}))},[t,n]),Ve.useEffect(()=>{d(),n.forEach(A=>{td(A.date.toDate())&&p(A)})},[]);const d=async()=>{try{if(await Notification.requestPermission()!=="granted")throw new Error("Permission not granted for Notification")}catch(A){console.error("Error requesting notification permission",A)}},p=A=>{if(!A.time)return;const E=new Date,v=new Date,[I,O]=A.time.split(":");v.setHours(I,O,0,0);const D=v-E;D>0&&setTimeout(()=>{y(A)},D)},y=A=>{const E=new Notification(`Reminder for ${A.name}`,{body:`${A.desc} at ${A.time}`,icon:u4});E.onclick=()=>{window.focus()}},T=async A=>{try{A.status=!1,await s0(wd(Sd,"users",e.uid),{tasks:WO(A)})}catch(E){console.error("Error deleting event:",E)}},b=async A=>{const E={...A,status:!A.status};i(r.map(v=>v.name===A.name?E:v))},C=async()=>{try{if(s.name===""||t<Fp())return;const A={...s,date:t};td(A.date)&&p(A),await s0(wd(Sd,"users",e.uid),{tasks:$O(A)}),i([...r,A]),o({name:"",type:"task",time:"",desc:"",status:!1}),u(!1)}catch(A){console.error("Error adding event:",A)}};return j.jsxs("div",{className:"relative w-1/2 py-5 px-5",children:[j.jsx("div",{className:"w-full h-12 flex flex-wrap items-center justify-center py-0 px-10 mt-12 mb-5 capitalize",children:j.jsx("div",{className:"text-3xl font-medium ",children:Ge(t,"EEEE")})}),j.jsx("div",{className:"absolute right-10 top-20 text-base font-normal text-zy",children:Ge(t,"do MMMM yyyy")}),j.jsx("div",{className:"w-full h-full overflow-x-hidden overflow-y-auto flex flex-col p-1",children:r.length==0?j.jsx("div",{className:"w-full h-full flex justify-center text-2xl font-medium text-[#878787] py-40",children:j.jsx("h3",{children:"No Events"})}):r.map(A=>j.jsxs("div",{className:"relative w-full min-h-16 grid grid-cols-4 gap-1 py-0 text-white cursor-pointer bg-gradient-to-r from-taskbg even:from-transparent hover:from-violet-300",children:[j.jsx("div",{className:"flex items-center justify-start pl-5",children:A.status?j.jsx(zt,{icon:HS,className:"cursor-pointer hover:text-red-500",onClick:()=>T(A)}):j.jsx(zt,{icon:A.type==="task"?GS:QS})}),j.jsx("div",{className:"pointer-events-none flex items-center",children:j.jsx("h3",{className:"font-normal text-base ml-5",children:A.name})}),j.jsx("div",{className:"flex items-center justify-center",children:j.jsx("span",{children:A.time})}),j.jsx("div",{className:"flex items-center justify-center",children:j.jsx(zt,{icon:A.status?ZS:KS,onClick:()=>b(A),className:"hover:text-black border border-solid border-white py-1 px-1.5"})})]},A.id))}),l&&j.jsxs("div",{className:"absolute bottom-24 left-1/2 w-11/12 overflow-hidden rounded-md bg-white -translate-x-1/2 duration-500 active:max-h-80",children:[j.jsxs("div",{className:"w-full h-12 flex items-center justify-between py-0 px-5 text-gray border-b border-solid border-[#f5f5f5]",children:[j.jsx("div",{className:"text-xl font-medium",children:"Add"}),j.jsx("div",{onClick:()=>{o({name:"",type:"",time:"",desc:"",status:!1}),u(!1)},className:"text-2xl cursor-pointer hover:text-violet-300",children:j.jsx(zt,{icon:JS})})]}),j.jsxs("div",{className:"w-full h-full flex flex-col gap-2 p-5",children:[j.jsx("div",{className:"w-full h-10 flex items-center justify-between gap-2",children:j.jsx("input",{type:"text",placeholder:"event name",value:s.name,onChange:A=>o({...s,name:A.target.value}),className:"w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300"})}),j.jsxs("div",{className:"w-full h-10 flex items-center justify-between gap-2",children:[j.jsx("select",{value:s.type,onChange:A=>o({...s,type:A.target.value}),className:"w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300",children:c.map((A,E)=>j.jsx("option",{children:A},E))}),j.jsx("input",{type:"time",placeholder:"alert time",value:s.time,onChange:A=>o({...s,time:A.target.value}),className:"w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300"})]}),j.jsx("div",{className:"w-full h-10 flex items-center justify-between gap-2",children:j.jsx("input",{type:"text",placeholder:"description",value:s.desc,onChange:A=>o({...s,desc:A.target.value}),className:"w-full h-full outline-none border-b border-solid border-b-[#f5f5f5] py-0 px-2 text-base font-normal text-gray focus:border-violet-300"})})]}),j.jsx("div",{className:"flex items-center justify-center p-5",children:j.jsx("button",{onClick:()=>{C()},className:"h-10 text-base font-medium outline-none text-white bg-violet-400 rounded-md cursor-pointer py-1 px-2 border border-solid border-violet-300 hover:text-violet-300 hover:bg-transparent",children:"add event"})})]}),j.jsx("button",{onClick:()=>u(!0),className:"absolute bottom-7 right-7 w-10 h-10 rounded-full flex items-center justify-center text-base text-zy border-2 border-solid border-zy opacity-50 bg-transparent cursor-pointer hover:opacity-100",children:j.jsx(zt,{icon:XS})})]})},h4=({user:t,setUser:e})=>{const[n,r]=Ve.useState({uname:"",mail:"",pswd:""}),[i,s]=Ve.useState(!0),[o,l]=Ve.useState(!1),[u,c]=Ve.useState(!1),d=C=>{let A={[C.target.name]:C.target.value};r({...n,...A})},p=C=>{C.key==="Enter"&&(i===!1?T():y())},y=async()=>{c(!0);const C=n.mail,A=n.pswd;try{const E=await WD(Hu,C,A);e(E.user)}catch{l(!0),c(!1)}},T=async()=>{c(!0),n.uname;const C=n.mail,A=n.pswd;try{const E=await $D(Hu,C,A);e(E.user)}catch(E){console.error("Signup Error:",E.message),l(!0),c(!1)}},b=()=>{r({uname:"",mail:"",pswd:""}),s(!i)};return i?j.jsxs("div",{className:"",children:[j.jsx("input",{type:"email",name:"mail",value:n.mail,required:"required",onChange:C=>d(C)}),j.jsx("input",{type:"password",name:"pswd",value:n.pswd,required:"required",onChange:C=>d(C),onKeyDown:p}),j.jsx("input",{type:"submit",value:"Sign in",onClick:y}),j.jsxs("p",{children:["Don't have an account? ",j.jsx("span",{onClick:b,children:"Register"})]})]}):j.jsxs("div",{className:"",children:[j.jsx("input",{type:"text",name:"uname",required:"required",value:n.uname,onChange:C=>d(C)}),j.jsx("input",{type:"email",name:"mail",value:n.mail,required:"required",onChange:C=>d(C)}),j.jsx("input",{type:"password",name:"pswd",value:n.pswd,required:"required",onChange:C=>d(C),onKeyDown:p}),j.jsx("input",{type:"submit",value:"Sign up",onClick:T}),o&&j.jsx("p",{children:"Something went wrong!"}),j.jsxs("p",{children:["Already have an account? ",j.jsx("span",{onClick:b,children:"Login"})]})]})};function f4(){const[t,e]=Ve.useState(Fp()),[n,r]=Ve.useState(null),[i,s]=Ve.useState([]);return Ve.useEffect(()=>{const o=YD(Hu,l=>{r(l)});return()=>{o()}},[]),Ve.useEffect(()=>{if(n&&n.uid){const o=jO(wd(Sd,"users",n.uid),l=>{l.exists()&&s(l.data().tasks||[])});return()=>{o()}}},[n]),n?j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"relative my-5 p-1.5 text-white flex rounded-xl bg-gray w-[1200px] min-h-[650px] lg:min-h-screen lg:flex-col lg:rounded-none",children:[j.jsx(iC,{selectedDay:t,setselectedDay:e,allTasks:i}),j.jsx(c4,{selectedDay:t,user:n,allTasks:i})]}),j.jsx(zt,{className:"absolute cursor-pointer top-2 right-2 text-zy",icon:qS,onClick:()=>GD(Hu)})]}):j.jsx(h4,{user:n,setUser:r})}Hh.createRoot(document.getElementById("root")).render(j.jsx(Rd.StrictMode,{children:j.jsx(f4,{})}));
