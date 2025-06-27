import { Meta, StoryObj } from '@storybook/react';
import { Heading, H1, H2, H3, H4, H5, H6 } from './Heading';

// Main Heading component stories
const HeadingMeta: Meta<typeof Heading> = {
  title: 'components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    children: {
      control: 'text',
    },
  },
};

export default HeadingMeta;

type HeadingStory = StoryObj<typeof Heading>;

export const Default: HeadingStory = {
  args: {
    level: 1,
    children: 'Main Heading',
  },
};

export const AllLevels: HeadingStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Level1: HeadingStory = {
  args: {
    level: 1,
    children: 'Page Title',
  },
};

export const Level2: HeadingStory = {
  args: {
    level: 2,
    children: 'Section Title',
  },
};

export const Level3: HeadingStory = {
  args: {
    level: 3,
    children: 'Subsection Title',
  },
};

export const Level4: HeadingStory = {
  args: {
    level: 4,
    children: 'Minor Section',
  },
};

export const Level5: HeadingStory = {
  args: {
    level: 5,
    children: 'Small Heading',
  },
};

export const Level6: HeadingStory = {
  args: {
    level: 6,
    children: 'Smallest Heading',
  },
};

export const LongText: HeadingStory = {
  args: {
    level: 2,
    children: 'This is a very long heading that demonstrates how the component handles text that spans multiple lines and contains a lot of content',
  },
};

export const WithSpecialCharacters: HeadingStory = {
  args: {
    level: 1,
    children: 'Heading with special chars: & < > " \' @ # $ % ^ * ( )',
  },
};

// Combined showcase story
export const HeadingShowcase: HeadingStory = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#666' }}>Individual Components:</h3>
        <H1>H1 Component</H1>
        <H2>H2 Component</H2>
        <H3>H3 Component</H3>
        <H4>H4 Component</H4>
        <H5>H5 Component</H5>
        <H6>H6 Component</H6>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#666' }}>Main Heading Component with Different Levels:</h3>
        <Heading level={1}>Main Heading (Level 1)</Heading>
        <Heading level={2}>Section Heading (Level 2)</Heading>
        <Heading level={3}>Subsection Heading (Level 3)</Heading>
        <Heading level={4}>Minor Section (Level 4)</Heading>
        <Heading level={5}>Small Heading (Level 5)</Heading>
        <Heading level={6}>Smallest Heading (Level 6)</Heading>
      </div>
    </div>
  ),
};
