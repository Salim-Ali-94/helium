import { For } from "solid-js";
import { IProgressStepper } from "./types";
import styles from "./styles.module.css";


export default function ProgressStepper(props: IProgressStepper) {

	const array = Array(props.totalSteps + props.totalSteps - 1).fill(null).map((_, index) => index);

	return (

		<div class={styles.container}>

			<For each={array}>

				{ (_, index) => (index()%2 === 0) ? <div class={styles.dot}
													 
													 style={{

													 	"border": `2px solid ${ (index() <= (props.currentStep() - 1)*2) ? "var(--sodapop)" :
																														   "var(--metal)"}`,

													 	"background-color": (index() === (props.currentStep() - 1)*2) ? "var(--metal)" :
													 						(index() < (props.currentStep() - 1)*2) ? "var(--sodapop)" :
													 							  										 "var(--metal)"

													 }}

													 onClick={() => props.setCurrentStep((index() / 2) + 1) } /> :

												<div class={styles.line}>

													<div class={styles.bar}
														 style={{

														 	"width": (index() < (props.currentStep() - 1)*2) ? "100%" : "0"

														 }} />

												</div> }

			</For>

		</div>

	);

}
