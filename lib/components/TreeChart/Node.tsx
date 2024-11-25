
export interface NodeProps {

    x?: number;
    y?: number;

    children: string;
};

export function Node({ x = 0, y = 0, children }: NodeProps) {
    return (
        <g className="faceplate-treechart-node" transform={`translate(${x}, ${y + 20})`}>
            <text height={20} width={100}>{children}</text>
        </g>
    );
};