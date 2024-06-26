"use client";

import Image from "next/image";
import { useState } from "react";

const ResponsiveMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<button className="cursor-pointer m-2 w-fit">
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
	);
};

export default ResponsiveMenu;
