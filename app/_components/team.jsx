import Button from "@/components/button-component";
import Image from "next/image";

const masters = [
	{
		image: "/team-1.webp",
		name: "Archie Miglan",
		info: "Salon Owner | Creative & Colour Director",
	},
	{
		image: "/team-2.webp",
		name: "Mark Danzel",
		info: "Creative Director",
	},
	{
		image: "/team-3.webp",
		name: "Iva Vrdoljak",
		info: "Style Director | Top Colourist",
	},
	{
		image: "/team-4.webp",
		name: "Vera Kapri",
		info: "Top Stylist | Colourist",
	},
	{
		image: "/team-5.webp",
		name: "Jean Hokami",
		info: "Senior Stylist | Colourist",
	},
	{
		image: "/team-6.webp",
		name: "Alex Nedic",
		info: "Senior Stylist | Colourist",
	},
	{
		image: "/team-7.webp",
		name: "Mayda",
		info: "Beauty Therapist",
	},
	{
		image: "/team-8.webp",
		name: "Natalia",
		info: "Beauty Therapist",
	},
	{
		image: "/team-9.webp",
		name: "Katalin Akos",
		info: "Front Of House | Salon Manager",
	},
];
export default function Team() {
	return (
		<section className="relative pb-32 mb-20 maxxy bg-light-accent/20 choose_us_section">
			<div className="pt-24 ">
				<div className="flex flex-col gap-10 pt-20">
					<div className="flex flex-col items-center justify-between w-full gap-10 md:flex-row">
						<div>
							<h3 className="tracking-wider text-center uppercase md:text-left text-accent">
								Our team
							</h3>
							<h2 className="text-3xl font-bold tracking-wider text-center uppercase md:text-5xl sm:text-left">
								Meet the stylists
							</h2>
						</div>

						<p className="justify-end flex-1 max-w-2xl text-base font-normal text-center md:text-right text-dark text-balance">
							Our team of expert stylists brings together passion, skill, and
							dedication to elevate your grooming experience.
						</p>
					</div>
				</div>
			</div>
			{/* teams */}

			{
				<div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 ">
					{masters.map((master, i) => {
						const { name, image, info } = master;
						return (
							<div key={i} className="group">
								<div className="relative h-[400px] mb-4 group-hover:scale-95 transition-all duration-300 ease-linear">
									<Image
										src={image}
										alt={name}
										fill
										className="object-cover bg-top rounded-3xl"
									/>
								</div>
								<div className="py-2 pl-5 bg-light-accent/20 group-hover:scale-95  border-l-[3px] border-accent transition-all duration-300 ease-linear">
									<h2 className="pb-2 text-xl font-bold font-staat">{name}</h2>
									<p className="pb-2 text-xs uppercase">{info}</p>
								</div>
							</div>
						);
					})}
				</div>
			}
			<div className="flex justify-center mt-20">
				<Button
					link={"/team"}
					text={"Learn more about our team"}
					className={"px-20 whitespace-nowrap"}
				/>
			</div>
		</section>
	);
}
