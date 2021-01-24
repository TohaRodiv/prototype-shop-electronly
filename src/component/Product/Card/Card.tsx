import { TProps } from "./Types";
import classNames from "classnames";
import { CartStorage } from "@src/storage/CartStorage";


export const Card: React.FC <TProps> = ({ className, item }: TProps): JSX.Element => {

	const classes = classNames ("product-card", className);
	const { title, image, path, price } = item;

	const addToCart = () => {
		CartStorage.addProduct ({ id: CartStorage.getAmount() + 1 });
	};

	return (
		<div className={ classes }>
			<img src={ image } alt={ title } className="product-card__image" loading="lazy" />
			<div className="product-card__body">
				<a href={ path } className="product-card__title">{ title }</a>
				<div className="product-card__price">{ price }р.</div>
				<button className="product-card__add-to-cart" onClick={ addToCart }>В корзину</button>
			</div>
		</div>
	);
};