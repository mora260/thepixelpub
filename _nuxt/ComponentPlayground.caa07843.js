import{M as m,I as p,d as c,a9 as i,r as u,N as e,k as l}from"./entry.049ce8b6.js";import{u as d}from"./asyncData.ce53f4bb.js";import f from"./Ellipsis.d876ea18.js";import _ from"./ComponentPlaygroundData.b18f1eb1.js";import"./TabsHeader.e037eb5d.js";import"./ComponentPlaygroundProps.b3d83cce.js";import"./ProseH4.9c0cb898.js";import"./ProseCodeInline.f4f51695.js";import"./Badge.7caac25c.js";import"./MDCSlot.3d74edb9.js";import"./slot.61c69a39.js";import"./ProseP.3579e925.js";import"./index.9f957fd8.js";import"./ComponentPlaygroundSlots.vue.e65f81fa.js";import"./ComponentPlaygroundTokens.vue.34ad3ef4.js";async function y(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=l(g,[["__scopeId","data-v-3653a881"]]);export{V as default};