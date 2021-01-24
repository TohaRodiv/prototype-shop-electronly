import { TClassName } from "./TClassName";

export type TItem = {
	id: number
}

export type TCard = TClassName & {
	item: TItem
}