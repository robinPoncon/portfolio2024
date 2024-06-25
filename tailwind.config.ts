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
				darkBg: "#0a071d",
				customViolet: "#5440d1"
			},
			colors: {
				customPink: "#A332A2",
				customViolet: "#5440d1"
			}
		}
	},
	plugins: []
};
export default config;
