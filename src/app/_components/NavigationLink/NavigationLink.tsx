"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

	const isActiveLink = (path: string[]) => {
		return path.includes(pathname);
	};

	return (
		<li
			onClick={setIsMenuOpen ? () => setIsMenuOpen(false) : undefined}
			className={`flex gap-2 w-fit px-2 py-1 rounded-lg ${
				isActiveLink(pathnamesChecked)
					? "bg-customViolet text-white"
					: "hover:bg-gray-300 "
			}`}
		>
			{resolvedTheme === "dark" || isActiveLink(pathnamesChecked) ? (
				<Image
					alt={altIcon}
					className="mb-auto"
					src={srcIcon.darkMode}
					width={24}
					height={24}
					onClick={setIsMenuOpen ? () => setIsMenuOpen(true) : undefined}
				/>
			) : (
				<Image
					alt={altIcon}
					className="mb-auto"
					src={srcIcon.lightMode}
					width={24}
					height={24}
					onClick={setIsMenuOpen ? () => setIsMenuOpen(true) : undefined}
				/>
			)}
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
