import { Url } from "next/dist/shared/lib/router/router";

//Tipos para el producto
type TProductId = string;

type TProductAttributes = {
  description: string;
  color: string;
  accessories: string;
  taste: string;
};

type TProduct = {
  id: TProductId;
  name: string;
  sku: string;
  price: number;
  image: Url;
  attributes: TProductAttributes;
};
