import { TClassName } from "@src/types/TClassName";
import { ChangeEventHandler } from "react";
import { TProps as TPropsRadioIcon } from "@component/Form/RadioIcon/Types";


export type TProps = TClassName & {
	name: string
	items: Array <{
		value: string
		icon: string
		typeIcon?: string
	}>
	onChange?: ChangeEventHandler
	
}