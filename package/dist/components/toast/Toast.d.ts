import React from 'react';
import { IntentType } from '../../commons/types';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
export interface ToastProps {
    /**
     * The visual intent colour applies to Toast background, title and icon.
     */
    intent?: IntentType;
    /**
     * Content of title.
     */
    title?: string;
    /**
     * Icon of the Toast. Can use customized SvgIcon or any icon from Sky
     * Mavis icon pack.
     */
    icon?: React.FC<SvgIconProps>;
    /**
     * Controls are Toast display or not.
     */
    open?: boolean;
    /**
     * Milliseconds to wait before automatically dismissing toast.
     */
    autoHideDuration?: number;
    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className?: string;
    /**
     * Callback invoked when the toast is dismissed, either by the user or by the timeout.
     */
    onDismiss?: (e?: React.SyntheticEvent) => void;
    /**
     * Controls is Close button display or not.
     */
    userDismissable?: boolean;
}
export declare const Toast: React.FC<ToastProps>;
