import React from "react";
import { TProps } from "./Types";


export const ListCards: React.FC <TProps> = ({
	list, className, itemClassName, componentClassName, component: Component
}: TProps): JSX.Element => {

	const itemClasses = itemClassName ? itemClassName :`${ className }__item`;
	const componentClasses = componentClassName ? componentClassName : `${ className }__card`;

	return (
		<ul className={ className }>
			{
				list.map ( item => (
					<li key={ item.id } className={ itemClasses }>
						<Component className={ componentClasses } item={ item } />
					</li>
				))
			}
		</ul>
	);
};