import { convertToCSSUnits } from "../../utils/convertToCSSUnits";

export interface ColumnProps {
    
    /**
     *  The label of the column.
     */
    label: string;

    /**
     *  The width of the column in px (when supplied by number) or in
     *  any css units (when supplied via string, eg, "300px", "50%", etc).
     */
    width?: number | string;
};

/**
 *  The internal column component for the DataTable.
 */
export function Column({ label, width }: ColumnProps) {
    
    return (
        <th style={{ width: convertToCSSUnits(width) }}>
            {label}
        </th>
    );
};