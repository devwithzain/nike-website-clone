import Image from "next/image";
import getProduct from "@/actions/get-product";

export default async function Product({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProduct(params.productId);
	return (
		<>
			<div className="w-full flex justify-center items-center py-10">
				<div className="w-[70%] flex justify-between gap-5">
					<div className="flex flex-1">
						{product.images.map((item) => (
							<Image
								key={item.id}
								src={item.url}
								alt="product"
								width={500}
								height={400}
								className="w-full"
							/>
						))}
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
								Category: {product.category.name}
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
										className="flex items-center gap-2"
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
