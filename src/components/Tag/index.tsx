import { createSignal } from "solid-js";
import styles from "./styles.module.css";


export default function Tag(props) {

	const [hover, setHover] = createSignal(false);

	return (

		<div class={styles.box}
			 style={{ 

				border: `${(props.active() === props.label.toLowerCase()) ? "2px" : "2px"} solid rgba(${props.highlight.r}, ${props.highlight.g}, ${props.highlight.b}, ${(props.active() === props.label.toLowerCase()) ? "1" : "0.4"})`,
				"background-color": `rgba(${props.highlight.r}, ${props.highlight.g}, ${props.highlight.b}, ${(props.active() === props.label.toLowerCase()) ? "0.4" : "0.2"})`,
				filter: hover() ? `drop-shadow(0 0 1.5rem rgba(${props.highlight.r}, ${props.highlight.g}, ${props.highlight.b}, 0.5))` : ""

			  }}
			  onMouseEnter={() => (props.active() !== props.label.toLowerCase()) && setHover(true)}
			  onMouseLeave={() => setHover(false)}
			  onClick={() => props.setActive(props.label.toLowerCase())} >

			<p class={styles.label}>{props.label}</p>

		</div>

	);

}
