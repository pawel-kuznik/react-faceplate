import{j as e}from"./jsx-runtime-DEdD30eg.js";import{F as t}from"./FormField-Byqbmy8P.js";import{F as f}from"./FormGroup-CCRGAMwx.js";import{B as g}from"./Button-jK82ZV5_.js";import{C as a}from"./ContentBox-C882y8ho.js";import{D as w}from"./DataTable-c70zkv_z.js";import"./index-RYns6xqu.js";import"./FormFieldLayout-BHuoAg8K.js";import"./Input-DPV35xun.js";import"./SideToolbox-DkNN-awN.js";function b({children:h}){return e.jsx("div",{className:"faceplate-screenbox",children:h})}b.__docgenInfo={description:`This is a component that puts children in a CRT like screen box.
 This is mostly so that we can declare a clear start for specific
 styles.`,methods:[],displayName:"ScreenBox",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The children of the SceenBox."}}};const T={title:"components/ScreenBox",component:b},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"text",label:"Input one",name:"one"}),e.jsx(t,{type:"text",label:"Input two",name:"two"}),e.jsx(t,{type:"select",label:"Select input",options:[],labels:[],name:"three"})]})}},n={args:{children:e.jsxs(f,{children:[e.jsx(t,{type:"text",label:"Input one",name:"one"}),e.jsx(t,{type:"text",label:"Input two",name:"two"}),e.jsx(t,{type:"select",label:"Select input",options:[],labels:[],name:"three"}),e.jsx(g,{label:"Submit",style:"yellow"})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{label:"Content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(w,{columns:[{label:"Column 1"},{label:"Column 2"},{label:"Column 3"}],data:[["Row 1","1","2"],["Row 2","2","2"],["Row 3","4","5"],["Row 4","2","6"],["Row 5","1","1"]]})]}),e.jsx(a,{label:"Another content box",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})}};var r,l,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <FormField type="text" label="Input one" name="one" />
        <FormField type="text" label="Input two" name="two" />
        <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
      </>
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var u,m,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <FormGroup>
        <FormField type="text" label="Input one" name="one" />
        <FormField type="text" label="Input two" name="two" />
        <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
        <Button label="Submit" style="yellow" />
      </FormGroup>
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <ContentBox label="Content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <DataTable columns={[{
          label: "Column 1"
        }, {
          label: "Column 2"
        }, {
          label: "Column 3"
        }]} data={[["Row 1", "1", "2"], ["Row 2", "2", "2"], ["Row 3", "4", "5"], ["Row 4", "2", "6"], ["Row 5", "1", "1"]]} />
        </ContentBox>
        <ContentBox label="Another content box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ContentBox>
      </>
  }
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const I=["ExampleOne","ExmapleTwo","ExmapleThree"];export{o as ExampleOne,i as ExmapleThree,n as ExmapleTwo,I as __namedExportsOrder,T as default};
