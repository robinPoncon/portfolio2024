import Image from "next/image";
import "./[locale]/globals.scss";
import FixedMenu from "./_components/FixedMenu/FixedMenu";
import { Providers } from "./[locale]/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Font } from "./[locale]/fonts";
import { cookies } from "next/headers";
import CookieBar from "./_components/CookieBar/CookieBar";
import Footer from "./_components/Footer/Footer";
import Link from "next/link";
import VerticalMenu from "./_components/VerticalMenu/VerticalMenu";

export default async function NotFound() {
	const messages = await getMessages();
	const locale = await cookies().get("NEXT_LOCALE");
	const selectedLocale = (locale ? locale.value : "fr") as "en" | "fr";

	const translations = {
		en: {
			"hey-im-devobot": "Hi, it's Devobot !",
			"not-found": "Page not found !",
			"you-are-lost":
				"It seems you've lost your way in a parallel universe! Click on the button below to return to your previous destination.",
			back: "Back Home"
		},
		fr: {
			"hey-im-devobot": "Salut, C'est Devobot !",
			"not-found": "Page introuvable !",
			"you-are-lost":
				"It seems you've lost your way in a parallel universe! Click on the button below to return to a known universe.",
			back: "Retour à l'accueil"
		}
	};

	return (
		<html
			lang={selectedLocale}
			suppressHydrationWarning
		>
			<body className={`bg-lightBg dark:bg-darkBg  ${IBM_Font.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<FixedMenu />
						<VerticalMenu />
						<main className="pt-32 mx-2 flex flex-col gap-20 lg:ml-72">
							<h1 className="text-2xl text-center titleFont">
								{translations[selectedLocale]["not-found"]}
							</h1>
							<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 bg-lighterBg dark:bg-greyBg sm:w-96">
								<Image
									className="absolute -top-20 -left-14"
									alt="robot illustration"
									src="/illustrations/robot_dead.png"
									width={150}
									height={150}
								></Image>
								<p className="pl-12">
									{translations[selectedLocale]["hey-im-devobot"]}
								</p>
								<p className="mt-2">
									{translations[selectedLocale]["you-are-lost"]}
								</p>
								<Link
									className="bg-customViolet text-white px-4 py-3 mt-4 rounded-md mx-auto w-fit flex gap-1 hover:bg-hoverBtn hover:shadow-lg"
									href={"/"}
								>
									<Image
										className="mt-[-2px]"
										alt="back icon"
										src="/icons/arrowBack_icon.svg"
										width={24}
										height={24}
									/>
									<p>{translations[selectedLocale]["back"]}</p>
								</Link>
							</div>
						</main>
						<CookieBar />
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
