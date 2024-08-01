import { Meta, StoryObj } from '@storybook/react';
import { Placeholder } from '../Placeholder';

export default {
  title: 'components/Placeholder',
  component: Placeholder,
} as Meta<typeof Placeholder>;

type Story = StoryObj<typeof Placeholder>;

export const Red: Story = {
  args: {
    width: "400px",
    height: "200px",
    color: "red"
  }
};

export const Orange: Story = {
    args: {
      width: "400px",
      height: "200px",
      color: "orange"
    }
};

export const Blue: Story = {
    args: {
      width: "400px",
      height: "200px",
      color: "blue"
    }
};

export const Green: Story = {
    args: {
      width: "400px",
      height: "200px",
      color: "green"
    }
};

export const Gray: Story = {
    args: {
      width: "400px",
      height: "200px",
      color: "gray"
    }
};
  
export const Black: Story = {
    args: {
      width: "400px",
      height: "200px",
      color: "black"
    }
};
