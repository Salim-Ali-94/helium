import styles from "./styles.module.css";
import IchiroTextField from "./components/IchiroTextField";


export default function Feed() {

	return (

		<div class={styles.screen}>

			<IchiroTextField label="Cutoff frequency (Hz)" />

		</div>

	);

}
