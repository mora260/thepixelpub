import b from"./TabsHeader.8b2e68f7.js";import g from"./ComponentPlaygroundProps.3ed7c786.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.00d3d706.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.80448ba8.js";import{a as k}from"./index.34be70dd.js";import{d as D,r as V,b as a,c as C,g as P,M as o,X as m,as as T,f as s,k as B}from"./entry.8f2d7988.js";import"./ProseH4.efc08a6b.js";import"./ProseCodeInline.aa7dbc87.js";import"./Badge.32f9eefb.js";import"./MDCSlot.eb82683e.js";import"./slot.692b3b48.js";import"./ProseP.8c799beb.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:r}){const n=k(t,"modelValue",r),e=V(0),c=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,p)=>{const u=b,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:c,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":p[0]||(p[0]=y=>T(n)?n.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const A=B(j,[["__scopeId","data-v-d63d21a5"]]);export{A as default};