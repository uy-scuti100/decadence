import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Button({ text, link, className }) {
	return (
		<Link
			href={link}
			className={cn(
				"relative flex items-center justify-center gap-5 px-6 py-3 overflow-hidden text-black transition-all duration-500 ease-in-out border border-black rounded-full ",
				className
			)}
		>
			<span className="z-[999] uppercase tracking-[0.1em]">{text}</span>
		</Link>
	);
}
