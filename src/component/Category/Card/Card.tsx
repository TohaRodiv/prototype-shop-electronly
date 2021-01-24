import { TProps } from "./Types";
import classNames from "classnames";
import { Link } from "@component/Link";


export const Card: React.FC <TProps> = ({ className, category }: TProps): JSX.Element => {

	const classes = classNames ("category-card", className);
	const { path, title, image } = category;

	return (
		<>
			<Link href={ path } className={ classes }>
				<span className="category-card__title">{ title }</span>
				<img src={ image } alt="vercel" className="category-card__image" />
			</Link>
		</>
	);
};