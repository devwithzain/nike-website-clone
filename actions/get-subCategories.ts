import { TsubCategoriesProps } from "@/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;
const getSubCategories = async (): Promise<TsubCategoriesProps> => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSubCategories;