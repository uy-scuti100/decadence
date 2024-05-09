import React from "react";
import blogInfo from "@/utils/data/bloginfo.json";
import Image from "next/image";
import Button from "@/components/button-component";

export default function Blog() {
	return (
		<section className="relative mt-40 maxxy">
			<div className="absolute bg-accent/20 h-[30vh] w-[50vh] -top-32 left-1/3 -z-10 blur-[80px]"></div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
					<div>
						<h3 className="tracking-wider text-center uppercase md:text-left text-accent">
							LATEST FROM OUR BLOG
						</h3>
						<h2 className="text-3xl font-bold tracking-wider text-center md:text-5xl sm:text-left">
							LATEST ARTICLES
						</h2>
					</div>

					<p className="justify-end flex-1 max-w-2xl font-normal text-center md:text-right text-dark text-balance">
						Explore the art of grooming, refine your individual style, and
						project unshakeable confidence.
					</p>
				</div>

				{/* =blogs */}
				{
					<div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 ">
						{blogInfo.map((blog, i) => {
							const { title, image, date } = blog;
							return (
								<div key={i} className="cursor-pointer group">
									<div className="relative h-[300px] mb-4 group-hover:scale-95 transition-all duration-300 ease-linear">
										<Image
											src={image}
											alt={title}
											fill
											className="object-cover transition-all duration-300 ease-linear object-tp rounded-3xl group-hover:grayscale"
										/>
									</div>
									<small>
										<p className="pb-1 text-xs text-right transition-all duration-300 ease-linear group-hover:scale-95">
											{date}
										</p>
									</small>
									<div className="py-2 pl-5 transition-all duration-300 ease-linear border-l-4 bg-light-accent/20 group-hover:scale-95 hover:text-accent border-accent">
										<h2 className="text-2xl font-bold font-staat">{title}</h2>
									</div>
								</div>
							);
						})}
					</div>
				}
			</div>
			<div className="flex justify-center mt-20">
				<Button
					link={"/articles"}
					text={"Browse all articles"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
