import { Boundary, Placement } from '@popperjs/core';
import React from 'react';
export declare type PopoverControlFn<T> = (params: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    setOpen: (value: boolean) => void;
}) => T;
interface Props {
    /**
     * Should Popover appear.
     */
    isOpen: boolean;
    /**
     * Trigger when user try to close Popover using keyboard or clicking outside content.
     */
    onClose?: () => void;
    /**
     * Should Popover content be focus at the moment it appears.
     */
    autoFocus?: boolean;
    /**
     * Use with usePortal=true. Default is window.document.body.
     */
    portalContainer?: HTMLElement;
    /**
     * Decide Popover position on DOM tree. Should it be rendered inline or at portalContainer.
     */
    usePortal?: boolean;
    /**
     * Boundary to detect overflow or flip the Popover content.
     */
    boundary?: Boundary;
    /**
     * Refer to https://popper.js.org/docs/v2/constructors/#placement
     */
    placement?: Placement;
    /**
     * Should onClose trigger when user click outside of the Popover content.
     */
    canClickOutsideClose?: boolean;
    /**
     * Should onClose trigger when user press Escape button on keyboard.
     */
    canEscapeKeyClose?: boolean;
    /**
     * Content of the Popover.
     */
    content: React.ReactNode;
    /**
     * Content of the Popover.
     */
    popoverClassName?: string;
    /**
     * Target of the Popover.
     */
    children: React.ReactNode;
    /**
     * Number of milliseconds delay when Popover appears. This is useful for
     * usage as tooltip.
     */
    enterDelay?: number;
    /**
     * Number of milliseconds delay when Popover appears. This is useful for
     * usage as tooltip.
     */
    leaveDelay?: number;
    /**
     * Ref to wrapper around children.
     */
    targetRef?: (ref: HTMLSpanElement | null) => void;
}
export declare const Popover: React.FC<Props>;
export {};
