import { ReactNode } from "react";

export type PanelFrameSide = "top" | "bottom" | "left" | "right";

export interface PanelFrameProps {

    /**
     *  The side of the screen that this panel should attach to.
     */
    side?: PanelFrameSide;

    /**
     *  The width of the frame in pixels. By default it will
     *  use auto.
     */
    width?: number | "auto" | "100%";

    /**
     *  The height of the frame in pixels. By default it will
     *  use auto.
     */
    height?: number | "auto" | "100%";

    /**
     *  The max width of the frame.
     */
    maxWidth?: number | "auto" | "100%";

    /**
     *  The max height of the frame.
     */
    maxHeight?: number | "auto" | "100%";

    /**
     *  The title of the panel. In general it should be a string, but it's
     *  possible to pass a react node. Such react node should contain inline
     *  elements and behave like a regular text.
     */
    title: string | ReactNode;

    /**
     *  A callback to call when user wants to close the panel. If the callback
     *  is provided the frame will render a close button.
     */
    onClose?: () => void;

    /**
     *  A callback to call when user interacts with the panel.
     */
    onTouch?: () => void;

    /**
     *  The children of the panel.
     */
    children?: ReactNode;
};

/**
 *  This component is a frame around a panel element that attaches to a given
 *  edge of the screen.
 */
export function PanelFrame({ side = "right", width, height, maxWidth = "100%", maxHeight = "100%", title, onClose, onTouch, children }: PanelFrameProps) {

    const positionStyles: Record<string, string> = {};

    const actualWidth = ["right", "left"].includes(side) ? "400px" : (width ? width : "100%");
    const actualHeight = ["top", "bottom"].includes(side) ? "400px" : (height ? height : "100%");

    if (side === "left") {
        positionStyles.left = "0px";
        positionStyles.top = "0px";
    } else if (side === "right") {
        positionStyles.right = "0px";
        positionStyles.top = "0px";
    } else if (side === "top") {
        positionStyles.left = "0px";
        positionStyles.top = "0px";
    } else if (side === "bottom") {
        positionStyles.left = "0px";
        positionStyles.bottom = "0px";
    }

    const styles: Record<string, string> = {
        width: typeof (actualWidth) === "number" ? `${actualWidth}px` : actualWidth,
        height: typeof (actualHeight) === "number" ? `${actualHeight}px` : actualHeight,
        maxWidth: typeof (maxWidth) === "number" ? `${maxWidth}px` : maxWidth,
        maxHeight: typeof (maxHeight) === "number" ? `${maxHeight}px` : maxHeight,
        ...positionStyles
    };

    const css = [
        "faceplate-panelframe",
        `faceplate-panelframe-${side}`
    ];

    const handleClick = () => {
        onTouch?.();
    };

    return (
        <div
            className={css.join(" ")}
            style={styles}
            onClick={handleClick}
        >
            <div className="faceplate-panelframe-title">
                {title}
            </div>
            {onClose && <div className="faceplate-panelframe-controls">
                <button className="faceplate-panelframe-close" onClick={onClose} />
            </div>}
            <div className="faceplate-panelframe-content">
                {children}
            </div>
        </div>
    );
};

