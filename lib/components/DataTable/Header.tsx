import { Column, ColumnProps } from "./Column";

export interface HeaderProps {

    /**
     *  Properties of columns to render.
     */
    columns: ColumnProps[];
};

/**
 *  The header part of the DataTable.
 */
export function Header({ columns }: HeaderProps) {
    return (
        <thead>
            <tr>
                {columns.map((c, i) => (<Column key={i} {...c}/>))}
            </tr>
        </thead>
    );
};