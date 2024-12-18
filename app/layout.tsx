import "@/styles/globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components";

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
				{children}
				<Footer />
			</body>
		</html>
	);
}
