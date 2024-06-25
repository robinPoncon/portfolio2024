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
			<body
				className="min-h-screen mx-auto max-w-6xl flex flex-col bg-white 
        dark:bg-darkBg"
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
