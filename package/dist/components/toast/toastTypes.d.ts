import { IntentType } from '../../commons/types';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
export declare enum ToastPlacement {
    TopLeft = "top-left",
    TopCenter = "top-center",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomCenter = "bottom-center",
    BottomRight = "bottom-right"
}
export interface ToastType {
    id: string;
    content: React.ReactNode;
    placement: ToastPlacement;
    intent?: IntentType;
    title?: string;
    icon?: React.FC<SvgIconProps>;
    autoHideDuration?: number;
    onDismiss?: (e?: React.SyntheticEvent, toast?: ToastType) => void;
    userDismissable?: boolean;
    className?: string;
}
export interface ShowToastOption {
    intent?: IntentType;
    title?: string;
    icon?: React.FC<SvgIconProps>;
    autoHideDuration?: number;
    onDismiss?: (e?: React.SyntheticEvent, toast?: ToastType) => void;
    userDismissable?: boolean;
    className?: string;
}
