import Image from "next/image";
import { guide, star } from "@/public";
import { Navbar, Offer } from "@/components";
import getProduct from "@/actions/get-product";
import getCategories from "@/actions/get-categories";
import ProductGallery from "@/components/product-gallery";

export default async function Product({
	params,
}: {
	params: { slug: string[] };
}) {
	const { slug } = params;
	const [category, subcategory, productId] = slug;
	const categories = await getCategories();
	const product = await getProduct(productId, category, subcategory);

	return (
		<>
			<Navbar categories={categories} />
			<div className="w-full absolute top-[10vh] -z-10">
				<Offer />
			</div>
			<div className="w-full flex justify-center items-center py-10 mt-40">
				<div className="w-[60%] flex justify-between gap-5">
					<div className="flex flex-1 relative">
						<h1 className="flex items-center gap-1 text-[18px] text-black font-HelveticaNowText font-semibold leading-tight absolute left-32 top-5 z-50 bg-white px-4 py-3 rounded-full">
							<Image
								src={star}
								alt="starIcon"
								width={20}
								height={20}
							/>
							{product.rating}
						</h1>
						<ProductGallery products={product} />
					</div>
					<div className="flex-1 flex flex-col gap-5">
						<div className="flex flex-col">
							<h1 className="text-[18px] text-[#D33918] font-HelveticaMedium leading-tight">
								{product.material}
							</h1>
							<h1 className="text-[30px] font-HelveticaMedium leading-tight">
								{product.name}
							</h1>
							<p className="text-[18px] text-gray-700 capitalize font-medium font-HelveticaMedium leading-tight">
								{category}
							</p>
						</div>
						<div className="flex flex-col gap-8">
							<p className="text-[18px] font-HelveticaMedium leading-tight">
								${product.price}
							</p>
							<div className="flex items-center gap-2">
								{product.productColor.flatMap((productColor: any) =>
									productColor.color.images.slice(0, 1).map((image: any) => (
										<Image
											key={image.id}
											src={image.url}
											alt="color"
											width={50}
											height={50}
											className="w-20 h-20 rounded-lg object-cover cursor-pointer"
										/>
									)),
								)}
							</div>
							<div className="flex gap-5 flex-col">
								<div className="flex items-center justify-between gap-2">
									<p className="text-[18px] font-HelveticaMedium leading-tight">
										Select Size
									</p>
									<div className="flex items-center gap-2">
										<Image
											src={guide}
											alt="guide"
											width={30}
											height={30}
										/>
										<p className="text-[18px] font-HelveticaMedium leading-tight">
											Size Guide
										</p>
									</div>
								</div>
								{product.productSize?.map((item) => (
									<div
										className="flex items-center w-fit p-3 rounded-lg border border-gray-300 cursor-pointer"
										key={item.id}>
										<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
											{item.name}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
