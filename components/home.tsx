"use client";
import { useEffect } from "react";
import { ThomeProps } from "@/types";
import WatchVideo from "./watch-videeo";
import Lenis from "@studio-freight/lenis";
import { Hero, Classic, Category, Arrivals } from "@/components";

export default function Home({ products, billboards }: ThomeProps) {
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
			<Hero billboards={billboards} />
			<WatchVideo />
			<Category />
			<Arrivals />
			<Classic products={products} />
		</>
	);
}
