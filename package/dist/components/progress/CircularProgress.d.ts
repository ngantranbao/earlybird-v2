import React from 'react';
import { IntentType } from '../../commons/types';
declare enum ProgresSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export interface CircularProgressProps {
    /**
     * Completed percent of progress. From 0 to max.
     *
     * If value is undefined, Progress will change to infinity loop variant.
     */
    value?: number;
    /**
     * Max value of progress bar. Default is 100.
     */
    max?: number;
    /**
     * Size variant of Progress element.
     *
     * Can be Small, Medium, Large.
     */
    size?: ProgresSize;
    /**
     * Visual intent color apply to Progress background rail and train.
     */
    intent?: IntentType;
    /**
     * A space-delimited list of class names to pass along to a Progress element.
     */
    className?: string;
    /**
     * Information of the progress to beshowed in center.
     */
    centralLabel?: React.ReactNode;
}
export declare const CircularProgress: React.FC<CircularProgressProps> & {
    sizes: typeof ProgresSize;
};
export {};
