(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const ct=(e,t)=>e===t,te={equals:ct};let Ue=Ve;const M=1,se=2,je={owned:null,cleanups:null,context:null,owner:null};var v=null;let me=null,b=null,S=null,N=null,ae=0;function ft(e,t){const s=b,r=v,n=e.length===0,i=n?je:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=n?e:()=>e(()=>O(()=>ue(i)));v=i,b=null;try{return K(o,!0)}finally{b=s,v=r}}function Q(e,t){t=t?Object.assign({},te,t):te;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=n=>(typeof n=="function"&&(n=n(s.value)),qe(s,n));return[Qe.bind(s),r]}function B(e,t,s){const r=Pe(e,t,!1,M);z(r)}function xe(e,t,s){Ue=gt;const r=Pe(e,t,!1,M);(!s||!s.render)&&(r.user=!0),N?N.push(r):z(r)}function re(e,t,s){s=s?Object.assign({},te,s):te;const r=Pe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=s.equals||void 0,z(r),Qe.bind(r)}function O(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function dt(e){xe(()=>O(e))}function ht(e){const t=re(e),s=re(()=>we(t()));return s.toArray=()=>{const r=s();return Array.isArray(r)?r:r!=null?[r]:[]},s}function Qe(){if(this.sources&&this.state)if(this.state===M)z(this);else{const e=S;S=null,K(()=>ie(this),!1),S=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function qe(e,t,s){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&K(()=>{for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n],o=me&&me.running;o&&me.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?S.push(i):N.push(i),i.observers&&We(i)),o||(i.state=M)}if(S.length>1e6)throw S=[],new Error},!1)),t}function z(e){if(!e.fn)return;ue(e);const t=v,s=b,r=ae;b=v=e,yt(e,e.value,r),b=s,v=t}function yt(e,t,s){let r;try{r=e.fn(t)}catch(n){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(ue),e.owned=null),e.updatedAt=s+1,ze(n)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?qe(e,r):e.value=r,e.updatedAt=s)}function Pe(e,t,s,r=M,n){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:null,pure:s};return v===null||v!==je&&(v.owned?v.owned.push(i):v.owned=[i]),i}function ne(e){if(e.state===0)return;if(e.state===se)return ie(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ae);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===M)z(e);else if(e.state===se){const r=S;S=null,K(()=>ie(e,t[0]),!1),S=r}}function K(e,t){if(S)return e();let s=!1;t||(S=[]),N?s=!0:N=[],ae++;try{const r=e();return pt(s),r}catch(r){s||(N=null),S=null,ze(r)}}function pt(e){if(S&&(Ve(S),S=null),e)return;const t=N;N=null,t.length&&K(()=>Ue(t),!1)}function Ve(e){for(let t=0;t<e.length;t++)ne(e[t])}function gt(e){let t,s=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[s++]=r:ne(r)}for(t=0;t<s;t++)ne(e[t])}function ie(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];if(r.sources){const n=r.state;n===M?r!==t&&(!r.updatedAt||r.updatedAt<ae)&&ne(r):n===se&&ie(r,t)}}}function We(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=se,s.pure?S.push(s):N.push(s),s.observers&&We(s))}}function ue(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),r=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const i=n.pop(),o=s.observerSlots.pop();r<n.length&&(i.sourceSlots[o]=r,n[r]=i,s.observerSlots[r]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ue(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function mt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ze(e,t=v){throw mt(e)}function we(e){if(typeof e=="function"&&!e.length)return we(e());if(Array.isArray(e)){const t=[];for(let s=0;s<e.length;s++){const r=we(e[s]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function P(e,t){return O(()=>e(t||{}))}const wt=e=>`Stale read from <${e}>.`;function bt(e){let t=!1;const s=(i,o)=>i[0]===o[0]&&(t?i[1]===o[1]:!i[1]==!o[1])&&i[2]===o[2],r=ht(()=>e.children),n=re(()=>{let i=r();Array.isArray(i)||(i=[i]);for(let o=0;o<i.length;o++){const l=i[o].when;if(l)return t=!!i[o].keyed,[o,l,i[o]]}return[-1]},void 0,{equals:s});return re(()=>{const[i,o,l]=n();if(i<0)return e.fallback;const u=l.children;return typeof u=="function"&&u.length>0?O(()=>u(t?o:()=>{if(O(n)[0]!==i)throw wt("Match");return l.when})):u},void 0,void 0)}function Y(e){return e}const xt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Pt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...xt]),St=new Set(["innerHTML","textContent","innerText","children"]),$t=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),At=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function vt(e,t){const s=At[e];return typeof s=="object"?s[t]?s.$:void 0:s}const Ct=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Et={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Tt(e,t,s){let r=s.length,n=t.length,i=r,o=0,l=0,u=t[n-1].nextSibling,f=null;for(;o<n||l<i;){if(t[o]===s[l]){o++,l++;continue}for(;t[n-1]===s[i-1];)n--,i--;if(n===o){const d=i<r?l?s[l-1].nextSibling:s[i-l]:u;for(;l<i;)e.insertBefore(s[l++],d)}else if(i===l)for(;o<n;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[i-1]&&s[l]===t[n-1]){const d=t[--n].nextSibling;e.insertBefore(s[l++],t[o++].nextSibling),e.insertBefore(s[--i],d),t[n]=s[i]}else{if(!f){f=new Map;let h=l;for(;h<i;)f.set(s[h],h++)}const d=f.get(t[o]);if(d!=null)if(l<d&&d<i){let h=o,m=1,g;for(;++h<n&&h<i&&!((g=f.get(t[h]))==null||g!==d+m);)m++;if(m>d-l){const $=t[o];for(;l<d;)e.insertBefore(s[l++],$)}else e.replaceChild(s[l++],t[o++])}else o++;else t[o++].remove()}}}const _e="_$DX_DELEGATE";function _t(e,t,s,r={}){let n;return ft(i=>{n=i,t===document?e():L(t,e(),t.firstChild?null:void 0,s)},r.owner),()=>{n(),t.textContent=""}}function D(e,t,s){let r;const n=()=>{const o=document.createElement("template");return o.innerHTML=e,s?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>O(()=>document.importNode(r||(r=n()),!0)):()=>(r||(r=n())).cloneNode(!0);return i.cloneNode=i,i}function Ke(e,t=window.document){const s=t[_e]||(t[_e]=new Set);for(let r=0,n=e.length;r<n;r++){const i=e[r];s.has(i)||(s.add(i),t.addEventListener(i,Bt))}}function le(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function kt(e,t,s,r){r==null?e.removeAttributeNS(t,s):e.setAttributeNS(t,s,r)}function Nt(e,t){t==null?e.removeAttribute("class"):e.className=t}function It(e,t,s,r){if(r)Array.isArray(s)?(e[`$$${t}`]=s[0],e[`$$${t}Data`]=s[1]):e[`$$${t}`]=s;else if(Array.isArray(s)){const n=s[0];e.addEventListener(t,s[0]=i=>n.call(e,s[1],i))}else e.addEventListener(t,s)}function Lt(e,t,s={}){const r=Object.keys(t||{}),n=Object.keys(s);let i,o;for(i=0,o=n.length;i<o;i++){const l=n[i];!l||l==="undefined"||t[l]||(ke(e,l,!1),delete s[l])}for(i=0,o=r.length;i<o;i++){const l=r[i],u=!!t[l];!l||l==="undefined"||s[l]===u||!u||(ke(e,l,!0),s[l]=u)}return s}function Mt(e,t,s){if(!t)return s?le(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof s=="string"&&(r.cssText=s=void 0),s||(s={}),t||(t={});let n,i;for(i in s)t[i]==null&&r.removeProperty(i),delete s[i];for(i in t)n=t[i],n!==s[i]&&(r.setProperty(i,n),s[i]=n);return s}function Xe(e,t={},s,r){const n={};return r||B(()=>n.children=V(e,t.children,n.children)),B(()=>t.ref&&t.ref(e)),B(()=>Dt(e,t,s,!0,n,!0)),n}function L(e,t,s,r){if(s!==void 0&&!r&&(r=[]),typeof t!="function")return V(e,t,r,s);B(n=>V(e,t(),n,s),r)}function Dt(e,t,s,r,n={},i=!1){t||(t={});for(const o in n)if(!(o in t)){if(o==="children")continue;n[o]=Ne(e,o,null,n[o],s,i)}for(const o in t){if(o==="children"){r||V(e,t.children);continue}const l=t[o];n[o]=Ne(e,o,l,n[o],s,i)}}function Rt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,s)=>s.toUpperCase())}function ke(e,t,s){const r=t.trim().split(/\s+/);for(let n=0,i=r.length;n<i;n++)e.classList.toggle(r[n],s)}function Ne(e,t,s,r,n,i){let o,l,u,f,d;if(t==="style")return Mt(e,s,r);if(t==="classList")return Lt(e,s,r);if(s===r)return r;if(t==="ref")i||s(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);r&&e.removeEventListener(h,r),s&&e.addEventListener(h,s)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);r&&e.removeEventListener(h,r,!0),s&&e.addEventListener(h,s,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),m=Ct.has(h);if(!m&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(h,g)}(m||s)&&(It(e,h,s,m),m&&Ke([h]))}else if(t.slice(0,5)==="attr:")le(e,t.slice(5),s);else if((d=t.slice(0,5)==="prop:")||(u=St.has(t))||!n&&((f=vt(t,e.tagName))||(l=Pt.has(t)))||(o=e.nodeName.includes("-")))d&&(t=t.slice(5),l=!0),t==="class"||t==="className"?Nt(e,s):o&&!l&&!u?e[Rt(t)]=s:e[f||t]=s;else{const h=n&&t.indexOf(":")>-1&&Et[t.split(":")[0]];h?kt(e,h,t,s):le(e,$t[t]||t,s)}return s}function Bt(e){const t=`$$${e.type}`;let s=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==s&&Object.defineProperty(e,"target",{configurable:!0,value:s}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return s||document}});s;){const r=s[t];if(r&&!s.disabled){const n=s[`${t}Data`];if(n!==void 0?r.call(s,n,e):r.call(s,e),e.cancelBubble)return}s=s._$host||s.parentNode||s.host}}function V(e,t,s,r,n){for(;typeof s=="function";)s=s();if(t===s)return s;const i=typeof t,o=r!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let l=s[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),s=U(e,s,r,l)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||i==="boolean")s=U(e,s,r);else{if(i==="function")return B(()=>{let l=t();for(;typeof l=="function";)l=l();s=V(e,l,s,r)}),()=>s;if(Array.isArray(t)){const l=[],u=s&&Array.isArray(s);if(be(l,t,s,n))return B(()=>s=V(e,l,s,r,!0)),()=>s;if(l.length===0){if(s=U(e,s,r),o)return s}else u?s.length===0?Ie(e,l,r):Tt(e,s,l):(s&&U(e),Ie(e,l));s=l}else if(t.nodeType){if(Array.isArray(s)){if(o)return s=U(e,s,r,t);U(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}else console.warn("Unrecognized value. Skipped inserting",t)}return s}function be(e,t,s,r){let n=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],u=s&&s[i],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))n=be(e,l,u)||n;else if(f==="function")if(r){for(;typeof l=="function";)l=l();n=be(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||n}else e.push(l),n=!0;else{const d=String(l);u&&u.nodeType===3&&u.data===d?e.push(u):e.push(document.createTextNode(d))}}return n}function Ie(e,t,s=null){for(let r=0,n=t.length;r<n;r++)e.insertBefore(t[r],s)}function U(e,t,s,r){if(s===void 0)return e.textContent="";const n=r||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(n!==l){const u=l.parentNode===e;!i&&!o?u?e.replaceChild(n,l):e.insertBefore(n,s):u&&l.remove()}else i=!0}}else e.insertBefore(n,s);return[n]}const Ft=D('<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 863 1280"><path d="M334.9 129.1c-36.5.4-67.5 1.2-73 1.8-13.7 1.7-24.2 4.6-34.4 9.6-16.3 7.9-27.4 19-35 35-8.4 17.6-9.4 26.5-9.5 79-.1 32.7-.3 39.3-1.5 40.9-2.2 2.9-2.2 64.3 0 67.2 2.1 2.8 2.1 38 0 40.8-2.2 2.9-2.2 64.1 0 67.3 1.3 1.8 1.5 39.8 1.8 310.9l.2 308.9 2.3 8.5c6.7 24.9 22 42.7 45.2 52.5 3.5 1.5 11.1 4 16.9 5.5 5.8 1.6 9.7 2.9 8.6 2.9-1.5.1-1.6.4-.7 1.3 1 1 37.6 1.3 176 1.3 96.1 0 176-.4 177.6-.8 1.9-.5 2.6-1.1 1.8-1.6-.7-.4 2.9-1.7 8.1-2.9 34.1-8.3 54.1-26.5 62.9-57.7l2.3-8 .3-314.1c.2-276.7.4-314.3 1.7-315.4 2.2-1.8 2.2-67.1 0-69-1.2-1-1.5-14.5-1.7-96.3l-.3-95.2-2.7-9.5c-3.3-12.1-6.7-19.7-12.3-27.5-13.3-18.7-34.6-30.1-62.7-33.5-4.7-.6-43.7-1.5-86.5-2-84-1-90.1-1-185.4.1zM665.5 648v411.5h-464l-.3-410.9c-.2-328.1 0-411.1 1-411.8.7-.4 105.3-.7 232.3-.5l231 .2V648z">'),Ot=(e={})=>(()=>{const t=Ft();return Xe(t,e,!0,!0),t})(),Ht="/Confession/assets/2023-08-03 19.34.36-16a958d3.jpg",Ut=D("<div><button>&lt; Previous</button><button>Next &gt;"),[I,Le]=Q(0);function ce(e){return(()=>{const t=Ut(),s=t.firstChild,r=s.nextSibling;return s.$$click=()=>{Le(I()-1)},s.style.setProperty("background-color","aliceblue"),s.style.setProperty("font-family",'"Nunito Sans", sans- serif'),s.style.setProperty("width","100px"),s.style.setProperty("height","40px"),s.style.setProperty("border-radius","1rem"),s.style.setProperty("margin-right","1rem"),r.$$click=()=>{Le(I()+1)},r.style.setProperty("background-color","aliceblue"),r.style.setProperty("font-family",'"Nunito Sans", sans- serif'),r.style.setProperty("width","100px"),r.style.setProperty("height","40px"),r.style.setProperty("border-radius","1rem"),B(n=>{const i=e.progress&&I()>0?"inline":"none",o=e.progress&&I()<3?"inline":"none";return i!==n._v$&&((n._v$=i)!=null?s.style.setProperty("display",i):s.style.removeProperty("display")),o!==n._v$2&&((n._v$2=o)!=null?r.style.setProperty("display",o):r.style.removeProperty("display")),n},{_v$:void 0,_v$2:void 0}),t})()}Ke(["click"]);const jt=D('<div><h1>20th May 2023</h1><h1>The day that we first talked <br>I remember thinking to myself <br>"What an interesting girl"</h1><div><img>');function Qt(){const[e,t]=Q(!1),s=window.innerWidth;return xe(()=>{setInterval(()=>{t(!0)},6e3)}),(()=>{const r=jt(),n=r.firstChild,i=n.nextSibling,o=i.nextSibling,l=o.firstChild;return r.style.setProperty("text-align","center"),L(r,P(ce,{get progress(){return e()}}),i),i.style.setProperty("animation","3s fadein"),o.style.setProperty("width","100%"),o.style.setProperty("position","relative"),L(o,P(Ot,{style:{position:"absolute",width:"800px",left:`${s/2-400}px`,top:"-100px"}}),l),le(l,"src",Ht),l.style.setProperty("position","absolute"),l.style.setProperty("width","430px"),l.style.setProperty("height","800px"),`${s/2-213}px`!=null?l.style.setProperty("left",`${s/2-213}px`):l.style.removeProperty("left"),l.style.setProperty("top","100px"),l.style.setProperty("object-fit","cover"),l.style.setProperty("object-position","0 -90px"),l.style.setProperty("animation","6s slidein"),r})()}const qt=D('<svg height="800" width="800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.012 59.012" xml:space="preserve"><path d="M51.525 11.703c-4.477-4.292-8.948-6.181-13.288-5.613-5.291.692-8.703 4.823-9.821 6.389-4.969-1.171-5.979-5.404-6.023-5.601a.996.996 0 0 0-1.187-.764 1 1 0 0 0-.768 1.188c.053.248 1.383 6.092 8.265 7.275l.669.113.354-.577c.033-.054 3.328-5.337 8.785-6.042 3.705-.481 7.618 1.229 11.63 5.075 8.048 7.717 7.906 17.639 5.09 24.352-3.531 8.417-11.379 13.718-20.035 13.427l-.086-.002-.083.012c-.072.012-7.372.952-15.847-4.118l-.757-.439-.545.684a2.763 2.763 0 0 1-1.91.932c-1.22.084-2.674-.688-4.177-2.19-.997-.997-2.39-1.293-3.639-.779C7.204 45.416 5 46.883 5 52.016a1 1 0 1 0 2 0c0-3.208.99-4.761 1.917-5.145.5-.21 1.032-.081 1.459.345 1.963 1.964 3.889 2.891 5.758 2.771a4.762 4.762 0 0 0 2.681-1.067c6.254 3.557 11.766 4.102 14.561 4.102.963 0 1.604-.065 1.84-.094 9.423.212 18.016-5.495 21.859-14.655 3.922-9.347 1.795-19.528-5.55-26.57z"></path><path d="M6.405 40.086c4.593-2.734 11.466.93 11.534.968l.712.386.525-.615c2.925-3.422 7.405-2.01 7.59-1.951l1.161.388.148-1.215c.337-2.762 4.233-4.252 4.273-4.267l.652-.245v-6.814l-.557-.275c-2.776-1.373-2.942-5.018-2.944-5.051l-.025-.806-.792-.147c-11.701-2.17-13.383-10.352-13.449-10.7a.994.994 0 0 0-1.162-.801 1 1 0 0 0-.805 1.162c.072.395 1.87 9.518 14.317 12.158.207 1.366.927 4.123 3.417 5.667v4.256c-1.222.577-3.792 2.049-4.657 4.534-1.755-.322-5.339-.532-8.149 2.229-2.054-.96-8.141-3.356-12.806-.585C1.813 40.487 0 45.081 0 52.016a1 1 0 1 0 2 0c0-6.176 1.482-10.19 4.405-11.93z">'),Vt=(e={})=>(()=>{const t=qt();return Xe(t,e,!0,!0),t})(),Wt=D('<div><h1>26th June 2023</h1><h1>The day that we first met <br>When I hold your hand, do you know <br>what is happening inside my stomach?</h1><div></div><div class="stage"><div class="mariposa"><div class="mariposa-turn"><div class="mariposa-flutter"></div></div></div><div class="mariposa"><div class="mariposa-turn"><div class="mariposa-flutter"></div></div></div><div class="mariposa"><div class="mariposa-turn"><div class="mariposa-flutter">');function zt(){return(()=>{const e=Wt(),t=e.firstChild,s=t.nextSibling,r=s.nextSibling,n=r.nextSibling;return e.style.setProperty("position","relative"),e.style.setProperty("text-align","center"),L(e,P(ce,{progress:!0}),s),L(r,P(Vt,{get style(){return{position:"absolute",width:"600px",left:`${window.innerWidth/2-300}px`,top:"220px"}}})),n.style.setProperty("top","400px"),n.style.setProperty("left","300px"),e})()}class Kt{x;y;color;counter;sparks;trail;ctx;canvas;constructor(t,s,r,n,i){this.x=t,this.y=s,this.counter=0,this.color=r,this.sparks=[],this.trail=[],this.canvas=n,this.ctx=i}draw(){if(this.counter++,this.counter<80){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,0,0,2),this.ctx.fillStyle=`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,this.ctx.fill(),this.trail.push({x:this.x,y:this.canvas.height/window.devicePixelRatio-this.counter*9+this.y}),this.ctx.beginPath(),this.ctx.moveTo(this.trail[0].x,this.trail[0].y);for(let t=1;t<this.trail.length;t++)this.ctx.lineTo(this.trail[t].x,this.trail[t].y),this.ctx.strokeStyle=`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,this.ctx.lineWidth=2.5,this.ctx.stroke();this.trail.length>5&&this.trail.shift()}else if(this.sparks.length===0)for(let t=0;t<70;t++)this.sparks.push(new Xt(this.x,this.y,this.color,this.ctx));else for(let t=0;t<this.sparks.length;t++){let s=this.sparks[t];s.draw(),s.update(),s.opacity<=0&&(this.sparks.splice(t,1),t--)}}}class Xt{x;y;speed;angle;color;opacity;lightRadius;lightOpacity;ctx;constructor(t,s,r,n){this.x=t,this.y=s,this.speed=Math.random()*5+1,this.angle=Math.random()*Math.PI*2,this.color=r,this.opacity=1,this.lightRadius=1,this.lightOpacity=1,this.ctx=n}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.lightRadius,.03,Math.PI*2),this.ctx.closePath(),this.ctx.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`,this.ctx.fill(),this.lightRadius+=.09,this.lightOpacity*=2,this.opacity=this.opacity<=.8?Math.random()*.8:this.opacity-.5,this.ctx.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`,this.ctx.fillRect(this.x,this.y,.2,.2)}update(){this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed,this.opacity-=.008}}function Ge(e,t,s){t.clearRect(0,0,e.width/window.devicePixelRatio,e.height/window.devicePixelRatio);for(let r=0;r<s.length;r++)s[r].draw();requestAnimationFrame(()=>Ge(e,t,s))}const Gt=D('<div><h1>And then we share our first kiss <br>My whole brain just goes</h1><canvas id="firework">'),Me=[{r:255,g:0,b:0},{r:0,g:0,b:255},{r:255,g:255,b:255},{r:138,g:43,b:226},{r:210,g:105,b:30},{r:100,g:149,b:237}];function Jt(){const[e,t]=Q(),[s,r]=Q(),[n,i]=Q([]),[o,l]=Q(!1);return dt(()=>{let u=document.getElementById("firework");u.width=window.innerWidth*window.devicePixelRatio,u.height=window.innerHeight/1.5*window.devicePixelRatio,u.style.width="90%",u.style.height=`${window.innerHeight/1.5}px`;let f=u.getContext("2d");f.scale(window.devicePixelRatio,window.devicePixelRatio),t(u),r(f),setInterval(()=>l(!0),6e3)}),setInterval(()=>{i([]);for(let u=0;u<10;u++){let f=Math.random()*e().width/window.devicePixelRatio,d=Math.random()*e().height,h=Me[Math.floor(Math.random()*Me.length)];i(()=>[...n(),new Kt(f,d,h,e(),s())])}Ge(e(),s(),n())},5e3),(()=>{const u=Gt(),f=u.firstChild,d=f.nextSibling;return u.style.setProperty("margin-top","40px"),u.style.setProperty("text-align","center"),L(u,P(ce,{get progress(){return o()}}),d),d.style.setProperty("margin","60px auto"),d.style.setProperty("padding","0"),d.style.setProperty("display","block"),d.style.setProperty("background","black"),d.style.setProperty("border-radius","5rem"),d.style.setProperty("border","10px solid mistyrose"),u})()}const Je=e=>Array.isArray(e),Ye=e=>Je(e)?e:[e];let Yt=function(e){let t=function(g){return Ye(g).forEach($=>m.set(Symbol($.char?.innerText),n({...$}))),this},s=()=>u().filter(g=>g.typeable),r=function(g,$){let fe=[...m.keys()];m.set(fe[g],n($))},n=g=>(g.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},g),i=function(){m.forEach(g=>delete g.done)},o=function(){m=new Map,t(e)},l=()=>m,u=()=>Array.from(m.values()),f=g=>m.delete(g),d=(g=!1)=>g?u():u().filter($=>!$.done),h=(g,$=!1)=>$?m.delete(g):m.get(g).done=!0,m=new Map;return t(e),{add:t,set:r,wipe:o,reset:i,destroy:f,done:h,getItems:d,getQueue:l,getTypeable:s}};const Ze=e=>Array.from(e),Se=e=>document.createTextNode(e);let $e=e=>([...e.childNodes].forEach(t=>{if(t.nodeValue){[...t.nodeValue].forEach(s=>{t.parentNode.insertBefore(Se(s),t)}),t.remove();return}$e(t)}),e);const et=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,$e(t.body)},tt="data-typeit-id",F="ti-cursor",Zt="END",es={started:!1,completed:!1,frozen:!1,destroyed:!1},q={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(e=>({opacity:e})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},ts=`[${tt}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function st(e,t=!1,s=!1){let r=e.querySelector(`.${F}`),n=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:l=>{if(r&&s){if(l.classList?.contains(F))return NodeFilter.FILTER_ACCEPT;if(r.contains(l))return NodeFilter.FILTER_REJECT}return l.classList?.contains(F)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i,o=[];for(;i=n.nextNode();)i.originalParent||(i.originalParent=i.parentNode),o.push(i);return t?o.reverse():o}function ss(e){return st(et(e))}function rs(e,t=!0){return t?ss(e):Ze(e).map(Se)}const ee=e=>document.createElement(e),rt=(e,t="")=>{let s=ee("style");s.id=t,s.appendChild(Se(e)),document.head.appendChild(s)},De=e=>(Je(e)||(e=[e/2,e/2]),e),Re=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let Be=e=>e/2;function ns(e){let{speed:t,deleteSpeed:s,lifeLike:r}=e;return s=s!==null?s:t/3,r?[Re(t,Be(t)),Re(s,Be(s))]:[t,s]}const is=e=>(e.forEach(clearTimeout),[]),ls=()=>Math.random().toString().substring(2,9),Ae=e=>"value"in e;let os=e=>Ae(e)?Ze(e.value):st(e,!0).filter(t=>!(t.childNodes.length>0));const as=(e,t)=>{new IntersectionObserver((r,n)=>{r.forEach(i=>{i.isIntersecting&&(t(),n.unobserve(e))})},{threshold:1}).observe(e)};let j=e=>typeof e=="function"?e():e;const nt=e=>Number.isInteger(e);let ve=(e,t=document,s=!1)=>t[`querySelector${s?"All":""}`](e),us=e=>/body/i.test(e?.tagName),cs=(e,t)=>{if(Ae(e)){e.value=`${e.value}${t.textContent}`;return}t.innerHTML="";let s=us(t.originalParent)?e:t.originalParent||e;s.insertBefore(t,ve("."+F,s)||null)},fs=(e,t,s)=>Math.min(Math.max(t+e,0),s.length);const W=(e,t)=>Object.assign({},e,t),ds=(e,t)=>{if(!e)return;let s=e.parentNode;(s.childNodes.length>1||s.isSameNode(t)?e:s).remove()},hs=(e,t,s)=>{let r=t[s-1],n=ve(`.${F}`,e);e=r?.parentNode||e,e.insertBefore(n,r||null)};function ys(e){return typeof e=="string"?ve(e):e}const ps=e=>/<(.+)>(.*?)<\/(.+)>/.test(e.outerHTML);let gs=(e,t,s)=>new Promise(r=>{let n=async()=>{await e(),r()};s.push(setTimeout(n,t||0))}),ms={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},ws=(e,t)=>{let r=`${`[${tt}='${e}']`} .${F}`,n=getComputedStyle(t),i=Object.entries(ms).reduce((o,[l,u])=>`${o} ${l}: var(--ti-cursor-${l}, ${u||n[l]});`,"");rt(`${r} { display: inline-block; width: 0; ${i} }`,e)};const Z=(e,t)=>new Array(t).fill(e),Fe=({queueItems:e,selector:t,cursorPosition:s,to:r})=>{if(nt(t))return t*-1;let n=new RegExp(Zt,"i").test(r),i=t?[...e].reverse().findIndex(({char:l})=>{let u=l.parentElement,f=u.matches(t);return n&&f?!0:f&&u.firstChild.isSameNode(l)}):-1;i<0&&(i=n?0:e.length-1);let o=n?0:1;return i-s+o};let oe=e=>new Promise(t=>{requestAnimationFrame(async()=>{t(await e())})}),it=e=>e?.getAnimations().find(t=>t.id===e.dataset.tiAnimationId),lt=({cursor:e,frames:t,options:s})=>{let r=e.animate(t,s);return r.pause(),r.id=e.dataset.tiAnimationId,oe(()=>{oe(()=>{r.play()})}),r},bs=({cursor:e,options:t,cursorOptions:s})=>{if(!e||!s)return;let r=it(e),n;r&&(t.delay=r.effect.getComputedTiming().delay,n=r.currentTime,r.cancel());let i=lt({cursor:e,frames:s.animation.frames,options:t});return n&&(i.currentTime=n),i},Oe=e=>e.func?.call(null),xs=async({index:e,queueItems:t,wait:s,cursor:r,cursorOptions:n})=>{let i=t[e][1],o=[],l=e,u=i,f=()=>u&&!u.delay,d=i.shouldPauseCursor()&&n.autoPause;for(;f();)o.push(u),f()&&l++,u=t[l]?t[l][1]:null;if(o.length)return await oe(async()=>{for(let g of o)await Oe(g)}),l-1;let h=it(r),m;return h&&(m={...h.effect.getComputedTiming(),delay:d?n.autoPauseDelay:0}),await s(async()=>{h&&d&&h.cancel(),await oe(()=>{Oe(i)})},i.delay),await bs({cursor:r,options:m,cursorOptions:n}),e},Ps=e=>{if(typeof e=="object"){let t={},{frames:s,options:r}=q.cursor.animation;return t.animation=e.animation||{},t.animation.frames=e.animation?.frames||s,t.animation.options=W(r,e.animation?.options||{}),t.autoPause=e.autoPause??q.cursor.autoPause,t.autoPauseDelay=e.autoPauseDelay||q.cursor.autoPauseDelay,t}return e===!0?q.cursor:e};const He=function(e,t={}){let s=async(a,c,p=!1)=>{E.frozen&&await new Promise(w=>{this.unfreeze=()=>{E.frozen=!1,w()}}),p||await y.beforeStep(this),await gs(a,c,he),p||await y.afterStep(this)},r=(a,c)=>xs({index:a,queueItems:c,wait:s,cursor:R,cursorOptions:y.cursor}),n=a=>ds(a,x),i=()=>Ae(x),o=(a=0)=>ns(y)[a],l=()=>os(x),u=(a={})=>{let c=a.delay;c&&A.add({delay:c})},f=(a,c)=>(A.add(a),u(c),this),d=()=>Ee??H,h=(a={})=>[{func:()=>G(a)},{func:()=>G(y)}],m=a=>{let c=y.nextStringDelay;A.add([{delay:c[0]},...a,{delay:c[1]}])},g=()=>{if(i())return;let a=ee("span");return a.className=F,Te?(a.innerHTML=et(y.cursorChar).innerHTML,a):(a.style.visibility="hidden",a)},$=async()=>{if(!i()&&R&&x.appendChild(R),Te){ws(ye,x),R.dataset.tiAnimationId=ye;let{animation:a}=y.cursor,{frames:c,options:p}=a;lt({frames:c,cursor:R,options:{duration:y.cursorSpeed,...p}})}},fe=()=>{let a=y.strings.filter(c=>!!c);a.forEach((c,p)=>{if(this.type(c),p+1===a.length)return;let w=y.breakLines?[{func:()=>de(ee("BR")),typeable:!0}]:Z({func:J,delay:o(1)},A.getTypeable().length);m(w)})},ot=async a=>{let c=d();c&&await Ce({value:c});let p=l().map(w=>[Symbol(),{func:J,delay:o(1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let w=0;w<p.length;w++)await r(w,p);A.reset(),A.set(0,{delay:a})},at=a=>{let c=x.innerHTML;return c?(x.innerHTML="",y.startDelete?(x.innerHTML=c,$e(x),m(Z({func:J,delay:o(1),deletable:!0},l().length)),a):c.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(a)):a},X=async(a=!0)=>{E.started=!0;let c=p=>{A.done(p,!a)};try{let p=[...A.getQueue()];for(let C=0;C<p.length;C++){let[_,T]=p[C];if(!T.done){if(!T.deletable||T.deletable&&l().length){let k=await r(C,p);Array(k-C).fill(C+1).map((pe,ge)=>pe+ge).forEach(pe=>{let[ge]=p[pe];c(ge)}),C=k}c(_)}}if(!a)return this;if(E.completed=!0,await y.afterComplete(this),!y.loop)throw"";let w=y.loopDelay;s(async()=>{await ot(w[0]),X()},w[1])}catch{}return this},Ce=async a=>{H=fs(a,H,l()),hs(x,l(),H)},de=a=>cs(x,a),G=async a=>y=W(y,a),ut=async()=>{if(i()){x.value="";return}l().forEach(n)},J=()=>{let a=l();a.length&&(i()?x.value=x.value.slice(0,-1):n(a[H]))};this.break=function(a){return f({func:()=>de(ee("BR")),typeable:!0},a)},this.delete=function(a=null,c={}){a=j(a);let p=h(c),w=a,{instant:C,to:_}=c,T=A.getTypeable(),k=(()=>w===null?T.length:nt(w)?w:Fe({queueItems:T,selector:w,cursorPosition:d(),to:_}))();return f([p[0],...Z({func:J,delay:C?0:o(1),deletable:!0},k),p[1]],c)},this.empty=function(a={}){return f({func:ut},a)},this.exec=function(a,c={}){let p=h(c);return f([p[0],{func:()=>a(this)},p[1]],c)},this.move=function(a,c={}){a=j(a);let p=h(c),{instant:w,to:C}=c,_=Fe({queueItems:A.getTypeable(),selector:a===null?"":a,to:C,cursorPosition:d()}),T=_<0?-1:1;return Ee=d()+_,f([p[0],...Z({func:()=>Ce(T),delay:w?0:o(),cursorable:!0},Math.abs(_)),p[1]],c)},this.options=function(a,c={}){return a=j(a),G(a),f({},c)},this.pause=function(a,c={}){return f({delay:j(a)},c)},this.type=function(a,c={}){a=j(a);let{instant:p}=c,w=h(c),_=rs(a,y.html).map(k=>({func:()=>de(k),char:k,delay:p||ps(k)?0:o(),typeable:k.nodeType===Node.TEXT_NODE})),T=[w[0],{func:async()=>await y.beforeString(a,this)},..._,{func:async()=>await y.afterString(a,this)},w[1]];return f(T,c)},this.is=function(a){return E[a]},this.destroy=function(a=!0){he=is(he),j(a)&&R&&n(R),E.destroyed=!0},this.freeze=function(){E.frozen=!0},this.unfreeze=()=>{},this.reset=function(a){!this.is("destroyed")&&this.destroy(),a?(A.wipe(),a(this)):A.reset(),H=0;for(let c in E)E[c]=!1;return x[i()?"value":"innerHTML"]="",this},this.go=function(){return E.started?this:($(),y.waitUntilVisible?(as(x,X.bind(this)),this):(X(),this))},this.flush=function(a=()=>{}){return $(),X(!1).then(a),this},this.getQueue=()=>A,this.getOptions=()=>y,this.updateOptions=a=>G(a),this.getElement=()=>x;let x=ys(e),he=[],H=0,Ee=null,E=W({},es);t.cursor=Ps(t.cursor??q.cursor);let y=W(q,t);y=W(y,{html:!i()&&y.html,nextStringDelay:De(y.nextStringDelay),loopDelay:De(y.loopDelay)});let ye=ls(),A=Yt([{delay:y.startDelay}]);x.dataset.typeitId=ye,rt(ts);let Te=!!y.cursor&&!i(),R=g();y.strings=at(Ye(y.strings)),y.strings.length&&fe()},Ss=D('<div><div><h2 id="date"></h2><h1 id="confession">');function $s(){return xe(()=>{const e=new He("#date",{speed:20,cursor:!1}).type("4th August 2023 <br />",{delay:100}),t=new He("#confession",{speed:60,lifeLike:!0,cursor:!0}).pause(2e3).type("Dear wifey, ").break({delay:100}).break({delay:100}).type("From that day on, I have known",{delay:100}).break({delay:100}).type("That you are the one for me",{delay:100}).break({delay:100}).type("So I guess what I am trying to say is…",{delay:100}).break({delay:100}).break({delay:100}).type("Will you marry me?",{delay:200}).pause(200).delete(18,{delay:100}).type("Ooopss sorry, wrong script",{delay:100}).break({delay:100}).type("That was suppose to be for later",{delay:100}).break({delay:100}).type("Anyway, what I mean is",{delay:100}).break({delay:100}).break({delay:100}).break({delay:100}).type("<b>Will you be my girlfriend?</b>",{delay:100}).pause(500).break({delay:100}).break({delay:100}).break({delay:100}).type("With lots of love, <br/> Your hubby,",{delay:100}).break({delay:100}).type("<em>Huy</em>",{delay:100});e.go(),t.go()}),(()=>{const e=Ss(),t=e.firstChild;return e.style.setProperty("text-align","center"),L(e,P(ce,{progress:!0}),t),t.style.setProperty("margin","100px auto"),t.style.setProperty("padding","2rem"),t.style.setProperty("width","70%"),t.style.setProperty("max-width","600px"),t.style.setProperty("height","60vh"),t.style.setProperty("min-height","850px"),t.style.setProperty("border","3px solid"),t.style.setProperty("text-align","left"),t.style.setProperty("border-color","lightgray black black lightgray"),t.style.setProperty("background","white"),e})()}const As=D("<div>"),vs=()=>(()=>{const e=As();return e.style.setProperty("font-family",'"Nunito Sans", sans- serif'),L(e,P(bt,{get children(){return[P(Y,{get when(){return I()==0},get children(){return P(Qt,{})}}),P(Y,{get when(){return I()==1},get children(){return P(zt,{})}}),P(Y,{get when(){return I()==2},get children(){return P(Jt,{})}}),P(Y,{get when(){return I()==3},get children(){return P($s,{})}})]}})),e})(),Cs=document.getElementById("root");_t(()=>P(vs,{}),Cs);
