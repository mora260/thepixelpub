import s from"./ContentSlot.2de802d6.js";import{d as o,a8 as u,I as f,aj as m}from"./entry.049ce8b6.js";import"./MDCSlot.3d74edb9.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};