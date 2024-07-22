"use client";

import HorizontalBarChart from "@/app/_components/Charts/BarChart";
import { useTranslations } from "next-intl";

const SkillsPage = () => {
	const t = useTranslations("SkillsPage");

	return (
		<section className="mt-32 flex flex-col gap-10">
			<h1 className="text-xl text-center titleFont">Ses compétences</h1>
			<p>
				Salut, c'est Devobot ! Est-ce que votre visite se passe bien ? Je vois que vous
				aimez les choses concrètes, alors regardons ensemble ses compétences techniques !
			</p>
			<article className="m-2 flex flex-col gap-10">
				<HorizontalBarChart
					title={t("programming-languages-expertise")}
					labels={["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "PHP"]}
					datasLabels={[90, 90, 80, 75, 50, 50]}
				/>
				<HorizontalBarChart
					title={t("frameworks-expertise")}
					labels={["Tailwind", "jQuery", "React", "NextJS", "Twig", "Symfony"]}
					datasLabels={[80, 70, 70, 40, 60, 50]}
				/>
				<HorizontalBarChart
					title={t("tools-expertise")}
					labels={["Cypress", "Figma", "Gitlab", "Github", "Jira", "MySQL"]}
					datasLabels={[50, 60, 50, 50, 60, 40]}
				/>
			</article>
			<p>
				Les compétences techniques c'est bien ! Mais quel est l'humain derrière tout ça ? En
				tant que robot je suis curieux, pas vous ?
			</p>
		</section>
	);
};

export default SkillsPage;
