import React from 'react';
export interface SliderMarkProps {
    value: number;
    percent: number;
    markValueRender?: (value: number) => React.ReactNode;
}
export declare const SliderMark: React.FC<SliderMarkProps>;
