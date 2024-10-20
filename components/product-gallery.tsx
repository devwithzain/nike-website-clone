"use client";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallery({ products }: { products: any }) {
	return (
		<>
			<ReactImageGallery
				items={products}
				thumbnailPosition="left"
				showPlayButton={false}
				showBullets={false}
				infinite={true}
				slideOnThumbnailOver={true}
				lazyLoad={true}
				showFullscreenButton={false}
			/>
		</>
	);
}
