import { Meta, StoryObj } from '@storybook/react';
import { DescriptiveHeader } from './DescriptiveHeader';
import { Button } from '../Button/Button';
import { ButtonLine } from '../ButtonLine/ButtonLine';

const meta: Meta<typeof DescriptiveHeader> = {
  title: 'components/DescriptiveHeader',
  component: DescriptiveHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    description: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DescriptiveHeader>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Application',
    description: 'This is a descriptive header with some helpful information about the section below.',
    children: <span>This is some content inside the descriptive header.</span>,
  },
};

export const WithButton: Story = {
  args: {
    title: 'User Profile',
    level: 2,
    description: 'Manage your account settings and preferences.',
    children: (
      <Button 
        label="Edit Profile" 
        color="blue" 
        onClick={() => console.log('Edit Profile clicked')}
      />
    ),
  },
};

export const WithButtonLine: Story = {
  args: {
    title: 'Document Actions',
    level: 3,
    description: 'Choose an action to perform on this document.',
    children: (
      <ButtonLine>
        <Button label="Save" color="green" onClick={() => console.log('Save clicked')} />
        <Button label="Cancel" color="gray" onClick={() => console.log('Cancel clicked')} />
        <Button label="Delete" color="red" onClick={() => console.log('Delete clicked')} />
      </ButtonLine>
    ),
  },
};

export const WithVerticalButtonLine: Story = {
  args: {
    title: 'Settings Menu',
    level: 4,
    description: 'Configure your application settings.',
    children: (
      <ButtonLine direction="vertical">
        <Button label="General" color="default" onClick={() => console.log('General clicked')} />
        <Button label="Security" color="default" onClick={() => console.log('Security clicked')} />
        <Button label="Privacy" color="default" onClick={() => console.log('Privacy clicked')} />
      </ButtonLine>
    ),
  },
};

export const WithMixedContent: Story = {
  args: {
    title: 'Project Overview',
    level: 2,
    description: 'View and manage your project details.',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <span style={{ color: '#666', fontSize: '0.9rem' }}>
          Project ID: PRJ-2024-001
        </span>
        <ButtonLine>
          <Button label="View Details" color="blue" onClick={() => console.log('View Details clicked')} />
          <Button label="Export" color="green" onClick={() => console.log('Export clicked')} />
        </ButtonLine>
      </div>
    ),
  },
};

export const WithIconButton: Story = {
  args: {
    title: 'File Management',
    level: 3,
    description: 'Upload and manage your files.',
    children: (
      <ButtonLine>
        <Button 
          label="Upload" 
          color="green" 
          icon={<span>📁</span>}
          onClick={() => console.log('Upload clicked')} 
        />
        <Button 
          label="Download" 
          color="blue" 
          icon={<span>⬇️</span>}
          onClick={() => console.log('Download clicked')} 
        />
        <Button 
          label="Share" 
          color="orange" 
          icon={<span>📤</span>}
          onClick={() => console.log('Share clicked')} 
        />
      </ButtonLine>
    ),
  },
};

export const WithMiniButtons: Story = {
  args: {
    title: 'Quick Actions',
    level: 4,
    description: 'Perform quick actions on this item.',
    children: (
      <ButtonLine>
        <Button 
          label="Edit" 
          size="mini" 
          color="blue" 
          onClick={() => console.log('Edit clicked')} 
        />
        <Button 
          label="Copy" 
          size="mini" 
          color="green" 
          onClick={() => console.log('Copy clicked')} 
        />
        <Button 
          label="Delete" 
          size="mini" 
          color="red" 
          onClick={() => console.log('Delete clicked')} 
        />
      </ButtonLine>
    ),
  },
};

export const WithBlockButton: Story = {
  args: {
    title: 'Confirmation Required',
    level: 2,
    description: 'Please confirm this action as it cannot be undone.',
    children: (
      <Button 
        label="Confirm Action" 
        color="red" 
        block={true}
        onClick={() => console.log('Confirm Action clicked')} 
      />
    ),
  },
};

export const WithLongDescription: Story = {
  args: {
    title: 'Complex Configuration',
    level: 1,
    description: 'This is a very long description that demonstrates how the DescriptiveHeader component handles lengthy text content. It should wrap properly and maintain good readability while providing comprehensive information about the section.',
    children: (
      <ButtonLine>
        <Button label="Apply Settings" color="green" onClick={() => console.log('Apply Settings clicked')} />
        <Button label="Reset to Default" color="gray" onClick={() => console.log('Reset clicked')} />
      </ButtonLine>
    ),
  },
};

export const WithReactNodeDescription: Story = {
  args: {
    title: 'Advanced Features',
    level: 2,
    description: (
      <div>
        <p>This description uses ReactNode instead of a simple string.</p>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          It can include <strong>formatted text</strong> and even <span style={{ color: 'blue' }}>styled elements</span>.
        </p>
      </div>
    ),
    children: (
      <span style={{ padding: '0.5rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        Content with custom styling
      </span>
    ),
  },
};

export const AllHeadingLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <DescriptiveHeader 
        title="Level 1 Heading" 
        level={1}
        description="This is a level 1 heading with a button."
      >
        <Button label="Action 1" color="blue" onClick={() => console.log('Action 1 clicked')} />
      </DescriptiveHeader>

      <DescriptiveHeader 
        title="Level 2 Heading" 
        level={2}
        description="This is a level 2 heading with buttons."
      >
        <ButtonLine>
          <Button label="Action 1" color="green" onClick={() => console.log('Action 1 clicked')} />
          <Button label="Action 2" color="orange" onClick={() => console.log('Action 2 clicked')} />
        </ButtonLine>
      </DescriptiveHeader>

      <DescriptiveHeader 
        title="Level 3 Heading" 
        level={3}
        description="This is a level 3 heading with content."
      >
        <span>Some text content here</span>
      </DescriptiveHeader>

      <DescriptiveHeader 
        title="Level 4 Heading" 
        level={4}
        description="This is a level 4 heading."
      >
        <Button label="Small Action" size="mini" color="gray" onClick={() => console.log('Small Action clicked')} />
      </DescriptiveHeader>

      <DescriptiveHeader 
        title="Level 5 Heading" 
        level={5}
        description="This is a level 5 heading."
      >
        <span style={{ fontSize: '0.9rem', color: '#666' }}>Small content</span>
      </DescriptiveHeader>

      <DescriptiveHeader 
        title="Level 6 Heading" 
        level={6}
        description="This is a level 6 heading."
      >
        <span style={{ fontSize: '0.8rem', color: '#999' }}>Tiny content</span>
      </DescriptiveHeader>
    </div>
  ),
}; 