import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export default function Home() {
	return (
		<div className="bg-white dark:bg-darkBg text-black dark:text-white">
			<h1 className="text-2xl text-customViolet ">Hello, world!</h1>
			<ThemeSwitch />
		</div>
	);
}
