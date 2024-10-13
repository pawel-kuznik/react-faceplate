import { ReactNode } from "react";
import { SideToolbox } from "../SideToolbox";
import { ButtonLine } from "../ButtonLine";
import { Pattern } from "../CssTypes";

export interface ContentBoxProps {

    /**
     *  The label assigned to the content.
     */
    label?: string | ReactNode;

    /**
     *  Should the content box be faded? This will only affect decorations.
     */
    faded?: boolean;

    /**
     *  A possible node to place in the side toolbar.
     */
    sideToolbar?: ReactNode;

    /**
     *  A possible node to place in the top toolbar.
     */
    topToolbar?: ReactNode;

    /**
     *  A possible pattern that should be applied to the background
     *  of the box.
     */
    pattern?: Pattern;

    /**
     *  The content of the box.
     */
    children?: ReactNode;
};

/**
 *  This is a component that is meant to render a box around an arbitrary content.
 *  The content can be assigned a label which would effectively be a title.
 */
export function ContentBox({ label, faded, topToolbar, pattern, sideToolbar, children }: ContentBoxProps) {

    const css = [
        "faceplate-contentbox",
        faded ? "faceplate-contentbox-faded" : ""
    ];

    if (pattern) css.push(`faceplate-pattern-${pattern}`);

    return (
        <div className={css.join(" ")}>
            {label && <div className="faceplate-contentbox-label">{label}</div>}
            {topToolbar && <div className="faceplate-contentbox-toptoolbar"><ButtonLine direction="horizontal">{topToolbar}</ButtonLine></div>}
            {sideToolbar && <div className="faceplate-contentbox-sidetoolbar"><SideToolbox>{sideToolbar}</SideToolbox></div>}
            {children && <div className="faceplate-contentbox-content">{children}</div>}
        </div>
    );
};
