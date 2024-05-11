/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {
				placeholder:
					"url('https://decadencesalon.co.uk/wp-content/uploads/2017/02/decadence-salon-pic-14.jpg')",
				placeholders: "url('/place-holder.png')",
				about: "url('/black and white.webp')",
			},
			colors: {
				black: "#000000",
				accent: "#C89114",
				dark: "#0F172A",
				"light-accent": "#E0D297",
			},
			fontFamily: {
				inter: ["var(--font-inter), sans-serif"],
				staat: ["var(--font-staat), serif"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.5s ease-out",
				"accordion-up": "accordion-up 0.5s ease-out",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

// function addVariablesForColors({ addBase, theme }) {
// 	let allColors = flattenColorPalette(theme("colors"));
// 	let newVars = Object.fromEntries(
// 		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
// 	);

// 	addBase({
// 		":root": newVars,
// 	});
// }
