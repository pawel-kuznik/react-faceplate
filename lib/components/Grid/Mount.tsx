import { ReactNode } from "react";

export interface MountProps {

    /**
     *  The children of the component.
     */
    children?: ReactNode;
};

/**
 *  This is a special component that can be used to provided a "mounted" space in the grid.
 *  This essentially allows anything that is installed inside to assume 100% of height and
 *  width and overlay the occupied grid cell perfectly.
 * 
 *  The component is motly useful when applied on components that are spanning across
 *  a couple of rows or column that are derived from the size of components inside them.
 *  This way it can dynamically allocate space and align correctly with other components.
 */
export function Mount({ children }: MountProps) {

    return (
        <div className="faceplate-grid-mount">{children}</div>
    );
};