import React from 'react';
import { IntentType } from '../../commons/types';
declare enum ProgresSize {
    Small = "small",
    Large = "large"
}
export interface LinearProgressProps {
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
     * Can be Small, Large.
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
     * A helper text to show optional texts.
     */
    helperText?: string;
}
export declare const LinearProgress: React.FC<LinearProgressProps> & {
    sizes: typeof ProgresSize;
};
export {};
