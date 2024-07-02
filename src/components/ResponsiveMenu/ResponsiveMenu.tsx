"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type ResponsiveMenuProps = {
	locale: string;
};

const ResponsiveMenu = ({ locale }: ResponsiveMenuProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const t = useTranslations("Menu");
	const pathname = usePathname();
	console.log(pathname);

	const isActiveLink = (path: string) => {
		return usePathname() === path;
	};

	return (
		<section>
			<button className="cursor-pointer mx-2 my-1 w-fit">
				{isMenuOpen ? (
					<Image
						alt="icon responsive menu"
						src={"/icons/close_icon.svg"}
						width={48}
						height={48}
						onClick={() => setIsMenuOpen(false)}
					/>
				) : (
					<Image
						alt="icon close responsive menu"
						src={"/icons/menu_icon.svg"}
						width={48}
						height={48}
						onClick={() => setIsMenuOpen(true)}
					/>
				)}
			</button>
			{isMenuOpen && (
				<nav className="fixed top-0 w-full h-full">
					<ul>
						<li onClick={() => setIsMenuOpen(false)}>
							<Link
								className={` text-xl ${isActiveLink("/") ? "italic" : ""}`}
								href="/"
							>
								{t("home")}
							</Link>
						</li>
						<li onClick={() => setIsMenuOpen(false)}>
							<Link
								className={`text-xl ${
									isActiveLink("/skills" || "/competences") ? "italic" : ""
								}`}
								href={`/${locale}/skills`}
							>
								{t("skills")}
							</Link>
						</li>
						<li onClick={() => setIsMenuOpen(false)}>
							<Link
								className={`text-xl ${
									isActiveLink("/projects" || "/projets") ? "italic" : ""
								}`}
								href={`/${locale}/projects`}
							>
								{t("projects")}
							</Link>
						</li>
						<li onClick={() => setIsMenuOpen(false)}>
							<Link
								className={`text-xl ${
									isActiveLink("/experiences") ? "italic" : ""
								}`}
								href={`/${locale}/experiences`}
							>
								{t("experiences")}
							</Link>
						</li>
						<li onClick={() => setIsMenuOpen(false)}>
							<Link
								className={` text-xl ${isActiveLink("/contact") ? "italic" : ""}`}
								href={`/${locale}/contact`}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</section>
	);
};

export default ResponsiveMenu;
