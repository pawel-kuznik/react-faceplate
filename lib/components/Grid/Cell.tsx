import { ReactNode } from "react";
import { Mount } from "./Mount";

export interface CellProps {

    /**
     *  How many cells in the grid the cell should span in X direction?
     */
    xSpan?: number;

    /**
     *  How many cells in the grid the cell should span in Y direction?
     */
    ySpan?: number;

    /**
     *  Should the child component be installed in a mounted cell? Meaning that
     *  the 100% of height or width will span the whole cell perfectly.
     * 
     *  @see Mount component documentation for better information.
     */
    mount?: boolean;

    /**
     *  The children. This should be one root element for the cell.
     */
    children?: ReactNode;
};

/**
 *  A grid cell. The main responsibility of this component is to reserve
 *  proper amount of space for the child component.
 */
export function Cell({ xSpan = 1, ySpan = 1, mount = false, children }: CellProps) {

    const styles = {
        gridColumn: `span ${xSpan}`,
        gridRow: `span ${ySpan}`
    };

    if (mount) return (
        <div className="faceplate-grid-cell" style={styles}>
            <Mount>
                {children}
            </Mount>
        </div>
    );

    return (
        <div className="faceplate-grid-cell" style={styles}>
            {children}
        </div>
    );
};