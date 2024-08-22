import { ReactNode } from "react";

export interface ButtonLineProps {

    direction?: "horizontal" | "vertical";

    children?: ReactNode;
};

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