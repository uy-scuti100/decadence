import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import Button from "./button-component";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="relative mt-40">
			{" "}
			<div className="absolute bg-accent/20 h-[30vh] w-[50vh] -top-32 left-1/3 -z-10 blur-[70px]"></div>
			<div className="container mx-auto">
				<div className="text-center ">
					<h2 className="mb-6 font-semibold uppercase h2">
						Subscribe to our newsletter
					</h2>
					<p className="text-dark">
						Be the first to get the latest news about trends, promotions, and
						much more
					</p>
				</div>
				{/* form */}
				<form className="flex flex-col items-center justify-center w-full max-w-3xl gap-5 mx-auto my-14">
					<input
						type="text"
						placeholder="Your email address"
						className="text-center h-[50px] rounded-[8px] w-full outline-none px-6 text-primary border-black border"
					/>
					<Button
						link={""}
						className={
							"w-max px-10 whitespace-nowrap text-white bg-accent border-none"
						}
						text={"Claim your spot now!"}
					></Button>
				</form>
				<div className="flex mx-auto mb-16 text-lg gap-x-12 max-w-max">
					<a
						href={"https://www.instagram.com/decadencesalon/"}
						rel="noreferrer"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:scale-95 hover:text-accent"
					>
						<FaInstagram />
					</a>
					<a
						href={"https://www.instagram.com/decadencesalon/"}
						rel="noreferrer"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:scale-95 hover:text-accent"
					>
						<FaFacebook />
					</a>
					<a
						href="#"
						rel="noreferrer"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:scale-95 hover:text-accent"
					>
						<FaYoutube />
					</a>
					<a
						href="#"
						rel="noreferrer"
						target="_blank"
						className="transition-all duration-300 ease-in-out hover:scale-95 hover:text-accent"
					>
						<FaTiktok />
					</a>
				</div>
				{/* links */}
				<div className="flex flex-col gap-6 sm:flex-row justify-evenly mb-9">
					<div className="flex flex-col gap-4">
						<h2 className="pb-3 text-lg tracking-wider transition-all duration-300 ease-in-out ">
							QUICK LINKS
						</h2>
						<div className="flex flex-col gap-5 ">
							<Link
								href={"/"}
								className="inline text-sm capitalize font-inter sm:text-base"
							>
								Home
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Shop
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Team
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Pricing
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Products
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Gallery
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Career
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Contact
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="pb-3 text-lg tracking-wider transition-all duration-300 ease-in-out ">
							SERVICES
						</h2>
						<div className="flex flex-col gap-5 ">
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Hair Cuts
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Styling
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Colouring
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Beauty Therapy
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Body Massage
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h2 className="pb-3 text-lg tracking-wider transition-all duration-300 ease-in-out ">
							LEGAL
						</h2>
						<div className="flex flex-col gap-5 ">
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Privacy Policy
							</Link>
							<Link
								href={"/"}
								className="text-sm underline capitalize font-inter sm:text-base"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>
				{/* social buttons */}
			</div>
			<div className="py-10 bprder-t border-t-primary">
				<div className="container mx-auto">
					<div className="text-xs text-center opacity-75">
						copyright &copy; Decadence Hair and Beauty{" "}
						{new Date().getFullYear()}. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}
