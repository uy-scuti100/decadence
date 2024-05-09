"use client";
import React, { useState } from "react";

export default function Floating() {
	const [showButton, setShowButton] = useState(false);
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", function () {
			var currentPosition =
				window.scrollY || document.documentElement.scrollTop;

			var viewportHeight = window.innerHeight;

			var threshold = viewportHeight / 2;

			if (currentPosition > threshold) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}
	return (
		<div
			className={`${
				showButton ? "opacity-1 translate-y-0" : "opacity-0 translate-y-[-200%]"
			} fixed left-6 bottom-10 pointer-events-none z-[99999]">
			<div className="relative w-20 h-20 border rounded-full sm:w-32 sm:h-32 border-accent transition-all duration-1000 ease-in-out`}
		>
			<div>
				<img
					src="/rotating.png"
					alt=""
					className="object-cover w-full h-full animate-spin-slow"
				/>
				<img
					src="/emblem.png"
					alt=""
					className="absolute object-cover w-12 h-12 -translate-x-1/2 -translate-y-1/2 sm:w-20 sm:h-20 top-1/2 left-1/2"
				/>
			</div>
		</div>
	);
}
