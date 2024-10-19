import { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';

export default {
  title: 'components/BarChart',
  component: BarChart,
} as Meta<typeof BarChart>;

type Story = StoryObj<typeof BarChart>;

export const DefaultNormal: Story = {
  args: {
    data: [ 12, 50, 30, 42, 11 ],
    labels: [ "Label 0", "Label 1", "Label 2", "Label 3", "Label 4" ],
    colors: "blue"
  }
};

export const DenseNormal: Story = {
    args: {
      data: [ 12, 50, 30, 42, 11, 23, 34, 53, 66, 33, 44, 112, 23, 34, 34, 23, 66, 34, 56, 64, 12  ],
      labels: [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20" ],
      groups: [
        { label: "Initial", start: 0, end: 6, color: "green" },
        { label: "Middle", start: 7, end: 15, color: "yellow" },
        { label: "End", start: 16, end: 20, color: "red" }
      ]
    }
  };