"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.scss";

export default function Home() {
	const t = useTranslations("Home");
	const locale = useLocale();
	const { resolvedTheme } = useTheme();

	const [questionsAndAnswersArray, setQuestionsAndAnswersArray] = useState([
		{
			id: 1,
			question: t("question-1"),
			answer: `"${t("answer-1")}"`,
			isAnswerVisible: false,
			srcIcon: "/icons/arrowDown_icon_black.svg"
		},
		{
			id: 2,
			question: t("question-2"),
			answer: `"${t("answer-2")}"`,
			isAnswerVisible: false,
			srcIcon: "/icons/arrowDown_icon_black.svg"
		},
		{
			id: 3,
			question: t("question-3"),
			answer: `"${t("answer-3")}"`,
			isAnswerVisible: false,
			srcIcon: "/icons/arrowDown_icon_black.svg"
		},
		{
			id: 4,
			question: t("question-4"),
			answer: `"${t("answer-4")}"`,
			isAnswerVisible: false,
			srcIcon: "/icons/arrowDown_icon_black.svg"
		},
		{
			id: 5,
			question: t("question-5"),
			answer: `"${t("answer-5")}"`,
			isAnswerVisible: false,
			srcIcon: "/icons/arrowDown_icon_black.svg"
		}
	]);

	const switchSrcIcon = (iconColor: string, id: number | null) => {
		const newArray = [...questionsAndAnswersArray];
		if (id) {
			const getIndex = newArray.findIndex((element) => element.id === id);
			newArray[getIndex].srcIcon =
				iconColor === "white"
					? "/icons/arrowDown_icon.svg"
					: "/icons/arrowDown_icon_black.svg";
		} else {
			for (const element of newArray) {
				element.srcIcon =
					iconColor === "white"
						? "/icons/arrowDown_icon.svg"
						: "/icons/arrowDown_icon_black.svg";
			}
		}
		setQuestionsAndAnswersArray(newArray);
	};

	useEffect(() => {
		if (resolvedTheme === "dark") {
			switchSrcIcon("white", null);
		} else {
			switchSrcIcon("black", null);
		}
	}, [resolvedTheme]);

	const showAnswer = (id: number) => {
		const newArray = [...questionsAndAnswersArray];
		const getIndex = newArray.findIndex((element) => element.id === id);
		newArray[getIndex].isAnswerVisible = true;
		setQuestionsAndAnswersArray(newArray);
	};

	return (
		<section className="mt-32 mx-4 flex flex-col gap-20 lg:ml-72">
			<h1 className="text-3xl text-center titleFont md:text-4xl">Portfolio - Robin Ponçon</h1>
			<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 shadow-lg bg-lighterBg dark:bg-greyBg sm:w-96">
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
				<div className="border-4 border-customViolet rounded-lg w-64 mx-auto flex flex-col md:flex-row md:w-full max-w-lg shadow-lg">
					<Image
						className="scale-x-[-1] rounded-t-[4px] md:rounded-tl-none md:rounded-tr-[4px] md:rounded-br-[4px]"
						alt="picture of robin"
						src="/images/photo_robin.png"
						width={256}
						height={256}
					/>
					<div className="p-2 bg-lighterBg dark:bg-greyBg rounded-b-[4px] md:rounded-l-[4px] md:p-3 md:my-auto">
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
				<div className="bg-lighterBg dark:bg-greyBg rounded-lg shadow-lg w-64 mx-auto p-4 flex flex-col gap-5 border-4 border-customViolet">
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
				<div className="bg-lighterBg dark:bg-greyBg rounded-lg shadow-lg w-64 mx-auto p-4 border-4 border-customViolet">
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
			<article className="flex flex-col gap-20">
				<div className="relative border-4 border-customVioletLighter rounded-lg p-4 w-64 mx-auto mt-10 shadow-lg bg-lighterBg dark:bg-greyBg sm:w-96">
					<Image
						className="absolute -top-20 -left-14"
						alt="robot illustration"
						src="/illustrations/robot_surprised.png"
						width={150}
						height={150}
					></Image>
					<p className="pl-12">{t("know-more")}</p>
					<p className="mt-2">{t("know-more-description")}</p>
				</div>
				<div className="flex flex-col gap-10">
					{questionsAndAnswersArray?.map((element) => (
						<div
							key={element.id}
							className="border-4 border-customViolet bg-lighterBg dark:bg-greyBg rounded-md w-full mx-auto max-w-xl shadow-lg"
						>
							<div className="flex gap-2 border-b-4 border-customViolet">
								<p className="font-semibold text-2xl px-4 bg-customViolet text-white flex items-center justify-center">
									Q
								</p>
								<strong className="p-2">{element.question}</strong>
							</div>
							<div className="p-4 italic">
								{element.isAnswerVisible ? (
									<p className="italic">{element.answer}</p>
								) : (
									<button
										className="flex gap-2 mx-auto px-2 py-1 rounded-lg hover:bg-gray-300 hover:text-black"
										onClick={() => showAnswer(element.id)}
										onMouseEnter={
											resolvedTheme === "dark"
												? () => switchSrcIcon("black", element.id)
												: undefined
										}
										onMouseLeave={
											resolvedTheme === "dark"
												? () => switchSrcIcon("white", element.id)
												: undefined
										}
									>
										<p>{t("see-answer")}</p>
										<Image
											alt="arrow down icon"
											src={element.srcIcon}
											width={24}
											height={24}
										/>
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</article>
		</section>
	);
}
