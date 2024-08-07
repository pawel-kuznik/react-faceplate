import{j as e}from"./jsx-runtime-DEdD30eg.js";function t({label:r}){return e.jsx("th",{children:r})}t.__docgenInfo={description:"The internal column component for the DataTable.",methods:[],displayName:"Column",props:{label:{required:!0,tsType:{name:"string"},description:"The label of the column."}}};function o({columns:r}){return e.jsx("thead",{children:e.jsx("tr",{children:r.map((n,a)=>e.jsx(t,{...n},a))})})}o.__docgenInfo={description:"The header part of the DataTable.",methods:[],displayName:"Header",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnProps"}],raw:"ColumnProps[]"},description:"Properties of columns to render."}}};function s({cells:r}){return e.jsx("tr",{children:r.map((n,a)=>e.jsx("td",{children:n},a))})}s.__docgenInfo={description:"",methods:[],displayName:"Row",props:{cells:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"ReactNode|string|number",elements:[{name:"ReactNode"},{name:"string"},{name:"number"}]}],raw:"Array<ReactNode|string|number>"},description:""}}};function m({data:r}){return e.jsx("tbody",{children:r.map((n,a)=>e.jsx(s,{cells:n},a))})}m.__docgenInfo={description:"",methods:[],displayName:"Body",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"ReactNode | string | number",elements:[{name:"ReactNode"},{name:"string"},{name:"number"}]}],raw:"Array<ReactNode | string | number>"}],raw:"Array<Array<ReactNode | string | number>>"},description:"The data to show in the table."}}};function i({columns:r,data:n}){return e.jsxs("table",{className:"faceplate-datatable",children:[r&&e.jsx(o,{columns:r}),n&&e.jsx(m,{data:n})]})}i.__docgenInfo={description:"A component to show data in a table form.",methods:[],displayName:"DataTable",props:{columns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnProps"}],raw:"ColumnProps[]"},description:"Definitions for columns."},data:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"ReactNode|string|number",elements:[{name:"ReactNode"},{name:"string"},{name:"number"}]}],raw:"Array<ReactNode|string|number>"}],raw:"Array<Array<ReactNode|string|number>>"},description:"The data to show in the table."}}};export{i as D};
