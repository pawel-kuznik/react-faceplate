import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const DefaultNormal: Story = {
  args: {
    label: "Button label",
    style: "default"
  }
};

export const RedNormal: Story = {
  args: {
    label: "Button label",
    style: "red"
  }
};

export const OrangeNormal: Story = {
  args: {
    label: "Button label",
    style: "orange"
  }
};

export const WhiteNormal: Story = {
  args: {
    label: "Button label",
    style: "white"
  }
};

export const YellowNormal: Story = {
  args: {
    label: "Button label",
    style: "yellow"
  }
};

export const LimeNormal: Story = {
  args: {
    label: "Button label",
    style: "lime"
  }
};

export const GreenNormal: Story = {
  args: {
    label: "Button label",
    style: "green"
  }
};

export const BlueNormal: Story = {
  args: {
    label: "Button label",
    style: "blue"
  }
};

export const NavyNormal: Story = {
  args: {
    label: "Button label",
    style: "navy"
  }
};

export const BlackNormal: Story = {
  args: {
    label: "Button label",
    style: "black"
  }
};

export const GrayNormal: Story = {
  args: {
    label: "Button label",
    style: "gray"
  }
};

export const DefaultBlock: Story = {
  args: {
    label: "Button label",
    style: "default",
    block: true
  }
};

export const RedBlock: Story = {
  args: {
    label: "Button label",
    style: "red",
    block: true
  }
};

export const OrangeBlock: Story = {
  args: {
    label: "Button label",
    style: "orange",
    block: true
  }
};

export const WhiteBlock: Story = {
  args: {
    label: "Button label",
    style: "white",
    block: true
  }
};

export const YellowBlock: Story = {
  args: {
    label: "Button label",
    style: "yellow",
    block: true
  }
};

export const LimeBlock: Story = {
  args: {
    label: "Button label",
    style: "lime",
    block: true
  }
};

export const GreenBlock: Story = {
  args: {
    label: "Button label",
    style: "green",
    block: true
  }
};

export const BlueBlock: Story = {
  args: {
    label: "Button label",
    style: "blue",
    block: true
  }
};

export const NavyBlock: Story = {
  args: {
    label: "Button label",
    style: "navy",
    block: true
  }
};

export const BlackBlock: Story = {
  args: {
    label: "Button label",
    style: "black",
    block: true
  }
};

export const GrayBlock: Story = {
  args: {
    label: "Button label",
    style: "gray",
    block: true
  }
};

export const DefaultMini = {
  args: {
    style: "default",
    size: "mini"
  }
};

export const RedMini = {
  args: {
    style: "red",
    size: "mini"
  }
};

export const OrangeMini = {
  args: {
    style: "orange",
    size: "mini"
  }
};

export const WhiteMini = {
  args: {
    style: "white",
    size: "mini"
  }
};

export const YellowMini = {
  args: {
    style: "yellow",
    size: "mini"
  }
};

export const LimeMini = {
  args: {
    style: "lime",
    size: "mini"
  }
};

export const GreenMini = {
  args: {
    style: "green",
    size: "mini"
  }
};

export const BlueMini = {
  args: {
    style: "blue",
    size: "mini"
  }
};

export const NavyMini = {
  args: {
    style: "navy",
    size: "mini"
  }
};

export const BlackMini = {
  args: {
    style: "black",
    size: "mini"
  }
};

export const GrayMini = {
  args: {
    style: "gray",
    size: "mini"
  }
};
