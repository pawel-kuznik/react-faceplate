import { ReactNode } from "react";

export interface PageTitleProps {

    /**
     *  The title of the page header.
     */
    title: string | ReactNode;

    /**
     *  The optional controls that should show up on the left of the title.
     */
    leftControls? : ReactNode;

    /**
     *  The optional controls that should show up on the right of the title.
     */
    rightControls? : ReactNode;
};

export function PageTitle({ title, leftControls, rightControls }: PageTitleProps) {
    
    const css = [ "faceplate-pagetitle" ];

    return (
        <header className={css.join(" ")}>
            {leftControls && (<div className="faceplate-pagetitle-leftcontrols">{leftControls}</div>)}
            <div className="faceplate-pagetitle-title">{title}</div>
            {rightControls && (<div className="faceplate-pagetitle-rightcontrols">{rightControls}</div>)}
        </header>
    );
};