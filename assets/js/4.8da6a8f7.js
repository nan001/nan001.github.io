(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{378:function(t,n,i){},443:function(t,n,i){var e=i(0),r=i(1),a=i(47),s=[].slice,o=function(t){return function(n,i){var e=arguments.length>2,r=e?s.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,r)}:n,i)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:o(r.setTimeout),setInterval:o(r.setInterval)})},444:function(t,n,i){var e=i(19),r=Date.prototype,a=r.toString,s=r.getTime;"Invalid Date"!=String(new Date(NaN))&&e(r,"toString",(function(){var t=s.call(this);return t==t?a.call(this):"Invalid Date"}))},445:function(t,n,i){"use strict";i(378)},454:function(t,n,i){"use strict";i.r(n);i(443),i(444);var e={name:"dbg",props:{msg:String},mounted:function(){var t=document.getElementById("canvas"),n=t.getContext("2d"),i=function(){t.width=t.clientWidth,t.height=t.clientHeight};window.addEventListener("resize",i),i();for(var e=[],r={o:function(t,n,i,e,r){return{x:t,y:n,r:12*i,w:5*i,dx:e,dy:r,draw:function(n,i){this.x+=this.dx,this.y+=this.dy,n.beginPath(),n.arc(this.x+3*+Math.sin((50+t+i/10)/100),this.y+4*+Math.sin((45+t+i/10)/100),this.r,0,2*Math.PI,!1),n.lineWidth=this.w,n.strokeStyle="#fff",n.stroke()}}},x:function(t,n,i,e,r,a,s){return{x:t,y:n,s:20*i,w:5*i,r:s=s||0,dx:e,dy:r,dr:a,draw:function(n,i){this.x+=this.dx,this.y+=this.dy,this.r+=this.dr;var e=this,r=function(t,i,r,a,s,o){o=o||0,n.beginPath(),n.moveTo(-o+e.s/2*t,o+e.s/2*i),n.lineTo(-o+e.s/2*r,o+e.s/2*a),n.lineWidth=e.w,n.strokeStyle=s,n.stroke()};n.save(),n.translate(this.x+5*Math.sin((t+i/10)/100),this.y+2*Math.sin((10+t+i/10)/100)),n.rotate(this.r*Math.PI/180),r(-1,-1,1,1,"#fff"),r(1,-1,-1,1,"#fff"),n.restore()}}}},a=0;a<t.width;a++)for(var s=0;s<t.height;s++)if(1==Math.round(8e3*Math.random())){var o=(5*Math.random()+1)/10;1==Math.round(Math.random())?e.push(r.o(a,s,o,0,0)):e.push(r.x(a,s,o,0,0,(3*Math.random()-1)/10,360*Math.random()))}setInterval((function(){n.clearRect(0,0,t.width,t.height);var i=(new Date).getTime();for(var r in e)e[r].draw(n,i)}),10)}},r=(i(445),i(45)),a=Object(r.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("canvas",{attrs:{id:"canvas"}})])}],!1,null,"1289f2f8",null);n.default=a.exports}}]);