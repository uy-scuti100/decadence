"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MdGrid3X3, MdOutlineMenu } from "react-icons/md";
import Button from "./button-component";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [open]);

	const toggleNav = () => {
		setOpen((prev) => !prev);
	};
	return (
		<>
			<header className="fixed right-0 left-0 w-full  top-0 duration-500 ease-in-out transition-all z-[9999999] px-3 shadow-sm bg-white border-b">
				<nav className="flex items-center justify-between md:py-0">
					<Link href={"/"}>
						<Image
							src="/logo.jpeg"
							alt="Decadence Salon"
							width={100}
							height={100}
							className="object-contain md:w-[200px] md:h-[80px] w-[100px] h-[50px] "
						/>
					</Link>
					<ul className="items-center hidden gap-10 lg:flex">
						<Link href={"/"} className="relative">
							Home
							{pathname === "/" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/shop"} className="relative">
							Shop
							{pathname === "/shop" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/team"} className="relative">
							Team{" "}
							{pathname === "/team" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/pricing"} className="relative">
							Pricing{" "}
							{pathname === "/princing" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/products"} className="relative">
							Products{" "}
							{pathname === "/products" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-gradient-to-r from-zinc-400/0 via-accent to-zinc-400/0" />
							)}
						</Link>
						<Link href={"/galllery"} className="relative">
							Gallery{" "}
							{pathname === "/gallery" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/career"} className="relative">
							Career{" "}
							{pathname === "/career" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
						<Link href={"/contact"} className="relative">
							Contact{" "}
							{pathname === "/contact" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-fit" />
							)}
						</Link>
					</ul>
					<div className="items-center hidden lg:flex">
						<Button
							link={"https://www.fresha.com/providers/decadence-el3a9eor"}
							text="Unlock Beauty"
							showArrow={false}
						/>
					</div>

					<div className="cursor-pointer lg:hidden" onClick={toggleNav}>
						<MdOutlineMenu className="text-3xl sm:text-5xl" />
					</div>
				</nav>
				<nav
					className={`fixed inset-0  transition-all rounded-2xl duration-300 ease-linear  z-50 md:hidden w-full bg-white text-black} ${
						open ? " left-0 " : "left-[-150%]"
					}`}
				>
					<div className="flex items-center justify-between px-5 mt-6">
						<Image
							src="/logo.jpeg"
							alt="Decadence Salon"
							width={200}
							height={200}
							className=""
						/>
						<div className="cursor-pointer lg:hidden" onClick={toggleNav}>
							<FaTimes className="text-3xl sm:text-5xl" />
						</div>
					</div>
					<ul className="flex items-center justify-between gap-6 pt-10">
						<div className="flex flex-col gap-8 pl-12">
							<Link
								href={"/"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
							>
								Home
								{pathname === "/" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/shop"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
							>
								Shop
								{pathname === "/shop" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/team"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
							>
								Team
								{pathname === "/team" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/pricing"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
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
								onClick={toggleNav}
							>
								Products
								{pathname === "/products" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/galllery"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
							>
								Gallery
								{pathname === "/gallery" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/career"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
							>
								Career
								{pathname === "/career" && (
									<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
								)}
							</Link>
							<Link
								href={"/contact"}
								className="relative text-4xl w-fit"
								onClick={toggleNav}
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
								{/* <Link
									href={"https://twitter.com/hexelstudio"}
									target="_blank"
									className="uppercase socials"
								>
									Twitter
								</Link> */}
								<Link
									className="uppercase socials"
									href={"https://www.instagram.com/decadencesalon/"}
									target="_blank"
								>
									Instagram
								</Link>
								{/* <Link
									className="uppercase socials"
									href={
										"https://www.tiktok.com/@osirisdigitalagency?_t=8kmUDm1QO0c&_r=1"
									}
									target="_blank"
								>
									Tiktok
								</Link> */}
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
