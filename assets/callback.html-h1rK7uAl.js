import{d as N,h as g,u as e,o as r,F as l,w as i,e as c,I as n,b as a,au as P,a as d,b4 as x,N as k,aw as S,b5 as I,b6 as V,_ as C,r as B,c as T}from"./app--VcHmvhe.js";import{N as b}from"./Alert-kc6uPiWv.js";import{N as z}from"./Input-dp1Lx9HH.js";import"./browser-17YR-kM5.js";const p=o=>(I("data-v-3b026d87"),o=o(),V(),o),F=p(()=>a("b",null,"client_id: ",-1)),G=p(()=>a("b",null,"client_secret: ",-1)),K=p(()=>a("b",null,"redirect_uri: ",-1)),$=p(()=>a("b",null,"refresh_token:",-1)),j="iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",E="jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",M="https://alist.nn.ci/tool/baidu/callback",O=N({__name:"Callback",setup(o){const _=new URL(window.location.href),u=_.searchParams.get("code"),s=_.searchParams.get("error"),y=_.searchParams.get("error_description"),t=g();return u&&!s&&(async()=>{const f=await(await fetch(`${S()}/alist/baidu/get_refresh_token?code=${u}`)).json();t.value=f})(),(w,f)=>!e(u)||e(s)?(r(),l(e(b),{key:0,title:e(s)||"Error",type:"error"},{default:i(()=>[c(n(e(y)),1)]),_:1},8,["title"])):(r(),l(e(k),{key:1,vertical:"",size:"large"},{default:i(()=>{var h,m,v;return[a("p",null,[F,c(n(j))]),a("p",null,[G,c(n(E))]),a("p",null,[K,c(n(M))]),(h=t.value)!=null&&h.error||(m=t.value)!=null&&m.error_description?(r(),l(e(b),{key:0,title:(v=t.value)==null?void 0:v.error,type:"error"},{default:i(()=>[c(n(t.value.error_description),1)]),_:1},8,["title"])):P("v-if",!0),d(e(k),{vertical:""},{default:i(()=>[$,t.value?(r(),l(e(z),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(r(),l(e(x),{key:0}))]),_:1})]}),_:1}))}}),R=C(O,[["__scopeId","data-v-3b026d87"],["__file","Callback.vue"]]),U=N({__name:"callback.html",setup(o){return(_,u)=>{const s=B("NaiveClient");return r(),T("div",null,[d(s,null,{default:i(()=>[d(e(R))]),_:1})])}}}),H=C(U,[["__file","callback.html.vue"]]);export{H as default};
