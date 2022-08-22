import React from 'react';
import { IntentType } from '../../commons/types';
export interface RangeSliderProps {
    /**
     * The initial value for an uncontrolled RangeSlider.
     */
    defaultValue?: [number, number];
    /**
     * The value for controlled RangeSlider.
     */
    value?: [number, number];
    /**
     * The maximum allowed value of the RangeSlider. Should be bigger than min.
     */
    max?: number;
    /**
     * The minimum allowed value of the RangeSlider. Should be less than max.
     */
    min?: number;
    /**
     * The granularity with which the RangeSlider can step through values.
     */
    step?: number;
    /**
     * Whether this RangeSlider is disabled from user interaction.
     */
    disabled?: boolean;
    /**
     * Visual intent colour, this will apply on the background of RangeSlider's track.
     */
    intent?: IntentType;
    /**
     * The format function that customizes the rendering of marks.
     */
    markValueRender?: (value: number) => React.ReactNode;
    /**
     * Marks indicate values which the label can render below RangeSlider.
     */
    marks?: number[];
    /**
     * The format function that customizes the rendering of value-label.
     */
    isAlwaysShowLabel?: boolean;
    /**
     * Customized render function for value label popover.
     */
    labelValueRender?: (value: number) => React.ReactNode;
    /**
     * A callback function that is fired when the RangeSlider's value changed.
     */
    onChange?: (value: [number, number]) => void;
    /**
     * A callback function that is fired when the mouse-up is triggered.
     */
    onChangeDone?: (value: [number, number]) => void;
    /**
     * A space-delimited list of class names to pass along to a RangeSlider wrapper element.
     */
    className?: string;
    /**
     * Id of the hidden input form control in RangeSlider.
     */
    id?: string;
    /**
     * Name of the hidden input form control in RangeSlider.
     */
    name?: string;
}
export declare const RangeSlider: React.FC<RangeSliderProps>;
