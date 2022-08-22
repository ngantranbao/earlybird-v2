import React from 'react';
import { OverlayProps } from '../overlay/Overlay';
interface Props extends OverlayProps {
    /**
     * A space-delimited list of class names.
     */
    className?: string;
    /**
     * CSSProperties to pass to dialog content wrapper.
     */
    style?: React.CSSProperties;
    /**
     * Title of the Dialog
     */
    title?: React.ReactNode;
    /**
     * Should close Button visible on the Dialog title
     */
    isCloseButtonShown?: boolean;
}
export declare const Dialog: React.FC<Props>;
export * from './DialogHeader';
export * from './DialogBody';
export * from './DialogDivider';
export * from './DialogFooter';
