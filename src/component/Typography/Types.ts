import { TComponent } from "@src/types/TComponent";


export type TProps = TComponent & {
	variant: string
	component?: string
}