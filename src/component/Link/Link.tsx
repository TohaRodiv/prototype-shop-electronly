import LinkNext from "next/link";
import { TProps } from "./Types";

export const Link: React.FC <TProps> = ({ children, className, ...args }: TProps): JSX.Element => (

	<LinkNext { ...args }>
		<a {...{ className }}>
			{ children }
		</a>
	</LinkNext>

);
