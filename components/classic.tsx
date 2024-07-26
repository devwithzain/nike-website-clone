"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { classicShopItem, shoesCategoryItems } from "@/constants";

export default function Classic() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="w-full pb-10 px-10">
			<h1 className="text-[45px] leading-none font-NikeFutura text-[#111111] uppercase">
				shop by classic
			</h1>
			<div className="w-full flex items-center gap-3 pt-10 overflow-hidden">
				{classicShopItem.map((item) => (
					<Link
						href="/"
						className="w-[400px] shrink-0"
						key={item.id}>
						<Image
							src={item.src}
							alt="shoesImg"
							className="w-full h-full object-center object-cover"
						/>
					</Link>
				))}
			</div>
			<div className="w-full flex items-center justify-center padding mt-10">
				<div
					className="w-fit flex justify-center gap-36"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{shoesCategoryItems.map((item) => (
						<div
							className="flex flex-col gap-3"
							key={item.id}>
							<h1 className="text-[20px] text-[#111111] font-HelveticaMedium font-medium pb-5">
								{item.title}
							</h1>
							{item.links.slice(0, 4).map((link) => (
								<Link
									className={`flex hover:text-[#111111] flex-col text-[17px] text-[#707072] font-HelveticaMedium`}
									key={link.id}
									href={link.href}>
									{link.title}
								</Link>
							))}
							{isHovered && (
								<>
									{item.links.slice(4).map((link) => (
										<Link
											className={`flex hover:text-[#111111] h-0 overflow-hidden flex-col text-[17px] text-[#707072] font-HelveticaMedium transition-all duration-100 ease-in-out ${
												isHovered && "h-auto"
											}`}
											key={link.id}
											href={link.href}>
											{link.title}
										</Link>
									))}
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
