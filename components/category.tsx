import { backToSchool, essentials, flexibility, looksSmoth } from "@/public";
import Image from "next/image";

export default function Category() {
	return (
		<div className="w-full py-10">
			<div className="w-full flex">
				<div className="flex-1 relative">
					<Image
						src={backToSchool}
						alt="backToSchool"
						className="w-full h-full object-cover"
					/>
					<div className="absolute left-10 bottom-10 flex flex-col gap-5">
						<div>
							<h4 className="text-[16px] text-white font-HelveticaMedium font-medium">
								Create the Future
							</h4>
							<h1 className="text-[25px] text-white font-HelveticaMedium font-medium">
								Air Force 1
							</h1>
						</div>
						<button className="w-fit text-[16px] font-HelveticaMedium font-medium text-black bg-white py-2 px-4 rounded-full">
							Shop
						</button>
					</div>
				</div>
				<div className="flex-1 relative">
					<Image
						src={flexibility}
						alt="flexibility"
						className="w-full h-full object-cover"
					/>
					<div className="absolute left-10 bottom-10 flex flex-col gap-5">
						<div>
							<h4 className="text-[16px] text-white font-HelveticaMedium font-medium">
								Fits of the Week
							</h4>
							<h1 className="text-[25px] text-white font-HelveticaMedium font-medium">
								The Style of Sport
							</h1>
						</div>
						<button className="w-fit text-[16px] font-HelveticaMedium font-medium text-black bg-white py-2 px-4 rounded-full">
							Shop
						</button>
					</div>
				</div>
			</div>
			<div className="w-full flex">
				<div className="flex-1 relative">
					<Image
						src={looksSmoth}
						alt="looksSmoth"
						className="w-full h-full object-cover"
					/>
					<div className="absolute left-10 bottom-10 flex flex-col gap-5">
						<div>
							<h4 className="text-[16px] text-white font-HelveticaMedium font-medium">
								Running Essentials
							</h4>
							<h1 className="text-[25px] text-white font-HelveticaMedium font-medium">
								Pegasus 41 & More
							</h1>
						</div>
						<button className="w-fit text-[16px] font-HelveticaMedium font-medium text-black bg-white py-2 px-4 rounded-full">
							Shop
						</button>
					</div>
				</div>
				<div className="flex-1 relative">
					<Image
						src={essentials}
						alt="essentials"
						className="w-full h-full object-cover"
					/>
					<div className="absolute left-10 bottom-10 flex flex-col gap-5">
						<div>
							<h4 className="text-[16px] text-white font-HelveticaMedium font-medium">
								Jordan Women
							</h4>
							<h1 className="text-[25px] text-white font-HelveticaMedium font-medium">
								Sport Essentials
							</h1>
						</div>
						<button className="w-fit text-[16px] font-HelveticaMedium font-medium text-black bg-white py-2 px-4 rounded-full">
							Shop
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
