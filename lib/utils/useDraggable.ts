import { RefObject, useCallback, useState, PointerEvent as ReactPointerEvent } from "react";

export interface UseDraggableOptions {

    /**
     *  Initial offset in px from the top of the positioning parent.
     */
    initialTop?: number;

    /**
     *  Initial offset in px from the left of the positioning parent.
     */
    initialLeft?: number;
};

export interface UseDraggableResult {

    /**
     *  Current offset in px from the top of the positioning parent.
     */
    top: number;

    /**
     *  Current offset in px from the left of the positioning parent.
     */
    left: number;

    /**
     *  Attach to a drag handle element to enable dragging.
     */
    onPointerDown: (event: ReactPointerEvent<HTMLElement>) => void;
};

function clampPosition(element: HTMLElement, left: number, top: number) {

    const rect = element.getBoundingClientRect();
    const computedStyles = window.getComputedStyle(element);

    const width = rect.width + (parseInt(computedStyles.getPropertyValue("margin-left")) || 0) + (parseInt(computedStyles.getPropertyValue("margin-right")) || 0);
    const height = rect.height + (parseInt(computedStyles.getPropertyValue("margin-top")) || 0) + (parseInt(computedStyles.getPropertyValue("margin-bottom")) || 0);

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return {
        left: Math.min(Math.max(4, left), windowWidth - width - 4),
        top: Math.min(Math.max(4, top), windowHeight - height),
    };
};

export function useDraggable(elementRef: RefObject<HTMLElement | null>, { initialTop = 0, initialLeft = 0 }: UseDraggableOptions = {}): UseDraggableResult {

    const [position, setPosition] = useState({ top: initialTop, left: initialLeft });

    const onPointerDown = useCallback((event: ReactPointerEvent<HTMLElement>) => {

        const element = event.target as HTMLElement;
        element.setPointerCapture(event.pointerId);

        const handlePointerMove = (event: PointerEvent) => {

            const target = elementRef.current;
            if (!target) return;

            setPosition(({ top, left }) => clampPosition(target, left + event.movementX, top + event.movementY));
        };

        const handlePointerEnd = (event: PointerEvent) => {

            element.removeEventListener("pointermove", handlePointerMove);
            element.removeEventListener("pointerup", handlePointerEnd);
            element.removeEventListener("pointercancel", handlePointerEnd);
            element.releasePointerCapture(event.pointerId);
        };

        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerup", handlePointerEnd);
        element.addEventListener("pointercancel", handlePointerEnd);
    }, [elementRef]);

    return { top: position.top, left: position.left, onPointerDown };
};
