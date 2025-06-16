import styles from "./styles.module.css";
import tick from "../../assets/icons/tick.png";


export default function CheckBox(props) {

	return (

		<label class={styles.container}>

			<input type="checkbox"
				   class={styles.inputCheckbox}
				   checked={props.active}
				   onClick={props.assignActive} />

			<div class={styles.box}>

				{ props.active && <img src={tick}
					   				   class={styles.icon} /> }

			</div>

			{props.label}

		</label>

	);

}
