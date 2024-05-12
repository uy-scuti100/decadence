"use client";
import Image from "next/image";
import Link from "next/link";

import { MdOutlineMenu } from "react-icons/md";
import Button from "./button-component";
import { usePathname } from "next/navigation";
import { useNavContext } from "@/context";

export default function Navbar() {
	const { toggleOpen } = useNavContext();
	const pathname = usePathname();
	return (
		<div className="relative">
			<header className="fixed top-0 duration-500 ease-in-out transition-all z-[9999999] px-3 bg-white left-0 right-0 sm:mx-5 md:mx-0 border-b shadow-md">
				<nav className="flex items-center justify-between">
					<Link href={"/"}>
						<img
							src="/logo.jpeg"
							alt="Decadence Salon"
							width={100}
							height={100}
							className="object-contain md:w-[150px] md:h-[80px] w-[100px] h-[50px] "
						/>
					</Link>
					<ul className="items-center hidden gap-10 lg:flex">
						<Link href={"/"} className="relative">
							{" "}
							Home
							{pathname === "/" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/shop"} className="relative">
							Shop
							{pathname === "/shop" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/team"} className="relative">
							Team{" "}
							{pathname === "/team" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/pricing"} className="relative">
							Pricing{" "}
							{pathname === "/princing" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/products"} className="relative">
							Products{" "}
							{pathname === "/products" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/galllery"} className="relative">
							Gallery{" "}
							{pathname === "/gallery" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/career"} className="relative">
							Career{" "}
							{pathname === "/career" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
							)}
						</Link>
						<Link href={"/contact"} className="relative">
							Contact{" "}
							{pathname === "/contact" && (
								<span className="absolute -bottom-px left-0 right-0 h-[3px] bg-accent w-full" />
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

					<div className="cursor-pointer lg:hidden" onClick={toggleOpen}>
						<MdOutlineMenu className="text-3xl sm:text-5xl" />
					</div>
				</nav>
			</header>
		</div>
	);
}
