import { TbillboardsProps } from "@/types";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const getBillboards = async (): Promise<TbillboardsProps> => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getBillboards;