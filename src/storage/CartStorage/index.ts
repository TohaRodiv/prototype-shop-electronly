import { reaction } from "mobx";
import { CartStorage as CartStorageAlias } from "./CartStorage";


const Store1 = ctx => {
	reaction ( () => ctx.product, (current, prev) => {
		console.log ("Update products:", current);
	});

	reaction ( () => ctx.amount, (current, prev) => {
		console.log ("Update amount:", current);
	});
};

export const CartStorage = new CartStorageAlias ({products: [], amount: 0, total: 0}, [Store1]);