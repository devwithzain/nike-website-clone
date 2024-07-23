import "@/styles/globals.css";
import type { Metadata } from "next";
import { Footer, Header, Navbar } from "@/components";

export const metadata: Metadata = {
	title: "Nike. Just Do it. Nike.com",
	description: "Nike Website Clone by devwithzain",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="w-full absolute top-0 left-0">
					<Header />
					<Navbar />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
