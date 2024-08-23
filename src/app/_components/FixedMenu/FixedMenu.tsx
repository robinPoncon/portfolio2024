"use client";

import { useLoader } from "@/app/_context/LoaderContext";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const FixedMenu = () => {
	const { isLoading } = useLoader();

	return (
		<section
			className={`fixed z-40 bg-lightBg dark:bg-darkBg w-full flex justify-between lg:hidden ${
				isLoading ? "blur-md" : ""
			}`}
		>
			<ResponsiveMenu />
			<div className="flex">
				<ThemeSwitcher />
				<LocaleSwitcher />
			</div>
		</section>
	);
};

export default FixedMenu;
