(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19,18],{Gkqx:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),l=n("q1tI"),r=n.n(l),m=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(m),i=n("5Yjd"),u=n.n(i),o=r.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("mcAf")),l=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(l)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"selecttags"},r.a.createElement("a",{"aria-hidden":"true",href:"#selecttags"},r.a.createElement("span",{className:"icon icon-link"})),"SelectTags"),r.a.createElement("p",null,"\u7528\u4e8e\u8868\u5355\u5185\u7684\u591a\u9009\u6216\u5355\u9009\u6807\u7b7e"),r.a.createElement("h3",{id:"examples"},r.a.createElement("a",{"aria-hidden":"true",href:"#examples"},r.a.createElement("span",{className:"icon icon-link"})),"Examples")),r.a.createElement(u.a,Object(a["a"])({source:{jsx:"import React from 'react';\nimport { Form } from 'antd';\nimport { SelectTags } from 'bsy-components';\n\nconst { Item } = Form;\n\nconst options = [\n  { label: '\u5b87\u667a\u6ce2\u4f50\u52a9', value: 'zuozhu' },\n  { label: '\u5b87\u667a\u6ce2\u9f2c', value: 'you' },\n  { label: '\u5b87\u667a\u6ce2\u6b62\u6c34', value: 'zhishui' },\n];\n\nconst Demo = () => {\n  return (\n    <Form\n      initialValues={{\n        single: 'zuozhu',\n        multiple: ['you', 'zhishui'],\n      }}\n    >\n      <Item label=\"\u5355\u9009\u6807\u7b7e\" name=\"single\">\n        <SelectTags mode=\"single\" options={options} />\n      </Item>\n      <Item label=\"\u591a\u9009\u6807\u7b7e\" name=\"multiple\">\n        <SelectTags options={options} />\n      </Item>\n    </Form>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-5",CSSInDependencies:["antd/dist/antd.css"],dependencies:{antd:"4.6.2","bsy-components":"0.7.0"},files:{}}),r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u53c2\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",{align:"center"},"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"mode"),r.a.createElement("td",null,"\u7c7b\u578b"),r.a.createElement("td",null,"string(multiple | single)"),r.a.createElement("td",{align:"center"},"multiple")),r.a.createElement("tr",null,r.a.createElement("td",null,"options"),r.a.createElement("td",null,"\u53ef\u9009\u9879\u6570\u636e\u6e90"),r.a.createElement("td",null,"Option[]"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"value"),r.a.createElement("td",null,"Form.Item \u81ea\u52a8\u63d0\u4f9b"),r.a.createElement("td",null,"string | string[] | number | number[]"),r.a.createElement("td",{align:"center"},"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"onChange"),r.a.createElement("td",null,"Form.Item \u81ea\u52a8\u63d0\u4f9b"),r.a.createElement("td",null,"(value) => void"),r.a.createElement("td",{align:"center"},"-")))),r.a.createElement("h3",{id:"option"},r.a.createElement("a",{"aria-hidden":"true",href:"#option"},r.a.createElement("span",{className:"icon icon-link"})),"Option"),r.a.createElement(c.a,{code:"interface SelectTagsOption {\n  label: React.ReactNode;\n  value: SingleValue;\n}\n",lang:"typescript"})))}},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},mcAf:function(e,t,n){"use strict";n.r(t);n("y8nQ");var a=n("Vl3Y"),l=n("q1tI"),r=n.n(l),m=n("/7QA"),c=a["a"].Item,i=[{label:"\u5b87\u667a\u6ce2\u4f50\u52a9",value:"zuozhu"},{label:"\u5b87\u667a\u6ce2\u9f2c",value:"you"},{label:"\u5b87\u667a\u6ce2\u6b62\u6c34",value:"zhishui"}],u=()=>r.a.createElement(a["a"],{initialValues:{single:"zuozhu",multiple:["you","zhishui"]}},r.a.createElement(c,{label:"\u5355\u9009\u6807\u7b7e",name:"single"},r.a.createElement(m["g"],{mode:"single",options:i})),r.a.createElement(c,{label:"\u591a\u9009\u6807\u7b7e",name:"multiple"},r.a.createElement(m["g"],{options:i})));t["default"]=u}}]);