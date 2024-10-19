import { TsubCategoriesProps } from "@/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;
const getSubCategory = async (id: string): Promise<TsubCategoriesProps> => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getSubCategory;