import { IStorage } from "@src/types/IStorage";
import { reaction } from "mobx";
import { TDefaults } from "./Types";
import { IProductFilterStorage } from "./IProductFilterStorage";
import { AbstractStorage } from "./AbstractStorage";


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
		console.log (window.localStorage.getItem (this.PREFIX_SORT_BY));
		return window.localStorage.getItem (this.PREFIX_SORT_BY);
	}

	getLimit(): number {
		const limit = parseInt(window.localStorage.getItem (this.PREFIX_LIMIT));
		return true === isFinite (limit) ? limit : 6; // TODO: change limit fallback value!!!
	}

	getDefaultValues(): TDefaults {
		// TODO: change default values!!!
		return {
			gridType: this.getGridType () ?? "grid",
			sortBy: this.getSortBy () ?? "popular",
			limit: this.getLimit () ?? 6,
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