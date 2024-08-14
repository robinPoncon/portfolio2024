"use client";

import ExperienceCard from "@/app/_components/ExperienceCard/ExperienceCard";
import { useTranslations } from "next-intl";

const ExperiencePage = () => {
	const t = useTranslations("ExperiencesPage");

	return (
		<section className="mt-32 mx-2 flex flex-col gap-10">
			<h1 className="text-2xl text-center titleFont">{t("his-experiences")}</h1>
			<ExperienceCard
				title={t("front-end-developper")}
				dates={t("july2023-to-today")}
				location={t("self-employed-contractor")}
				type="company"
				technos="NextJS, React, TypeScript, Tailwind"
				description={t("front-end-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title={t("fullstack-developper")}
				dates={t("february2021-to-july2023")}
				location="SOAN"
				type="company"
				technos="React, Symfony, Typescript, SCSS, jQuery, Javascript, Twig"
				description={t("fullstack-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title={t("fullstack-web-developper")}
				dates={t("december2020-to-december2021")}
				location="3W Academy"
				type="formation"
				technos="React, Symfony, SCSS, jQuery, Javascript, Twig"
				description={t("fullstack-web-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title={t("junior-web-developper")}
				dates={t("january2019-to-july2020")}
				location="Openclassrooms"
				type="formation"
				technos="Symfony, PHP, Twig, JavaScript, jQuery, HTML5, CSS3"
				description={t("junior-web-developper-experience")}
			/>
		</section>
	);
};

export default ExperiencePage;
