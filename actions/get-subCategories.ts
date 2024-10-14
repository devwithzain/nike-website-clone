const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/subcategories`;
const getSubCategories = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSubCategories;