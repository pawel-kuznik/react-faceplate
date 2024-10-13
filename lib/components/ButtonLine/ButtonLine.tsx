import { ReactNode } from "react";

export interface ButtonLineProps {

    /**
     *  The direction of the line.
     */
    direction?: "horizontal" | "vertical";

    /**
     *  The children of the line.
     */
    children?: ReactNode;
};

/**
 *  A component to distribute buttons in oneline.
 */
export function ButtonLine({ direction = "horizontal", children }: ButtonLineProps) {

    const css = [
        "faceplate-buttonline",
        `faceplate-buttonline-direction-${direction}`
    ];

    return (
        <div className={css.join(" ")}>
            {children}          
        </div>
    );
};