"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { privacyPolicy } from "@/public";
import { ChevronDown, Copyright } from "lucide-react";

export default function Copywright() {
	const [hovered, setHovered] = useState(false);
	return (
		<div className="w-full mt-10">
			<div className="flex items-center gap-6 sm:gap-3 xm:gap-3 xm:flex-col sm:flex-col xm:items-start sm:items-start">
				<div className="flex items-center gap-2">
					<Copyright
						size={18}
						className="text-[#707072]"
					/>
					<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
						2024 Nike, Inc. All Rights Reserved
					</h1>
				</div>
				<div className="flex items-center gap-2 relative transition-all duration-200 ease-linear">
					<div
						className="flex items-center gap-2 cursor-pointer transition-all duration-200 ease-linear"
						onClick={() => setHovered(!hovered)}>
						<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer transition-all duration-200 ease-linear">
							Guides
						</h1>
						<ChevronDown
							size={22}
							className={`text-[#707072] transition-all duration-200 ease-linear cursor-pointer ${
								hovered ? "rotate-180" : "rotate-0"
							}`}
						/>
					</div>
					<motion.div
						className={`absolute py-2 border rounded-lg bg-white bottom-[30px] w-[200px] transition-all duration-200 ease-linear shadow-md ${
							hovered ? "block" : "hidden"
						}`}
						initial={{ y: 30 }}
						whileInView={{ y: 0 }}
						transition={{
							duration: 0.5,
							ease: "backOut",
						}}>
						{[
							"Nike Air",
							"Nike Air Force 1",
							"Nike Air Max",
							"Nike FlyEase",
							"Nike FlyKnit",
							"Nike FlyLeather",
							"Nike Free",
							"Nike Joyride",
							"Nike React",
							"Nike Vaporfly",
							"Nike ZoomX",
							"Space Hippie",
						].map((item, index) => (
							<h1
								key={index}
								className="text-[14px] py-2 px-6 text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111] hover:bg-gray-200">
								{item}
							</h1>
						))}
					</motion.div>
				</div>
				<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
					Terms of Sale
				</h1>
				<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
					Terms of Use
				</h1>
				<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
					Nike Privacy Policy
				</h1>
				<div className="flex items-center gap-2">
					<Image
						src={privacyPolicy}
						alt="privacyPolicy"
						className=""
					/>
					<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
						Your Privacy Choices
					</h1>
				</div>
				<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium cursor-pointer hover:text-[#111111]">
					CA Supply Chains Act
				</h1>
			</div>
		</div>
	);
}
