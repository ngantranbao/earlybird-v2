import React from 'react';
interface WithClickOutside {
    onClickOutside?: React.MouseEventHandler;
}
export declare const WithClickOutside: import("react-onclickoutside").WrapperClass<React.PropsWithChildren<WithClickOutside>, React.FC<WithClickOutside> & WithClickOutside>;
export interface OverlayProps {
    /**
     * Should overlay content be focus at the moment it appears.
     */
    autoFocus?: boolean;
    /**
     * Decide Overlay position on DOM tree. Should it be rendered inline or at portalContainer.
     */
    usePortal?: boolean;
    /**
     * Use with usePortal=true. Default is window.document.body.
     */
    portalContainer?: HTMLElement;
    /**
     * Should appear with a backdrop. For best result only use backdrop on
     * fullscreen overlay.
     */
    withBackdrop?: boolean;
    /**
     * Backdrop component. By default backdrop is a semi-transparent div.
     */
    backdrop?: React.ReactNode;
    /**
     * Should Overlay appear.
     */
    isOpen: boolean;
    /**
     * Trigger when user try to close Overlay using keyboard or clicking outside content.
     */
    onClose?: () => void;
    /**
     * Should onClose trigger when user press Escape button on keyboard.
     */
    canEscapeKeyClose?: boolean;
    /**
     * Should onClose trigger when user click outside Overlay content.
     */
    canClickOutsideClose?: boolean;
}
export declare const Overlay: React.FC<OverlayProps>;
export {};
