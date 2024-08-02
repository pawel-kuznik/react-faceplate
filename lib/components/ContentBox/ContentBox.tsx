import { ReactNode } from "react";

export interface ContentBoxProps {

    /**
     *  The label assigned to the content.
     */
    label?: string;

    /**
     *  Should the content box be faded? This will only affect decorations.
     */
    faded?: boolean;

    /**
     *  The content of the box.
     */
    children: ReactNode;
};

/**
 *  This is a component that is meant to render a box around an arbitrary content.
 *  The content can be assigned a label which would effectively be a title.
 */
export function ContentBox({ label, faded, children }: ContentBoxProps) {

    const css = [
        "faceplate-contentbox",
        faded ? "faceplate-contentbox-faded" : ""
    ];

    return (
        <div className={css.join(" ")}>
            {label && <div className="faceplate-contentbox-label">{label}</div>}
            {children}
        </div>
    );
};
