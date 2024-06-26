import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
	title: "Portfolio Robin Ponçon",
	description: ""
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="fr"
			suppressHydrationWarning
		>
			<body className="bg-white dark:bg-darkBg">
				<Providers>
					{/* Navbar */}
					<ResponsiveMenu />
					<ThemeSwitch />
					<main className="flex flex-col flex-1 max-w-6xl w-full  ">{children}</main>
					{/* Footer */}
				</Providers>
			</body>
		</html>
	);
}
