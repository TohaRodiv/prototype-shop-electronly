export interface IProductFilterStorage {
	setGridType (type: string): void
	setSortBy (sort: string): void
	setLimit (limit: number): void

	getGridType (): string
	getSortBy (): string
	getLimit (): number
}