import React from 'react';
export interface StepProps {
    /**
     * Title for step.
     */
    title: React.ReactNode;
    /**
     * Id of the step for stepper to select.
     */
    id: string | number;
    /**
     * Addition information for Step goes here.
     */
    children?: React.ReactNode;
}
export declare const Step: (props: StepProps) => JSX.Element;
export declare const isStepElement: (object: any) => object is React.ReactElement<StepProps, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
