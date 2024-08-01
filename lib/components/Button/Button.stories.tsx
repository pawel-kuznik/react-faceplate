import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button label",
    style: "default"
  }
};

export const Red: Story = {
  args: {
    label: "Button label",
    style: "red"
  }
};

export const Orange: Story = {
  args: {
    label: "Button label",
    style: "orange"
  }
};

export const Yellow: Story = {
  args: {
    label: "Button label",
    style: "yellow"
  }
};