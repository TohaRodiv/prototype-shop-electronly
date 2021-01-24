import React from "react";
import { TProps } from "./Types";
import classNames from "classnames";
import { collations } from "./collations";


export const Typography: React.FC <TProps> = ({ children, variant, component, className}: TProps): JSX.Element => {

	const classes = classNames ("typography", `typography__${variant}`, className);
	const TagName = (!component) ? collations[variant] : component;

	return React.createElement (TagName, {
		className: classes,
	}, children);
};