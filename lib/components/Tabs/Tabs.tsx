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
     *  Should the tabs be in horizontal or vertical layout?
     */
    layout?: "horizontal" | "vertical";
};

/**
 *  A component that shows tabs.
 */
export function Tabs({ tabs, layout = "horizontal" }: TabsProps) {

    const css = [ 
        "faceplate-tabs",
        `faceplate-tabs-layout-${layout}`
    ];

    const [ selected, setSelected ] = useState<number>(0);

    const handleSelected = (index: number) => {
        setSelected(index);
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
