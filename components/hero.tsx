import Image from "next/image";
import { TbillboardsProps } from "@/types";

export default function Hero({ billboards }: { billboards: TbillboardsProps }) {
	return (
		<div className="w-full h-screen">
			{billboards.billboards.map((item) => (
				<Image
					key={item.id}
					src={item.imageUrl}
					alt="heroImg"
					className="w-full h-full object-cover"
					width={800}
					height={400}
				/>
			))}
		</div>
	);
}
