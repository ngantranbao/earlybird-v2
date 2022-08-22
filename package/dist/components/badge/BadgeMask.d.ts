import React from 'react';
import { IntentType } from '../../commons/types';
export interface BadgeMaskProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     *  Whether to show dot-variant or label-variant.
     */
    isDot?: boolean;
    /**
     * Text label of a badge.
     */
    label?: string;
    /**
     * Whether to show a badge or not.
     */
    isShow?: boolean;
    /**
     * The visual intent colour applies to the background of a badge.
     */
    intent?: IntentType;
    /**
     * A space-delimited list of class names to pass along to a BadgeMask element.
     */
    className?: string;
}
export declare const BadgeMask: React.FC<BadgeMaskProps>;
