"use client";

import ExperienceCard from "@/app/_components/ExperienceCard/ExperienceCard";

const ExperiencePage = () => {
	return (
		<section className="mt-32 mx-2 flex flex-col gap-10">
			<h1 className="text-2xl text-center titleFont">Ses expériences</h1>
			{/* Tableau style kanban pour afficher les expériences et formations */}
			<ExperienceCard
				title="Développeur front-end NextJS"
				dates="Juillet 2023 à Aujourd'hui"
				location="Auto-entrepreneur"
				description="J’ai développé mon auto-entreprise dans le soin énergétique et la musique
				thérapeutique. Je me suis formé et j’ai créé mon propre site internet avec NextJS
				pour avoir un rendu moderne, intuitif et performant pour les utilisateurs."
			/>
		</section>
	);
};

export default ExperiencePage;
