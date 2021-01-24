import { ChangeEvent, Component } from "react";
import { TProps, TState } from "./Types";
import { ProductFilterStorage } from "@storage/ProductFilterStorage";
import { observer } from "mobx-react";


@observer
export class ProductFilterContainer extends Component <TProps, TState> {

	constructor (props: TProps) {
		super (props);

		this.state = {
			gridType: ProductFilterStorage.getGridType (),
			sortBy: ProductFilterStorage.getSortBy (),
			limit: ProductFilterStorage.getLimit (),
		};

		//console.log (ProductFilterStorage.getSortBy ());
	}

	handleChangeGridType = (e: ChangeEvent<HTMLInputElement>): void => {
		this.setState ({ gridType: e.currentTarget.value}, () => {
			ProductFilterStorage.setGridType (this.state.gridType);
		});
	};

	handleChangeSortBy = (e: ChangeEvent<HTMLSelectElement>): void => {
		this.setState ({ sortBy: e.currentTarget.value}, () => {
			ProductFilterStorage.setSortBy (this.state.sortBy);
		});
	};

	handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = parseInt(e.currentTarget.value);
		
		if (false === isFinite (value)) return;

		this.setState ({ limit: value }, () => {
			ProductFilterStorage.setLimit (this.state.limit);
		});
	};

	/**
	 * @private
	 * @field handlers - object event handlers
	 */
	private handlers = {
		handleChangeGridType: this.handleChangeGridType,
		handleChangeSortBy: this.handleChangeSortBy,
		handleChangeLimit: this.handleChangeLimit,
	}

	render (): JSX.Element {

		const { component: FilterComponent } = this.props;

		return <FilterComponent handlers={ this.handlers } state={ this.state } />;
	}
}