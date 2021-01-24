import { TProps } from "./Types";
import classNames from "classnames";


export const RadioGroup: React.FC <TProps> = ({ children, className, }: TProps): JSX.Element => {

	const classes = classNames ("radio-group", className);

	return (
		<ul className={ classes }>
			{
				children.map ( (node, index) => (
					<li key={ index } className="radio-group__item">
						{ node }
					</li>
				))
			}
		</ul>
	);
};