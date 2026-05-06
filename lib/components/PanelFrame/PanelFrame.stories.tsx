import { Meta, StoryObj } from '@storybook/react';
import { PanelFrame } from './PanelFrame';
import { DataTable } from '../DataTable';
import { ReactNode } from 'react';

export default {
  title: 'Layouts/PanelFrame',
  component: PanelFrame,
} as Meta<typeof PanelFrame>;

type Story = StoryObj<typeof PanelFrame>;

interface SpaceProps {
  children: ReactNode;
};

function Space({ children }: SpaceProps) {
  return (
    <div style={{ width: '1200px', height: '600px', position: 'relative' }}>
      {children}
    </div>
  );
};

const exampleContent = (
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
);

export const Right: Story = {
  decorators: [
    (Story, props) => <Space><Story {...props} /></Space>
  ],
  args: {
    side: "right",
    title: "Right panel",
    onClose: () => { alert("Close panel") },
    children: exampleContent
  }
};

export const Left: Story = {
  decorators: [
    (Story, props) => <Space><Story {...props} /></Space>
  ],
  args: {
    side: "left",
    width: 420,
    height: 560,
    title: "Left panel",
    onClose: () => { alert("Close panel") },
    children: exampleContent
  }
};

export const Top: Story = {
  decorators: [
    (Story, props) => <Space><Story {...props} /></Space>
  ],
  args: {
    side: "top",
    width: 1160,
    height: 240,
    title: "Top panel",
    onClose: () => { alert("Close panel") },
    children: exampleContent
  }
};

export const Bottom: Story = {
  decorators: [
    (Story, props) => <Space><Story {...props} /></Space>
  ],
  args: {
    side: "bottom",
    width: 1160,
    height: 240,
    title: "Bottom panel",
    onClose: () => { alert("Close panel") },
    children: exampleContent
  }
};

