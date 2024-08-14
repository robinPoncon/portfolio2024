"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
			onClick={() => setIsMenuOpen(false)}
			className={`flex gap-2 ${
				isActiveLink(pathnamesChecked)
					? "bg-customViolet rounded-lg text-white p-2 -ml-2"
					: ""
			}`}
		>
			{resolvedTheme === "dark" || isActiveLink(pathnamesChecked) ? (
				<Image
					alt={altIcon}
					className="my-auto"
					src={srcIcon.darkMode}
					width={24}
					height={24}
					onClick={() => setIsMenuOpen(true)}
				/>
			) : (
				<Image
					alt={altIcon}
					className="my-auto"
					src={srcIcon.lightMode}
					width={24}
					height={24}
					onClick={() => setIsMenuOpen(true)}
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
