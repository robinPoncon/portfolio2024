"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Footer.scss";

const Footer = () => {
	const t = useTranslations("Footer");
	const locale = useLocale();
	const pathname = usePathname();

	const isActiveLink = (path: string[]) => {
		return path.includes(pathname);
	};

	return (
		<section className="mt-20 bg-footerBg text-gray-400 py-10 relative z-30">
			<article className="flex flex-col gap-14 lg:flex-row justify-center lg:gap-28">
				<div className="text-center">
					<h3 className="font-bold mb-3 text-lg">NAVIGATION</h3>
					<ul className="flex flex-col gap-2 italic">
						<li
							className={
								isActiveLink(["/en", "/fr"])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={"/"}>{t("home")}</Link>
						</li>
						<li
							className={
								isActiveLink([`/${locale}/skills`, `/${locale}/competences`])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={`/${locale}/skills`}>{t("skills")}</Link>
						</li>
						<li
							className={
								isActiveLink([`/${locale}/projects`, `/${locale}/projets`])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={`/${locale}/projects`}>{t("projects")}</Link>
						</li>
						<li
							className={
								isActiveLink([`/${locale}/experiences`])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={`/${locale}/experiences`}>{t("experiences")}</Link>
						</li>
						<li
							className={
								isActiveLink([`/${locale}/contact`])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={`/${locale}/contact`}>{t("contact")}</Link>
						</li>
					</ul>
				</div>
				<div className="text-center">
					<h3 className="font-bold mb-3 text-lg">{t("about")}</h3>
					<div className="flex flex-col gap-2 italic">
						<p>Robin Ponçon</p>
						<p>59 rue Pierre Renaudel</p>
						<p>33130 Bègles</p>
						<p>
							Email :{" "}
							<a
								className="hover:text-customVioletLighter"
								href="mailto:poncon.robin@gmail.com"
							>
								poncon.robin@gmail.com
							</a>
						</p>
						<a
							href="/CV_Robin-Poncon_2024.pdf"
							className="customCSS-BtnDownload flex gap-1 justify-center w-fit mx-auto hover:text-customVioletLighter"
							download="CV_Robin-Poncon.pdf"
						>
							<p>{t("download-cv")}</p>
							<p className="customCSS-DownloadIcon"></p>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h3 className="font-bold mb-3 text-lg">INFORMATIONS</h3>
					<ul className="flex flex-col gap-2 italic">
						<li
							className={
								isActiveLink([
									`/${locale}/legal-notices`,
									`/${locale}/mentions-legales`
								])
									? "text-customVioletLighter"
									: "hover:text-customVioletLighter"
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
									: "hover:text-customVioletLighter"
							}
						>
							<Link href={`/${locale}/data-protection`}>{t("data-protection")}</Link>
						</li>
					</ul>
				</div>
			</article>
			<article className="text-center -mb-5 mt-14">
				© 2024 - {new Date().getFullYear()}. Robin Ponçon. {t("all-rights-reserved")}.
			</article>
		</section>
	);
};

export default Footer;
