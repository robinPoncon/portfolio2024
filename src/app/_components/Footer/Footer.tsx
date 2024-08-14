"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
	const t = useTranslations("Menu&Footer");
	const locale = useLocale();
	const pathname = usePathname();

	const isActiveLink = (path: string[]) => {
		return path.includes(pathname);
	};

	return (
		<section className="w-full mt-20 bg-footerBg text-gray-400 py-10 flex flex-col gap-5">
			<article className="mx-auto w-fit">
				<h3 className="font-bold text-gray-300 mb-3 text-lg">Navigation</h3>
				<ul className="flex flex-col gap-1 italic">
					<li className={isActiveLink(["/en", "/fr"]) ? "text-customVioletLighter" : ""}>
						<Link href={"/"}>{t("home")}</Link>
					</li>
					<li
						className={
							isActiveLink([`/${locale}/skills`, `/${locale}/competences`])
								? "text-customVioletLighter"
								: ""
						}
					>
						<Link href={`/${locale}/skills`}>{t("skills")}</Link>
					</li>
					<li
						className={
							isActiveLink([`/${locale}/projects`, `/${locale}/projets`])
								? "text-customVioletLighter"
								: ""
						}
					>
						<Link href={`/${locale}/projects`}>{t("projects")}</Link>
					</li>
					<li
						className={
							isActiveLink([`/${locale}/experiences`])
								? "text-customVioletLighter"
								: ""
						}
					>
						<Link href={`/${locale}/experiences`}>{t("experiences")}</Link>
					</li>
					<li
						className={
							isActiveLink([`/${locale}/contact`]) ? "text-customVioletLighter" : ""
						}
					>
						<Link href={`/${locale}/contact`}>{t("contact")}</Link>
					</li>
				</ul>
			</article>
			<article>
				<h3 className="font-bold text-gray-300 mb-3 text-lg">Informations</h3>
				<ul className="flex flex-col gap-1 italic">
					<li
						className={
							isActiveLink([
								`/${locale}/legal-notices`,
								`/${locale}/mentions-legales`
							])
								? "text-customVioletLighter"
								: ""
						}
					>
						<Link href={`/${locale}/legal-notices`}>{t("legal-notices")}</Link>
					</li>
					<li
						className={
							isActiveLink([
								`/${locale}/data-protection`,
								`/${locale}/protection-des-donnees`
							])
								? "text-customVioletLighter"
								: ""
						}
					>
						<Link href={`/${locale}/data-protection`}>{t("data-protection")}</Link>
					</li>
				</ul>
			</article>
			<article className="text-center -mb-5">
				© 2024 - {new Date().getFullYear()}. Robin Ponçon. Tous droits réservés.
			</article>
		</section>
	);
};

export default Footer;
