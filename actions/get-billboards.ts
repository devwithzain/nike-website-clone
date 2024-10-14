const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const getBillboards = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBillboards;