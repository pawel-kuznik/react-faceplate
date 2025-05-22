import { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from './SelectInput';

export default {
  title: 'components/SelectInput',
  component: SelectInput,
} as Meta<typeof SelectInput>;

type Story = StoryObj<typeof SelectInput>;

export const BasicSelect: Story = {
  args: {
    options: ['option1', 'option2', 'option3'],
    labels: ['Option 1', 'Option 2', 'Option 3'],
  }
};

export const WithPlaceholder: Story = {
  args: {
    options: ['option1', 'option2', 'option3'],
    labels: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'Select an option...'
  }
};

export const WithDefaultValue: Story = {
  args: {
    options: ['option1', 'option2', 'option3'],
    labels: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'option2'
  }
};

export const WithTitles: Story = {
  args: {
    options: ['option1', 'option2', 'option3'],
    labels: ['Option 1', 'Option 2', 'Option 3'],
    titles: ['This is option 1', 'This is option 2', 'This is option 3']
  }
};

export const WithFunctionLabels: Story = {
  args: {
    options: ['option1', 'option2', 'option3'],
    labels: (option: string) => `Custom ${option}`,
    titles: (option: string) => `Tooltip for ${option}`
  }
}; 
