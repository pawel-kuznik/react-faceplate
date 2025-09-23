import { Meta, StoryObj } from '@storybook/react';
import { TagInput } from './TagInput';
import { TagPicker } from '../TagPicker';

export default {
  title: 'Inputs/TagInput',
  component: TagInput,
} as Meta<typeof TagInput>;

type Story = StoryObj<typeof TagInput>;

export const Basic: Story = {
  args: {
    name: "tags",
    placeholder: "Add some tags...",
    picker: (props) => (
      <TagPicker
        {...props}
        options={["React", "TypeScript", "JavaScript", "CSS", "HTML", "Node.js"]}
      />
    )
  }
};

export const WithDefaultValue: Story = {
  args: {
    name: "tags",
    defaultValue: "React,TypeScript,JavaScript",
    placeholder: "Add more tags...",
    picker: (props) => (
      <TagPicker
        {...props}
        options={["CSS", "HTML", "Node.js", "Python", "Vue", "Angular"]}
      />
    )
  }
};

export const Readonly: Story = {
  args: {
    name: "tags",
    defaultValue: "React,TypeScript,JavaScript",
    readonly: true
  }
};

export const WithTagListProps: Story = {
  args: {
    name: "tags",
    defaultValue: "react,typescript,javascript",
    placeholder: "Add more technologies...",
    tagListProps: {
      formatting: "capitalized",
      style: "boxed"
    },
    picker: (props) => (
      <TagPicker
        {...props}
        options={["css", "html", "node.js", "python", "vue", "angular"]}
      />
    )
  }
};

export const LargeTechStack: Story = {
  args: {
    name: "tech-stack",
    defaultValue: "React,TypeScript,Node.js,PostgreSQL,Docker",
    placeholder: "Add more technologies to your stack...",
    tagListProps: {
      formatting: "none",
      style: "boxed"
    },
    picker: (props) => (
      <TagPicker
        {...props}
        options={[
          "JavaScript", "Python", "Java", "Go", "Rust",
          "Vue", "Angular", "Svelte", "Next.js", "Express",
          "MongoDB", "MySQL", "Redis", "AWS", "Azure",
          "Kubernetes", "Jest", "Cypress", "GraphQL", "REST"
        ]}
        placeholder="Choose a technology..."
      />
    )
  }
};

export const FormIntegration: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      console.log("Form data:", Object.fromEntries(formData));
      alert(`Tags: ${formData.get('skills')}`);
    };

    return (
      <form onSubmit={handleSubmit} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
          <input type="text" id="name" name="name" defaultValue="John Doe" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Skills:</label>
          <TagInput
            name="skills"
            defaultValue="React,TypeScript"
            placeholder="Add your skills..."
            tagListProps={{ style: "boxed", formatting: "none" }}
            picker={(props) => (
              <TagPicker
                {...props}
                options={["JavaScript", "Python", "Java", "CSS", "HTML", "Node.js", "Docker", "AWS"]}
                placeholder="Select a skill..."
              />
            )}
          />
        </div>
        
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    );
  }
};