import Link from "next/link";
import Image from "next/image";
import { arrivals01 } from "@/public";

export default function Arrivals() {
	return (
		<div className="w-full">
			<Link
				href={""}
				className="w-full pb-10 flex flex-col items-center justify-center gap-6">
				<h1 className="text-[85px] leading-none font-NikeFutura text-[#111111] text-center uppercase">
					New This Week
				</h1>
				<button className="bg-black text-white py-2 px-4 text-center font-medium font-HelveticaMedium rounded-full w-fit">
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
			<Link
				href={""}
				className="w-full padding flex flex-col items-center justify-center gap-4">
				<h1 className="text-[85px] leading-none font-NikeFutura text-[#111111] text-center uppercase">
					Win on Air
				</h1>
				<p className="text-[20px] leading-none font-medium font-HelveticaMedium text-[#111111] tracking-tighter text-center">
					Meet the next generation of Nike Air. Engineered to exect
					specifications of championships athelets
				</p>
				<div className="flex items-center gap-2">
					<button className="bg-black hover:opacity-50 text-white py-2 px-4 text-center font-medium font-HelveticaMedium rounded-full w-fit">
						Experienced Air
					</button>
					<button className="bg-black hover:opacity-50 text-white py-2 px-4 text-center font-medium font-HelveticaMedium rounded-full w-fit">
						Shop Air
					</button>
				</div>
			</Link>
		</div>
	);
}
