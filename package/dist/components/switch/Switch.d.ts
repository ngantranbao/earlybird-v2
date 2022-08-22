import React from 'react';
import { IntentType } from '../../commons/types';
declare type InputHtmlProps = React.InputHTMLAttributes<HTMLInputElement>;
interface SwitchProps extends InputHtmlProps {
    /**
     * Visual intent color apply to Switch element.
     */
    intent?: IntentType;
    /**
     * Text label for the Switch.
     */
    label?: React.ReactNode;
}
export declare const Switch: React.FC<SwitchProps>;
export {};
