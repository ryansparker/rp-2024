(()=>{"use strict";var t={2400:(t,e,o)=>{o.d(e,{c:()=>a});const s=1e3;function r(t,e=[],o=t){return"function"==typeof t?t(...e):o}function a(t,e,o=!0){if(!o)return void r(t);const a=function(t){if(!t)return 0;let{transitionDuration:e,transitionDelay:o}=window.getComputedStyle(t);const r=Number.parseFloat(e),a=Number.parseFloat(o);return r||a?([e]=e.split(","),[o]=o.split(","),(Number.parseFloat(e)+Number.parseFloat(o))*s):0}(e)+5;let n=!1;const i=({target:o})=>{o===e&&(n=!0,e.removeEventListener("transitionend",i),r(t))};e.addEventListener("transitionend",i),setTimeout((()=>{n||e.dispatchEvent(new Event("transitionend"))}),a)}}},e={};function o(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(2400);const e={};function s(t){if(e[t])return e[t];let o={};if(Array.isArray(t)&&(o=[]),"object"==typeof t)return Object.keys(t).forEach((e=>{o[s(e)]=s(t[e])})),o;if(o=t,"string"==typeof o)try{o=decodeURIComponent(o),o=o.replace(/_u002d__u002d_/gm,"--")}catch(t){console.warn(t)}return e[t]=o,o}function r(t){return[...t.parentNode.children].filter((e=>e!==t))}const{location:a,GHOSTKIT:{events:n}}=window;let i=a.hash;const c="ArrowLeft",l="ArrowRight",u="ArrowUp",b="ArrowDown",g="Home",d="End";function h(t,e){const o=s(e);let r=t.querySelector(`:scope > .ghostkit-tabs-buttons > [data-tab="${o}"]`);return r||(r=t.querySelector(`:scope > .ghostkit-tabs-buttons > [href="#${o}"]`)),r||(r=t.querySelector(`:scope > .ghostkit-tabs-buttons > [href="${o}"]`)),r||(r=t.querySelector(`:scope > .ghostkit-tabs-buttons > [href="#tab-${o}"]`)),[r,r?t.querySelector(`:scope > .ghostkit-tabs-content > [data-tab="${o.replace(/^#/,"")}"]`):null]}function p(e,o){const[s,a]=h(e,o);if(!s||!a)return!1;n.trigger(e,"show.tab.gkt",{relatedTarget:a});const i="BUTTON"===s.nodeName;return s.classList.add("ghostkit-tabs-buttons-item-active"),i&&(s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0)),a.classList.add("ghostkit-tab-active"),(0,t.c)((()=>{n.trigger(e,"shown.tab.gkt",{relatedTarget:a})}),a),r(s).forEach((t=>{t.classList.contains("ghostkit-tabs-buttons-item-active")&&(t.classList.remove("ghostkit-tabs-buttons-item-active"),i&&(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex",-1)))})),r(a).forEach((o=>{o.classList.contains("ghostkit-tab-active")&&(n.trigger(e,"hide.tab.gkt",{relatedTarget:o}),o.classList.remove("ghostkit-tab-active"),(0,t.c)((()=>{n.trigger(e,"hidden.tab.gkt",{relatedTarget:o})}),a))})),!0}n.on(document,"init.blocks.gkt",(()=>{document.querySelectorAll(".ghostkit-tabs:not(.ghostkit-tabs-ready)").forEach((t=>{n.trigger(t,"prepare.tabs.gkt"),t.classList.add("ghostkit-tabs-ready");const e=t.querySelector(':scope > .ghostkit-tabs-buttons[role="tablist"]');e&&e.querySelectorAll(":scope > .ghostkit-tabs-buttons-item").forEach((t=>{t.classList.contains("ghostkit-tabs-buttons-item-active")||t.setAttribute("tabindex","-1")}));let o=!1;i&&(o=p(t,i.replace("#","")));const s=t.getAttribute("data-tab-active");s&&(o||(o=p(t,`#${s}`)),o||(o=p(t,s))),n.trigger(t,"prepared.tabs.gkt")}))})),n.on(document,"click",".ghostkit-tabs-buttons-item",(t=>{t.preventDefault();const e=t.delegateTarget;p(e.closest(".ghostkit-tabs"),e.getAttribute("data-tab")||e.hash)})),n.on(document,"mouseenter",".ghostkit-tabs-buttons-trigger-hover > .ghostkit-tabs-buttons .ghostkit-tabs-buttons-item",(t=>{const e=t.delegateTarget;p(e.closest(".ghostkit-tabs"),e.getAttribute("data-tab")||e.hash)})),n.on(document,"keydown",'.ghostkit-tabs-buttons[role="tablist"]',(t=>{if(![c,l,u,b,g,d].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=t.delegateTarget.querySelectorAll(":scope > .ghostkit-tabs-buttons-item");let o;if([g,d].includes(t.key))o=e[t.key===g?0:e.length-1];else{const a=[l,b].includes(t.key),n=[].indexOf.call(e,t.target);var s,r;o=a?null!==(s=e[n+1])&&void 0!==s?s:e[0]:null!==(r=e[n-1])&&void 0!==r?r:e[e.length-1]}o&&(o.focus({preventScroll:!0}),p(o.closest(".ghostkit-tabs"),o.getAttribute("data-tab")))})),n.on(window,"hashchange",(function(){window.location.hash!==i&&(i=window.location.hash,i&&document.querySelectorAll(".ghostkit-tabs-ready").forEach((t=>{p(t,i.replace("#",""))})))}))})()})();