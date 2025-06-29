import { Meta, StoryObj } from '@storybook/react';
import { ButtonLine } from "./ButtonLine";
import { Button } from '../Button';

export default {
    title: 'components/ButtonLine',
    component: ButtonLine,
} as Meta<typeof ButtonLine>;

type Story = StoryObj<typeof ButtonLine>;


const children = (
    <>
        <Button color='green' label='Green'/>
        <Button color='blue' label='Blue'/>
        <Button color='red' label='Red'/>
    </>
);

export const Horizontal: Story = {
    args: {
        direction: "horizontal",
        children
    }
};

export const Vertical: Story = {
    args: {
        direction: "vertical",
        children
    }
};

export const HorizontalStart: Story = {
    args: {
        direction: "horizontal",
        align: "start",
        children
    }
};

export const HorizontalCenter: Story = {
    args: {
        direction: "horizontal",
        align: "center",
        children
    }
};

export const HorizontalEnd: Story = {
    args: {
        direction: "horizontal",
        align: "end",
        children
    }
};

export const VerticalStart: Story = {
    args: {
        direction: "vertical",
        align: "start",
        children
    }
};

export const VerticalCenter: Story = {
    args: {
        direction: "vertical",
        align: "center",
        children
    }
};

export const VerticalEnd: Story = {
    args: {
        direction: "vertical",
        align: "end",
        children
    }
};