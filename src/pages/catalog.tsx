import { MainLayout } from "@layout/MainLayout";
import { Section } from "@component/Section";
import { List as ProductList } from "@component/Product/List";
import { ProductFilter } from "@component/ProductFilter";
import { Container } from "react-grid-system";
import { ProductFilterContainer } from "@src/container/ProductFilter";
import { ProductFilterStorage } from "@src/storage/ProductFilterStorage";
import { observer } from "mobx-react";



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


const Catalog = observer((): JSX.Element => {


	return (
		<MainLayout title="Каталог товаров" noContainer noPaddingTop>
			<Section>
				<ProductFilterContainer component={ ProductFilter } />
			</Section>
			<Container fluid>
				<Section sm>
					<ProductList products={ products } gridType={ ProductFilterStorage.getGridType () } />
				</Section>
			</Container>
		</MainLayout>
	);
});

export default Catalog;