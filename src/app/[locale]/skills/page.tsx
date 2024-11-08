"use client";

import HorizontalBarChart from "@/app/_components/Charts/BarChart";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const SkillsPage = () => {
	const t = useTranslations("SkillsPage");

	const [isFrontCardShowing, setIsFrontCardShowing] = useState(true);
	const [skillSelected, setSkillSelected] = useState(0);

	const softSkillsArray = [
		{
			title: t("creativity"),
			description: t("creativity-description")
		},
		{
			title: t("curiosity"),
			description: t("curiosity-description")
		},
		{
			title: t("stress-management"),
			description: t("stress-management-description")
		},
		{
			title: t("humility"),
			description: t("humility-description")
		},
		{
			title: t("communication"),
			description: t("communication-description")
		},
		{
			title: t("autonomy"),
			description: t("autonomy-description")
		}
	];

	const selectSkillInformation = (index: number) => {
		setSkillSelected(index);
		setIsFrontCardShowing(false);
	};

	return (
		<section className="mt-32 mx-2 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">{t("his-skills")}</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 shadow-lg bg-lighterBg dark:bg-greyBg sm:w-96">
				<Image
					className="absolute -top-20 -left-14"
					alt="robot illustration"
					src="/illustrations/robot_smile.png"
					width={150}
					height={150}
				></Image>
				<p className="pl-12">{t("hey-im-devobot")}</p>
				<p className="mt-2">{t("check-his-skills")}</p>
			</div>
			<article className="flex flex-col gap-10 md:w-4/5 md:mx-auto">
				{/* <HorizontalBarChart
					title={t("programming-languages-expertise")}
					labels={["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "PHP"]}
					datasLabels={[90, 90, 80, 75, 50, 50]}
				/> */}
				<HorizontalBarChart
					title={t("programming-languages-expertise")}
					labels={["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "PHP"]}
					datasLabels={[4, 4, 4, 3, 2, 2]}
				/>
				<HorizontalBarChart
					title={t("frameworks-expertise")}
					labels={[
						"Tailwind",
						"jQuery",
						"React",
						"Express.js",
						"EJS",
						"NextJS",
						"Twig",
						"Symfony"
					]}
					datasLabels={[4, 3, 3, 1, 1, 3, 3, 2]}
				/>
				<HorizontalBarChart
					title={t("tools-expertise")}
					labels={[
						"Node.js",
						"Cypress",
						"Figma",
						"Git",
						"Jira",
						"MongoDB",
						"Mongoose",
						"MySQL"
					]}
					datasLabels={[2, 2, 3, 3, 4, 1, 1, 2]}
				/>
			</article>

			<article className="flex flex-col gap-20 xl:flex-row">
				<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 shadow-lg bg-lighterBg dark:bg-greyBg sm:w-96">
					<Image
						className="absolute -top-20 -left-14"
						alt="robot illustration"
						src="/illustrations/robot_blink.png"
						width={150}
						height={150}
					></Image>
					<p className="pl-12">{t("check-his-soft-skills1")}</p>
					<p className="mt-2">{t("check-his-soft-skills2")}</p>
				</div>
				<div className="bg-customViolet text-white rounded-md p-4 flex flex-col gap-4 shadow-lg max-w-xl w-full mx-auto sm:w-96">
					{isFrontCardShowing ? (
						<>
							<div className="flex justify-center gap-2">
								<Image
									alt="person icon"
									src={"/icons/person_icon.svg"}
									height={32}
									width={32}
								/>
								<h2 className="text-center titleFont text-xl my-auto">
									{t("his-soft-skills")}
								</h2>
							</div>
							<div className="flex flex-col gap-2 px-2">
								<div className="flex justify-between">
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(0)}
									>
										<p className="my-auto">{softSkillsArray[0].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(1)}
									>
										<p className="my-auto">{softSkillsArray[1].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(2)}
									>
										<p className="my-auto">{softSkillsArray[2].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(3)}
									>
										<p className="my-auto">{softSkillsArray[3].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(4)}
									>
										<p className="my-auto">{softSkillsArray[4].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
									<div
										className="cursor-pointer flex gap-1 group"
										onClick={() => selectSkillInformation(5)}
									>
										<p className="my-auto">{softSkillsArray[5].title}</p>
										<Image
											className="hidden mt-[-2px] sm:block"
											alt="icon right arrow"
											src="/icons/arrowForward_icon.svg"
											width={20}
											height={20}
										/>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<Image
								className="absolute cursor-pointer"
								alt="back icon"
								src="/icons/arrowBack_icon.svg"
								height={32}
								width={32}
								onClick={() => setIsFrontCardShowing(true)}
							/>
							<h2 className="text-center titleFont text-xl my-auto">
								{softSkillsArray[skillSelected].title}
							</h2>
							<p className="text-center max-w-80 mx-auto">
								{softSkillsArray[skillSelected].description}
							</p>
						</>
					)}
				</div>
			</article>
		</section>
	);
};

export default SkillsPage;
