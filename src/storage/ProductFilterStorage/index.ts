import { ProductFilterStorage as ProductFilterStorageAlias } from "./ProductFilterStorage";
import { LocalStorage } from "./LocalStorage";
import { gridType, limit, sortBy } from "@src/config/productFilter";


let defaultValues = { gridType: gridType.default, sortBy: sortBy.default, limit: limit.default};
let storages = [];


if (typeof window !== "undefined") {
	const defaultStorage = new LocalStorage ();
	defaultValues = defaultStorage.getDefaultValues ();
	storages = [ defaultStorage ];
}

export const ProductFilterStorage = new ProductFilterStorageAlias (defaultValues, storages);