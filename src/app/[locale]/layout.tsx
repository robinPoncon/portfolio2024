import ResponsiveMenu from "../../components/ResponsiveMenu/ResponsiveMenu";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { useTranslations } from "next-intl";

export const metadata = {
	title: "Portfolio Robin Ponçon",
	description: ""
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	const t = useTranslations("Menu");

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className="bg-white dark:bg-darkBg">
				<Providers>
					{/* Navbar */}
					<ResponsiveMenu locale={locale} />
					<ThemeSwitcher />
					<LocaleSwitcher />
					<main className="flex flex-col flex-1 max-w-6xl w-full  ">{children}</main>
					{/* Footer */}
				</Providers>
			</body>
		</html>
	);
}
