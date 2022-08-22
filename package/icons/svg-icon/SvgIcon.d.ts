import React from 'react';
export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Size of the icon, default to 16px.
     *
     * Note that svg icon should always fit a square box.
     */
    size?: number;
    /**
     * Content of the svg.
     */
    children?: React.ReactNode;
}
export declare const SvgIcon: React.FC<SvgIconProps>;
