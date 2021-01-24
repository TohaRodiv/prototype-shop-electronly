import { TProps } from "./Types";
import classNames from "classnames";


export const Label: React.FC <TProps> = ({ children, className, }: TProps): JSX.Element => {

	const classes = classNames ("label", "form__label", className);

	return (
		<label className={ classes }>
			{ children }
		</label>
	);
};