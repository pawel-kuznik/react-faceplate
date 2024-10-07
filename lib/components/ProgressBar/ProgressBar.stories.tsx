import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { DataTable } from '../DataTable';

export default {
    title: 'components/ProgressBar',
    component: ProgressBar,
} as Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Regular: Story = {
    args: {
        current: .5
    }
};

export const InsideDataTable: Story = {
    args: {
        current: .5
    },
    decorators: [
        (Story) => (
            <DataTable
                columns={[ "Test column", "Text column", "Test column" ]}
                data={[ [ "Left cell", <Story/>, "Right cell" ] ]}
            />
        )
    ]
};

export const Red: Story = {
    args: {
        current: .5,
        color: "red"
    }
};

export const Orange: Story = {
    args: {
        current: .5,
        color: "orange"
    }
};

export const White: Story = {
    args: {
        current: .5,
        color: "white"
    }
};

export const Yellow: Story = {
    args: {
        current: .5,
        color: "yellow"
    }
};

export const Lime: Story = {
    args: {
        current: .5,
        color: "lime"
    }
};

export const Green: Story = {
    args: {
        current: .5,
        color: "green",
        children: "Long text with verous letters."
    }
};

export const Blue: Story = {
    args: {
        current: .5,
        color: "blue"
    }
};

export const Navy: Story = {
    args: {
        current: .5,
        color: "navy"
    }
};

export const Black: Story = {
    args: {
        current: .5,
        color: "black"
    }
};

export const Gray: Story = {
    args: {
        current: .5,
        color: "gray"
    }
};
