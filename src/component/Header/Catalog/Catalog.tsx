import { LinkCreator } from "@lib/LinkCreator/LinkCreator";
import { Link } from "@component/Link/index";
import { TProps } from "./Types";
import classNames from "classnames";


// TODO
import catalog from "@root/mainMenu.json";



const catalog2 = new LinkCreator ()
	.add ("Phones", "/phones")
	.add ("Tablets", "/tablets")
	.add ("Smart watch", "/smart-watch")
	.add ("Powerbanks", "/powerbanks")
	.build ();

export const Catalog: React.FC <TProps> = ({ className }: TProps): JSX.Element => {

	const classes = classNames ("catalog-header", className);
	return (
		<nav className={ classes }>
			<ul className="catalog-menu">
				{
					catalog.map ( item => (
						<li className="catalog-menu__item" key={ item.path }>
							<Link href={ item.path} className="catalog-menu__link">{ item.title }</Link>
						</li>
					))
				}
			</ul>
		</nav>
	);
};