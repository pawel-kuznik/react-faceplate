export interface ButtonProps {

    /**
     *  The label to display inside the button.
     */
    label: string;

    /**
     *  The style of the button.
     */
    style?: "default" | "red" | "orange" | "yellow";

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
 *  A classing button component.
 */
export function Button({ label, style = "default", onClick, submit = true }: ButtonProps) {
    
    const handleClick = () => {
        onClick?.();
    };

    const css = [ "faceplate-button", `faceplate-button-style-${style}` ];

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