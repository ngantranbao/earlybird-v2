import React from 'react';
import { IntentType } from '../../commons/types';
declare type InputHtmlProps = React.InputHTMLAttributes<HTMLInputElement>;
interface CheckboxProps extends InputHtmlProps {
    /**
     * Visual intent color apply to Checkbox element.
     */
    intent?: IntentType;
    /**
     * Text label for the Checkbox.
     */
    label?: React.ReactNode;
    /**
     * If true, the Checkbox appears indeterminate.
     * Basically, this change Icon from CheckmarkIcon to MinusIcon.
     */
    indeterminated?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
