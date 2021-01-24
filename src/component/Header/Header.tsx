import { Container } from "react-grid-system";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { Catalog } from "./Catalog";
import { Logo } from "./Logo";
import { CartStorage } from "@storage/CartStorage";
import { observer } from "mobx-react";


export const Header: React.FC = observer ((): JSX.Element => {

	return (
		<header className="header">
			<Container fluid className="header__container">
				<Logo className="header__logo" />
				<Catalog className="header__catalog" />
				<Search className="header__search" />
				<Cart className="header__cart" amount={ CartStorage.getAmount () } />
			</Container>
		</header>
	);
});