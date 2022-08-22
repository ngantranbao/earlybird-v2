import React from 'react';
import { IntentType } from '../../commons/types';
export interface SliderProps {
    /**
     * The initial value for an uncontrolled Slider.
     */
    defaultValue?: number;
    /**
     * The value for controlled Slider.
     */
    value?: number;
    /**
     * The maximum allowed value of the Slider. Should be bigger than min.
     */
    max?: number;
    /**
     * The minimum allowed value of the Slider. Should be less than max.
     */
    min?: number;
    /**
     * The granularity with which the Slider can step through values.
     */
    step?: number;
    /**
     * Whether this Slider is disabled from user interaction.
     */
    disabled?: boolean;
    /**
     * Visual intent colour, this will apply on the background of Slider's track.
     */
    intent?: IntentType;
    /**
     * The format function that customizes the rendering of marks.
     */
    markValueRender?: (value: number) => React.ReactNode;
    /**
     * Marks indicate values which the label can render below Slider.
     */
    marks?: number[];
    /**
     * Controls should the value-label is always displayed.
     */
    isAlwaysShowLabel?: boolean;
    /**
     * The format function that customizes the rendering of value-label.
     */
    labelValueRender?: (value: number) => React.ReactNode;
    /**
     * Callback function that is fired when the Slider's value changed.
     */
    onChange?: (value: number) => void;
    /**
     * A callback function that is fired when the Slider's value changed.
     */
    onChangeDone?: (value: number) => void;
    /**
     * A space-delimited list of class names to pass along to a Slider wrapper element.
     */
    className?: string;
    /**
     * Id of the hidden input form control in Slider.
     */
    id?: string;
    /**
     * Name of the hidden input form control in the Slider.
     */
    name?: string;
}
export declare const Slider: React.FC<SliderProps>;
