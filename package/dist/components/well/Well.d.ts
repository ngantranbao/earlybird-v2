import React from 'react';
import { IntentType } from '../../commons/types';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
export interface WellProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className?: string;
    /**
     * Visual intent color, this will apply on background, border, title and icon.
     */
    intent?: IntentType;
    /**
     * Content of title.
     */
    title?: string;
    /**
     * Customized SvgIcon component or any icon from Sky Mavis icon pack.
     */
    icon?: React.FC<SvgIconProps>;
}
export declare const Well: React.FC<WellProps>;
