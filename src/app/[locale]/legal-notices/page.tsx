import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Mentions légales",
	description:
		"Consultez mes mentions légales pour obtenir des informations importantes sur mon site web dans un but de transparence et de confiance !",
	keywords: ["mentions légales", "transparence", "confiance", "informations"]
};

const LegalNoticesPage = () => {
	const locale = useLocale();
	const t = useTranslations("LegalNotices");

	return (
		<section className="flex flex-col gap-12 pt-20 px-4">
			<h1 className="titleFont font-semibold text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				{t("legal-notices")}
			</h1>
			<p className="text-justify">{t("legal-notices-description")}</p>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">{t("site-manager")}</h2>
				<p className="flex flex-col">
					<strong>- {t("manager-name")} :</strong>
					<span className="italic ml-2">Robin Ponçon</span>
				</p>
				<p className="flex flex-col">
					<strong>- {t("address")} :</strong>
					<span className="italic ml-2">59 rue Pierre Renaudel 33130 Bègles</span>
				</p>
				<p className="flex flex-col">
					<strong>- {t("email-address")} :</strong>
					<span className="italic ml-2">poncon.robin@gmail.com</span>
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">{t("hosting")}</h2>
				<p className="mb-2">{t("site-hosted-by")} : o2switch</p>
				<p className="flex flex-col">
					<strong>- {t("host-address")} :</strong>
					<span className="italic ml-2">https://www.o2switch.fr/</span>
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">
					{t("intellectual-property")}
				</h2>
				<p className="mb-2 text-justify">{t("intellectual-property-description")}</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">{t("data-collection")}</h2>
				<p className="text-justify">
					{t("data-collection-description")} :{" "}
					<Link
						className="italic"
						href={`/${locale}/data-protection`}
					>
						{t("data-protection")}
					</Link>
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">{t("responsibility")}</h2>
				<p className="text-justify">{t("responsibility-description")}</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">{t("external-links")}</h2>
				<p className="text-justify">{t("external-links-description")}</p>
			</article>
			<article>
				<h2 className="text-2xl mb-2 font-semibold md:text-2xl">Contact</h2>
				<p className="text-justify">
					{t("contact-description") + " : "}
					<Link href={`/${locale}/contact`}>{t("contact-form")}</Link>
				</p>
			</article>
		</section>
	);
};

export default LegalNoticesPage;
