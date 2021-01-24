import { TClassName } from "@src/types/TClassName";


export type TProps = TClassName & {
	category: {
		id: number
		path: string
		title: string
		image: string
	}
}