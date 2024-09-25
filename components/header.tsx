"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { arrowStart, jordan } from "@/public";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="w-full bg-[#F5F5F5] h-[4vh] flex items-center px-10 z-50">
			<div className="w-full flex justify-between items-center gap-2 h-full">
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
				<div className="flex h-full items-center gap-[12px]">
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium h-full flex items-center hover:opacity-70">
						Find a Store
					</Link>
					<span className="w-[1px] h-[14px] bg-black" />
					<div className="flex items-center gap-2 relative transition-all duration-200 ease-linear h-full z-[999]">
						<div className="flex items-center gap-2 cursor-pointer  relative transition-all duration-200 ease-linear h-full">
							<Link
								href={"/help"}
								className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium hover:opacity-70"
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}>
								Help
							</Link>
							{hovered && (
								<span
									onMouseEnter={() => setHovered(true)}
									className="absolute left-0 -bottom-7 w-full h-full"
								/>
							)}
						</div>
						<AnimatePresence mode="wait">
							{hovered && (
								<motion.div
									className="absolute py-2 border rounded-lg top-[40px] bg-white left-[-200px] w-[250px] transition-all duration-200 ease-linear shadow-md"
									initial={{ y: -10, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -10, opacity: 0 }}
									transition={{
										duration: 0.5,
										ease: "backOut",
									}}
									onMouseLeave={() => setHovered(false)}>
									<h1 className="text-[16px] py-2 px-6 text-[#000] font-HelveticaMedium font-medium">
										Help
									</h1>
									{[
										"Order Status",
										"Shipping & Delivery",
										"Returns",
										"Order Cancelation",
										"Size Charts",
										"Contact Us",
										"Memberships",
										"Promotions & Discounts",
										"Product Advice",
										"Send Us Feedback",
									].map((item, index) => (
										<h1
											key={index}
											className="text-sm py-1 px-6 text-[#707072] font-HelveticaNowText leading-tight font-medium cursor-pointer hover:text-[#111111]">
											{item}
										</h1>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<span className="w-[1px] h-[14px] bg-black" />
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium h-full flex items-center hover:opacity-70">
						Join Us
					</Link>
					<span className="w-[1px] h-[14px] bg-black" />
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium h-full flex items-center hover:opacity-70">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
}
