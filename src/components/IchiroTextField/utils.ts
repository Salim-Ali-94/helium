

export const interceptInput = event => {

	const char = event?.data;

	if (!char) {

		return;

	}

	const { value, selectionStart, selectionEnd } = event?.currentTarget;
	const next = value?.slice(0, selectionStart) + char + value?.slice(selectionEnd);
	
	if (!/^[0-9]*\.?[0-9]*$/.test(next)) {
	
		event?.preventDefault();
	
	}

}

export const parseText = event => {

	const paste = event?.clipboardData?.getData("text");
	const { value, selectionStart, selectionEnd } = event?.currentTarget;
	const next = value.slice(0, selectionStart) + paste + value.slice(selectionEnd);
	
	if (!/^[0-9]*\.?[0-9]*$/.test(next)) {
	
		event?.preventDefault();
	
	}

}
