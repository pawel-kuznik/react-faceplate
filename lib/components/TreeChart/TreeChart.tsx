import { PropsWithChildren } from "react";
import { Group } from "./Group";
import { Node } from "./Node";
import { List } from "./List";

export interface TreeChartProps extends PropsWithChildren {

    /**
     *  The CSS width of the chart.
     */
    width?: number | string;

    /**
     *  The CSS height of the chart. 
     */
    height?: number | string;
};

/**
 *  A component to render a tree chart. The tree chart is built out of nodes
 *  that can have sub-nodes (and so on). Each node can be assigned a label that
 *  renders the actual node.
 */
function TreeChart({ width, height, children }: TreeChartProps) {

    return (
        <svg width={width} height={height} className="faceplate-treechart">
            {children}
        </svg>
    );
};

// export sub components
TreeChart.Group = Group;
TreeChart.Node = Node;
TreeChart.List = List;

export { TreeChart };