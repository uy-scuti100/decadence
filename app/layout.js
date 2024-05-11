import { Inter, Open_Sans, Staatliches } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import Floating from "@/components/floating";

const staatliches = Staatliches({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-staat",
});
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const open_sans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-open-sans",
});

const icons = [
	{ rel: "icon", url: "/favicon-32x32.png" },
	{ rel: "icon", url: "/favicon-16x16.png" },
	{ rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
];

const manifest = "/manifest.json";
export const metadata = {
	title: "Decadence Hair and Beauty",
	description:
		"Central London's Most Favourite Boutique For Hair & Beauty Since 2011.",
	openGraph: {
		type: "website",
		url: "https://andre-armani.vercel.app/",
		title: "",
		description:
			"Central London's Most Favourite Boutique For Hair & Beauty Since 2011.",
		siteName: "Andre Armani",
		images: [
			{
				url: "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-19/407372896_1340780169901417_933016704107870773_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=101&_nc_ohc=N7dwtXOD62UQ7kNvgE_ntHr&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAC0VK2qR1MCGWkTH3bgXC1esRs3Zht7zSb5r92VP0PDA&oe=664219B6&_nc_sid=10d13b",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@hexelstudio",
		creator: "@hussain_joe",
		title: "Decadence Hair and Beauty",
		description:
			"Central London's Most Favourite Boutique For Hair & Beauty Since 2011.",
		images:
			"https://scontent-ams4-1.cdninstagram.com/v/t51.2885-19/407372896_1340780169901417_933016704107870773_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=101&_nc_ohc=N7dwtXOD62UQ7kNvgE_ntHr&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAC0VK2qR1MCGWkTH3bgXC1esRs3Zht7zSb5r92VP0PDA&oe=664219B6&_nc_sid=10d13b",
	},
	robots: "index, follow",
	icons: icons,
	manifest: manifest,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${open_sans.variable} ${staatliches.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Floating />
				<Footer />
			</body>
		</html>
	);
}
