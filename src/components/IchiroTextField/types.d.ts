import { Accessor, Setter } from "solid-js";


export interface IIchiroTextField {

	label: string;
	mode: string;
	focused?: Accessor<boolean>;
	setFocused?: Setter<boolean>;
	text: Accessor<string>;
	setText: Setter<string>;

}
