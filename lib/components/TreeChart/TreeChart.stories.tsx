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
            <TreeChart.Node width={300}>
                <a href="#/hello">Hello</a>
            </TreeChart.Node>
            <TreeChart.Group node="Child 2">
              <TreeChart.List node="Child 2.1">
                <TreeChart.Node>
                  Child 2.1.1
                </TreeChart.Node>
                <TreeChart.Node>
                  Child 2.1.2
                </TreeChart.Node>
                <TreeChart.Node>
                  Child 2.1.3
                </TreeChart.Node>
                <TreeChart.Node>
                  Child 2.1.4
                </TreeChart.Node>
                <TreeChart.Node>
                  Child 2.1.5
                </TreeChart.Node>
              </TreeChart.List>
              <TreeChart.Group node="Child 2.2">
                <TreeChart.Node>
                  Child 2.2.1
                </TreeChart.Node>
                <TreeChart.Node>
                  Child 2.2.2
              </TreeChart.Node>
              </TreeChart.Group>
              <TreeChart.Node>
                Child 2.3 TEST
              </TreeChart.Node>
            </TreeChart.Group>
            <TreeChart.Node width={200}>
                Child 3
            </TreeChart.Node>
            <TreeChart.Node>
                Child 4
            </TreeChart.Node>
        </TreeChart.Group>
    )
  }
};
