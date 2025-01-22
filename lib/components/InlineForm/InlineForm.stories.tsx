import { Meta, StoryObj } from '@storybook/react';
import { InlineForm } from './InlineForm';
import { Input } from '../Input';
import { Button } from '../Button';

export default {
  title: 'components/InlineForm',
  component: InlineForm,
} as Meta<typeof InlineForm>;

type Story = StoryObj<typeof InlineForm>;

export const SearchForm: Story = {
  args: {
    children: (
        <>
            <Input type="search" name="search"/>
            <Button submit label="Search"/>
        </>
    )
  }
};

  