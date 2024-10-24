"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { arrowLeft, arrowRight } from "@/public";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

export default function Header() {
	const swiperRef = useRef<any | null>(null);

	const handlePrev = () => {
		if (swiperRef.current) swiperRef.current.slidePrev();
	};
	const handleNext = () => {
		if (swiperRef.current) swiperRef.current.slideNext();
	};

	return (
		<div className="w-full bg-[#F5F5F5] h-[5vh] flex items-center justify-center px-10">
			<div className="relative w-1/3 flex justify-between items-center">
				<div
					onClick={handlePrev}
					className="hover:bg-black/10 transition-all duration-200 ease-linear cursor-pointer p-[6px] rounded-full z-50 left-0 w-fit absolute">
					<Image
						src={arrowLeft}
						alt="arrowLeft"
						width={25}
						height={25}
					/>
				</div>
				<Swiper
					modules={[Navigation, Autoplay]}
					loop={true}
					draggable
					slidesPerView={1}
					spaceBetween={10}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					navigation={{
						prevEl: ".swiper-button-prev",
						nextEl: ".swiper-button-next",
					}}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className="relative max-w-fit text-center">
					{[
						"Members: Free Shipping on Orders $50+",
						"Extra 25% Off: Use Code JUMP25",
						"Look for Store Pickup at Checkout",
					].map((item, index) => (
						<SwiperSlide
							key={index}
							className="flex items-center justify-center">
							<div className="w-full flex justify-center">
								<Link href={`/`}>
									<span className="text-[13px] leading-tight font-HelveticaMedium text-center">
										{item}
									</span>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div
					onClick={handleNext}
					className="hover:bg-black/10 transition-all duration-200 ease-linear cursor-pointer p-[6px] rounded-full z-50 w-fit right-0 absolute">
					<Image
						src={arrowRight}
						alt="arrowRight"
						width={25}
						height={25}
					/>
				</div>
			</div>
		</div>
	);
}
