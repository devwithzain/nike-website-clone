"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { arrowStart, jordan } from "@/public";

export default function Header() {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="w-full bg-[#F5F5F5] py-2 px-10 z-50">
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
				<div className="flex items-center gap-[12px]">
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium">
						Find a Store
					</Link>
					<span className="w-[1px] h-[14px] bg-black" />
					<div className="flex items-center gap-2 relative transition-all duration-200 ease-linear">
						<div
							className="flex items-center gap-2 cursor-pointer transition-all duration-200 ease-linear"
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}>
							<Link
								href={"/help"}
								className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium">
								Help
							</Link>
						</div>
						<motion.div
							className={`absolute py-2 border rounded-lg top-[18px] bg-white left-[-200px] w-[250px] transition-all duration-200 ease-linear z-20 shadow-md ${
								hovered ? "block" : "hidden"
							}`}
							initial={{ y: -10 }}
							animate={{ y: hovered ? 0 : -10 }}
							transition={{
								duration: 0.5,
								ease: "backOut",
							}}
							onMouseEnter={() => setHovered(true)}
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
									className="text-[12px] py-1 px-6 text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
									{item}
								</h1>
							))}
						</motion.div>
					</div>
					<span className="w-[1px] h-[14px] bg-black" />
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium">
						Join Us
					</Link>
					<span className="w-[1px] h-[14px] bg-black" />
					<Link
						href={""}
						className="text-[12px] cursor-pointer text-[#111111] font-HelveticaMedium">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	);
}
