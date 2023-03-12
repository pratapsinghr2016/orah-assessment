var Ze=Object.defineProperty,Ke=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var fe=(n,t,r)=>t in n?Ze(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,C=(n,t)=>{for(var r in t||(t={}))tt.call(t,r)&&fe(n,r,t[r]);if(ge)for(var r of ge(t))nt.call(t,r)&&fe(n,r,t[r]);return n},U=(n,t)=>Ke(n,et(t));import{c as q,a as me,b as rt,W as it,l as ot,f as st,d as at,e as lt,s as l,j as e,g as o,N as ct,A as ne,u as dt,h as ht,F as j,B as re,T as ut,m as be,i as pt,P as gt,I as ft,k as ie,r as h,S as mt,D as bt,n as xt,o as yt,p as vt,q as St,t as Ct,R as xe,v as wt,w as kt,x as oe,y as It,z as $t,C as ye,E as B,G as Rt,H as Lt,J as Pt}from"./vendor.7d08c543.js";const Tt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};Tt();function $(n,t){return Math.floor(Math.random()*(t-n+1))+n}const At=n=>{const t=[];for(let r=0;r<n;r++)t.push(r);return t},Ft=n=>{let t=null;return function(...r){t&&clearInterval(t);const s=this;t=setTimeout(()=>{n.apply(s,r)},1e3)}},ve=(n,t,r)=>n.sort((s,i)=>r==="asc"&&s[t]<i[t]?-1:r==="asc"&&s[t]>i[t]?1:r==="dsc"&&s[t]>i[t]?-1:r==="dsc"&&s[t]<i[t]?1:0),G=n=>n.toLowerCase();function Se(n,t){return n.filter(({first_name:s,last_name:i})=>G(s).includes(G(t))||G(i).includes(G(t)))}const Bt=(n,t)=>{const r=n*t+(t===0?0:1),s=n*t+n+1;return[r,s]},O=["Alan","John","Brandon","Key","Branda","Morris","Carlos","Lee"],Ce=["Susan","Lucas","Shanti","Samuel","Jacob","Robert","Grace","Marry"],we=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];function Ot(n){return{id:n,first_name:O[$(0,O.length-1)],last_name:O[$(0,O.length-1)],age:$(4,16),gender:$(0,10)%2==0?"m":"f",parent:Ce[$(0,O.length-1)]+" "+Ce[$(0,O.length-1)],grade:we[$(0,we.length-1)],roll:"un-rolled"}}function zt(n){const t=At(n).map((s,i)=>Ot(i+1));return ve(t,"first_name","asc")}function ke(n){switch(n){case"present":return"#13943b";case"late":return"#f5a623";case"absent":return"#9b9b9b";case"un-rolled":return"#9c9fab";default:return"#13943b"}}function V({success:n,randomFailure:t}){return new Promise((r,s)=>{setTimeout(()=>{t&&Math.random()<.99||n?r():s({message:"Failed"})},$(2,10)*100)})}function se(n,t){return localStorage.setItem(n,JSON.stringify(t)),t}function _t(n,t){const r=z(n);return r||se(n,t)}function z(n){const t=localStorage.getItem(n);return t?JSON.parse(t):void 0}var x;(function(n){n.students="boardingware.students",n.rolls="boardingware.rolls"})(x||(x={}));const Ie=14;function Nt(n=10,t=0,r="first_name",s="asc",i=""){var p;const a=(p=z(x.students))!=null?p:[],d=i?a.filter(({roll:m})=>m===i):a,f=d==null?void 0:d.slice(n,t);return ve(f,r,s)}const R=(n,t)=>n.filter(({roll:r})=>r===t).length;async function Et(n){const t=z(x.students),r=R(t,"present"),s=R(t,"late"),i=R(t,"absent"),a=R(t,"un-rolled");try{return await V({randomFailure:!0}),{success:!0,total:Ie,students:t?Nt(n==null?void 0:n.limit,n==null?void 0:n.offset,n==null?void 0:n.sortByKey,n==null?void 0:n.sortOrder,n==null?void 0:n.filter):_t(x.students,zt(Ie)),counts:{total:t.length,present:r,late:s,absent:i,unRolled:a}}}catch(d){return{success:!1,error:d}}}async function Dt(n,t,r){var s;try{await V({randomFailure:!0});const i=(s=z(x.students))!=null?s:[],a=i.findIndex(({id:m})=>m===t);i[a]=n,se(x.students,i);const d=R(i,"present"),f=R(i,"late"),u=R(i,"absent"),p=R(i,"un-rolled");return{total:i.length,present:d,late:f,absent:u,unRolled:p}}catch(i){return{success:!1,error:i}}}async function Mt(){var n;try{await V({randomFailure:!0});const t=(n=z(x.students))!=null?n:[],r=t==null?void 0:t.filter(({roll:s})=>s!=="un-rolled");return se(x.rolls,r),{success:!0}}catch(t){return{success:!1,error:t}}}const Ht={response:{students:[],total:0,isComplete:!1},isLoading:!1,hasError:!1,counts:{total:0,present:0,late:0,absent:0,unRolled:0},rollsCreated:{success:!1}},J=q("students/fetchStudents",async n=>{try{return await Et(n)}catch(t){console.error("Err: ",t)}return[]}),$e=q("students/updateStudent",async n=>{const{newStudentIfo:t,studentId:r,defaultProps:s}=n;try{return await Dt(t,r,s)}catch(i){console.error("Err: ",i)}}),Re=q("students/saveRolls",async()=>{try{return await Mt()}catch(n){console.error("Err: ",n)}}),Le=me({name:"students",initialState:Ht,reducers:{returnToState(n,t){n.rollsCreated={success:!1}}},extraReducers(n){n.addCase(J.pending,(t,r)=>{t.isLoading=!0}).addCase(J.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.response={students:r==null?void 0:r.students,total:r==null?void 0:r.total,isComplete:!1},t.counts=C({},r.counts)}).addCase(J.rejected,(t,r)=>{t.isLoading=!1,t.hasError=!0}).addCase($e.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.counts=C({},r)}).addCase(Re.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.rollsCreated=C({},r)})}}),Ut=n=>n.students,{returnToState:qt}=Le.actions;var jt=Le.reducer;async function Gt(n){try{const t=z(x.rolls)||[];return await V({randomFailure:!0}),{success:!0,activities:t}}catch{return{success:!1,error:{}}}}const Vt={activities:[],isLoading:!1,hasError:!1},Q=q("activities/fetchActivities",async n=>{try{return await Gt(n)}catch(t){console.error("Err: ",t)}return[]}),Jt=me({name:"activities",initialState:Vt,reducers:{},extraReducers(n){n.addCase(Q.pending,(t,r)=>{t.isLoading=!0}).addCase(Q.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.activities=r.activities}).addCase(Q.rejected,(t,r)=>{t.isLoading=!1,t.hasError=!0})}}),Qt=n=>n.activities;var Wt=Jt.reducer;const Xt=rt({reducer:{students:jt,activities:Wt}}),c={neutral:{lighter:"#f5f5f5",base:"#cdcdcd"},dark:{lighter:"#979797",base:"#4e4e4e"},blue:{base:"#12d4fc",darker:"#039aba"},gray:{light:"#9c9fab"}},E=[30,20,16,14,12],Yt={u1:E[0]+"px",u2:E[1]+"px",u3:E[2]+"px",u4:E[3]+"px",u5:E[4]+"px"},y=4,v={u1:y+"px",u2:y*2+"px",u3:y*3+"px",u4:y*4+"px",u5:y*5+"px",u6:y*6+"px",u7:y*7+"px",u8:y*8+"px",u9:y*9+"px",u10:y*10+"px"},L={default:"5px",arc:"20px",rounded:"100%"},W={strong:600,mediumStrong:400,normal:500,light:300},Zt=it`
  body {
    margin: 0;
    background-color: ${c.neutral.lighter};
    font-size: ${Yt.u4};
    color: ${c.blue.darker};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;ot.add(st,at,lt);const Pe=()=>e(Te.Header,{children:o(Te.HeaderItems,{children:[e(ae,{to:"/",children:"Doc"}),e(ae,{to:"/staff/daily-care",children:"Daily Care"}),e(ae,{to:"/staff/activity",children:"Activity"})]})}),ae=n=>{const t=({isActive:r})=>({textDecoration:"none",fontWeight:700,fontSize:r?16:14,color:r?"#072744":"#fff",padding:"18px 20px 17px",backgroundColor:r?"#fff":c.blue.base,borderRadius:"5px"});return e(ct,{to:n.to,style:t,children:n.children})},Te={Header:l.header`
    display: flex;
    align-items: center;
    height: 58px;
    margin-bottom: 4rem;
    background-color: ${c.blue.base};
    color: #fff;
    border: 4px solid ${c.blue.base};
  `,HeaderItems:l.nav`
    display: flex;
    height: 100%;
  `};var Kt="/assets/avatar.c847999a.png",en="/assets/asc.0dc14351.svg",tn="/assets/dsc.f8437a02.svg",nn="/assets/asc-dark.ac60b140.svg",rn="/assets/dsc-dark.2a70b1c5.svg",on="/assets/search.ab7a9b01.svg",sn="/assets/male.d7747554.svg",an="/assets/female.a1b639e2.svg",ln="/assets/null.d526bb9b.svg",cn="/assets/logo.86676e74.png";const b={avatar:Kt,asc:en,dsc:tn,ascDark:nn,dscDark:rn,search:on,male:sn,female:an,nullIcon:ln,logo:cn},Ae=()=>e(D.Footer,{children:o(D.FooterItem,{children:[o(D.FooterItemContent,{children:[e("h1",{children:"Project"}),e("a",{href:"/",children:"Docs"}),e("a",{target:"_blank",href:"https://github.com/BoardingwareLtd/orah-engineering-test/tree/main/front-end",children:"Github"}),e("a",{target:"_blank",href:"https://www.orah.com/",children:"Organization"})]}),e(D.FooterItemContent,{style:{justifyContent:"center"},children:e(ne,{style:{width:100,height:100,border:"3.3px solid",padding:3},src:b.logo})}),o(D.FooterItemContent,{children:[e("h1",{children:"Author"}),e("a",{target:"_blank",href:"https://github.com/pratapsinghr2016",children:"Github"}),e("a",{target:"_blank",href:"https://hashnode.com/@iJustCode",children:"Blog"}),e("a",{target:"_blank",href:"https://www.linkedin.com/in/rajat-pratap-singh-sse/",children:"Linkedin"}),e("a",{href:"mailto:pratapsinghr2016@gmail.com",children:"Email"}),e("a",{href:"tel:+919877411556",children:"Phone"})]})]})}),D={Footer:l.footer`
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 100%;
    margin-top: 4.5rem;
    background-color: ${c.blue.base};
  `,FooterItem:l.section`
    color: #ffffff;
    display: flex;
    border: 2px solid;
    justify-content: space-evenly;
    width: 100%;
  `,FooterItemContent:l.div`
    display: flex;
    flex-direction: column;
    > h1 {
      line-height: 0;
    }
    > a {
      text-decoration: none;
      font-weight: 700;
      padding: 8px;
      font-size: 15px;
      line-height: 0.8;
      color: #072744;
    }
  `},le=({padding:n="60px",children:t})=>e(Fe.Container,{children:e(Fe.Centered,{padding:n,children:t})}),Fe={Container:l.div`
    display: flex;
  `,Centered:l.div`
    width: 100%;
    margin: ${v.u4} 0;
    padding: ${({padding:n})=>n};
    text-align: center;
  `},ce=dt,Be=ht,Oe=n=>{const{size:t=20,selectedRollType:r,rollMode:s,onClick:i}=n;let a={backgroundColor:ke(s),border:"2px solid"};return r===s&&(a=U(C({},a),{border:`4px solid ${c.blue.base}`})),e(dn.Avatar,{onClick:i,style:a,children:s==="un-rolled"?e("img",{src:b.nullIcon,width:"100%",height:"100%"}):e(j,{icon:"check",size:t>14?"lg":"sm"})})},dn={Avatar:l(ne)`
    cursor: pointer;
  `},hn=({stateList:n,size:t=14,onItemClick:r,selectedRollType:s})=>{const i=a=>{r&&r(a)};return e(_.ListContainer,{children:n.map((a,d)=>a.type==="all"?o(_.ListItem,{children:[o(_.ListItemDetail,{children:[e(_.Avatar,{style:{backgroundColor:c.blue.base,border:"2px solid",cursor:"not-allowed"},children:e(j,{icon:"users",size:"lg"})}),e("p",{children:a.count})]}),e("strong",{children:a.type})]},d):o(_.ListItem,{children:[o(_.ListItemDetail,{children:[e(Oe,{selectedRollType:s,rollMode:a.type,onClick:()=>i(a.type)}),e("p",{children:a.count})]}),e("strong",{children:a.type})]},d))})},_={ListContainer:l.div`
    display: flex;
    align-items: center;
  `,ListItem:l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: ${v.u4};
    p {
      font-weight: ${W.strong};
      margin-left: ${v.u2};
    }
    strong {
      margin-right: inherit;
      text-transform: capitalize;
    }
  `,ListItemDetail:l.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,Avatar:l(ne)`
    cursor: pointer;
  `},un=n=>{const{counts:t,onItemClick:r,selectedRollType:s,setModalOpen:i}=n;return o(X.Content,{children:[e("div",{children:e(hn,{stateList:[{type:"all",count:t.total},{type:"present",count:t.present},{type:"late",count:t.late},{type:"absent",count:t.absent},{type:"un-rolled",count:t.unRolled}],onItemClick:r,selectedRollType:s})}),o(X.ActionContainer,{children:[e(X.Button,{onClick:()=>r(""),children:"Reset"}),e(X.Button,{onClick:()=>i(!0),children:"Complete"})]})]})},X={Overlay:l.div`
    height: ${({isActive:n})=>n?"120px":0};
  `,Content:l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    color: #fff;
    min-height: 145px;
    background-color: ${c.gray.light};
    margin: -90px auto 0;
    border: 6.7px solid ${c.blue.base};
    border-radius: ${L.default};
    padding: 16px 0px 0px 0px;
  `,ActionContainer:l.div`
    display: flex;
    width: 100%;
    padding: 0;
  `,Button:l(re)`
    width: 50%;
    text-transform: capitalize !important;
    border: 4px solid ${c.blue.base} !important;
    border-bottom: 2px solid ${c.blue.base} !important;
    border-radius: 0px !important;
    background-color: #fff !important;
    margin: 0 !important;
    :hover {
      box-shadow: 2px 8px 7px ${c.gray.light};
      border: 1px solid ${c.blue.base} !important;
      padding: 2px !important;
    }
  `};function pn({count:n,page:t,setPage:r,rowsPerPage:s,setRowsPerPage:i}){return e("div",{children:e(ut,{component:"div",count:n,onChangePage:(f,u)=>{r(u)},page:t,rowsPerPage:s,onChangeRowsPerPage:f=>{i(parseInt(f.target.value,10)),r(0)}})})}const gn=be(n=>pt({root:{padding:"2px 4px",display:"flex",alignItems:"center",minWidth:350},input:{marginLeft:n.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}));function fn(n){const t=gn(),{searchRef:r,searchFn:s}=n,i=Ft(s);return o(gt,{component:"form",className:t.root,children:[e(ft,{inputRef:r,onChange:a=>i(a.target.value),className:t.input,placeholder:"Search Name",inputProps:{"aria-label":"search"}}),e(ie,{type:"submit",className:t.iconButton,"aria-label":"search",children:e("img",{src:b.search,width:20,height:20})})]})}const mn={getFullName:n=>`${n.first_name} ${n.last_name}`},Y=["un-rolled","present","late","absent"],bn=n=>Y.indexOf(n),xn=({rollMode:n,size:t=40,studentDetail:r,tableProps:s})=>{const[i,a]=h.exports.useState(bn(n)),d=ce(),f=u=>{let p=u;p===3?p=1:p+=1;const m=U(C({},r),{roll:Y[p]}),T={studentId:r.id,newStudentIfo:m,defaultProps:C({},s)};d($e(T)),a(N=>N<Y.length-1?N+=1:1)};return e(Oe,{selectedRollType:"",rollMode:Y[i],size:t,onClick:()=>f(i)})},yn=({rollMode:n,student:t,tableProps:r})=>o(w.Container,{children:[e(w.Avatar,{url:t.gender==="m"?b.male:b.female}),e(w.Content,{children:o(w.ColItem,{children:[e("p",{children:mn.getFullName(t)}),o("p",{children:["Age: ",t.age]})]})}),e(w.Content,{children:e(w.ColItem,{children:e("p",{children:t.parent})})}),e(w.Content,{children:e(w.ColItem,{children:e("p",{children:t.grade})})}),e(w.Roll,{children:e(xn,{tableProps:r,studentDetail:t,rollMode:n})})]}),w={Container:l.div`
    margin-top: ${v.u3};
    padding-right: ${v.u2};
    display: flex;
    height: 60px;
    border-radius: ${L.default};
    background-color: #fff;
    box-shadow: 0 2px 7px rgba(5, 66, 145, 0.13);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 2px 7px rgba(5, 66, 145, 0.26);
    }
  `,Avatar:l.div`
    width: 48px;
    height: 48px;
    margin: 5px;
    border-radius: 50%;
    background-image: url(${({url:n})=>n});
    border-top-left-radius: ${L.default};
    border-bottom-left-radius: ${L.default};
    background-size: cover;
    background-position: 50%;
    align-self: center;
  `,ColItem:l.div`
    line-height: 3px;
  `,Content:l.div`
    flex-grow: 1;
    width: 25%;
    padding: ${v.u2};
    color: ${c.dark.base};
    font-weight: ${W.strong};
  `,Roll:l.div`
    display: flex;
    align-items: center;
    margin-right: ${v.u4};
  `},vn=be({root:{width:"130px",height:"24px",padding:"0px"},switchBase:{color:"#23bf58",padding:"1px","&$checked":{"& + $track":{backgroundColor:"#23bf58"}}},thumb:{color:"white",width:"64px",height:"22px",margin:"0px",borderRadius:"10px"},track:{borderRadius:"20px",backgroundColor:"#23bf58",opacity:"1 !important","&:after, &:before":{color:"white",fontSize:"11px",position:"absolute",top:"6px"},"&:after":{content:"'First Name'",left:"8px"},"&:before":{content:"'Last Name'",right:"7px"}},checked:{color:"#23bf58 !important",transform:"translateX(62px) !important"}});function Sn({state:n,setState:t}){const r=vn(),s=i=>{t(i.target.checked)};return e(mt,{classes:{root:r.root,switchBase:r.switchBase,thumb:r.thumb,track:r.track,checked:r.checked},checked:n,onChange:s,name:"switch"})}const ze={textTransform:"capitalize",border:`2px solid ${c.blue.base}`,color:c.blue.base,fontWeight:500};function Cn({open:n,setOpen:t,onAgree:r}){const s=()=>{t(!1)};return e("div",{children:o(bt,{open:n,onClose:s,children:[e(xt,{children:"Are you sure?"}),e(yt,{children:o(vt,{children:["This is the final submission which highlights the fact that now we have 2 ",e(M.Title,{color:"#13943b",children:"Present"}),", 1 ",e(M.Title,{color:"#f5a623",children:"Late"}),", 1"," ",e(M.Title,{color:"#9b9b9b",children:"Absent"}),". But still there are"," ",e("strong",{style:{color:"#111",border:"2px solid",padding:"2px",borderRadius:"6.5px"},children:"10 Un-rolled"})," students. Click Submit to hold the rolled student's information."]})}),o(St,{children:[e(M.Button,{style:U(C({},ze),{color:"#ccc",border:"1px solid #ccc"}),onClick:s,color:"secondary",variant:"outlined",children:"Disagree"}),e(M.Button,{style:C({},ze),onClick:r,color:"primary",autoFocus:!0,variant:"outlined",children:"Agree"})]})]})})}const M={Title:l.p`
    display: inline;
    border: 3px solid ${({color:n})=>n};
    border-radius: 6.5px;
    padding: 1px 4px;
  `,Button:l(re)`
    border: 2px solid blue;
  `};function wn({open:n,setOpen:t}){const r=(s,i)=>{i!=="clickaway"&&t(!1)};return e("div",{children:e(Ct,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:2e3,onClose:r,message:"Rolls are created successfully",action:e(xe.Fragment,{children:e(ie,{style:{borderRadius:28},color:"secondary",size:"small",onClick:r,children:e("img",{width:5,height:5,src:b.nullIcon})})})})})}const kn=()=>{const[n,t]=h.exports.useState([]),[r,s]=h.exports.useState(0),[i,a]=h.exports.useState(!1),[d,f]=h.exports.useState(10),[u,p]=h.exports.useState("first_name"),[m,T]=h.exports.useState("asc"),[N,_e]=wt(),[Ne,Ee]=h.exports.useState(0),[Z,De]=h.exports.useState(""),[Me,K]=h.exports.useState(!1),[He,de]=h.exports.useState(!1),[Ue,qe]=h.exports.useState({limit:0,offset:11,sortByKey:"first_name",sortOrder:"asc"}),P=h.exports.useRef(),ee=ce(),je=kt(),{counts:he,response:{students:A,total:Ge},isLoading:te,hasError:Ve,rollsCreated:{success:ue}}=Be(Ut),pe=()=>{N.delete("name"),_e(N)},Je=()=>{f(10),s(0),p("first_name"),T("asc")};h.exports.useEffect(()=>{const[g,F]=Bt(d,r),H={limit:g,offset:F,sortByKey:u,sortOrder:m.length?m:"asc",filter:Z};qe(H),ee(J(H))},[r,u,m,Z,i,d]),h.exports.useEffect(()=>{var g,F;if(A&&A.length)if((g=P==null?void 0:P.current)==null?void 0:g.value){const H=Se(A,(F=P==null?void 0:P.current)==null?void 0:F.value);t(H)}else t(A),pe();Ee(Ge)},[A]);const Qe=g=>{if(g==null?void 0:g.length){je({search:$t({name:g}).toString()});const F=Se(n,g);t(F)}else pe(),a(!i)},We=g=>{},Xe=g=>{De(g),Je()},Ye=()=>{ee(Re())};return h.exports.useEffect(()=>{ue&&(K(!1),de(!0),ee(qt({})))},[ue]),o(oe,{children:[o(k.PageContainer,{children:[e(Cn,{open:Me,setOpen:K,onAgree:Ye}),e(In,{onSortOrderChange:T,onSortByChange:p,searchRef:P,searchFn:Qe,onItemClick:We}),te&&e(le,{children:e(k.SpinnerContainer,{children:e(j,{icon:"spinner",size:"3x",spin:!0})})}),!te&&A&&o(k.TableListContainer,{children:[o(k.TableHeader,{children:[e("strong",{children:"Student"}),e("strong",{children:"Parent"}),e("strong",{children:"Grade"}),e("strong",{children:"Roll"})]}),n.map(g=>e(yn,{tableProps:Ue,rollMode:g.roll,student:g},g.id))]}),Ve&&e(le,{children:e("div",{children:"Failed to load"})}),!te&&e(pn,{count:he.total,page:r,setPage:s,rowsPerPage:d,setRowsPerPage:f})]}),e(un,{setModalOpen:K,selectedRollType:Z,counts:he,allRolls:Ne,isActive:!0,onItemClick:Xe}),e(wn,{open:He,setOpen:de})]})},In=n=>{const{onSortOrderChange:t,onSortByChange:r,searchRef:s,searchFn:i,onItemClick:a}=n,[d,f]=h.exports.useState(!0),[u,p]=h.exports.useState("");return h.exports.useEffect(()=>{r(d?"first_name":"last_name"),t(u)},[d,u]),o(k.ToolbarContainer,{children:[o(k.SortContainer,{children:[e(Sn,{state:d,setState:m=>f(m)}),e(oe,{children:o(It,{orientation:"vertical",color:"primary",children:[e(k.IconButton,{onClick:()=>p("asc"),style:{backgroundColor:u==="asc"?"#fff":c.blue.base},color:"secondary",children:e("img",{src:u!=="asc"?b.asc:b.ascDark,width:30})}),e(k.IconButton,{onClick:()=>p("dsc"),style:{backgroundColor:u==="dsc"?"#fff":c.blue.base},color:"primary",children:e("img",{src:u!=="dsc"?b.dsc:b.dscDark,width:30})})]})})]}),e("div",{children:e(fn,{searchRef:s,searchFn:i})}),e(k.Button,{onClick:()=>a("roll"),children:"Start Roll"})]})},k={PageContainer:l.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 100vh;
    margin: ${v.u4} auto 140px;
  `,ToolbarContainer:l.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: ${c.gray.light};
    padding: 6px 14px;
    font-weight: ${W.strong};
    border-radius: ${L.default};
  `,SpinnerContainer:l.div`
    display: flex;
    margin-top: 38vh;
    align-items: center;
    justify-content: center;
  `,TableListContainer:l.div`
    min-height: 100vh;
  `,Button:l(re)`
    && {
      color: #fff;
      background-color: ${c.blue.base};
      border: 2px solid ${c.blue.base};
      padding: ${v.u2};
      font-weight: ${W.strong};
      border-radius: ${L.arc};
      :hover {
        background-color: #fff;
        color: ${c.gray.light};
        border: 2px solid ${c.blue.base};
      }
    }
  `,IconButton:l(ie)`
    && {
      width: 1px;
      height: 1px;
      padding: 8px;
      background-color: ${c.blue.base};
      margin-bottom: 3px;
      margin-left: 5px;
      :hover {
        background-color: ${c.blue.base};
      }
    }
  `,SortContainer:l.div`
    display: flex;
    align-items: center;
  `,TableHeader:l.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > strong {
      text-align: center;
      margin: 0 10.5%;
    }
  `},$n=()=>{const n=ce(),{activities:t,isLoading:r,hasError:s}=Be(Qt);return h.exports.useEffect(()=>{n(Q())},[]),o(I.Container,{children:[r&&e("div",{style:{display:"flex",margin:"auto",alignItems:"center",justifyContent:"center"},children:e(I.SpinnerContainer,{children:e(j,{icon:"spinner",size:"5x",spin:!0})})}),!r&&t&&t.map(({id:i,gender:a,first_name:d,last_name:f,age:u,roll:p,grade:m,parent:T})=>o(I.CardContainer,{style:{borderLeft:`15px solid ${ke(p)}`},children:[e(I.Avatar,{url:a==="m"?b.male:b.female}),o("div",{children:[o("div",{children:[e(I.Title,{children:" Name:"})," ",d+" "+f]}),o("div",{children:[e(I.Title,{children:" Age:"})," ",u]}),o("div",{children:[e(I.Title,{children:" Grade: "})," ",m]}),o("div",{children:[e(I.Title,{children:" Parent:"})," ",T]}),o("div",{children:[e(I.Title,{children:"Roll:"})," ",p]})]})]},i)),s&&e(le,{children:e("div",{children:"Failed to load"})})]})},I={Container:l.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 80%;
    margin: ${v.u4} auto 0;
    gap: 2rem;
  `,CardContainer:l.div`
    display: flex;
    background-color: #fff;
    padding: 5px;
    display: flex;
    min-width: 350px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 35px 10px 10px 35px;
    > div {
      box-sizing: border-box;
      max-width: 50%;
      margin-left: 20px;
    }
    :hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `,Avatar:l.div`
    width: 7rem;
    height: 7rem;
    margin: 5px;
    border-radius: 50%;
    background-image: url(${({url:n})=>n});
    border-top-left-radius: ${L.default};
    border-bottom-left-radius: ${L.default};
    background-size: cover;
    background-position: 50%;
    align-self: center;
  `,Title:l.strong`
    font-weight: 600;
    color: #333;
    font-size: 1rem;
    padding: 2px;
  `,SpinnerContainer:l.div`
    display: flex;
    margin-top: 38vh;
    align-items: center;
    justify-content: center;
  `},Rn=l.div`
  min-height: 100vh;
`;function Ln(){return o(oe,{children:[e(Pe,{}),e(Rn,{children:o(ye,{children:[e(B,{path:"daily-care",element:e(kn,{})}),e(B,{path:"activity",element:e($n,{})}),e(B,{path:"*",element:e("div",{children:"No Match"})})]})}),e(Ae,{})]})}class Pn extends h.exports.Component{constructor(t){super(t);this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,r){console.error("error: "+t),console.error("errorInfo: "+JSON.stringify(r)),console.error("componentStack: "+r.componentStack)}render(){return this.state.hasError?o("div",{children:[e("h1",{children:"Something went wrong."}),e("button",{onClick:()=>location.reload(),children:"Refresh"})]}):this.props.children}}const S={Section:l.section`
    padding: 0.5rem 10rem;
    max-width: 100vw;
    font-size: 1rem;
    color: #333;
    > h1 {
      font-weight: 800;
      font-size: 40px;
      text-decoration: underline;
    }
  `,Quote:l.p`
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
  `,ImageContainer:l.div`
    display: flex;
    align-items: center;
    > a {
      padding: 15px;
      display: inline;
      text-align: center;
    }
    > img {
      border: 2px solid;
    }
  `,Code:l.code`
    background-color: #28282b;
    padding: 15px;
    color: white;
    width: 98%;
    display: flex;
    flex-direction: column;
  `},Tn=()=>o(S.Section,{children:[e("h1",{children:"Orah assessment"}),e("h2",{children:e("strong",{children:"Objective"})}),o(S.Quote,{children:["To create a demo application highlighting the basic features which are required in an academic atmosphere like a school, college, or university This application will include local data management and using that we'll implement the roll management mini application better for the B2B business modal Showcase best development mannerisms and coding style which could be a replica of a production-level application Showcase some optimizing front-end mechanism like",e("strong",{children:" debouncing, caching, lazy-loading, global state management & pagination"}),". Following a scalable design system"]}),e("h2",{children:e("strong",{children:"Tech stack used"})}),e(S.Quote,{children:o("ul",{children:[o("li",{children:["Typescript",e("ul",{children:e("li",{children:"For static type checking"})})]}),o("li",{children:["Vite",e("ul",{children:e("li",{children:"Rust-based highly optimized bundler"})})]}),o("li",{children:["Styled-component",e("ul",{children:e("li",{children:"To follow the custom yet adaptable design-system"})})]}),o("li",{children:["NPM",e("ul",{children:e("li",{children:"As a node package manager"})})]}),o("li",{children:["Material-UI",e("ul",{children:e("li",{children:"To use inbuild front-end components"})})]}),o("li",{children:["Redux-js toolkit",e("ul",{children:e("li",{children:"To maintain a global state for storage & retrieving the consistency in data across the application depending on redux subscription to the respective component"})})]})]})}),e("h2",{children:e("strong",{children:"General User-flow"})}),e(S.ImageContainer,{children:e("a",{target:"_blank",href:"https://www.linkpicture.com/view.php?img=LPic640dc676474af1691639560",children:e("img",{style:{border:"5px solid #333",borderRadius:20},width:"60%",height:"25%",src:"https://www.linkpicture.com/q/Seq-diagram-Seq-1.jpg",alt:"image"})})}),e("h2",{children:e("strong",{children:"Profiler performance report"})}),e(S.ImageContainer,{children:e("a",{target:"_blank",href:"https://www.linkpicture.com/q/ssssssssssss.jpg",children:e("img",{style:{border:"5px solid #333",borderRadius:20},width:"80%",height:"30%",src:"https://www.linkpicture.com/q/ssssssssssss.jpg",alt:"image"})})}),e("h3",{children:e("strong",{children:"Points to be noted from the above profiler's report:"})}),e(S.Quote,{children:o("ul",{children:[e("li",{children:"It's lab data hence the ground data will be even more lagging because of certain other performance-affecting parameters like server speed, user location, device & device configuration, transaction cost due to ISP in the respective geographical location, etc."}),o("li",{children:["The above visible that",o("ul",{children:[e("li",{children:"commit phase lasts at 100 ms i.e 0.1 s"}),e("li",{children:"render time required is 70.8 ms"})]})]}),e("li",{children:"An ideal render time should be ~33.33 ms because of the human eye can not notice the glitch unless the pixel paint process is for 30 FPS. This can be improved with the SSR technique, but CSR is still fine for it because of the continuous user interaction involved with an application."}),o("li",{children:["But as per the performance matrix visible in the above image, the majority highlight is the Material UI component (V4), and that too specifically with",e("code",{children:"withStyles()"})," which is an API to use MUI's style engine. The style engine is improved with V5. For more details",e("a",{href:"https://mui.com/material-ui/migration/migration-v4/",children:"Click here"})]}),o("li",{children:["In my opinion, we can fix that by just relying on ",e("a",{href:"https://styled-components.com/",children:"styled-components"})," as it will reduce bundle size, optimize CSR & brings a lightweight design system tool that is entirely in the control of the developer."]})]})}),e("h2",{children:e("strong",{children:"Other traits"})}),e(S.Quote,{children:e("ul",{children:e("li",{children:"Design system: obtained from styled-component & MUI (V4)"})})}),e("h2",{children:e("strong",{children:"POI (Points of improvement)"})}),e(S.Quote,{children:o("ul",{children:[e("li",{children:"Folder structure is not optimum i.e atomic structure can be implemented"}),e("li",{children:"Module export can be improved with a single point of entry in a file"}),e("li",{children:"More modularity can be obtained"}),e("li",{children:"Performance can be improved"}),e("li",{children:"If the application would have a chance to scale then API caching by RTK could be more helpful"})]})}),e("h2",{children:e("strong",{children:"Local setup"})}),o(S.Code,{children:[e("span",{children:"1) clone the project"}),e("span",{children:"2) you must have node-js installed on your PC "}),e("span",{children:"3) move to the correct directory"}),e("span",{children:"4) npm i"}),e("span",{children:"5) npm run start"})]}),e("h2",{children:e("strong",{children:"Author"})}),o(S.Quote,{style:{display:"flex",flexDirection:"column"},children:[e("em",{children:"Name: Rajat Pratap Singh"}),e("em",{children:"E-mail: pratapsinghr2016@gmail.com"}),o("em",{children:["Linkedin: ",e("a",{href:"https://www.linkedin.com/in/rajat-pratap-singh-sse/",children:"Click here"})]}),o("em",{children:["Resume:",e("a",{href:"https://drive.google.com/file/d/1pik0LQJyyrRmlpT_U_fPuulAvap4OW27/view?usp=sharing",children:"Click here"})]})]})]}),An=l.div`
  min-height: 100vh;
`,Fn=()=>o(h.exports.Fragment,{children:[e(Pe,{}),e(An,{children:e(Tn,{})}),e(Ae,{})]}),Bn={Container:l.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #333;
    > h1 {
      font-size: 4rem;
    }
    > a {
      text-decoration: none;
      font-size: 1.7rem;
      background-color: #fff;
      border-radius: 5px;
      color: ${c.blue.base};
      padding: 2.5px 10px;
      border: 2px solid ${c.blue.base};
    }
  `},On=()=>o(Bn.Container,{children:[e("h1",{children:"Page Not Found"}),e("a",{href:"/",children:"Home Page"})]}),zn=({children:n})=>e(h.exports.Suspense,{fallback:e("div",{children:"Loading..."}),children:n});Rt.render(o(xe.StrictMode,{children:[e(Zt,{}),e(Lt,{store:Xt,children:e(Pn,{children:e(Pt,{children:o(ye,{children:[e(B,{path:"*",element:e(On,{})}),e(B,{path:"/",element:e(Fn,{})}),e(B,{path:"staff/*",element:e(zn,{children:e(Ln,{})})})]})})})})]}),document.getElementById("root"));
