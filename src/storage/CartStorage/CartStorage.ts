import { configure, makeAutoObservable } from "mobx";
import { TProducts, TDefaults, TStrores, TProduct } from "./Types";


configure({
	enforceActions: "observed",
	computedRequiresReaction: true,
	reactionRequiresObservable: true,
	observableRequiresReaction: true,
	disableErrorBoundaries: false
});


export class CartStorage {
	
	protected products: TProducts = [];
	protected amount = 0;
	protected total = 0;

	public constructor (defaults: TDefaults, stores?: TStrores) {
		this.products = defaults.products;
		this.amount = defaults.amount;
		this.total = defaults.total;

		makeAutoObservable (this, null, {deep: true});

		if (stores) {
			stores.map ( store => {
				store (this);
			});
		}
	}

	
	protected increase = (): void => {
		this.amount++;
	}

	protected decrease = (): void => {
		this.amount--;
	}

	public setAmount = (amount: number): void => {
		this.amount = amount;
	}

	public getAmount = (): number => this.amount;

	public getTotal = (): number => this.total;

	public getProducts = (): TProducts => this.products;

	public addProduct = (product: TProduct): void => {
		this.products.push (product);
		this.increase ();
	}

	public deleteProduct = (id: number): void => {
		this.products = this.products.filter ( product => id !== product.id);
		this.decrease ();
	}

	public clearCart = (): void => {
		this.products = [];
		this.amount = 0;
		this.total = 0;
	}
}