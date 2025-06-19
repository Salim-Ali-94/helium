import { For } from "solid-js";
import styles from "./styles.module.css";


export default function ProgressStepper(props) {

	const array = Array(props.steps + props.steps - 1).fill().map((_, index) => index);

	return (

		<div class={styles.container}>

			<For each={ array }>

				{ (item, _) => (item%2 === 0) ? <div class={styles.dot}
													 
													 style={{ "border": `${ (item === (props.currentStep() - 1)*2) ? "2px" : "0" } solid var(--sodapop)`,

													 		  "background-color": (item === (props.currentStep() - 1)*2) ? "var(--metal)" :
													 							  (item < (props.currentStep() - 1)*2) ? "var(--sodapop)" :
													 							  "var(--metal)" }}

													 onClick={() => props.setCurrentStep((item / 2) + 1) } /> :

												<div class={styles.line}>

													<div class={styles.bar}
														 style={{ "width": (item < (props.currentStep() - 1)*2) ? "100%" : "0" }} />

												</div> }

			</For>

		</div>

	);

}
