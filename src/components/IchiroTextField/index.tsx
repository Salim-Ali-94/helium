import { createUniqueId, createEffect } from "solid-js";
import styles from "./styles.module.css";
import { interceptInput, parseText } from "./utils";


export default function IchiroTextField(props) {

	const id = createUniqueId();
	let boxRef;

	return (

		<div class={`${styles.container} ${(!props?.setFocused || props?.focused()) ? styles.focused : ""}`}
			 onClick={() => props?.setFocused && boxRef?.focus()}>

			<label htmlFor={id}
				   class={styles.header}>

				   {props?.label}

			</label>

			<input id={id}
				   ref={boxRef}
				   type={(props?.mode?.toLowerCase() === "integer") ? "number" : "text"}
				   inputmode="decimal"
				   min="0"
				   max={(props?.mode?.toLowerCase() === "integer") && "65535"}
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
