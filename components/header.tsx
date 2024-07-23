import Link from "next/link";
import Image from "next/image";
import { arrowStart, jordan } from "@/public";

export default function Header() {
	return (
		<div className="w-full bg-[#F5F5F5] py-2 px-10">
			<div className="w-full flex justify-between items-center gap-2">
				<div className="flex items-center gap-2">
					<Image
						src={jordan}
						alt="jordan"
					/>
					<Image
						src={arrowStart}
						alt="arrowStart"
					/>
				</div>
				<div className="flex items-center gap-3">
					<Link
						href={""}
						className="text-[12px] text-[#111111] font-HelveticaMedium">
						Find a Store
					</Link>
					<Link
						href={""}
						className="text-[12px] text-[#111111] font-HelveticaMedium">
						Help
					</Link>
					<Link
						href={""}
						className="text-[12px] text-[#111111] font-HelveticaMedium">
						Join Us
					</Link>
					<Link
						href={""}
						className="text-[12px] text-[#111111] font-HelveticaMedium">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
}
