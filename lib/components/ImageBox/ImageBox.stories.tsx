import { Meta, StoryObj } from '@storybook/react';
import { ImageBox } from '../ImageBox';

export default {
    title: 'components/ImageBox',
    component: ImageBox,
} as Meta<typeof ImageBox>;

type Story = StoryObj<typeof ImageBox>;

export const JustImage: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
    }
};

export const WithSetSize: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
        width: "300px",
        height: "300px"
    }
};

export const WithContentInRightTopCorner: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
        rightTop: ("TEST")
    }
};

export const WithContentInLeftTopCorner: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
        leftTop: ("TEST")
    }
};

export const WithContentInRightBottomCorner: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
        rightBottom: ("TEST")
    }
};

export const WithContentInLeftBottomCorner: Story = {
    args: {
        src: "https://cataas.com/cat?type=square",
        leftBottom: ("TEST")
    }
};