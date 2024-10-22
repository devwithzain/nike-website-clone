import { Product } from "@/types";
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string, category: string, subcategory: string): Promise<Product> => {
   const response = await fetch(`${apiUrl}/${category}/${subcategory}/${id}`);
   return response.json();
};

export default getProduct;