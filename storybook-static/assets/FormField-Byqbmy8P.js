import{j as m}from"./jsx-runtime-DEdD30eg.js";import{r as y}from"./index-RYns6xqu.js";import{F as b}from"./FormFieldLayout-BHuoAg8K.js";import{I as T}from"./Input-DPV35xun.js";function g({name:p,options:l,labels:o,titles:t,onChange:a,defaultValue:i,valueRef:r}){const s=y.useRef(null),c=e=>{const n=e.target.value;r&&(r.current=n),a==null||a(n)},u=(e,n)=>{if(t!==void 0)return typeof t=="function"?t(e):t[n]},d=(()=>{if(t){if(s.current)return u(s.current.value,l.findIndex(e=>{var n;return e===((n=s.current)==null?void 0:n.value)}));if(i!==void 0)return u(i,l.findIndex(e=>e===i))}})();return m.jsx("select",{className:"faceplate-selectinput",ref:s,onChange:c,name:p,defaultValue:i||(r==null?void 0:r.current),title:d,children:l.map((e,n)=>{const f=typeof o=="function"?o(e):o[n];return m.jsx("option",{value:e,title:u(e,n),children:f},e)})})}g.__docgenInfo={description:`This component is basically the same as the select element. Similarly to
 Input component, this component exists to simplify select element handling
 and integrate it with the rest of the library.`,methods:[],displayName:"SelectInput",props:{name:{required:!1,tsType:{name:"string"},description:"The name of the input"},options:{required:!0,tsType:{name:"union",raw:"string[] | readonly string[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:"The options/values of the select"},labels:{required:!0,tsType:{name:"union",raw:"string[] | readonly string[] | ((option: string) => string)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"},{name:"unknown"}]},description:`The labels of the select. The parameter can be a function that
 translates a value into a label.`},titles:{required:!1,tsType:{name:"union",raw:"string[] | readonly string[] | ((option: string) => string)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"},{name:"unknown"}]},description:`The titles/tooltips of the options. The parameter can be also a
 function that translates a value into a title/tooltip.`},defaultValue:{required:!1,tsType:{name:"string"},description:"The default value of the input."},valueRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"string"}],raw:"MutableRefObject<string>"},description:"A mutable reference to the value."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"A callback called when user changes the value of the input."}}};function w({layout:p="column",description:l,label:o,name:t,type:a,min:i,max:r,list:s,options:c,labels:u,titles:d,defaultValue:e,valueRef:n,onChange:f}){const h={type:a,name:t,min:i,max:r,list:s,options:c,labels:u,titles:d,valueRef:n,onChange:f};return e!==void 0&&(h.defaultValue=e),m.jsx(b,{label:o,layout:p,description:l,children:a==="select"?m.jsx(g,{...h}):m.jsx(T,{...h})})}w.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{layout:{required:!1,tsType:{name:"union",raw:'"inline" | "column"',elements:[{name:"literal",value:'"inline"'},{name:"literal",value:'"column"'}]},description:"The layout of the component:\n `inline` - means that the label and the input will be in one\n line and it will not render as a block.\n `column` - means that the label will be on top of the input \n and it will render as a block.",defaultValue:{value:'"column"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"The label that describes the field."},description:{required:!1,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:"Description that should be shown after the input."},name:{required:!0,tsType:{name:"string"},description:"The name of the input."},list:{required:!1,tsType:{name:"string"},description:"The HTML id of a list of suggestions for text/number fields."},type:{required:!1,tsType:{name:"union",raw:'"number" | "text" | "select"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'},{name:"literal",value:'"select"'}]},description:"Type of the input."},options:{required:!1,tsType:{name:"union",raw:"string[] | readonly string[]",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:'The options of the input. This is only applicable for "select" inputs.'},labels:{required:!1,tsType:{name:"union",raw:"string[] | ((option: string) => string)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`The labels for the options. This is only applicable for "select" inputs.
 The value can be either an array of labels or a function that can translate
 the options into labels.`},titles:{required:!1,tsType:{name:"union",raw:"string[] | ((option: string) => string)",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"unknown"}]},description:`The titles/tooltips for the options. This is only applicable for "select"
 inputs. The value can be an array of labels or a function that can translate
 the options into titles.`},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'The minimal value. It makes only sense for "number" inputs.'},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:'The maximal value. It makes only sense for "number" inputs.'},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The default value of the input."},valueRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"string"}],raw:"MutableRefObject<string>"},description:"A mutable reference to the value."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"A callback to call when user changed the value."}}};export{w as F};
