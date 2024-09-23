import { Meta, StoryObj } from '@storybook/react';
import { EditableHeading } from './EditableHeading';

export default {
  title: 'components/EditableHeading',
  component: EditableHeading,
} as Meta<typeof EditableHeading>;

type Story = StoryObj<typeof EditableHeading>;

export const DefaltHeading: Story = {
  args: {
    defaultValue: "Title here"
  }
};

export const NonEditableHeading: Story = {
    args: {
        readonly: true,
        defaultValue: "Title here"
    }
};

export const Level1: Story = {
    args: {
        defaultValue: "Title here",
        level: 1
    }
};

export const Level2: Story = {
    args: {
        defaultValue: "Title here",
        level: 2
    }
};

export const Level3: Story = {
    args: {
        defaultValue: "Title here",
        level: 3
    }
};