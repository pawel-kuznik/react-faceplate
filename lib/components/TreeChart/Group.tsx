import { Children, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { Node } from "./Node";
import { Branch } from "./Branch";

export interface GroupProps extends PropsWithChildren {

    /**
     * The x position of the group.
     */
    x?: number;

    /**
     * The y position of the group.
     */
    y?: number;

    /**
     * The node to render at the top of the group.
     */
    node: ReactNode;

    /**
     * The padding to apply to the top of the group.
     */
    upPadding?: number;

    /**
     * The padding to apply to the bottom of the group.
     */
    downPadding?: number;

    /**
     *  An optional callback to call when the node resizes for some reason.
     */
    onResize?: (width: number, height: number, x: number, y: number) => void;
};

/**
 *  A group in the tree is a horizontal layout of nodes that creates
 *  a branch of the tree.
 */
export function Group({
    x = 0,
    y = 0,
    node,
    upPadding = 16,
    downPadding = 16,
    onResize,
    children
}: GroupProps) {

    const [ adjustedDowns, setAdjustedDowns ] = useState<number[]>(() => {
        return Array(Children.count(children)).fill(0).map((_, index) => index * 100);
    });

    // we need to keep track of the widths of each child node. The children
    // can expand and when they do, we need to inform our parent that we expanded.
    const [ widths, setWidths ] = useState(() => {
        return Array(Children.count(children)).fill(100);
    });

    // similarly to the widths, we need to keep track of the heights of
    // the top and bottom nodes. When they expand we need to also expand and
    // tell our parent that we expanded.
    const [ heights, setHeights ] = useState(() => {
        return Array(Children.count(children)).fill(20);
    });

    const [ nodeHeight, setNodeHeight ] = useState(20);

    // @todo we need to figure out the height of the node somehow.
    // the const value is no good cause it means that the node has to be
    // of a set value to not throw out of whack the whole layout.
    const nodeYOffset = 20;

    const adjustedChildren = Children.map(children, (child, index: number) => {

        // if the child is an object and has props attribute, we assume it's a component.
        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                x: adjustedDowns[index] + ("x" in child.props ? Number(child.props.x) : 0),
                y: upPadding + downPadding + nodeYOffset,
                onResize: (width: number, height: number, x: number, y: number) => {

                    const newWidths = ((prev) => {
                        const copy = [ ...prev ];
                        copy[index] = width;
                        return copy
                    })(widths); 

                    setWidths(newWidths);

                    const newDowns = [];

                    for (let i = 0; i < adjustedDowns.length; i++) {
                        newDowns.push(sumTill(newWidths, i));
                    }

                    setAdjustedDowns(newDowns);

                    setHeights((prev) => {
                        const copy = [ ...prev ];
                        copy[index] = height;
                        return copy;
                    });
                }
            }};

            return {
                ...child,
                ...{ props: adjustedProps }
            };
        }

        return child;
    });

    useEffect(() => {

        const maxChildHeight = (() => {

            if (heights.length === 0) return 20;
            return Math.max(20, heights.reduce((acc, height) => Math.max(acc, height), 0));
        })();

        onResize?.(widths.reduce((acc, width) => acc + width, 0), upPadding + downPadding + nodeYOffset + maxChildHeight + nodeHeight, x, y);
    }, [ widths, heights, nodeHeight ]);

    const branchWidth = adjustedDowns[adjustedDowns.length - 1];

    const onNodeResize = (width: number, height: number, x: number, y: number) => {
        setNodeHeight(height);
    };

    return (
        <g transform={`translate(${x}, ${y})`}>
            <Node x={0} y={0} onResize={onNodeResize}> 
                {node}
            </Node>
            <Branch
                x={0}
                y={upPadding + nodeYOffset}
                width={branchWidth}
                up={[0]}
                down={adjustedDowns}
            />
            {adjustedChildren}
        </g>
    );
};

/**
 *  A helper function to sum an array of numbers until a certain index.
 */
function sumTill(array: number[], index: number): number {
    return array.slice(0, index).reduce((acc, value) => acc + value, 0);
};