import { ReactNode } from "react";

export interface SideToolboxProps {

    children?: ReactNode;
};

export function SideToolbox({ children }: SideToolboxProps) {

    return (
        <div className="faceplate-sidetoolbox">
            {children}
        </div>
    );
};
