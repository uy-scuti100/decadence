/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "scontent.cdninstagram.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "www.google.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
