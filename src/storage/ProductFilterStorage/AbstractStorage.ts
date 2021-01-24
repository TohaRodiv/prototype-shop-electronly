export abstract class AbstractStorage {

	protected readonly PREFIX_GRID_TYPE: string;
	protected readonly PREFIX_SORT_BY: string;
	protected readonly PREFIX_LIMIT: string;

	constructor (PREFIX: string) {
		this.PREFIX_GRID_TYPE = `${PREFIX}_GRID_TYPE`;
		this.PREFIX_SORT_BY = `${PREFIX}_SORT_BY`;
		this.PREFIX_LIMIT = `${PREFIX}_GRID_LIMIT`;
	}
}