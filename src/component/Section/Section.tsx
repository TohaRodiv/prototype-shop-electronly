import { TProps } from "./Types";
import classNames from "classnames";


export const Section: React.FC <TProps> = ({
	children, className, ...gridSizes
}: TProps): JSX.Element => {

	const size: string[] = Object.keys (gridSizes);

	const classes = classNames ("section", size.length > 0 && `section_${size[0]}`, className);
	return (
		<section className={ classes }>
			{children}
		</section>
	);
};