import { PropsWithChildren, useState, Children } from "react";
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
function TreeChart({ width = 800, height = 600, children }: TreeChartProps) {

    const [ actualWidth, setActualWidth ] = useState(width);
    const [ actualHeight, setActualHeight ] = useState(height);

    const adjustedChildren = Children.map(children, (child) => {

        // are we dealing with a component?
        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                onResize: (width: number, height: number, x: number, y: number) => {
                    setActualWidth(width + x);
                    setActualHeight(y + height)
                }
            }};

            return {
                ...child,
                ...{ props: adjustedProps }
            };
        }

    });

    return (
        <svg width={actualWidth} height={actualHeight} className="faceplate-treechart">
            {adjustedChildren}
        </svg>
    );
};

// export sub components
TreeChart.Group = Group;
TreeChart.Node = Node;
TreeChart.List = List;

export { TreeChart };