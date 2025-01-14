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
            {up.map(x => (<line x1={x} x2={x} y1={y-10} y2={y}/>))}
            <line x1={x} y1={y} x2={x+width} y2={y}/>
            {down.map(x => (<line x1={x} x2={x} y1={y} y2={y+10}/>))}
        </g>
    );
};