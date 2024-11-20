import { FunctionComponent, createContext } from "react";

export type ModalStackList = Array<[ id: string, Component: FunctionComponent<any>, params: any ]>;

export const ModalRootContext = createContext<ModalStackList>([]);

export type ModalControls = {

    /**
     *  Show a specific component as a modal. The component has to take
     *  responsibility for correct styling and position on the screen.
     * 
     *  The passed id will be used to reference the modal later on.
     */
    show: (id: string, Component: FunctionComponent<any>, params: any) => void;

    /**
     *  Close a modal with a specific id.
     */
    close: (id: string) => void;

    /**
     *  Touch a specific modal. In practice, it will move the modal closer
     *  to the user and render it on top of any other modal.
     */
    touch: (id: string) => void;
};

export const ModalRootControlsContext = createContext<ModalControls>({ 
    show: () => { },
    close: () => { },
    touch: () => { }
});