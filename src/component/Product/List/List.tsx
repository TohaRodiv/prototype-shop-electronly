import { ListCards } from "@component/ListCards";
import { Card } from "@component/Product/Card";
import { TProps } from "./Types";


export const List: React.FC <TProps> = ({ products }: TProps): JSX.Element =>
	<ListCards component={ Card } list={ products } className="product-list" />;