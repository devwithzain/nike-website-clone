import Link from "next/link";
import Image from "next/image";
import { arrivals01 } from "@/public";

export default function Arrivals() {
	return (
		<div className="w-full">
			<Link
				href={""}
				className="w-full pb-10 flex flex-col items-center justify-center gap-3">
				<h1 className="text-[85px] leading-none tracking-tight font-NikeFutura text-[#111111] text-center uppercase">
					Latest Drops
				</h1>
				<p className="text-[17px] leading-tight tracking-tight font-HelveticaMedium text-[#111111] text-center">
					Featuring the Air Jordan 4 & more.
				</p>
				<button className="bg-black text-white py-2 px-4 text-center font-medium font-HelveticaMedium rounded-full w-fit leading-tight tracking-tight">
					Shop New Arrivals
				</button>
			</Link>
			<Link
				href={""}
				className="w-full">
				<Image
					src={arrivals01}
					alt="arrivals01"
					className="w-full"
				/>
			</Link>
			<video
				autoPlay
				muted
				loop
				src="/zoomair.mp4"
				className="w-full mt-10"
			/>
		</div>
	);
}
