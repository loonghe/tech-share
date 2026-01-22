import{_ as U}from"./index-OIiAUsjm.js";/* empty css             */import{_ as I}from"./custom-list.vue_vue_type_style_index_0_scoped_5ede2967_lang-C96gZMQD.js";import{U as T,s as L,e as q,t as W,f as A,r as G,v as O,i as $}from"./ui-hcfEnn37.js";import{C as F}from"./custom-rich-text-IAZ1VwAq.js";import{C as K}from"./custom-list-DTGVF9DA.js";import{r as P}from"./const-m63Ke8bE.js";import{D as Y}from"./index-Bggu1dQC.js";import{x as D,z as _,u as e,h as i,c as J,A as v,l as k,C as Q,E as x,Y as l,L as b,O as r,r as m,G as X,a4 as C,a9 as Z,ar as ee,n as oe}from"./vue-DOVs0rbj.js";const j=U(I,[["__scopeId","data-v-8f022161"]]),te="position: absolute; bottom: 0; right: 16px",le="min-height: 100px; overflow-y: hidden; border-radius: 4px",ae=D({__name:"simple-editor",props:{modelValue:{},mode:{}},emits:{[T]:f=>f},setup(f,{emit:V}){const t={key:"group-media",title:"图片",iconSvg:'<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',menuKeys:["uploadImage","uploadVideo"]},p=f,c=V,u=J({get(){return p.modelValue},set(s){return c(T,s)}});return(s,a)=>(v(),_(e(j),{modelValue:e(u),"onUpdate:modelValue":a[0]||(a[0]=w=>i(u)?u.value=w:null),placeholder:"输入消息...",mode:p.mode,"my-menus":[t],"tool-bar-style":te,"editor-style":le},null,8,["modelValue","mode","my-menus"]))}}),ne=U(ae,[["__scopeId","data-v-7cd56bff"]]),M=`
反反复复

- 经济
- Title1

1.  Title2
2.  ff

\`\`\`javascript
const a = 1;
\`\`\`

### 京津冀

[vue-loong-ui](https://www.npmjs.com/package/vue-loong-ui)

![](https://images.pexels.com/photos/20787/pexels-photo.jpg)

<video poster="" controls="true" width="1200" height="auto"><source src="https://bdcloud-player-new.cdn.bcebos.com/testvideo/mp4/av1/1080p/liulangdiqiu-av1-1080-faststart.mp4" type="video/mp4"></video>

---

| Title1 | Title2 |
| ---- | ---- |
| gg   | ww   |

---
`,y='<p>反反复复</p><ul><li>经济</li><li>Title1</li></ul><ol><li>Title2</li><li>ff</li></ol><pre><code class="language-javascript">const a = 1;</code></pre><h3>京津冀</h3><p><a href="https://www.npmjs.com/package/vue-loong-ui">vue-loong-ui</a></p><p><img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" alt=""></p><p><video poster="" controls="true" width="1200" height="auto"><source src="https://bdcloud-player-new.cdn.bcebos.com/testvideo/mp4/av1/1080p/liulangdiqiu-av1-1080-faststart.mp4" type="video/mp4"></video></p><hr><table><thead><tr><th>Title1</th><th>Title2</th></tr></thead><tbody><tr><td>gg</td><td>ww</td></tr></tbody></table><hr>',se={class:"flex-row mb10"},de={class:"flex-row"},ge=D({__name:"index",setup(f){const V=ee(),t=m(y),p=m("测试文档标题"),c=m(!1),u=m(!1),s=m("html"),a=m("default"),w=d=>{s.value=d?"markdown":"html",d?t.value=M:t.value=y},B=d=>{d?t.value="":s.value==="markdown"?t.value=M:t.value=y};return k(()=>t.value,d=>{console.log("content changed: ",d)}),k(()=>a.value,(d,o)=>{d==="annotation"&&(p.value="测试文档标题",oe(()=>{a.value=o}),window.open(V.resolve({path:"/annotation",query:{}}).href,"_blank"))}),(d,o)=>{const R=L,h=q,g=O,S=W,E=A,z=Z("Warning"),H=$,N=G;return v(),Q(X,null,[o[8]||(o[8]=x("h3",null,"富文本编辑器",-1)),l(R,null,{default:r(()=>[l(e(K),{items:e(P)},null,8,["items"])]),_:1}),l(h,null,{default:r(()=>[...o[6]||(o[6]=[C("Example",-1)])]),_:1}),x("div",se,[l(S,{modelValue:e(a),"onUpdate:modelValue":o[0]||(o[0]=n=>i(a)?a.value=n:null),class:"radio-group mr10"},{default:r(()=>[l(g,{label:"简洁模式",value:"simple"}),l(g,{label:"默认模式",value:"default"}),l(g,{label:"模拟腾讯文档",value:"doc"}),l(g,{label:"划词笔记",value:"annotation"})]),_:1},8,["modelValue"]),l(h,{direction:"vertical"}),x("div",de,[l(E,{modelValue:e(u),"onUpdate:modelValue":o[1]||(o[1]=n=>i(u)?u.value=n:null),"active-text":"开启Markdown模式",class:"mr6",onChange:w},null,8,["modelValue"]),l(N,{effect:"light",placement:"right",content:"开启后编辑器输出的moduleValue为markdown格式"},{default:r(()=>[l(H,null,{default:r(()=>[l(z)]),_:1})]),_:1})]),l(h,{direction:"vertical"}),l(E,{modelValue:e(c),"onUpdate:modelValue":o[2]||(o[2]=n=>i(c)?c.value=n:null),"active-text":"清理默认内容",class:"mr6",onChange:B},null,8,["modelValue"])]),e(a)==="simple"?(v(),_(ne,{key:0,modelValue:e(t),"onUpdate:modelValue":o[3]||(o[3]=n=>i(t)?t.value=n:null),mode:e(s)},null,8,["modelValue","mode"])):b("",!0),e(a)==="default"?(v(),_(e(j),{key:1,modelValue:e(t),"onUpdate:modelValue":o[4]||(o[4]=n=>i(t)?t.value=n:null),mode:e(s),placeholder:"请输入内容"},null,8,["modelValue","mode"])):b("",!0),e(a)==="doc"?(v(),_(e(Y),{key:2,ref:"docEditorRef",modelValue:e(t),"onUpdate:modelValue":o[5]||(o[5]=n=>i(t)?t.value=n:null),mode:e(s),title:e(p),placeholder:"请输入文档正文..."},null,8,["modelValue","mode","title"])):b("",!0),l(h,null,{default:r(()=>[...o[7]||(o[7]=[C("内容预览",-1)])]),_:1}),l(e(F),{html:e(t),mode:e(s)},null,8,["html","mode"])],64)}}});export{ge as default};
