import { Children, FC, Fragment, ReactElement, ReactNode, useState } from "react";
import { Cell } from "../Grid/Cell";
import { Grid } from "../Grid/Grid";
import { Tabs } from "../Tabs";
import { Tab, TabProps } from "./Tab";

export interface TabsFrameProps {

    layout?: "horizontal" | "vertical";

    /**
     *  The children of the TabsFrame. The children should be
     *  either a list of TabsFrame.Tab or a fragment that contains
     *  TabFrameTabs.
     */
    children: ReactNode;
};

function TabsFrame({ layout = "horizontal", children }: TabsFrameProps) {

    const [ selected, setSelected ] = useState<number>(0);

    const tabs = processChildren(children);

    const tabsConfig = tabs.map(c => ({
        label: c.props.label
    }));

    return (
        <Grid columns={layout === "horizontal" ? 1 : 5} rows={layout === "horizontal" ? 5 : 1}>
            <Cell mount>
                <Tabs
                    layout={layout}
                    tabs={tabsConfig}
                    onTabChange={setSelected}
                />
            </Cell>
            <Cell xSpan={layout === "horizontal" ? 1 : 4} ySpan={layout === "horizontal" ? 1 : 4}>
                {tabs[selected].props.children}
            </Cell>
        </Grid>
    )
};

function processChildren(node: ReactNode) {

    const result: ReactElement<TabProps>[] = [];

    Children.forEach(node, (child) => {

        if ((child as any).type === Fragment) {
            result.push(...processChildren((child as any).props.children));
            return;
        }

        if ((child as any).type === Tab) {
            result.push(child as any);
        }
    });

    return result;
}

TabsFrame.Tab = Tab;

export { TabsFrame }; 