import { useLocale, useTranslations } from "next-intl";
import NavigationLink from "../NavigationLink/NavigationLink";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const VerticalMenu = () => {
	const t = useTranslations("Menu");
	const locale = useLocale();

	return (
		<section className="fixed pt-10 px-10 z-30 h-full hidden lg:block w-72 bg-lighterBg dark:bg-greyBg border-r-4 border-r-customVioletLighter">
			<div className="flex">
				<Image
					className="-ml-5"
					alt="illustration head of robot"
					src="/illustrations/robot_head.png"
					width={100}
					height={100}
				/>
				<p className="mb-10 mt-auto text-xl italic font-semibold border-x-4 px-2 rounded-md border-customVioletLighter">
					Robin P.
				</p>
			</div>

			<nav className="py-5">
				<ul className="flex flex-col gap-4">
					<NavigationLink
						setIsMenuOpen={undefined}
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
						setIsMenuOpen={undefined}
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
						setIsMenuOpen={undefined}
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
						setIsMenuOpen={undefined}
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
						setIsMenuOpen={undefined}
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
			<div className="flex my-6 gap-2">
				<ThemeSwitcher />
				<LocaleSwitcher />
			</div>
		</section>
	);
};

export default VerticalMenu;
