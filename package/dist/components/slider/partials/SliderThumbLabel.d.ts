import React from 'react';
export interface SliderThumbLabelProps {
    value: number;
    percent: number;
    isAlwaysShowLabel?: boolean;
    labelValueRender?: (value: number) => React.ReactNode;
}
export declare const SliderThumbLabel: React.FC<SliderThumbLabelProps>;
