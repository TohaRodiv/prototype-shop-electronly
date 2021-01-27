import { TProps } from "./Types";
import classNames from "classnames";
import React, { FC } from "react";
import { RadioIcon, TProps as TPropsRadioIcon } from "../RadioIcon";


export const RadioGroup: FC <TProps> = ({ className, name, onChange, children }: TProps): JSX.Element => {

	const RadioIconInput: FC <TPropsRadioIcon> = ({ ...attrs }: TPropsRadioIcon): JSX.Element => {
		return <RadioIcon name={ name } onChange={ onChange } { ...attrs } />;
	};

	const classes = classNames ("radio-group", className);

	return (
		<div className={ classes }>
			{ children (RadioIconInput) }
		</div>
	);
};