import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundColor: {
				darkBg: "#121212",
				greyBg: "#252525",
				lightBg: "#e4e5f1",
				lighterBg: "#f4f5f9",
				customViolet: "#5440d1",
				customVioletLighter: "#988ce3",
				footerBg: "#0f0b2c"
			},
			colors: {
				customPink: "#A332A2",
				customViolet: "#5440d1",
				customVioletLighter: "#988ce3",
				lightBg: "#e4e5f1",
				lighterBg: "#f4f5f9"
			}
		},
		fontFamily: {
			sans: ["Helvetica", "sans-serif"]
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px"
		}
	},
	plugins: []
};
export default config;
