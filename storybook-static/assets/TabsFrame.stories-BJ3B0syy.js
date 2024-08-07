import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{G as C,C as c}from"./Grid-_BjTxjkt.js";import{T as y}from"./Tabs-Bw3A4ZKw.js";function l({}){return e.jsx(e.Fragment,{})}l.__docgenInfo={description:"The tab inside the TabsFrame.",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function a({layout:t="horizontal",children:r}){const[n,F]=i.useState(0),b=f(r),g=b.map(x=>({label:x.props.label}));return e.jsxs(C,{columns:t==="horizontal"?1:5,rows:t==="horizontal"?5:1,children:[e.jsx(c,{mount:!0,children:e.jsx(y,{layout:t,tabs:g,onTabChange:F})}),e.jsx(c,{xSpan:t==="horizontal"?1:4,ySpan:t==="horizontal"?1:4,children:b[n].props.children})]})}function f(t){const r=[];return i.Children.forEach(t,n=>{if(n.type===i.Fragment){r.push(...f(n.props.children));return}n.type===l&&r.push(n)}),r}a.Tab=l;a.__docgenInfo={description:`TabsFrame component is an easy way to use tabs with switching content.
 The component has to be defined in a very specific way: each child of this
 component should be a TabsFrame.Tab component with configuration about
 the tab and content.

 The tab configuration are the attributes of the TabsFrame.Tab component 
 and the content of the tab is the children. The children will not be rendered
 (or even present in the DOM) when the tab is not active. This means that
 any logic associated with them will not run.`,methods:[{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ }: TabProps",optional:!1,type:{name:"TabProps",alias:"TabProps"}}],returns:null}],displayName:"TabsFrame",props:{layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:`The layout of the tabs. The name of the layout refers to
 layout of the tabs items, not the relation between tabs
 and content.

 horizontal -    The tabs are on the top of the content.
 vertical -      The tabs are on the left of the content.`,defaultValue:{value:'"horizontal"',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:`The children of the TabsFrame. The children should be
 either a list of TabsFrame.Tab or a fragment that contains
 TabFrameTabs.`}}};const _={title:"components/TabsFrame",component:a},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Tab,{label:"Tab 1",children:"Content  1"}),e.jsx(a.Tab,{label:"Tab 2",children:"Content  2"}),e.jsx(a.Tab,{label:"Tab 3",children:"Content  3"})]})}},s={args:{layout:"vertical",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Tab,{label:"Tab 1",children:"Content  1"}),e.jsx(a.Tab,{label:"Tab 2",children:"Content  2"}),e.jsx(a.Tab,{label:"Tab 3",children:"Content  3"})]})}};var T,h,m;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <>
            <TabsFrame.Tab label='Tab 1'>
                Content  1
            </TabsFrame.Tab>
            <TabsFrame.Tab label='Tab 2'>
                Content  2
            </TabsFrame.Tab>
            <TabsFrame.Tab label='Tab 3'>
                Content  3
            </TabsFrame.Tab>
        </>
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: <>
              <TabsFrame.Tab label='Tab 1'>
                  Content  1
              </TabsFrame.Tab>
              <TabsFrame.Tab label='Tab 2'>
                  Content  2
              </TabsFrame.Tab>
              <TabsFrame.Tab label='Tab 3'>
                  Content  3
              </TabsFrame.Tab>
          </>
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Horizontal","Vertical"];export{o as Horizontal,s as Vertical,S as __namedExportsOrder,_ as default};
