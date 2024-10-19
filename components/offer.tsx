"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { arrowLeft, arrowRight, arrowStart, jordan } from "@/public";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Header() {
	const swiperRef = useRef<any | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full bg-[#F5F5F5] h-[4vh] flex items-center justify-center px-10">
			<div className="w-full flex justify-center items-center">
				<Swiper
					modules={[Navigation]}
					loop
					draggable
					slidesPerView={1}
					spaceBetween={10}
					className="relative w-full flex items-center justify-center"
					onSwiper={(swiper) => (swiperRef.current = swiper)}>
					{["asd", "asdqwe123"].map((item, index) => (
						<SwiperSlide key={index}>
							<div className="w-fit">
								<Link
									href={`/`}
									className="w-full">
									{item}
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
			</div>
		</div>
	);
}
