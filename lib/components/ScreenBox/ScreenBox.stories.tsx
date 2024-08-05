import { Meta, StoryObj } from '@storybook/react';
import { ScreenBox } from './ScreenBox';
import { FormField } from '../FormField';
import { FormGroup } from '../FormGroup';
import { Button } from '../Button';
import { ContentBox } from '../ContentBox';
import { DataTable } from '../DataTable';

export default {
  title: 'components/ScreenBox',
  component: ScreenBox,
} as Meta<typeof ScreenBox>;

type Story = StoryObj<typeof ScreenBox>;

export const ExampleOne: Story = {
  args: {
    children: (
      <>
        <FormField type="text" label="Input one" name="one" />
        <FormField type="text" label="Input two" name="two" />
        <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
      </>
    )
  }
};

export const ExmapleTwo: Story = {
  args: {
    children: (
      <FormGroup>
        <FormField type="text" label="Input one" name="one" />
        <FormField type="text" label="Input two" name="two" />
        <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
        <Button label="Submit" style="yellow" />
      </FormGroup>
    )
  }
};

export const ExmapleThree: Story = {
  args: {
    children: (
      <ContentBox label="Content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <DataTable
          columns={[
            { label: "Column 1" },
            { label: "Column 2" },
            { label: "Column 3" }
          ]}
          data={[
            [ "Row 1", "1", "2" ],
            [ "Row 2", "2", "2" ],
            [ "Row 3", "4", "5" ],
            [ "Row 4", "2", "6" ],
            [ "Row 5", "1", "1" ],
          ]}
          />
      </ContentBox>
    )
  }
};