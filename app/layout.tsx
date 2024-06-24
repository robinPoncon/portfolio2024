import DarkModeToggle from "./components/DarkMode/DarkMode";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
	title: "Next.js 13 Dark Mode with Tailwind CSS",
	description: "Adding Dark mode in Next-js-13 App using Tailwind CSS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="fr"
			suppressHydrationWarning
		>
			<body
				className="min-h-screen mx-auto max-w-6xl flex flex-col bg-white 
        dark:bg-gray-900"
			>
				<Providers>
					{/* Navbar */}
					<main className="flex flex-col flex-1 max-w-6xl w-full  ">{children}</main>
					{/* Footer */}
				</Providers>
			</body>
		</html>
	);
}
