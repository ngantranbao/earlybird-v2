import React from 'react';
import { SvgIconProps } from '../../icons/svg-icon/SvgIcon';
declare enum AvatarSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export interface AvatarProps {
    /**
     * Size of Avatar element.
     */
    size?: AvatarSize;
    /**
     * The image URL.
     */
    src?: string;
    /**
     * One or more strings separated by commas, indicating possible image sources.
     */
    srcSet?: string;
    /**
     * An alternative text description of the image.
     */
    alt?: string;
    /**
     * Username to render text inside the Avatar if src is not set.
     */
    name?: string;
    /**
     * Icon render inside Avatar if both src and username is not set.
     *
     * Can use customized SvgIcon or any icon from Sky Mavis icon pack.
     */
    icon?: React.FC<SvgIconProps>;
    /**
     * Customized color for icon or name of Avatar.
     */
    color?: string;
    /**
     * A space-delimited list of class names to pass along to a Avatar element.
     */
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps> & {
    sizes: typeof AvatarSize;
};
export {};
