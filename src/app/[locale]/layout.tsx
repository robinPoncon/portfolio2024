import ResponsiveMenu from "../../components/ResponsiveMenu/ResponsiveMenu";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
	title: "Portfolio Robin Ponçon",
	description: ""
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className="bg-white dark:bg-darkBg">
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<ResponsiveMenu
							namespace="Menu"
							locale={locale}
						/>
						<ThemeSwitcher />
						<LocaleSwitcher />
						<main className="flex flex-col flex-1 max-w-6xl w-full">{children}</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
