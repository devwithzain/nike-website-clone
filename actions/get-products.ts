import qs from 'query-string';
import { Product, Query } from "@/types";
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
   const url = qs.stringifyUrl({
      url: apiUrl,
      query: {
         colorId: query.colorId,
         sizeId: query.sizeId,
         isFeatured: query.isFeatured,
         categoryId: query.categoryId,
         subcategoryId: query.subcategoryId,
         productCategory: query.productCategory,
         isArchived: query.isArchived,
      }
   });
   const response = await fetch(url);
   return response.json();
};

export default getProducts;