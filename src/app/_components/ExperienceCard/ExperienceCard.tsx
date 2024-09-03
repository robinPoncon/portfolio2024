"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type ExperienceCardProps = {
	title: string;
	dates: string;
	location: string;
	description: string;
	technos: string;
	type: "company" | "formation";
};

const ExperienceCard = ({
	title,
	dates,
	location,
	description,
	technos,
	type
}: ExperienceCardProps) => {
	const [descriptionDisplayed, setDescriptionDisplayed] = useState(false);

	const t = useTranslations("ExperiencesCard");

	return (
		<article className="border-4 rounded-md border-customViolet flex flex-col gap-3 shadow-lg bg-lighterBg dark:bg-greyBg w-full max-w-2xl mx-auto text-center">
			<p className="bg-customViolet py-1">
				<Image
					className="mx-auto"
					alt={type === "company" ? "workcase icon" : "certification icon"}
					src={type === "company" ? "/icons/work_icon.svg" : "/icons/school_icon.svg"}
					height={48}
					width={48}
				/>
			</p>
			<h2 className="text-xl px-3">{title}</h2>
			<p className="px-3">
				<span className="font-semibold">{t("duration") + " :"}</span>
				<span className="italic ml-1">{dates}</span>
			</p>
			<p className="px-3">
				<span className="font-bold">
					{type === "company" ? t("company") : t("formation")} :
				</span>
				<span className="italic ml-1">{location}</span>
			</p>
			<p className="px-3">
				<span className="font-bold">Technos :</span>
				<span className="italic ml-1">{technos}</span>
			</p>
			{descriptionDisplayed && <p className="italic px-3 text-justify">{description}</p>}
			<div className="mb-5">
				<button
					className="flex w-fit mx-auto bg-customViolet rounded-md text-white px-3 py-2 hover:bg-hoverBtn hover:shadow-lg"
					onClick={() => setDescriptionDisplayed(!descriptionDisplayed)}
				>
					<p className="my-auto">{t("read-more")}</p>
					<Image
						alt="arrow down icon"
						src={
							descriptionDisplayed
								? "/icons/arrowUp_icon.svg"
								: "/icons/arrowDown_icon.svg"
						}
						height={32}
						width={32}
					/>
				</button>
			</div>
		</article>
	);
};

export default ExperienceCard;
