import React from 'react';
import { IntentType } from '../../commons/types';
interface Props {
    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className?: string;
    /**
     * Background color of the Tag, IntentType can also be passed.
     */
    color?: IntentType | string;
    /**
     * Should Tag apply large styles.
     */
    large?: boolean;
    /**
     * Should Tag have the close button on right side. Clicking on this also
     * trigger onRemove.
     */
    removable?: boolean;
    /**
     * Trigger when clicking close button on right side. Only available when removable=true.
     */
    onRemove?: React.MouseEventHandler;
    /**
     * Should Tag apply interactive styles.
     */
    interactive?: boolean;
    /**
     * Trigger when clicking on Tag, only when interactive=true
     */
    onClick?: React.MouseEventHandler;
    /**
     * Should Tag apply minimal styles.
     */
    minimal?: boolean;
    /**
     * Leftmost icon of Tag.
     * Can be customized SvgIcon component or any icon from Sky Mavis icon pack.
     */
    leftIcon?: React.ReactNode;
    /**
     * Rightmost icon of Tag.
     * Can be customized SvgIcon component or any icon from Sky Mavis icon pack.
     */
    rightIcon?: React.ReactNode;
}
export declare const Tag: React.FC<Props>;
export {};
