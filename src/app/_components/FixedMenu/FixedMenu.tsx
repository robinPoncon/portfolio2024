import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const FixedMenu = () => {
	return (
		<section className="fixed z-40 bg-lightBg dark:bg-darkBg w-full flex justify-between lg:hidden">
			<ResponsiveMenu />
			<div className="flex">
				<ThemeSwitcher />
				<LocaleSwitcher />
			</div>
		</section>
	);
};

export default FixedMenu;
