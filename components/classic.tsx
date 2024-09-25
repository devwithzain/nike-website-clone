"use client";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { AnimatePresence } from "framer-motion";
import { arrowLeft, arrowRight, logo } from "@/public";
import { Swiper, SwiperSlide } from "swiper/react";
import { classicShopItem, shoesCategoryItems } from "@/constants";

export default function Classic() {
	const swiperRef = useRef<any | null>(null);
	const [isHovered, setIsHovered] = useState(false);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full pb-10">
			<h1 className="text-[45px] leading-none font-NikeFutura text-[#111111] uppercase px-10 py-10">
				shop by classic
			</h1>
			<Swiper
				modules={[Navigation]}
				loop
				draggable
				slidesPerView={4}
				spaceBetween={20}
				className="relative"
				onSwiper={(swiper) => (swiperRef.current = swiper)}>
				{classicShopItem.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="w-full flex items-center">
							<Link
								href="/"
								className="w-full shrink-0">
								<Image
									src={item.src}
									alt="shoesImg"
									className="w-full h-full object-center object-cover"
								/>
							</Link>
						</div>
					</SwiperSlide>
				))}
				<div className="flex w-full gap-2 px-10 !absolute !top-1/2 items-center justify-between">
					<div
						onClick={handlePrev}
						className="bg-white transition-all duration-200 ease-linear cursor-pointer p-[6px] rounded-full z-50">
						<Image
							src={arrowLeft}
							alt="arrowLeft"
							width={25}
							height={25}
						/>
					</div>
					<div
						onClick={handleNext}
						className="bg-white transition-all duration-200 ease-linear cursor-pointer p-[6px] rounded-full z-50">
						<Image
							src={arrowRight}
							alt="arrowRight"
							width={25}
							height={25}
						/>
					</div>
				</div>
			</Swiper>
			<div className="w-full flex items-center justify-center padding mt-10 px-10 flex-col gap-20">
				<div className="flex flex-col gap-10 items-center">
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
						/>
					</Link>
					<div className="items-center flex gap-10">
						{["Find a Store", "Help", "Join Us", "Sign In"].map(
							(item, index) => (
								<Link
									key={index}
									href={""}
									className="text-[#111111] font-HelveticaMedium font-medium text-[16px]">
									{item}
								</Link>
							),
						)}
					</div>
				</div>
				<div
					className="w-fit flex justify-center gap-32"
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
							<AnimatePresence mode="wait">
								{isHovered && (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.2, ease: "linear" }}
										className="flex flex-col gap-3">
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
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
