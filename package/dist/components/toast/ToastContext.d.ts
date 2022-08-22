import React from 'react';
import { ShowToastOption } from './toastTypes';
declare type ShowToastFuncType = (content: React.ReactNode, option?: ShowToastOption) => void;
export interface ToastContextType {
    showToast: ShowToastFuncType;
    removeToast: (id: string) => void;
}
export declare const ToastContext: React.Context<ToastContextType>;
export {};
