"use client";

import ExperienceCard from "@/app/_components/ExperienceCard/ExperienceCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ExperiencePage = () => {
	const t = useTranslations("ExperiencesPage");

	return (
		<section className="mt-32 mx-2 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">{t("his-experiences")}</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 shadow-lg bg-lighterBg dark:bg-greyBg sm:w-96">
				<Image
					className="absolute -top-20 -left-14"
					alt="robot illustration"
					src="/illustrations/robot_surprised.png"
					width={150}
					height={150}
				></Image>
				<p className="pl-12">{t("its-devobot-again")}</p>
				<p className="mt-2">{t("career-path")}</p>
			</div>
			<ExperienceCard
				title={t("front-end-developper")}
				dates={t("july2023-to-today")}
				location={t("self-employed-contractor")}
				type="company"
				technos="NextJS, React, TypeScript, Tailwind"
				description={t("front-end-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-20" />
			<ExperienceCard
				title={t("fullstack-developper")}
				dates={t("february2021-to-july2023")}
				location="SOAN"
				type="company"
				technos="React, Symfony, Typescript, SCSS, jQuery, Javascript, Twig"
				description={t("fullstack-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-20" />
			<ExperienceCard
				title={t("fullstack-web-developper")}
				dates={t("december2020-to-december2021")}
				location="3W Academy"
				type="formation"
				technos="React, Symfony, SCSS, jQuery, Javascript, Twig"
				description={t("fullstack-web-developper-experience")}
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-20" />
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
