import classNames from "classnames";
import styles from "@style/lib/fontawesome.module.scss";
import { TProps } from "./Types";



export const Icon: React.FC <TProps> = ({ name, type = "fa", className }: TProps): JSX.Element => {

	const iconName = `fa-${name}`;
	const classes = classNames (styles[type], styles[iconName], className);
	return (
		<span className={ classes }></span>
	);
};