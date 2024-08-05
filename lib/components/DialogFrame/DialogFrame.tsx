import { ReactNode } from "react";
import { Button } from "../Button";

export interface DialogFrameProps {

    /**
     *  The width of the frame in pixels. By default it will
     *  use auto.
     */
    width?: number | "auto";

    /**
     *  The height of the frame in pixels. By default it will
     *  use auto.
     */
    height?: number | "auto";

    /**
     *  The offset in px from the left border of the positioning parent.
     */
    leftOffset?: number;

    /**
     *  The offset in px from the top border of the positioning parent.
     */
    topOffset?: number;

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
export function DialogFrame({ width = "auto", height = "auto", topOffset = 0, leftOffset = 0, title, onClose, children }: DialogFrameProps) {

    const styles = {
        width: typeof(width) === "number" ? `${width}px` : width,
        height: typeof(height) === "number" ? `${height}px` : height,
        top: `${topOffset}px`,
        left: `${leftOffset}px`
    };

    return (
        <div
            className="faceplate-dialogframe"
            style={styles}
        >
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
