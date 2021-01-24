import { TProps } from "./Types";
import HeadNext from "next/head";


export const Head: React.FC <TProps> = ({ title }: TProps): JSX.Element => (
	<HeadNext>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>{ title }</title>
	</HeadNext>
);