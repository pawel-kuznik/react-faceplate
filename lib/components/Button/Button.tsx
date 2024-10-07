import { ReactNode } from "react";
import { PaletteColor } from "../CssTypes";

export interface ButtonProps {

    /**
     *  The label to display inside the button.
     */
    label?: string;

    /**
     *  A custom component holding an optional icon for the button. The custom component should
     *  be something that renders in a 24x24px square when using normal size and 16x16px when using
     *  mini size.
     */
    icon?: ReactNode;

    /**
     *  The style of the button.
     *  @deprecated
     */
    style?: "default" | PaletteColor;

    /**
     *  The color of the button.
     */
    color?: "default" | PaletteColor;

    /**
     *  Should the button be display as a block?
     */
    block?: boolean;

    /**
     *  The size of the button.
     *  A default button should be used within forms and similar.
     *  A mini button should be used a small buttons around the main content. Think
     *  close button in a dialog.
     */
    size?: "normal" | "mini";

    /**
     *  A callback called after user clicks a button.
     */
    onClick?: () => void

    /**
     *  Should be button submit forms?
     */
    submit?: boolean;
};

/**
 *  A classing button component. The button can have a label, style (which mostly
 *  refers to the color), and typical onClick handler.
 */
export function Button({
    label,
    icon,
    block = false,
    color,
    style = "default",
    size = "normal", 
    onClick,
    submit = true 
}: ButtonProps) {
    
    const handleClick = () => {
        onClick?.();
    };

    const css = [
        "faceplate-button",
        (color === undefined && style !== undefined) ? `faceplate-button-color-${style}` : `faceplate-button-color-${color || 'default'}`,
        `faceplate-button-size-${size}`
    ];

    if (block) css.push("faceplate-button-block");

    return (
        <button
            className={css.join(" ")}
            type={submit ? "submit" : "button"}
            onClick={handleClick}
        >
            {icon && (<span className="faceplate-button-icon">{icon}</span>)}
            {label}
        </button>
    );
};