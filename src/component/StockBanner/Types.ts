import { TClassName } from "@src/types/TClassName";


export type TProps = TClassName & {
	promotions: {
		id: number
		title: string
		image: string
	}[]
}