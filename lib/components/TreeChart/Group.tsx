import { Children, PropsWithChildren, ReactNode, useState } from "react";
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
};

export function Group({
    x = 0,
    y = 0,
    node,
    upPadding = 16,
    downPadding = 16,
    children
}: GroupProps) {

    const [ adjustedDowns, setAdjustedDowns ] = useState<number[]>(() => {
        return Array(Children.count(children)).fill(0).map((_, index) => index * 100);
    });

    // @todo we need to figure out the height of the node somehow.
    // the const value is no good cause it means that the node has to be
    // of a set value to not throw out of whack the whole layout.
    const nodeYOffset = 20;

    const adjustedChildren = Children.map(children, (child, index: number) => {

        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                x: adjustedDowns[index] + ("x" in child.props ? Number(child.props.x) : 0),
                y: upPadding + downPadding + nodeYOffset
            }};

            return {
                ...child,
                ...{ props: adjustedProps }
            };
        }

        return child;
    });

    return (
        <g transform={`translate(${x}, ${y})`}>
            <Node x={0} y={0}> 
                {node}
            </Node>
            <Branch
                x={0}
                y={upPadding + nodeYOffset}
                width={((adjustedChildren?.length || 1) - 1) * 100}
                up={[0]}
                down={adjustedDowns}
            />
            {adjustedChildren}
        </g>
    );
};