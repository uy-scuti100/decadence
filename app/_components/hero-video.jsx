import React from "react";

export default function HeroVideo() {
	return (
		<video
			autoPlay
			loop
			muted
			playsInline
			className="object-cover w-full h-full bg-center bg-cover"
		>
			<source
				src="https://decadencesalon.co.uk/video/decadence_video.mp4"
				type="video/mp4"
			/>
			<source
				src="https://decadencesalon.co.uk/video/decadence_video.WebM"
				type="video/webm"
			/>
		</video>
	);
}

// https://streamable.com/ft9206
// https://streamable.com/aqkz0t
// <source
// 				src="https://decadencesalon.co.uk/video/decadence_video.mp4"
// 				type="video/mp4"
// 			/>
// 			<source
// 				src="https://decadencesalon.co.uk/video/decadence_video.WebM"
// 				type="video/webm"
// 			/>
