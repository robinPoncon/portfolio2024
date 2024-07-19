"use client";

import HorizontalBarChart from "@/app/_components/Charts/BarChart";
import { useTranslations } from "next-intl";

const SkillsPage = () => {
	const t = useTranslations("SkillsPage");

	return (
		<section>
			<h1>Ses compétences</h1>
			<article>
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
		</section>
	);
};

export default SkillsPage;
