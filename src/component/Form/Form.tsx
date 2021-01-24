import { TProps } from "./Types";
import classNames from "classnames";


export const Form: React.FC <TProps> = ({ children, className, action, method, }: TProps): JSX.Element => {

	const classes = classNames ("form", className);

	return (
		<form action={ action } method={ method } className={ classes }>
			{ children }
		</form>
	);
};