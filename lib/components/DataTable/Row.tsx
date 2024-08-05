import { ReactNode } from "react";


export interface RowProps {

    cells: Array<ReactNode|string|number>;
};

export function Row({ cells }: RowProps) {
    return (
        <tr>
            {cells.map((c, i) => (<td key={i}>{c}</td>))}
        </tr>
    );
};
