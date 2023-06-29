"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{7594:function(t,e,n){n.d(e,{A:function(){return i}});var r=[{id:"1",title:"Start page 1",start:"09:00",end:"09:30",priority:"low",date:"2023-06-12",category:"to-do"},{id:"2",title:"Start page 2",start:"09:02",end:"09:32",priority:"medium",date:"2023-06-10",category:"in-progress"},{id:"3",title:"Start page 3",start:"09:03",end:"09:33",priority:"high",date:"2023-06-09",category:"done"},{id:"4",title:"Start page 4",start:"09:04",end:"09:34",priority:"low",date:"2023-06-23",category:"to-do"},{id:"5",title:"Start page 5",start:"09:05",end:"09:35",priority:"medium",date:"2023-06-30",category:"in-progress"},{id:"6",title:"Start page 6",start:"09:06",end:"09:36",priority:"high",date:"2023-06-06",category:"done"},{id:"7",title:"Start page 1",start:"09:00",end:"09:30",priority:"low",date:"2023-06-19",category:"to-do"},{id:"8",title:"Start page 2",start:"09:02",end:"09:32",priority:"medium",date:"2023-06-24",category:"in-progress"},{id:"9",title:"Start page 3",start:"09:03",end:"09:33",priority:"high",date:"2023-06-22",category:"done"},{id:"10",title:"Start page 4",start:"09:04",end:"09:34",priority:"low",date:"2023-05-24",category:"to-do"},{id:"11",title:"Start page 5",start:"09:05",end:"09:35",priority:"medium",date:"2023-05-12",category:"in-progress"},{id:"12",title:"Start page 6",start:"09:06",end:"09:36",priority:"high",date:"2023-07-24",category:"done"}],i=function(){return r}},4132:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var r,i,a,d,o,l,s=n(9439),u=n(3216),p=n(9365),c=n(3629),f=n(5719),h=n(4565),x=n(4888),g=n(5375),w=n(1951),y=n(4690),m=n(8347),v=n(786),b=n(7689),j=n(3924),k=n(2791),F=n(7594),Z=n(168),M=n(6444),S=n(6656),D=n(1662),E={tablet:"@media screen and (min-width: ".concat(S.A.tablet,")"),desktop:"@media screen and (min-width: ".concat(S.A.desktop,")")},z=M.ZP.ul(r||(r=(0,Z.Z)(["\nposition: relative;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-right: 1px solid #ddd;\nborder-bottom: 1px solid #ddd;\nborder-radius: 8px;\n  "," {\n    width: 1087px;\n}\n"])),E.desktop),T=M.ZP.li(i||(i=(0,Z.Z)(["\nbackground-color: ",";\n  position: relative;\n  width: calc(100% / 7);\n  cursor: pointer;\n  height: 94px;\n  &::before {\n  content: ' ';\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #ddd;\n};\n&::after {\n  content: ' ';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #ddd;\n};\n  "," {\n    height: 144px;\n}\n  "," {\n    height: 125px;\n}\n"])),D.z7.white,E.tablet,E.desktop),L=M.ZP.div(a||(a=(0,Z.Z)(["\n position: absolute;\n  top: 8px;\n  right: 4px;\n  padding: 4px 6px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 14px;\n  text-transform: uppercase;\n  text-align: center;\n  border-radius: 8px;\n    "," {\n    top: 14px;\n  right: 14px;\n  font-size: 16px;\n  line-height: 18px;\n}\n"])),E.tablet),A=M.ZP.div(d||(d=(0,Z.Z)(["\nposition: absolute;\ntop: 48px;\nleft: 2px;\nwidth: 44px;\nborder-radius: 8px;\nfont-size: 10px;\nfont-weight: 700;\nline-height: 14px;\nbackground-color: yellow;\nfont-size: 10px;\nfont-weight: 700;\nline-height: 14px;\n"," {\n width: 92px;  \n top: 58px;\nleft: 4px; \nfont-size: 14px;\nline-height: 18px;\n}\n"," {\n width: 139px;  \nleft: 8px; \n}\n"])),E.tablet,E.desktop),P=n(3329),H=function(){var t=(0,b.bx)(),e=t.setPeriodType,n=t.setCurrentDate,r=(0,b.UO)().currentDate,i=(0,u.default)(r,"d-MMM-yyyy",new Date),a=(0,p.Z)({start:(0,c.default)((0,f.default)(i),{weekStartsOn:1}),end:(0,h.default)((0,x.default)(i),{weekStartsOn:1})}),d=function(t){(0,g.default)((0,u.default)(t.currentTarget.dataset.date,"d-MMM-yyyy",new Date),i)&&((0,j.uX)("../day/".concat(t.currentTarget.dataset.date),{replace:!0}),e("day"),n((0,u.default)(t.currentTarget.dataset.date,"d-MMMM-yyyy",new Date)))},o=(0,k.useState)([]),l=(0,s.Z)(o,2),Z=l[0],M=l[1];(0,k.useEffect)((function(){var t=(0,F.A)().filter((function(t){return(0,g.default)(new Date(t.date),new Date(r))}));M(t)}),[r]);var S=(0,k.useState)(window.innerWidth),D=(0,s.Z)(S,2),E=D[0],H=D[1];(0,k.useEffect)((function(){var t=function(){H(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[E]);var N=function(t){var e=t.text,n=t.maxLength;if(e.length<=n)return(0,P.jsx)("span",{children:e});var r=e.substring(0,n)+"...";return(0,P.jsx)("span",{title:e,children:r})};return(0,P.jsx)(z,{children:a.map((function(t,e){return(0,P.jsxs)(T,{"data-date":(0,w.default)(t,"d-MMM-yyyy"),onClick:d,className:"calendar-table-item",children:[(0,g.default)(t,i)&&(0,P.jsx)(L,{style:{color:(0,y.default)(t,i)?"#FFFFFF":"#343434",backgroundColor:(0,y.default)(t,i)?"#3E85F3":"#FFFFFF"},children:(0,w.default)(t,"d")}),(0,P.jsxs)("div",{children:[E<768&&(0,P.jsx)(A,{children:Z.filter((function(e){return new Date(e.date)>=(0,m.default)(t)&&new Date(e.date)<=(0,v.default)(t)})).map((function(t){return(0,P.jsx)("div",{children:(0,P.jsx)(N,{text:t.title,maxLength:4})},t.id)}))}),E>=768&&E<1440&&(0,P.jsx)(A,{children:Z.filter((function(e){return new Date(e.date)>=(0,m.default)(t)&&new Date(e.date)<=(0,v.default)(t)})).map((function(t){return(0,P.jsx)("div",{children:(0,P.jsx)(N,{text:t.title,maxLength:5})},t.id)}))}),E>=1440&&(0,P.jsx)(A,{children:Z.filter((function(e){return new Date(e.date)>=(0,m.default)(t)&&new Date(e.date)<=(0,v.default)(t)})).map((function(t){return(0,P.jsx)("div",{children:(0,P.jsx)(N,{text:t.title,maxLength:10})},t.id)}))})]})]},(0,w.default)(t,"d-MMM-yyyy"))}))})},N={tablet:"@media screen and (min-width: ".concat(S.A.tablet,")"),desktop:"@media screen and (min-width: ".concat(S.A.desktop,")")},W=M.ZP.ul(o||(o=(0,Z.Z)(["\ndisplay: flex;\nwidth: 335px;\nheight: 50px;\nflex-shrink: 0;\nborder-radius: 8px;\nborder: 1px solid ",";\nbackground: ",";\nposition: relative;\ngap: 36px;\npadding: 16px;\nmargin-bottom: 14px;\n"," {\nwidth: 704px;\nheight: 46px; \nmargin-bottom: 18px;\ngap: 65px;\npadding: 14px 40px;\n}\n"," {\nwidth: 1087px; \nmargin-bottom: 15px;\npadding: 14px 60px;\ngap: 122px;\n"])),D.z7.grey,D.z7.white,N.tablet,N.desktop),C=M.ZP.li(l||(l=(0,Z.Z)(["\nfont-size: 16px;\nfont-weight: 600;\nline-height: 18px;\ntext-transform: uppercase;\n"]))),O=function(){var t=(0,k.useState)(window.innerWidth),e=(0,s.Z)(t,2),n=e[0],r=e[1];return(0,k.useEffect)((function(){var t=function(){r(window.innerWidth)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[n]),(0,P.jsxs)(P.Fragment,{children:[" ",n<768?(0,P.jsxs)(W,{children:[(0,P.jsx)(C,{children:"M"}),(0,P.jsx)(C,{children:"T"}),(0,P.jsx)(C,{children:"W"}),(0,P.jsx)(C,{children:"T"}),(0,P.jsx)(C,{children:"F"}),(0,P.jsx)(C,{style:{color:"#3E85F3"},children:"S"}),(0,P.jsx)(C,{style:{color:"#3E85F3"},children:"S"})]}):(0,P.jsxs)(W,{children:[(0,P.jsx)(C,{children:"MON"}),(0,P.jsx)(C,{children:"TUE"}),(0,P.jsx)(C,{children:"WED"}),(0,P.jsx)(C,{children:"THU"}),(0,P.jsx)(C,{children:"FRI"}),(0,P.jsx)(C,{style:{color:"#3E85F3"},children:"SAT"}),(0,P.jsx)(C,{style:{color:"#3E85F3"},children:"SUN"})]})]})},U=function(){return(0,P.jsxs)("div",{children:[(0,P.jsx)(O,{}),(0,P.jsx)(H,{})]})}},9365:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(8527),i=n(4522);function a(t,e){var n;(0,i.Z)(1,arguments);var a=t||{},d=(0,r.default)(a.start),o=(0,r.default)(a.end).getTime();if(!(d.getTime()<=o))throw new RangeError("Invalid interval");var l=[],s=d;s.setHours(0,0,0,0);var u=Number(null!==(n=null===e||void 0===e?void 0:e.step)&&void 0!==n?n:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=o;)l.push((0,r.default)(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return l}},786:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(8527),i=n(4522);function a(t){(0,i.Z)(1,arguments);var e=(0,r.default)(t);return e.setHours(23,59,59,999),e}},4888:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(8527),i=n(4522);function a(t){(0,i.Z)(1,arguments);var e=(0,r.default)(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}},5375:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(8527),i=n(4522);function a(t,e){(0,i.Z)(2,arguments);var n=(0,r.default)(t),a=(0,r.default)(e);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}},5719:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var r=n(8527),i=n(4522);function a(t){(0,i.Z)(1,arguments);var e=(0,r.default)(t);return e.setDate(1),e.setHours(0,0,0,0),e}}}]);
//# sourceMappingURL=132.8a17ad27.chunk.js.map