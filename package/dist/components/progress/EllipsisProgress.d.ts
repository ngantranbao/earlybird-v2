import React from 'react';
import { IntentType } from '../../commons/types';
declare enum ProgresSize {
    Medium = "medium",
    Large = "large"
}
export interface EllipsisProgressProps {
    /**
     * Size variant of Progress element.
     *
     * Can be Small, Medium, Large.
     */
    size?: ProgresSize;
    /**
     * Visual intent color apply to Progress dot.
     */
    intent?: IntentType;
    /**
     * A space-delimited list of class names to pass along to a Progress element.
     */
    className?: string;
}
export declare const EllipsisProgress: React.FC<EllipsisProgressProps> & {
    sizes: typeof ProgresSize;
};
export {};
