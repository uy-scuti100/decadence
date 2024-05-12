"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useNavContext } from "@/context";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function MobileNav() {
	const pathname = usePathname();
	const { open, toggleOpen } = useNavContext();
	return (
		<nav>
			{open && (
				<nav
					className={`absolute inset-0 z-[99999999999] md:hidden w-full bg-white text-black ${
						open
							? " left-0 transition-all duration-300 ease-linear "
							: "left-[-150%] transition-all duration-300 ease-linear"
					}`}
				>
					<div className="flex items-center justify-between px-5 border border-b-2 ">
						<img
							src="/logo.jpeg"
							alt="Decadence Salon"
							width={200}
							height={200}
							className="object-contain w-[100px] h-[80px]"
						/>
						<div className="cursor-pointer lg:hidden" onClick={toggleOpen}>
							<FaTimes className="text-2xl " />
						</div>
					</div>
					<ul className="flex items-center justify-between gap-6 pt-10">
						<div className="flex flex-col gap-8 pl-12">
							<Link
								href={"/"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Home
								{pathname === "/" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/shop"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Shop
								{pathname === "/shop" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/team"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Team
								{pathname === "/team" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/pricing"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Pricing
								{pathname === "/pricing" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
						</div>
						<div className="flex flex-col gap-8 pr-12">
							<Link
								href={"/products"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Products
								{pathname === "/products" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/galllery"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Gallery
								{pathname === "/gallery" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/career"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Career
								{pathname === "/career" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/contact"}
								className="relative text-4xl w-fit"
								onClick={toggleOpen}
							>
								Contact
								{pathname === "contact" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
						</div>
					</ul>
					<div>
						<div className="absolute right-0 px-10 bottom-5 sm:bottom-3">
							<div className="flex items-center justify-center gap-4 text-2xl md:text-xl">
								<Link
									className="uppercase socials"
									href={"https://www.instagram.com/decadencesalon/"}
									target="_blank"
								>
									Instagram
								</Link>
							</div>
						</div>
					</div>
				</nav>
			)}
		</nav>
	);
}
