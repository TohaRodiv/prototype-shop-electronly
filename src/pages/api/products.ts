// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import products from "@root/data/products.json";
import { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, res: NextApiResponse): void => {

	switch (req.method) {
	
	case "POST":
		res.statusCode = 200;
		res.json(products);
		break;

	default:
		res.statusCode = 200;
		res.json({
			erros: [
				{
					status: 200,
					title: "Bad request method",
					detail: "Using only POST method.",
				}
			]
		});
	}
};