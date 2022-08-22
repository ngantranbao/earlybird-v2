import React from 'react';
import { IntentType } from '../../commons/types';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
declare enum ButtonSize {
    Large = "large",
    Small = "small",
    Default = "default"
}
declare type ButtonHtmlProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
interface Props extends ButtonHtmlProps {
    /**
     * Visual intent color, this will apply on background, title and icon.
     */
    intent?: IntentType;
    /**
     * Should button appears in minimal styles.
     */
    minimal?: boolean;
    /**
     * Should button apply Large, Small or Default styles.
     */
    size?: ButtonSize;
    /**
     * Should button be filled to its container.
     */
    fill?: boolean;
    /**
     * Leftmost icon of button. Can use customized SvgIcon or any icon from Sky
     * Mavis icon pack.
     */
    leftIcon?: React.FC<SvgIconProps>;
    /**
     * Leftmost icon of button. Can use customized SvgIcon or any icon from Sky
     * Mavis icon pack.
     */
    rightIcon?: React.FC<SvgIconProps>;
}
declare type ButtonType = React.FC<Props> & {
    sizes: typeof ButtonSize;
};
export declare const Button: ButtonType;
export {};
