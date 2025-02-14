"use client";

import Button from "@/components/button-component";
import Image from "next/image";
import { useEffect, useState } from "react";

const videos = [
	{
		link: "/hair-barb.mp4",
		type: " Hair Cuts",
	},
	{
		link: "/female-hair.mp4",
		type: "Styling",
	},
	{
		link: "/hair-color.mp4",
		type: "Colouring",
	},
	{
		link: "/beauty-therapies.mp4",
		type: "Beauty Therapy",
	},
	{
		link: "/body- assage.mp4",
		type: "Body masssage",
	},
	{
		link: "/consultation.mp4",
		type: "Consultation",
	},
];

const images = [
	{
		link: "/hair-cut-service.webp",
		type: " Hair Cuts",
	},
	{
		link: "/hair-do-female.webp",
		type: "Styling",
	},
	{
		link: "/pex-1.jpg",

		type: "Colouring",
	},
	{
		link: "/therapy.webp",
		type: "Beauty Therapy",
	},
	{
		link: "/pex-2.jpg",

		type: "Body masssage",
	},
	{
		link: "/consultation.jpg",

		type: "Consultation",
	},
];

export default function Services() {
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		const handleChange = () => {
			const screensize = window.innerWidth;
			if (screensize <= 960) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		handleChange();

		window.addEventListener("resize", handleChange);
		return () => window.removeEventListener("resize", handleChange);
	}, []);
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute md:bg-accent/30 bg-accent/20 h-[30vh] w-[50vh] top-10 right-0 -z-10 blur-[80px]" />
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h2 className="text-3xl font-bold tracking-wider text-center uppercase md:text-5xl sm:text-left">
							Our services
						</h2>
					</div>

					<p className="justify-end flex-1 max-w-2xl text-base font-normal text-center md:text-right text-dark text-balance">
						It's not just about looking good, it's about feeling confident and
						empowered in your own skin. That's why we've curated a selection of
						premium grooming products designed to nourish, enhance, and protect
						your skin and hair.
					</p>
				</div>

				{/* videos */}

				{isMobile ? <ImageComponent /> : <VideoComponent />}
			</div>

			<div className="flex justify-center mt-20">
				<Button
					link={"/services"}
					text={"Browse All Services"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}

export const ImageComponent = () => {
	return (
		<div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-2">
			{images &&
				images.map((item, i) => {
					return (
						<div className=" w-full h-[400px] relative " key={i}>
							<div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
							<img
								src={item.link}
								alt={item.type}
								fill
								className="object-cover w-full h-[400px] rounded-3xl"
							/>

							<div className="absolute z-20 flex flex-col items-center justify-center gap-2 pl-3 left-4 bottom-5 sm:bottom-3">
								<h1 className="text-3xl font-bold text-white">{item.type}</h1>
							</div>
						</div>
					);
				})}
		</div>
	);
};
export const VideoComponent = () => {
	return (
		<div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-2">
			{videos &&
				videos.map((item, i) => {
					return (
						<div className="relative w-full h-[400px] " key={i}>
							<div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
							<video
								autoPlay
								defaultmuted
								loop
								muted
								playsInline
								className="object-cover w-full h-[400px] rounded-3xl"
								style={{ pointerEvents: "none", touchAction: "none" }}
							>
								<source src={item.link} type="video/mp4" />
							</video>
							{/* <div
										style={{ pointerEvents: "none" }}
										className="absolute inset-0 z-10"
									></div> */}
							<div className="absolute flex flex-col items-center justify-center gap-2 pl-3 left-4 bottom-5 sm:bottom-3">
								<h1 className="text-3xl font-bold text-white">{item.type}</h1>
							</div>
						</div>
					);
				})}
		</div>
	);
};
