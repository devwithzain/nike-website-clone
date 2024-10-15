import "@/styles/globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import getCategories from "@/actions/get-categories";

export const metadata: Metadata = {
	title: "Nike. Just Do it. Nike.com",
	description: "Nike Website Clone by devwithzain",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categories = await getCategories();
	return (
		<html lang="en">
			<body>
				<Navbar categories={categories} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
