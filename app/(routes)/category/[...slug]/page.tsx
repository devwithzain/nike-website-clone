import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";

export default async function CategoryPage({
	params,
}: {
	params: { slug: string[] };
}) {
	const { slug } = params;
	const [categoryName, categoryId] = slug;
	const categories = await getCategories();
	const category = await getCategory(categoryId);
	const products = await getProducts({
		categoryId: categoryId,
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
							{categoryName} category
						</p>
					</div>
				))}
				<div className="w-full flex-col flex gap-5 px-10">
					<div className="w-full flex items-center justify-between gap-5 pb-10">
						{products.map((item) => (
							<div key={item.id}>
								<Link
									href={`/product/${item.ProductCategory.map((item) =>
										item.name.toLocaleLowerCase(),
									)}/
								${item.subcategory.name}/
								${item.id}`}>
									<Image
										key={item.id}
										src={item.images.map((image) => image.url)[1]}
										alt="product"
										width={400}
										height={400}
										className="w-full h-full object-cover"
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
