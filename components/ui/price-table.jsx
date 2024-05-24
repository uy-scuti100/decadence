"use client";
import { useState, useEffect } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const invoices = [
	{
		invoice: "Short Cut",
		totalAmount: "£40",
	},
	{
		invoice: "Wash, Cut + Blow Dry",
		totalAmount: "£65",
	},
	{
		invoice: "Wash and blow dry",
		totalAmount: "£40",
	},
	{
		invoice: "Airtouch ",
		totalAmount: "£250",
	},
	{
		invoice: "Head Balayage",
		totalAmount: "£225",
	},
	{
		invoice: "Head Highlights",
		totalAmount: "£255",
	},
	{
		invoice: "All Over Toner",
		totalAmount: "£55",
	},
];
const invoicesTwo = [
	{
		invoice: "T-Section",
		totalAmount: "£115",
	},
	{
		invoice: "Gloss",
		totalAmount: "£100",
	},
	{
		invoice: "Regrowth Lightener",
		totalAmount: "£100",
	},
	{
		invoice: "Kevin Murphy Exp.",
		totalAmount: "£29",
	},
	{
		invoice: "K18 Mist & Mask",
		totalAmount: "£35",
	},
	{
		invoice: "Olaplex Express",
		totalAmount: "£35",
	},
	{
		invoice: "Nanokeratin Express ",
		totalAmount: "£89",
	},
];

export function PriceTable() {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		isClient && (
			<Table className="flex flex-col items-center justify-between gap-3  md:flex-row">
				<TableBody className="flex flex-col items-center justify-between w-full">
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice} className="w-full">
							<div className="relative flex justify-between w-full text-lg">
								<TableCell className="font-medium font-staat">
									{invoice.invoice}
								</TableCell>
								<div className="absolute w-full h-px -translate-x-1/2 -translate-y-1/2 left1/2 top-1/2" />
								<TableCell className="text-lg text-right text-black font-staat">
									{invoice.totalAmount}
								</TableCell>
							</div>
						</TableRow>
					))}
				</TableBody>
				{/* absolute h-px -translate-x-0 sm:-translate-x-1/2 md:-translate-x-[40%] -translate-y-1/2 bg-black top-1/2 left-1/2 md:w-[70%] sm:w-[40%] w-[25%] */}
				<TableBody className="flex-col items-center hidden w-full md:flex ">
					{invoicesTwo.map((invoice) => (
						<TableRow key={invoice.invoice} className="w-full ">
							<div className="relative flex justify-between w-full text-lg">
								<TableCell className="font-medium font-staat">
									{invoice.invoice}
								</TableCell>
								<div className="absolute w-full h-px -translate-x-1/2 -translate-y-1/2 left1/2 top-1/2" />
								<TableCell className="text-lg text-right text-black font-staat">
									{invoice.totalAmount}
								</TableCell>
							</div>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	);
}

// md:w-[55%] sm:w-[40%] w-[50%] px-10  -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2
