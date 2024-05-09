import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// icons
import EnvironmentIcon from "@/assets/svgs/environment";
import ShampooIcon from "@/assets/svgs/shampoo";
import StylistIcon from "@/assets/svgs/stylist";
import AttentionIcon from "@/assets/svgs/attention";
import Image from "next/image";

// images

import environ from "@/assets/images/environment.webp";
import attention from "@/assets/images/attention.webp";
import experience from "@/assets/images/experienced-stylist.webp";
import shampoo from "@/assets/images/shampoo.webp";
import Button from "@/components/button-component";
const whyChooseUsData = [
	{
		icon: <StylistIcon />,
		title: "Experienced Stylists",
		text: "Our team comprises seasoned barbers who bring a rich tapestry of expertise, honed over years of dedicated practice. Their passion for the craft shines through in every precise cut, every skillful trim, and every artful shave. you're assured of a grooming journey guided by mastery and delivered with a touch of passion.",
		image: experience,
	},
	{
		icon: <EnvironmentIcon />,
		title: "Relaxing environment",
		text: "Our barber shop is more than just a place for grooming; it's a haven of aesthetic harmony. Thoughtfully curated decor, warm lighting, and comfortable seating create an ambiance that's both inviting and serene. The colors, textures, and arrangement come together to create an atmosphere where every detail contributes to your sense of ease.",
		image: environ,
	},
	{
		icon: <AttentionIcon />,
		title: "attention to detail",
		text: "Every haircut, every shave, every grooming session is a canvas where the smallest details are perfected. From the precise alignment of a fade to the subtle nuances of a beard trim, our dedication to refining every element ensures that your look is just exceptional. Because it's in the details that true sophistication resides.",
		image: attention,
	},
	{
		icon: <ShampooIcon />,
		title: "premium grooming products",
		text: "Our shelves are stocked with a thoughtfully curated collection of premium grooming products that represent the pinnacle of quality. From renowned brands to artisanal creations, each product has been chosen to deliver results that match our commitment to excellence.",
		image: shampoo,
	},
];
export default function WhyChoseUs() {
	return (
		<section className="relative pb-40 bg-light-accent/20 choose_us_section">
			<div className="pt-24 maxxy">
				<div className="flex flex-col gap-10 pt-20">
					<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
						<div>
							<h3 className="tracking-wider text-center uppercase md:text-left text-accent">
								WHY CHOOSE OUR SHOP?
							</h3>
							<h2 className="text-3xl font-bold tracking-wider text-center md:text-5xl sm:text-left">
								OUR DIFFERENCES
							</h2>
						</div>

						<p className="justify-end flex-1 max-w-2xl text-base font-normal text-center md:text-right text-dark text-balance">
							Experience our unique approach to grooming – where personalized
							service meets skilled artistry. Discover a haven where style and
							individuality intertwine.
						</p>
					</div>

					{/* diffrences */}

					<div className="mt-20">
						<Accordion type="single" collapsible className="w-full">
							{whyChooseUsData.map((item, index) => (
								<AccordionItem
									key={index}
									value={`item-${index + 1}`}
									className="relative py-6 transition-all duration-1000 ease-linear hover:bg-light-accent/20 group"
								>
									<div className="absolute left-0 w-3 h-3 transition-all duration-500 ease-in-out rounded-full top-3 group-hover:top-2/3 group-hover:left-1/2 sm:group-hover:left-2/3 bg-accent group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 mix-blend-difference"></div>
									<AccordionTrigger>
										<div className="flex items-center gap-3 transition-all duration-500 ease-in-out hover:scale-95">
											<div className="relative">
												<span>{item.icon}</span>
											</div>
											<h4 className="text-2xl font-medium font-staat">
												{item.title}
											</h4>
										</div>
									</AccordionTrigger>
									<AccordionContent className="flex flex-col items-start justify-between gap-10 p-2 md:flex-row">
										<p className="flex-1 text-lg text-balance">{item.text}</p>
										<div className=" flex-1 w-full h-[200px]rounded-lg">
											<Image
												src={item.image}
												alt={item.title}
												className="object-cover w-full h-full"
											/>
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
			<div className="z-50 flex justify-center mt-20">
				<Button
					link={"https://www.fresha.com/providers/decadence-el3a9eor"}
					text={"Book Now"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
