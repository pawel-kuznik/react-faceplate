import { Meta, StoryObj } from '@storybook/react';
import { InlineForm } from './InlineForm';
import { Input } from '../Input';
import { Button } from '../Button';

export default {
  title: 'Forms/InlineForm',
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

export const RenameForm: Story = {
  args: {
    onInactive: (data: object) => {
      console.log("rename to", data)
    },
    children: (
        <>
            <Input type="text" name="text"/>
        </>
    )
  }
};

  