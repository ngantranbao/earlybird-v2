import { ShowToastOption } from './toastTypes';
export declare const useToast: () => {
    showBasic: (content: React.ReactNode, option?: ShowToastOption) => void;
    showInfo: (content: React.ReactNode, option?: ShowToastOption) => void;
    showSuccess: (content: React.ReactNode, option?: ShowToastOption) => void;
    showDanger: (content: React.ReactNode, option?: ShowToastOption) => void;
    showWarning: (content: React.ReactNode, option?: ShowToastOption) => void;
    showToast: (content: import("react").ReactNode, option?: ShowToastOption | undefined) => void;
    removeToast: (id: string) => void;
};
