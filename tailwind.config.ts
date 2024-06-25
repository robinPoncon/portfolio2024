import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundColor: {
				darkBg: "#2A1F77"
			},
			colors: {
				customPink: "#A332A2"
			}
		}
	},
	plugins: []
};
export default config;
