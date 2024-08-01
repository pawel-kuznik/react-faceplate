import { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

export default {
    title: 'components/FormField',
    component: FormField,
} as Meta<typeof FormField>;

type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
    args: {
        label: "Text field",
        type: "text"
    }
};

export const NumberInput: Story = {
    args: {
        label: "Number field",
    type: "number"
    }
};

export const SelectInput: Story = {
    args: {
        label: "Select field",
        type: "select",
        options: [
            "1", "2"
        ],
        labels: [
            "Option 1",
            "Option 2"
        ]
    }
};
