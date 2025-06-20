import chevron from "../../assets/icons/chevron.png";
import { IButton } from "./types";
import styles from "./styles.module.css";


export default function Button(props: IButton) {

	return (

		<div class={styles.container}
			 style={{ "background-color": props.active ? "var(--sodapop)" : "var(--metal)" }}>

			<p class={styles.text}>{props.label}</p>
			<img src={chevron} class={styles.icon} />

		</div>

	);

}
