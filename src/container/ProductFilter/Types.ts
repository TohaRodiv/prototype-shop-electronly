import { TPropsFromContainer } from "@src/types/TPropsFromContainer";
import { ChangeEventHandler } from "react";


/**
 * TODO: change type for "seTproducts"
 */
export type TProps = {
	component: React.FC<TPropsFromContainer>
	setProducts: CallableFunction
}

export type TDefaultStates = {
	gridType: string
	sortBy: string
	limit: number
}

export type THandlers = {
	handleChangeGridType: ChangeEventHandler
	handleChangeSortBy: ChangeEventHandler
	handleChangeLimit: ChangeEventHandler
}