import { Children, PropsWithChildren } from "react";
import { Node } from "./Node";
import { Branch } from "./Branch";

export interface GroupProps extends PropsWithChildren {
    x?: number;
    y?: number;
    node: string;
};

export function Group({ x = 0, y = 0, node, children }: GroupProps) {

    const adjustedChildren = Children.map(children, (child, index: number) => {

        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                x: x + (index * 100) + ("x" in child.props ? Number(child.props.x) : 0),
                y: y + 100
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
            <Branch x={0} y={50} width={((adjustedChildren?.length || 1) - 1) * 100} up={[0]} down={[0]}/>
            {adjustedChildren}
        </g>
    );
};