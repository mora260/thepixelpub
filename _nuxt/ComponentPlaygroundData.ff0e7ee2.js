import b from"./TabsHeader.e2ac1815.js";import g from"./ComponentPlaygroundProps.f8023bd3.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.7e608613.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.5c851559.js";import{a as k}from"./index.ad73a0a1.js";import{d as D,r as V,b as a,c as C,g as P,M as o,X as m,as as T,f as s,k as B}from"./entry.5e5d45b1.js";import"./ProseH4.dff34fa8.js";import"./ProseCodeInline.45b93d09.js";import"./Badge.0fe137f3.js";import"./MDCSlot.6360ee77.js";import"./slot.a6572991.js";import"./ProseP.996d6eaf.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:r}){const n=k(t,"modelValue",r),e=V(0),c=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,p)=>{const u=b,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:c,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":p[0]||(p[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=B(j,[["__scopeId","data-v-d63d21a5"]]);export{A as default};