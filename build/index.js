/*!
 * 
 *   canvas-txt v1.1.3
 *   https://github.com/geongeorge/Canvas-Txt
 * 
 *   Copyright (c) Geon George (https://geongeorge.com)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("canvasTxt",[],e):"object"==typeof exports?exports.canvasTxt=e():t.canvasTxt=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={debug:!1,align:"center",textSize:14,font:"Arial",lineHeight:null,fillStyle:"black",strokeStyle:null,lineWidth:1,drawText:function(t,e,n,r,i,o){var s=this,l=[n,r,i,o],u=this.textSize+"px "+this.font;t.font=u,t.fillStyle=this.fillStyle,t.strokeStyle=this.strokeStyle,t.lineWidth=this.lineWidth;var a=parseInt(l[1])+parseInt(l[3])/2+parseInt(this.textSize)/2,f=parseInt(l[0])+parseInt(l[2])/2;t.textAlign="center",this.align&&("right"==this.align?(f=parseInt(l[0])+parseInt(l[2]),t.textAlign="right"):"left"==this.align&&(f=parseInt(l[0]),t.textAlign="left"));var d=[];e.split("\n").forEach(function(e){var n=t.measureText(e).width;if(n<=l[2])d.push(e);else{var r,i,o,s=e,u=l[2];for(n=t.measureText(s).width;n>u;){for(r=0,i=0,o="";i<u;)r++,o=s.substr(0,r),i=t.measureText(s.substr(0,r)).width;var a=r;if(" "!=s.substr(r,1)){for(;" "!=s.substr(r,1)&&0!=r;)r--;0==r&&(r=a),o=s.substr(0,r)}s=s.substr(r),n=t.measureText(s).width,d.push(o)}0<n&&d.push(s)}});var p=this.getTextHeight(e,this.font,this.textSize);this.lineHeight&&(p=this.lineHeight);var c=p*(d.length-1);a-=c/2,d.forEach(function(e){t.fillText(e,f,a),s.strokeStyle&&0<s.lineWidth&&t.strokeText(e,f,a),a+=p}),this.debug&&(t.lineWidth=5,t.strokeStyle="yellow",t.strokeRect(l[0],l[1],l[2],l[3]),t.lineWidth=3,t.strokeStyle="red",t.beginPath(),t.moveTo(f,l[1]),t.lineTo(f,parseInt(l[1])+parseInt(l[3])),t.stroke())},getTextHeight:function(t,e){var n,r=document.createElement("div");return r.style.cssText="position:fixed;padding:0;left:-9999px;top:-9999px;font:"+e+";font-size:"+this.textSize+"px",r.textContent=t,document.body.appendChild(r),n=parseInt(getComputedStyle(r).getPropertyValue("height"),10),document.body.removeChild(r),n}};e.default=r}])});