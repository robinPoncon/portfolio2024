import CookieBar from "../_components/CookieBar/CookieBar";
import FixedMenu from "../_components/FixedMenu/FixedMenu";
import Footer from "../_components/Footer/Footer";
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
						<FixedMenu />
						<main className="flex flex-col flex-1 max-w-6xl w-full">{children}</main>
						<CookieBar />
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
