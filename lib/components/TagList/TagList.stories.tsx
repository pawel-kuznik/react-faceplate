import { Meta, StoryObj } from '@storybook/react';
import { TagList } from './TagList';
import { TagPicker } from '../TagPicker';

export default {
  title: 'components/TagList',
  component: TagList,
} as Meta<typeof TagList>;

type Story = StoryObj<typeof TagList>;

export const BasicList: Story = {
  args: {
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
    style: "boxed"
  }
};

export const WithRemoveButtons: Story = {
  args: {
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
    style: "boxed",
    onRemove: (tag, index) => {
      console.log(`Remove ${tag} at index ${index}`);
    }
  }
};

export const WithFormattingUppercase: Story = {
  args: {
    tags: ["react", "typescript", "javascript", "css"],
    formatting: "uppercased",
    style: "boxed"
  }
};

export const WithFormattingCapitalized: Story = {
  args: {
    tags: ["react", "typescript", "javascript", "css"],
    formatting: "capitalized",
    style: "boxed"
  }
};

export const TextStyle: Story = {
  args: {
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
    style: "text"
  }
};

export const WithPicker: Story = {
  args: {
    tags: ["React", "TypeScript"],
    style: "boxed",
    picker: (
      <TagPicker
        options={["JavaScript", "CSS", "HTML", "Node.js", "Python"]}
        onPick={(tag) => console.log(`Picked: ${tag}`)}
      />
    ),
    onRemove: (tag, index) => {
      console.log(`Remove ${tag} at index ${index}`);
    }
  }
};

export const EmptyWithPicker: Story = {
  args: {
    tags: [],
    style: "boxed",
    picker: (
      <TagPicker
        options={["React", "TypeScript", "JavaScript", "CSS", "HTML"]}
        onPick={(tag) => console.log(`Picked: ${tag}`)}
      />
    )
  }
};