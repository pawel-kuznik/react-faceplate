import { ReactNode } from "react";
import { PaletteColor } from "../CssTypes";

export interface ProgressBarProps {
    
    /**
     *  The current progress.
     */
    current: number;

    /**
     *  The total number to reach the completion of the progress. By default,
     *  it's 1 so that it's easy to use a float for the current progress.
     */
    total?: number;

    /**
     *  The color of the progress bar.
     */
    color?: PaletteColor | "default";

    /**
     *  The content of the progress bar. The component will place the content
     *  inside the actual bar. 
     */
    children?: ReactNode;
};

/**
 *  The component showing a progress bar.
 */
export function ProgressBar({ current, color = "default", total = 1, children }: ProgressBarProps) {

    const widthInPercent = Math.floor((current / total) * 100);

    const barStyles = {
        width: `${widthInPercent}%`
    };

    const css = [
        "faceplate-progressbar",
        `faceplate-progressbar-color-${color}`
    ];

    return (
        <div className={css.join(" ")}>
            <div style={barStyles} className="faceplate-progressbar-bar">
                {children}
            </div>
        </div>
    );
};
