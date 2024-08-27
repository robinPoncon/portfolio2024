import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectsPage = () => {
	const t = useTranslations("ProjectsPage");

	return (
		<section className="mt-32 mx-4 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">{t("his-projects")}</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 shadow-lg mx-auto mt-10 bg-lighterBg dark:bg-greyBg sm:w-96">
				<Image
					className="absolute -top-20 -left-14"
					alt="robot illustration"
					src="/illustrations/robot_uncomfortable.png"
					width={150}
					height={150}
				></Image>
				<p className="pl-12">{t("its-me-again")}</p>
				<p className="mt-2">{t("check-his-projects")}</p>
			</div>
			<article className="bg-lighterBg dark:bg-greyBg py-10 px-4 rounded-md flex flex-col gap-4 shadow-lg w-full max-w-2xl mx-auto">
				<h2 className="titleFont text-lg text-center font-bold">{t("roots-of-healing")}</h2>
				<Image
					className="mx-auto"
					alt="image projet les racines de la guérison"
					src="/images/projet_racines-guerison.png"
					priority
					width={300}
					height={180}
				/>
				<p className="text-center">
					<span className="font-bold">Technos :</span>
					<span className="italic ml-1">
						NextJS, React, TypeScript, Tailwind, SCSS, HTML5
					</span>
				</p>
				<a
					href="https://racines-guerison.com/"
					target="_blank"
					className="bg-customViolet text-white px-4 py-3 rounded-md mx-auto block w-fit hover:bg-hoverBtn hover:shadow-lg"
				>
					{t("discover")}
				</a>
			</article>
		</section>
	);
};

export default ProjectsPage;
