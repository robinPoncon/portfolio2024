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
		return <button onClick={() => setTheme("light")}>light btn</button>;
	}

	if (resolvedTheme === "light") {
		return <button onClick={() => setTheme("dark")}>dark btn</button>;
	}
	return <div>test</div>;
};

export default ThemeSwitch;
