import { TComponent } from "@src/types/TComponent";

export type TProps = TComponent & {
	action: string
	method: string
}