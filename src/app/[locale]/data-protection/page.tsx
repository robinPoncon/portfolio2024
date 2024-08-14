import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
	title: "Protection des Données",
	description:
		"Découvrez ma politique de confidentialité pour comprendre comment je sécurise vos informations personnelles et maintiens votre confiance en ligne !",
	keywords: [
		"protection des données",
		"politique de confidentialité",
		"confiance",
		"informations",
		"données personnelles"
	]
};

const DataProtectionPage = () => {
	const t = useTranslations("DataProtectionPage");

	return (
		<section className="flex flex-col gap-12 py-20 px-4 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				{t("data-protection")}
			</h1>
			<p className="text-justify">{t("welcome-data-protection")}</p>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("collecting-data")}</h2>
				<p>{t("when-you-visit")}</p>
				<p>
					<strong>{t("identification-information")}</strong>{" "}
					{t("identification-information-description")}
				</p>
				<p>
					<strong>{t("navigation-data")}</strong> {t("navigation-data-description")}
				</p>
			</article>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("use-your-data")}</h2>
				<p>{t("use-your-data-for")}</p>
				<p>
					<strong>{t("answering-your-request")}</strong>{" "}
					{t("answering-your-request-description")}
				</p>
				<p>
					<strong>{t("improving-his-website")}</strong>{" "}
					{t("improving-his-website-description")}
				</p>
			</article>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("sharing-your-data")}</h2>
				<p>{t("sharing-your-data-description")}</p>
				<p>
					<strong>{t("legal-obligations")}</strong> {t("legal-obligations-description")}
				</p>
			</article>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("data-security")}</h2>
				<p>{t("data-security-description")}</p>
			</article>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("your-rights")}</h2>
				<p>{t("your-rights-description")}</p>
			</article>
			<article className="flex flex-col text-justify gap-5">
				<h2 className="text-xl font-semibold md:text-2xl">{t("policy-changes")}</h2>
				<p>{t("policy-changes-description")}</p>
			</article>
		</section>
	);
};

export default DataProtectionPage;
