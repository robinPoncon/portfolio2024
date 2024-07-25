"use client";

import HorizontalBarChart from "@/app/_components/Charts/BarChart";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const SkillsPage = () => {
	const t = useTranslations("SkillsPage");

	const [isFrontCardShowing, setIsFrontCardShowing] = useState(true);
	const [indexSkillSelected, setIndexSkillSelected] = useState(0);

	const softSkillsArray = [
		{
			title: "Créativité",
			description:
				"C'est grâce à la musique qu'il a pu développé et faire confiance à sa créativité !"
		},
		{
			title: "Curiosité",
			description:
				"C'est dans un désir de comprendre le monde et les autres qu'il a développé sa curiosité !"
		},
		{
			title: "Gestion du stress",
			description:
				"C'est grâce à la méditation et sa capacité à prendre du recul sur une situation qu'il a développé sa capacité à gérer son stress."
		},
		{
			title: "Humilité",
			description:
				"C'est en faisant du sport qu'il s'est rendu compte qu'il y aura toujours quelqu'un meilleur que lui, et que l'humilité était une solution pour qu'il s'accepte et se voit tel qu'il est."
		},
		{
			title: "Communication",
			description:
				"C'est en travaillant avec de nombreux corps de métiers différents, qu'il a pu comprendre l'impact d'une bonne communication sur le bon déroulement d'un projet."
		},
		{
			title: "Autonomie",
			description:
				"C'est dans son ancienne entreprise, n'ayant pas eu de développeur front-end plus expérimenté que lui, qu'il a du développé son autonomie afin de trouver des solutions aux problèmes rencontrés."
		}
	];

	const selectSkillInformation = (index: number) => {
		setIndexSkillSelected(index);
		setIsFrontCardShowing(false);
	};

	return (
		<section className="mt-32 mx-2 flex flex-col gap-10">
			<h1 className="text-xl text-center titleFont">Ses compétences</h1>
			<p>
				Salut, c'est Devobot ! Est-ce que votre visite se passe bien ? Je vois que vous
				aimez les choses concrètes, alors regardons ensemble ses compétences techniques !
			</p>
			<article className="flex flex-col gap-10">
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
			<article className="bg-customViolet text-white rounded-md p-4 flex flex-col gap-4 max-w-xl w-full mx-auto">
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
								Ses savoir-être
							</h2>
						</div>
						<div className="flex flex-col gap-2 px-5">
							<div className="flex justify-between">
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(0)}
								>
									Créativité
								</p>
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(1)}
								>
									Curiosité
								</p>
							</div>
							<div className="flex justify-between">
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(2)}
								>
									Gestion du stress
								</p>
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(3)}
								>
									Humilité
								</p>
							</div>
							<div className="flex justify-between">
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(4)}
								>
									Communication
								</p>
								<p
									className="cursor-pointer"
									onClick={() => selectSkillInformation(5)}
								>
									Autonomie
								</p>
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
							{softSkillsArray[indexSkillSelected].title}
						</h2>
						<p className="text-center max-w-80 mx-auto">
							{softSkillsArray[indexSkillSelected].description}
						</p>
					</>
				)}
			</article>
		</section>
	);
};

export default SkillsPage;
