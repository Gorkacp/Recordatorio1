(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function dl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},Ar=[],Gt=()=>{},im=()=>!1,Io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pl=t=>t.startsWith("onUpdate:"),at=Object.assign,gl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},om=Object.prototype.hasOwnProperty,Ie=(t,e)=>om.call(t,e),re=Array.isArray,br=t=>Gs(t)==="[object Map]",wo=t=>Gs(t)==="[object Set]",iu=t=>Gs(t)==="[object Date]",oe=t=>typeof t=="function",Ue=t=>typeof t=="string",Jt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",_f=t=>(Se(t)||oe(t))&&oe(t.then)&&oe(t.catch),yf=Object.prototype.toString,Gs=t=>yf.call(t),am=t=>Gs(t).slice(8,-1),vf=t=>Gs(t)==="[object Object]",ml=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ms=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ao=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lm=/-(\w)/g,St=Ao(t=>t.replace(lm,(e,n)=>n?n.toUpperCase():"")),cm=/\B([A-Z])/g,Bn=Ao(t=>t.replace(cm,"-$1").toLowerCase()),bo=Ao(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Ao(t=>t?`on${bo(t)}`:""),Nn=(t,e)=>!Object.is(t,e),Ni=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ef=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ou;const Ro=()=>ou||(ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _l(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?dm(r):_l(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Se(t))return t}const um=/;(?![^(]*\))/g,hm=/:([^]+)/,fm=/\/\*[^]*?\*\//g;function dm(t){const e={};return t.replace(fm,"").split(um).forEach(n=>{if(n){const r=n.split(hm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yl(t){let e="";if(Ue(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=yl(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gm=dl(pm);function Tf(t){return!!t||t===""}function mm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=So(t[r],e[r]);return n}function So(t,e){if(t===e)return!0;let n=iu(t),r=iu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Jt(t),r=Jt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?mm(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!So(t[a],e[a]))return!1}}return String(t)===String(e)}function _m(t,e){return t.findIndex(n=>So(n,e))}const If=t=>!!(t&&t.__v_isRef===!0),wf=t=>Ue(t)?t:t==null?"":re(t)||Se(t)&&(t.toString===yf||!oe(t.toString))?If(t)?wf(t.value):JSON.stringify(t,Af,2):String(t),Af=(t,e)=>If(e)?Af(t,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fa(r,i)+" =>"]=s,n),{})}:wo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fa(n))}:Jt(e)?fa(e):Se(e)&&!re(e)&&!vf(e)?String(e):e,fa=(t,e="")=>{var n;return Jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class ym{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vm(){return vt}let Re;const da=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,au(this),Pf(this);const e=Re,n=Ft;Re=this,Ft=!0;try{return this.fn()}finally{Cf(this),Re=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tl(e);this.deps=this.depsTail=void 0,au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Da(this)&&this.run()}get dirty(){return Da(this)}}let Rf=0,_s,ys;function Sf(t,e=!1){if(t.flags|=8,e){t.next=ys,ys=t;return}t.next=_s,_s=t}function vl(){Rf++}function El(){if(--Rf>0)return;if(ys){let e=ys;for(ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_s;){let e=_s;for(_s=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Tl(r),Em(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Da(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Of(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Os))return;t.globalVersion=Os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Da(t)){t.flags&=-3;return}const n=Re,r=Ft;Re=t,Ft=!0;try{Pf(t);const s=t.fn(t._value);(e.version===0||Nn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=n,Ft=r,Cf(t),t.flags&=-3}}function Tl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Tl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Em(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const kf=[];function jn(){kf.push(Ft),Ft=!1}function $n(){const t=kf.pop();Ft=t===void 0?!0:t}function au(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let Os=0;class Tm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Il{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Re||!Ft||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new Tm(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,Nf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=r)}return n}trigger(e){this.version++,Os++,this.notify(e)}notify(e){vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{El()}}}function Nf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Va=new WeakMap,er=Symbol(""),xa=Symbol(""),ks=Symbol("");function nt(t,e,n){if(Ft&&Re){let r=Va.get(t);r||Va.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Il),s.map=r,s.key=n),s.track()}}function an(t,e,n,r,s,i){const a=Va.get(t);if(!a){Os++;return}const l=c=>{c&&c.trigger()};if(vl(),e==="clear")a.forEach(l);else{const c=re(t),f=c&&ml(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===ks||!Jt(y)&&y>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(ks)),e){case"add":c?f&&l(a.get("length")):(l(a.get(er)),br(t)&&l(a.get(xa)));break;case"delete":c||(l(a.get(er)),br(t)&&l(a.get(xa)));break;case"set":br(t)&&l(a.get(er));break}}El()}function vr(t){const e=Te(t);return e===t?e:(nt(e,"iterate",ks),Rt(t)?e:e.map(rt))}function Po(t){return nt(t=Te(t),"iterate",ks),t}const Im={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,rt)},concat(...t){return vr(this).concat(...t.map(e=>re(e)?vr(e):e))},entries(){return pa(this,"entries",t=>(t[1]=rt(t[1]),t))},every(t,e){return rn(this,"every",t,e,void 0,arguments)},filter(t,e){return rn(this,"filter",t,e,n=>n.map(rt),arguments)},find(t,e){return rn(this,"find",t,e,rt,arguments)},findIndex(t,e){return rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rn(this,"findLast",t,e,rt,arguments)},findLastIndex(t,e){return rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ga(this,"includes",t)},indexOf(...t){return ga(this,"indexOf",t)},join(t){return vr(this).join(t)},lastIndexOf(...t){return ga(this,"lastIndexOf",t)},map(t,e){return rn(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return lu(this,"reduce",t,e)},reduceRight(t,...e){return lu(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return rn(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return vr(this).toReversed()},toSorted(t){return vr(this).toSorted(t)},toSpliced(...t){return vr(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return pa(this,"values",rt)}};function pa(t,e,n){const r=Po(t),s=r[e]();return r!==t&&!Rt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const wm=Array.prototype;function rn(t,e,n,r,s,i){const a=Po(t),l=a!==t&&!Rt(t),c=a[e];if(c!==wm[e]){const p=c.apply(t,i);return l?rt(p):p}let f=n;a!==t&&(l?f=function(p,y){return n.call(this,rt(p),y,t)}:n.length>2&&(f=function(p,y){return n.call(this,p,y,t)}));const d=c.call(a,f,r);return l&&s?s(d):d}function lu(t,e,n,r){const s=Po(t);let i=n;return s!==t&&(Rt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,rt(l),c,t)}),s[e](i,...r)}function ga(t,e,n){const r=Te(t);nt(r,"iterate",ks);const s=r[e](...n);return(s===-1||s===!1)&&bl(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function us(t,e,n=[]){jn(),vl();const r=Te(t)[e].apply(t,n);return El(),$n(),r}const Am=dl("__proto__,__v_isRef,__isVue"),Df=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jt));function bm(t){Jt(t)||(t=String(t));const e=Te(this);return nt(e,"has",t),e.hasOwnProperty(t)}class Vf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xm:Ff:i?Lf:Mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let c;if(a&&(c=Im[n]))return c;if(n==="hasOwnProperty")return bm}const l=Reflect.get(e,n,ot(e)?e:r);return(Jt(n)?Df.has(n):Am(n))||(s||nt(e,"get",n),i)?l:ot(l)?a&&ml(n)?l:l.value:Se(l)?s?Bf(l):Co(l):l}}class xf extends Vf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ir(i);if(!Rt(r)&&!ir(r)&&(i=Te(i),r=Te(r)),!re(e)&&ot(i)&&!ot(r))return c?!1:(i.value=r,!0)}const a=re(e)&&ml(n)?Number(n)<e.length:Ie(e,n),l=Reflect.set(e,n,r,ot(e)?e:s);return e===Te(s)&&(a?Nn(r,i)&&an(e,"set",n,r):an(e,"add",n,r)),l}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&an(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jt(n)||!Df.has(n))&&nt(e,"has",n),r}ownKeys(e){return nt(e,"iterate",re(e)?"length":er),Reflect.ownKeys(e)}}class Rm extends Vf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sm=new xf,Pm=new Rm,Cm=new xf(!0);const Ma=t=>t,Ii=t=>Reflect.getPrototypeOf(t);function Om(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),a=br(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=s[t](...r),d=n?Ma:e?La:rt;return!e&&nt(i,"iterate",c?xa:er),{next(){const{value:p,done:y}=f.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function wi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function km(t,e){const n={get(s){const i=this.__v_raw,a=Te(i),l=Te(s);t||(Nn(s,l)&&nt(a,"get",s),nt(a,"get",l));const{has:c}=Ii(a),f=e?Ma:t?La:rt;if(c.call(a,s))return f(i.get(s));if(c.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&nt(Te(s),"iterate",er),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Te(i),l=Te(s);return t||(Nn(s,l)&&nt(a,"has",s),nt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Te(l),f=e?Ma:t?La:rt;return!t&&nt(c,"iterate",er),l.forEach((d,p)=>s.call(i,f(d),f(p),a))}};return at(n,t?{add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear")}:{add(s){!e&&!Rt(s)&&!ir(s)&&(s=Te(s));const i=Te(this);return Ii(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!Rt(i)&&!ir(i)&&(i=Te(i));const a=Te(this),{has:l,get:c}=Ii(a);let f=l.call(a,s);f||(s=Te(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,i),f?Nn(i,d)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:l}=Ii(i);let c=a.call(i,s);c||(s=Te(s),c=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return c&&an(i,"delete",s,void 0),f},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Om(s,t,e)}),n}function wl(t,e){const n=km(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const Nm={get:wl(!1,!1)},Dm={get:wl(!1,!0)},Vm={get:wl(!0,!1)};const Mf=new WeakMap,Lf=new WeakMap,Ff=new WeakMap,xm=new WeakMap;function Mm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lm(t){return t.__v_skip||!Object.isExtensible(t)?0:Mm(am(t))}function Co(t){return ir(t)?t:Al(t,!1,Sm,Nm,Mf)}function Uf(t){return Al(t,!1,Cm,Dm,Lf)}function Bf(t){return Al(t,!0,Pm,Vm,Ff)}function Al(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Lm(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Rr(t){return ir(t)?Rr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function Rt(t){return!!(t&&t.__v_isShallow)}function bl(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Fm(t){return!Ie(t,"__v_skip")&&Object.isExtensible(t)&&Ef(t,"__v_skip",!0),t}const rt=t=>Se(t)?Co(t):t,La=t=>Se(t)?Bf(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function jf(t){return $f(t,!1)}function Um(t){return $f(t,!0)}function $f(t,e){return ot(t)?t:new Bm(t,e)}class Bm{constructor(e,n){this.dep=new Il,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Rt(e)||ir(e);e=r?e:Te(e),Nn(e,n)&&(this._rawValue=e,this._value=r?e:rt(e),this.dep.trigger())}}function Sr(t){return ot(t)?t.value:t}const jm={get:(t,e,n)=>e==="__v_raw"?t:Sr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hf(t){return Rr(t)?t:new Proxy(t,jm)}class $m{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Il(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Sf(this,!0),!0}get value(){const e=this.dep.track();return Of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hm(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new $m(r,s,n)}const Ai={},Gi=new WeakMap;let Qn;function qm(t,e=!1,n=Qn){if(n){let r=Gi.get(n);r||Gi.set(n,r=[]),r.push(t)}}function zm(t,e,n=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,f=z=>s?z:Rt(z)||s===!1||s===0?ln(z,1):ln(z);let d,p,y,I,O=!1,M=!1;if(ot(t)?(p=()=>t.value,O=Rt(t)):Rr(t)?(p=()=>f(t),O=!0):re(t)?(M=!0,O=t.some(z=>Rr(z)||Rt(z)),p=()=>t.map(z=>{if(ot(z))return z.value;if(Rr(z))return f(z);if(oe(z))return c?c(z,2):z()})):oe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){jn();try{y()}finally{$n()}}const z=Qn;Qn=d;try{return c?c(t,3,[I]):t(I)}finally{Qn=z}}:p=Gt,e&&s){const z=p,ce=s===!0?1/0:s;p=()=>ln(z(),ce)}const F=vm(),K=()=>{d.stop(),F&&F.active&&gl(F.effects,d)};if(i&&e){const z=e;e=(...ce)=>{z(...ce),K()}}let j=M?new Array(t.length).fill(Ai):Ai;const q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(s||O||(M?ce.some((he,w)=>Nn(he,j[w])):Nn(ce,j))){y&&y();const he=Qn;Qn=d;try{const w=[ce,j===Ai?void 0:M&&j[0]===Ai?[]:j,I];c?c(e,3,w):e(...w),j=ce}finally{Qn=he}}}else d.run()};return l&&l(q),d=new bf(p),d.scheduler=a?()=>a(q,!1):q,I=z=>qm(z,!1,d),y=d.onStop=()=>{const z=Gi.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();Gi.delete(d)}},e?r?q(!0):j=d.run():a?a(q.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function ln(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ot(t))ln(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)ln(t[r],e,n);else if(wo(t)||br(t))t.forEach(r=>{ln(r,e,n)});else if(vf(t)){for(const r in t)ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ws(t,e,n,r){try{return r?t(...r):t()}catch(s){Oo(s,e,n)}}function Xt(t,e,n,r){if(oe(t)){const s=Ws(t,e,n,r);return s&&_f(s)&&s.catch(i=>{Oo(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}}function Oo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,f)===!1)return}l=l.parent}if(i){jn(),Ws(i,null,10,[t,c,f]),$n();return}}Km(t,n,s,r,a)}function Km(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ft=[];let Ht=-1;const Pr=[];let Rn=null,Er=0;const qf=Promise.resolve();let Wi=null;function Rl(t){const e=Wi||qf;return t?e.then(this?t.bind(this):t):e}function Gm(t){let e=Ht+1,n=ft.length;for(;e<n;){const r=e+n>>>1,s=ft[r],i=Ns(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Sl(t){if(!(t.flags&1)){const e=Ns(t),n=ft[ft.length-1];!n||!(t.flags&2)&&e>=Ns(n)?ft.push(t):ft.splice(Gm(e),0,t),t.flags|=1,zf()}}function zf(){Wi||(Wi=qf.then(Gf))}function Wm(t){re(t)?Pr.push(...t):Rn&&t.id===-1?Rn.splice(Er+1,0,t):t.flags&1||(Pr.push(t),t.flags|=1),zf()}function cu(t,e,n=Ht+1){for(;n<ft.length;n++){const r=ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Kf(t){if(Pr.length){const e=[...new Set(Pr)].sort((n,r)=>Ns(n)-Ns(r));if(Pr.length=0,Rn){Rn.push(...e);return}for(Rn=e,Er=0;Er<Rn.length;Er++){const n=Rn[Er];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rn=null,Er=0}}const Ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gf(t){try{for(Ht=0;Ht<ft.length;Ht++){const e=ft[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<ft.length;Ht++){const e=ft[Ht];e&&(e.flags&=-2)}Ht=-1,ft.length=0,Kf(),Wi=null,(ft.length||Pr.length)&&Gf()}}let Et=null,Wf=null;function Qi(t){const e=Et;return Et=t,Wf=t&&t.type.__scopeId||null,e}function Cr(t,e=Et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vu(-1);const i=Qi(e);let a;try{a=t(...s)}finally{Qi(i),r._d&&vu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function bi(t,e){if(Et===null)return t;const n=Vo(Et),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=be]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Gn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(jn(),Xt(c,n,8,[t.el,l,t,e]),$n())}}const Qm=Symbol("_vte"),Jm=t=>t.__isTeleport;function Pl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Pl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Qf(t,e){return oe(t)?at({name:t.name},e,{setup:t}):t}function Jf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ji(t,e,n,r,s=!1){if(re(t)){t.forEach((O,M)=>Ji(O,e&&(re(e)?e[M]:e),n,r,s));return}if(vs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ji(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Vo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,f=e&&e.r,d=l.refs===be?l.refs={}:l.refs,p=l.setupState,y=Te(p),I=p===be?()=>!1:O=>Ie(y,O);if(f!=null&&f!==c&&(Ue(f)?(d[f]=null,I(f)&&(p[f]=null)):ot(f)&&(f.value=null)),oe(c))Ws(c,l,12,[a,d]);else{const O=Ue(c),M=ot(c);if(O||M){const F=()=>{if(t.f){const K=O?I(c)?p[c]:d[c]:c.value;s?re(K)&&gl(K,i):re(K)?K.includes(i)||K.push(i):O?(d[c]=[i],I(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else O?(d[c]=a,I(c)&&(p[c]=a)):M&&(c.value=a,t.k&&(d[t.k]=a))};a?(F.id=-1,yt(F,n)):F()}}}Ro().requestIdleCallback;Ro().cancelIdleCallback;const vs=t=>!!t.type.__asyncLoader,Xf=t=>t.type.__isKeepAlive;function Xm(t,e){Yf(t,"a",e)}function Ym(t,e){Yf(t,"da",e)}function Yf(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ko(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xf(s.parent.vnode)&&Zm(r,e,n,s),s=s.parent}}function Zm(t,e,n,r){const s=ko(e,t,r,!0);ed(()=>{gl(r[e],s)},n)}function ko(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{jn();const l=Qs(n),c=Xt(e,n,t,a);return l(),$n(),c});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=it)=>{(!xs||t==="sp")&&ko(t,(...r)=>e(...r),n)},e_=_n("bm"),Zf=_n("m"),t_=_n("bu"),n_=_n("u"),r_=_n("bum"),ed=_n("um"),s_=_n("sp"),i_=_n("rtg"),o_=_n("rtc");function a_(t,e=it){ko("ec",t,e)}const l_="components";function Es(t,e){return u_(l_,t,!0,e)||t}const c_=Symbol.for("v-ndc");function u_(t,e,n=!0,r=!1){const s=Et||it;if(s){const i=s.type;{const l=Z_(i,!1);if(l&&(l===e||l===St(e)||l===bo(St(e))))return i}const a=uu(s[t]||i[t],e)||uu(s.appContext[t],e);return!a&&r?i:a}}function uu(t,e){return t&&(t[e]||t[St(e)]||t[bo(St(e))])}function h_(t,e,n,r){let s;const i=n,a=re(t);if(a||Ue(t)){const l=a&&Rr(t);let c=!1;l&&(c=!Rt(t),t=Po(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?rt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Fa=t=>t?Ed(t)?Vo(t):Fa(t.parent):null,Ts=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fa(t.parent),$root:t=>Fa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>nd(t),$forceUpdate:t=>t.f||(t.f=()=>{Sl(t.update)}),$nextTick:t=>t.n||(t.n=Rl.bind(t.proxy)),$watch:t=>N_.bind(t)}),ma=(t,e)=>t!==be&&!t.__isScriptSetup&&Ie(t,e),f_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ma(r,e))return a[e]=1,r[e];if(s!==be&&Ie(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&Ie(f,e))return a[e]=3,i[e];if(n!==be&&Ie(n,e))return a[e]=4,n[e];Ua&&(a[e]=0)}}const d=Ts[e];let p,y;if(d)return e==="$attrs"&&nt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==be&&Ie(n,e))return a[e]=4,n[e];if(y=c.config.globalProperties,Ie(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ma(s,e)?(s[e]=n,!0):r!==be&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==be&&Ie(t,a)||ma(e,a)||(l=i[0])&&Ie(l,a)||Ie(r,a)||Ie(Ts,a)||Ie(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hu(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ua=!0;function d_(t){const e=nd(t),n=t.proxy,r=t.ctx;Ua=!1,e.beforeCreate&&fu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:p,mounted:y,beforeUpdate:I,updated:O,activated:M,deactivated:F,beforeDestroy:K,beforeUnmount:j,destroyed:q,unmounted:z,render:ce,renderTracked:he,renderTriggered:w,errorCaptured:m,serverPrefetch:T,expose:A,inheritAttrs:b,components:S,directives:E,filters:ct}=e;if(f&&p_(f,r,null),a)for(const pe in a){const fe=a[pe];oe(fe)&&(r[pe]=fe.bind(n))}if(s){const pe=s.call(n,n);Se(pe)&&(t.data=Co(pe))}if(Ua=!0,i)for(const pe in i){const fe=i[pe],mt=oe(fe)?fe.bind(n,n):oe(fe.get)?fe.get.bind(n,n):Gt,Ct=!oe(fe)&&oe(fe.set)?fe.set.bind(n):Gt,wt=Nt({get:mt,set:Ct});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>wt.value,set:ke=>wt.value=ke})}if(l)for(const pe in l)td(l[pe],r,n,pe);if(c){const pe=oe(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(fe=>{Di(fe,pe[fe])})}d&&fu(d,t,"c");function xe(pe,fe){re(fe)?fe.forEach(mt=>pe(mt.bind(n))):fe&&pe(fe.bind(n))}if(xe(e_,p),xe(Zf,y),xe(t_,I),xe(n_,O),xe(Xm,M),xe(Ym,F),xe(a_,m),xe(o_,he),xe(i_,w),xe(r_,j),xe(ed,z),xe(s_,T),re(A))if(A.length){const pe=t.exposed||(t.exposed={});A.forEach(fe=>{Object.defineProperty(pe,fe,{get:()=>n[fe],set:mt=>n[fe]=mt})})}else t.exposed||(t.exposed={});ce&&t.render===Gt&&(t.render=ce),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E),T&&Jf(t)}function p_(t,e,n=Gt){re(t)&&(t=Ba(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function fu(t,e,n){Xt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function td(t,e,n,r){let s=r.includes(".")?md(n,r):()=>n[r];if(Ue(t)){const i=e[t];oe(i)&&Vi(s,i)}else if(oe(t))Vi(s,t.bind(n));else if(Se(t))if(re(t))t.forEach(i=>td(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Vi(s,i,t)}}function nd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Xi(c,f,a,!0)),Xi(c,e,a)),Se(e)&&i.set(e,c),c}function Xi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xi(t,i,n,!0),s&&s.forEach(a=>Xi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=g_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const g_={data:du,props:pu,emits:pu,methods:ps,computed:ps,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:ps,directives:ps,watch:__,provide:du,inject:m_};function du(t,e){return e?t?function(){return at(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function m_(t,e){return ps(Ba(t),Ba(e))}function Ba(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function ps(t,e){return t?at(Object.create(null),t,e):e}function pu(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:at(Object.create(null),hu(t),hu(e??{})):e}function __(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function rd(){return{app:null,config:{isNativeTag:im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let y_=0;function v_(t,e){return function(r,s=null){oe(r)||(r=at({},r)),s!=null&&!Se(s)&&(s=null);const i=rd(),a=new WeakSet,l=[];let c=!1;const f=i.app={_uid:y_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ty,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(f,...p)):oe(d)&&(a.add(d),d(f,...p))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,p){return p?(i.components[d]=p,f):i.components[d]},directive(d,p){return p?(i.directives[d]=p,f):i.directives[d]},mount(d,p,y){if(!c){const I=f._ceVNode||Fe(r,s);return I.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(I,d,y),c=!0,f._container=d,d.__vue_app__=f,Vo(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Xt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,p){return i.provides[d]=p,f},runWithContext(d){const p=Or;Or=f;try{return d()}finally{Or=p}}};return f}}let Or=null;function Di(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=it||Et;if(r||Or){const s=Or?Or._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}const sd={},id=()=>Object.create(sd),od=t=>Object.getPrototypeOf(t)===sd;function E_(t,e,n,r=!1){const s={},i=id();t.propsDefaults=Object.create(null),ad(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Uf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function T_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Te(s),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(No(t.emitsOptions,y))continue;const I=e[y];if(c)if(Ie(i,y))I!==i[y]&&(i[y]=I,f=!0);else{const O=St(y);s[O]=ja(c,l,O,I,t,!1)}else I!==i[y]&&(i[y]=I,f=!0)}}}else{ad(t,e,s,i)&&(f=!0);let d;for(const p in l)(!e||!Ie(e,p)&&((d=Bn(p))===p||!Ie(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ja(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],f=!0)}f&&an(t.attrs,"set","")}function ad(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(ms(c))continue;const f=e[c];let d;s&&Ie(s,d=St(c))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:No(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(i){const c=Te(n),f=l||be;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ja(s,c,p,f[p],t,!Ie(f,p))}}return a}function ja(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ie(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&oe(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=Qs(s);r=f[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Bn(n))&&(r=!0))}return r}const I_=new WeakMap;function ld(t,e,n=!1){const r=n?I_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!oe(t)){const d=p=>{c=!0;const[y,I]=ld(p,e,!0);at(a,y),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Se(t)&&r.set(t,Ar),Ar;if(re(i))for(let d=0;d<i.length;d++){const p=St(i[d]);gu(p)&&(a[p]=be)}else if(i)for(const d in i){const p=St(d);if(gu(p)){const y=i[d],I=a[p]=re(y)||oe(y)?{type:y}:at({},y),O=I.type;let M=!1,F=!0;if(re(O))for(let K=0;K<O.length;++K){const j=O[K],q=oe(j)&&j.name;if(q==="Boolean"){M=!0;break}else q==="String"&&(F=!1)}else M=oe(O)&&O.name==="Boolean";I[0]=M,I[1]=F,(M||Ie(I,"default"))&&l.push(p)}}const f=[a,l];return Se(t)&&r.set(t,f),f}function gu(t){return t[0]!=="$"&&!ms(t)}const cd=t=>t[0]==="_"||t==="$stable",Cl=t=>re(t)?t.map(Kt):[Kt(t)],w_=(t,e,n)=>{if(e._n)return e;const r=Cr((...s)=>Cl(e(...s)),n);return r._c=!1,r},ud=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cd(s))continue;const i=t[s];if(oe(i))e[s]=w_(s,i,r);else if(i!=null){const a=Cl(i);e[s]=()=>a}}},hd=(t,e)=>{const n=Cl(e);t.slots.default=()=>n},fd=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},A_=(t,e,n)=>{const r=t.slots=id();if(t.vnode.shapeFlag&32){const s=e._;s?(fd(r,e,n),n&&Ef(r,"_",s,!0)):ud(e,r)}else e&&hd(t,e)},b_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=be;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:fd(s,e,n):(i=!e.$stable,ud(e,s)),a=e}else e&&(hd(t,e),a={default:1});if(i)for(const l in s)!cd(l)&&a[l]==null&&delete s[l]},yt=U_;function R_(t){return S_(t)}function S_(t,e){const n=Ro();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:y,setScopeId:I=Gt,insertStaticContent:O}=t,M=(_,v,R,N=null,V=null,D=null,G=void 0,$=null,B=!!v.dynamicChildren)=>{if(_===v)return;_&&!hs(_,v)&&(N=k(_),ke(_,V,D,!0),_=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:Q}=v;switch(L){case Do:F(_,v,R,N);break;case Ds:K(_,v,R,N);break;case xi:_==null&&j(v,R,N,G);break;case zt:S(_,v,R,N,V,D,G,$,B);break;default:Q&1?ce(_,v,R,N,V,D,G,$,B):Q&6?E(_,v,R,N,V,D,G,$,B):(Q&64||Q&128)&&L.process(_,v,R,N,V,D,G,$,B,X)}ee!=null&&V&&Ji(ee,_&&_.ref,D,v||_,!v)},F=(_,v,R,N)=>{if(_==null)r(v.el=l(v.children),R,N);else{const V=v.el=_.el;v.children!==_.children&&f(V,v.children)}},K=(_,v,R,N)=>{_==null?r(v.el=c(v.children||""),R,N):v.el=_.el},j=(_,v,R,N)=>{[_.el,_.anchor]=O(_.children,v,R,N,_.el,_.anchor)},q=({el:_,anchor:v},R,N)=>{let V;for(;_&&_!==v;)V=y(_),r(_,R,N),_=V;r(v,R,N)},z=({el:_,anchor:v})=>{let R;for(;_&&_!==v;)R=y(_),s(_),_=R;s(v)},ce=(_,v,R,N,V,D,G,$,B)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),_==null?he(v,R,N,V,D,G,$,B):T(_,v,V,D,G,$,B)},he=(_,v,R,N,V,D,G,$)=>{let B,L;const{props:ee,shapeFlag:Q,transition:Z,dirs:ne}=_;if(B=_.el=a(_.type,D,ee&&ee.is,ee),Q&8?d(B,_.children):Q&16&&m(_.children,B,null,N,V,_a(_,D),G,$),ne&&Gn(_,null,N,"created"),w(B,_,_.scopeId,G,N),ee){for(const ae in ee)ae!=="value"&&!ms(ae)&&i(B,ae,null,ee[ae],D,N);"value"in ee&&i(B,"value",null,ee.value,D),(L=ee.onVnodeBeforeMount)&&$t(L,N,_)}ne&&Gn(_,null,N,"beforeMount");const te=P_(V,Z);te&&Z.beforeEnter(B),r(B,v,R),((L=ee&&ee.onVnodeMounted)||te||ne)&&yt(()=>{L&&$t(L,N,_),te&&Z.enter(B),ne&&Gn(_,null,N,"mounted")},V)},w=(_,v,R,N,V)=>{if(R&&I(_,R),N)for(let D=0;D<N.length;D++)I(_,N[D]);if(V){let D=V.subTree;if(v===D||yd(D.type)&&(D.ssContent===v||D.ssFallback===v)){const G=V.vnode;w(_,G,G.scopeId,G.slotScopeIds,V.parent)}}},m=(_,v,R,N,V,D,G,$,B=0)=>{for(let L=B;L<_.length;L++){const ee=_[L]=$?Sn(_[L]):Kt(_[L]);M(null,ee,v,R,N,V,D,G,$)}},T=(_,v,R,N,V,D,G)=>{const $=v.el=_.el;let{patchFlag:B,dynamicChildren:L,dirs:ee}=v;B|=_.patchFlag&16;const Q=_.props||be,Z=v.props||be;let ne;if(R&&Wn(R,!1),(ne=Z.onVnodeBeforeUpdate)&&$t(ne,R,v,_),ee&&Gn(v,_,R,"beforeUpdate"),R&&Wn(R,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&d($,""),L?A(_.dynamicChildren,L,$,R,N,_a(v,V),D):G||fe(_,v,$,null,R,N,_a(v,V),D,!1),B>0){if(B&16)b($,Q,Z,R,V);else if(B&2&&Q.class!==Z.class&&i($,"class",null,Z.class,V),B&4&&i($,"style",Q.style,Z.style,V),B&8){const te=v.dynamicProps;for(let ae=0;ae<te.length;ae++){const ge=te[ae],Je=Q[ge],He=Z[ge];(He!==Je||ge==="value")&&i($,ge,Je,He,V,R)}}B&1&&_.children!==v.children&&d($,v.children)}else!G&&L==null&&b($,Q,Z,R,V);((ne=Z.onVnodeUpdated)||ee)&&yt(()=>{ne&&$t(ne,R,v,_),ee&&Gn(v,_,R,"updated")},N)},A=(_,v,R,N,V,D,G)=>{for(let $=0;$<v.length;$++){const B=_[$],L=v[$],ee=B.el&&(B.type===zt||!hs(B,L)||B.shapeFlag&70)?p(B.el):R;M(B,L,ee,null,N,V,D,G,!0)}},b=(_,v,R,N,V)=>{if(v!==R){if(v!==be)for(const D in v)!ms(D)&&!(D in R)&&i(_,D,v[D],null,V,N);for(const D in R){if(ms(D))continue;const G=R[D],$=v[D];G!==$&&D!=="value"&&i(_,D,$,G,V,N)}"value"in R&&i(_,"value",v.value,R.value,V)}},S=(_,v,R,N,V,D,G,$,B)=>{const L=v.el=_?_.el:l(""),ee=v.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ne}=v;ne&&($=$?$.concat(ne):ne),_==null?(r(L,R,N),r(ee,R,N),m(v.children||[],R,ee,V,D,G,$,B)):Q>0&&Q&64&&Z&&_.dynamicChildren?(A(_.dynamicChildren,Z,R,V,D,G,$),(v.key!=null||V&&v===V.subTree)&&dd(_,v,!0)):fe(_,v,R,ee,V,D,G,$,B)},E=(_,v,R,N,V,D,G,$,B)=>{v.slotScopeIds=$,_==null?v.shapeFlag&512?V.ctx.activate(v,R,N,G,B):ct(v,R,N,V,D,G,B):It(_,v,B)},ct=(_,v,R,N,V,D,G)=>{const $=_.component=W_(_,N,V);if(Xf(_)&&($.ctx.renderer=X),Q_($,!1,G),$.asyncDep){if(V&&V.registerDep($,xe,G),!_.el){const B=$.subTree=Fe(Ds);K(null,B,v,R)}}else xe($,_,v,R,V,D,G)},It=(_,v,R)=>{const N=v.component=_.component;if(L_(_,v,R))if(N.asyncDep&&!N.asyncResolved){pe(N,v,R);return}else N.next=v,N.update();else v.el=_.el,N.vnode=v},xe=(_,v,R,N,V,D,G)=>{const $=()=>{if(_.isMounted){let{next:Q,bu:Z,u:ne,parent:te,vnode:ae}=_;{const Xe=pd(_);if(Xe){Q&&(Q.el=ae.el,pe(_,Q,G)),Xe.asyncDep.then(()=>{_.isUnmounted||$()});return}}let ge=Q,Je;Wn(_,!1),Q?(Q.el=ae.el,pe(_,Q,G)):Q=ae,Z&&Ni(Z),(Je=Q.props&&Q.props.onVnodeBeforeUpdate)&&$t(Je,te,Q,ae),Wn(_,!0);const He=_u(_),At=_.subTree;_.subTree=He,M(At,He,p(At.el),k(At),_,V,D),Q.el=He.el,ge===null&&F_(_,He.el),ne&&yt(ne,V),(Je=Q.props&&Q.props.onVnodeUpdated)&&yt(()=>$t(Je,te,Q,ae),V)}else{let Q;const{el:Z,props:ne}=v,{bm:te,m:ae,parent:ge,root:Je,type:He}=_,At=vs(v);Wn(_,!1),te&&Ni(te),!At&&(Q=ne&&ne.onVnodeBeforeMount)&&$t(Q,ge,v),Wn(_,!0);{Je.ce&&Je.ce._injectChildStyle(He);const Xe=_.subTree=_u(_);M(null,Xe,R,N,_,V,D),v.el=Xe.el}if(ae&&yt(ae,V),!At&&(Q=ne&&ne.onVnodeMounted)){const Xe=v;yt(()=>$t(Q,ge,Xe),V)}(v.shapeFlag&256||ge&&vs(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&yt(_.a,V),_.isMounted=!0,v=R=N=null}};_.scope.on();const B=_.effect=new bf($);_.scope.off();const L=_.update=B.run.bind(B),ee=_.job=B.runIfDirty.bind(B);ee.i=_,ee.id=_.uid,B.scheduler=()=>Sl(ee),Wn(_,!0),L()},pe=(_,v,R)=>{v.component=_;const N=_.vnode.props;_.vnode=v,_.next=null,T_(_,v.props,N,R),b_(_,v.children,R),jn(),cu(_),$n()},fe=(_,v,R,N,V,D,G,$,B=!1)=>{const L=_&&_.children,ee=_?_.shapeFlag:0,Q=v.children,{patchFlag:Z,shapeFlag:ne}=v;if(Z>0){if(Z&128){Ct(L,Q,R,N,V,D,G,$,B);return}else if(Z&256){mt(L,Q,R,N,V,D,G,$,B);return}}ne&8?(ee&16&&dt(L,V,D),Q!==L&&d(R,Q)):ee&16?ne&16?Ct(L,Q,R,N,V,D,G,$,B):dt(L,V,D,!0):(ee&8&&d(R,""),ne&16&&m(Q,R,N,V,D,G,$,B))},mt=(_,v,R,N,V,D,G,$,B)=>{_=_||Ar,v=v||Ar;const L=_.length,ee=v.length,Q=Math.min(L,ee);let Z;for(Z=0;Z<Q;Z++){const ne=v[Z]=B?Sn(v[Z]):Kt(v[Z]);M(_[Z],ne,R,null,V,D,G,$,B)}L>ee?dt(_,V,D,!0,!1,Q):m(v,R,N,V,D,G,$,B,Q)},Ct=(_,v,R,N,V,D,G,$,B)=>{let L=0;const ee=v.length;let Q=_.length-1,Z=ee-1;for(;L<=Q&&L<=Z;){const ne=_[L],te=v[L]=B?Sn(v[L]):Kt(v[L]);if(hs(ne,te))M(ne,te,R,null,V,D,G,$,B);else break;L++}for(;L<=Q&&L<=Z;){const ne=_[Q],te=v[Z]=B?Sn(v[Z]):Kt(v[Z]);if(hs(ne,te))M(ne,te,R,null,V,D,G,$,B);else break;Q--,Z--}if(L>Q){if(L<=Z){const ne=Z+1,te=ne<ee?v[ne].el:N;for(;L<=Z;)M(null,v[L]=B?Sn(v[L]):Kt(v[L]),R,te,V,D,G,$,B),L++}}else if(L>Z)for(;L<=Q;)ke(_[L],V,D,!0),L++;else{const ne=L,te=L,ae=new Map;for(L=te;L<=Z;L++){const qe=v[L]=B?Sn(v[L]):Kt(v[L]);qe.key!=null&&ae.set(qe.key,L)}let ge,Je=0;const He=Z-te+1;let At=!1,Xe=0;const En=new Array(He);for(L=0;L<He;L++)En[L]=0;for(L=ne;L<=Q;L++){const qe=_[L];if(Je>=He){ke(qe,V,D,!0);continue}let bt;if(qe.key!=null)bt=ae.get(qe.key);else for(ge=te;ge<=Z;ge++)if(En[ge-te]===0&&hs(qe,v[ge])){bt=ge;break}bt===void 0?ke(qe,V,D,!0):(En[bt-te]=L+1,bt>=Xe?Xe=bt:At=!0,M(qe,v[bt],R,null,V,D,G,$,B),Je++)}const Xr=At?C_(En):Ar;for(ge=Xr.length-1,L=He-1;L>=0;L--){const qe=te+L,bt=v[qe],oi=qe+1<ee?v[qe+1].el:N;En[L]===0?M(null,bt,R,oi,V,D,G,$,B):At&&(ge<0||L!==Xr[ge]?wt(bt,R,oi,2):ge--)}}},wt=(_,v,R,N,V=null)=>{const{el:D,type:G,transition:$,children:B,shapeFlag:L}=_;if(L&6){wt(_.component.subTree,v,R,N);return}if(L&128){_.suspense.move(v,R,N);return}if(L&64){G.move(_,v,R,X);return}if(G===zt){r(D,v,R);for(let Q=0;Q<B.length;Q++)wt(B[Q],v,R,N);r(_.anchor,v,R);return}if(G===xi){q(_,v,R);return}if(N!==2&&L&1&&$)if(N===0)$.beforeEnter(D),r(D,v,R),yt(()=>$.enter(D),V);else{const{leave:Q,delayLeave:Z,afterLeave:ne}=$,te=()=>r(D,v,R),ae=()=>{Q(D,()=>{te(),ne&&ne()})};Z?Z(D,te,ae):ae()}else r(D,v,R)},ke=(_,v,R,N=!1,V=!1)=>{const{type:D,props:G,ref:$,children:B,dynamicChildren:L,shapeFlag:ee,patchFlag:Q,dirs:Z,cacheIndex:ne}=_;if(Q===-2&&(V=!1),$!=null&&Ji($,null,R,_,!0),ne!=null&&(v.renderCache[ne]=void 0),ee&256){v.ctx.deactivate(_);return}const te=ee&1&&Z,ae=!vs(_);let ge;if(ae&&(ge=G&&G.onVnodeBeforeUnmount)&&$t(ge,v,_),ee&6)jt(_.component,R,N);else{if(ee&128){_.suspense.unmount(R,N);return}te&&Gn(_,null,v,"beforeUnmount"),ee&64?_.type.remove(_,v,R,X,N):L&&!L.hasOnce&&(D!==zt||Q>0&&Q&64)?dt(L,v,R,!1,!0):(D===zt&&Q&384||!V&&ee&16)&&dt(B,v,R),N&&Ne(_)}(ae&&(ge=G&&G.onVnodeUnmounted)||te)&&yt(()=>{ge&&$t(ge,v,_),te&&Gn(_,null,v,"unmounted")},R)},Ne=_=>{const{type:v,el:R,anchor:N,transition:V}=_;if(v===zt){vn(R,N);return}if(v===xi){z(_);return}const D=()=>{s(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:G,delayLeave:$}=V,B=()=>G(R,D);$?$(_.el,D,B):B()}else D()},vn=(_,v)=>{let R;for(;_!==v;)R=y(_),s(_),_=R;s(v)},jt=(_,v,R)=>{const{bum:N,scope:V,job:D,subTree:G,um:$,m:B,a:L}=_;mu(B),mu(L),N&&Ni(N),V.stop(),D&&(D.flags|=8,ke(G,_,v,R)),$&&yt($,v),yt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},dt=(_,v,R,N=!1,V=!1,D=0)=>{for(let G=D;G<_.length;G++)ke(_[G],v,R,N,V)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=y(_.anchor||_.el),R=v&&v[Qm];return R?y(R):v};let J=!1;const W=(_,v,R)=>{_==null?v._vnode&&ke(v._vnode,null,null,!0):M(v._vnode||null,_,v,null,null,null,R),v._vnode=_,J||(J=!0,cu(),Kf(),J=!1)},X={p:M,um:ke,m:wt,r:Ne,mt:ct,mc:m,pc:fe,pbc:A,n:k,o:t};return{render:W,hydrate:void 0,createApp:v_(W)}}function _a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function P_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dd(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Sn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&dd(a,l)),l.type===Do&&(l.el=a.el)}}function C_(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<f?i=l+1:a=l;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function pd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pd(e)}function mu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const O_=Symbol.for("v-scx"),k_=()=>Wt(O_);function Vi(t,e,n){return gd(t,e,n)}function gd(t,e,n=be){const{immediate:r,deep:s,flush:i,once:a}=n,l=at({},n),c=e&&r||!e&&i!=="post";let f;if(xs){if(i==="sync"){const I=k_();f=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=Gt,I.resume=Gt,I.pause=Gt,I}}const d=it;l.call=(I,O,M)=>Xt(I,d,O,M);let p=!1;i==="post"?l.scheduler=I=>{yt(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,O)=>{O?I():Sl(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const y=zm(t,e,l);return xs&&(f?f.push(y):c&&y()),y}function N_(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?md(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const a=Qs(this),l=gd(s,i.bind(r),n);return a(),l}function md(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const D_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${Bn(e)}Modifiers`];function V_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),a=i&&D_(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Ue(d)?d.trim():d)),a.number&&(s=n.map(Ki)));let l,c=r[l=ha(e)]||r[l=ha(St(e))];!c&&i&&(c=r[l=ha(Bn(e))]),c&&Xt(c,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Xt(f,t,6,s)}}function _d(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!oe(t)){const c=f=>{const d=_d(f,e,!0);d&&(l=!0,at(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&r.set(t,null),null):(re(i)?i.forEach(c=>a[c]=null):at(a,i),Se(t)&&r.set(t,a),a)}function No(t,e){return!t||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Bn(e))||Ie(t,e))}function _u(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:p,data:y,setupState:I,ctx:O,inheritAttrs:M}=t,F=Qi(t);let K,j;try{if(n.shapeFlag&4){const z=s||r,ce=z;K=Kt(f.call(ce,z,d,p,I,y,O)),j=l}else{const z=e;K=Kt(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),j=e.props?l:x_(l)}}catch(z){Is.length=0,Oo(z,t,1),K=Fe(Ds)}let q=K;if(j&&M!==!1){const z=Object.keys(j),{shapeFlag:ce}=q;z.length&&ce&7&&(i&&z.some(pl)&&(j=M_(j,i)),q=Mr(q,j,!1,!0))}return n.dirs&&(q=Mr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&Pl(q,n.transition),K=q,Qi(F),K}const x_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Io(n))&&((e||(e={}))[n]=t[n]);return e},M_=(t,e)=>{const n={};for(const r in t)(!pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function L_(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?yu(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!No(f,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?yu(r,a,f):!0:!!a;return!1}function yu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!No(n,i))return!0}return!1}function F_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const yd=t=>t.__isSuspense;function U_(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Wm(t)}const zt=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),Ds=Symbol.for("v-cmt"),xi=Symbol.for("v-stc"),Is=[];let Tt=null;function xt(t=!1){Is.push(Tt=t?null:[])}function B_(){Is.pop(),Tt=Is[Is.length-1]||null}let Vs=1;function vu(t,e=!1){Vs+=t,t<0&&Tt&&e&&(Tt.hasOnce=!0)}function j_(t){return t.dynamicChildren=Vs>0?Tt||Ar:null,B_(),Vs>0&&Tt&&Tt.push(t),t}function Mt(t,e,n,r,s,i){return j_(ve(t,e,n,r,s,i,!0))}function Yi(t){return t?t.__v_isVNode===!0:!1}function hs(t,e){return t.type===e.type&&t.key===e.key}const vd=({key:t})=>t??null,Mi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ot(t)||oe(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function ve(t,e=null,n=null,r=0,s=null,i=t===zt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vd(e),ref:e&&Mi(e),scopeId:Wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Et};return l?(Ol(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),Vs>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const Fe=$_;function $_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===c_)&&(t=Ds),Yi(t)){const l=Mr(t,e,!0);return n&&Ol(l,n),Vs>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(t)]=l:Tt.push(l)),l.patchFlag=-2,l}if(ey(t)&&(t=t.__vccOpts),e){e=H_(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=yl(l)),Se(c)&&(bl(c)&&!re(c)&&(c=at({},c)),e.style=_l(c))}const a=Ue(t)?1:yd(t)?128:Jm(t)?64:Se(t)?4:oe(t)?2:0;return ve(t,e,n,r,s,a,i,!0)}function H_(t){return t?bl(t)||od(t)?at({},t):t:null}function Mr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,f=e?z_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&vd(f),ref:e&&e.ref?n&&i?re(i)?i.concat(Mi(e)):[i,Mi(e)]:Mi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Pl(d,c.clone(d)),d}function tr(t=" ",e=0){return Fe(Do,null,t,e)}function q_(t,e){const n=Fe(xi,null,t);return n.staticCount=e,n}function Kt(t){return t==null||typeof t=="boolean"?Fe(Ds):re(t)?Fe(zt,null,t.slice()):Yi(t)?Sn(t):Fe(Do,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function Ol(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ol(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!od(e)?e._ctx=Et:s===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[tr(e)]):n=8);t.children=e,t.shapeFlag|=n}function z_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yl([e.class,r.class]));else if(s==="style")e.style=_l([e.style,r.style]);else if(Io(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){Xt(t,e,7,[n,r])}const K_=rd();let G_=0;function W_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||K_,i={uid:G_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ym(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ld(r,s),emitsOptions:_d(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=V_.bind(null,i),t.ce&&t.ce(i),i}let it=null,Zi,$a;{const t=Ro(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Zi=e("__VUE_INSTANCE_SETTERS__",n=>it=n),$a=e("__VUE_SSR_SETTERS__",n=>xs=n)}const Qs=t=>{const e=it;return Zi(t),t.scope.on(),()=>{t.scope.off(),Zi(e)}},Eu=()=>{it&&it.scope.off(),Zi(null)};function Ed(t){return t.vnode.shapeFlag&4}let xs=!1;function Q_(t,e=!1,n=!1){e&&$a(e);const{props:r,children:s}=t.vnode,i=Ed(t);E_(t,r,i,e),A_(t,s,n);const a=i?J_(t,e):void 0;return e&&$a(!1),a}function J_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,f_);const{setup:r}=n;if(r){jn();const s=t.setupContext=r.length>1?Y_(t):null,i=Qs(t),a=Ws(r,t,0,[t.props,s]),l=_f(a);if($n(),i(),(l||t.sp)&&!vs(t)&&Jf(t),l){if(a.then(Eu,Eu),e)return a.then(c=>{Tu(t,c)}).catch(c=>{Oo(c,t,0)});t.asyncDep=a}else Tu(t,a)}else Td(t)}function Tu(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Hf(e)),Td(t)}function Td(t,e,n){const r=t.type;t.render||(t.render=r.render||Gt);{const s=Qs(t);jn();try{d_(t)}finally{$n(),s()}}}const X_={get(t,e){return nt(t,"get",""),t[e]}};function Y_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,X_),slots:t.slots,emit:t.emit,expose:e}}function Vo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hf(Fm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ts)return Ts[n](t)},has(e,n){return n in e||n in Ts}})):t.proxy}function Z_(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function ey(t){return oe(t)&&"__vccOpts"in t}const Nt=(t,e)=>Hm(t,e,xs);function Id(t,e,n){const r=arguments.length;return r===2?Se(e)&&!re(e)?Yi(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yi(n)&&(n=[n]),Fe(t,e,n))}const ty="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ha;const Iu=typeof window<"u"&&window.trustedTypes;if(Iu)try{Ha=Iu.createPolicy("vue",{createHTML:t=>t})}catch{}const wd=Ha?t=>Ha.createHTML(t):t=>t,ny="http://www.w3.org/2000/svg",ry="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,wu=on&&on.createElement("template"),sy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?on.createElementNS(ny,t):e==="mathml"?on.createElementNS(ry,t):n?on.createElement(t,{is:n}):on.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{wu.innerHTML=wd(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=wu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},iy=Symbol("_vtc");function oy(t,e,n){const r=t[iy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Au=Symbol("_vod"),ay=Symbol("_vsh"),ly=Symbol(""),cy=/(^|;)\s*display\s*:/;function uy(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Li(r,l,"")}else for(const a in e)n[a]==null&&Li(r,a,"");for(const a in n)a==="display"&&(i=!0),Li(r,a,n[a])}else if(s){if(e!==n){const a=r[ly];a&&(n+=";"+a),r.cssText=n,i=cy.test(n)}}else e&&t.removeAttribute("style");Au in t&&(t[Au]=i?r.display:"",t[ay]&&(r.display="none"))}const bu=/\s*!important$/;function Li(t,e,n){if(re(n))n.forEach(r=>Li(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hy(t,e);bu.test(n)?t.setProperty(Bn(r),n.replace(bu,""),"important"):t[r]=n}}const Ru=["Webkit","Moz","ms"],ya={};function hy(t,e){const n=ya[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return ya[e]=r;r=bo(r);for(let s=0;s<Ru.length;s++){const i=Ru[s]+r;if(i in t)return ya[e]=i}return e}const Su="http://www.w3.org/1999/xlink";function Pu(t,e,n,r,s,i=gm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Su,e.slice(6,e.length)):t.setAttributeNS(Su,e,n):n==null||i&&!Tf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Jt(n)?String(n):n)}function Cu(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wd(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Xn(t,e,n,r){t.addEventListener(e,n,r)}function fy(t,e,n,r){t.removeEventListener(e,n,r)}const Ou=Symbol("_vei");function dy(t,e,n,r,s=null){const i=t[Ou]||(t[Ou]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=py(e);if(r){const f=i[e]=_y(r,s);Xn(t,l,f,c)}else a&&(fy(t,l,a,c),i[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function py(t){let e;if(ku.test(t)){e={};let r;for(;r=t.match(ku);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bn(t.slice(2)),e]}let va=0;const gy=Promise.resolve(),my=()=>va||(gy.then(()=>va=0),va=Date.now());function _y(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(yy(r,n.value),e,5,[r])};return n.value=t,n.attached=my(),n}function yy(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?oy(t,r,a):e==="style"?uy(t,n,r):Io(e)?pl(e)||dy(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ey(t,e,r,a))?(Cu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pu(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?Cu(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pu(t,e,r,a))};function Ey(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nu(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nu(e)&&Ue(n)?!1:e in t}const eo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Ni(e,n):e};function Ty(t){t.target.composing=!0}function Du(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kr=Symbol("_assign"),Vu={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[kr]=eo(s);const i=r||s.props&&s.props.type==="number";Xn(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ki(l)),t[kr](l)}),n&&Xn(t,"change",()=>{t.value=t.value.trim()}),e||(Xn(t,"compositionstart",Ty),Xn(t,"compositionend",Du),Xn(t,"change",Du))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[kr]=eo(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ki(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},xu={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=wo(e);Xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Ki(to(a)):to(a));t[kr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Rl(()=>{t._assigning=!1})}),t[kr]=eo(r)},mounted(t,{value:e}){Mu(t,e)},beforeUpdate(t,e,n){t[kr]=eo(n)},updated(t,{value:e}){t._assigning||Mu(t,e)}};function Mu(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!wo(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],l=to(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(f=>String(f)===String(l)):a.selected=_m(e,l)>-1}else a.selected=e.has(l);else if(So(to(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function to(t){return"_value"in t?t._value:t.value}const Iy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wy=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Bn(s.key);if(e.some(a=>a===i||Iy[a]===i))return t(s)})},Ay=at({patchProp:vy},sy);let Lu;function by(){return Lu||(Lu=R_(Ay))}const Ry=(...t)=>{const e=by().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Py(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Sy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Sy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Py(t){return Ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Tr=typeof document<"u";function Ad(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ad(t.default)}const Ee=Object.assign;function Ea(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const ws=()=>{},Bt=Array.isArray,bd=/#/g,Oy=/&/g,ky=/\//g,Ny=/=/g,Dy=/\?/g,Rd=/\+/g,Vy=/%5B/g,xy=/%5D/g,Sd=/%5E/g,My=/%60/g,Pd=/%7B/g,Ly=/%7C/g,Cd=/%7D/g,Fy=/%20/g;function kl(t){return encodeURI(""+t).replace(Ly,"|").replace(Vy,"[").replace(xy,"]")}function Uy(t){return kl(t).replace(Pd,"{").replace(Cd,"}").replace(Sd,"^")}function qa(t){return kl(t).replace(Rd,"%2B").replace(Fy,"+").replace(bd,"%23").replace(Oy,"%26").replace(My,"`").replace(Pd,"{").replace(Cd,"}").replace(Sd,"^")}function By(t){return qa(t).replace(Ny,"%3D")}function jy(t){return kl(t).replace(bd,"%23").replace(Dy,"%3F")}function $y(t){return t==null?"":jy(t).replace(ky,"%2F")}function Ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Hy=/\/$/,qy=t=>t.replace(Hy,"");function Ta(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Wy(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ms(a)}}function zy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ky(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Lr(e.matched[r],n.matched[s])&&Od(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Od(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gy(t[n],e[n]))return!1;return!0}function Gy(t,e){return Bt(t)?Uu(t,e):Bt(e)?Uu(e,t):t===e}function Uu(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Wy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ls;(function(t){t.pop="pop",t.push="push"})(Ls||(Ls={}));var As;(function(t){t.back="back",t.forward="forward",t.unknown=""})(As||(As={}));function Qy(t){if(!t)if(Tr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qy(t)}const Jy=/^[^#]+#/;function Xy(t,e){return t.replace(Jy,"#")+e}function Yy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xo=()=>({left:window.scrollX,top:window.scrollY});function Zy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bu(t,e){return(history.state?history.state.position-e:-1)+t}const za=new Map;function ev(t,e){za.set(t,e)}function tv(t){const e=za.get(t);return za.delete(t),e}let nv=()=>location.protocol+"//"+location.host;function kd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Fu(c,"")}return Fu(n,t)+r+s}function rv(t,e,n,r){let s=[],i=[],a=null;const l=({state:y})=>{const I=kd(t,location),O=n.value,M=e.value;let F=0;if(y){if(n.value=I,e.value=y,a&&a===O){a=null;return}F=M?y.position-M.position:0}else r(I);s.forEach(K=>{K(n.value,O,{delta:F,type:Ls.pop,direction:F?F>0?As.forward:As.back:As.unknown})})};function c(){a=n.value}function f(y){s.push(y);const I=()=>{const O=s.indexOf(y);O>-1&&s.splice(O,1)};return i.push(I),I}function d(){const{history:y}=window;y.state&&y.replaceState(Ee({},y.state,{scroll:xo()}),"")}function p(){for(const y of i)y();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function ju(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xo():null}}function sv(t){const{history:e,location:n}=window,r={value:kd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,f,d){const p=t.indexOf("#"),y=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:nv()+t+c;try{e[d?"replaceState":"pushState"](f,"",y),s.value=f}catch(I){console.error(I),n[d?"replace":"assign"](y)}}function a(c,f){const d=Ee({},e.state,ju(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,f){const d=Ee({},s.value,e.state,{forward:c,scroll:xo()});i(d.current,d,!0);const p=Ee({},ju(r.value,c,null),{position:d.position+1},f);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function iv(t){t=Qy(t);const e=sv(t),n=rv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ee({location:"",base:t,go:r,createHref:Xy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ov(t){return typeof t=="string"||t&&typeof t=="object"}function Nd(t){return typeof t=="string"||typeof t=="symbol"}const Dd=Symbol("");var $u;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($u||($u={}));function Fr(t,e){return Ee(new Error,{type:t,[Dd]:!0},e)}function sn(t,e){return t instanceof Error&&Dd in t&&(e==null||!!(t.type&e))}const Hu="[^/]+?",av={sensitive:!1,strict:!1,start:!0,end:!0},lv=/[.+*?^${}()[\]/\\]/g;function cv(t,e){const n=Ee({},av,e),r=[];let s=n.start?"^":"";const i=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const y=f[p];let I=40+(n.sensitive?.25:0);if(y.type===0)p||(s+="/"),s+=y.value.replace(lv,"\\$&"),I+=40;else if(y.type===1){const{value:O,repeatable:M,optional:F,regexp:K}=y;i.push({name:O,repeatable:M,optional:F});const j=K||Hu;if(j!==Hu){I+=10;try{new RegExp(`(${j})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${O}" (${j}): `+z.message)}}let q=M?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=F&&f.length<2?`(?:/${q})`:"/"+q),F&&(q+="?"),s+=q,I+=20,F&&(I+=-8),M&&(I+=-20),j===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(f){const d=f.match(a),p={};if(!d)return null;for(let y=1;y<d.length;y++){const I=d[y]||"",O=i[y-1];p[O.name]=I&&O.repeatable?I.split("/"):I}return p}function c(f){let d="",p=!1;for(const y of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of y)if(I.type===0)d+=I.value;else if(I.type===1){const{value:O,repeatable:M,optional:F}=I,K=O in f?f[O]:"";if(Bt(K)&&!M)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const j=Bt(K)?K.join("/"):K;if(!j)if(F)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function uv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Vd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qu(r))return 1;if(qu(s))return-1}return s.length-r.length}function qu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hv={type:0,value:""},fv=/[a-zA-Z0-9_]/;function dv(t){if(!t)return[[]];if(t==="/")return[[hv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${f}": ${I}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,f="",d="";function p(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),a()):c===":"?(p(),n=1):y();break;case 4:y(),n=r;break;case 1:c==="("?n=2:fv.test(c)?y():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),a(),s}function pv(t,e,n){const r=cv(dv(t.path),n),s=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gv(t,e){const n=[],r=new Map;e=Wu({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,y,I){const O=!I,M=Ku(p);M.aliasOf=I&&I.record;const F=Wu(e,p),K=[M];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of z)K.push(Ku(Ee({},M,{components:I?I.record.components:M.components,path:ce,aliasOf:I?I.record:M})))}let j,q;for(const z of K){const{path:ce}=z;if(y&&ce[0]!=="/"){const he=y.record.path,w=he[he.length-1]==="/"?"":"/";z.path=y.record.path+(ce&&w+ce)}if(j=pv(z,y,F),I?I.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),O&&p.name&&!Gu(j)&&a(p.name)),xd(j)&&c(j),M.children){const he=M.children;for(let w=0;w<he.length;w++)i(he[w],j,I&&I.children[w])}I=I||j}return q?()=>{a(q)}:ws}function a(p){if(Nd(p)){const y=r.get(p);y&&(r.delete(p),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(p);y>-1&&(n.splice(y,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const y=yv(p,n);n.splice(y,0,p),p.record.name&&!Gu(p)&&r.set(p.record.name,p)}function f(p,y){let I,O={},M,F;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw Fr(1,{location:p});F=I.record.name,O=Ee(zu(y.params,I.keys.filter(q=>!q.optional).concat(I.parent?I.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&zu(p.params,I.keys.map(q=>q.name))),M=I.stringify(O)}else if(p.path!=null)M=p.path,I=n.find(q=>q.re.test(M)),I&&(O=I.parse(M),F=I.record.name);else{if(I=y.name?r.get(y.name):n.find(q=>q.re.test(y.path)),!I)throw Fr(1,{location:p,currentLocation:y});F=I.record.name,O=Ee({},y.params,p.params),M=I.stringify(O)}const K=[];let j=I;for(;j;)K.unshift(j.record),j=j.parent;return{name:F,path:M,params:O,matched:K,meta:_v(K)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function zu(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ku(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:mv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function mv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _v(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Wu(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Vd(t,e[i])<0?r=i:n=i+1}const s=vv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vv(t){let e=t;for(;e=e.parent;)if(xd(e)&&Vd(t,e)===0)return e}function xd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ev(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rd," "),a=i.indexOf("="),l=Ms(a<0?i:i.slice(0,a)),c=a<0?null:Ms(i.slice(a+1));if(l in e){let f=e[l];Bt(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function Qu(t){let e="";for(let n in t){const r=t[n];if(n=By(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&qa(i)):[r&&qa(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Tv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Iv=Symbol(""),Ju=Symbol(""),Mo=Symbol(""),Md=Symbol(""),Ka=Symbol("");function fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const f=y=>{y===!1?c(Fr(4,{from:n,to:e})):y instanceof Error?c(y):ov(y)?c(Fr(2,{from:e,to:y})):(a&&r.enterCallbacks[s]===a&&typeof y=="function"&&a.push(y),l())},d=i(()=>t.call(r&&r.instances[s],e,n,f));let p=Promise.resolve(d);t.length<3&&(p=p.then(f)),p.catch(y=>c(y))})}function Ia(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Ad(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Pn(d,n,r,a,l,s))}else{let f=c();i.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Cy(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const I=(p.__vccOpts||p)[e];return I&&Pn(I,n,r,a,l,s)()}))}}return i}function Xu(t){const e=Wt(Mo),n=Wt(Md),r=Nt(()=>{const c=Sr(t.to);return e.resolve(c)}),s=Nt(()=>{const{matched:c}=r.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const y=p.findIndex(Lr.bind(null,d));if(y>-1)return y;const I=Yu(c[f-2]);return f>1&&Yu(d)===I&&p[p.length-1].path!==I?p.findIndex(Lr.bind(null,c[f-2])):y}),i=Nt(()=>s.value>-1&&Sv(n.params,r.value.params)),a=Nt(()=>s.value>-1&&s.value===n.matched.length-1&&Od(n.params,r.value.params));function l(c={}){if(Rv(c)){const f=e[Sr(t.replace)?"replace":"push"](Sr(t.to)).catch(ws);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function wv(t){return t.length===1?t[0]:t}const Av=Qf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xu,setup(t,{slots:e}){const n=Co(Xu(t)),{options:r}=Wt(Mo),s=Nt(()=>({[Zu(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zu(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wv(e.default(n));return t.custom?i:Id("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bv=Av;function Rv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Yu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zu=(t,e,n)=>t??e??n,Pv=Qf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(Ka),s=Nt(()=>t.route||r.value),i=Wt(Ju,0),a=Nt(()=>{let f=Sr(i);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),l=Nt(()=>s.value.matched[a.value]);Di(Ju,Nt(()=>a.value+1)),Di(Iv,l),Di(Ka,s);const c=jf();return Vi(()=>[c.value,l.value,t.name],([f,d,p],[y,I,O])=>{d&&(d.instances[p]=f,I&&I!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),f&&d&&(!I||!Lr(d,I)||!y)&&(d.enterCallbacks[p]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=s.value,d=t.name,p=l.value,y=p&&p.components[d];if(!y)return eh(n.default,{Component:y,route:f});const I=p.props[d],O=I?I===!0?f.params:typeof I=="function"?I(f):I:null,F=Id(y,Ee({},O,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return eh(n.default,{Component:F,route:f})||F}}});function eh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Cv=Pv;function Ov(t){const e=gv(t.routes,t),n=t.parseQuery||Ev,r=t.stringifyQuery||Qu,s=t.history,i=fs(),a=fs(),l=fs(),c=Um(An);let f=An;Tr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ea.bind(null,k=>""+k),p=Ea.bind(null,$y),y=Ea.bind(null,Ms);function I(k,J){let W,X;return Nd(k)?(W=e.getRecordMatcher(k),X=J):X=k,e.addRoute(X,W)}function O(k){const J=e.getRecordMatcher(k);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(k=>k.record)}function F(k){return!!e.getRecordMatcher(k)}function K(k,J){if(J=Ee({},J||c.value),typeof k=="string"){const R=Ta(n,k,J.path),N=e.resolve({path:R.path},J),V=s.createHref(R.fullPath);return Ee(R,N,{params:y(N.params),hash:Ms(R.hash),redirectedFrom:void 0,href:V})}let W;if(k.path!=null)W=Ee({},k,{path:Ta(n,k.path,J.path).path});else{const R=Ee({},k.params);for(const N in R)R[N]==null&&delete R[N];W=Ee({},k,{params:p(R)}),J.params=p(J.params)}const X=e.resolve(W,J),_e=k.hash||"";X.params=d(y(X.params));const _=zy(r,Ee({},k,{hash:Uy(_e),path:X.path})),v=s.createHref(_);return Ee({fullPath:_,hash:_e,query:r===Qu?Tv(k.query):k.query||{}},X,{redirectedFrom:void 0,href:v})}function j(k){return typeof k=="string"?Ta(n,k,c.value.path):Ee({},k)}function q(k,J){if(f!==k)return Fr(8,{from:J,to:k})}function z(k){return w(k)}function ce(k){return z(Ee(j(k),{replace:!0}))}function he(k){const J=k.matched[k.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let X=typeof W=="function"?W(k):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=j(X):{path:X},X.params={}),Ee({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function w(k,J){const W=f=K(k),X=c.value,_e=k.state,_=k.force,v=k.replace===!0,R=he(W);if(R)return w(Ee(j(R),{state:typeof R=="object"?Ee({},_e,R.state):_e,force:_,replace:v}),J||W);const N=W;N.redirectedFrom=J;let V;return!_&&Ky(r,X,W)&&(V=Fr(16,{to:N,from:X}),wt(X,X,!0,!1)),(V?Promise.resolve(V):A(N,X)).catch(D=>sn(D)?sn(D,2)?D:Ct(D):fe(D,N,X)).then(D=>{if(D){if(sn(D,2))return w(Ee({replace:v},j(D.to),{state:typeof D.to=="object"?Ee({},_e,D.to.state):_e,force:_}),J||N)}else D=S(N,X,!0,v,_e);return b(N,X,D),D})}function m(k,J){const W=q(k,J);return W?Promise.reject(W):Promise.resolve()}function T(k){const J=vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(k):k()}function A(k,J){let W;const[X,_e,_]=kv(k,J);W=Ia(X.reverse(),"beforeRouteLeave",k,J);for(const R of X)R.leaveGuards.forEach(N=>{W.push(Pn(N,k,J))});const v=m.bind(null,k,J);return W.push(v),dt(W).then(()=>{W=[];for(const R of i.list())W.push(Pn(R,k,J));return W.push(v),dt(W)}).then(()=>{W=Ia(_e,"beforeRouteUpdate",k,J);for(const R of _e)R.updateGuards.forEach(N=>{W.push(Pn(N,k,J))});return W.push(v),dt(W)}).then(()=>{W=[];for(const R of _)if(R.beforeEnter)if(Bt(R.beforeEnter))for(const N of R.beforeEnter)W.push(Pn(N,k,J));else W.push(Pn(R.beforeEnter,k,J));return W.push(v),dt(W)}).then(()=>(k.matched.forEach(R=>R.enterCallbacks={}),W=Ia(_,"beforeRouteEnter",k,J,T),W.push(v),dt(W))).then(()=>{W=[];for(const R of a.list())W.push(Pn(R,k,J));return W.push(v),dt(W)}).catch(R=>sn(R,8)?R:Promise.reject(R))}function b(k,J,W){l.list().forEach(X=>T(()=>X(k,J,W)))}function S(k,J,W,X,_e){const _=q(k,J);if(_)return _;const v=J===An,R=Tr?history.state:{};W&&(X||v?s.replace(k.fullPath,Ee({scroll:v&&R&&R.scroll},_e)):s.push(k.fullPath,_e)),c.value=k,wt(k,J,W,v),Ct()}let E;function ct(){E||(E=s.listen((k,J,W)=>{if(!jt.listening)return;const X=K(k),_e=he(X);if(_e){w(Ee(_e,{replace:!0,force:!0}),X).catch(ws);return}f=X;const _=c.value;Tr&&ev(Bu(_.fullPath,W.delta),xo()),A(X,_).catch(v=>sn(v,12)?v:sn(v,2)?(w(Ee(j(v.to),{force:!0}),X).then(R=>{sn(R,20)&&!W.delta&&W.type===Ls.pop&&s.go(-1,!1)}).catch(ws),Promise.reject()):(W.delta&&s.go(-W.delta,!1),fe(v,X,_))).then(v=>{v=v||S(X,_,!1),v&&(W.delta&&!sn(v,8)?s.go(-W.delta,!1):W.type===Ls.pop&&sn(v,20)&&s.go(-1,!1)),b(X,_,v)}).catch(ws)}))}let It=fs(),xe=fs(),pe;function fe(k,J,W){Ct(k);const X=xe.list();return X.length?X.forEach(_e=>_e(k,J,W)):console.error(k),Promise.reject(k)}function mt(){return pe&&c.value!==An?Promise.resolve():new Promise((k,J)=>{It.add([k,J])})}function Ct(k){return pe||(pe=!k,ct(),It.list().forEach(([J,W])=>k?W(k):J()),It.reset()),k}function wt(k,J,W,X){const{scrollBehavior:_e}=t;if(!Tr||!_e)return Promise.resolve();const _=!W&&tv(Bu(k.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return Rl().then(()=>_e(k,J,_)).then(v=>v&&Zy(v)).catch(v=>fe(v,k,J))}const ke=k=>s.go(k);let Ne;const vn=new Set,jt={currentRoute:c,listening:!0,addRoute:I,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:M,resolve:K,options:t,push:z,replace:ce,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:xe.add,isReady:mt,install(k){const J=this;k.component("RouterLink",bv),k.component("RouterView",Cv),k.config.globalProperties.$router=J,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Sr(c)}),Tr&&!Ne&&c.value===An&&(Ne=!0,z(s.location).catch(_e=>{}));const W={};for(const _e in An)Object.defineProperty(W,_e,{get:()=>c.value[_e],enumerable:!0});k.provide(Mo,J),k.provide(Md,Uf(W)),k.provide(Ka,c);const X=k.unmount;vn.add(k),k.unmount=function(){vn.delete(k),vn.size<1&&(f=An,E&&E(),E=null,c.value=An,Ne=!1,pe=!1),X()}}};function dt(k){return k.reduce((J,W)=>J.then(()=>T(W)),Promise.resolve())}return jt}function kv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(f=>Lr(f,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(f=>Lr(f,c))||s.push(c))}return[n,r,s]}function Ld(){return Wt(Mo)}const Nv=()=>{};var th={};/**
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
 */const Fd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|f>>6,I=f&63;c||(I=64,a||(y=64)),r.push(n[d],n[p],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||f==null||p==null)throw new Vv;const y=i<<2|l>>4;if(r.push(y),f!==64){const I=l<<4&240|f>>2;if(r.push(I),p!==64){const O=f<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xv=function(t){const e=Fd(t);return Ud.encodeByteArray(e,!0)},no=function(t){return xv(t).replace(/\./g,"")},Bd=function(t){try{return Ud.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lv=()=>Mv().__FIREBASE_DEFAULTS__,Fv=()=>{if(typeof process>"u"||typeof th>"u")return;const t=th.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bd(t[1]);return e&&JSON.parse(e)},Lo=()=>{try{return Nv()||Lv()||Fv()||Uv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jd=t=>{var e,n;return(n=(e=Lo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bv=t=>{const e=jd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$d=()=>{var t;return(t=Lo())===null||t===void 0?void 0:t.config},Hd=t=>{var e;return(e=Lo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[no(JSON.stringify(n)),no(JSON.stringify(a)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function qv(){var t;const e=(t=Lo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wv(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qv(){return!qv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jv(){try{return typeof indexedDB=="object"}catch{return!1}}function Xv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yv="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yv,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Zv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yn(s,l,r)}}function Zv(t,e){return t.replace(eE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eE=/\{\$([^}]+)}/g;function tE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(nh(i)&&nh(a)){if(!or(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nh(t){return t!==null&&typeof t=="object"}/**
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
 */function Xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nE(t,e){const n=new rE(t,e);return n.subscribe.bind(n)}class rE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wa),s.error===void 0&&(s.error=wa),s.complete===void 0&&(s.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class iE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aE(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(t){return t===Jn?void 0:t}function aE(t){return t.instantiationMode==="EAGER"}/**
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
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const cE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},uE=de.INFO,hE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},fE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=uE,this._logHandler=fE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const dE=(t,e)=>e.some(n=>t instanceof n);let rh,sh;function pE(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return sh||(sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qd=new WeakMap,Ga=new WeakMap,zd=new WeakMap,Aa=new WeakMap,Dl=new WeakMap;function mE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Dn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&qd.set(n,t)}).catch(()=>{}),Dl.set(e,t),e}function _E(t){if(Ga.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Ga.set(t,e)}let Wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yE(t){Wa=t(Wa)}function vE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ba(this),e,...n);return zd.set(r,e.sort?e.sort():[e]),Dn(r)}:gE().includes(t)?function(...e){return t.apply(ba(this),e),Dn(qd.get(this))}:function(...e){return Dn(t.apply(ba(this),e))}}function EE(t){return typeof t=="function"?vE(t):(t instanceof IDBTransaction&&_E(t),dE(t,pE())?new Proxy(t,Wa):t)}function Dn(t){if(t instanceof IDBRequest)return mE(t);if(Aa.has(t))return Aa.get(t);const e=EE(t);return e!==t&&(Aa.set(t,e),Dl.set(e,t)),e}const ba=t=>Dl.get(t);function TE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Dn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Dn(a.result),c.oldVersion,c.newVersion,Dn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const IE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],Ra=new Map;function ih(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return Ra.set(e,i),i}yE(t=>({...t,get:(e,n,r)=>ih(e,n)||t.get(e,n,r),has:(e,n)=>!!ih(e,n)||t.has(e,n)}));/**
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
 */class AE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",oh="0.11.2";/**
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
 */const gn=new Nl("@firebase/app"),RE="@firebase/app-compat",SE="@firebase/analytics-compat",PE="@firebase/analytics",CE="@firebase/app-check-compat",OE="@firebase/app-check",kE="@firebase/auth",NE="@firebase/auth-compat",DE="@firebase/database",VE="@firebase/data-connect",xE="@firebase/database-compat",ME="@firebase/functions",LE="@firebase/functions-compat",FE="@firebase/installations",UE="@firebase/installations-compat",BE="@firebase/messaging",jE="@firebase/messaging-compat",$E="@firebase/performance",HE="@firebase/performance-compat",qE="@firebase/remote-config",zE="@firebase/remote-config-compat",KE="@firebase/storage",GE="@firebase/storage-compat",WE="@firebase/firestore",QE="@firebase/vertexai",JE="@firebase/firestore-compat",XE="firebase",YE="11.4.0";/**
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
 */const Ja="[DEFAULT]",ZE={[Qa]:"fire-core",[RE]:"fire-core-compat",[PE]:"fire-analytics",[SE]:"fire-analytics-compat",[OE]:"fire-app-check",[CE]:"fire-app-check-compat",[kE]:"fire-auth",[NE]:"fire-auth-compat",[DE]:"fire-rtdb",[VE]:"fire-data-connect",[xE]:"fire-rtdb-compat",[ME]:"fire-fn",[LE]:"fire-fn-compat",[FE]:"fire-iid",[UE]:"fire-iid-compat",[BE]:"fire-fcm",[jE]:"fire-fcm-compat",[$E]:"fire-perf",[HE]:"fire-perf-compat",[qE]:"fire-rc",[zE]:"fire-rc-compat",[KE]:"fire-gcs",[GE]:"fire-gcs-compat",[WE]:"fire-fst",[JE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[XE]:"fire-js-all"};/**
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
 */const Fs=new Map,eT=new Map,Xa=new Map;function ah(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(Xa.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of Fs.values())ah(n,t);for(const n of eT.values())ah(n,t);return!0}function Vl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const tT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Js("app","Firebase",tT);/**
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
 */class nT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=YE;function Kd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(n||(n=$d()),!n)throw Vn.create("no-options");const i=Fs.get(s);if(i){if(or(n,i.options)&&or(r,i.config))return i;throw Vn.create("duplicate-app",{appName:s})}const a=new lE(s);for(const c of Xa.values())a.addComponent(c);const l=new nT(n,r,a);return Fs.set(s,l),l}function Gd(t=Ja){const e=Fs.get(t);if(!e&&t===Ja&&$d())return Kd();if(!e)throw Vn.create("no-app",{appName:t});return e}function lh(){return Array.from(Fs.values())}function xn(t,e,n){var r;let s=(r=ZE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(l.join(" "));return}Ur(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rT="firebase-heartbeat-database",sT=1,Us="firebase-heartbeat-store";let Sa=null;function Wd(){return Sa||(Sa=TE(rT,sT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Us)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function iT(t){try{const n=(await Wd()).transaction(Us),r=await n.objectStore(Us).get(Qd(t));return await n.done,r}catch(e){if(e instanceof yn)gn.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function ch(t,e){try{const r=(await Wd()).transaction(Us,"readwrite");await r.objectStore(Us).put(e,Qd(t)),await r.done}catch(n){if(n instanceof yn)gn.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(r.message)}}}function Qd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oT=1024,aT=30;class lT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aT){const a=hT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uh(),{heartbeatsToSend:r,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gn.warn(n),""}}}function uh(){return new Date().toISOString().substring(0,10)}function cT(t,e=oT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),hh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ch(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hh(t){return no(JSON.stringify({version:2,heartbeats:t})).length}function hT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function fT(t){Ur(new ar("platform-logger",e=>new AE(e),"PRIVATE")),Ur(new ar("heartbeat",e=>new lT(e),"PRIVATE")),xn(Qa,oh,t),xn(Qa,oh,"esm2017"),xn("fire-js","")}fT("");var dT="firebase",pT="11.4.0";/**
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
 */xn(dT,pT,"app");function xl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Jd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gT=Jd,Xd=new Js("auth","Firebase",Jd());/**
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
 */const ro=new Nl("@firebase/auth");function mT(t,...e){ro.logLevel<=de.WARN&&ro.warn(`Auth (${Kr}): ${t}`,...e)}function Fi(t,...e){ro.logLevel<=de.ERROR&&ro.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Ll(t,...e)}function Ut(t,...e){return Ll(t,...e)}function Ml(t,e,n){const r=Object.assign(Object.assign({},gT()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return Ml(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _T(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),Ml(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ll(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xd.create(t,...e)}function se(t,e,...n){if(!t)throw Ll(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fi(e),new Error(e)}function mn(t,e){t||un(e)}/**
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
 */function Ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yT(){return fh()==="http:"||fh()==="https:"}function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yT()||Kv()||"connection"in navigator)?navigator.onLine:!0}function ET(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ys{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hv()||Gv()}get(){return vT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IT=new Ys(3e4,6e4);function Ul(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,r,s={}){return Zd(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Xs(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},i);return zv()||(f.referrerPolicy="no-referrer"),Yd.fetch()(ep(t,t.config.apiHost,n,l),f)})}async function Zd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TT),e);try{const s=new AT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ri(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ri(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ri(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ri(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ml(t,d,f);Yt(t,d)}}catch(s){if(s instanceof yn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function wT(t,e,n,r,s={}){const i=await Gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ep(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fl(t.config,s):`${t.config.apiScheme}://${s}`}class AT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),IT.get())})}}function Ri(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ut(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function bT(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function tp(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RT(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=Bl(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bs(Pa(s.auth_time)),issuedAtTime:bs(Pa(s.iat)),expirationTime:bs(Pa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function Bl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bd(n);return s?JSON.parse(s):(Fi("Failed to decode base64 JWT payload"),null)}catch(s){return Fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dh(t){const e=Bl(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&ST(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function so(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bs(t,tp(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?np(i.providerUserInfo):[],l=OT(t.providerData,a),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?f:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Za(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function CT(t){const e=Pt(t);await so(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function np(t){return t.map(e=>{var{providerId:n}=e,r=xl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kT(t,e){const n=await Zd(t,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=ep(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Yd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NT(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",Ul(t,e))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=dh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Nr;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function bn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RT(this,e)}reload(){return CT(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await so(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Bs(this,bT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,f,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,K=(f=n.createdAt)!==null&&f!==void 0?f:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:z,isAnonymous:ce,providerData:he,stsTokenManager:w}=n;se(q&&w,e,"internal-error");const m=Nr.fromJSON(this.name,w);se(typeof q=="string",e,"internal-error"),bn(p,e.name),bn(y,e.name),se(typeof z=="boolean",e,"internal-error"),se(typeof ce=="boolean",e,"internal-error"),bn(I,e.name),bn(O,e.name),bn(M,e.name),bn(F,e.name),bn(K,e.name),bn(j,e.name);const T=new hn({uid:q,auth:e,email:y,emailVerified:z,displayName:p,isAnonymous:ce,photoURL:O,phoneNumber:I,tenantId:M,stsTokenManager:m,createdAt:K,lastLoginAt:j});return he&&Array.isArray(he)&&(T.providerData=he.map(A=>Object.assign({},A))),F&&(T._redirectEventId=F),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nr;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await so(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?np(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Nr;l.updateFromIdToken(r);const c=new hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
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
 */const ph=new Map;function fn(t){mn(t instanceof Function,"Expected a class definition");let e=ph.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ph.set(t,e),e)}/**
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
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rp.type="NONE";const gh=rp;/**
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
 */function Ui(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(fn(gh),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||fn(gh);const a=Ui(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){const p=hn._fromJSON(e,d);f!==i&&(l=p),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Dr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Dr(i,e,r))}}/**
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
 */function mh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ap(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cp(e))return"Blackberry";if(up(e))return"Webos";if(ip(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(lp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sp(t=lt()){return/firefox\//i.test(t)}function ip(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(t=lt()){return/crios\//i.test(t)}function ap(t=lt()){return/iemobile/i.test(t)}function lp(t=lt()){return/android/i.test(t)}function cp(t=lt()){return/blackberry/i.test(t)}function up(t=lt()){return/webos/i.test(t)}function jl(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DT(t=lt()){var e;return jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VT(){return Wv()&&document.documentMode===10}function hp(t=lt()){return jl(t)||lp(t)||up(t)||cp(t)||/windows phone/i.test(t)||ap(t)}/**
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
 */function fp(t,e=[]){let n;switch(t){case"Browser":n=mh(lt());break;case"Worker":n=`${mh(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class xT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MT(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",Ul(t,e))}/**
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
 */const LT=6;class FT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:LT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class UT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _h(this),this.idTokenSubscription=new _h(this),this.beforeStateQueue=new xT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tp(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await so(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ET()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(nr(this));const n=e?Pt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MT(this),n=new FT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fo(t){return Pt(t)}class _h{constructor(e){this.auth=e,this.observer=null,this.addObserver=nE(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(t){$l=t}function jT(t){return $l.loadJS(t)}function $T(){return $l.gapiScript}function HT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qT(t,e){const n=Vl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function zT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KT(t,e,n){const r=Fo(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dp(e),{host:a,port:l}=GT(e),c=l===null?"":`:${l}`,f={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(or(f,r.config.emulator)&&or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,WT()}function dp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GT(t){const e=dp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yh(a)}}}function yh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function Vr(t,e){return wT(t,"POST","/v1/accounts:signInWithIdp",Ul(t,e))}/**
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
 */const QT="http://localhost";class lr extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new lr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:QT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
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
 */class Hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zs extends Hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends Zs{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class cn extends Zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class On extends Zs{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class kn extends Zs{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),a=vh(r);return new Br({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vh(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class io extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new io(e,n,r,s)}}function gp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(t,i,e,r):i})}async function JT(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
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
 */async function XT(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await Bs(t,gp(r,s,e,t),n);se(i.idToken,r,"internal-error");const a=Bl(i.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(t.uid===l,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function YT(t,e,n=!1){if(Dt(t.app))return Promise.reject(nr(t));const r="signIn",s=await gp(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function ZT(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function eI(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function tI(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function nI(t){return Pt(t).signOut()}const oo="__sak";/**
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
 */class mp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rI=1e3,sI=10;class _p extends mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);VT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_p.type="LOCAL";const iI=_p;/**
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
 */class yp extends mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yp.type="SESSION";const vp=yp;/**
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
 */function oI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Uo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(n.origin,i)),c=await oI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uo.receivers=[];/**
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
 */function ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const f=ql("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Qt(){return window}function lI(t){Qt().location.href=t}/**
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
 */function Ep(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hI(){return Ep()?self:null}/**
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
 */const Tp="firebaseLocalStorageDb",fI=1,ao="firebaseLocalStorage",Ip="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bo(t,e){return t.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function dI(){const t=indexedDB.deleteDatabase(Tp);return new ei(t).toPromise()}function el(){const t=indexedDB.open(Tp,fI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ao,{keyPath:Ip})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ao)?e(r):(r.close(),await dI(),e(await el()))})})}async function Eh(t,e,n){const r=Bo(t,!0).put({[Ip]:e,value:n});return new ei(r).toPromise()}async function pI(t,e){const n=Bo(t,!1).get(e),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Th(t,e){const n=Bo(t,!0).delete(e);return new ei(n).toPromise()}const gI=800,mI=3;class wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await el(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uo._getInstance(hI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new aI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await el();return await Eh(e,oo,"1"),await Th(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Th(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bo(s,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wp.type="LOCAL";const _I=wp;new Ys(3e4,6e4);/**
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
 */function Ap(t,e){return e?fn(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zl extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yI(t){return YT(t.auth,new zl(t),t.bypassAuthState)}function vI(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),XT(n,new zl(t),t.bypassAuthState)}async function EI(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),JT(n,new zl(t),t.bypassAuthState)}/**
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
 */class bp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yI;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return vI;default:Yt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TI=new Ys(2e3,1e4);async function Rp(t,e,n){if(Dt(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=Fo(t);_T(t,e,Hl);const s=Ap(r,n);return new Yn(r,"signInViaPopup",e,s).executeNotNull()}class Yn extends bp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TI.get())};e()}}Yn.currentPopupAction=null;/**
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
 */const II="pendingRedirect",Bi=new Map;class wI extends bp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await AI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AI(t,e){const n=SI(e),r=RI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bI(t,e){Bi.set(t._key(),e)}function RI(t){return fn(t._redirectPersistence)}function SI(t){return Ui(II,t.config.apiKey,t.name)}async function PI(t,e,n=!1){if(Dt(t.app))return Promise.reject(nr(t));const r=Fo(t),s=Ap(r,e),a=await new wI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const CI=10*60*1e3;class OI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sp(t);default:return!1}}/**
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
 */async function NI(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VI=/^https?/;async function xI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NI(t);for(const n of e)try{if(MI(n))return}catch{}Yt(t,"unauthorized-domain")}function MI(t){const e=Ya(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!VI.test(n))return!1;if(DI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const LI=new Ys(3e4,6e4);function wh(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FI(t){return new Promise((e,n)=>{var r,s,i;function a(){wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wh(),n(Ut(t,"network-request-failed"))},timeout:LI.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)a();else{const l=HT("iframefcb");return Qt()[l]=()=>{gapi.load?a():n(Ut(t,"network-request-failed"))},jT(`${$T()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ji=null,e})}let ji=null;function UI(t){return ji=ji||FI(t),ji}/**
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
 */const BI=new Ys(5e3,15e3),jI="__/auth/iframe",$I="emulator/auth/iframe",HI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zI(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,$I):`https://${t.config.authDomain}/${jI}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},s=qI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xs(r).slice(1)}`}async function KI(t){const e=await UI(t),n=Qt().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:zI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ut(t,"network-request-failed"),l=Qt().setTimeout(()=>{i(a)},BI.get());function c(){Qt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const GI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,QI=600,JI="_blank",XI="http://localhost";class Ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(t,e,n,r=WI,s=QI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},GI),{width:r.toString(),height:s.toString(),top:i,left:a}),f=lt().toLowerCase();n&&(l=op(f)?JI:n),sp(f)&&(e=e||XI,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[I,O])=>`${y}${I}=${O},`,"");if(DT(f)&&l!=="_self")return ZI(e||"",l),new Ah(null);const p=window.open(e||"",l,d);se(p,t,"popup-blocked");try{p.focus()}catch{}return new Ah(p)}function ZI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ew="__/auth/handler",tw="emulator/auth/handler",nw=encodeURIComponent("fac");async function bh(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:s};if(e instanceof Hl){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",tE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Zs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),f=c?`#${nw}=${encodeURIComponent(c)}`:"";return`${rw(t)}?${Xs(l).slice(1)}${f}`}function rw({config:t}){return t.emulator?Fl(t,tw):`https://${t.authDomain}/${ew}`}/**
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
 */const Ca="webStorageSupport";class sw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vp,this._completeRedirectFn=PI,this._overrideRedirectResult=bI}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await bh(e,n,r,Ya(),s);return YI(e,a,ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bh(e,n,r,Ya(),s);return lI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KI(e),r=new OI(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ca];a!==void 0&&n(!!a),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hp()||ip()||jl()}}const iw=sw;var Rh="@firebase/auth",Sh="1.9.1";/**
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
 */class ow{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lw(t){Ur(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fp(t)},f=new UT(r,s,i,c);return zT(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new ar("auth-internal",e=>{const n=Fo(e.getProvider("auth").getImmediate());return(r=>new ow(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Rh,Sh,aw(t)),xn(Rh,Sh,"esm2017")}/**
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
 */const cw=5*60,uw=Hd("authIdTokenMaxAge")||cw;let Ph=null;const hw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uw)return;const s=n==null?void 0:n.token;Ph!==s&&(Ph=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fw(t=Gd()){const e=Vl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qT(t,{popupRedirectResolver:iw,persistence:[_I,iI,vp]}),r=Hd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=hw(i.toString());eI(n,a,()=>a(n.currentUser)),ZT(n,l=>a(l))}}const s=jd("auth");return s&&KT(n,`http://${s}`),n}function dw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ut("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lw("Browser");var Ch=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kl;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function T(){}T.prototype=m.prototype,w.D=m.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,b,S){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return m.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,T){T||(T=0);var A=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)A[b]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=w.g[0],T=w.g[1],b=w.g[2];var S=w.g[3],E=m+(S^T&(b^S))+A[0]+3614090360&4294967295;m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[3]+3250441966&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[4]+4118548399&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[7]+4249261313&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[8]+1770035416&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[11]+2304563134&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[12]+1804603682&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[15]+1236535329&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(b^S&(T^b))+A[1]+4129170786&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[0]+3921069994&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[5]+3593408605&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[4]+3889429448&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[9]+568446438&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[8]+1163531501&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[13]+2850285829&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[12]+2368359562&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(T^b^S)+A[5]+4294588738&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[14]+4259657740&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[1]+2763975236&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[10]+3200236656&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[13]+681279174&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[6]+76029189&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[9]+3654602809&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[2]+3299628645&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(b^(T|~S))+A[0]+4096336452&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[5]+4237533241&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[12]+1700485571&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[1]+2240044497&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[8]+1873313359&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[13]+1309151649&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[4]+4149444226&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var T=m-this.blockSize,A=this.B,b=this.h,S=0;S<m;){if(b==0)for(;S<=T;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<m;)if(A[b++]=w[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var T=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=T&255,T/=256;for(this.u(w),w=Array(16),m=T=0;4>m;++m)for(var A=0;32>A;A+=8)w[T++]=this.g[m]>>>A&255;return w};function i(w,m){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=m(w)}function a(w,m){this.h=m;for(var T=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==m||(T[b]=S,A=!1)}this.g=T}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return F(f(-w));for(var m=[],T=1,A=0;w>=T;A++)m[A]=w/T|0,T*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=f(Math.pow(m,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+S),m);8>S?(S=f(Math.pow(m,S)),A=A.j(S).add(f(E))):(A=A.j(T),A=A.add(f(E)))}return A}var p=c(0),y=c(1),I=c(16777216);t=a.prototype,t.m=function(){if(M(this))return-F(this).m();for(var w=0,m=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(M(this))return"-"+F(this).toString(w);for(var m=f(Math.pow(w,6)),T=this,A="";;){var b=z(T,m).g;T=K(T,b.j(m));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=b,O(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function M(w){return w.h==-1}t.l=function(w){return w=K(this,w),M(w)?-1:O(w)?0:1};function F(w){for(var m=w.g.length,T=[],A=0;A<m;A++)T[A]=~w.g[A];return new a(T,~w.h).add(y)}t.abs=function(){return M(this)?F(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0,b=0;b<=m;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,T[b]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function K(w,m){return w.add(F(m))}t.j=function(w){if(O(this)||O(w))return p;if(M(this))return M(w)?F(this).j(F(w)):F(F(this).j(w));if(M(w))return F(this.j(F(w)));if(0>this.l(I)&&0>w.l(I))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,T=[],A=0;A<2*m;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,ct=w.i(b)>>>16,It=w.i(b)&65535;T[2*A+2*b]+=E*It,j(T,2*A+2*b),T[2*A+2*b+1]+=S*It,j(T,2*A+2*b+1),T[2*A+2*b+1]+=E*ct,j(T,2*A+2*b+1),T[2*A+2*b+2]+=S*ct,j(T,2*A+2*b+2)}for(A=0;A<m;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=m;A<2*m;A++)T[A]=0;return new a(T,0)};function j(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function q(w,m){this.g=w,this.h=m}function z(w,m){if(O(m))throw Error("division by zero");if(O(w))return new q(p,p);if(M(w))return m=z(F(w),m),new q(F(m.g),F(m.h));if(M(m))return m=z(w,F(m)),new q(F(m.g),m.h);if(30<w.g.length){if(M(w)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var T=y,A=m;0>=A.l(w);)T=ce(T),A=ce(A);var b=he(T,1),S=he(A,1);for(A=he(A,2),T=he(T,2);!O(A);){var E=S.add(A);0>=E.l(w)&&(b=b.add(T),S=E),A=he(A,1),T=he(T,1)}return m=K(w,b.j(m)),new q(b,m)}for(b=p;0<=w.l(m);){for(T=Math.max(1,Math.floor(w.m()/m.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=f(T),E=S.j(m);M(E)||0<E.l(w);)T-=A,S=f(T),E=S.j(m);O(S)&&(S=y),b=b.add(S),w=K(w,E)}return new q(b,w)}t.A=function(w){return z(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)&w.i(A);return new a(T,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)|w.i(A);return new a(T,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)^w.i(A);return new a(T,this.h^w.h)};function ce(w){for(var m=w.g.length+1,T=[],A=0;A<m;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(T,w.h)}function he(w,m){var T=m>>5;m%=32;for(var A=w.g.length-T,b=[],S=0;S<A;S++)b[S]=0<m?w.i(S+T)>>>m|w.i(S+T+1)<<32-m:w.i(S+T);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Kl=a}).apply(typeof Ch<"u"?Ch:typeof self<"u"?self:typeof window<"u"?window:{});var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pp,gs,Cp,$i,tl,Op,kp,Np;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Si=="object"&&Si];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in h))break e;h=h[P]}o=o[o.length-1],g=h[o],u=u(g),u!=g&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,g=!1,P={next:function(){if(!g&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function p(o,u,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function y(o,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function I(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function O(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,P,C){for(var H=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)H[Ae-2]=arguments[Ae];return u.prototype[P].apply(g,H)}}function M(o){const u=o.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=o[g];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const P=o.length||0,C=g.length||0;o.length=P+C;for(let H=0;H<C;H++)o[P+H]=g[H]}else o.push(g)}}class K{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ce=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function he(o,u,h){for(const g in o)u.call(h,o[g],g,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let h,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(h in g)o[h]=g[h];for(let C=0;C<T.length;C++)h=T[C],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function b(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=mt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,h){const g=It.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var It=new K(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,fe=!1,mt=new ct,Ct=()=>{const o=l.Promise.resolve(void 0);pe=()=>{o.then(wt)}};var wt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){S(h)}var u=It;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function jt(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:dt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jt.aa.h.call(this)}}O(jt,Ne);var dt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(o,u,h,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o){this.src=o,this.g={},this.h=0}_e.prototype.add=function(o,u,h,g,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var H=v(o,u,g,P);return-1<H?(u=o[H],h||(u.fa=!1)):(u=new W(u,this.src,C,!!g,P),u.fa=h,o.push(u)),u};function _(o,u){var h=u.type;if(h in o.g){var g=o.g[h],P=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(g,P,1),C&&(X(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function v(o,u,h,g){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==g)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),N={};function V(o,u,h,g,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)V(o,u[C],h,g,P);return null}return h=ne(h),o&&o[k]?o.K(u,h,f(g)?!!g.capture:!1,P):D(o,u,h,!1,g,P)}function D(o,u,h,g,P,C){if(!u)throw Error("Invalid event type");var H=f(P)?!!P.capture:!!P,Ae=Q(o);if(Ae||(o[R]=Ae=new _e(o)),h=Ae.add(u,h,g,H,C),h.proxy)return h;if(g=G(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)vn||(P=H),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(L(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function G(){function o(h){return u.call(o.src,o.listener,h)}const u=ee;return o}function $(o,u,h,g,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(o,u[C],h,g,P);else g=f(g)?!!g.capture:!!g,h=ne(h),o&&o[k]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=v(C,h,g,P),-1<h&&(X(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,h,g,P)),(h=-1<o?u[o]:null)&&B(h))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[k])_(u.i,o);else{var h=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(h,g,o.capture):u.detachEvent?u.detachEvent(L(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=Q(u))?(_(h,o),h.h==0&&(h.src=null,u[R]=null)):X(o)}}}function L(o){return o in N?N[o]:N[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new jt(u,this);var h=o.listener,g=o.ha||o.src;o.fa&&B(o),o=h.call(g,u)}return o}function Q(o){return o=o[R],o instanceof _e?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function te(){ke.call(this),this.i=new _e(this),this.M=this,this.F=null}O(te,ke),te.prototype[k]=!0,te.prototype.removeEventListener=function(o,u,h,g){$(this,o,u,h,g)};function ae(o,u){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var P=u;u=new Ne(g,o),A(u,P)}if(P=!0,h)for(var C=h.length-1;0<=C;C--){var H=u.g=h[C];P=ge(H,g,!0,u)&&P}if(H=u.g=o,P=ge(H,g,!0,u)&&P,P=ge(H,g,!1,u)&&P,h)for(C=0;C<h.length;C++)H=u.g=h[C],P=ge(H,g,!1,u)&&P}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],g=0;g<h.length;g++)X(h[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,h,g){return this.i.add(String(o),u,!1,h,g)},te.prototype.L=function(o,u,h,g){return this.i.add(String(o),u,!0,h,g)};function ge(o,u,h,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var H=u[C];if(H&&!H.da&&H.capture==h){var Ae=H.listener,ze=H.ha||H.src;H.fa&&_(o.i,H),P=Ae.call(ze,g)!==!1&&P}}return P&&!g.defaultPrevented}function Je(o,u,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function He(o){o.g=Je(()=>{o.g=null,o.i&&(o.i=!1,He(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends ke{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:He(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(o){ke.call(this),this.h=o,this.g={}}O(Xe,ke);var En=[];function Xr(o){he(o.g,function(u,h){this.g.hasOwnProperty(h)&&B(u)},o),o.g={}}Xe.prototype.N=function(){Xe.aa.N.call(this),Xr(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qe=l.JSON.stringify,bt=l.JSON.parse,oi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Jo(){}Jo.prototype.h=null;function pc(o){return o.h||(o.h=o.i())}function gc(){}var Yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xo(){Ne.call(this,"d")}O(Xo,Ne);function Yo(){Ne.call(this,"c")}O(Yo,Ne);var Hn={},mc=null;function ai(){return mc=mc||new te}Hn.La="serverreachability";function _c(o){Ne.call(this,Hn.La,o)}O(_c,Ne);function Zr(o){const u=ai();ae(u,new _c(u))}Hn.STAT_EVENT="statevent";function yc(o,u){Ne.call(this,Hn.STAT_EVENT,o),this.stat=u}O(yc,Ne);function ut(o){const u=ai();ae(u,new yc(u,o))}Hn.Ma="timingevent";function vc(o,u){Ne.call(this,Hn.Ma,o),this.size=u}O(vc,Ne);function es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function Mg(o,u,h,g,P,C){o.info(function(){if(o.g)if(C)for(var H="",Ae=C.split("&"),ze=0;ze<Ae.length;ze++){var ye=Ae[ze].split("=");if(1<ye.length){var Ye=ye[0];ye=ye[1];var Ze=Ye.split("_");H=2<=Ze.length&&Ze[1]=="type"?H+(Ye+"="+ye+"&"):H+(Ye+"=redacted&")}}else H=null;else H=C;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+h+`
`+H})}function Lg(o,u,h,g,P,C,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+h+`
`+C+" "+H})}function gr(o,u,h,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ug(o,h)+(g?" "+g:"")})}function Fg(o,u){o.info(function(){return"TIMEOUT: "+u})}ts.prototype.info=function(){};function Ug(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return qe(h)}catch{return u}}var li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ec={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zo;function ci(){}O(ci,Jo),ci.prototype.g=function(){return new XMLHttpRequest},ci.prototype.i=function(){return{}},Zo=new ci;function Tn(o,u,h,g){this.j=o,this.i=u,this.l=h,this.R=g||1,this.U=new Xe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var Ic={},ea={};function ta(o,u,h){o.L=1,o.v=di(tn(u)),o.m=h,o.P=!0,wc(o,null)}function wc(o,u){o.F=Date.now(),ui(o),o.A=tn(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Lc(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Tc,o.g=tu(o.j,h?u:null,!o.m),0<o.O&&(o.M=new At(y(o.Y,o,o.g),o.O)),u=o.U,h=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(En[0]=P.toString()),P=En);for(var C=0;C<P.length;C++){var H=V(h,P[C],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zr(),Mg(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const Ze=nn(this.g);var u=this.g.Ba();const yr=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||qc(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=yr?Zr(3):Zr(2)),na(this);var h=this.g.Z();this.X=h;t:if(Ac(this)){var g=qc(this.g);o="";var P=g.length,C=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),ns(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=h==200,Lg(this.i,this.u,this.A,this.l,this.R,Ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,ze=this.g;if((Ae=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ae)){var ye=Ae;break t}}ye=null}if(h=ye)gr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ra(this,h);else{this.o=!1,this.s=3,ut(12),qn(this),ns(this);break e}}if(this.P){h=!0;let Ot;for(;!this.J&&this.C<H.length;)if(Ot=Bg(this,H),Ot==ea){Ze==4&&(this.s=4,ut(14),h=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Ic){this.s=4,ut(15),gr(this.i,this.l,H,"[Invalid Chunk]"),h=!1;break}else gr(this.i,this.l,Ot,null),ra(this,Ot);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||H.length!=0||this.h.h||(this.s=1,ut(16),h=!1),this.o=this.o&&h,!h)gr(this.i,this.l,H,"[Invalid Chunked Response]"),qn(this),ns(this);else if(0<H.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),ca(Ye),Ye.M=!0,ut(11))}}else gr(this.i,this.l,H,null),ra(this,H);Ze==4&&qn(this),this.o&&!this.J&&(Ze==4?Xc(this.j,this):(this.o=!1,ui(this)))}else rm(this.g),h==400&&0<H.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),qn(this),ns(this)}}}catch{}finally{}};function Ac(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Bg(o,u){var h=o.C,g=u.indexOf(`
`,h);return g==-1?ea:(h=Number(u.substring(h,g)),isNaN(h)?Ic:(g+=1,g+h>u.length?ea:(u=u.slice(g,g+h),o.C=g+h,u)))}Tn.prototype.cancel=function(){this.J=!0,qn(this)};function ui(o){o.S=Date.now()+o.I,bc(o,o.I)}function bc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=es(y(o.ba,o),u)}function na(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fg(this.i,this.A),this.L!=2&&(Zr(),ut(17)),qn(this),this.s=2,ns(this)):bc(this,this.S-o)};function ns(o){o.j.G==0||o.J||Xc(o.j,o)}function qn(o){na(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Xr(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ra(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||sa(h.h,o))){if(!o.K&&sa(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)vi(h),_i(h);else break e;la(h),ut(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=es(y(h.Za,h),6e3));if(1>=Pc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kn(h,11)}else if((o.K||h.g==o)&&vi(h),!j(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let ye=P[u];if(h.T=ye[0],ye=ye[1],h.G==2)if(ye[0]=="c"){h.K=ye[1],h.ia=ye[2];const Ye=ye[3];Ye!=null&&(h.la=Ye,h.j.info("VER="+h.la));const Ze=ye[4];Ze!=null&&(h.Aa=Ze,h.j.info("SVER="+h.Aa));const yr=ye[5];yr!=null&&typeof yr=="number"&&0<yr&&(g=1.5*yr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Ot=o.g;if(Ot){const Ti=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var C=g.h;C.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ia(C,C.h),C.h=null))}if(g.D){const ua=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;ua&&(g.ya=ua,Ce(g.I,g.D,ua))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var H=o;if(g.qa=eu(g,g.J?g.ia:null,g.W),H.K){Cc(g.h,H);var Ae=H,ze=g.L;ze&&(Ae.I=ze),Ae.B&&(na(Ae),ui(Ae)),g.g=H}else Qc(g);0<h.i.length&&yi(h)}else ye[0]!="stop"&&ye[0]!="close"||Kn(h,7);else h.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Kn(h,7):aa(h):ye[0]!="noop"&&h.l&&h.l.ta(ye),h.v=0)}}Zr(4)}catch{}}var jg=class{constructor(o,u){this.g=o,this.map=u}};function Rc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pc(o){return o.h?1:o.g?o.g.size:0}function sa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ia(o,u){o.g?o.g.add(u):o.h=u}function Cc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Rc.prototype.cancel=function(){if(this.i=Oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Oc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return M(o.i)}function $g(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,g=0;g<h;g++)u.push(o[g]);return u}u=[],h=0;for(g in o)u[h++]=o[g];return u}function Hg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const g in o)u[h++]=g;return u}}}function kc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Hg(o),g=$g(o),P=g.length,C=0;C<P;C++)u.call(void 0,g[C],h&&h[C],o)}var Nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qg(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),P=null;if(0<=g){var C=o[h].substring(0,g);P=o[h].substring(g+1)}else C=o[h];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function zn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof zn){this.h=o.h,hi(this,o.j),this.o=o.o,this.g=o.g,fi(this,o.s),this.l=o.l;var u=o.i,h=new is;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Dc(this,h),this.m=o.m}else o&&(u=String(o).match(Nc))?(this.h=!1,hi(this,u[1]||"",!0),this.o=rs(u[2]||""),this.g=rs(u[3]||"",!0),fi(this,u[4]),this.l=rs(u[5]||"",!0),Dc(this,u[6]||"",!0),this.m=rs(u[7]||"")):(this.h=!1,this.i=new is(null,this.h))}zn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ss(u,Vc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ss(u,Vc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ss(h,h.charAt(0)=="/"?Gg:Kg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ss(h,Qg)),o.join("")};function tn(o){return new zn(o)}function hi(o,u,h){o.j=h?rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function fi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Dc(o,u,h){u instanceof is?(o.i=u,Jg(o.i,o.h)):(h||(u=ss(u,Wg)),o.i=new is(u,o.h))}function Ce(o,u,h){o.i.set(u,h)}function di(o){return Ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,zg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Vc=/[#\/\?@]/g,Kg=/[#\?:]/g,Gg=/[#\?]/g,Wg=/[#\?@]/g,Qg=/#/g;function is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&qg(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=is.prototype,t.add=function(o,u){In(this),this.i=null,o=mr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function xc(o,u){In(o),u=mr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Mc(o,u){return In(o),u=mr(o,u),o.g.has(u)}t.forEach=function(o,u){In(this),this.g.forEach(function(h,g){h.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){In(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const P=o[g];for(let C=0;C<P.length;C++)h.push(u[g])}return h},t.V=function(o){In(this);let u=[];if(typeof o=="string")Mc(this,o)&&(u=u.concat(this.g.get(mr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return In(this),this.i=null,o=mr(this,o),Mc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Lc(o,u,h){xc(o,u),0<h.length&&(o.i=null,o.g.set(mr(o,u),M(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const C=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var P=C;H[g]!==""&&(P+="="+encodeURIComponent(String(H[g]))),o.push(P)}}return this.i=o.join("&")};function mr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Jg(o,u){u&&!o.j&&(In(o),o.i=null,o.g.forEach(function(h,g){var P=g.toLowerCase();g!=P&&(xc(this,g),Lc(this,P,h))},o)),o.j=u}function Xg(o,u){const h=new ts;if(l.Image){const g=new Image;g.onload=I(wn,h,"TestLoadImage: loaded",!0,u,g),g.onerror=I(wn,h,"TestLoadImage: error",!1,u,g),g.onabort=I(wn,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(wn,h,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Yg(o,u){const h=new ts,g=new AbortController,P=setTimeout(()=>{g.abort(),wn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(P),C.ok?wn(h,"TestPingServer: ok",!0,u):wn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),wn(h,"TestPingServer: error",!1,u)})}function wn(o,u,h,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(h)}catch{}}function Zg(){this.g=new oi}function em(o,u,h){const g=h||"";try{kc(o,function(P,C){let H=P;f(P)&&(H=qe(P)),u.push(g+C+"="+encodeURIComponent(H))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function pi(o){this.l=o.Ub||null,this.j=o.eb||!1}O(pi,Jo),pi.prototype.g=function(){return new gi(this.l,this.j)},pi.prototype.i=function(o){return function(){return o}}({});function gi(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(gi,te),t=gi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,as(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?os(this):as(this),this.readyState==3&&Fc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,os(this))},t.Qa=function(o){this.g&&(this.response=o,os(this))},t.ga=function(){this.g&&os(this)};function os(o){o.readyState=4,o.l=null,o.j=null,o.v=null,as(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function as(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uc(o){let u="";return he(o,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function oa(o,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Uc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Ce(o,u,h))}function De(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(De,te);var tm=/^https?$/i,nm=["POST","PUT"];t=De.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zo.g(),this.v=this.o?pc(this.o):pc(Zo),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Bc(this,C);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)h.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())h.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nm,u,void 0))||g||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,H]of h)this.g.setRequestHeader(C,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Bc(this,C)}};function Bc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,jc(o),mi(o)}function jc(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$c(this):this.bb())},t.bb=function(){$c(this)};function $c(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)Je(o.Ea,0,o);else if(ae(o,"readystatechange"),nn(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=H===0){var P=String(o.D).match(Nc)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!tm.test(P?P.toLowerCase():"")}h=g}if(h)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<nn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",jc(o)}}finally{mi(o)}}}}function mi(o,u){if(o.g){Hc(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{h.onreadystatechange=g}catch{}}}function Hc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function qc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rm(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var h=b(o[g]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[P]||[];u[P]=C,C.push(h)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function zc(o){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,o),this.cb=ls("retryDelaySeedMs",1e4,o),this.Wa=ls("forwardChannelMaxRetries",2,o),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Rc(o&&o.concurrentRequestLimit),this.Da=new Zg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zc.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,g){ut(0),this.W=o,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=eu(this,null,this.W),yi(this)};function aa(o){if(Kc(o),o.G==3){var u=o.U++,h=tn(o.I);if(Ce(h,"SID",o.K),Ce(h,"RID",u),Ce(h,"TYPE","terminate"),cs(o,h),u=new Tn(o,o.j,u),u.L=2,u.v=di(tn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=tu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ui(u)}Zc(o)}function _i(o){o.g&&(ca(o),o.g.cancel(),o.g=null)}function Kc(o){_i(o),o.u&&(l.clearTimeout(o.u),o.u=null),vi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function yi(o){if(!Sc(o.h)&&!o.s){o.s=!0;var u=o.Ga;pe||Ct(),fe||(pe(),fe=!0),mt.add(u,o),o.B=0}}function sm(o,u){return Pc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=es(y(o.Ga,o,u),Yc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Tn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Wc(this,P,u),h=tn(this.I),Ce(h,"RID",o),Ce(h,"CVER",22),this.D&&Ce(h,"X-HTTP-Session-Id",this.D),cs(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(Uc(C)))+"&"+u:this.m&&oa(h,this.m,C)),ia(this.h,P),this.Ua&&Ce(h,"TYPE","init"),this.P?(Ce(h,"$req",u),Ce(h,"SID","null"),P.T=!0,ta(P,h,null)):ta(P,h,u),this.G=2}}else this.G==3&&(o?Gc(this,o):this.i.length==0||Sc(this.h)||Gc(this))};function Gc(o,u){var h;u?h=u.l:h=o.U++;const g=tn(o.I);Ce(g,"SID",o.K),Ce(g,"RID",h),Ce(g,"AID",o.T),cs(o,g),o.m&&o.o&&oa(g,o.m,o.o),h=new Tn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Wc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ia(o.h,h),ta(h,g,u)}function cs(o,u){o.H&&he(o.H,function(h,g){Ce(u,g,h)}),o.l&&kc({},function(h,g){Ce(u,g,h)})}function Wc(o,u,h){h=Math.min(o.i.length,h);var g=o.l?y(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const H=["count="+h];C==-1?0<h?(C=P[0].g,H.push("ofs="+C)):C=0:H.push("ofs="+C);let Ae=!0;for(let ze=0;ze<h;ze++){let ye=P[ze].g;const Ye=P[ze].map;if(ye-=C,0>ye)C=Math.max(0,P[ze].g-100),Ae=!1;else try{em(Ye,H,"req"+ye+"_")}catch{g&&g(Ye)}}if(Ae){g=H.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,g}function Qc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pe||Ct(),fe||(pe(),fe=!0),mt.add(u,o),o.v=0}}function la(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=es(y(o.Fa,o),Yc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=es(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),_i(this),Jc(this))};function ca(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Jc(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);Ce(u,"RID","rpc"),Ce(u,"SID",o.K),Ce(u,"AID",o.T),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ce(u,"TO",o.ja),Ce(u,"TYPE","xmlhttp"),cs(o,u),o.m&&o.o&&oa(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=di(tn(u)),h.m=null,h.P=!0,wc(h,o)}t.Za=function(){this.C!=null&&(this.C=null,_i(this),la(this),ut(19))};function vi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xc(o,u){var h=null;if(o.g==u){vi(o),ca(o),o.g=null;var g=2}else if(sa(o.h,u))h=u.D,Cc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=ai(),ae(g,new vc(g,h)),yi(o)}else Qc(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&sm(o,u)||g==2&&la(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Kn(o,5);break;case 4:Kn(o,10);break;case 3:Kn(o,6);break;default:Kn(o,2)}}}function Yc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Kn(o,u){if(o.j.info("Error code "+u),u==2){var h=y(o.fb,o),g=o.Xa;const P=!g;g=new zn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||hi(g,"https"),di(g),P?Xg(g.toString(),h):Yg(g.toString(),h)}else ut(2);o.G=0,o.l&&o.l.sa(u),Zc(o),Kc(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Zc(o){if(o.G=0,o.ka=[],o.l){const u=Oc(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function eu(o,u,h){var g=h instanceof zn?tn(h):new zn(h);if(g.g!="")u&&(g.g=u+"."+g.g),fi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new zn(null);g&&hi(C,g),u&&(C.g=u),P&&fi(C,P),h&&(C.l=h),g=C}return h=o.D,u=o.ya,h&&u&&Ce(g,h,u),Ce(g,"VER",o.la),cs(o,g),g}function tu(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new pi({eb:h})):new De(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nu(){}t=nu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ei(){}Ei.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){te.call(this),this.g=new zc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new _r(this)}O(_t,te),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){aa(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qe(o),o=h);u.i.push(new jg(u.Ya++,o)),u.G==3&&yi(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,aa(this.g),delete this.g,_t.aa.N.call(this)};function ru(o){Xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(ru,Xo);function su(){Yo.call(this),this.status=1}O(su,Yo);function _r(o){this.g=o}O(_r,nu),_r.prototype.ua=function(){ae(this.g,"a")},_r.prototype.ta=function(o){ae(this.g,new ru(o))},_r.prototype.sa=function(o){ae(this.g,new su)},_r.prototype.ra=function(){ae(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Np=function(){return new Ei},kp=function(){return ai()},Op=Hn,tl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},li.NO_ERROR=0,li.TIMEOUT=8,li.HTTP_ERROR=6,$i=li,Ec.COMPLETE="complete",Cp=Ec,gc.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",te.prototype.listen=te.prototype.K,gs=gc,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Pp=De}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});const Oh="@firebase/firestore",kh="4.7.9";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let Wr="11.4.0";/**
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
 */const cr=new Nl("@firebase/firestore");function Ir(){return cr.logLevel}function Y(t,...e){if(cr.logLevel<=de.DEBUG){const n=e.map(Gl);cr.debug(`Firestore (${Wr}): ${t}`,...n)}}function ur(t,...e){if(cr.logLevel<=de.ERROR){const n=e.map(Gl);cr.error(`Firestore (${Wr}): ${t}`,...n)}}function jo(t,...e){if(cr.logLevel<=de.WARN){const n=e.map(Gl);cr.warn(`Firestore (${Wr}): ${t}`,...n)}}function Gl(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: `+t;throw ur(e),new Error(e)}function Ve(t,e){t||ue()}function Pe(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Dp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class gw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mw{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new Dp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new tt(e)}}class _w{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _w(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vw{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Dt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Nh(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new Nh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ew(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Vp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ew(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Dh=-62135596800,Vh=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vh);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dh)throw new ie(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vh}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Dh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Oe{static fromTimestamp(e){return new Oe(e)}static min(){return new Oe(new $e(0,0))}static max(){return new Oe(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xh="__name__";class qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=qt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Math.sign(e.length-n.length)}static compareSegments(e,n){const r=qt.isNumericId(e),s=qt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?qt.extractNumericId(e).compare(qt.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kl.fromString(e.substring(4,e.length-2))}}class Le extends qt{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Tw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends qt{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return Tw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xh}static keyField(){return new We([xh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ie(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ie(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Le.fromString(e))}static fromName(e){return new le(Le.fromString(e).popFirst(5))}static empty(){return new le(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Le(e.slice()))}}/**
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
 */const js=-1;function Iw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Oe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Mn(s,le.empty(),e)}function ww(t){return new Mn(t.readTime,t.key,js)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(Oe.min(),le.empty(),js)}static max(){return new Mn(Oe.max(),le.empty(),js)}}function Aw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const bw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==bw)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const f=c;n(e[f]).next(d=>{a[f]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Sw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ql{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ql.ae=-1;/**
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
 */const Jl=-1;function Xl(t){return t==null}function lo(t){return t===0&&1/t==-1/0}function Pw(t){return typeof t=="number"&&Number.isInteger(t)&&!lo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xp="";function Cw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mh(e)),e=Ow(t.get(n),e);return Mh(e)}function Ow(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case xp:n+="";break;default:n+=i}}return n}function Mh(t){return t+xp+""}/**
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
 */function Lh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fh(this.data.getIterator())}getIteratorFrom(e){return new Fh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Fh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Qe(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kw("Invalid base64 string: "+i):i}}(e);return new Zt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Zt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const Nw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=Nw.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?Zt.fromBase64String(t):Zt.fromUint8Array(t)}/**
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
 */const Lp="server_timestamp",Fp="__type__",Up="__previous_value__",Bp="__local_write_time__";function Yl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fp])===null||n===void 0?void 0:n.stringValue)===Lp}function Zl(t){const e=t.mapValue.fields[Up];return Yl(e)?Zl(e):e}function co(t){const e=hr(t.mapValue.fields[Bp].timestampValue);return new $e(e.seconds,e.nanos)}/**
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
 */class Dw{constructor(e,n,r,s,i,a,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}const uo="(default)";class ho{constructor(e,n){this.projectId=e,this.database=n||uo}static empty(){return new ho("","")}get isDefaultDatabase(){return this.database===uo}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const jp="__type__",Vw="__max__",Ci={mapValue:{}},$p="__vector__",nl="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yl(t)?4:Mw(t)?9007199254740991:xw(t)?10:11:ue()}function en(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=hr(s.timestampValue),l=hr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ge(s.doubleValue),l=Ge(i.doubleValue);return a===l?lo(a)===lo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return jr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Lh(a)!==Lh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!en(a[c],l[c])))return!1;return!0}(t,e);default:return ue()}}function $s(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function Hr(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ge(i.integerValue||i.doubleValue),c=Ge(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Uh(t.timestampValue,e.timestampValue);case 4:return Uh(co(t),co(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,a){const l=$r(i),c=$r(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=we(l[f],c[f]);if(d!==0)return d}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(Ge(i.latitude),Ge(a.latitude));return l!==0?l:we(Ge(i.longitude),Ge(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Bh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,f,d;const p=i.fields||{},y=a.fields||{},I=(l=p[nl])===null||l===void 0?void 0:l.arrayValue,O=(c=y[nl])===null||c===void 0?void 0:c.arrayValue,M=we(((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0,((d=O==null?void 0:O.values)===null||d===void 0?void 0:d.length)||0);return M!==0?M:Bh(I,O)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ci.mapValue&&a===Ci.mapValue)return 0;if(i===Ci.mapValue)return 1;if(a===Ci.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=we(c[p],d[p]);if(y!==0)return y;const I=Hr(l[c[p]],f[d[p]]);if(I!==0)return I}return we(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=hr(t),r=hr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function Bh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Hr(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function qr(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${rl(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function Hi(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zl(t);return e?16+Hi(e):16;case 5:return 2*t.stringValue.length;case 6:return $r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Hi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Qr(r.fields,(i,a)=>{s+=i.length+Hi(a)}),s}(t.mapValue);default:throw ue()}}function sl(t){return!!t&&"integerValue"in t}function ec(t){return!!t&&"arrayValue"in t}function qi(t){return!!t&&"mapValue"in t}function xw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[jp])===null||n===void 0?void 0:n.stringValue)===$p}function Rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Rs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Vw}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Rs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Rs(this.value))}}function Hp(t){const e=[];return Qr(t.fields,(n,r)=>{const s=new We([n]);if(qi(r)){const i=Hp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Lt(e)}/**
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
 */class kt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new kt(e,0,Oe.min(),Oe.min(),Oe.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,Oe.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,Oe.min(),Oe.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,Oe.min(),Oe.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fo{constructor(e,n){this.position=e,this.inclusive=n}}function jh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(a.referenceValue),n.key):r=Hr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $h(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class po{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qp{}class je extends qp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Uw(e,n,r):n==="array-contains"?new $w(e,r):n==="in"?new Hw(e,r):n==="not-in"?new qw(e,r):n==="array-contains-any"?new zw(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bw(e,r):new jw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hr(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Hr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends qp{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ln(e,n)}matches(e){return zp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zp(t){return t.op==="and"}function Kp(t){return Fw(t)&&zp(t)}function Fw(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function il(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+qr(t.value);if(Kp(t))return t.filters.map(e=>il(e)).join(",");{const e=t.filters.map(n=>il(n)).join(",");return`${t.op}(${e})`}}function Gp(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof Ln?function(r,s){return s instanceof Ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Gp(a,s.filters[l]),!0):!1}(t,e):void ue()}function Wp(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${qr(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Wp).join(" ,")+"}"}(t):"Filter"}class Uw extends je{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bw extends je{constructor(e,n){super(e,"in",n),this.keys=Qp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jw extends je{constructor(e,n){super(e,"not-in",n),this.keys=Qp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class $w extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ec(n)&&$s(n.arrayValue,this.value)}}class Hw extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$s(this.value.arrayValue,n)}}class qw extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$s(this.value.arrayValue,n)}}class zw extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ec(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$s(this.value.arrayValue,r))}}/**
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
 */class Kw{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function Hh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Kw(t,e,n,r,s,i,a)}function tc(t){const e=Pe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>il(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qr(r)).join(",")),e.le=n}return e.le}function nc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$h(t.startAt,e.startAt)&&$h(t.endAt,e.endAt)}/**
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
 */class $o{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Gw(t,e,n,r,s,i,a,l){return new $o(t,e,n,r,s,i,a,l)}function Ww(t){return new $o(t)}function qh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qw(t){return t.collectionGroup!==null}function Ss(t){const e=Pe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Qe(We.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new po(i,r))}),n.has(We.keyField().canonicalString())||e.he.push(new po(We.keyField(),r))}return e.he}function sr(t){const e=Pe(t);return e.Pe||(e.Pe=Jw(e,Ss(t))),e.Pe}function Jw(t,e){if(t.limitType==="F")return Hh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new po(s.field,i)});const n=t.endAt?new fo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fo(t.startAt.position,t.startAt.inclusive):null;return Hh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ol(t,e,n){return new $o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jp(t,e){return nc(sr(t),sr(e))&&t.limitType===e.limitType}function Xp(t){return`${tc(sr(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Wp(s)).join(", ")}]`),Xl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qr(s)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const f=jh(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,Ss(r),s)||r.endAt&&!function(a,l,c){const f=jh(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,Ss(r),s))}(t,e)}function Xw(t){return(e,n)=>{let r=!1;for(const s of Ss(t)){const i=Yw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yw(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),f=l.data.field(i);return c!==null&&f!==null?Hr(c,f):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mp(this.inner)}size(){return this.innerSize}}/**
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
 */const Zw=new gt(le.comparator);function go(){return Zw}const Yp=new gt(le.comparator);function Oi(...t){let e=Yp;for(const n of t)e=e.insert(n.key,n);return e}function Zp(t){let e=Yp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zn(){return Ps()}function eg(){return Ps()}function Ps(){return new dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const eA=new gt(le.comparator),tA=new Qe(le.comparator);function st(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new Qe(we);function rA(){return nA}/**
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
 */function sc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lo(e)?"-0":e}}function tg(t){return{integerValue:""+t}}function sA(t,e){return Pw(e)?tg(e):sc(t,e)}/**
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
 */class Ho{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof mo?function(s,i){const a={fields:{[Fp]:{stringValue:Lp},[Bp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yl(i)&&(i=Zl(i)),i&&(a.fields[Up]=i),{mapValue:a}}(n,e):t instanceof Hs?rg(t,e):t instanceof qs?sg(t,e):function(s,i){const a=ng(s,i),l=zh(a)+zh(s.Ie);return sl(a)&&sl(s.Ie)?tg(l):sc(s.serializer,l)}(t,e)}function oA(t,e,n){return t instanceof Hs?rg(t,e):t instanceof qs?sg(t,e):n}function ng(t,e){return t instanceof _o?function(r){return sl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mo extends Ho{}class Hs extends Ho{constructor(e){super(),this.elements=e}}function rg(t,e){const n=ig(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class qs extends Ho{constructor(e){super(),this.elements=e}}function sg(t,e){let n=ig(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class _o extends Ho{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function zh(t){return Ge(t.integerValue||t.doubleValue)}function ig(t){return ec(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Hs&&s instanceof Hs||r instanceof qs&&s instanceof qs?jr(r.elements,s.elements,en):r instanceof _o&&s instanceof _o?en(r.Ie,s.Ie):r instanceof mo&&s instanceof mo}(t.transform,e.transform)}class lA{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qo{}function og(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lg(t.key,dn.none()):new ni(t.key,t.data,dn.none());{const n=t.data,r=Vt.empty();let s=new Qe(We.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new pr(t.key,r,new Lt(s.toArray()),dn.none())}}function cA(t,e,n){t instanceof ni?function(s,i,a){const l=s.value.clone(),c=Gh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(s,i,a){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Gh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(ag(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Cs(t,e,n,r){return t instanceof ni?function(i,a,l,c){if(!zi(i.precondition,a))return l;const f=i.value.clone(),d=Wh(i.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,a,l,c){if(!zi(i.precondition,a))return l;const f=Wh(i.fieldTransforms,c,a),d=a.data;return d.setAll(ag(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function uA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ng(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function Kh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&jr(r,s,(i,a)=>aA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ni extends qo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends qo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gh(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,oA(a,l,n[s]))}return r}function Wh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,iA(i,a,e))}return r}class lg extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=og(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),st())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,(n,r)=>Kh(n,r))&&jr(this.baseMutations,e.baseMutations,(n,r)=>Kh(n,r))}}class ic{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return eA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ic(e,n,r,s)}}/**
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
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Me,me;function pA(t){switch(t){case U.OK:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ue()}}function gA(t){if(t===void 0)return ur("GRPC error has no .code"),U.UNKNOWN;switch(t){case Me.OK:return U.OK;case Me.CANCELLED:return U.CANCELLED;case Me.UNKNOWN:return U.UNKNOWN;case Me.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Me.INTERNAL:return U.INTERNAL;case Me.UNAVAILABLE:return U.UNAVAILABLE;case Me.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Me.NOT_FOUND:return U.NOT_FOUND;case Me.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Me.ABORTED:return U.ABORTED;case Me.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Me.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(me=Me||(Me={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Kl([4294967295,4294967295],0);class mA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _A(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yA(t,e){return al(t,e.toTimestamp())}function xr(t){return Ve(!!t),Oe.fromTimestamp(function(n){const r=hr(n);return new $e(r.seconds,r.nanos)}(t))}function cg(t,e){return ll(t,e).canonicalString()}function ll(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vA(t){const e=Le.fromString(t);return Ve(SA(e)),e}function cl(t,e){return cg(t.databaseId,e.path)}function EA(t){const e=vA(t);return e.length===4?Le.emptyPath():IA(e)}function TA(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IA(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qh(t,e,n){return{name:cl(t,e),fields:n.value.mapValue.fields}}function wA(t,e){let n;if(e instanceof ni)n={update:Qh(t,e.key,e.value)};else if(e instanceof lg)n={delete:cl(t,e.key)};else if(e instanceof pr)n={update:Qh(t,e.key,e.data),updateMask:RA(e.fieldMask)};else{if(!(e instanceof hA))return ue();n={verify:cl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof mo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _o)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function AA(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?xr(s.updateTime):xr(i);return a.isEqual(Oe.min())&&(a=xr(i)),new lA(a,s.transformResults||[])}(n,e))):[]}function bA(t){let e=EA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=ug(p);return y instanceof Ln&&Kp(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(y=>function(O){return new po(wr(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Xl(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,I=p.values||[];return new fo(I,y)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const y=!p.before,I=p.values||[];return new fo(I,y)}(n.endAt)),Gw(e,s,a,i,l,"F",c,f)}function ug(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wr(n.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return je.create(wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>ug(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function wr(t){return We.fromServerFormat(t.fieldPath)}function RA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class PA{constructor(e){this.Tt=e}}function CA(t){const e=bA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ol(e,e.limit,"L"):e}/**
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
 */class OA{constructor(){this.Tn=new kA}addToCollectionParentIndex(e,n){return this.Tn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Mn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class kA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Qe(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Le.comparator)).toArray()}}/**
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
 */const Jh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hg=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(hg,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class zr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new zr(0)}static Un(){return new zr(-1)}}/**
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
 */const Xh="LruGarbageCollector",NA=1048576;function Yh([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class DA{constructor(e){this.Hn=e,this.buffer=new Qe(Yh),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){Y(Xh,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?Y(Xh,"Ignoring IndexedDB error during garbage collection: ",n):await Wl(n)}await this.er(3e5)})}}class xA{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Ql.ae);const r=new DA(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Jh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jh):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,l,c,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(f=Date.now(),Ir()<=de.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function MA(t,e){return new xA(t,e)}/**
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
 */class LA{constructor(){this.changes=new dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Cs(r.mutation,s,Lt.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,st()).next(()=>r))}getLocalViewOfDocuments(e,n,r=st()){const s=Zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Oi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,st()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=go();const a=Ps(),l=function(){return Ps()}();return n.forEach((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof pr)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Cs(d.mutation,f,d.mutation.getFieldMask(),$e.now())):a.set(f.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var p;return l.set(f,new FA(d,(p=a.get(f))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ps();let s=new gt((a,l)=>a-l),i=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||Lt.empty();d=l.applyToLocalView(f,d),r.set(c,d);const p=(s.get(l.batchId)||st()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,p=eg();d.forEach(y=>{if(!i.has(y)){const I=og(n.get(y),r.get(y));I!==null&&p.set(y,I),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return le.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Zn());let l=js,c=i;return a.next(f=>x.forEach(f,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,c,f,st())).next(d=>({batchId:l,changes:Zp(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Oi();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,c=>{const f=function(p,y){return new $o(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,kt.newInvalidDocument(d)))});let l=Oi();return a.forEach((c,f)=>{const d=i.get(c);d!==void 0&&Cs(d.mutation,f,Lt.empty(),$e.now()),rc(n,f)&&(l=l.insert(c,f))}),l})}}/**
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
 */class BA{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return x.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xr(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:CA(s.bundledQuery),readTime:xr(s.readTime)}}(n)),x.resolve()}}/**
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
 */class jA{constructor(){this.overlays=new gt(le.comparator),this.Rr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zn();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Zn(),i=n.length+1,a=new le(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new gt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Zn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Zn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=s)););return x.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let i=this.Rr.get(n);i===void 0&&(i=st(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class $A{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
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
 */class oc{constructor(){this.Vr=new Qe(Be.mr),this.gr=new Qe(Be.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Be(e,n))}br(e,n){e.forEach(r=>this.removeReference(r,n))}Sr(e){const n=new le(new Le([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new Le([])),r=new Be(n,e),s=new Be(n,e+1);let i=st();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||we(e.Cr,n.Cr)}static pr(e,n){return we(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
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
 */class HA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Qe(Be.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Jl:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(we);return n.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const a=new Be(new le(i),0);let l=new Qe(we);return this.Mr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.Cr)),!0)},a),x.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Be(n,0),s=this.Mr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qA{constructor(e){this.kr=e,this.docs=function(){return new gt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=go();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=go();const a=n.path,l=new le(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Aw(ww(d),r)<=0||(s.has(d.key)||rc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}qr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return x.resolve(this.size)}}class zA extends LA{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class KA{constructor(e){this.persistence=e,this.Qr=new dr(n=>tc(n),nc),this.lastRemoteSnapshotVersion=Oe.min(),this.highestTargetId=0,this.$r=0,this.Kr=new oc,this.targetCount=0,this.Ur=zr.Kn()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),x.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new zr(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.zn(n),x.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Kr.yr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Kr.br(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Kr.vr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Kr.containsKey(n))}}/**
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
 */class fg{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ql(0),this.zr=!1,this.zr=!0,this.jr=new $A,this.referenceDelegate=e(this),this.Hr=new KA(this),this.indexManager=new OA,this.remoteDocumentCache=function(s){return new qA(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new PA(n),this.Yr=new BA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new HA(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new GA(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class GA extends Rw{constructor(e){super(),this.currentSequenceNumber=e}}class ac{constructor(e){this.persistence=e,this.ti=new oc,this.ni=null}static ri(e){return new ac(e)}get ii(){if(this.ni)return this.ni;throw ue()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),x.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const s=le.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,Oe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return x.or([()=>x.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class yo{constructor(e,n){this.persistence=e,this.oi=new dr(r=>Cw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=MA(this,n)}static ri(e,n){return new yo(e,n)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return x.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),x.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hi(e.data.value)),n}ar(e,n,r){return x.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=st(),s=st();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lc(e,n.fromCache,r,s)}}/**
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
 */class WA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QA{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Qv()?8:Sw(lt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WA;return this._s(e,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,a,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Ir()<=de.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(Ir()<=de.DEBUG&&Y("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Ir()<=de.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):x.resolve())}rs(e,n){if(qh(n))return x.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ol(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=st(...i);return this.ns.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.cs(n,l);return this.ls(n,f,a,c.readTime)?this.rs(e,ol(n,null,"F")):this.hs(e,f,n,c)}))})))}ss(e,n,r,s){return qh(n)||s.isEqual(Oe.min())?x.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?x.resolve(null):(Ir()<=de.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.hs(e,a,n,Iw(s,js)).next(l=>l))})}cs(e,n){let r=new Qe(Xw(e));return n.forEach((s,i)=>{rc(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Ir()<=de.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ns.getDocumentsMatchingQuery(e,n,Mn.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const JA="LocalStore";class XA{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new gt(we),this.Is=new dr(i=>tc(i),nc),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function YA(t,e,n,r){return new XA(t,e,n,r)}async function dg(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=st();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:l}))})})}function ZA(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const p=f.batch,y=p.keys();let I=x.resolve();return y.forEach(O=>{I=I.next(()=>d.getEntry(c,O)).next(M=>{const F=f.docVersions.get(O);Ve(F!==null),M.version.compareTo(F)<0&&(p.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),d.addEntry(M)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=st();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function e0(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function t0(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Jl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Zh{constructor(){this.activeTargetIds=rA()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class n0{constructor(){this.ho=new Zh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Zh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class r0{To(e){}shutdown(){}}/**
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
 */const ef="ConnectivityMonitor";class tf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Y(ef,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Y(ef,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ki=null;function ul(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
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
 */const Oa="RestConnection",s0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class i0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===uo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}bo(e,n,r,s,i){const a=ul(),l=this.So(e,n.toUriEncodedString());Y(Oa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(f=>(Y(Oa,`Received RPC '${e}' ${a}: `,f),f),f=>{throw jo(Oa,`RPC '${e}' ${a} failed with error: `,f,"url: ",l,"request:",r),f})}Co(e,n,r,s,i,a){return this.bo(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}So(e,n){const r=s0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class o0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const et="WebChannelConnection";class a0 extends i0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=ul();return new Promise((a,l)=>{const c=new Pp;c.setWithCredentials(!0),c.listenOnce(Cp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $i.NO_ERROR:const d=c.getResponseJson();Y(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case $i.TIMEOUT:Y(et,`RPC '${e}' ${i} timed out`),l(new ie(U.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const p=c.getStatus();if(Y(et,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const O=function(F){const K=F.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(K)>=0?K:U.UNKNOWN}(I.status);l(new ie(O,I.message))}else l(new ie(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ie(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Y(et,`RPC '${e}' ${i} completed.`)}});const f=JSON.stringify(s);Y(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",f,r,15)})}Wo(e,n,r){const s=ul(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Np(),l=kp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(et,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let y=!1,I=!1;const O=new o0({Fo:F=>{I?Y(et,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(y||(Y(et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),Y(et,`RPC '${e}' stream ${s} sending:`,F),p.send(F))},Mo:()=>p.close()}),M=(F,K,j)=>{F.listen(K,q=>{try{j(q)}catch(z){setTimeout(()=>{throw z},0)}})};return M(p,gs.EventType.OPEN,()=>{I||(Y(et,`RPC '${e}' stream ${s} transport opened.`),O.Qo())}),M(p,gs.EventType.CLOSE,()=>{I||(I=!0,Y(et,`RPC '${e}' stream ${s} transport closed`),O.Ko())}),M(p,gs.EventType.ERROR,F=>{I||(I=!0,jo(et,`RPC '${e}' stream ${s} transport errored:`,F),O.Ko(new ie(U.UNAVAILABLE,"The operation could not be completed")))}),M(p,gs.EventType.MESSAGE,F=>{var K;if(!I){const j=F.data[0];Ve(!!j);const q=j,z=(q==null?void 0:q.error)||((K=q[0])===null||K===void 0?void 0:K.error);if(z){Y(et,`RPC '${e}' stream ${s} received error:`,z);const ce=z.status;let he=function(T){const A=Me[T];if(A!==void 0)return gA(A)}(ce),w=z.message;he===void 0&&(he=U.INTERNAL,w="Unknown error status: "+ce+" with message "+z.message),I=!0,O.Ko(new ie(he,w)),p.close()}else Y(et,`RPC '${e}' stream ${s} received:`,j),O.Uo(j)}}),M(l,Op.STAT_EVENT,F=>{F.stat===tl.PROXY?Y(et,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===tl.NOPROXY&&Y(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}function ka(){return typeof document<"u"?document:null}/**
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
 */function zo(t){return new mA(t,!0)}/**
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
 */class pg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const nf="PersistentStream";class l0{constructor(e,n,r,s,i,a,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new pg(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ie(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return Y(nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(Y(nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c0 extends l0{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=AA(e.writeResults,e.commitTime),r=xr(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=TA(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wA(this.serializer,r))};this.I_(n)}}/**
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
 */class u0{}class h0 extends u0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ie(U.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.bo(e,ll(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(U.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(e,ll(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ie(U.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class f0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ur(n),this.N_=!1):Y("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ri="RemoteStore";class d0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{ii(this)&&(Y(ri,"Restarting streams for network reachability change."),await async function(c){const f=Pe(c);f.W_.add(4),await si(f),f.j_.set("Unknown"),f.W_.delete(4),await Ko(f)}(this))})}),this.j_=new f0(r,s)}}async function Ko(t){if(ii(t))for(const e of t.G_)await e(!0)}async function si(t){for(const e of t.G_)await e(!1)}function ii(t){return Pe(t).W_.size===0}async function gg(t,e,n){if(!ti(e))throw e;t.W_.add(1),await si(t),t.j_.set("Offline"),n||(n=()=>e0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y(ri,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Ko(t)})}function mg(t,e){return e().catch(n=>gg(t,n,e))}async function Go(t){const e=Pe(t),n=Fn(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Jl;for(;p0(e);)try{const s=await t0(e.localStore,r);if(s===null){e.K_.length===0&&n.P_();break}r=s.batchId,g0(e,s)}catch(s){await gg(e,s)}_g(e)&&yg(e)}function p0(t){return ii(t)&&t.K_.length<10}function g0(t,e){t.K_.push(e);const n=Fn(t);n.c_()&&n.b_&&n.S_(e.mutations)}function _g(t){return ii(t)&&!Fn(t).u_()&&t.K_.length>0}function yg(t){Fn(t).start()}async function m0(t){Fn(t).C_()}async function _0(t){const e=Fn(t);for(const n of t.K_)e.S_(n.mutations)}async function y0(t,e,n){const r=t.K_.shift(),s=ic.from(r,e,n);await mg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Go(t)}async function v0(t,e){e&&Fn(t).b_&&await async function(r,s){if(function(a){return pA(a)&&a!==U.ABORTED}(s.code)){const i=r.K_.shift();Fn(r).h_(),await mg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Go(r)}}(t,e),_g(t)&&yg(t)}async function rf(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),Y(ri,"RemoteStore received new credentials");const r=ii(n);n.W_.add(3),await si(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Ko(n)}async function E0(t,e){const n=Pe(t);e?(n.W_.delete(2),await Ko(n)):e||(n.W_.add(2),await si(n),n.j_.set("Unknown"))}function Fn(t){return t.Y_||(t.Y_=function(n,r,s){const i=Pe(n);return i.M_(),new c0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:m0.bind(null,t),Lo:v0.bind(null,t),D_:_0.bind(null,t),v_:y0.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await Go(t)):(await t.Y_.stop(),t.K_.length>0&&(Y(ri,`Stopping write stream with ${t.K_.length} pending writes`),t.K_=[]))})),t.Y_}/**
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
 */class cc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new cc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(t,e){if(ur("AsyncQueue",`${e}: ${t}`),ti(t))return new ie(U.UNAVAILABLE,`${e}: ${t}`);throw t}class T0{constructor(){this.queries=sf(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=Pe(n),i=s.queries;s.queries=sf(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ie(U.ABORTED,"Firestore shutting down"))}}function sf(){return new dr(t=>Xp(t),Jp)}function I0(t){t.ia.forEach(e=>{e.next()})}var of,af;(af=of||(of={}))._a="default",af.Cache="cache";const w0="SyncEngine";class A0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new dr(l=>Xp(l),Jp),this.qa=new Map,this.Qa=new Set,this.$a=new gt(le.comparator),this.Ka=new Map,this.Ua=new oc,this.Wa={},this.Ga=new Map,this.za=zr.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function b0(t,e,n){const r=C0(t);try{const s=await function(a,l){const c=Pe(a),f=$e.now(),d=l.reduce((I,O)=>I.add(O.key),st());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let O=go(),M=st();return c.ds.getEntries(I,d).next(F=>{O=F,O.forEach((K,j)=>{j.isValidDocument()||(M=M.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,O)).next(F=>{p=F;const K=[];for(const j of l){const q=uA(j,p.get(j.key).overlayedDocument);q!=null&&K.push(new pr(j.key,q,Hp(q.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,f,K,l)}).next(F=>{y=F;const K=F.applyToLocalDocumentSet(p,M);return c.documentOverlayCache.saveOverlays(I,F.batchId,K)})}).then(()=>({batchId:y.batchId,changes:Zp(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let f=a.Wa[a.currentUser.toKey()];f||(f=new gt(we)),f=f.insert(l,c),a.Wa[a.currentUser.toKey()]=f}(r,s.batchId,n),await Wo(r,s.changes),await Go(r.remoteStore)}catch(s){const i=vg(s,"Failed to persist write");n.reject(i)}}function lf(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Pe(a);c.onlineState=l;let f=!1;c.queries.forEach((d,p)=>{for(const y of p.ta)y.sa(l)&&(f=!0)}),f&&I0(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function R0(t,e){const n=Pe(t),r=e.batch.batchId;try{const s=await ZA(n.localStore,e);Tg(n,r,null),Eg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,s)}catch(s){await Wl(s)}}async function S0(t,e,n){const r=Pe(t);try{const s=await function(a,l){const c=Pe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(f,p))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,e);Tg(r,e,n),Eg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,s)}catch(s){await Wl(s)}}function Eg(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Tg(t,e,n){const r=Pe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}async function Wo(t,e,n){const r=Pe(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(f){s.push(f);const p=lc.Yi(c.targetId,f);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,f){const d=Pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(f,y=>x.forEach(y.Hi,I=>d.persistence.referenceDelegate.addReference(p,y.targetId,I)).next(()=>x.forEach(y.Ji,I=>d.persistence.referenceDelegate.removeReference(p,y.targetId,I)))))}catch(p){if(!ti(p))throw p;Y(JA,"Failed to update sequence numbers: "+p)}for(const p of f){const y=p.targetId;if(!p.fromCache){const I=d.Ts.get(y),O=I.snapshotVersion,M=I.withLastLimboFreeSnapshotVersion(O);d.Ts=d.Ts.insert(y,M)}}}(r.localStore,i))}async function P0(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){Y(w0,"User change. New user:",e.toKey());const r=await dg(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ie(U.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.Rs)}}function C0(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S0.bind(null,e),e}class vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zo(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return YA(this.persistence,new QA,e.initialUser,this.serializer)}Xa(e){return new fg(ac.ri,this.serializer)}Za(e){return new n0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vo.provider={build:()=>new vo};class O0 extends vo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ve(this.persistence.referenceDelegate instanceof yo);const r=this.persistence.referenceDelegate.garbageCollector;return new VA(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new fg(r=>yo.ri(r,n),this.serializer)}}class hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P0.bind(null,this.syncEngine),await E0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new T0}()}createDatastore(e){const n=zo(e.databaseInfo.databaseId),r=function(i){return new a0(i)}(e.databaseInfo);return function(i,a,l,c){return new h0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new d0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>lf(this.syncEngine,n,0),function(){return tf.D()?new tf:new r0}())}createSyncEngine(e,n){return function(s,i,a,l,c,f,d){const p=new A0(s,i,a,l,c,f);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Pe(s);Y(ri,"RemoteStore shutting down."),i.W_.add(5),await si(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hl.provider={build:()=>new hl};/**
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
 */const Un="FirestoreClient";class k0{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Vp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(Un,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(Un,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Na(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Un,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await dg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await N0(t);Y(Un,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>rf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>rf(e.remoteStore,s)),t._onlineComponents=e}async function N0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Un,"Using user provided OfflineComponentProvider");try{await Na(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await Na(t,new vo)}}else Y(Un,"Using default OfflineComponentProvider"),await Na(t,new O0(void 0));return t._offlineComponents}async function D0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Un,"Using user provided OnlineComponentProvider"),await cf(t,t._uninitializedComponentsProvider._online)):(Y(Un,"Using default OnlineComponentProvider"),await cf(t,new hl))),t._onlineComponents}function V0(t){return D0(t).then(e=>e.syncEngine)}/**
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
 */function Ig(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const uf=new Map;/**
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
 */function x0(t,e,n){if(!n)throw new ie(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M0(t,e,n,r){if(e===!0&&r===!0)throw new ie(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hf(t){if(!le.isDocumentKey(t))throw new ie(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new ie(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const wg="firestore.googleapis.com",ff=!0;class df{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wg,this.ssl=ff}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ff;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NA)throw new ie(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ig((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pw;switch(r.type){case"firstParty":return new yw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uf.get(n);r&&(Y("ComponentProvider","Removing Datastore"),uf.delete(n),r.terminate())}(this),Promise.resolve()}}function L0(t,e,n,r={}){var s;const i=(t=fl(t,hc))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==wg&&i.host!==l&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!or(c,a)&&(t._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=tt.MOCK_USER;else{f=$v(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ie(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new tt(p)}t._authCredentials=new gw(new Dp(f,d))}}/**
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
 */class fc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fc(this.firestore,e,this._query)}}class pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class zs extends fc{constructor(e,n,r){super(e,n,Ww(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new le(e))}withConverter(e){return new zs(this.firestore,e,this._path)}}function F0(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=Vp.newId()),x0("doc","path",e),t instanceof hc){const r=Le.fromString(e,...n);return hf(r),new pn(t,null,new le(r))}{if(!(t instanceof pn||t instanceof zs))throw new ie(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return hf(r),new pn(t.firestore,t instanceof zs?t.converter:null,new le(r))}}/**
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
 */const pf="AsyncQueue";class gf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new pg(this,"async_queue_retry"),this.bu=()=>{const r=ka();r&&Y(pf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const n=ka();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new rr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ti(e))throw e;Y(pf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ur("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.Su=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=cc.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&ue()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Ag extends hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new gf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gf(e),this._firestoreClient=void 0,await e}}}function U0(t,e){const n=typeof t=="object"?t:Gd(),r=typeof t=="string"?t:uo,s=Vl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Bv("firestore");i&&L0(s,...i)}return s}function B0(t){if(t._terminated)throw new ie(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||j0(t),t._firestoreClient}function j0(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,f,d){return new Dw(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ig(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new k0(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Zt.fromBase64String(e))}catch(n){throw new ie(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(Zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rg{constructor(e){this._methodName=e}}/**
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
 */class Sg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Pg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const $0=/^__.*__$/;class H0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ni(e,this.data,n,this.fieldTransforms)}}function Cg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class dc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new dc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Ku(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Eo(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Cg(this.Lu)&&$0.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class q0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zo(e)}ju(e,n,r,s=!1){return new dc({Lu:e,methodName:n,zu:r,path:We.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z0(t){const e=t._freezeSettings(),n=zo(t._databaseId);return new q0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function K0(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Dg("Data must be an object, but it was:",a,r);const l=kg(r,a);let c,f;if(i.merge)c=new Lt(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=G0(e,p,n);if(!a.contains(y))throw new ie(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);J0(d,y)||d.push(y)}c=new Lt(d),f=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,f=a.fieldTransforms;return new H0(new Vt(l),c,f)}function Og(t,e){if(Ng(t=Pt(t)))return Dg("Unsupported field value:",e,t),kg(t,e);if(t instanceof Rg)return function(r,s){if(!Cg(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Og(l,s.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:al(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:al(s.serializer,i)}}if(r instanceof Sg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:_A(s.serializer,r._byteString)};if(r instanceof pn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pg)return function(a,l){return{mapValue:{fields:{[jp]:{stringValue:$p},[nl]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw l.Wu("VectorValues must only contain numeric values.");return sc(l.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${uc(r)}`)}(t,e)}function kg(t,e){const n={};return Mp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,s)=>{const i=Og(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ng(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Sg||t instanceof Ks||t instanceof pn||t instanceof Rg||t instanceof Pg)}function Dg(t,e,n){if(!Ng(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=uc(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function G0(t,e,n){if((e=Pt(e))instanceof bg)return e._internalPath;if(typeof e=="string")return Q0(t,e);throw Eo("Field path arguments must be of type string or ",t,!1,void 0,n)}const W0=new RegExp("[~\\*/\\[\\]]");function Q0(t,e,n){if(e.search(W0)>=0)throw Eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bg(...e.split("."))._internalPath}catch{throw Eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ie(U.INVALID_ARGUMENT,l+t+c)}function J0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function X0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Y0(t,e,n){t=fl(t,pn);const r=fl(t.firestore,Ag),s=X0(t.converter,e,n);return Z0(r,[K0(z0(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,dn.none())])}function Z0(t,e){return function(r,s){const i=new rr;return r.asyncQueue.enqueueAndForget(async()=>b0(await V0(r),s,i)),i.promise}(B0(t),e)}(function(e,n=!0){(function(s){Wr=s})(Kr),Ur(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ag(new mw(r.getProvider("auth-internal")),new vw(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new ie(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ho(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),xn(Oh,kh,e),xn(Oh,kh,"esm2017")})();const eb={apiKey:"AIzaSyDPlA3jH9k8iyKB3-k3uvQlzfwGrjbLBF0",authDomain:"recordatorios1-17375.firebaseapp.com",projectId:"recordatorios1-17375",storageBucket:"recordatorios1-17375.appspot.com",messagingSenderId:"569620056346"};let To;lh().length?To=lh()[0]:To=Kd(eb);const tb=U0(To),Qo=fw(To),Vg=new cn,nb=async()=>{try{const e=(await Rp(Qo,Vg)).user;return localStorage.setItem("user",JSON.stringify(e)),e}catch(t){throw console.error("Error al iniciar sesión con Google:",t),t}},rb=async()=>{try{const e=(await Rp(Qo,Vg)).user;return localStorage.setItem("user",JSON.stringify(e)),e}catch(t){throw console.error("Error al registrarse con Google:",t),t}},mf=async t=>{try{const e=F0(tb,"users",t.uid);await Y0(e,{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL},{merge:!0})}catch(e){throw console.error("Error al guardar la información del usuario en Firestore:",e),e}},xg=async()=>{try{await nI(Qo),localStorage.removeItem("user")}catch(t){throw console.error("Error al cerrar sesión:",t),t}},Jr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},sb={name:"Cabecera",setup(){const t=jf(null),e=Ld();return Zf(()=>{tI(Qo,r=>{t.value=r})}),{user:t,handleLogout:async()=>{try{await xg(),t.value=null,e.push("/")}catch(r){console.error("Error al cerrar sesión:",r)}}}}},ib={key:0},ob={key:1};function ab(t,e,n,r,s,i){const a=Es("router-link");return xt(),Mt("header",null,[ve("nav",null,[ve("ul",null,[ve("li",null,[Fe(a,{to:"/"},{default:Cr(()=>e[1]||(e[1]=[tr("Inicio")])),_:1})]),ve("li",null,[Fe(a,{to:"/tareas"},{default:Cr(()=>e[2]||(e[2]=[tr("Tareas")])),_:1})]),r.user?(xt(),Mt("li",ib,[ve("a",{href:"#",onClick:e[0]||(e[0]=(...l)=>r.handleLogout&&r.handleLogout(...l))},"Cerrar Sesión")])):(xt(),Mt("li",ob,[Fe(a,{to:"/login"},{default:Cr(()=>e[3]||(e[3]=[tr("Iniciar Sesión")])),_:1})]))])]),e[4]||(e[4]=ve("h1",null,"Mi Aplicación",-1))])}const lb=Jr(sb,[["render",ab]]),cb={name:"Footer"};function ub(t,e,n,r,s,i){return xt(),Mt("footer",null,e[0]||(e[0]=[q_('<div class="footer-content"><p>© 2023 [Nombre del Proyecto]. Todos los derechos reservados.</p><div class="social-links"><a href="https://www.facebook.com" target="_blank">Facebook</a><a href="https://www.twitter.com" target="_blank">Twitter</a><a href="https://www.instagram.com" target="_blank">Instagram</a></div></div>',1)]))}const hb=Jr(cb,[["render",ub]]),fb={components:{Cabecera:lb,Footer:hb}},db={id:"app"};function pb(t,e,n,r,s,i){const a=Es("Cabecera"),l=Es("router-view"),c=Es("Footer");return xt(),Mt("div",db,[Fe(a),Fe(l),Fe(c)])}const gb=Jr(fb,[["render",pb]]),mb={name:"LandingPage"},_b={class:"landing-page"};function yb(t,e,n,r,s,i){const a=Es("router-link");return xt(),Mt("div",_b,[e[2]||(e[2]=ve("h1",null,"Bienvenido a la Aplicación",-1)),e[3]||(e[3]=ve("p",null,"Esta es la página de inicio donde puedes encontrar información sobre nuestra aplicación.",-1)),Fe(a,{to:"/login"},{default:Cr(()=>e[0]||(e[0]=[tr("Iniciar sesión")])),_:1}),Fe(a,{to:"/tareas"},{default:Cr(()=>e[1]||(e[1]=[tr("Ver tareas")])),_:1})])}const vb=Jr(mb,[["render",yb]]),Eb={name:"Login",setup(){const t=Ld();return{handleGoogleLogin:async()=>{try{const r=await nb();r&&(await mf(r),t.push("/tareas"))}catch(r){console.error("Error al iniciar sesión con Google:",r)}},handleGoogleRegister:async()=>{try{const r=await rb();r&&(await mf(r),t.push("/tareas"))}catch(r){console.error("Error al registrarse con Google:",r)}}}}},Tb={class:"login"};function Ib(t,e,n,r,s,i){return xt(),Mt("div",Tb,[e[3]||(e[3]=ve("h1",null,"Iniciar Sesión",-1)),ve("button",{onClick:e[0]||(e[0]=(...a)=>r.handleGoogleLogin&&r.handleGoogleLogin(...a))},"Iniciar sesión con Google"),ve("p",null,[e[2]||(e[2]=tr("¿No tienes una cuenta? ")),ve("a",{href:"#",onClick:e[1]||(e[1]=(...a)=>r.handleGoogleRegister&&r.handleGoogleRegister(...a))},"Regístrate")])])}const wb=Jr(Eb,[["render",Ib]]),Ab={name:"ListaTareas",data(){return{nuevaTarea:"",tareas:[],criterioOrden:"prioridad",usuario:null}},computed:{tareasOrdenadas(){return this.criterioOrden==="prioridad"?this.tareas.sort((t,e)=>{const n={High:3,Normal:2,Low:1};return n[e.prioridad]-n[t.prioridad]}):this.criterioOrden==="alfabetico"?this.tareas.sort((t,e)=>t.nombre.localeCompare(e.nombre)):this.tareas}},methods:{agregarTarea(){this.nuevaTarea.trim()&&(this.tareas.push({id:Date.now(),nombre:this.nuevaTarea,prioridad:"Normal",completada:!1,tiempo:new Date().toLocaleString()}),this.nuevaTarea="",this.guardarTareas())},toggleCompletada(t){t.completada=!t.completada,this.guardarTareas()},eliminarTarea(t){this.tareas=this.tareas.filter(e=>e.id!==t.id),this.guardarTareas()},eliminarCompletadas(){this.tareas=this.tareas.filter(t=>!t.completada),this.guardarTareas()},guardarTareas(){this.usuario&&sessionStorage.setItem(`tareas_${this.usuario.uid}`,JSON.stringify(this.tareas))},cargarTareas(){if(this.usuario){const t=sessionStorage.getItem(`tareas_${this.usuario.uid}`);t&&(this.tareas=JSON.parse(t))}},verificarUsuario(){const t=JSON.parse(localStorage.getItem("user"));t&&(this.usuario=t,console.log("Usuario verificado:",this.usuario))},async cerrarSesion(){try{await xg(),this.usuario=null,this.tareas=[],console.log("Sesión cerrada")}catch(t){console.error("Error al cerrar sesión:",t)}}},created(){this.verificarUsuario(),this.cargarTareas()}},bb={key:0,class:"lista-tareas"},Rb=["onClick"],Sb=["onUpdate:modelValue"],Pb=["onUpdate:modelValue"],Cb=["onClick"],Ob={key:1};function kb(t,e,n,r,s,i){return s.usuario?(xt(),Mt("div",bb,[e[10]||(e[10]=ve("h1",null,"Lista de Tareas",-1)),bi(ve("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>s.nuevaTarea=a),onKeyup:e[1]||(e[1]=wy((...a)=>i.agregarTarea&&i.agregarTarea(...a),["enter"])),placeholder:"Nueva tarea"},null,544),[[Vu,s.nuevaTarea]]),ve("div",null,[e[8]||(e[8]=ve("label",{for:"orden"},"Ordenar por:",-1)),bi(ve("select",{id:"orden","onUpdate:modelValue":e[2]||(e[2]=a=>s.criterioOrden=a)},e[7]||(e[7]=[ve("option",{value:"prioridad"},"Prioridad",-1),ve("option",{value:"alfabetico"},"Alfabético",-1)]),512),[[xu,s.criterioOrden]])]),ve("ul",null,[(xt(!0),Mt(zt,null,h_(i.tareasOrdenadas,a=>(xt(),Mt("li",{key:a.id},[ve("span",{onClick:l=>i.toggleCompletada(a)},wf(a.completada?"✔️":"⭕"),9,Rb),bi(ve("input",{"onUpdate:modelValue":l=>a.nombre=l,onChange:e[3]||(e[3]=(...l)=>i.guardarTareas&&i.guardarTareas(...l))},null,40,Sb),[[Vu,a.nombre]]),bi(ve("select",{"onUpdate:modelValue":l=>a.prioridad=l,onChange:e[4]||(e[4]=(...l)=>i.guardarTareas&&i.guardarTareas(...l))},e[9]||(e[9]=[ve("option",{value:"Low"},"Low",-1),ve("option",{value:"Normal"},"Normal",-1),ve("option",{value:"High"},"High",-1)]),40,Pb),[[xu,a.prioridad]]),ve("button",{onClick:l=>i.eliminarTarea(a)},"🗑️",8,Cb)]))),128))]),ve("button",{onClick:e[5]||(e[5]=(...a)=>i.eliminarCompletadas&&i.eliminarCompletadas(...a))},"Eliminar completadas"),ve("button",{onClick:e[6]||(e[6]=(...a)=>i.cerrarSesion&&i.cerrarSesion(...a))},"Cerrar Sesión")])):(xt(),Mt("div",Ob,e[11]||(e[11]=[ve("p",null,"Por favor, inicia sesión para ver tus tareas.",-1)])))}const Nb=Jr(Ab,[["render",kb]]),Db=[{path:"/",component:vb},{path:"/login",component:wb},{path:"/tareas",component:Nb,props:t=>({tareas:t.query.tareas?JSON.parse(t.query.tareas):[]})}],Vb=Ov({history:iv(),routes:Db});Ry(gb).use(Vb).mount("#app");
