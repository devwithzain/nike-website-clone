import Image from "next/image";
import { heroImg } from "@/public";

export default function Hero() {
	return (
		<div className="w-full h-screen">
			<Image
				src={heroImg}
				alt="heroImg"
				className="w-full h-full object-cover"
			/>
		</div>
	);
}
