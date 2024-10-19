import { TcategoriesProps } from "@/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<TcategoriesProps> => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getCategory;