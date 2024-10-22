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
			<motion.div
				initial={{ height: 0 }}
				whileInView={{ height: "auto" }}
				className="w-full bg-white"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}>
				<div className="w-full flex items-center justify-center padding">
					<div className="flex justify-center gap-16">
						{menuItems.map((item) => (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								className="flex flex-col gap-2"
								key={item.id}>
								<>
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
								</>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
}
