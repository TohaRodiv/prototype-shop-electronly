import { Link } from "@component/Link/index";
import classNames from "classnames";
import { Icon } from "@component/Icon";
import { TProps } from "./Types";


export const Logo: React.FC <TProps> = ({ className }: TProps) => {

	const classes = classNames ("logo", className);
	return (
		<h1 className={ classes }>
			<Link href="/" className="logo__link">
				<Icon name="bolt" className="logo__icon" />
				<span className="logo__title">
					Electronly
				</span>
			</Link>
		</h1>
	);
};