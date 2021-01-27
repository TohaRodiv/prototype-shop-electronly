import { TClassName } from "@src/types/TClassName";
import { ChangeEventHandler } from "react";
import { TProps as TPropsRadioIcon } from "@component/Form/RadioIcon/Types";


export type TProps = TClassName & {
	children: (RadioIcon: React.FC <TPropsRadioIcon>) => JSX.Element
	name: string
	onChange?: ChangeEventHandler
}