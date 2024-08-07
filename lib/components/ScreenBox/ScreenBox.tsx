import { ReactNode } from "react";

export interface ScreenBoxProps {

    /**
     *  The children of the SceenBox.
     */
    children: ReactNode;
};

/**
 *  This is a component that puts children in a CRT like screen box.
 *  This is mostly so that we can declare a clear start for specific
 *  styles.
 */
export function ScreenBox({ children }: ScreenBoxProps) {

    return (
        <div className="faceplate-screenbox">
            {children}
        </div>
    );
};
