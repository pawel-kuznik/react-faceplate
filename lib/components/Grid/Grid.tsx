import { Children, Fragment, ReactNode } from "react";
import { Cell } from "./Cell";
import { Mount } from "./Mount";

export interface GridProps {

    /**
     *  The number of columns the grid will form.
     */
    columns: number | "auto";

    /**
     *  The number of rows the grid will form.
     */
    rows: number | "auto";

    /**
     *  The children of the grid.
     */
    children?: ReactNode;
};

/**
 *  This is a component that allows placing elements inside a grid layout.
 */
function Grid({ columns, rows, children }: GridProps) {

    const style = {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
    };

    return (
        <div className="faceplate-grid" style={style}>
            {Children.map(children, c => {

                // normalize number or string to be a singular element and put it into a cell.
                if (typeof(c) === "number" || typeof(c) === "string") return (<Cell>{c}</Cell>);

                // handling immediate fragments is a little bit special. We need to get into
                // he props and then iterate over them to wrap each of them inside a Cell
                // and then put inside a new fragment.
                if ((c as any).type === Fragment) return (
                    <>
                        {(c as any).props.children.map((cc: any, i: number) => {

                            if (cc.type === Cell) return cc;
                            return <Cell key={i}>{cc}</Cell>;
                        })}
                    </>
                );

                // not a Cell? Then wrap it inside a cell.
                if ((c as any).type !== Cell) return (<Cell>{c}</Cell>); 

                // we assume it should be a cell
                return c;
            })}
        </div>
    );
};

Grid.Cell = Cell;
Grid.Mount = Mount;

export { Grid };

