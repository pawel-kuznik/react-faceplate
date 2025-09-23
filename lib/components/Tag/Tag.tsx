import { ReactNode } from "react";

export interface TagProps {

    /**
     * The content to display inside the tag.
     */
    children: ReactNode;

    /**
     *  The actual tag value. If not provided directly the children
     *  will be cased to string to get the tag value.
     */
    tag?: string;

    /**
     * The formatting to apply to the tag text.
     */
    formatting?: "none" | "uppercased" | "lowercased" | "capitalized";

    /**
     * The visual style of the tag.
     */
    style?: "text" | "boxed";

    /**
     *  A callback to remove telling that user wants to remove the tag.
     *  When the callback is provided a small button to remove the tag
     *  is rendered. If the callback is not provided the additional button
     *  is not rendered.
     */
    onRemove?: (tag: string) => void;
}

/**
 * A component that displays text as a tag with configurable formatting and styling.
 */
export function Tag({ children, onRemove, tag, formatting = "none", style = "text" }: TagProps) {

    const tagValue = tag || (typeof children === "string" ? children : String(children));

    const css = [
        "faceplate-tag",
        `faceplate-tag-formatting-${formatting}`,
        `faceplate-tag-style-${style}`
    ];

    return (
        <span className={css.join(" ")}>
            {children}
            {onRemove && (
                <button type="button" className="faceplate-tag-remove" onClick={() => onRemove(tagValue)}>
                    &times;
                </button>
            )}
        </span>
    );
}