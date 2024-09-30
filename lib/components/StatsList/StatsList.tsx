import { ReactNode } from "react";
import { Row } from "./Row";
import { RowAlignment } from "./RowAlignment";
import { RowAlignmentContext } from "./RowAlignmentContext";

export interface StatsListProps {

    /**
     *  The alignment of the items.
     * 
     *  - `left` means that the label will be on the left side and
     *  the content will be aligned to the left in both label and content.
     * 
     *  - `left-axis` means that that the label will be on the left side,
     *  but the content and label will be aligned towards an axis between them.
     * 
     *  - `left-edges` means that the label will be on the left side
     *  of the content and the label and content will be aligned to the edges.
     * 
     *  - `right-edges` means that the label will be on the right side of
     *  the content and the label and content will be aligned to the edges.
     * 
     *  - `right` means that the label will be on the right side of the content
     *  and the content and label will be aligned to the right.
     * 
     *  - `right-axis` means that the label will be on the left side of
     *  the content and the label and content will be aligned to the axis
     *  between them. 
     */
    alignment: RowAlignment;

    /**
     *  The contents of the StatsList. It should be a series of
     *  StatsList.Row components.
     */
    children: ReactNode;
};

function StatsList({ alignment, children }: StatsListProps) {

    const css = [
        'faceplate-statslist',
        `faceplate-statslist-alignment-${alignment}`
    ];

    return (
        <div className={css.join(' ')}>
            <RowAlignmentContext.Provider value={alignment}>
                {children}
            </RowAlignmentContext.Provider>
        </div>
    );
};

StatsList.Row = Row;

export { StatsList };