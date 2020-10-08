(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(4),n=a.n(r),o=(a(11),a(12),a(2)),m=a.n(o),p=a(5),u=a(1),i=a(0),d=i.useEffect,l=i.useState;var h=function(e){var t=l(!1),a=Object(u.a)(t,2),c=a[0],s=a[1];return d((function(){var t=function(t){t.key===e&&(s(!0),setTimeout((function(){s(!1)}),100))};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[]),c};function f(e){var t=e.button,a=e.audioSrc,r=e.buttonId,n=e.power,o=e.setDescribe,m=e.volume,p=h(t.toUpperCase()),u=h(t.toLowerCase()),i=function(e){e.classList.toggle("drum-pad-active"),function(e){o(e.id),e.children[0].volume=.01*m,e.children[0].play()}(e),setTimeout((function(){e.classList.toggle("drum-pad-active")}),100)},d=function(){var e=document.getElementById(r);n?i(e):function(e){e.classList.toggle("drum-pad-pressed"),setTimeout((function(){e.classList.toggle("drum-pad-pressed")}),100)}(e)};return Object(c.useEffect)(d,[p,u]),s.a.createElement("div",{className:"drum-pad",id:r,onClick:function(){d()}},s.a.createElement("audio",{className:"clip",id:t,src:a}),t)}var b=function(e){var t=e.setDescribe,a=e.power,c=e.volume,r=e.piano;return console.log("rendering"),console.log(r),s.a.createElement("div",{className:"buttons"},[{button:"Q",type:"Heater-1",type2:"Chord-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{button:"W",type:"Heater-2",type2:"Chord-2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{button:"E",type:"Heater-3",type2:"Chord-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{button:"A",type:"Heater-4",type2:"Shaker",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{button:"S",type:"Clap",type2:"Open-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{button:"D",type:"Open-HH",type2:"Closed-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{button:"Z",type:"Kick-n'-Hat",type2:"Punchy-Kick",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{button:"X",type:"Kick",type2:"Side-Stick",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",src2:'src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"'},{button:"C",type:"Closed-HH",type2:"Snare",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",src2:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}].map((function(e,n){return s.a.createElement(f,{setDescribe:t,key:n,button:e.button,audioSrc:r?e.src2:e.src,buttonId:r?e.type2:e.type,power:a,volume:c})})))};var v=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!0),o=Object(u.a)(n,2),i=o[0],d=o[1],l=Object(c.useState)(50),h=Object(u.a)(l,2),f=h[0],v=h[1],w=Object(c.useState)(!1),y=Object(u.a)(w,2),E=y[0],k=y[1],H=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=4;break}return e.next=3,k(!E);case 3:r(E?"Heater Kit":"SmoothPiano Kit");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("div",{id:"drum-machine"},s.a.createElement("div",{id:"display"},s.a.createElement(b,{className:"buttons",setDescribe:r,power:i,volume:f,piano:E}),s.a.createElement("div",{className:"others"},s.a.createElement("div",{className:"switch"},s.a.createElement("label",{className:"switch",value:"Power"},s.a.createElement("input",{type:"checkbox",checked:i,onChange:function(){return d((function(e){return!e}))}}),s.a.createElement("span",{className:"slider"}),s.a.createElement("div",{className:"label-text"},"Power"))),s.a.createElement("div",{className:"descirbe"},a),s.a.createElement("div",{className:"slider-range"},s.a.createElement("input",{type:"range",className:"range",step:"1",max:"100",min:"0",defaultValue:f,onChange:function(e){var t=parseInt(e.target.value,10);v(t),r("Volume: ".concat(t))}})),s.a.createElement("div",{className:"switch"},s.a.createElement("label",{className:"switch"},s.a.createElement("input",{type:"checkbox",checked:E,onChange:H}),s.a.createElement("span",{className:"slider"}),s.a.createElement("div",{className:"label-text"},"Bank"))))))};var w=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null))};n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.3a6d9d8d.chunk.js.map