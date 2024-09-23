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
    color: "default"
  }
};

export const NormalWithIcon: Story = {
  args: {
    label: "With icon",
    icon: (<img src="https://cataas.com/cat?type=square" alt="cat" style={{ width: '24px', height: '24px' }}/>)
  }
};

export const MinilWithIcon: Story = {
  args: {
    size: "mini",
    icon: (<img src="https://cataas.com/cat?type=square" alt="cat" style={{ width: '16px', height: '16px' }}/>)
  }
};

export const RedNormal: Story = {
  args: {
    label: "Button label",
    color: "red"
  }
};

export const OrangeNormal: Story = {
  args: {
    label: "Button label",
    color: "orange"
  }
};

export const WhiteNormal: Story = {
  args: {
    label: "Button label",
    color: "white"
  }
};

export const YellowNormal: Story = {
  args: {
    label: "Button label",
    color: "yellow"
  }
};

export const LimeNormal: Story = {
  args: {
    label: "Button label",
    color: "lime"
  }
};

export const GreenNormal: Story = {
  args: {
    label: "Button label",
    color: "green"
  }
};

export const BlueNormal: Story = {
  args: {
    label: "Button label",
    color: "blue"
  }
};

export const NavyNormal: Story = {
  args: {
    label: "Button label",
    color: "navy"
  }
};

export const BlackNormal: Story = {
  args: {
    label: "Button label",
    color: "black"
  }
};

export const GrayNormal: Story = {
  args: {
    label: "Button label",
    color: "gray"
  }
};

export const DefaultBlock: Story = {
  args: {
    label: "Button label",
    color: "default",
    block: true
  }
};

export const RedBlock: Story = {
  args: {
    label: "Button label",
    color: "red",
    block: true
  }
};

export const OrangeBlock: Story = {
  args: {
    label: "Button label",
    color: "orange",
    block: true
  }
};

export const WhiteBlock: Story = {
  args: {
    label: "Button label",
    color: "white",
    block: true
  }
};

export const YellowBlock: Story = {
  args: {
    label: "Button label",
    color: "yellow",
    block: true
  }
};

export const LimeBlock: Story = {
  args: {
    label: "Button label",
    color: "lime",
    block: true
  }
};

export const GreenBlock: Story = {
  args: {
    label: "Button label",
    color: "green",
    block: true
  }
};

export const BlueBlock: Story = {
  args: {
    label: "Button label",
    color: "blue",
    block: true
  }
};

export const NavyBlock: Story = {
  args: {
    label: "Button label",
    color: "navy",
    block: true
  }
};

export const BlackBlock: Story = {
  args: {
    label: "Button label",
    color: "black",
    block: true
  }
};

export const GrayBlock: Story = {
  args: {
    label: "Button label",
    color: "gray",
    block: true
  }
};

export const DefaultMini = {
  args: {
    color: "default",
    size: "mini"
  }
};

export const RedMini = {
  args: {
    color: "red",
    size: "mini"
  }
};

export const OrangeMini = {
  args: {
    color: "orange",
    size: "mini"
  }
};

export const WhiteMini = {
  args: {
    color: "white",
    size: "mini"
  }
};

export const YellowMini = {
  args: {
    color: "yellow",
    size: "mini"
  }
};

export const LimeMini = {
  args: {
    color: "lime",
    size: "mini"
  }
};

export const GreenMini = {
  args: {
    color: "green",
    size: "mini"
  }
};

export const BlueMini = {
  args: {
    color: "blue",
    size: "mini"
  }
};

export const NavyMini = {
  args: {
    color: "navy",
    size: "mini"
  }
};

export const BlackMini = {
  args: {
    color: "black",
    size: "mini"
  }
};

export const GrayMini = {
  args: {
    color: "gray",
    size: "mini"
  }
};
