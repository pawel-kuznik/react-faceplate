import { Meta, StoryObj } from "@storybook/react";
import { FormFieldGroup } from "./FormFieldGroup";
import { FormField } from "../FormField/FormField";

export default {
    title: 'components/FormFieldGroup',
    component: FormFieldGroup,
} as Meta<typeof FormFieldGroup>;

type Story = StoryObj<typeof FormFieldGroup>;

export const DefaultNormal: Story = {
    args: {
        children: (
            <>
                <FormField label="Field 1" type="text"/>
                <FormField label="Field 2" type="text"/>
                <FormField label="Field 3" type="text"/>
                <FormField label="Field 4" type="text"/>
            </>
        )
    }
};

export const WithWidths: Story = {
    args: {
        widths: [ '150px', '300px', '100px' ],
        children: (
            <>
                <FormField label="Field 1" type="text"/>
                <FormField label="Field 2" type="text"/>
                <FormField label="Field 3" type="text"/>
                <FormField label="Field 4" type="text"/>
            </>
        )
    }
};