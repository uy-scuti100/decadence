import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Button({ text, link, className, showArrow = true }) {
	return (
		<Link
			href={link}
			className={cn(
				"relative flex items-center justify-center gap-5 px-6 py-3 overflow-hidden text-white transition-all duration-500 ease-in-out border border-white rounded-full bg-accent group hover:bg-opacity-90",
				className
			)}
		>
			<span className="z-[999] uppercase tracking-[0.1em]">{text}</span>

			{showArrow && (
				<MdArrowRightAlt className="w-6 h-6 z-[999] group-hover:-rotate-45 transition-transform duration-500 ease-in-out" />
			)}

			<span className="absolute inset-0 transition-all duration-500 ease-in-out -translate-x-full rounded-full z-[100] group-hover:translate-x-0 bg-black "></span>

			<span className="absolute inset-0 transition-all duration-500 ease-in-out -translate-x-full rounded-full z-[100] group-hover:translate-x-0 bg-black " />
		</Link>
	);
}

// className={cn(
//     "min-w-0 shrink-0 grow-0 basis-full",
//     orientation === "horizontal" ? "pl-4" : "pt-4",
//     className
// )}
