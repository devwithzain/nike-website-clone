const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
const getColors = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getColors;