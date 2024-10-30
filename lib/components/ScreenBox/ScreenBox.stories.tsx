import { Meta, StoryObj } from '@storybook/react';
import { ScreenBox } from './ScreenBox';
import { FormField } from '../FormField';
import { FormGroup } from '../FormGroup';
import { Button } from '../Button';
import { ContentBox } from '../ContentBox';
import { DataTable } from '../DataTable';
import { EditableHeading } from '../EditableHeading';
import { ProgressBar } from '../ProgressBar';
import { BarChart } from '../BarChart';
import { Grid } from '../Grid';
import { Tabs } from '../Tabs';

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

export const ExampleTwo: Story = {
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

const topSidebar = (
  <>
    <Button label="Action" color="red"/>
  </>
);

export const ExampleThree: Story = {
  args: {
    children: (
      <>
        <ContentBox label="Content" topToolbar={topSidebar}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <DataTable
            columns={[
              { label: "Column 1" },
              { label: "Column 2" },
              { label: "Column 3" }
            ]}
            data={[
              ["Row 1", "1", "2"],
              ["Row 2", "2", "2"],
              ["Row 3", "4", "5"],
              ["Row 4", "2", "6"],
              ["Row 5", "1", "1"],
            ]}
          />
        </ContentBox>
        <ContentBox label={<EditableHeading defaultValue={"Editable heading"}/>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ContentBox>
        <ContentBox>
          <Button label="test"/>
        </ContentBox>
      </>
    )
  }
};

export const TableExample: Story = {
  args: {
    children: (
      <>
        <ContentBox label="Content">
        <DataTable
            columns={[
              { label: "Column 1" },
              { label: "Column 2" },
              { label: "Column 3" }
            ]}
            data={[
              ["Row 1", "1", <ProgressBar current={0.25} color="red"/> ],
              ["Row 2", "2", <ProgressBar current={0.45} color="blue"/>],
              ["Row 3", "4", <ProgressBar current={0.55} color="blue"/>],
              ["Row 4", "2", <ProgressBar current={0.96} color="green"/>],
              ["Row 5", "1", <ProgressBar current={1} color="orange"/>],
            ]}
          />
        </ContentBox>
      </>
    )
  }
};

export const WithPattern: Story = {
  args: {
    pattern: "polka",
    children: (
      <>
        <FormField type="text" label="Input one" name="one" />
        <FormField type="text" label="Input two" name="two" />
        <FormField type="select" label="Select input" options={[]} labels={[]} name="three" />
      </>
    )
  }
};

export const WithBarChart: Story = {
  args: {
    children: (
      <ContentBox>
        <BarChart
          height={120}
          colors="white"
          data={[
            1, 2, 3, 4, 5,
            0, 12, 8, 7, 9
          ]}
          labels={[
            "0", "1", "2", "3", "4",
            "5", "6", "7", "8", "9"
          ]}
        />
      </ContentBox>
    )
  }
};

export const WithTabsSidebar: Story = {
  args: {
    children: (
      <Grid columns={5} rows={1}>
        <Grid.Cell xSpan={1} mount>
          <Tabs
            tabs={[
              { label: "Tab 1" },
              { label: "Tab 2" },
              { label: "Tab 3" }
            ]}
            selectOverrides={{
              color: "blue",
            }}
            layout="vertical"
          />
        </Grid.Cell>
        <Grid.Cell xSpan={4}>
          <ContentBox label="Hard stats">
            <DataTable
              columns={[
                { label: "Column 1" },
                { label: "Column 2" },
                { label: "Column 3" }
              ]}
              data={[
                ["Row 1", "1", <ProgressBar current={0.25} color="red"/> ],
                ["Row 2", "2", <ProgressBar current={0.45} color="blue"/>],
                ["Row 3", "4", <ProgressBar current={0.55} color="blue"/>],
                ["Row 4", "2", <ProgressBar current={0.96} color="green"/>],
                ["Row 5", "1", <ProgressBar current={1} color="orange"/>],
              ]}
            />
          </ContentBox>
        </Grid.Cell>
      </Grid>
    )
  }
};