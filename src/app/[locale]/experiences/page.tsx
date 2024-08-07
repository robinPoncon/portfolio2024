"use client";

import ExperienceCard from "@/app/_components/ExperienceCard/ExperienceCard";

const ExperiencePage = () => {
	return (
		<section className="mt-32 mx-2 flex flex-col gap-10">
			<h1 className="text-2xl text-center titleFont">Ses expériences</h1>
			{/* Tableau style kanban pour afficher les expériences et formations */}
			<ExperienceCard
				title="Développeur Front-End"
				dates="Juillet 2023 à Aujourd'hui"
				location="Auto-entrepreneur"
				type="company"
				technos="NextJS, React, TypeScript, Tailwind"
				description="Il a développé son auto-entreprise dans le soin énergétique et la musique
				thérapeutique. Il s'est formé et a créé son propre site internet avec NextJS
				pour avoir un rendu moderne, intuitif et performant pour les utilisateurs."
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title="Développeur Fullstack"
				dates="Février 2021 à Juillet 2023"
				location="SOAN"
				type="company"
				technos="React, Symfony, Typescript, SCSS, jQuery, Javascript, Twig"
				description="Il a commencé en tant alternant développeur front (Twig,
				JS, jQuery, SCSS) puis il a évolué en CDI en tant que
				développeur fullstack (React/Typescript et Symfony)."
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title="Développeur Web Fullstack"
				dates="Décembre 2020 à Décembre 2021"
				location="3W Academy"
				type="school"
				technos="React, Symfony, SCSS, jQuery, Javascript, Twig"
				description="Il a commencé en tant alternant développeur front (Twig,
				JS, jQuery, SCSS) puis il a évolué en CDI en tant que
				développeur fullstack (React et Symfony)."
			/>
			<p className="h-20 bg-customViolet w-2 mx-auto -my-10" />
			<ExperienceCard
				title="Développeur Web Junior"
				dates="Janvier 2019 à Juillet 2020"
				location="Openclassrooms"
				type="school"
				technos="Symfony, PHP, Twig, JavaScript, jQuery, HTML5, CSS3"
				description="Il a créé 5 projets de sites internet durant sa formation
				en ligne. Intégration de maquette, création d'un site
				wordpress, création d'un site dynamique en JS avec
				intégration d'API, création d'un blog en PHP et JS, puis
				une refonte d'un site d'un club de basket en Symfony."
			/>
		</section>
	);
};

export default ExperiencePage;
