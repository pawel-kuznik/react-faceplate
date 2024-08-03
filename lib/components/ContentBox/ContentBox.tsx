import { ReactNode } from "react";
import { SideToolbox } from "../SideToolbox";

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
     *  A possible node to place in the side toolbar.
     */
    sideToolbar?: ReactNode;

    /**
     *  The content of the box.
     */
    children: ReactNode;
};

/**
 *  This is a component that is meant to render a box around an arbitrary content.
 *  The content can be assigned a label which would effectively be a title.
 */
export function ContentBox({ label, faded, sideToolbar, children }: ContentBoxProps) {

    const css = [
        "faceplate-contentbox",
        faded ? "faceplate-contentbox-faded" : ""
    ];

    return (
        <div className={css.join(" ")}>
            {label && <div className="faceplate-contentbox-label">{label}</div>}
            {sideToolbar && <div className="faceplate-contentbox-sidetoolbar"><SideToolbox>{sideToolbar}</SideToolbox></div>}
            {children}
        </div>
    );
};
