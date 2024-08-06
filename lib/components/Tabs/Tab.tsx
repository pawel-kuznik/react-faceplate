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
};

/**
 *  This is a component that shows the tab to select.
 */
export function Tab({ index, selected, onSelected, label }: TabProps) {
    
    const css = [
        "faceplate-tabs-tab",
        selected ? `faceplate-tabs-tab-selected` : ''
    ];
    
    const handleClick = () => {
        onSelected(index);
    };
    
    return (
        <button className={css.join(" ")} onClick={handleClick}>
            {label}
        </button>
    );
};