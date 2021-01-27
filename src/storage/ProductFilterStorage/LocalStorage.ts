import { IStorage } from "@src/types/IStorage";
import { reaction } from "mobx";
import { TDefaults } from "./Types";
import { IProductFilterStorage } from "./IProductFilterStorage";
import { AbstractStorage } from "./AbstractStorage";
import { gridType, limit, sortBy } from "@src/config/productFilter";


export class LocalStorage extends AbstractStorage implements IStorage, IProductFilterStorage {
	
	constructor () {
		super ("PRODUCT_FILTER_LOCAL_STORAGE");
	}

	setGridType(type: string): void {
		window.localStorage.setItem (this.PREFIX_GRID_TYPE, type);
	}

	setSortBy(sort: string): void {
		window.localStorage.setItem (this.PREFIX_SORT_BY, sort);
	}

	setLimit(limit: number): void {
		window.localStorage.setItem (this.PREFIX_LIMIT, limit.toString());
	}

	getGridType(): string {
		return window.localStorage.getItem (this.PREFIX_GRID_TYPE);
	}

	getSortBy(): string {
		return window.localStorage.getItem (this.PREFIX_SORT_BY);
	}

	getLimit(): number {
		const limitFromStorage = parseInt(window.localStorage.getItem (this.PREFIX_LIMIT));
		return true === isFinite (limitFromStorage) ? limitFromStorage : limit.default;
	}

	getDefaultValues(): TDefaults {
		return {
			gridType: this.getGridType () ?? gridType.default,
			sortBy: this.getSortBy () ?? sortBy.default,
			limit: this.getLimit () ?? limit.default,
		};
	}

	initReactions(context: TDefaults): void {
		reaction ( () => context.gridType, (current) => {
			this.setGridType (current);
		});
	
		reaction ( () => context.sortBy, (current) => {
			this.setSortBy (current);
		});
	
		reaction ( () => context.limit, (current) => {
			this.setLimit (current);
		});
	}

}