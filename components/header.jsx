"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdOutlineMenu } from "react-icons/md";
import Button from "./button-component";

export default function Navbar() {
	return (
		<header className="absolute z-[9999999999] w-full px-3 mx-auto bg-white ">
			<nav className="relative flex items-center justify-between py-2 md:py-0">
				<Link href={"/"}>
					<Image
						src="/logo.jpeg"
						alt="Decadence Salon"
						width={100}
						height={100}
						className="object-contain md:w-[200px] md:h-[100px] w-[100px] h-[50px] "
					/>
				</Link>
				<ul className="items-center hidden gap-10 lg:flex">
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>Shop</Link>
					<Link href={"/"}>Team</Link>
					<Link href={"/"}>Pricing</Link>
					<Link href={"/"}>Products</Link>
					<Link href={"/"}>Gallery</Link>
					<Link href={"/"}>Career</Link>
					<Link href={"/"}>Contact</Link>
				</ul>
				<div className="items-center hidden lg:flex">
					<Button
						link={"https://www.fresha.com/providers/decadence-el3a9eor"}
						text="Unlock Beauty"
						showArrow={false}
					/>
				</div>

				<div className="p-1 border rounded-full cursor-pointer border-accent lg:hidden ">
					<MdOutlineMenu className="text-3xl sm:text-5xl" />
				</div>
			</nav>
		</header>
	);
}

{
	/* <button className="flex items-center justify-center px-6 py-3 text-white transition-all duration-500 ease-in-out bg-black border border-black rounded-full hover:bg-opacity-90 ">
						Unlock Beauty
					</button> */
}
