import { useState } from "react";
import { Tab } from "./Tab";

export interface TabConfig {

    /**
     *  The label of the tab.
     */
    label: string;
};

export interface TabsProps {

    /**
     *  The config for tabs to show.
     */
    tabs: TabConfig[];

    /**
     *  
     */
    mounted?: boolean;

    /**
     *  Should the tabs be in horizontal or vertical layout?
     */
    layout?: "horizontal" | "vertical";

    /**
     *  A callback to call when the user wants to change a tab.
     */
    onTabChange?: (index: number) => void;
};

/**
 *  A component that shows tabs. The component is responsible for visual
 *  of the tabs controls, but not for the actual tabs behaviour. This
 *  is tackled in the TabsFrame component.
 */
export function Tabs({ tabs, onTabChange, layout = "horizontal" }: TabsProps) {

    const css = [ 
        "faceplate-tabs",
        `faceplate-tabs-layout-${layout}`
    ];

    const [ selected, setSelected ] = useState<number>(0);

    const handleSelected = (index: number) => {
        setSelected(index);

        if (selected !== index) onTabChange?.(index);
    };  

    return (
        <nav className={css.join(" ")}>
            {tabs.map((config, idx) => {
                return (<Tab
                    key={idx}
                    label={config.label}
                    index={idx}
                    selected={idx === selected}
                    onSelected={handleSelected}
                />);
            })}
        </nav>
    );
};
