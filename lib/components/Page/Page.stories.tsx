import { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { PageHeader } from '../PageHeader';
import { Button } from '../Button';

export default {
  title: 'components/Page',
  component: Page,
} as Meta<typeof Page>;

type Story = StoryObj<typeof Page>;

const sampleText = (
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat purus ac vehicula elementum. Ut sed pharetra lectus, vitae vestibulum ante. Morbi tempus diam et magna eleifend mattis. Donec accumsan lorem enim, congue dapibus nunc pretium et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mattis libero sit amet erat venenatis, in eleifend purus aliquam. In viverra tempor consequat. Etiam fringilla facilisis nisi. Morbi porttitor, sem id sodales pulvinar, urna ante blandit augue, vitae auctor sem ante ut velit. Morbi sodales nisi in volutpat rutrum. In blandit arcu ut efficitur vulputate. Donec eget mattis metus, eget laoreet tellus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat purus ac vehicula elementum. Ut sed pharetra lectus, vitae vestibulum ante. Morbi tempus diam et magna eleifend mattis. Donec accumsan lorem enim, congue dapibus nunc pretium et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mattis libero sit amet erat venenatis, in eleifend purus aliquam. In viverra tempor consequat. Etiam fringilla facilisis nisi. Morbi porttitor, sem id sodales pulvinar, urna ante blandit augue, vitae auctor sem ante ut velit. Morbi sodales nisi in volutpat rutrum. In blandit arcu ut efficitur vulputate. Donec eget mattis metus, eget laoreet tellus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat purus ac vehicula elementum. Ut sed pharetra lectus, vitae vestibulum ante. Morbi tempus diam et magna eleifend mattis. Donec accumsan lorem enim, congue dapibus nunc pretium et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mattis libero sit amet erat venenatis, in eleifend purus aliquam. In viverra tempor consequat. Etiam fringilla facilisis nisi. Morbi porttitor, sem id sodales pulvinar, urna ante blandit augue, vitae auctor sem ante ut velit. Morbi sodales nisi in volutpat rutrum. In blandit arcu ut efficitur vulputate. Donec eget mattis metus, eget laoreet tellus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat purus ac vehicula elementum. Ut sed pharetra lectus, vitae vestibulum ante. Morbi tempus diam et magna eleifend mattis. Donec accumsan lorem enim, congue dapibus nunc pretium et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mattis libero sit amet erat venenatis, in eleifend purus aliquam. In viverra tempor consequat. Etiam fringilla facilisis nisi. Morbi porttitor, sem id sodales pulvinar, urna ante blandit augue, vitae auctor sem ante ut velit. Morbi sodales nisi in volutpat rutrum. In blandit arcu ut efficitur vulputate. Donec eget mattis metus, eget laoreet tellus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat purus ac vehicula elementum. Ut sed pharetra lectus, vitae vestibulum ante. Morbi tempus diam et magna eleifend mattis. Donec accumsan lorem enim, congue dapibus nunc pretium et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mattis libero sit amet erat venenatis, in eleifend purus aliquam. In viverra tempor consequat. Etiam fringilla facilisis nisi. Morbi porttitor, sem id sodales pulvinar, urna ante blandit augue, vitae auctor sem ante ut velit. Morbi sodales nisi in volutpat rutrum. In blandit arcu ut efficitur vulputate. Donec eget mattis metus, eget laoreet tellus.</p>
    </>
);

export const DefaultNormal: Story = {
  args: {
    children: sampleText
  }
};

export const Predefined800: Story = {
    args: {
        width: "800px",
        children: sampleText
    }
};

export const Centered: Story = {
    args: {
        width: "800px",
        centered: true,
        children: sampleText
    }
};

export const WithHeader: Story = {
  args: {
    width: "800px",
    children: (
      <>
        <PageHeader title="Page title" rightControls={(<Button label="Button"/>)} borders/>
        {sampleText}
      </>
    )
  }
};