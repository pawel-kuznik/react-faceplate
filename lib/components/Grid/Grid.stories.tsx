import { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Placeholder } from '../Placeholder';

export default {
    title: 'components/Grid',
    component: Grid,
} as Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Simple: Story = {
    args: {
        columns: 4,
        rows: 4,
        children: (
            <>
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
            </>
        )
    }
};

export const Columned: Story = {
    args: {
        columns: 4,
        rows: 4,
        children: (
            <>
                <Grid.Cell xSpan={1} ySpan={4}>
                    <Placeholder width={"auto"} height={"100%"} />
                </Grid.Cell>
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
                <Placeholder width={"auto"} height={200} />
            </>
        )
    }
};