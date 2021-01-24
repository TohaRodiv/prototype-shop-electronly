import { ProductFilterStorage as ProductFilterStorageAlias } from "./ProductFilterStorage";
import { LocalStorage } from "./LocalStorage";


let defaultValues = { gridType: "grid", sortBy: "popular", limit: 6};
let storages = [];


if (typeof window !== "undefined") {
	const defaultStorage = new LocalStorage ();
	defaultValues = defaultStorage.getDefaultValues ();
	storages = [ defaultStorage ];
}

export const ProductFilterStorage = new ProductFilterStorageAlias (defaultValues, storages);