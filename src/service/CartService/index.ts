import { CartStorage } from "@storage/CartStorage";
import { CartService as CartServiceAlias } from "./CartService";


export const CartService = new CartServiceAlias ( CartStorage );