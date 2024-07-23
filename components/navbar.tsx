import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { Heart, Search } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="w-full py-4 px-10 bg-white">
			<div className="w-full flex items-center justify-between relative">
				<Link href="/">
					<Image
						src={logo}
						alt="logo"
					/>
				</Link>
				<div className="absolute left-[50%] -translate-x-1/2 flex gap-6">
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						New & Featured
					</Link>
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						Man
					</Link>
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						Woman
					</Link>
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						Kids
					</Link>
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						Jordan
					</Link>
					<Link
						href={""}
						className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
						Sale
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<div className="w-full flex gap-1 bg-[#E5E5E5] px-3 py-2 rounded-full">
						<Search
							size={24}
							className="rounded-full"
						/>
						<input
							type="text"
							className="w-full bg-[#E5E5E5] border-none outline-none text-[#111111] font-HelveticaMedium font-medium text-[14px] placeholder:text-[#707072]"
							placeholder="Search"
						/>
					</div>
					<div className="flex items-center gap-3">
						<Link href="/favorites">
							<Heart size={24} />
						</Link>
						<Link href="/cart">
							<svg
								aria-hidden="true"
								focusable="false"
								viewBox="0 0 24 24"
								role="img"
								width="24px"
								height="24px"
								fill="none">
								<path
									stroke="currentColor"
									strokeWidth="1.5"
									d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
