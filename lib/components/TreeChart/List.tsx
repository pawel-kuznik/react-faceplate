import { ReactNode } from "react";
import { Node } from "./Node"

export interface ListProps {

    /**
     *  The node to render as the root of the list.
     */
    node: ReactNode;

    /**
     *  The X position of the list.
     */
    x?: number;

    /**
     *  The Y position of the list.
     */
    y?: number;

    /**
     *  The children to render inside the list.
     */
    children?: ReactNode;
};

/**
 *  A component representing a list inside the tree chart. A list
 *  is very similar in concept to a group, but it renders its children
 *  from top to bottom.
 */
export function List({ node, x, y, children }: ListProps) {

    return (
        <g className="faceplate-treechart-list" transform={`translate(${x}, ${y})`}>
            <Node x={0} y={0}> 
                {node}
            </Node> 
        </g>
    );
};