import{I as i,M as n,aC as c,at as h,ar as o,aD as l,o as u,c as d,m as f}from"./DX-yIrQn.js";const g=["src","alt","width","height"],p=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,r=n(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=c(h(o().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return l(a,t.src)}return t.src});return(s,a)=>(u(),d("img",{src:f(r),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};