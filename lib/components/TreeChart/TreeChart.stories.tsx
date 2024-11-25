import { Meta, StoryObj } from '@storybook/react';
import { TreeChart } from './TreeChart';

export default {
  title: 'components/TreeChart',
  component: TreeChart,
} as Meta<typeof TreeChart>;

type Story = StoryObj<typeof TreeChart>;

export const DefaultNormal: Story = {
  args: {
    children: (
        <TreeChart.Group node="Parent">
            <TreeChart.Node>
                Child 1
            </TreeChart.Node>
            <TreeChart.Node>
                Child 2
            </TreeChart.Node>
            <TreeChart.Node>
                Child 3
            </TreeChart.Node>
        </TreeChart.Group>
    )
  }
};
