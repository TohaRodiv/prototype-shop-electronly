// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import products from "@root/data/products.json";


export default (req, res) => {
	res.statusCode = 200;
	res.json(products);
};