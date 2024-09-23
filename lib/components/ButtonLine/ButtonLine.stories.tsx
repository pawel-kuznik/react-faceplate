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