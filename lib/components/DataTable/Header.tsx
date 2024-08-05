import { Column, ColumnProps } from "./Column";

export interface HeaderProps {

    /**
     *  Properties of columns to render.
     */
    columns: ColumnProps[];
};

export function Header({ columns }: HeaderProps) {
    return (
        <thead>
            {columns.map((c, i) => (<Column key={i} {...c}/>))}
        </thead>
    );
};