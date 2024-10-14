"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Hero from "./hero";
import WatchVideo from "./watch-videeo";
import Arrivals from "./arrivals";
import Category from "./category";
import Classic from "./classic";

export default function Home({ products }: any) {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Hero />
			<WatchVideo />
			<Category />
			<Arrivals />
			<Classic products={products} />
		</>
	);
}
