import React from "react";
import HeroVideo from "./hero-video";
import Button from "@/components/button-component";

export default function VideoComponent() {
	return (
		<section className="relative hidden mt-40 md:lbock">
			<div>
				<div className="flex flex-col items-center justify-center mt-20">
					<h2 className="pb-10 text-4xl text-center font-staat text-balance max-w-[600px]">
						The Proof is in the Smiles: Watch Our Clients Light Up as Our
						Stylists Work Their Magic.
					</h2>
					<div className=" h-[70vh] w-full">
						<HeroVideo />
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-20">
				<Button
					link={"https://www.fresha.com/providers/decadence-el3a9eor"}
					text={"Book an appointment"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
