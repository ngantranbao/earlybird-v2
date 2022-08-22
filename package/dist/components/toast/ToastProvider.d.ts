import React from 'react';
import { ToastPlacement } from './toastTypes';
export interface ToastProviderProps {
    /**
     * Position of Toast within ToastProvider.
     */
    placement?: ToastPlacement;
    /**
     * Milliseconds to wait before automatically dismissing toast.
     */
    defaultAutoHideDuration?: number;
    /**
     * Maximum active toasts.
     */
    maxActiveToast?: number;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
