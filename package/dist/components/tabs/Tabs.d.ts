import React from 'react';
export declare type TabId = string | number;
interface Props {
    /**
     * Active Tab id in the tab. This is used in controlled mode.
     */
    activeTabId?: TabId;
    /**
     * Trigger when user perform a Tab switching action.
     */
    onChange?: (id: TabId) => void;
    /**
     * Default tab when component mounted. This is used in uncontrolled mode.
     */
    defaultTabId?: TabId;
    /**
     * Should Tab apply vertical styles.
     */
    vertical?: boolean;
    /**
     * CSS width property is applied for all Tab.
     */
    fixedTabWidth?: string;
}
export declare const Tabs: React.FC<Props>;
export {};
