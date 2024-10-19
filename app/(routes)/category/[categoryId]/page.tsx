import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";

export default async function CategoryPage({
	params,
}: {
	params: { categoryId: string };
}) {
	const categories = await getCategories();
	const category = await getCategory(params.categoryId);
	const products = await getProducts({
		categoryId: params.categoryId,
		isFeatured: true,
	});
	return (
		<>
			<Navbar categories={categories} />
			<div className="w-full flex-col flex gap-5">
				{category.categories.map((category) => (
					<>
						<div className="w-full h-screen relative">
							<Image
								key={category.id}
								src={category.billboard.imageUrl}
								alt="heroImg"
								className="w-full h-full object-cover"
								width={800}
								height={400}
							/>
						</div>
					</>
				))}
				{category.categories.map((category) => (
					<div
						className="w-full flex items-center justify-center"
						key={category.id}>
						<p className="text-7xl font-bold uppercase tracking-tight leading-tight text-black ">
							{category.name} category
						</p>
					</div>
				))}
				<div className="w-full flex items-center justify-between gap-5 py-10">
					{products.map((item) => (
						<div key={item.id}>
							<Link href={`/product/${item.id}`}>
								{item.images.map((item) => (
									<Image
										key={item.id}
										src={item.url}
										alt="product"
										width={400}
										height={400}
										className="w-full h-full object-cover"
									/>
								))}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
