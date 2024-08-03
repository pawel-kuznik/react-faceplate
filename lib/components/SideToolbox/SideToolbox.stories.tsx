import { Meta, StoryObj } from '@storybook/react';
import { SideToolbox } from './SideToolbox';
import { Button } from '../Button';

export default {
  title: 'components/SideToolbox',
  component: SideToolbox,
} as Meta<typeof SideToolbox>;

type Story = StoryObj<typeof SideToolbox>;

export const Default: Story = {
  args: {
    children: (
        <>
            <Button size="mini"/>
            <Button size="mini"/>
            <Button size="mini"/>
            <Button size="mini"/>
            <Button size="mini"/>
        </>
    )
  }
};
