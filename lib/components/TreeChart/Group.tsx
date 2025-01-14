import { Children, PropsWithChildren } from "react";
import { Node } from "./Node";
import { Branch } from "./Branch";

export interface GroupProps extends PropsWithChildren {
    x?: number;
    y?: number;
    node: string;
    upPadding?: number;
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

    // @todo we need to figure out the height of the node somehow.
    // the const value is no good cause it means that the node has to be
    // of a set value to not throw out of whack the whole layout.
    const nodeYOffset = 18;

    const downPositions : number[] = [ ];

    const adjustedChildren = Children.map(children, (child, index: number) => {

        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                x: x + (index * 100) + ("x" in child.props ? Number(child.props.x) : 0),
                y: y + upPadding + downPadding + nodeYOffset
            }};

            downPositions.push(index * 100);

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
                down={downPositions}
            />
            {adjustedChildren}
        </g>
    );
};