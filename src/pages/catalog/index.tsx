import { MainLayout } from "@layout/MainLayout";
import { Section } from "@component/Section";
import { List as ProductList } from "@component/Product/List";
import { ProductFilter } from "@component/ProductFilter";
import { Container } from "react-grid-system";
import { ProductFilterContainer } from "@src/container/ProductFilter";
import { ProductFilterStorage } from "@src/storage/ProductFilterStorage";
import { observer } from "mobx-react";
import { NextPage } from "next";
import { useState } from "react";


const products = [
	{id: 1, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 2, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 3, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 4, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 5, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 6, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 7, path: "/", image: "/images/categories/smart-watch.jpg", title: "Smart watch"},

	{id: 8, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 9, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 10, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 11, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 12, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 13, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 14, path: "/", image: "/images/categories/smart-watch.jpg", title: "Smart watch"},
];


type TProduct = {
	type: string
	id: number
	attrtibutes: {
		path: string
		image: string
		title: string
		price: number
	}
}

type TProps = {
	products: Array <TProduct>
}

type TState = [ TProduct[], CallableFunction]


const Catalog: NextPage <TProps> = observer(({ products: productsFromServer, }: TProps): JSX.Element => {

	const [ products, setProducts ]: TState = useState (productsFromServer);

	return (
		<MainLayout title="Каталог товаров" noContainer noPaddingTop>
			<Section>
				<ProductFilterContainer component={ ProductFilter } setProducts={ setProducts } />
			</Section>
			<Container fluid>
				<Section sm>
					<ProductList products={ products } gridType={ ProductFilterStorage.getGridType () } />
				</Section>
			</Container>
		</MainLayout>
	);
});


Catalog.getInitialProps = async (ctx) => {

	const API_URL = "http://localhost:3000/api/products";

	const respone = await fetch (API_URL, { 
		
		method: "POST",
		body: JSON.stringify ({}),
		headers: {
			"Content-Type": "application/json;charset=utf-8"
		}

	});

	const result = await respone.json ();
	
	return {
		products: result.data,
	};
};


export default Catalog;