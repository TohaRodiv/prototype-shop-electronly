import { TProps } from "./Types";
import classNames from "classnames";


export const Select: React.FC <TProps> = ({ children, className, ...attrs }: TProps): JSX.Element => {

	const classes = classNames ("select", className);

	return (
		<select className={ classes } { ...attrs }>
			{ children }
		</select>
	);
};