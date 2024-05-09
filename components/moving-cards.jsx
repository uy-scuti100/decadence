"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "200s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => (
					<li
						className="w-[350px] max-w-full relative rounded-2xl  border flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
						key={item.name}
					>
						<blockquote className="flex flex-col justify-between h-full">
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<span className=" relative z-20 text-sm leading-[1.6] font-normal">
								{item.review}
							</span>
							<div className="relative z-20 flex flex-row items-center gap-6 mt-6">
								<div>
									{item.profileImage ? (
										<Image
											src={item.profileImage}
											alt={item.name}
											className="object-cover w-16 h-16 rounded-full"
											width={64}
											height={64}
											onError={(e) => {
												e.target.onerror = null;
												e.target.src = "/user-image.webp";
											}}
										/>
									) : (
										<div className="w-16 h-16 bg-gray-200 rounded-full" />
									)}
								</div>

								<div>
									<span className="text-sm leading-[1.6] font-normal font-staat">
										{item.name}
									</span>
								</div>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
