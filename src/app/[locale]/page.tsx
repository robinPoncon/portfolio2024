import { useTranslations } from "next-intl";

export default function Home() {
	return (
		<div className="bg-lightBg dark:bg-darkBg text-black dark:text-white">
			<h1 className="text-2xl text-customViolet">{}</h1>
			<p>Test</p>
		</div>
	);
}
