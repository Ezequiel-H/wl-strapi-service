"use strict";(self.webpackChunkwl_strapi_service=self.webpackChunkwl_strapi_service||[]).push([[4757],{14757:(k,M,s)=>{s.r(M),s.d(M,{default:()=>p});var t=s(92132),O=s(21272),T=s(94061),R=s(90151),c=s(68074),P=s(43739),h=s(95336),B=s(42455),W=s(38413),I=s(55356),U=s(85963),K=s(4198),E=s(2129),j=s(46270),m=s(54514),x=s(56336),d=s(33544),u=s(54894),a=s(39663),S=s(88761),N=s(2600),z=s(48940),w=s(98908),q=s(5409),ss=s(74930),ts=s(61535),is=s(12083),as=s(40495),es=s(50837),ns=s(77965);const v=({sort:n="",pageSize:_=10,onChange:e})=>{const{formatMessage:o}=(0,u.A)();return(0,t.jsx)(T.a,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(R.x,{gap:4,children:[(0,t.jsx)(c.E,{s:12,col:6,children:(0,t.jsx)(P.l,{label:o({id:(0,a.g)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,a.g)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:i=>e({target:{name:"pageSize",value:i}}),name:"pageSize",value:_,children:a.C.map(i=>(0,t.jsx)(h.c,{value:i,children:i},i))})}),(0,t.jsx)(c.E,{s:12,col:6,children:(0,t.jsx)(P.l,{label:o({id:(0,a.g)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,a.g)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:i=>e({target:{name:"sort",value:i}}),name:"sort",value:n,"test-sort":n,"data-testid":"sort-select",children:a.D.map(i=>(0,t.jsx)(h.c,{"data-testid":`sort-option-${i.value}`,value:i.value,children:o({id:(0,a.g)(i.key),defaultMessage:`${i.value}`})},i.key))})})]})})};v.propTypes={sort:d.string.isRequired,pageSize:d.number.isRequired,onChange:d.func.isRequired};const C=`${a.p}/ON_CHANGE`,f=`${a.p}/SET_LOADED`,$=({name:n,value:_})=>({type:C,keys:n,value:_}),b=()=>({type:f}),r={initialData:{},modifiedData:{}},A=n=>({...r,initialData:n,modifiedData:n}),G=(n=r,_)=>(0,S.Ay)(n,e=>{switch(_.type){case C:{z(e,["modifiedData",..._.keys.split(".")],_.value);break}case f:{const o=A(N(e,["modifiedData"],{}));e.initialData=o.initialData,e.modifiedData=o.modifiedData;break}default:return e}}),p=({config:n})=>{const{trackUsage:_}=(0,E.z1)(),{formatMessage:e}=(0,u.A)(),o=(0,E.hN)(),{mutateConfig:i}=(0,a.z)(),{isLoading:y}=i,[H,F]=(0,O.useState)(!1),D=()=>F(g=>!g),[Q,L]=(0,O.useReducer)(G,r,()=>A(n)),{initialData:V,modifiedData:l}=Q,Y=g=>{g.preventDefault(),D()},J=async()=>{_("willEditMediaLibraryConfig"),await i.mutateAsync(l),D(),L(b()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},X=({target:{name:g,value:Z}})=>{L($({name:g,value:Z}))};return(0,E.L4)(),(0,t.jsx)(B.P,{children:(0,t.jsx)(W.g,{"aria-busy":y,children:(0,t.jsxs)("form",{onSubmit:Y,children:[(0,t.jsx)(I.Q,{navigationAction:(0,t.jsx)(E.N_,{startIcon:(0,t.jsx)(j.A,{}),to:`/plugins/${a.p}`,id:"go-back",children:e({id:(0,a.g)("config.back"),defaultMessage:"Back"})}),primaryAction:(0,t.jsx)(U.$,{size:"S",startIcon:(0,t.jsx)(m.A,{}),disabled:x(l,V),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,a.g)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:e({id:(0,a.g)("config.title"),defaultMessage:"Configure the view - Media Library"})}),(0,t.jsx)(K.s,{children:(0,t.jsx)(v,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:X})}),(0,t.jsx)(E.TM,{bodyText:{id:(0,a.g)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:(0,t.jsx)(m.A,{}),isConfirmButtonLoading:y,isOpen:H,onToggleDialog:D,onConfirm:J,variantRightButton:"success-light"})]})})})};p.propTypes={config:d.shape({pageSize:d.number,sort:d.string}).isRequired}}}]);
