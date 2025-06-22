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
        widths: [ '100px', '100px', 'auto' ],
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