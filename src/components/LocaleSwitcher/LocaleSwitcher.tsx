"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const LocaleSwitcher = () => {
	const [isPending, startTransition] = useTransition();
	const [isOpenBtn, setIsOpenBtn] = useState(false);
	const router = useRouter();
	const localeActive = useLocale();
	const pathname = usePathname();

	const changeLanguage = (nextLocale: string) => {
		const newPathname = pathname.replace(localeActive, nextLocale);
		startTransition(() => {
			router.replace(newPathname);
		});
	};

	return (
		<button
			onClick={() => setIsOpenBtn(!isOpenBtn)}
			disabled={isPending}
			className="bg-customViolet absolute rounded-md px-2 py-2 m-2 w-fit right-0 top-12 flex flex-col gap-2"
		>
			<Image
				alt="icon language selection"
				src="/icons/language_icon.svg"
				width={24}
				height={24}
			/>
			{isOpenBtn ? (
				<p
					className="font-bold text-white"
					onClick={() => changeLanguage(localeActive === "fr" ? "en" : "fr")}
				>
					{localeActive === "fr" ? "EN" : "FR"}
				</p>
			) : null}
		</button>
	);
};

export default LocaleSwitcher;
