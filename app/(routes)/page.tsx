import { Home } from "@/components";
import getProducts from "@/actions/get-products";
import getBillboards from "@/actions/get-billboards";

export default async function App() {
	const products = await getProducts({ isArchived: false });
	const billboards = await getBillboards();
	return (
		<>
			<Home
				products={products}
				billboards={billboards}
			/>
		</>
	);
}
