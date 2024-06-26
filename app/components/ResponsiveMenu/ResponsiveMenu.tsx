"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ResponsiveMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
			<nav>
				<ul>
					<li onClick={() => setIsMenuOpen(false)}>
						<Link
							className={` text-xl ${isActiveLink("/") ? "italic" : ""}`}
							href="/"
						>
							Accueil
						</Link>
					</li>
					<li onClick={() => setIsMenuOpen(false)}>
						<Link
							className={` text-xl ${isActiveLink("/competences") ? "italic" : ""}`}
							href="/competences"
						>
							Compétences
						</Link>
					</li>
					<li onClick={() => setIsMenuOpen(false)}>
						<Link
							className={` text-xl ${isActiveLink("/projets") ? "italic" : ""}`}
							href="/projets"
						>
							Projets
						</Link>
					</li>
					<li onClick={() => setIsMenuOpen(false)}>
						<Link
							className={` text-xl ${isActiveLink("/experiences") ? "italic" : ""}`}
							href="/experiences"
						>
							Expériences
						</Link>
					</li>
					<li onClick={() => setIsMenuOpen(false)}>
						<Link
							className={` text-xl ${isActiveLink("/contact") ? "italic" : ""}`}
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default ResponsiveMenu;
