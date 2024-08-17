import { ReactNode } from "react";

export interface PageHeaderProps {

    /**
     *  The title of the page header.
     */
    title: string | ReactNode;

    /**
     *  Should there be borders around the header?
     */
    borders?: boolean;

    /**
     *  The optional controls that should show up on the left of the title.
     */
    leftControls?: ReactNode;

    /**
     *  The optional controls that should show up on the right of the title.
     */
    rightControls?: ReactNode;
};

export function PageHeader({ title, borders, leftControls, rightControls }: PageHeaderProps) {

    const css = [ "faceplate-pageheader" ];
    if (borders) css.push("faceplate-pageheader-borders");

    return (
        <div className={css.join(" ")}>
            {leftControls && (<div className="faceplate-pageheader-leftcontrols">{leftControls}</div>)}
            <div className="faceplate-pageheader-title">{title}</div>
            {rightControls && (<div className="faceplate-pageheader-rightcontrols">{rightControls}</div>)}
        </div>
    );
};