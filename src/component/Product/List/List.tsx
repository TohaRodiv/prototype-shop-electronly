import { ListCards } from "@component/ListCards";
import { Card } from "@component/Product/Card";
import { TProps } from "./Types";
import classNames from "classnames";


export const List: React.FC <TProps> = ({ products, gridType, }: TProps): JSX.Element => {

	const classes = classNames ("product-list", gridType);
	return (
		<ListCards component={ Card } list={ products } className={ classes } itemClassName="product-list__item" />
	);
};