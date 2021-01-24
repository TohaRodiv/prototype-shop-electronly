import { TPropsFromContainer } from "@src/types/TPropsFromContainer";


export type TProps = {
	component: React.FC<TPropsFromContainer>
}

export type TState = {
	gridType: string
	sortBy: string
	limit: number
}