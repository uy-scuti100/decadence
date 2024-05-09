import Button from "@/components/button-component";

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
];
export default function Services() {
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute md:bg-accent/30 bg-accent/20 h-[30vh] w-[50vh] top-10 right-0 -z-10 blur-[80px]" />
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h3 className="tracking-wider text-center uppercase md:text-left text-accent">
							Our Main services
						</h3>
						<h2 className="text-3xl font-bold tracking-wider text-center md:text-5xl sm:text-left">
							OUR SPECIALITIES
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
				<div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-2">
					{videos &&
						videos.map((item, i) => {
							return (
								<div
									className="relative w-full h-[400px] space-x-8 space-y-8 md:flex md:space-x-0 md:space-y-0"
									key={i}
								>
									<video
										autoPlay
										loop
										muted
										playsInline
										className="object-cover w-full h-full bg-center bg-cover rounded-3xl "
									>
										<source src={item.link} type="video/mp4" />
									</video>
									<div className="absolute flex flex-col items-center justify-center gap-2 border-accent border-l-[8px] pl-3  sm:left-4 bottom-5 sm:bottom-3">
										<h1 className="text-3xl font-bold text-white">
											{item.type}
										</h1>
									</div>
								</div>
							);
						})}
				</div>
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

// CUTS, STYLING & COLOURING

// <iframe
// src={
//     "https://decadencesalon.co.uk/video/decadence_video.mp4"
// }
// title={item.type}
// frameBorder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowFullScreen
// className="object-cover w-full h-full"
// />
