import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

export default {
  title: 'components/DataTable',
  component: DataTable,
} as Meta<typeof DataTable>;

type Story = StoryObj<typeof DataTable>;

export const DefaultNormal: Story = {
  args: {
    columns: [
        { label: "Column 1" },
        { label: "Column 2" },
        { label: "Column 3" },
    ],
    data: [
        [ "Cell 1", 1, 2 ],
        [ "Cell 2", 1, 2 ],
        [ "Cell 3", 1, 2 ],
    ]
  }
};