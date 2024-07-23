import { Arrivals, Category, Classic, WatchVideo } from "@/components";

export default function App() {
	return (
		<>
			<div className="w-full">
				<video
					src="/heroVideo.mp4"
					loop
					muted
					autoPlay
				/>
			</div>
			<WatchVideo />
			<Category />
			<Arrivals />
			<Classic />
		</>
	);
}
