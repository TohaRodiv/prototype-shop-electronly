import { TDefaultStates, THandlers } from "@src/container/ProductFilter/Types";
import { TClassName } from "@src/types/TClassName";
import { TPropsFromContainer } from "@src/types/TPropsFromContainer";

export type TProps = TClassName & {
	handlers: THandlers
	state: TDefaultStates
}