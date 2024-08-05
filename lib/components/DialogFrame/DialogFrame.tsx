import { ReactNode } from "react";
import { Button } from "../Button";

export interface DialogFrameProps {

    /**
     *  The title of the dialog.
     */
    title: string;

    /**
     *  A callback to call when user wants to close the dialog.
     */
    onClose?: () => void;

    /**
     *  The children of the dialog.
     */
    children?: ReactNode;
};

/**
 *  This component is a frame around a dialog element. The content of the dialog
 *  can be anything.
 */
export function DialogFrame({ title, onClose, children }: DialogFrameProps) {

    return (
        <div className="faceplate-dialogframe">
            <div className="faceplate-dialogframe-title">
                {title}
            </div>
            <div className="faceplate-dialogframe-controls">
                <Button size="mini" style="red" onClick={onClose}/>
            </div>
            <div className="faceplate-dialogframe-content">
                {children}
            </div>
        </div>
    );
};
