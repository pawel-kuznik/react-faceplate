import { ReactNode, useRef, PointerEvent as ReactPointerEvent } from "react";

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
     *  elements and behave like regular text.
     */
    title: string | ReactNode;

    /**
     *  A callback to call when user wants to close the dialog. If the callback
     *  is provided the frame will render a close button.
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
export function DialogFrame({ width = "auto", height = "auto", maxHeight = "auto", movable = false, topOffset = 0, leftOffset = 0, title, onClose, children }: DialogFrameProps) {

    const styles = {
        width: typeof(width) === "number" ? `${width}px` : width,
        height: typeof(height) === "number" ? `${height}px` : height,
        maxHeight: typeof(maxHeight) === "number" ? `${maxHeight}px` : maxHeight,
        top: `${topOffset}px`,
        left: `${leftOffset}px`
    };

    const frameRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const grabRef = useRef<HTMLSpanElement>(null);

    const handleGrabDown = (event: ReactPointerEvent<HTMLElement>) => {

        const element = event.target as HTMLElement;
        element.setPointerCapture(event.pointerId);

        const handleGrabMove = (event: PointerEvent) => {

            const frame = frameRef.current;
            if (!frame) return;
            
            const left = parseInt(frame.style.left) || 0;
            const top = parseInt(frame.style.top) || 0;

            const rect = frame.getBoundingClientRect();
            const computedStyles = window.getComputedStyle(frame);

            const width = rect.width + (parseInt(computedStyles.getPropertyValue("margin-left")) || 0) + (parseInt(computedStyles.getPropertyValue("margin-right")) || 0);
            const height = rect.height + (parseInt(computedStyles.getPropertyValue("margin-top")) || 0) + (parseInt(computedStyles.getPropertyValue("margin-bottom")) || 0);

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            const safeLeft = Math.min(Math.max(4, left + event.movementX), windowWidth - width - 4);
            const safeTop = Math.min(Math.max(4, top + event.movementY), windowHeight - height);
            
            frame.style.left = `${safeLeft}px`;
            frame.style.top = `${safeTop}px`;
        };

        element.addEventListener("pointermove", handleGrabMove);

        const handleGrabUp = (event: PointerEvent) => {

            element.removeEventListener("pointermove", handleGrabMove);
            element.removeEventListener("pointerup", handleGrabUp);
            element.removeEventListener("pointercancel", handleGrabCancel);
            element.releasePointerCapture(event.pointerId);
        };

        element.addEventListener("pointerup", handleGrabUp);

        const handleGrabCancel = (event: PointerEvent) => {

            element.removeEventListener("pointermove", handleGrabMove);
            element.removeEventListener("pointerup", handleGrabUp);
            element.removeEventListener("pointercancel", handleGrabCancel);
            element.releasePointerCapture(event.pointerId);
        };

        element.addEventListener("pointercancel", handleGrabCancel);
    };

    return (
        <div
            ref={frameRef}
            className="faceplate-dialogframe"
            style={styles}
        >
            <div ref={titleRef} className="faceplate-dialogframe-title">
                {title}
            </div>
            {(onClose || movable) && <div className="faceplate-dialogframe-controls">
                {movable && <span ref={grabRef} className="faceplate-dialogframe-grab" onPointerDown={handleGrabDown}/>}
                {onClose && <button className="faceplate-dialogframe-close" onClick={onClose}/>}
            </div>}
            <div className="faceplate-dialogframe-content">
                {children}
            </div>
        </div>
    );
};
