import LocaleSwitcher from "../_components/LocaleSwitcher/LocaleSwitcher";
import ResponsiveMenu from "../_components/ResponsiveMenu/ResponsiveMenu";
import ThemeSwitcher from "../_components/ThemeSwitcher/ThemeSwitcher";
import { IBM_Font } from "./fonts";
import "./globals.scss";
import { Providers } from "./providers";
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
			<body className={`bg-lightBg dark:bg-darkBg ${IBM_Font.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<ResponsiveMenu locale={locale} />
						<ThemeSwitcher />
						<LocaleSwitcher />
						<main className="flex flex-col flex-1 max-w-6xl w-full">{children}</main>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
