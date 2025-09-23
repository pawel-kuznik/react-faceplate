import { Meta, StoryObj } from '@storybook/react';
import { TagPicker } from './TagPicker';

export default {
  title: 'Inputs/TagPicker',
  component: TagPicker,
} as Meta<typeof TagPicker>;

type Story = StoryObj<typeof TagPicker>;

export const Basic: Story = {
  args: {
    options: ["React", "TypeScript", "JavaScript", "CSS", "HTML"],
    onPick: (tag) => {
      console.log(`Selected: ${tag}`);
      alert(`You picked: ${tag}`);
    }
  }
};

export const WithCustomLabels: Story = {
  args: {
    options: ["react", "typescript", "javascript", "css", "html"],
    labels: ["React Framework", "TypeScript", "JavaScript", "CSS Styles", "HTML Markup"],
    onPick: (tag) => {
      console.log(`Selected: ${tag}`);
      alert(`You picked: ${tag}`);
    }
  }
};

export const WithCustomPlaceholder: Story = {
  args: {
    options: ["frontend", "backend", "fullstack", "mobile", "desktop"],
    placeholder: "Choose a development area...",
    onPick: (tag) => {
      console.log(`Selected: ${tag}`);
      alert(`You picked: ${tag}`);
    }
  }
};

export const ManyOptions: Story = {
  args: {
    options: [
      "React", "Vue", "Angular", "Svelte", "TypeScript", "JavaScript", 
      "CSS", "SCSS", "HTML", "Node.js", "Python", "Java", "C#", "Go", 
      "Rust", "PHP", "Ruby", "Swift", "Kotlin"
    ],
    placeholder: "Select a technology...",
    onPick: (tag) => {
      console.log(`Selected: ${tag}`);
      alert(`You picked: ${tag}`);
    }
  }
};