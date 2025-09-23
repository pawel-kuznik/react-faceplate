import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Data/Tag',
  component: Tag,
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const DefaultText: Story = {
  args: {
    children: "Default Tag",
    formatting: "none",
    style: "text"
  }
};

export const BoxedStyle: Story = {
  args: {
    children: "Boxed Tag",
    formatting: "none",
    style: "boxed"
  }
};

export const Uppercased: Story = {
  args: {
    children: "uppercased tag",
    formatting: "uppercased",
    style: "boxed"
  }
};

export const Lowercased: Story = {
  args: {
    children: "LOWERCASED TAG",
    formatting: "lowercased",
    style: "boxed"
  }
};

export const Capitalized: Story = {
  args: {
    children: "capitalized tag",
    formatting: "capitalized",
    style: "boxed"
  }
};

export const AllFormattingStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag formatting="none" style="boxed">none</Tag>
      <Tag formatting="uppercased" style="boxed">uppercased</Tag>
      <Tag formatting="lowercased" style="boxed">LOWERCASED</Tag>
      <Tag formatting="capitalized" style="boxed">capitalized</Tag>
    </div>
  )
};

export const TextVsBoxed: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Tag style="text">Text Style</Tag>
      <Tag style="boxed">Boxed Style</Tag>
    </div>
  )
};