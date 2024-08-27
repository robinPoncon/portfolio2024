import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function NotFoundPage() {
	const t = useTranslations("NotFoundPage");
	return (
		<main className="py-32 mx-2 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">{t("not-found")}</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 bg-lighterBg dark:bg-greyBg sm:w-96">
				<Image
					className="absolute -top-20 -left-14"
					alt="robot illustration"
					src="/illustrations/robot_dead.png"
					width={150}
					height={150}
				></Image>
				<p className="pl-12">{t("hey-im-devobot")}</p>
				<p className="mt-2">{t("you-are-lost")}</p>
				<Link
					className="bg-customViolet text-white px-4 py-3 mt-4 rounded-md mx-auto w-fit flex gap-1 hover:bg-hoverBtn hover:shadow-lg"
					href={"/"}
				>
					<Image
						className="mt-[-2px]"
						alt="back icon"
						src="/icons/arrowBack_icon.svg"
						width={24}
						height={24}
					/>
					<p>{t("back")}</p>
				</Link>
			</div>
		</main>
	);
}
