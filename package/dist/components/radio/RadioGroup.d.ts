import React from 'react';
interface RadioGroupProps {
    name?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    value?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
