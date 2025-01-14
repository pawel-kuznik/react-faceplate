export interface BranchProps {

    /**
     *  The X positions of "twigs" that come out of the branch and go up.
     */
    up: number[];

    /**
     *  The X positions of "twigs" that come out of the branch and go down.
     */
    down: number[];

    /**
     *  The width of the branch.
     */
    width: number;

    /**
     *  The x position of the branch.
     */
    x: number;

    /**
     *  The y position of the branch.
     */
    y: number;

    /**
     *  The offset on X axis for all items in the branch.
     */
    xOffset?: number;
};

/**
 *  This component rendered a branch in the tree chart. A branch is line
 *  that comes out of a parent node and leads to the child nodes.
 */
export function Branch({ x, y, width, up, down, xOffset = 8 }: BranchProps) {

    return (
        <g className="faceplate-treechart-branch">
            {up.map((x, index) => (<line key={index} x1={x + xOffset} x2={x + xOffset} y1={y-10} y2={y}/>))}
            <line x1={x + xOffset} y1={y} x2={x + width + xOffset} y2={y}/>
            {down.map((x, index) => (<line key={index} x1={x + xOffset} x2={x + xOffset} y1={y} y2={y+10}/>))}
        </g>
    );
};