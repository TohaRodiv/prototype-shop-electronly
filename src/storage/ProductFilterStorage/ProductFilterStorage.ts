import { TStrores } from "@src/types/TStores";
import { makeAutoObservable } from "mobx";
import { TDefaults } from "./Types";
import { IProductFilterStorage } from "./IProductFilterStorage";


export class ProductFilterStorage implements IProductFilterStorage {

	protected gridType: string;
	protected sortBy: string;
	protected limit: number;
	
	public constructor ({ gridType, sortBy, limit, }: TDefaults, stores?: TStrores) {

		this.gridType = gridType;
		this.sortBy = sortBy;
		this.limit = limit;

		makeAutoObservable (this);

		if (stores) {
			stores.map ( store => {
				store.initReactions (this);
			});
		}
	}

	public setGridType = (type: string): void => {
		this.gridType = type;
	}

	public setSortBy = (sort: string): void => {
		this.sortBy = sort;
	}

	public setLimit = (limit: number): void => {
		this.limit = limit;
	}

	public getGridType = (): string => this.gridType;

	public getSortBy = (): string => this.sortBy;

	public getLimit = (): number => this.limit;
}