"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { Heart, Search } from "lucide-react";
import { useState } from "react";
import { navbarCategoryItems } from "@/constants";

export default function Navbar() {
	const [hovered, setHovered] = useState(false);
	return (
		<>
			<nav className="w-full h-[8vh] flex items-center px-10 bg-white">
				<div className="w-full flex items-center justify-between relative h-full">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
						/>
					</Link>
					<div
						className="absolute left-[50%] -translate-x-1/2 flex gap-6 h-full"
						onMouseEnter={() => setHovered(true)}>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							New & Featured
						</Link>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							Man
						</Link>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							Woman
						</Link>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							Kids
						</Link>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							Jordan
						</Link>
						<Link
							href={""}
							className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
							Sale
						</Link>
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
			</nav>
			<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={
					hovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
				}
				exit={{ opacity: 0, height: 0 }}
				className="w-full"
				onMouseLeave={() => setHovered(false)}>
				<div className="w-full flex items-center justify-center padding">
					<div className="w-fit flex justify-center gap-20">
						{navbarCategoryItems.map((item) => (
							<div
								className="flex flex-col gap-2"
								key={item.id}>
								<h1 className="text-[18px] text-[#111111] font-HelveticaMedium font-medium pb-5">
									{item.title}
								</h1>
								{item.links.map((link) => (
									<Link
										className={`flex hover:text-[#111111] flex-col text-[14px] text-[#707072] font-HelveticaMedium`}
										key={link.id}
										href={link.href}>
										{link.title}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
}
