import { createUniqueId } from "solid-js";
import { IIchiroTextField } from "./types";
import { interceptInput, parseText } from "./utils";
import styles from "./styles.module.css";


export default function IchiroTextField(props: IIchiroTextField) {

	const id = createUniqueId();
	let boxRef!: HTMLInputElement;

	return (

		<div class={`${styles.container} ${(!props?.setFocused || (props?.focused && props?.focused())) ? styles.focused : ""}`}
			 onClick={() => props?.setFocused && boxRef?.focus()}>

			<label for={id}
				   class={styles.header}>

				   {props?.label}

			</label>

			<input id={id}
				   ref={boxRef}
				   type={(props?.mode?.toLowerCase() === "integer") ? "number" : "text"}
				   inputmode="decimal"
				   min="0"
				   max={(props?.mode?.toLowerCase() === "integer") ? "65535" : undefined}
				   step={(props?.mode?.toLowerCase() === "integer") ? "1" : "any"}
				   class={styles.box}
				   value={props?.text()}
				   onInput={event => props?.setText(event?.currentTarget?.value)}
				   onFocus={() => props?.setFocused && props?.setFocused(true)}
				   onBlur={() => (!props?.text() && props?.setFocused) && props?.setFocused(false)}
				   onBeforeInput={(props?.mode?.toLowerCase() === "decimal") ? interceptInput : undefined}
			  	   onPaste={(props?.mode?.toLowerCase() === "decimal") ? parseText : undefined} />

		</div>

	);

}
