import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export default function Home() {
	return (
		<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
			<h1 className="text-2xl">Hello, world!</h1>
			<ThemeSwitch />
		</div>
	);
}
