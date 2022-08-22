import React from 'react';
import { ToastPlacement, ToastType } from './toastTypes';
export interface ToastContainerProps {
    placement: ToastPlacement;
    toasts: ToastType[];
    onRemoveToast: (id: string) => void;
}
export declare const ToastContainer: React.FC<ToastContainerProps>;
