import React from 'react';
import { IntentType } from '../../commons/types';
interface Props {
    /**
     * A space-delimited list of class names to pass along to a child element.
     */
    className?: string;
    /**
     * A space-delimited list of class names to pass along to the injected label element.
     */
    labelClassName?: string;
    /**
     * Should label apply disabled styles.
     */
    disabled?: boolean;
    /**
     * Content of the <label> element.
     */
    label?: React.ReactNode;
    /**
     * for attribute of <label> element.
     */
    labelFor?: string;
    /**
     * Should FormItem apply inline styles.
     */
    inline?: boolean;
    /**
     * Visual intent color, this will apply on background, title and icon.
     *
     * Note that intent won't be passed automatically to children input elements.
     * You will have to pass intent to children yourself.
     */
    intent?: IntentType;
    /**
     * Helper text content appears below the input elements.
     */
    helperText?: React.ReactNode;
}
export declare const FormItem: React.FC<Props>;
export {};
