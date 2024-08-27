"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavigationLinkProps = {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
	text: string;
	altIcon: string;
	srcIcon: {
		lightMode: string;
		darkMode: string;
	};
	href: string;
	pathnamesChecked: string[];
};

const NavigationLink = ({
	setIsMenuOpen,
	text,
	altIcon,
	srcIcon,
	href,
	pathnamesChecked
}: NavigationLinkProps) => {
	const pathname = usePathname();
	const { resolvedTheme } = useTheme();
	const [srcIconDisplayed, setSrcIconDisplayed] = useState(srcIcon.lightMode);

	const isActiveLink = (path: string[]) => {
		return path.includes(pathname);
	};

	useEffect(() => {
		if (resolvedTheme === "dark") {
			setSrcIconDisplayed(srcIcon.darkMode);
		} else {
			if (pathnamesChecked.includes(pathname)) {
				setSrcIconDisplayed(srcIcon.darkMode);
			}
			setSrcIconDisplayed(srcIcon.lightMode);
		}
	}, [resolvedTheme]);

	return (
		<li
			onClick={setIsMenuOpen ? () => setIsMenuOpen(false) : undefined}
			onMouseEnter={
				resolvedTheme === "dark" ? () => setSrcIconDisplayed(srcIcon.lightMode) : undefined
			}
			onMouseLeave={
				resolvedTheme === "dark" ? () => setSrcIconDisplayed(srcIcon.darkMode) : undefined
			}
			className={`flex gap-2 w-fit px-2 py-1 rounded-lg ${
				isActiveLink(pathnamesChecked)
					? "bg-customViolet text-white"
					: "hover:bg-gray-300 hover:text-black"
			}`}
		>
			<Image
				alt={altIcon}
				className="mb-auto"
				src={srcIconDisplayed}
				width={24}
				height={24}
				onClick={setIsMenuOpen ? () => setIsMenuOpen(true) : undefined}
			/>

			<Link
				className="text-xl"
				href={href}
			>
				{text}
			</Link>
		</li>
	);
};

export default NavigationLink;
