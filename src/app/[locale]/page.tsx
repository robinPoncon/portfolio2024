import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const t = useTranslations("Home");
	const locale = useLocale();

	return (
		<section className="mt-32 mx-4 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">Portfolio Robin Ponçon</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 bg-lighterBg dark:bg-greyBg sm:w-96">
				<Image
					className="absolute -top-20 -left-14"
					alt="robot illustration"
					src="/illustrations/robot_blink.png"
					width={150}
					height={150}
				></Image>
				<p className="pl-12">{t("welcome-im-devobot")}</p>
				<p className="mt-2">{t("i-will-be-your-guide")}</p>
			</div>
			<article>
				<div className="border-4 border-customViolet rounded-lg w-64 mx-auto">
					<Image
						className="scale-x-[-1] rounded-t-[4px]"
						alt="picture of robin"
						src="/images/photo_robin.png"
						width={256}
						height={256}
					/>
					<div className="p-2 bg-lighterBg dark:bg-greyBg rounded-b-[4px]">
						<p>
							<strong>{t("job")} :</strong>{" "}
							<span className="italic">{t("fullstack-developper")}</span>
						</p>
						<p>
							<strong>{t("experience")} :</strong>{" "}
							<span className="italic">5 {t("year")}</span>
						</p>
						<p>
							<strong>Technos :</strong>{" "}
							<span className="italic">
								NextJS, React, Typescript, JavaScript, Tailwind, HTML5, SCSS,
								Symfony, PHP, Twig, MySQL
							</span>
						</p>
						<Link
							className="flex gap-2 bg-customViolet w-fit px-3 py-2 rounded-md text-white mx-auto my-5 hover:bg-hoverBtn hover:shadow-lg"
							href={`${locale}/skills`}
						>
							<p>{t("read-more")}</p>
							<Image
								alt="icon arrow right"
								src="/icons/arrowForward_icon.svg"
								width={24}
								height={24}
							></Image>
						</Link>
					</div>
				</div>
			</article>
			<article className="flex flex-col gap-20 md:flex-row md:gap-0">
				<div className="bg-lighterBg dark:bg-greyBg rounded-lg shadow-lg w-64 mx-auto p-4 flex flex-col gap-5 border-4 border-customVioletLighter">
					<h2 className="text-lg titleFont text-center font-semibold">
						{t("number-of-projects")}
					</h2>
					<div className="flex justify-center gap-10">
						<Image
							alt="icon project"
							src="/icons/website_icon_violet.svg"
							width={48}
							height={48}
						/>
						<p className="text-2xl font-semibold rounded-full w-12 text-center text-white bg-customViolet h-12 leading-[48px]">
							11
						</p>
					</div>
					<Link
						className="flex gap-2 bg-customViolet w-fit px-3 py-2 rounded-md text-white mx-auto hover:bg-hoverBtn hover:shadow-lg"
						href="https://github.com/robinPoncon"
						target="_blank"
					>
						<p>{t("see-his-github")}</p>
						<Image
							alt="icon arrow right"
							src="/icons/arrowForward_icon.svg"
							width={24}
							height={24}
						></Image>
					</Link>
				</div>
				<div className="bg-lighterBg dark:bg-greyBg rounded-lg shadow-lg w-64 mx-auto p-4 border-4 border-customVioletLighter">
					<h2 className="text-lg titleFont text-center font-semibold md:mt-8">
						{t("download-cv")}
					</h2>
					<div className="flex justify-center gap-10 mt-5">
						<a
							href="/CV_Robin-Poncon_2024.pdf"
							className="customCSS-BtnDownload flex gap-1 justify-center w-fit mx-auto hover:text-customVioletLighter"
							download="CV_Robin-Poncon.pdf"
						>
							<Image
								alt="icon download document"
								src="/icons/download-document_icon_violetDarker.svg"
								width={48}
								height={48}
							/>
						</a>
					</div>
				</div>
			</article>
		</section>
	);
}
