import { TProps } from "./Types";
import { Card } from "@component/Category/Card";
import classNames from "classnames";


export const List: React.FC <TProps> = ({ className, categories }: TProps): JSX.Element => {

	const classes = classNames ("categories", className);

	return (
		<ul className={ classes }>
			{
				categories.map ( category => (
					<li key={ category.id} className="categories__item">
						<Card category={ category } className="categories__card" />
					</li>
				))
			}
		</ul>
	);
};