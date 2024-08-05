import { ReactNode } from "react";
import { Row } from "./Row";

export interface BodyProps {

    /**
     *  The data to show in the table.
     */
    data: Array<Array<ReactNode | string | number>>;
};

export function Body({ data }: BodyProps) {

    return (
        <tbody>
            {data.map((d, i) => (<Row key={i} cells={d}/>))}
        </tbody>
    );
};