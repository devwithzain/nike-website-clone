"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Arrivals, Category, Classic, Hero, WatchVideo } from "@/components";

export default function App() {
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
			<Classic />
		</>
	);
}
