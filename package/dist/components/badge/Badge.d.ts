import React from 'react';
import { IntentType } from '../../commons/types';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number to show in the badge. If the value is undefined, display a dot-variant.
     */
    value?: number;
    /**
     * The maximum value of the badge. If the value is greater than max, badge show label max+.
     */
    max?: number;
    /**
     * Whether to hide badge when the value is zero
     */
    hideZero?: boolean;
    /**
     * The visual intent colour applies to the background of a badge.
     */
    intent?: IntentType;
    /**
     * Whether to use a badge with circle or radius elements such as Avatar, Icon.
     */
    offsetX?: string;
    /**
     * Whether to use a badge with circle or radius elements such as Avatar, Icon.
     */
    offsetY?: string;
    /**
     * A space-delimited list of class names to pass along to a Badge element.
     */
    className?: string;
    /**
     * A space-delimited list of class names to pass along to a BadgeMask element.
     */
    classNameMask?: string;
}
export declare const Badge: React.FC<BadgeProps>;
