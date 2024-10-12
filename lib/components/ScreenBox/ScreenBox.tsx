import { ReactNode } from "react";
import { Pattern } from "../CssTypes";

export interface ScreenBoxProps {

    /**
     *  The children of the SceenBox.
     */
    children?: ReactNode;

    /**
     *  A possible pattern that should be applied to the background of the box.
     */
    pattern?: Pattern;
};

/**
 *  This is a component that puts children in a CRT like screen box.
 *  This is mostly so that we can declare a clear start for specific
 *  styles.
 */
export function ScreenBox({ children, pattern }: ScreenBoxProps) {

    const css = [
        "faceplate-screenbox"
    ];

    if (pattern) css.push(`faceplate-pattern-${pattern}`);

    return (
        <div className={css.join(" ")}>
            {children}
        </div>
    );
};
