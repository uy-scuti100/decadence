import Button from "@/components/button-component";
import { PriceTable } from "@/components/ui/price-table";
import React from "react";

export default function Prices() {
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute bg-accent/20 h-[30vh] w-[50vh] -top-32 left-1/3 -z-10 blur-[80px]"></div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h2 className="text-3xl font-bold tracking-wider text-center uppercase md:text-5xl sm:text-left">
							Our Prices
						</h2>
					</div>

					<p className="justify-end flex-1 max-w-2xl font-normal text-center md:text-right text-dark text-balance">
						Experience luxury grooming with our diverse services designed just
						for you. Discover clear pricing aligned with the value you get.
					</p>
				</div>

				<div className="mt-10">
					<PriceTable />
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<Button
					link={"/prices"}
					text={"View Detailed Services"}
					className={"px-16 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
