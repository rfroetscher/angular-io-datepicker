webpackJsonp([1,2],{345:function(n,e,r){var t=r(611);"string"==typeof t&&(t=[[n.i,t,""]]);r(627)(t,{});t.locals&&(n.exports=t.locals)},611:function(n,e,r){e=n.exports=r(612)(),e.push([n.i,"@font-face{\r\n    font-family:'Fira';\r\n    src:url("+r(628)+");\r\n    font-weight:400;\r\n    font-style:normal;\r\n}\r\n\r\n@font-face{\r\n    font-family:'OpenSans';\r\n    src:url("+r(629)+");\r\n    font-weight:400;\r\n    font-style:normal;\r\n}\r\n\r\nbody{\r\n    background-color:#eee;\r\n    font-family:OpenSans, sans-serif;\r\n}\r\n\r\n.root{\r\n    display:flex;\r\n    padding:10px 5px;\r\n    justify-content:center;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n.example{\r\n    flex-basis:300px;\r\n    height:340px;\r\n    margin:3px;\r\n    font-size:15px;\r\n}\r\n\r\npre{\r\n    display:block;\r\n    padding:10px;\r\n    margin-bottom:5px;\r\n    border-radius:5px;\r\n    background-color:#ababab;\r\n}\r\n\r\ncode{\r\n    color:#000;\r\n    font-family:Fira, monospace;\r\n    font-size:13px;\r\n}\r\n\r\n.alert{\r\n    color:red;\r\n}",""])},612:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var r=this[e];r[2]?n.push("@media "+r[2]+"{"+r[1]+"}"):n.push(r[1])}return n.join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),n.push(a))}},n}},627:function(n,e){function r(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=l[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(f(t.parts[i],e))}else{for(var a=[],i=0;i<t.parts.length;i++)a.push(f(t.parts[i],e));l[t.id]={id:t.id,refs:1,parts:a}}}}function t(n){for(var e=[],r={},t=0;t<n.length;t++){var o=n[t],i=o[0],a=o[1],s=o[2],f=o[3],c={css:a,media:s,sourceMap:f};r[i]?r[i].parts.push(c):e.push(r[i]={id:i,parts:[c]})}return e}function o(n,e){var r=v(),t=g[g.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=g.indexOf(n);e>=0&&g.splice(e,1)}function a(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function f(n,e){var r,t,o;if(e.singleton){var f=b++;r=m||(m=a(e)),t=c.bind(null,r,f,!1),o=c.bind(null,r,f,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(e),t=u.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),t=p.bind(null,r),o=function(){i(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}function c(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e){var r=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function u(n,e){var r=e.css,t=e.sourceMap;t&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var o=new Blob([r],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var l={},d=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=t(n);return r(o,e),function(n){for(var i=[],a=0;a<o.length;a++){var s=o[a],f=l[s.id];f.refs--,i.push(f)}if(n){var c=t(n);r(c,e)}for(var a=0;a<i.length;a++){var f=i[a];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete l[f.id]}}}};var y=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},628:function(n,e,r){n.exports=r.p+"fa1f8c8961adca519738d9518139579c.ttf"},629:function(n,e,r){n.exports=r.p+"629a55a7e793da068dc580d184cc0e31.ttf"},634:function(n,e,r){n.exports=r(345)}},[634]);
//# sourceMappingURL=styles.1a651a4e1fb776c2973d.bundle.map