import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as y}from"./Button-jK82ZV5_.js";import{D as l}from"./DataTable-c70zkv_z.js";import"./index-RYns6xqu.js";function h({width:t="auto",height:n="auto",topOffset:g=0,leftOffset:x=0,title:C,onClose:D,children:v}){const T={width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,top:`${g}px`,left:`${x}px`};return e.jsxs("div",{className:"faceplate-dialogframe",style:T,children:[e.jsx("div",{className:"faceplate-dialogframe-title",children:C}),e.jsx("div",{className:"faceplate-dialogframe-controls",children:e.jsx(y,{size:"mini",style:"red",onClick:D})}),e.jsx("div",{className:"faceplate-dialogframe-content",children:v})]})}h.__docgenInfo={description:`This component is a frame around a dialog element. The content of the dialog
 can be anything.`,methods:[],displayName:"DialogFrame",props:{width:{required:!1,tsType:{name:"union",raw:'number | "auto"',elements:[{name:"number"},{name:"literal",value:'"auto"'}]},description:`The width of the frame in pixels. By default it will
 use auto.`,defaultValue:{value:'"auto"',computed:!1}},height:{required:!1,tsType:{name:"union",raw:'number | "auto"',elements:[{name:"number"},{name:"literal",value:'"auto"'}]},description:`The height of the frame in pixels. By default it will
 use auto.`,defaultValue:{value:'"auto"',computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"The offset in px from the left border of the positioning parent.",defaultValue:{value:"0",computed:!1}},topOffset:{required:!1,tsType:{name:"number"},description:"The offset in px from the top border of the positioning parent.",defaultValue:{value:"0",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"The title of the dialog."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"A callback to call when user wants to close the dialog."},children:{required:!1,tsType:{name:"ReactNode"},description:"The children of the dialog."}}};const F={title:"components/DialogFrame",component:h},a={args:{title:"Dialog title",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula."}),e.jsx(l,{columns:[{label:"Column 1"},{label:"Column 2"},{label:"Column 3"}],data:[["Cell 1",1,2],["Cell 2",1,2],["Cell 3",1,2]]})]})}},s={args:{width:400,title:"Dialog title",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula."}),e.jsx(l,{columns:[{label:"Column 1"},{label:"Column 2"},{label:"Column 3"}],data:[["Cell 1",1,2],["Cell 2",1,2],["Cell 3",1,2]]})]})}},i={args:{width:400,leftOffset:200,topOffset:100,title:"Dialog title",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula."}),e.jsx(l,{columns:[{label:"Column 1"},{label:"Column 2"},{label:"Column 3"}],data:[["Cell 1",1,2],["Cell 2",1,2],["Cell 3",1,2]]})]})}};var o,u,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Dialog title",
    children: <>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
        </p>
        <DataTable columns={[{
        label: "Column 1"
      }, {
        label: "Column 2"
      }, {
        label: "Column 3"
      }]} data={[["Cell 1", 1, 2], ["Cell 2", 1, 2], ["Cell 3", 1, 2]]} />
      </>
  }
}`,...(r=(u=a.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    width: 400,
    title: "Dialog title",
    children: <>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
        </p>
        <DataTable columns={[{
        label: "Column 1"
      }, {
        label: "Column 2"
      }, {
        label: "Column 3"
      }]} data={[["Cell 1", 1, 2], ["Cell 2", 1, 2], ["Cell 3", 1, 2]]} />
      </>
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,f,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    width: 400,
    leftOffset: 200,
    topOffset: 100,
    title: "Dialog title",
    children: <>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
        </p>
        <DataTable columns={[{
        label: "Column 1"
      }, {
        label: "Column 2"
      }, {
        label: "Column 3"
      }]} data={[["Cell 1", 1, 2], ["Cell 2", 1, 2], ["Cell 3", 1, 2]]} />
      </>
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const E=["DefaultNormal","FixedSize","MovedSize"];export{a as DefaultNormal,s as FixedSize,i as MovedSize,E as __namedExportsOrder,F as default};
