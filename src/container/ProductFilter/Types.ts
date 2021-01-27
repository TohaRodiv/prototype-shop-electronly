import { TPropsFromContainer } from "@src/types/TPropsFromContainer";
import { ChangeEventHandler } from "react";


export type TProps = {
	component: React.FC<TPropsFromContainer>
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