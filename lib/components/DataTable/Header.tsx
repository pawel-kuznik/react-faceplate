import { Column, ColumnProps } from "./Column";

export interface HeaderProps {

    /**
     *  Properties of columns to render.
     */
    columns: Array<ColumnProps|string>;
};

/**
 *  The header part of the DataTable.
 */
export function Header({ columns }: HeaderProps) {
    return (
        <thead>
            <tr>
                {columns.map((c, i) => {
                    if (typeof(c) === "string") return <Column key={i} label={c}/>;
                    return <Column key={i} {...c}/>
                })}
            </tr>
        </thead>
    );
};