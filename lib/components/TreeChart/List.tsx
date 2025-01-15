import { Children, ReactNode, useEffect, useState } from "react";
import { Node } from "./Node"
import { on } from "events";

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

    /**
     *  An optional callback to call when the node resizes for some reason.
     */
    onResize?: (width: number, height: number, x: number, y: number) => void;
};

/**
 *  A component representing a list inside the tree chart. A list
 *  is very similar in concept to a group, but it renders its children
 *  from top to bottom.
 */
export function List({ node, x = 0, y = 0, children, onResize }: ListProps) {

    let length = 0
    const notches: number[] = [];

    const [ heights, setHeights] = useState(() => {
        return Array(Children.count(children)).fill(20);
    });

    const [ nodeHeight, setNodeHeight ] = useState(20);

    const adjustedChildren = Children.map(children, (child, index: number) => {

        if (typeof(child) === "object" && child !== null && ("props" in child)) {

            const adjustedProps = { ...child.props, ...{
                x: 18,
                y: 28 + index * 28
            }};
            
            length += 28;
            notches.push(index * 28)
        
            return {
                ...child,
                ...{ props: adjustedProps },
                onResize: (width: number, height: number, x: number, y: number) => {

                    setHeights((heights) => {
                        const copy = [ ...heights ];
                        copy[index] = height;
                        return copy;
                    });
                }
            };
        }

        return child;
    });

    useEffect(() => {

        const childrenHeights = heights.reduce((acc, height) => acc + height, 0);

        onResize?.(100, childrenHeights + nodeHeight + 14, x, y);

    }, [ heights, nodeHeight ]);

    const onNodeResize = (width: number, height: number, x: number, y: number) => {
        setNodeHeight(height);
    };

    return (
        <g className="faceplate-treechart-list" transform={`translate(${x}, ${y})`}>
            <Node x={0} y={0} onResize={onNodeResize}> 
                {node}
            </Node>
            <line x1={8} x2={8} y1={28 + 0} y2={28 + length - 13}/>
            {notches.map((notch, index) => (
                <line key={index} x1={8} x2={16} y1={28 + notch + 14} y2={28 + notch + 14}/>
            ))}
            {adjustedChildren}
        </g>
    );
};