import { ReactNode, useContext } from "react";
import { RowAlignmentContext } from "./RowAlignmentContext";

export interface RowProps {

    /**
     *  The label of the row.
     */
    label: string | ReactNode;

    /**
     *  The content of the row.
     */
    children?: ReactNode;
};

export function Row({ label, children }: RowProps) {

    const alignment = useContext(RowAlignmentContext);

    if (alignment.startsWith("right")) return (
        <div className="faceplate-statslist-row">
            <span className="faceplate-statslist-row-value">{children}</span>
            <span className="faceplate-statslist-row-label">{label}</span>
        </div>
    );

    return (
        <div className="faceplate-statslist-row">
            <span className="faceplate-statslist-row-label">{label}</span>
            <span className="faceplate-statslist-row-value">{children}</span>
        </div>
    );
};