import { Meta, StoryObj } from '@storybook/react';
import { TabsFrame } from './TabsFrame';

export default {
  title: 'components/TabsFrame',
  component: TabsFrame,
} as Meta<typeof TabsFrame>;

type Story = StoryObj<typeof TabsFrame>;

export const Horizontal: Story = {
  args: {
    children: (
        <>
            <TabsFrame.Tab label='Tab 1'>
                Content  1
            </TabsFrame.Tab>
            <TabsFrame.Tab label='Tab 2'>
                Content  2
            </TabsFrame.Tab>
            <TabsFrame.Tab label='Tab 3'>
                Content  3
            </TabsFrame.Tab>
        </>
    )
  }
};

export const Vertical: Story = {
    args: {
      layout: "vertical",
      children: (
          <>
              <TabsFrame.Tab label='Tab 1'>
                  Content  1
              </TabsFrame.Tab>
              <TabsFrame.Tab label='Tab 2'>
                  Content  2
              </TabsFrame.Tab>
              <TabsFrame.Tab label='Tab 3'>
                  Content  3
              </TabsFrame.Tab>
          </>
      )
    }
  };