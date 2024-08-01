import { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { FormField } from '../FormField';

export default {
  title: 'components/FormGroup',
  component: FormGroup,
} as Meta<typeof FormGroup>;

type Story = StoryObj<typeof FormGroup>;

export const Small: Story = {
  args: {
    children: (
        <>
            <FormField type="text" label="Input one" name="one"/>
            <FormField type="text" label="Input two" name="two"/>
            <FormField type="select" label="Select input" options={[]} labels={[]} name="three"/>    
        </>
    )
  }
};