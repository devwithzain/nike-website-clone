import Link from "next/link";
import Image from "next/image";
import { Navbar, Offer } from "@/components";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import getSubCategory from "@/actions/get-subCategory";

export default async function SubCategoryPage({
	params,
}: {
	params: { slug: string[] };
}) {
	const { slug } = params;
	const [subcategoryName, subcategoryId] = slug;
	// const categories = await getCategories();
	const products = await getProducts({
		subcategoryId: subcategoryId,
	});

	const subcategories = await getSubCategory(subcategoryId);

	return (
		<>
			{/* <Navbar categories={categories} /> */}
			<div className="w-full absolute top-[10vh] -z-10">
				<Offer />
			</div>
			<div className="w-full flex items-center justify-between mt-32 padding">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-1">
						<p className="text-[18px] tracking-tight leading-tight text-black font-HelveticaMedium">
							Shoes
						</p>
						<p className="text-[18px] tracking-tight leading-tight text-black font-HelveticaMedium">
							/
						</p>
						<p className="text-[18px] tracking-tight leading-tight text-black font-HelveticaMedium capitalize">
							{subcategoryName}
						</p>
					</div>
					<div>
						<p className="text-[22px] tracking-tight leading-tight text-black font-HelveticaMedium capitalize">
							{subcategoryName} ({subcategories.subcategories.length})
						</p>
					</div>
				</div>
				<div className=""></div>
			</div>
			<div className="w-full flex-col flex gap-5 px-10">
				<div className="w-full flex items-center justify-between gap-5 pb-10">
					{products.map((item) => (
						<div key={item.id}>
							<Link
								href={`/product/${item.productCategory.map((item) =>
									item.name.toLocaleLowerCase(),
								)}/
								${item.subcategory.name}/
								${item.id}`}>
								{item.productColor.slice(0, 1).map((productColor) =>
									productColor.color.images.slice(0, 1).map((item) => (
										<Image
											key={item.id}
											src={item.url}
											alt="product"
											width={400}
											height={400}
											className="w-full h-full object-cover"
										/>
									)),
								)}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
