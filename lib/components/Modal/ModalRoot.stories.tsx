import { Meta, StoryObj } from '@storybook/react';
import { ModalRoot } from './ModalRoot';
import { Button } from '../Button';
import { useModalControls } from './useModalControls';
import { DialogFrame } from '../DialogFrame';

export default {
  title: 'components/ModalRoot',
  component: ModalRoot,
} as Meta<typeof ModalRoot>;

type Story = StoryObj<typeof ModalRoot>;

function AddModal() {

  const { show } = useModalControls();

  const handleClick = () => {

    const i = Math.floor(Math.random() * 1000);

    show(`modal-${i}`, DialogFrame, { title: "Dialog", movable: true, children: (<div>Content of the dialog</div>) });
  };

  return (
    <Button label='Add modal' onClick={handleClick}/>
  );
};

export const Modals : Story = {
  args: {
    children: <div><AddModal/></div>
  }
};
