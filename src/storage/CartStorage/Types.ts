export type TProduct = {
	id: number
}

export type TProducts = Array <TProduct>

export type TDefaults = {
	products: TProducts
	amount: number
	total: number
}

export type TStrores = Array <CallableFunction>