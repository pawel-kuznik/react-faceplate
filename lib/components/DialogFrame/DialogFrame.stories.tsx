import { Meta, StoryObj } from '@storybook/react';
import { DialogFrame } from './DialogFrame';
import { DataTable } from '../DataTable';

export default {
  title: 'components/DialogFrame',
  component: DialogFrame,
} as Meta<typeof DialogFrame>;

type Story = StoryObj<typeof DialogFrame>;

export const DefaultNormal: Story = {
  args: {
    title: "Dialog title",
    children: (
      <>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat nec metus dictum himenaeos est. Diam ut diam luctus cubilia suspendisse facilisis. Ex efficitur mauris tempus inceptos felis. Urna velit nascetur habitant ex senectus bibendum. Penatibus nam montes litora magnis odio. Rhoncus iaculis sapien mus sociosqu platea suspendisse aenean metus ligula.
        </p>
        <DataTable
          columns={[
            { label: "Column 1" },
            { label: "Column 2" },
            { label: "Column 3" },
          ]}
          data={[
            ["Cell 1", 1, 2],
            ["Cell 2", 1, 2],
            ["Cell 3", 1, 2],
          ]}
        />
      </>
    )
  }
};