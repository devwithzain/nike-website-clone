"use client";
import Link from "next/link";
import { ChevronDown, Copyright, Globe } from "lucide-react";
import { Copywright } from "@/components";
import { footerItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
	const [activeAccordion, setActiveAccordion] = useState<string | null>(
		footerItems[0]?.id || null,
	);

	const phrases = ["Process"];

	const toggleAccordion = (itemId: string) => {
		if (activeAccordion === itemId) {
			setActiveAccordion(null);
		} else {
			setActiveAccordion(itemId);
		}
	};
	return (
		<div className="w-full padding">
			<div className="w-full flex justify-between gap-5 xm:flex-col sm:flex-col xm:gap-0 sm:gap-0">
				{footerItems.map((item) => (
					<div
						key={item.id}
						className={`xm:flex sm:flex flex-col hidden border-b py-6 ${
							item.id == 1 && "border-t"
						}`}>
						<div
							className={`flex items-center justify-between ${
								activeAccordion === item.id ? "mb-3" : "mb-0"
							}`}
							onClick={() => toggleAccordion(item.id)}>
							<h1 className="text-[14px] text-[#111111] font-HelveticaMedium font-medium">
								{item.title}
							</h1>
							<ChevronDown
								size={22}
								className={`text-[#707072] transition-all duration-200 ease-linear cursor-pointer ${
									activeAccordion === item.id ? "rotate-180" : "rotate-0"
								}`}
							/>
						</div>
						<AnimatePresence>
							{activeAccordion === item.id && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{
										ease: "linear",
										duration: 0.4,
									}}
									className="flex flex-col gap-2">
									{item.links.map((link) => (
										<div key={link.id}>
											<Link
												href={link.href}
												className="text-[14px] text-[#707072] font-HelveticaMedium font-medium">
												{link.title}
											</Link>
										</div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
				{footerItems.map((item) => (
					<div
						key={item.id}
						className="flex flex-col gap-4 xm:hidden sm:hidden">
						<h1 className="text-[14px] text-[#111111] font-HelveticaMedium font-medium mb-6">
							{item.title}
						</h1>
						{item.links.map((link) => (
							<div
								key={link.id}
								className="flex flex-col gap-2">
								<Link
									href={link.href}
									className="text-[14px] text-[#707072] font-HelveticaMedium font-medium">
									{link.title}
								</Link>
							</div>
						))}
					</div>
				))}
				<div className="flex gap-2 xm:border-b sm:border-b xm:py-6 sm:py-6">
					<Globe
						size={20}
						className="text-[#707072]"
					/>
					<h1 className="text-[14px] text-[#707072] font-HelveticaMedium font-medium">
						United States
					</h1>
				</div>
			</div>
			<Copywright />
		</div>
	);
}
