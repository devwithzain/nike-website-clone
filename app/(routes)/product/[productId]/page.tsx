import { Navbar, Offer } from "@/components";
import getProduct from "@/actions/get-product";
import getCategories from "@/actions/get-categories";
import ProductGallery from "@/components/product-gallery";

export default async function Product({
	params,
}: {
	params: { productId: string };
}) {
	const categories = await getCategories();
	const product = await getProduct(params.productId);

	const galleryImages = product.images.map((item) => ({
		original: item.url,
		thumbnail: item.url,
	}));

	return (
		<>
			<Navbar categories={categories} />
			<div className="w-full absolute top-[10vh] -z-10">
				<Offer />
			</div>
			<div className="w-full flex justify-center items-center py-10 mt-40">
				<div className="w-[70%] flex justify-between gap-5">
					<div className="flex flex-1">
						<ProductGallery products={galleryImages} />
					</div>
					<div className="flex-1 flex flex-col gap-5">
						<div className="flex gap-2 flex-col">
							<h1 className="text-[40px] font-HelveticaMedium font-semibold leading-tight">
								{product.name}
							</h1>
							<p className="text-[20px] font-HelveticaNowText leading-tight">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corrupti nobis atque sapiente maiores voluptatem a qui facere
								illo mollitia veniam tempore, suscipit at perferendis veritatis,
								nesciunt placeat magnam dolor quaerat!
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
								Category: Working on it
							</p>
							<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
								Price: {product.price}$
							</p>
							<div className="flex items-center gap-2">
								<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
									Sizes:
								</p>
								{product.ProductSize?.map((item) => (
									<div
										className="flex items-center gap-2"
										key={item.id}>
										<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
											{item.name}
										</p>
									</div>
								))}
							</div>
							<div className="flex items-center gap-2">
								<p className="text-[18px] font-semibold font-HelveticaNowText leading-tight">
									Colors:
								</p>
								{product.ProductColor?.map((item) => (
									<div
										className="flex items-center gap-2 p-3 rounded-full border border-black"
										key={item.id}
										style={{ background: item.name }}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
