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
 */
export function useModalControls() {

    const controls = useContext(ModalRootControlsContext);

    const show = (id: string, Component: FunctionComponent<any>, params: any) => {
        controls.show(id, Component, params);
    };

    return {
        show
    };
}; 