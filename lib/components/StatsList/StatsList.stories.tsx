import { Meta, StoryObj } from '@storybook/react';
import { StatsList } from './StatsList';

export default {
    title: 'components/StatsList',
    component: StatsList,
} as Meta<typeof StatsList>;

type Story = StoryObj<typeof StatsList>;

export const LeftAlignment: Story = {
    args: {
        alignment: "left",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};

export const LeftAxisAlignment: Story = {
    args: {
        alignment: "left-axis",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};

export const LeftEdgesAlignment: Story = {
    args: {
        alignment: "left-edges",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};

export const RightEdgesAlignment: Story = {
    args: {
        alignment: "right-edges",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};

export const RightAlignment: Story = {
    args: {
        alignment: "right",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};


export const RightAxisAlignment: Story = {
    args: {
        alignment: "right-axis",
        children: (
            <>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
                <StatsList.Row label="Prop long name">
                    1231
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    123
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Value
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Huh?
                </StatsList.Row>
                <StatsList.Row label="Prop name">
                    Prop content
                </StatsList.Row>
            </>
        )
    }
};