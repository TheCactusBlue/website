(this["webpackJsonpcactus-website"]=this["webpackJsonpcactus-website"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(3),c=t.n(l),o=(t(10),t(11),t(1));t(4);function i(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Ryan Kim:"),r.a.createElement("h2",null,"Yet another programmer"),r.a.createElement("p",null,"Hi, my name is Ryan Kim, known more commonly by my username, ",r.a.createElement("strong",null,"CactusBlue. "),"I'm an 18 year old computer science student at the University of Adelaide. I'm also work as a backend developer for Shihoya Inc on ",r.a.createElement("a",{href:"https://project-ceris.com/"},"Project CERIS"),"."),r.a.createElement("p",null,"I've built my website to be an interactive Javascript REPL. Run `help` to see what commands and features are available."))}function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,"about"),r.a.createElement("li",null,"skills")))}function s(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Skills & Experiences"),r.a.createElement("h3",null,"Languages"),r.a.createElement("ul",null,r.a.createElement("li",null,"TypeScript + NodeJS"),r.a.createElement("li",null,"Go"),r.a.createElement("li",null,"C#"),r.a.createElement("li",null,"Rust"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Java + Kotlin"),r.a.createElement("li",null,"Java + Kotlin")),r.a.createElement("h3",null,"Technologies"),r.a.createElement("ul",null,r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Docker"),r.a.createElement("li",null,"Kubernetes")))}var m=["Array","Boolean","Date","Error","EvalError","Function","JSON","Math","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","unescape"];function E(e){var n=document.createElement("iframe");n.style&&(n.style.display="none"),document.body.appendChild(n);var t=n.contentWindow,a=t.eval;return function(e){Object.defineProperty(e,"clear",{get:function(){e.__lines=[]}}),Object.defineProperty(e,"help",{get:u}),Object.defineProperty(e,"about",{get:i}),Object.defineProperty(e,"skills",{get:s}),e.blog=function(){return r.a.createElement("h1",null,"Blogs")}}(t),Object.keys(e).forEach((function(n){t[n]=e[n]})),m.forEach((function(n){e[n]&&(t[n]=e[n])})),[function(e){return a.call(t,e)},t]}window.addEventListener("keydown",function(e){var n=[];return function(t){n.push(t.which),n.toString().indexOf("38,38,40,40,37,39,37,39,66,65")>=0&&(e(),n=[])}}((function(){return console.log("konami code detected")})));var d=0;function p(){return++d}function f(){var e=r.a.useState((function(){var e=E({getOutput:function(){return this.__lines||[]}});return e[1].__lines=[r.a.createElement("div",{key:p()},e[1].about)],e})),n=Object(o.a)(e,2),t=Object(o.a)(n[0],2),a=t[0],l=t[1],c=n[1],i=function(){var e=r.a.useRef(null);return[e,function(){e.current&&e.current.focus()}]}(),u=Object(o.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",{className:"term"},l.__lines,r.a.createElement("div",{onClick:m,className:"prompt"},r.a.createElement("span",{className:"symbol"},"\xbb "),r.a.createElement("span",{className:"command-in",contentEditable:!0,ref:s,onKeyPress:function(e){if(13===e.which){var n=function(n,t,a){t.__lines.push(r.a.createElement("div",{key:p()},r.a.createElement("span",{className:"input"},"\xbb")," ",a));var l=[];try{var c=n(a);c&&l.push(r.a.createElement("div",{key:p()},r.a.isValidElement(c)?c:c.toString()))}catch(e){l.push(r.a.createElement("div",{className:"error",key:p()},e.toString()))}return l}(a,l,s.current.innerText);l.__lines=l.__lines.concat(n),c([a,l]),s.current.innerText="",s.current.scrollTop=s.current.scrollHeight}}})))}var h=function(){return r.a.createElement("div",{className:"wm"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.28f1f943.chunk.js.map