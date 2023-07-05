"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{1923:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var i,r,a,o,d,l,s,p,c,x,u,h,m,f,g,b,v,y,j=t(9439),Z=t(1413),w=t(4925),D=t(5705),F=t(9126),k=t(168),C=t(6444),R=t(1662),z=C.ZP.div(i||(i=(0,k.Z)(["\n  position: relative;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 354px;\n  flex: 1;\n  display: flex;\n"]))),P=(0,C.ZP)(D.gN)(r||(r=(0,k.Z)(["\n  padding: 12px 14px;\n  border-radius: 8px;\n  outline: none;\n  font-size: 14px;\n\n  @media (min-width: 768px) {\n    padding: 14px 18px;\n    font-size: 16px;\n  }\n"]))),I=C.ZP.label(a||(a=(0,k.Z)(["\n  font-size: 12px;\n  color: ",";\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),R.lB.label),B=C.ZP.div(o||(o=(0,k.Z)(["\n  position: absolute;\n  right: 18px;\n\n  top: ",";\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n"])),(function(n){return n.error?"42%":"50%"})),S=C.ZP.div(d||(d=(0,k.Z)(["\n  p {\n    margin-left: 14px;\n    font-size: 12px;\n\n    @media (min-width: 768px) {\n      margin-left: 18px;\n    }\n  }\n"]))),U=C.ZP.p(l||(l=(0,k.Z)(["\n  color: red;\n  font-size: 12px;\n"]))),M=(C.ZP.p(s||(s=(0,k.Z)(["\n  color: green;\n"]))),t(3329)),L=["label","name","setIsFormDirty"],T=function(n){var e=n.label,t=n.name,i=n.setIsFormDirty,r=(0,w.Z)(n,L),a=(0,D.U$)(t),o=(0,j.Z)(a,2),d=o[0],l=o[1],s=l.touched&&l.error,p=l.touched&&!l.error&&""!==l.value,c=s?"red":p?"green":"default-color";return(0,M.jsxs)(z,{children:[(0,M.jsx)(I,{htmlFor:t,style:{color:c},children:e}),(0,M.jsx)(P,(0,Z.Z)((0,Z.Z)((0,Z.Z)({},d),r),{},{placeholder:"Your ".concat(t),style:{borderColor:c},onChange:function(n){d.onChange(n),i(!0)}})),(0,M.jsxs)(S,{children:[s&&(0,M.jsx)(D.Bc,{children:l.error}),(0,M.jsx)(D.Bc,{name:t,component:U})]}),(0,M.jsx)(B,{error:s,children:s?(0,M.jsx)(F.o86,{color:"red"}):p&&(0,M.jsx)(F.nRB,{color:"green"})})]})},_=(0,C.ZP)(D.l0)(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  margin: 40px auto 0 auto;\n  background-color: ",";\n  color: ",";\n\n  border-radius: 16px;\n  padding: 18px;\n  padding-bottom: 40px;\n\n  input {\n    color: ",";\n    background-color: transparent;\n    border: 1px solid ",";\n\n    :focus {\n      border: 1px solid ",";\n    }\n  }\n"])),R.lB.secondBackground,R.lB.main,R.lB.main,R.lB.borderColor,R.lB.main),O=C.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  margin: 0 auto;\n  gap: 18px;\n\n  @media (max-width: 1440px) {\n    flex-direction: column;\n    max-width: 354px;\n    width: 100%;\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n    }\n  }\n\n  @media (min-width: 1439px) {\n    flex-direction: row;\n    align-items: start;\n    gap: 50px;\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n      width: 100%;\n      justify-content: center;\n      width: 354px;\n    }\n  }\n"]))),V=C.ZP.div(x||(x=(0,k.Z)(["\n  text-align: center;\n\n  p {\n    margin-top: 40px;\n    @media (min-width: 768px) {\n      margin-top: 20px;\n    }\n  }\n\n  p:last-child {\n    margin-top: 4px;\n    @media (min-width: 768px) {\n      margin-top: 8px;\n    }\n  }\n"]))),q=t(8007),A=function(n){var e=new Date(n),t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getFullYear());return"".concat(t,"/").concat(i,"/").concat(r)},E=q.Ry().shape({avatarURL:q.nK().test("fileType","Invalid file format",(function(n){if(!n)return!0;return["image/jpeg","image/png"].includes(n.type)})).test("fileSize","The file is too large",(function(n){return!n||n.size<5e5})),name:q.Z_().min(2,"Too short!").max(16,"Too long!").required("Required"),birthday:q.Z_().matches(/^((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/\d{4})$/,"Invalid date of birth").test("max-date","Date of birth cannot be in the future",(function(n){var e=new Date(function(n){var e=n.split("/"),t=parseInt(e[0],10),i=parseInt(e[1],10)-1,r=parseInt(e[2],10);return new Date(r,i,t)}(n));return!n||e<=new Date})),email:q.Z_().email("This is an ERROR email").required("Required"),phone:q.Z_().matches(/^\+?\d{1,3}\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,"This is an ERROR phone"),skype:q.Z_().min(2,"Too short!").max(16,"Too long!")}),J=t(2791),N=t(8820),$=C.ZP.button(u||(u=(0,k.Z)(["\n  background-color: ",";\n  outline: none;\n  border: none;\n  padding: 3px;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 8px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  position: absolute;\n  bottom: -4px;\n  right: 22px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    bottom: -25px;\n    right: -22px;\n  }\n"])),R.Is.blue),Y=C.ZP.div(h||(h=(0,k.Z)(["\n  margin: 0 auto;\n  position: relative;\n  width: 0px;\n  height: 0px;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"]))),H=C.ZP.img(m||(m=(0,k.Z)(["\n  max-width: none;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    top: -50px;\n    left: -35px;\n  }\n\n  object-fit: cover;\n  border-radius: 72px;\n  border: 2px solid #3e85f3;\n  width: 72px;\n  height: 72px;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"]))),K=function(n){var e,t=n.avatar,i=n.file,r=n.setFieldValue,a=n.setIsFormDirty,o=(0,J.useState)(void 0),d=(0,j.Z)(o,2),l=d[0],s=d[1],p=(0,J.useRef)(null);return(0,J.useEffect)((function(){if(i){var n=new FileReader;n.onloadend=function(){s(n.result)},n.readAsDataURL(i)}}),[i]),e=t.match(/^https:\/\/.*/)?"".concat(t):"https://".concat(t),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(Y,{children:[(0,M.jsx)(H,{src:i?l:e,alt:"avatar"}),(0,M.jsx)("input",{ref:p,id:"avatar",name:"avatar",type:"file",onChange:function(n){r("avatarURL",n.currentTarget.files[0]),a(!0)},style:{display:"none"}}),(0,M.jsx)("div",{children:(0,M.jsx)($,{type:"button",onClick:function(){return p.current.click()},children:(0,M.jsx)(N.Lfi,{color:"white"})})})]}),(0,M.jsx)(D.Bc,{name:"avatarURL",component:U})]})},G=t(9513),Q=t.n(G),W=(t(8639),t(2599)),X=t(3747),nn=C.ZP.div(f||(f=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 354px;\n\n  input {\n    width: 100%;\n    padding: 12px 14px;\n    border-radius: 8px;\n    outline: none;\n\n    font-size: 14px;\n\n    :focus {\n      border: 1px solid #111;\n    }\n\n    @media (min-width: 768px) {\n      padding: 14px 18px;\n      font-size: 16px;\n    }\n\n    border-color: ",";\n  }\n\n  label {\n    color: ",";\n  }\n"])),(function(n){return n.color}),(function(n){return n.color})),en=C.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  gap: 6px;\n\n  select {\n    padding: 6px;\n    outline: none;\n    border: 1px solid #fff;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]))),tn=C.ZP.div(b||(b=(0,k.Z)(["\n  button {\n    display: flex;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n\n    font-size: 30px;\n\n    color: #fff;\n\n    font-weight: bold;\n    :hover {\n      color: #dce3e5cc;\n    }\n  }\n"]))),rn=C.ZP.div(v||(v=(0,k.Z)(["\n  pointer-events: ",";\n  cursor: pointer;\n\n  position: absolute;\n  right: 18px;\n\n  top: 35px;\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    top: 40px;\n    font-size: 18px;\n  }\n"])),(function(n){return n.isCalendarOpen?"auto":"none"})),an=t(6856),on=function(n){var e=n.value,t=n.name,i=n.setFieldValue,r=n.setIsFormDirty,a=(0,J.useState)(new Date),o=(0,j.Z)(a,2),d=o[0],l=o[1],s=(0,J.useState)(!1),p=(0,j.Z)(s,2),c=p[0],x=p[1],u=(0,D.U$)(t),h=(0,j.Z)(u,2)[1],m=h.touched&&h.error,f=h.touched&&!h.error;(0,J.useEffect)((function(){var n=new Date(e);l(n),i(t,A(n))}),[t,i,e]);var g=function(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=[],r=n;r<e;r+=t)i.push(r);return i}(1950,(0,W.default)(new Date)+1,1),b=["January","February","March","April","May","June","July","August","September","October","November","December"],v=m?"red":f?"green":"default-color";return(0,M.jsxs)(nn,{color:v,children:[(0,M.jsx)(I,{htmlFor:"birthday",children:"Birthday"}),(0,M.jsx)(Q(),{dateFormat:"dd/MM/yyyy",renderCustomHeader:function(n){var e=n.date,t=n.changeYear,i=n.changeMonth,r=n.decreaseMonth,a=n.increaseMonth,o=n.prevMonthButtonDisabled,d=n.nextMonthButtonDisabled;return(0,M.jsxs)(tn,{style:{margin:"10px 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,M.jsx)("button",{type:"button",onClick:r,disabled:o,children:(0,M.jsx)(an.D68,{})}),(0,M.jsxs)(en,{children:[(0,M.jsx)("select",{value:(0,W.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:g.map((function(n){return(0,M.jsx)("option",{value:n,children:n},n)}))}),(0,M.jsx)("select",{value:b[(0,X.default)(e)],onChange:function(n){var e=n.target.value;return i(b.indexOf(e))},children:b.map((function(n){return(0,M.jsx)("option",{value:n,children:n},n)}))})]}),(0,M.jsx)("button",{type:"button",onClick:a,disabled:d,children:(0,M.jsx)(an.sOJ,{})})]})},selected:d,onChange:function(n){n?(i("birthday",A(n)),l(n)):(i("birthday",""),l(null)),r(!0)},onCalendarOpen:function(){return x(!0)},onCalendarClose:function(){return x(!1)}}),(0,M.jsx)(S,{children:(0,M.jsx)(D.Bc,{name:t,component:U})}),(0,M.jsx)(rn,{isCalendarOpen:c,children:(0,M.jsx)(N.cuw,{color:v})})]})},dn=t(2610),ln=t(7834),sn=t(9434),pn=t(7432),cn=function(){var n=(0,ln.a)(),e=n.name,t=n.email,i=n.phone,r=n.birthday,a=n.skype,o=n.avatarURL,d=(0,J.useState)(!1),l=(0,j.Z)(d,2),s=l[0],p=l[1],c=(0,sn.I0)(),x={name:e||"",birthday:r||"",email:t||"",phone:i||"",skype:a||"",avatarURL:""};return(0,M.jsx)(M.Fragment,{children:e&&(0,M.jsx)(D.J9,{initialValues:x,validationSchema:E,onSubmit:function(n){var e=new FormData;for(var t in n)"avatarURL"===t?e.append(t,n[t]instanceof File?n[t]:o):e.append(t,n[t]);c((0,pn.Nq)(e)),p(!1)},onChange:function(){return p(!0)},children:function(n){var t=n.values,i=n.setFieldValue;return(0,M.jsxs)(_,{children:[(0,M.jsxs)(V,{children:[(0,M.jsx)(K,{avatar:o,file:t.avatarURL,setFieldValue:i,setIsFormDirty:p}),(0,M.jsx)("p",{children:e}),(0,M.jsx)("p",{children:"User"})]}),(0,M.jsxs)(O,{children:[(0,M.jsxs)("div",{children:[(0,M.jsx)(T,{setIsFormDirty:p,label:"User Name",name:"name"}),(0,M.jsx)(on,{value:r,name:"birthday",setFieldValue:i,setIsFormDirty:p}),(0,M.jsx)(T,{label:"Email",name:"email",type:"email",disabled:!0})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(T,{label:"Phone",name:"phone",type:"tel",setIsFormDirty:p}),(0,M.jsx)(T,{label:"Skype",name:"skype",setIsFormDirty:p})]})]}),(0,M.jsx)(dn.zx,{style:{cursor:s?"pointer":"auto",margin:"0 auto"},type:s?"submit":"button",disabled:!s,children:"Save changes"})]})}})})},xn=t(6656),un={tablet:"@media screen and (min-width: ".concat(xn.A.tablet,")"),desktop:"@media screen and (min-width: ".concat(xn.A.desktop,")")},hn=C.ZP.div(y||(y=(0,k.Z)(["\npadding-top: 64px;\n  padding-bottom: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n "," {\n    padding-top: 64px;\n    padding-bottom: 38px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n  "," {\n    padding-top: 33px;\n    padding-bottom: 32px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n"])),un.tablet,un.desktop),mn=function(){return(0,M.jsx)(hn,{children:(0,M.jsx)(cn,{})})}}}]);
//# sourceMappingURL=923.23408cb8.chunk.js.map