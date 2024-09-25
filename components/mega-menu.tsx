"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TmegaMenuProps } from "@/types";

export default function MegaMenu({
	menuItems,
	onMouseEnter,
	onMouseLeave,
}: TmegaMenuProps) {
	return (
		<>
			{menuItems.length > 0 && (
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: "auto" }}
					exit={{ height: 0 }}
					transition={{ duration: 0.3, ease: "linear" }}
					className="w-full absolute top-16 bg-white origin-top"
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}>
					<div className="w-full flex items-center justify-center padding">
						<div className="flex justify-center gap-16">
							{menuItems.map((item) => (
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{
										duration: 0.5,
										ease: "easeInOut",
									}}
									exit={{ opacity: 0 }}
									className="flex flex-col gap-2"
									key={item.id}>
									<h1 className="text-[18px] text-[#111111] font-HelveticaMedium font-medium pb-2">
										{item.title}
									</h1>
									{item.links.map((link) => (
										<Link
											className={`flex hover:text-[#111111] flex-col text-sm text-[#707072] font-HelveticaMedium`}
											key={link.id}
											href={link.href}>
											{link.title}
										</Link>
									))}
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
}
