(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9,8],{"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},VDoa:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),l=n("q1tI"),r=n.n(l),c=(n("B2uJ"),n("+su7"),n("qOys")),m=n.n(c),o=n("5Yjd"),i=n.n(o),s=r.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("XOGA")),l=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(l)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"filterform"},r.a.createElement("a",{"aria-hidden":"true",href:"#filterform"},r.a.createElement("span",{className:"icon icon-link"})),"FilterForm"),r.a.createElement("p",null,"\u54cd\u5e94\u5f0f\u641c\u7d22\u8868\u5355\u5bb9\u5668"),r.a.createElement("h3",{id:"examples"},r.a.createElement("a",{"aria-hidden":"true",href:"#examples"},r.a.createElement("span",{className:"icon icon-link"})),"Examples")),r.a.createElement(i.a,Object(a["a"])({source:{jsx:"import React from 'react';\nimport { Form, Input } from 'antd';\nimport { FilterForm } from 'bsy-components';\n\nconst { Item } = Form;\n\nconst Demo = () => {\n  const [form] = Form.useForm();\n\n  const onFinish = (values) => {\n    console.log(values);\n  };\n\n  const getFields = () => {\n    const children = [];\n    for (let i = 0; i < 10; i++) {\n      children.push(\n        <Item label={`input-${i}`} name={`input-${i}`}>\n          <Input />\n        </Item>,\n      );\n    }\n    return children;\n  };\n\n  return (\n    <FilterForm form={form} onFinish={onFinish}>\n      {getFields()}\n    </FilterForm>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-1",CSSInDependencies:["antd/dist/antd.css"],dependencies:{antd:"4.6.2","bsy-components":"0.7.0"},files:{}}),r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u53c2\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"loading"),r.a.createElement("td",null,"\u52a0\u8f7d\u72b6\u6001"),r.a.createElement("td",null,"boolean"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"itemLayout"),r.a.createElement("td",null,"\u8868\u5355\u9879\u5e03\u5c40\u65b9\u5f0f"),r.a.createElement("td",null,"ItemLayout"),r.a.createElement("td",{align:"center"},"ItemLayout")),r.a.createElement("tr",null,r.a.createElement("td",null,"extra"),r.a.createElement("td",null,"\u64cd\u4f5c\u6309\u94ae\u65c1\u5176\u4ed6\u7ec4\u4ef6"),r.a.createElement("td",null,"React.ReactNode[]"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"form"),r.a.createElement("td",null,"\u7ecf Form.useForm() \u521b\u5efa\u7684 form \u63a7\u5236\u5b9e\u4f8b"),r.a.createElement("td",null,"FormInstance"),r.a.createElement("td",{align:"center"},r.a.createElement("a",{href:"https://ant.design/components/form-cn/#FormInstance",target:"_blank",rel:"noopener noreferrer"},"FormInstance",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),r.a.createElement("tr",null,r.a.createElement("td",null,"didSubmit"),r.a.createElement("td",null,"\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u6210\u540e\u662f\u5426\u6267\u884c\u63d0\u4ea4\u4e8b\u4ef6"),r.a.createElement("td",null,"boolean"),r.a.createElement("td",{align:"center"},"false")))),r.a.createElement("p",null,"\u5176\u4f59\u53c2\u6570\u4e0e Form \u4e00\u81f4"),r.a.createElement("h3",{id:"itemlayout"},r.a.createElement("a",{"aria-hidden":"true",href:"#itemlayout"},r.a.createElement("span",{className:"icon icon-link"})),"ItemLayout"),r.a.createElement(m.a,{code:"import { ColProps } from 'antd/es/col';\n\ninterface ItemLayout {\n  itemLayout?: {\n    labelCol?: ColProps;\n    wrapperCol?: ColProps;\n  };\n}\n\nconst itemLayout = {\n  labelCol: { xs: { span: 24 }, sm: { span: 8 }, md: { span: 6 } },\n  wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, md: { span: 18 } },\n};\n",lang:"typescript"}),r.a.createElement("p",null,"\u914d\u7f6e\u540c",r.a.createElement("a",{href:"https://ant.design/components/form-cn/#API",target:"_blank",rel:"noopener noreferrer"},"antd \u4e2d\u7684\u8868\u5355\u5e03\u5c40\u914d\u7f6e",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))))}},XOGA:function(e,t,n){"use strict";n.r(t);n("5NDa");var a=n("5rEg"),l=n("tJVT"),r=(n("y8nQ"),n("Vl3Y")),c=n("q1tI"),m=n.n(c),o=n("/7QA"),i=r["default"].Item,s=()=>{var e=r["default"].useForm(),t=Object(l["a"])(e,1),n=t[0],c=e=>{console.log(e)},s=()=>{for(var e=[],t=0;t<10;t++)e.push(m.a.createElement(i,{label:"input-".concat(t),name:"input-".concat(t)},m.a.createElement(a["a"],null)));return e};return m.a.createElement(o["FilterForm"],{form:n,onFinish:c},s())};t["default"]=s}}]);