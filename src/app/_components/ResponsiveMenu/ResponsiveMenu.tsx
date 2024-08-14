"use client";

import Image from "next/image";
import { useState } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import { useLocale, useTranslations } from "next-intl";

const ResponsiveMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const t = useTranslations("Menu&Footer");

	const locale = useLocale();

	return (
		<section>
			<button className="cursor-pointer px-2 py-1 w-fit bg-lightBg dark:bg-darkBg">
				{isMenuOpen ? (
					<Image
						alt="icon responsive menu"
						src={"/icons/close_icon.svg"}
						width={48}
						height={48}
						onClick={() => setIsMenuOpen(false)}
					/>
				) : (
					<Image
						alt="icon close responsive menu"
						src={"/icons/menu_icon.svg"}
						width={48}
						height={48}
						onClick={() => setIsMenuOpen(true)}
					/>
				)}
			</button>
			{isMenuOpen && (
				<nav className="fixed w-full h-full bg-lightBg dark:bg-darkBg pt-10 z-10">
					<ul className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-4">
						<NavigationLink
							setIsMenuOpen={setIsMenuOpen}
							text={t("home")}
							altIcon="icon home"
							srcIcon={{
								lightMode: "/icons/home_icon.svg",
								darkMode: "/icons/home_icon_white.svg"
							}}
							href="/"
							pathnamesChecked={["/en", "/fr"]}
						/>
						<NavigationLink
							setIsMenuOpen={setIsMenuOpen}
							text={t("skills")}
							altIcon="icon code"
							srcIcon={{
								lightMode: "/icons/code_icon.svg",
								darkMode: "/icons/code_icon_white.svg"
							}}
							href={`/${locale}/skills`}
							pathnamesChecked={[`/${locale}/skills`, `/${locale}/competences`]}
						/>
						<NavigationLink
							setIsMenuOpen={setIsMenuOpen}
							text={t("projects")}
							altIcon="icon website"
							srcIcon={{
								lightMode: "/icons/website_icon.svg",
								darkMode: "/icons/website_icon_white.svg"
							}}
							href={`/${locale}/projects`}
							pathnamesChecked={[`/${locale}/projects`, `/${locale}/projets`]}
						/>
						<NavigationLink
							setIsMenuOpen={setIsMenuOpen}
							text={t("experiences")}
							altIcon="icon work case"
							srcIcon={{
								lightMode: "/icons/workcase_icon.svg",
								darkMode: "/icons/workcase_icon_white.svg"
							}}
							href={`/${locale}/experiences`}
							pathnamesChecked={[`/${locale}/experiences`]}
						/>
						<NavigationLink
							setIsMenuOpen={setIsMenuOpen}
							text={t("contact")}
							altIcon="icon mail"
							srcIcon={{
								lightMode: "/icons/mail_icon.svg",
								darkMode: "/icons/mail_icon_white.svg"
							}}
							href={`/${locale}/contact`}
							pathnamesChecked={[`/${locale}/contact`]}
						/>
					</ul>
				</nav>
			)}
		</section>
	);
};

export default ResponsiveMenu;
