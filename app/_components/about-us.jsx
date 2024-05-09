import Button from "@/components/button-component";

export default function AboutUs() {
	return (
		<section className="relative mt-20 transition-all duration-500 bg-fixed bg-center bg-no-repeat bg-cover bg-about">
			<div className="absolute inset-0 z-20 bg-black/80" />

			<div className="flex flex-col w-full gap-32 py-20 maxxy">
				<div className="flex flex-row items-end justify-between w-full gap-10 ">
					<div className="z-[50]">
						<h3 className="tracking-wider uppercase text-accent">our story</h3>
						<h2 className="text-2xl font-bold tracking-wider text-center text-white md:text-5xl sm:text-left">
							ABOUT US
						</h2>
					</div>

					<p className="justify-end text-2xl uppercase md:text-right text-accent font-staat z-[50] ">
						est. 2011
					</p>
				</div>
				<div className=" z-[50] flex flex-col w-full gap-10">
					<div>
						<p className="pl-5 sm:text-lg text-white border-l-[3px] border-accent text-balance sm:max-w-[700px]">
							Forget just haircuts and styles – our stylists are hair
							architects. They wield their artistry with meticulous care,
							crafting your perfect look. At Decadence, warmth and style go
							hand-in-hand. We invite you to unwind and experience a
							transformation that's as comfortable as it is captivating.
						</p>
					</div>
					<div>
						<p className="pl-5 sm:text-lg text-white border-l-[3px] border-accent text-balance sm:max-w-[700px] ">
							At Decadence, we transform your look into a masterpiece. We
							celebrate heritage while embracing fresh styles, using timeless
							methods and cutting-edge trends to create your ideal image.
						</p>
					</div>
					<div className="flex justify-center py-5">
						<Button
							link={"/about-us"}
							text={"Learn More about Us"}
							className={"px-20 whitespace-nowrap"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
