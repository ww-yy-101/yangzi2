import{u as V,r as n,o as k,c as E,b as l,d as e,f as U,bP as x,E as w}from"./index-Bj1V9wew.js";import{E as y,a as P}from"./el-form-item-hqDUE-e0.js";import{_ as I,E as B}from"./_plugin-vue_export-helper-CSCWavwd.js";import{E as C}from"./el-input-Ir-TF5pQ.js";import{P as F}from"./PageContainer-BCHFLDVD.js";import"./el-message-BNTB1Kf7.js";const S={__name:"UserProfile",setup(q){const{user:{id:u,username:i,nickname:d,email:p},getUser:f}=V(),m=n(),a=n({id:u,username:i,nickname:d,email:p}),c={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:[/^\S{2,10}$/],message:"昵称长度为 2 到 10 个非空字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}]},_=async()=>{await m.value.validate()&&(await x(a.value),await f(),w.success("修改成功"))};return(g,t)=>{const s=C,r=y,v=B,b=P;return k(),E(F,{title:"基本资料"},{default:l(()=>[e(b,{model:a.value,rules:c,ref_key:"formRef",ref:m,"label-width":"120px",class:"form-container"},{default:l(()=>[e(r,{label:"登录名称",prop:"username"},{default:l(()=>[e(s,{modelValue:a.value.username,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.username=o),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(s,{modelValue:a.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.nickname=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:l(()=>[e(s,{modelValue:a.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.email=o)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(v,{type:"primary",onClick:_},{default:l(()=>[U("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}},z=I(S,[["__scopeId","data-v-a65e97a9"]]);export{z as default};
