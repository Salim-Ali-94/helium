import { Accessor, Setter } from "solid-js";


export interface ITag {

	label: string;
	highlight: Record<string, number>;
	active: Accessor<string>;
	setActive: Setter<string>;

}
