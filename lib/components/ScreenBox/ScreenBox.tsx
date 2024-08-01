import { ReactNode } from "react";

export interface ScreenBoxProps {

    children: ReactNode;
};

export function ScreenBox({ children }: ScreenBoxProps) {

    return (
        <div className="faceplate-screenbox">
            {children}
        </div>
    );
};
