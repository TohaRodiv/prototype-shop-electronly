import { TProps } from "./Types";
import classNames from "classnames";


export const Field: React.FC <TProps> = ({ className, type }: TProps): JSX.Element => {

	const classes = classNames ("form", className);

	return (
		<input type={ type } className={ classes } />
	);
};