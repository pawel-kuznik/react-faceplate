import { ReactNode } from "react";

export interface PageProps {

    /**
     *  The width of the page. 
     */
    width?: "800px" | string | number;

    /**
     *  Should the page be centered.
     */
    centered?: boolean;

    /**
     *  Expand the page to take the whole viewport.
     */
    expandToViewport?: boolean;

    children?: ReactNode;
};

/**
 *  This is a component that provides a "page" space. While the "page" concept
 *  might mean many things, in concept it's a space where we put our main content.
 */
export function Page({ centered, expandToViewport, width = "auto", children }: PageProps) {

    const css = [ "faceplate-page" ];
    if (centered) css.push("faceplate-page-centered");
    if (expandToViewport) css.push("faceplate-page-expandtoviewport");

    return (
        <div className={css.join(" ")}>
            <div className="faceplate-page-content" style={{ width: `calc(${width} - 2rem)` }}>
                {children}
            </div>
        </div>
    );
};
