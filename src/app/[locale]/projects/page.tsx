import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectsPage = () => {
	const t = useTranslations("ProjectsPage");

	return (
		<section className="mt-32 mx-2 flex flex-col gap-10">
			<h1 className="text-xl text-center titleFont">{t("his-projects")}</h1>
			<p>{t("check-his-projects")}</p>
			<article className="bg-lighterBg dark:bg-greyBg p-3 rounded-md flex flex-col gap-4 shadow-lg">
				<h2 className="titleFont text-lg text-center font-bold text-customViolet">
					{t("roots-of-healing")}
				</h2>
				<Image
					alt="image projet les racines de la guérison"
					src="/images/projet_racines-guerison.png"
					priority
					width={300}
					height={180}
				/>
				<p>
					<span className="font-bold">Technos :</span>
					<span className="italic ml-1">
						NextJS, React, TypeScript, Tailwind, SCSS, HTML5
					</span>
				</p>
				<a
					href="https://racines-guerison.com/"
					target="_blank"
					className="bg-customViolet text-white px-4 py-3 rounded-md mx-auto block w-fit"
				>
					{t("discover")}
				</a>
			</article>
		</section>
	);
};

export default ProjectsPage;
