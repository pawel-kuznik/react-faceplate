import { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'components/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    rows: 10
  }
};

  