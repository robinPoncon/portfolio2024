import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Index");

	return (
		<div className="bg-white dark:bg-darkBg text-black dark:text-white">
			<h1 className="text-2xl text-customViolet ">{t("title")}</h1>
		</div>
	);
}
