import { createSignal } from "solid-js";
import ichiroTextFieldStyles from "./ichiroTextFieldStyles.module.css";


export default function IchiroTextField(props) {

	const [focused, setFocused] = createSignal(false);
	const [text, setText] = createSignal("");
	let boxRef;

	return (

		<div class={`${ichiroTextFieldStyles.container} ${focused() ? ichiroTextFieldStyles.focused : ""}`}
			 onClick={() => boxRef?.focus()}>

			<label htmlFor={ichiroTextFieldStyles.textBox}
				   class={ichiroTextFieldStyles.header}>

				   {props.label}

			</label>

			<input id={ichiroTextFieldStyles.textBox}
				   ref={boxRef}
				   type="text"
				   value={text()}
				   onInput={event => setText(event?.currentTarget?.value)}
				   onFocus={() => setFocused(true)}
				   onBlur={() => !text() && setFocused(false) } />

		</div>

	);

}
