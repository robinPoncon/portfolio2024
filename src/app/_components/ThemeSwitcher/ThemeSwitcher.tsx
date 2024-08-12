"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			className="rounded-md px-2 py-2 mt-2 bg-customViolet h-[44px]"
			onClick={() => (resolvedTheme === "light" ? setTheme("dark") : setTheme("light"))}
		>
			{resolvedTheme === "light" ? (
				<Image
					alt="icon dark mode"
					src="/icons/dark-mode_icon.svg"
					height={24}
					width={24}
				/>
			) : (
				<Image
					alt="icon light mode"
					src="/icons/light-mode_icon.svg"
					height={24}
					width={24}
				/>
			)}
		</button>
	);
};

export default ThemeSwitcher;
