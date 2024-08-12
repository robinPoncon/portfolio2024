import { useLocale } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const FixedMenu = () => {
	return (
		<section className="fixed z-30 bg-lightBg dark:bg-darkBg w-full flex justify-between">
			<ResponsiveMenu />
			<div className="flex">
				<ThemeSwitcher />
				<LocaleSwitcher />
			</div>
		</section>
	);
};

export default FixedMenu;
