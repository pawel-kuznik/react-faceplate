import { PropsWithChildren } from "react";
import { Group } from "./Group";
import { Node } from "./Node";

export interface TreeChartProps extends PropsWithChildren {

};

/**
 *  A component to render a tree chart. The tree chart is built out of nodes
 *  that can have sub-nodes (and so on). Each node can be assigned a label that
 *  renders the actual node.
 */
function TreeChart({ children }: TreeChartProps) {

    return (
        <svg>
            {children}
        </svg>
    );
};

// export sub components
TreeChart.Group = Group;
TreeChart.Node = Node;

export { TreeChart };