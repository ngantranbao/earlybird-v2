import React from 'react';
import { TabId } from './Tabs';
interface Props {
    /**
     * Id of this Tab, can be string or number.
     */
    id: TabId;
    /**
     * Should this Tab be selectable.
     */
    disabled?: boolean;
    /**
     * Title of the Tab appears on Tab navigator bar.
     */
    title: string;
    /**
     * Content of the Tab shown when it is selected.
     */
    children?: React.ReactNode;
}
export declare const Tab: React.FC<Props>;
export declare const isTabElement: (object: any) => object is React.ReactElement<Props, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
