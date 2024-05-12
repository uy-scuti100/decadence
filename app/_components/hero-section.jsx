"use client";

import Button from "@/components/button-component";
import Navbar from "@/components/header";

export default function HeroSection() {
	return (
		<div className="relative w-full min-h-screen overflow-hidden bg-center bg-no-repeat bg-cover bg-placeholder">
			{/* <Navbar /> */}
			<div className="absolute left-0 z-50 md:left-12 bottom-12">
				<h1
					style={{ fontSize: "clamp(2.5rem, 1.6713rem + 3.5359vw, 4.5rem)" }}
					className="hero__title_animation mb-5 ml-3 text-white capitalize text-balance w-[90%] font-staat"
				>
					Central London's most {""}
					<span className="px-2 bg-white rounded-xl text-accent font-staat">
						favourite
					</span>{" "}
					boutique
					<br className="hidden sm:block" /> for hair & beauty Since{" "}
					<span className="px-2 bg-white rounded-xl text-accent font-staat">
						2011.
					</span>
				</h1>
				<p className="mb-8 ml-3 text-sm italic font-bold leading-tight text-white uppercase hero__subtitle_animation">
					We Are The best you can find in Bloomsburg
				</p>
				<div className="flex items-center mx-3 hero__button_animation">
					<Button
						link={"https://www.fresha.com/providers/decadence-el3a9eor"}
						text={"Book an Appointment"}
						className={"sm:px-20 w-full sm:w-auto px-0"}
					></Button>
				</div>
			</div>

			<div className="absolute inset-x-0 bottom-0 w-full h-full bg-black bg-opacity-30" />
			<div className="absolute inset-x-0 bottom-0 bg-opacity-50 top-1/2 bg-gradient-to-b from-transparent to-black" />
		</div>
	);
}

{
	/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11L12 14L9 11" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */
}
