import chevron from "../../assets/icons/chevron.png";
import styles from "./styles.module.css";


export default function Button(props) {

	return (

		<div class={styles.container}
			 style={{ "background-color": props.active ? "var(--sodapop)" : "#333" }}>

			<p class={styles.text}>{props.label}</p>
			<img src={chevron} class={styles.icon} />

		</div>

	);

}
