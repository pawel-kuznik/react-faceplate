import { ReactNode, useRef } from "react";
import { useDraggable } from "../../utils/useDraggable";

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
     *  The max height of the frame.
     */
    maxHeight?: number | "auto";

    /**
     *  Should the dialog be movable?
     */
    movable?: boolean;

    /**
     *  The offset in px from the left border of the positioning parent.
     */
    leftOffset?: number;

    /**
     *  The offset in px from the top border of the positioning parent.
     */
    topOffset?: number;

    /**
     *  The title of the dialog. In general it should be a string, but it's
     *  possible to pass a react node. Such react node should contain inline
     *  elements and behave like a regular text.
     */
    title: string | ReactNode;

    /**
     *  A callback to call when user wants to close the dialog. If the callback
     *  is provided the frame will render a close button.
     */
    onClose?: () => void;

    /**
     *  A callback to call when user interacts with the dialog.
     */
    onTouch?: () => void;

    /**
     *  The children of the dialog.
     */
    children?: ReactNode;
};

/**
 *  This component is a frame around a dialog element. The content of the dialog
 *  can be anything.
 */
export function DialogFrame({ width = "auto", height = "auto", maxHeight = "auto", movable = false, topOffset = 0, leftOffset = 0, title, onClose, onTouch, children }: DialogFrameProps) {

    const frameRef = useRef<HTMLDivElement>(null);
    const { top: draggedTop, left: draggedLeft, onPointerDown } = useDraggable(frameRef, { initialTop: topOffset, initialLeft: leftOffset });

    const styles = {
        width: typeof(width) === "number" ? `${width}px` : width,
        height: typeof(height) === "number" ? `${height}px` : height,
        maxHeight: typeof(maxHeight) === "number" ? `${maxHeight}px` : maxHeight,
        top: `${movable ? draggedTop : topOffset}px`,
        left: `${movable ? draggedLeft : leftOffset}px`
    };

    const handleClick = () => {
        onTouch?.();
    };

    return (
        <div
            ref={frameRef}
            className="faceplate-dialogframe"
            style={styles}
            onClick={handleClick}
        >
            <div className="faceplate-dialogframe-title">
                {title}
            </div>
            {(onClose || movable) && <div className="faceplate-dialogframe-controls">
                {movable && <span className="faceplate-dialogframe-grab" onPointerDown={onPointerDown}/>}
                {onClose && <button className="faceplate-dialogframe-close" onClick={onClose}/>}
            </div>}
            <div className="faceplate-dialogframe-content">
                {children}
            </div>
        </div>
    );
};
