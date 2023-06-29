"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{1093:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r,i,o,a,d,s,l,p,u,x,c,h,m,f,g,b,v,y=t(7762),j=t(9439),Z=t(1413),w=t(4925),F=t(5705),D=t(9126),k=t(168),C=t(6444),P=C.ZP.div(r||(r=(0,k.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 354px;\n  flex: 1;\n"]))),z=(0,C.ZP)(F.gN)(i||(i=(0,k.Z)(["\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(17, 17, 17, 0.1);\n  outline: none;\n  background-color: #fff;\n\n  font-size: 14px;\n\n  :focus {\n    border: 1px solid #111;\n  }\n\n  @media (min-width: 768px) {\n    padding: 14px 18px;\n    font-size: 16px;\n  }\n"]))),R=C.ZP.label(o||(o=(0,k.Z)(["\n  font-size: 12px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),I=C.ZP.div(a||(a=(0,k.Z)(["\n  position: absolute;\n  right: 18px;\n\n  top: ",";\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n"])),(function(n){return n.error?"42%":"50%"})),S=C.ZP.div(d||(d=(0,k.Z)(["\n  p {\n    margin-left: 14px;\n    font-size: 12px;\n\n    @media (min-width: 768px) {\n      margin-left: 18px;\n    }\n  }\n"]))),O=C.ZP.p(s||(s=(0,k.Z)(["\n  color: red;\n"]))),M=(C.ZP.p(l||(l=(0,k.Z)(["\n  color: green;\n"]))),t(3329)),T=["label","name","setIsFormDirty"],_=function(n){var e=n.label,t=n.name,r=n.setIsFormDirty,i=(0,w.Z)(n,T),o=(0,F.U$)(t),a=(0,j.Z)(o,2),d=a[0],s=a[1],l=s.touched&&s.error,p=s.touched&&!s.error&&""!==s.value,u=l?"red":p?"green":"default-color";return(0,M.jsxs)(P,{children:[(0,M.jsx)(R,{htmlFor:t,style:{color:u},children:e}),(0,M.jsx)(z,(0,Z.Z)((0,Z.Z)((0,Z.Z)({},d),i),{},{placeholder:"Your ".concat(t),style:{borderColor:u},onChange:function(n){d.onChange(n),r(!0)}})),(0,M.jsxs)(S,{children:[l&&(0,M.jsx)(F.Bc,{children:s.error}),(0,M.jsx)(F.Bc,{name:t,component:O})]}),(0,M.jsx)(I,{error:l,children:l?(0,M.jsx)(D.o86,{color:"red"}):p&&(0,M.jsx)(D.nRB,{color:"green"})})]})},q=(0,C.ZP)(F.l0)(p||(p=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  margin: 40px auto 0 auto;\n  background-color: #fff;\n\n  border-radius: 16px;\n  padding: 18px;\n  padding-bottom: 40px;\n"]))),B=C.ZP.div(u||(u=(0,k.Z)(["\n  display: flex;\n  margin: 0 auto;\n  gap: 18px;\n\n  @media (max-width: 1144px) {\n    flex-direction: column;\n    max-width: 354px;\n    width: 100%;\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n    }\n  }\n\n  @media (min-width: 1144px) {\n    flex-direction: row;\n    align-items: start;\n    gap: 50px;\n\n    > div {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n      width: 100%;\n      justify-content: center;\n      width: 354px;\n    }\n  }\n"]))),U=C.ZP.div(x||(x=(0,k.Z)(["\n  text-align: center;\n\n  p {\n    margin-top: 40px;\n    @media (min-width: 768px) {\n      margin-top: 20px;\n    }\n  }\n\n  p:last-child {\n    margin-top: 4px;\n    @media (min-width: 768px) {\n      margin-top: 8px;\n    }\n  }\n"]))),V=t(8007),J=V.Ry().shape({avatar:V.nK(),username:V.Z_().min(2,"Too short!").max(16,"Too long!").required("Required"),birthday:V.Z_().matches(/^\d{4}-\d{2}-\d{2}$/,"Invalid date of birth").test("max-date","Date of birth cannot be in the future",(function(n){return!n||new Date(n)<=new Date})).required("Required"),email:V.Z_().email("This is an ERROR email").required("Required"),phone:V.Z_().matches(/^\+?\d{1,3}\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,"This is an ERROR phone").required("Required"),skype:V.Z_().min(2,"Too short!").max(16,"Too long!")}),E=t(2791),$=t(8820),A=t(1662),L=C.ZP.button(c||(c=(0,k.Z)(["\n  background-color: ",";\n  outline: none;\n  border: none;\n  padding: 3px;\n  border-radius: 50%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 8px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  position: absolute;\n  bottom: -4px;\n  right: 22px;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    bottom: -25px;\n    right: -22px;\n  }\n"])),A.Is.blue),N=C.ZP.div(h||(h=(0,k.Z)(["\n  margin: 0 auto;\n  position: relative;\n  width: 0px;\n  height: 0px;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"]))),Y=C.ZP.img(m||(m=(0,k.Z)(["\n  max-width: none;\n\n  @media (max-width: 768px) {\n    position: absolute;\n    top: -50px;\n    left: -35px;\n  }\n\n  object-fit: cover;\n  border-radius: 72px;\n  border: 2px solid #3e85f3;\n  width: 72px;\n  height: 72px;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"]))),H=function(n){var e=n.avatar,t=n.file,r=n.setFieldValue,i=n.setIsFormDirty,o=(0,E.useState)(void 0),a=(0,j.Z)(o,2),d=a[0],s=a[1],l=(0,E.useRef)(null);return(0,E.useEffect)((function(){if(t){var n=new FileReader;n.onloadend=function(){s(n.result)},n.readAsDataURL(t)}}),[t]),(0,M.jsxs)(N,{children:[(0,M.jsx)(Y,{src:t?d:"https://".concat(e),alt:"avatar"}),(0,M.jsx)("input",{ref:l,id:"avatar",name:"avatar",type:"file",onChange:function(n){r("avatar",n.currentTarget.files[0]),i(!0)},style:{display:"none"}}),(0,M.jsx)("div",{children:(0,M.jsx)(L,{type:"button",onClick:function(){return l.current.click()},children:(0,M.jsx)($.Lfi,{color:"white"})})})]})},K=t(9513),G=t.n(K),Q=(t(8639),t(2599)),W=t(3747),X=C.ZP.div(f||(f=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-width: 354px;\n\n  input {\n    width: 100%;\n    padding: 12px 14px;\n    border-radius: 8px;\n    border: 1px solid rgba(17, 17, 17, 0.1);\n    outline: none;\n\n    font-size: 14px;\n\n    :focus {\n      border: 1px solid #111;\n    }\n\n    @media (min-width: 768px) {\n      padding: 14px 18px;\n      font-size: 16px;\n    }\n\n    border-color: ",";\n  }\n\n  label {\n    color: ",";\n  }\n"])),(function(n){return n.color}),(function(n){return n.color})),nn=C.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  gap: 6px;\n\n  select {\n    padding: 6px;\n    outline: none;\n    border: 1px solid #fff;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]))),en=C.ZP.div(b||(b=(0,k.Z)(["\n  button {\n    display: flex;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n\n    font-size: 30px;\n\n    color: #fff;\n\n    font-weight: bold;\n    :hover {\n      color: #dce3e5cc;\n    }\n  }\n"]))),tn=C.ZP.div(v||(v=(0,k.Z)(["\n  pointer-events: ",";\n  cursor: pointer;\n\n  position: absolute;\n  right: 18px;\n\n  top: 35px;\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    top: 40px;\n    font-size: 18px;\n  }\n"])),(function(n){return n.isCalendarOpen?"auto":"none"})),rn=t(6856);var on=function(n){var e=n.name,t=n.setFieldValue,r=n.setIsFormDirty,i=(0,E.useState)(new Date),o=(0,j.Z)(i,2),a=o[0],d=o[1],s=(0,E.useState)(!1),l=(0,j.Z)(s,2),p=l[0],u=l[1],x=(0,F.U$)(e),c=(0,j.Z)(x,2)[1],h=c.touched&&c.error,m=c.touched&&!c.error;(0,E.useEffect)((function(){var n=new Date;d(n),t(e,n.toISOString().split("T")[0])}),[e,t]);var f=function(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[],i=n;i<e;i+=t)r.push(i);return r}(1950,(0,Q.default)(new Date)+1,1),g=["January","February","March","April","May","June","July","August","September","October","November","December"],b=h?"red":m?"green":"default-color";return(0,M.jsxs)(X,{color:b,children:[(0,M.jsx)(R,{htmlFor:"birthday",children:"Birthday"}),(0,M.jsx)(G(),{dateFormat:"dd/MM/yyyy",renderCustomHeader:function(n){var e=n.date,t=n.changeYear,r=n.changeMonth,i=n.decreaseMonth,o=n.increaseMonth,a=n.prevMonthButtonDisabled,d=n.nextMonthButtonDisabled;return(0,M.jsxs)(en,{style:{margin:"10px 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,M.jsx)("button",{type:"button",onClick:i,disabled:a,children:(0,M.jsx)(rn.D68,{})}),(0,M.jsxs)(nn,{children:[(0,M.jsx)("select",{value:(0,Q.default)(e),onChange:function(n){var e=n.target.value;return t(e)},children:f.map((function(n){return(0,M.jsx)("option",{value:n,children:n},n)}))}),(0,M.jsx)("select",{value:g[(0,W.default)(e)],onChange:function(n){var e=n.target.value;return r(g.indexOf(e))},children:g.map((function(n){return(0,M.jsx)("option",{value:n,children:n},n)}))})]}),(0,M.jsx)("button",{type:"button",onClick:o,disabled:d,children:(0,M.jsx)(rn.sOJ,{})})]})},selected:a,onChange:function(n){n?(t("birthday",n.toISOString().split("T")[0]),d(n)):(t("birthday",""),d(null)),r(!0)},onCalendarOpen:function(){return u(!0)},onCalendarClose:function(){return u(!1)}}),(0,M.jsx)(S,{children:(0,M.jsx)(F.Bc,{name:e,component:O})}),(0,M.jsx)(tn,{isCalendarOpen:p,children:(0,M.jsx)($.cuw,{color:b})})]})},an=t(2610),dn=t(7834),sn=function(){var n=(0,dn.a)(),e=n.name,t=n.email,r=n.phone,i=n.birthday,o=n.skype,a=n.avatarURL,d=(0,E.useState)(!1),s=(0,j.Z)(d,2),l=s[0],p=s[1],u={username:e||"",birthday:i||"",email:t||"",phone:r||"",skype:o||"",avatar:""};return(0,M.jsx)(M.Fragment,{children:e&&(0,M.jsx)(F.J9,{initialValues:u,validationSchema:J,onSubmit:function(n){var e=new FormData;for(var t in n)e.append(t,n[t]);var r,i=(0,y.Z)(e.entries());try{for(i.s();!(r=i.n()).done;){var o=r.value;console.log("".concat(o[0],", ").concat(o[1]))}}catch(a){i.e(a)}finally{i.f()}p(!1)},onChange:function(){return p(!0)},children:function(n){var t=n.values,r=n.setFieldValue;return(0,M.jsxs)(q,{children:[(0,M.jsxs)(U,{children:[(0,M.jsx)(H,{avatar:a,file:t.avatar,setFieldValue:r,setIsFormDirty:p}),(0,M.jsx)("p",{children:e}),(0,M.jsx)("p",{children:"User"})]}),(0,M.jsxs)(B,{children:[(0,M.jsxs)("div",{children:[(0,M.jsx)(_,{setIsFormDirty:p,label:"User Name",name:"username"}),(0,M.jsx)(on,{name:"birthday",setFieldValue:r,setIsFormDirty:p}),(0,M.jsx)(z,{name:"email",type:"email",disabled:!0})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)(_,{label:"Phone",name:"phone",type:"tel",setIsFormDirty:p}),(0,M.jsx)(_,{label:"Skype",name:"skype",setIsFormDirty:p})]})]}),(0,M.jsx)(an.zx,{style:{cursor:l?"pointer":"auto",margin:"0 auto"},type:l?"submit":"button",disabled:!l,children:"Save changes"})]})}})})},ln=function(){return(0,M.jsx)("div",{style:{padding:18,background:"#F7F6F9"},children:(0,M.jsx)(sn,{})})}}}]);
//# sourceMappingURL=93.91b30268.chunk.js.map