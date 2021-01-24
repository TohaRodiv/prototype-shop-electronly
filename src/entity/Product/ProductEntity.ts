import { TProduct } from "./Types";


export class ProductEntity {
	
	public constructor (protected product: TProduct) {
		// code...
	}

	public getId = (): number => this.product.id;
	public getTitle = (): string => this.product.title;
	public getImages = (): string[] => this.product.images;
	public getProduct = (): TProduct => this.product;
}