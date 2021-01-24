import { TClassName } from "@src/types/TClassName";
import { ReactNode } from "react";


export type TProps = TClassName & {
	children: ReactNode[]
}