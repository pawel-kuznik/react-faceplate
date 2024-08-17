import { ReactNode } from "react";

export interface TabProps {

    /**
     *  The label of the tab.
     */
    label: string;

    /**
     *  The content of the tab
     */
    children?: ReactNode;
};

/**
 *  The tab inside the TabsFrame.
 */
export function Tab({ }: TabProps) {

    // there is no processing for the Tab as the TabsFrame does all
    // the processing based on the properties passed tho this component.

    return (
        <></>
    );
};