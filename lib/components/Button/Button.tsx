import { PaletteColor } from "../CssTypes";

export interface ButtonProps {

    /**
     *  The label to display inside the button.
     */
    label?: string;

    /**
     *  The style of the button.
     */
    style?: "default" | PaletteColor;

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
export function Button({ label, block = false, style = "default", size = "normal", onClick, submit = true }: ButtonProps) {
    
    const handleClick = () => {
        onClick?.();
    };

    const css = [
        "faceplate-button",
        `faceplate-button-style-${style}`,
        `faceplate-button-size-${size}`
    ];

    if (block) css.push("faceplate-button-block");

    return (
        <button
            className={css.join(" ")}
            type={submit ? "submit" : "button"}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};