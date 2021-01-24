import { Icon } from "@component/Icon";
import classNames from "classnames";
import { TProps } from "./Types";


export const Cart: React.FC <TProps> = ({ className, amount }: TProps): JSX.Element => {

	
	const classes = classNames ("cart-header", className);

	return (
		<div className={ classes }>
			<button className="cart-header__button">
				{
					amount > 0 &&
					<span className="cart-header__count">{ amount }</span>
				}
				<Icon name="shopping-cart" className="cart-header__icon" />
			</button>
		</div>
	);
};