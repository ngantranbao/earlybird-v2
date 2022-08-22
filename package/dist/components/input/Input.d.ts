import React from 'react';
import { IntentType } from '../../commons/types';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
declare type InputHtmlProps = React.InputHTMLAttributes<HTMLInputElement>;
interface Props extends InputHtmlProps {
    /**
     * Visual intent color apply to Input element.
     */
    intent?: IntentType;
    /**
     * Left elements appear within the Input, use inline style elements for best result.
     */
    leftElement?: React.ReactNode;
    /**
     * Leftmost Icon of the Input. Can use customized SvgIcon or any icon from Sky
     * Mavis icon pack.
     */
    leftIcon?: React.FC<SvgIconProps>;
    /**
     * Right elements appear within the Input, use inline style elements for best result.
     */
    rightElement?: React.ReactNode;
    /**
     * Rightmost Icon of the Input. Can use customized SvgIcon or any icon from Sky
     * Mavis icon pack.
     */
    rightIcon?: React.FC<SvgIconProps>;
    /**
     *  Should Input apply Large or Default styles
     */
    large?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
