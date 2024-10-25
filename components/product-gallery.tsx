"use client";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallery({ products }: { products: any }) {
	const formatGalleryItems = (products: any) => {
		return products.images.map((image: any) => {
			if (image.url.endsWith(".mp4")) {
				return {
					original: image.url,
					thumbnail: image.url.replace(".mp4", ".jpg"),
					renderItem: () => (
						<video
							src={image.url}
							loop
							autoPlay
							muted
						/>
					),
				};
			} else {
				return {
					original: image.url,
					thumbnail: image.url,
				};
			}
		});
	};

	return (
		<ReactImageGallery
			items={formatGalleryItems(products)}
			thumbnailPosition="left"
			showPlayButton={false}
			showBullets={false}
			infinite={true}
			slideOnThumbnailOver={true}
			lazyLoad={true}
			showFullscreenButton={false}
		/>
	);
}
