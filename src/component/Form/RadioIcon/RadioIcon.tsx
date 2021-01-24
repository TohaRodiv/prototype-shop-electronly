import { Icon } from "@component/Icon";
import { TProps } from "./Types";
import classNames from "classnames";


export const RadioIcon: React.FC <TProps> = ({
	name, value, onChange, className, icon, typeIcon, ...attrs
}: TProps ): JSX.Element => {

	const classes = classNames ("radio-icon", className);

	return (
		<label className={ classes }>
			<input
				type="radio"
				name={ name }
				value={ value }
				className="radio-icon__field"
				onChange={ onChange }
				{ ...attrs } />
			<Icon
				name={ icon }
				type={ typeIcon }
				className="radio-icon__icon" />
		</label>
	);
};