import { PaletteColor, Pattern } from "../CssTypes";

export interface TabProps {

    /**
     *  The label of the tab
     */
    label: string;

    /**
     *  The selected tab.
     */
    selected: boolean;

    /**
     *  The tab index.
     */
    index: number;

    /**
     *  A callback called when the user selects the tab.
     *  The passed index is the index of the tab.
     */
    onSelected: (index: number) => void;

    /**
     *  The size of the tab.
     */
    size?: "normal" | "big";

    /**
     *  The color of the tab.
     */
    color?: PaletteColor;

    /**
     *  The pattern of the tab.
     */
    pattern?: Pattern;
};

/**
 *  This is a component that shows the tab to select.
 */
export function Tab({ index, selected, onSelected, label, size, color, pattern }: TabProps) {
    
    const css = [
        "faceplate-tabs-tab",
        selected ? `faceplate-tabs-tab-selected` : '',
        size ? `faceplate-tabs-color-size-${size}`: '',
        color ? `faceplate-tabs-tab-color-${color}` : '',
        pattern ? `faceplate-pattern-${pattern}` : ''
    ].filter(Boolean);
    
    const handleClick = () => {
        onSelected(index);
    };
    
    return (
        <button className={css.join(" ")} onClick={handleClick}>
            {label}
        </button>
    );
};