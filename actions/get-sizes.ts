const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
const getSizes = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getSizes;