import { TProps } from "./Types";
import classNames from "classnames";
import React from "react";
import { RadioIcon } from "../RadioIcon";


export const RadioGroup: React.FC <TProps> = ({ className, name, items, onChange }: TProps): JSX.Element => {


	const classes = classNames ("radio-group", className);

	return (
		<ul className={ classes }>
			{
				items.map ( (item, index) => (
					<li key={ `_${item.value}_${index}_` } className="radio-group__item">
						<RadioIcon
							icon={ item.icon }
							typeIcon={ item.typeIcon }
							name={ name }
							value={ item.value }
							onChange={ onChange }
							className="radio-group__component" />
					</li>
				))
			}
		</ul>
	);
};