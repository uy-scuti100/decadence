import React from "react";
import HeroSection from "./_components/hero-section";
import Testimonials from "./_components/testimonials";
import ScheduleInfo from "./_components/schedule-info";
import Services from "./_components/services";
import Prices from "./_components/prices";
import Gallery from "./_components/gallery";
import WhyChoseUs from "./_components/why-choose-us";
import AboutUs from "./_components/about-us";
import Team from "./_components/team";
import Blog from "./_components/blog";
import VideoComponent from "./_components/videoComponent";

export default function page() {
	return (
		<div>
			<HeroSection />
			<ScheduleInfo />
			<VideoComponent />
			<Services />
			<Prices />
			<Gallery />
			<WhyChoseUs />
			<AboutUs />
			<Team />
			<Testimonials />
			<Blog />
		</div>
	);
}
