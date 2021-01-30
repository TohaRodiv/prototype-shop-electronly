import { List as CategoryList } from "@component/Category/List";
import { List as ProductList } from "@component/Product/List";
import { Typography } from "@component/Typography";
import { MainLayout } from "@MainLayout";
import { Section } from "@component/Section";
import { StockBanner } from "@component/StockBanner";
import { Container } from "react-grid-system";

 
const cats = [
	{id: 1, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones"},
	{id: 2, path: "/", image: "/images/categories/photos.jpg", title: "Photos"},
	{id: 3, path: "/", image: "/images/categories/tv.jpg", title: "4K TV"},
	{id: 4, path: "/", image: "/images/categories/smart-watch.jpg", title: "Smart watch"},
	{id: 5, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones"},
	{id: 6, path: "/", image: "/images/categories/photos.jpg", title: "Photos"},
	{id: 7, path: "/", image: "/images/categories/tv.jpg", title: "4K TV"},
];

const products = [
	{id: 1, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 2, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 3, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 4, path: "/", image: "/images/categories/iphones.jpg", title: "Iphones", price: 1000},
	{id: 5, path: "/", image: "/images/categories/photos.jpg", title: "Photos", price: 1000},
	{id: 6, path: "/", image: "/images/categories/tv.jpg", title: "4K TV", price: 1000},
	{id: 7, path: "/", image: "/images/categories/smart-watch.jpg", title: "Smart watch"},
];

const promos = [
	{id: 1, title: "Welcome", image: "/images/banners/welcome.jpg"},
	{id: 2, title: "Work hard", image: "/images/banners/work.jpg"},
	{id: 3, title: "Open", image: "/images/banners/open.jpg"},
];


const Home: React.FC = (): JSX.Element => (
	<MainLayout title="Главаная | Electronly" noContainer noPaddingTop>
		<Section>
			<StockBanner promotions={ promos }></StockBanner>
		</Section>
		<Container>
			<Section sm>
				<CategoryList categories={cats} />
			</Section>
			<Section sm>
				<ProductList gridType="grid" products={ products } />
			</Section>
			<Section sm>
				<Typography variant="h2">О нас</Typography>
				<Typography variant="paragraph">
					Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Буквенных ему о взобравшись образ! Щеке он однажды то грамматики запятой дал возвращайся переулка первую, осталось пояс путь заманивший по всей даль встретил!
					Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Последний текстами страну, на берегу залетают всемогущая ты по всей бросил единственное обеспечивает журчит ipsum текста жаренные живет города курсивных рыбными своих если. Лучше то мир, меня заголовок, алфавит города которое знаках запятой на берегу языком журчит рыбного подпоясал. О то заманивший мир до своего строчка моей lorem на берегу себя вопрос несколько буквоград курсивных, точках но диких?
				</Typography>
			</Section>
		</Container>
	</MainLayout>
);

export default Home;