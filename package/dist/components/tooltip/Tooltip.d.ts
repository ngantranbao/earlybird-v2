import { Placement } from '@popperjs/core';
import React from 'react';
interface Props {
    /**
     * Should Popover appear. By default Tooltip is uncontrolled. Passing this
     * will make it controlled.
     */
    isOpen?: boolean;
    /**
     * Trigger when Tooltip closes in controlled mode.
     */
    onClose?: () => void;
    /**
     * Content of the tooltip.
     */
    content?: React.ReactNode;
    /**
     * Popper placement.
     * Refer to https://popper.js.org/docs/v2/constructors/#placement
     */
    placement?: Placement;
    /**
     * Decide Tooltip position on DOM tree. Should it be rendered inline or at
     * portalContainer.
     */
    usePortal?: boolean;
    /**
     * Use with usePortal=true. Default is window.document.body.
     */
    portalContainer?: HTMLElement;
    /**
     * Do not dismiss Tooltip if user's cursor is on content. For best
     * result, use with leaveDelay.
     */
    interactive?: boolean;
    /**
     * Number of milliseconds delay when Tooltip appears.
     */
    leaveDelay?: number;
    /**
     * Number of milliseconds delay when Tooltip appears.
     */
    enterDelay?: number;
    /**
     * A space-delimited list of class names to pass along to a Tooltip content element.
     */
    className?: string;
    /**
     * A space-delimited list of class names to pass along to a Popover container.
     */
    popoverClassName?: string;
}
export declare const Tooltip: React.FC<Props>;
export {};
