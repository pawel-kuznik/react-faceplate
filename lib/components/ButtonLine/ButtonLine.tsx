import { ReactNode } from "react";

export interface ButtonLineProps {

    /**
     *  The direction of the line.
     */
    direction?: "horizontal" | "vertical";

    /**
     *  The alignment of the line.
     */
    align?: "start" | "center" | "end";

    /**
     *  The children of the line.
     */
    children?: ReactNode;
};

/**
 *  A component to distribute buttons in oneline.
 */
export function ButtonLine({ direction = "horizontal", align = "start", children }: ButtonLineProps) {

    const css = [
        "faceplate-buttonline",
        `faceplate-buttonline-direction-${direction}`,
        `faceplate-buttonline-align-${align}`
    ];

    return (
        <div className={css.join(" ")}>
            {children}          
        </div>
    );
};