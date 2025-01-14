import { ReactNode } from "react";

export interface NodeProps {

    /**
     * The x position of the node.
     */
    x?: number;

    /**
     * The y position of the node.
     */
    y?: number;

    /**
     *  The width of the node.
     */
    width?: number;

    /**
     *  The height of the node.
     */
    height?: number;

    /**
     * The content to render inside the node.
     */
    children: ReactNode;
};

/**
 *  A specific node in the tree chart. This component can hold
 *  a component that will be rendered inside the node. The node
 *  doesn't come with presentation styles and only offers a space
 *  to render.
 */
export function Node({ x = 0, y = 0, width = 100, height = 20, children }: NodeProps) {

    const content = (() => {

        if (typeof(children) === "string") {
            return <text height={height} width={width}>{children}</text>;
        }

        // if it's an object we assume it's HTML content.
        if (typeof(children) === "object") {

            return (
                <foreignObject width={width} height={height} y={-height}>
                    {children}
                </foreignObject>
            );
        }

        return children;
    })();

    return (
        <g className="faceplate-treechart-node" transform={`translate(${x}, ${y + height})`}>
            {content}
        </g>
    );
};