import { Meta, StoryObj } from '@storybook/react';
import { FormFieldLayout } from './FormFieldLayout';
import { Placeholder } from '../Placeholder';

export default {
  title: 'components/FormFieldLayout',
  component: FormFieldLayout,
} as Meta<typeof FormFieldLayout>;

type Story = StoryObj<typeof FormFieldLayout>;

export const Column: Story = {
  args: {
    layout: "column",
    label: "Field label",
    children: (<Placeholder height="16px"/>)
  }
};

export const ColumnWithDescription: Story = {
    args: {
      layout: "column",
      label: "Field label",
      children: (<Placeholder height="16px"/>),
      description: "Description text"
    }
};

export const Inline: Story = {
    args: {
        layout: "inline",
        label: "Field label",
        children: (<Placeholder height="16px"/>)
    }
};

export const InlineWithDescrioption: Story = {
    args: {
        layout: "inline",
        label: "Field label",
        children: (<Placeholder height="16px"/>),
        description: "Description text"
    }
};