import { FunctionComponent, useContext } from "react";
import { ModalRootControlsContext } from "./ModalRootContext";

/**
 *  A hook to expose modal controls.
 * 
 *  The returned functions are:
 * 
 *  show    - Show a new modal. Pass an identifier, component constructor, and parameters
 *            to show the modal. Afterwards, the calling component can be unmounted and
 *            the modal will persist.
 * 
 *  close   - Close a modal identified with specific ID.
 * 
 *  touch   - Put a modal identified by a specific ID on top of other modals.
 */
export function useModalControls() {

    const controls = useContext(ModalRootControlsContext);

    const show = (id: string, Component: FunctionComponent<any>, params: any) => {
        controls.show(id, Component, params);
    };

    const close = (id: string) => {
        controls.close(id);
    };

    const touch = (id: string) => {
        controls.touch(id);
    };

    return {
        show,
        close,
        touch
    };
}; 