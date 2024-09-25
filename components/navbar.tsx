"use client";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { Heart, Search } from "lucide-react";
import { useState } from "react";
import { navbarCategoryItems } from "@/constants";
import Header from "./header";
import { navVariants } from "@/motion";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [hovered, setHovered] = useState(false);
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<>
			<motion.div
				initial="initial"
				whileInView="enter"
				variants={navVariants}
				className="fixed w-full top-0 z-50">
				<motion.div
					variants={navVariants}
					animate={hidden ? "hidden" : "vissible"}>
					<Header />
				</motion.div>
				<motion.div
					className="w-full flex items-center justify-between gap-2 relative"
					animate={hidden ? { y: -43 } : { y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<div className="w-full flex items-center justify-between relative h-full py-3 bg-white px-10">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
							/>
						</Link>
						<div className="absolute left-[50%] -translate-x-1/2 flex gap-6 h-full">
							{["New & Featured", "Man", "Woman", "Kids", "Jordan", "Sale"].map(
								(item, index) => (
									<>
										<Link
											onMouseEnter={() => setHovered(true)}
											onMouseLeave={() => setHovered(false)}
											key={index}
											href={""}
											className="text-[#111111] font-HelveticaMedium font-medium text-[16px] h-full items-center justify-center flex">
											{item}
										</Link>
									</>
								),
							)}
							<span
								className="absolute left-0 -bottom-2 w-full h-8 cursor-pointer z-50"
								onMouseEnter={() => setHovered(true)}
							/>
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
					<AnimatePresence mode="wait">
						{hovered && (
							<motion.div
								initial={{ scaleY: 0 }}
								animate={{ scaleY: 1 }}
								exit={{ scaleY: 0 }}
								transition={{ duration: 0.3, ease: "linear" }}
								className="w-full absolute top-16 bg-white origin-top"
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
						)}
					</AnimatePresence>
				</motion.div>
			</motion.div>
		</>
	);
}
