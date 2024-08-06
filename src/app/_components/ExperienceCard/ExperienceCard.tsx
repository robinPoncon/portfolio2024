"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceCardProps = {
	title: string;
	dates: string;
	location: string;
	description: string;
};

const ExperienceCard = ({ title, dates, location, description }: ExperienceCardProps) => {
	const [descriptionDisplayed, setDescriptionDisplayed] = useState(false);

	return (
		<article className="border-4 rounded-md border-customViolet flex flex-col gap-3">
			<p className="bg-customViolet py-1">
				<Image
					className="mx-auto"
					alt="workcase icon"
					src="/icons/work_icon.svg"
					height={48}
					width={48}
				/>
			</p>
			<h2 className="text-xl px-3">{title}</h2>
			<div className="flex gap-1 px-3">
				<p className="font-semibold">Durée :</p>
				<p className="italic">{dates}</p>
			</div>
			<div className="flex gap-1 px-3">
				<p className="font-bold">Entreprise :</p>
				<p className="italic">{location}</p>
			</div>
			<div className="mb-5">
				<button
					className="flex w-fit mx-auto bg-customViolet rounded-md text-white px-3 py-2"
					onClick={() => setDescriptionDisplayed(!descriptionDisplayed)}
				>
					<p className="my-auto">En savoir plus</p>
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
				{descriptionDisplayed && <p className="italic mt-3 px-3 text-justify">{description}</p>}
			</div>
		</article>
	);
};

export default ExperienceCard;
