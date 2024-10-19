import { Home, Navbar } from "@/components";
import getBillboards from "@/actions/get-billboards";
import getCategories from "@/actions/get-categories";
import getSubCategories from "@/actions/get-subCategories";

export default async function App() {
	const billboards = await getBillboards();
	const categories = await getCategories();
	const subcategories = await getSubCategories();
	return (
		<>
			<Navbar categories={categories} />
			<Home
				billboards={billboards}
				subcategories={subcategories}
			/>
		</>
	);
}
