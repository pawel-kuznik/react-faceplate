import { Children, FC, Fragment, ReactElement, ReactNode, useState } from "react";
import { Tabs } from "../Tabs";
import { Tab, TabProps } from "./Tab";

export interface TabsFrameProps {

    /**
     *  The layout of the tabs. The name of the layout refers to
     *  layout of the tabs items, not the relation between tabs
     *  and content.
     * 
     *  horizontal -    The tabs are on the top of the content.
     *  vertical -      The tabs are on the left of the content.
     */
    layout?: "horizontal" | "vertical";

    /**
     *  The children of the TabsFrame. The children should be
     *  either a list of TabsFrame.Tab or a fragment that contains
     *  TabFrameTabs.
     */
    children?: ReactNode;
};

/**
 *  TabsFrame component is an easy way to use tabs with switching content.
 *  The component has to be defined in a very specific way: each child of this
 *  component should be a TabsFrame.Tab component with configuration about
 *  the tab and content.
 * 
 *  The tab configuration are the attributes of the TabsFrame.Tab component 
 *  and the content of the tab is the children. The children will not be rendered
 *  (or even present in the DOM) when the tab is not active. This means that
 *  any logic associated with them will not run.
 */
function TabsFrame({ layout = "horizontal", children }: TabsFrameProps) {

    const [ selected, setSelected ] = useState<number>(0);

    const tabs = processChildren(children);

    const tabsConfig = tabs.map(c => ({
        label: c.props.label
    }));

    const css = [
        'faceplate-tabsframe',
        `faceplate-tabsframe-${layout}`
    ];

    return (
        <div className={css.join(" ")}>
            <div className="faceplate-tabsframe-tabs">
                <Tabs
                    layout={layout}
                    tabs={tabsConfig}
                    onTabChange={setSelected}
                />
            </div>
            <div className="faceplate-tabsframe-content">
                {tabs[selected].props.children}
            </div>
        </div>
    );
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