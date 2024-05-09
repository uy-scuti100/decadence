import { InfiniteMovingCards } from "@/components/moving-cards";

import data from "@/utils/data/rev.json";
import data2 from "@/utils/data/rev2.json";
import data3 from "@/utils/data/rev3.json";

export default function Testimonials() {
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute md:bg-accent/30 bg-accent/20 h-[20vh] w-[50vh] top-20 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px]" />
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h3 className="tracking-wider text-center uppercase md:text-left text-accent">
							what clients say
						</h3>
						<h2 className="text-3xl font-bold tracking-wider text-center md:text-5xl sm:text-left">
							Clients Feedback
						</h2>
					</div>
					<p className="justify-end flex-1 max-w-2xl text-base font-normal text-center md:text-right text-dark text-balance">
						See what our clients have to say about their extraordinary
						experiences at our salon. Real stories & real satisfaction.
					</p>
				</div>

				{/* testimonials */}

				<div>
					<InfiniteMovingCards items={data} speed="slow" />
					<InfiniteMovingCards items={data2} speed="slow" direction="right" />
					<InfiniteMovingCards items={data3} speed="slow" />
				</div>
			</div>
		</section>
	);
}
