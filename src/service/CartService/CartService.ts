import { CartStorage } from "@src/storage/CartStorage/CartStorage";


export class CartService {

	public constructor(
		protected storage: CartStorage
	) {}

	public add = this.storage.addProduct;
	public delete = this.storage.deleteProduct;
	public clear = this.storage.clearCart;

	public getAmount = this.storage.getAmount;
	public getTotal = this.storage.getTotal;
	public getProducts = this.storage.getProducts;

}