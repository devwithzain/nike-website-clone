"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState } from "react";
import MegaMenu from "./mega-menu";
import { Header, Offer } from "@/components";
import { navVariants } from "@/motion";
import { TcategoriesProps } from "@/types";
import { Heart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
	navbarCategoryNewItems,
	navbarCategoryMenItems,
	navbarCategoryJordanItems,
	navbarCategoryKidItems,
	navbarCategoryWomenItems,
	navbarCategorySaleItems,
} from "@/constants";

export default function Navbar({
	categories,
}: {
	categories: TcategoriesProps;
}) {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);

	const handleMouseEnter = (item: string) => {
		setHoveredItem(item);
	};

	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<>
			<motion.div
				initial="initial"
				whileInView="enter"
				viewport={{ once: true }}
				variants={navVariants}
				className="absolute top-0 left-0 w-full z-[200]">
				<Header />
				<motion.div className="w-full flex items-center justify-between gap-2 h-[6vh] bg-white">
					<div className="w-full flex items-center justify-between relative h-full px-10">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
							/>
						</Link>
						<div className="absolute left-[50%] -translate-x-1/2 flex gap-8 h-full">
							{categories.categories.slice(0, 6).map((item) => (
								<div
									key={item.id}
									onMouseEnter={() => handleMouseEnter(item.name)}
									onMouseLeave={handleMouseLeave}
									className="relative flex flex-col items-center">
									<Link
										href={`/category/${item.id}`}
										className="text-[#111111] font-HelveticaMedium font-medium text-[18px] h-full items-center justify-center flex">
										{item.name}
									</Link>
									<span
										className={`h-1 bg-black rounded-lg transition-all duration-300 ${
											hoveredItem === item.name ? "w-full" : "w-0"
										}`}
									/>
								</div>
							))}
						</div>
						<div className="flex items-center gap-4">
							<div className="w-full flex bg-[#E5E5E5] rounded-full group">
								<div className="w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-[#c7c7c7]">
									<Search
										size={20}
										className="rounded-full"
									/>
								</div>
								<input
									type="text"
									className="w-[120px] rounded-full bg-[#E5E5E5] border-none outline-none pr-3 py-2 text-[#707072] font-HelveticaMedium font-medium text-[14px]"
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
				</motion.div>
				<AnimatePresence mode="wait">
					{hoveredItem && (
						<MegaMenu
							menuItems={
								hoveredItem === "New"
									? navbarCategoryNewItems
									: hoveredItem === "Men"
									? navbarCategoryMenItems
									: hoveredItem === "Woman"
									? navbarCategoryWomenItems
									: hoveredItem === "Kids"
									? navbarCategoryKidItems
									: hoveredItem === "Jordan"
									? navbarCategoryJordanItems
									: hoveredItem === "Sale"
									? navbarCategorySaleItems
									: []
							}
							onMouseEnter={() => setHoveredItem(hoveredItem)}
							onMouseLeave={handleMouseLeave}
						/>
					)}
				</AnimatePresence>
			</motion.div>
		</>
	);
}
