import getProducts from "@/actions/get-products";
import { Home } from "@/components";

export default async function App() {
	const products = await getProducts();
	return (
		<>
			<Home products={products} />
		</>
	);
}
