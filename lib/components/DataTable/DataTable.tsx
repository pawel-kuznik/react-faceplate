import { ReactNode } from "react";
import { ColumnProps } from "./Column";
import { Header } from "./Header";
import { Body } from "./Body";

export interface DataTableProps {

    /**
     *  Definitions for columns. The array should contain properies
     *  for each column or the column name (when only string supplied).
     */
    columns?: Array<ColumnProps|string>;

    /**
     *  The data to show in the table.
     */
    data?: Array<Array<ReactNode|string|number>>;
};

/**
 *  A component to show data in a table form.
 */
function DataTable({ columns, data }: DataTableProps) {
    return (
        <table className="faceplate-datatable">
            {columns && <Header columns={columns}/>}
            {data && <Body data={data}/>}
        </table>
    );
};


export type { ColumnProps };
export { DataTable };