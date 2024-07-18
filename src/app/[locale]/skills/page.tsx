import BarChart from "@/app/_components/Charts/BarChart";

const SkillsPage = () => {
	return (
		<section>
			<h1>Ses compétences</h1>
			<article>
				<h2>Languages de Programmation</h2>
				<p>HTML5</p>
				<p>CSS3</p>
				<p>SCSS</p>
				<p>JavaScript</p>
				<p>TypeScript</p>
				<p>PHP</p>
			</article>
			<article>
				<h2>Frameworks</h2>
				<p>JQuery</p>
				<p>Tailwind</p>
				<p>React</p>
				<p>NextJS</p>
				<p>Twig</p>
				<p>Symfony</p>
			</article>
			<article>
				<h2>Outils</h2>
				<p>Cypress</p>
				<p>Figma</p>
				<p>GitLab</p>
				<p>Github</p>
				<p>Jira</p>
			</article>
			<article>
				<BarChart />
			</article>
		</section>
	);
};

export default SkillsPage;
