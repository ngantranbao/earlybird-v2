import React from 'react';
interface StepperProgressProps {
    /**
     * Id of current step of the progress.
     */
    currentStep: string | number;
    /**
     * Handle changing step when click on undo button by returning selected id.
     *
     * Only available when noTurnBack flag is false.
     */
    onClickUndo?: (id: string | number) => void;
    /**
     * Choose display type of Stepper Progress to be vertical.
     *
     * Default is false for horizontal.
     */
    vertical?: boolean;
    /**
     * No turning back flag to prevent go back to previous step of the progress.
     */
    noTurnBack?: boolean;
    /**
     * A space-delimited list of class names to pass along to a Progress element.
     */
    className?: string;
}
export declare const StepperProgress: React.FC<StepperProgressProps>;
export {};
