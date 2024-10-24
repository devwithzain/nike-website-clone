import { Product } from "@/types";
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProductsByCategory = async (id: string, category: string,): Promise<Product[]> => {
   const response = await fetch(`${apiUrl}/${category}/${id}`);
   return response.json();
};

export default getProductsByCategory;