import { TCard, TItem } from "@src/types/TCard";
import { TClassName } from "@src/types/TClassName";


export type TProps = TClassName & {
	component: React.FC <TCard>
	itemClassName?: string
	componentClassName?: string
	list: Array<TItem>
}