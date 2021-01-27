import { TConfigVar } from "@src/types/TConfigVar";


export const gridType: TConfigVar = {
	// name: "icon"
	grid: "table",
	list: "list",


	default: "grid",
};

export const sortBy: TConfigVar = {
	name: "name",
	news: "news",
	popular: "popular",

	default: "popular",
};

export const limit: TConfigVar = {
	0: 6,
	1: 12,
	2: 24,
	3: 48,

	default: 12
};