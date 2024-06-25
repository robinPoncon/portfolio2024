"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	if (resolvedTheme === "dark") {
		return (
			<button
				className="rounded-md py-2 px-4 bg-customViolet hover:bg-customViolet"
				onClick={() => setTheme("light")}
			>
				light btn
			</button>
		);
	}

	if (resolvedTheme === "light") {
		return (
			<button
				className="border-2 rounded-md py-2 px-4 hover:bg-customViolet"
				onClick={() => setTheme("dark")}
			>
				dark btn
			</button>
		);
	}
	return <div>test</div>;
};

export default ThemeSwitch;
