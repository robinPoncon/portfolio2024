import { Metadata } from "next";
import CookieBar from "../_components/CookieBar/CookieBar";
import FixedMenu from "../_components/FixedMenu/FixedMenu";
import Footer from "../_components/Footer/Footer";
import VerticalMenu from "../_components/VerticalMenu/VerticalMenu";
import { FlashMessagesProvider } from "../_context/FlashMessagesContext";
import { LoaderProvider } from "../_context/LoaderContext";
import { IBM_Font } from "./fonts";
import "./globals.scss";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
	metadataBase: new URL("https://portfolio-robin-poncon.com"),
	title: "Portfolio - Robin Ponçon",
	description:
		"Découvrez le portfolio de Robin Ponçon, développeur fullstack spécialisé en React, NextJS, TypeScript et Symfony. Consultez ses projets, expériences professionnelles et compétences techniques.",
	keywords: [
		"développeur web",
		"développeur application",
		"développeur front-end",
		"développeur fullstack",
		"React",
		"NextJS",
		"JavaScript",
		"TypeScript",
		"Tailwind",
		"Symfony",
		"Twig",
		"HTML5",
		"SCSS",
		"jQuery",
		"PHP",
		"MySQL",
		"Bordeaux",
		"langages programmation"
	],
	openGraph: {
		title: "Portfolio - Robin Ponçon",
		description:
			"Découvrez le portfolio de Robin Ponçon, développeur fullstack spécialisé en React, NextJS, TypeScript et Symfony. Consultez ses projets, expériences professionnelles et compétences techniques.",
		images: [
			{
				url: "/images/image_partage-reseaux.png",
				alt: "image de couverture représentant le site internet"
			}
		]
	},
	robots: "all"
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
					<FlashMessagesProvider>
						<LoaderProvider>
							<Providers>
								<FixedMenu />
								<VerticalMenu />
								<main className="flex flex-col flex-1 max-w-6xl w-full mx-auto">
									{children}
								</main>
								<CookieBar />
								<Footer />
							</Providers>
						</LoaderProvider>
					</FlashMessagesProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
