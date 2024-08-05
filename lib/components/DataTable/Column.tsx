export interface ColumnProps {
    
    /**
     *  The label of the column.
     */
    label: string;
};

/**
 *  The internal column component for the DataTable.
 */
export function Column({ label }: ColumnProps) {
    return (
        <th>
            {label}
        </th>
    );
};