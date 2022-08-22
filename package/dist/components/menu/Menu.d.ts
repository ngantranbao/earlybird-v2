import React from 'react';
export interface MenuProps {
    /**
     * A space-delimited list of class names to pass along to a Menu element.
     */
    className?: string;
    /**
     * Called when the Menu Item is selected.
     */
    onSelect?: (e?: React.SyntheticEvent, itemId?: number | string) => void;
    /**
     * Value of select Menu Item
     */
    selectedItem?: number | string;
    /**
     * A flag to hide border and box shadow
     */
    noShadow?: boolean;
}
export declare const Menu: React.FC<MenuProps>;
