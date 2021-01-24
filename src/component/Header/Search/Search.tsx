import { Icon } from "@component/Icon";
import classNames from "classnames";
import { TProps } from "./Types";


export const Search: React.FC <TProps> = ({ className }: TProps): JSX.Element => {

	const classes = classNames ("search-header", className);

	return (
		<div className={ classes }>
			<Icon name="search" className="search-header__icon" />
		</div>
	);
};