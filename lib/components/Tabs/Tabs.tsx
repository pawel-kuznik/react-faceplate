import { useState } from "react";
import { Tab } from "./Tab";
import { PaletteColor, Pattern } from "../CssTypes";

export interface TabConfig {

    /**
     *  The label of the tab.
     */
    label: string;

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
     *  Properties to assign to the selected tab.
     */
    selectOverrides?: Omit<TabConfig, "label">;

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
export function Tabs({ tabs, onTabChange, layout = "horizontal", selectOverrides }: TabsProps) {

    const css = [
        "faceplate-tabs",
        `faceplate-tabs-layout-${layout}`
    ];

    const [selected, setSelected] = useState<number>(0);

    const handleSelected = (index: number) => {
        setSelected(index);

        if (selected !== index) onTabChange?.(index);
    };

    return (
        <nav className={css.join(" ")}>
            {tabs.map((config, idx) => {

                const choosen = idx === selected;

                const size = (selectOverrides?.size && choosen) ? selectOverrides.size : config.size;
                const color= (selectOverrides?.color && choosen) ? selectOverrides.color : config.color;
                const pattern = (selectOverrides?.pattern && choosen) ? selectOverrides.pattern : config.pattern;
                const label = (selectOverrides?.label && choosen) ? selectOverrides.label : config.label;

                return (<Tab
                    key={idx}
                    size={size}
                    color={color}
                    pattern={pattern}
                    label={label}
                    index={idx}
                    selected={choosen}
                    onSelected={handleSelected}
                />);
            })}
        </nav>
    );
};
