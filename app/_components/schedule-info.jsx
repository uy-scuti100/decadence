"use client";
import Link from "next/link";
import { CiClock2, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function ScheduleInfo() {
	const scrollRef = useRef(null);
	return (
		<section className="mt-40">
			<div
				ref={scrollRef}
				className="grid items-center grid-cols-1 gap-10 px-5 mx-auto cards_wrapper place-items-center sm:px-8 md:grid-cols-2 lg:grid-cols-3"
			>
				<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark">
					<h1 className="pb-8 text-6xl text-accent">
						<CiLocationOn />
					</h1>
					<div className="flex flex-col gap-2">
						<p className="text-base font-medium">36 Store Street</p>
						<p className="text-base font-medium">London</p>
						<p className="text-base font-medium ">WC1E 7BS</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark ">
					<h1 className="pb-8 text-6xl text-accent">
						<CiMail />
					</h1>
					<div className="flex flex-col items-center justify-center gap-2 ">
						<Link
							href={"mailto:booking@decadencesalon.co.uk"}
							className="flex items-center gap-1 text-base font-medium font-inter "
						>
							<span>
								<CiMail />
							</span>
							booking@decadencesalon.co.uk
						</Link>
						<Link
							href={"tel:4402076361328"}
							className="flex items-center gap-1 text-base"
						>
							<span>
								{" "}
								<CiPhone />{" "}
							</span>{" "}
							<p className="font-medium font-inter">+44 (0)20 7636 1328</p>
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark ">
					<h1 className="p-8 text-6xl text-accent">
						<CiClock2 />
					</h1>
					<div className="flex flex-col gap-2 tracking-wider">
						<p className="text-base font-medium">
							Monday to Friday: 9am - 8pm{" "}
						</p>
						<p className="text-base font-medium">Saturday: 9am - 6pm</p>
						<p className="text-base font-medium">UK Bank Holidays: Closed</p>
					</div>
				</div>
			</div>
		</section>
	);
}

{
	/* <div className="grid items-center grid-cols-1 gap-10 px-5 mx-auto cards_wrapper place-items-center sm:px-8 md:grid-cols-2 lg:grid-cols-3">
	<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark">
		<h1 className="pb-8 text-6xl text-accent">
			<CiLocationOn />
		</h1>
		<div className="flex flex-col gap-2">
			<p className="text-base font-medium">36 Store Street</p>
			<p className="text-base font-medium">London</p>
			<p className="text-base font-medium ">WC1E 7BS</p>
		</div>
	</div>
	<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark ">
		<h1 className="pb-8 text-6xl text-accent">
			<CiMail />
		</h1>
		<div className="flex flex-col items-center justify-center gap-2 ">
			<Link
				href={"mailto:booking@decadencesalon.co.uk"}
				className="flex items-center gap-1 text-base font-medium font-inter "
			>
				<span>
					<CiMail />
				</span>
				booking@decadencesalon.co.uk
			</Link>
			<Link
				href={"tel:4402076361328"}
				className="flex items-center gap-1 text-base"
			>
				<span>
					{" "}
					<CiPhone />{" "}
				</span>{" "}
				<p className="font-medium font-inter">+44 (0)20 7636 1328</p>
			</Link>
		</div>
	</div>
	<div className="flex flex-col items-center justify-center w-full h-full px-4 py-10 text-center rounded-lg shadow-xl bg-gradient-to-br from-white to-light-accent/10 text-dark ">
		<h1 className="p-8 text-6xl text-accent">
			<CiClock2 />
		</h1>
		<div className="flex flex-col gap-2 tracking-wider">
			<p className="text-base font-medium">Monday to Friday: 9am - 8pm </p>
			<p className="text-base font-medium">Saturday: 9am - 6pm</p>
			<p className="text-base font-medium">UK Bank Holidays: Closed</p>
		</div>
	</div>
</div>;

<motion.div className="grid items-center grid-cols-1 gap-10 px-5 mx-auto cards_wrapper place-items-center sm:px-8 md:grid-cols-2 lg:grid-cols-3">
	<motion.div
		variants={cardVariants}
		initial="hidden"
		animate="visible"
	></motion.div>
</motion.div>; */
}
