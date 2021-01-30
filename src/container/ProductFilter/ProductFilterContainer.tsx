import { ChangeEvent, Component } from "react";
import { TProps, TDefaultStates, THandlers } from "./Types";
import { ProductFilterStorage } from "@storage/ProductFilterStorage";
import { observer } from "mobx-react";


@observer
export class ProductFilterContainer extends Component <TProps, TDefaultStates> {

	private defaultStates: TDefaultStates;

	constructor (props: TProps) {
		super (props);

		this.defaultStates = {
			gridType: ProductFilterStorage.getGridType (),
			sortBy: ProductFilterStorage.getSortBy (),
			limit: ProductFilterStorage.getLimit (),
		};
	}

	/**
	 * Change grid type param
	 * @param e ChangeEvent
	 */
	handleChangeGridType = (e: ChangeEvent<HTMLInputElement>): void => {
		ProductFilterStorage.setGridType (e.currentTarget.value);
	};

	/**
	 * Change sort by param
	 * @param e ChangeEvent
	 */
	handleChangeSortBy = (e: ChangeEvent<HTMLSelectElement>): void => {
		ProductFilterStorage.setSortBy (e.currentTarget.value);
		// this.props.setProducts ([]);
	};

	/**
	 * Change limit param
	 * @param e ChangeEvent
	 */
	handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = parseInt(e.currentTarget.value);
		
		if (false === isFinite (value)) return;

		ProductFilterStorage.setLimit (value);
	};

	/**
	 * @private
	 * @field handlers - object event handlers
	 */
	private handlers: THandlers = {
		handleChangeGridType: this.handleChangeGridType,
		handleChangeSortBy: this.handleChangeSortBy,
		handleChangeLimit: this.handleChangeLimit,
	}

	render (): JSX.Element {

		const { component: FilterComponent } = this.props;

		return <FilterComponent handlers={ this.handlers } state={ this.defaultStates } />;
	}
}