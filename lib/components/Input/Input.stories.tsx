import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'components/Input',
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text"
  }
};

export const NumberInput: Story = {
    args: {
      type: "number"
    }
};

export const ReadOnlyInput: Story = {
  args: {
    readonly: true
  }
};
  