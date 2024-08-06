import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
  title: 'components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Horizontal: Story = {
  args: {
    tabs: [
        { label: "Tab 1" },
        { label: "Tab 2" },
        { label: "Tab 3" },
        { label: "Tab 4" },
        { label: "Tab 5" }
    ]
  }
};

export const Vertical: Story = {
    args: {
      layout: "vertical",
      tabs: [
          { label: "Tab 1" },
          { label: "Tab 2" },
          { label: "Longer Tab 3" },
          { label: "Tab 4" },
          { label: "Tab 5" }
      ]
    }
  };
