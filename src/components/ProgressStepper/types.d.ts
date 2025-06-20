import { Accessor, Setter } from "solid-js";


export interface IProgressStepper {

	totalSteps: number;
	currentStep: Accessor<number>;
	setCurrentStep: Setter<number>;

}
