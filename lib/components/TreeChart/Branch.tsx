export interface BranchProps {

    up: number[];
    down: number[];

    width: number;

    x: number;
    y: number;
};

export function Branch({ x, y, width, up, down }: BranchProps) {

    return (
        <g className="faceplate-treechart-branch">
            <line x1={x} y1={y} x2={x+width} y2={y}/>
        </g>
    );
};