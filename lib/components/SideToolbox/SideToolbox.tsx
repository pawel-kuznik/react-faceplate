import { ReactNode } from "react";

export interface SideToolboxProps {

    /**
     *  The children of SideToolbox.
     */
    children?: ReactNode;
};

/**
 *  This is a layout component that shows a small box in which buttons
 *  and other control elements can be mounted.
 * 
 *  At this time this component shouldn't be used directly, but use 
 *  `sideToolbar` property of the `ContentBox` component. More components
 *  will implement similar functionality in the future.
 */
export function SideToolbox({ children }: SideToolboxProps) {

    return (
        <div className="faceplate-sidetoolbox">
            {children}
        </div>
    );
};
