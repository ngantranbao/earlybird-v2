import React from 'react';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
interface MenuItemProps {
    /**
     * Id of the Menu Item. Can be string or number.
     */
    id: number | string;
    /**
     * Whether Menu Item is disabled.
     */
    disabled?: boolean;
    /**
     * The label of the Menu Item.
     */
    label?: React.ReactNode;
    /**
     * The icon of the Menu Item.
     */
    icon?: React.FC<SvgIconProps>;
    /**
     * The right element of the Menu Item.
     *
     * Usually, this is used to display a Badge, Icon or shortcut of the Menu Item.
     */
    rightElement?: React.ReactNode;
    /**
     * A space-delimited list of class names to pass along to a Menu Item element.
     */
    className?: string;
    /**
     * Called when the Menu Item is clicked.
     */
    onClick?: (e?: React.SyntheticEvent) => void;
    /**
     * Called when the Menu Item is selected.
     */
    onSelect?: (e?: React.SyntheticEvent, itemId?: number | string) => void;
    /**
     * A flag for selected Menu Item.
     */
    isSelected?: boolean;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export declare const isMenuItemElement: (object: any) => object is React.ReactElement<MenuItemProps, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
