import React from 'react';
import { IntentType } from '../../commons/types';
declare type InputHtmlProps = React.InputHTMLAttributes<HTMLInputElement>;
interface RadioProps extends InputHtmlProps {
    /**
     * Visual intent color apply to Radio element.
     */
    intent?: IntentType;
    /**
     * Text label for the Radio element.
     */
    label?: React.ReactNode;
}
export declare const Radio: React.FC<RadioProps>;
export declare const isRadioElement: (object: any) => object is React.ReactElement<RadioProps, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
