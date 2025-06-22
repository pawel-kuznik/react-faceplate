import { Meta, StoryObj } from "@storybook/react";
import { FormFieldLine } from "./FormFieldLine";
import { Input } from "../Input";

export default {
    title: 'components/FormFieldLine',
    component: FormFieldLine,
} as Meta<typeof FormFieldLine>;

type Story = StoryObj<typeof FormFieldLine>;

export const DefaultNormal: Story = {
    args: {
        label: 'Form field line',
        description: 'This is a description of the form field line',
        children: (
            <>
                <Input/>
                <Input/>
                <span style={{ width: "1ch"}}>x</span>
                <Input/>
            </>
        )
    }
};

export const WithWidths: Story = {
    args: {
        label: 'Form field line',
        description: 'This is a description of the form field line',
        widths: [ 'auto', 'auto', 'min-content' ],
        children: (
            <>
                <Input/>
                <Input/>
                <span style={{ width: "1ch"}}>x</span>
                <Input/>
            </>
        )
    }
};