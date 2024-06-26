"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	// if (resolvedTheme === "dark") {
	// 	return (
	// 		<button
	// 			className="rounded-md px-3 py-2 m-2 bg-customViolet"
	// 			onClick={() => setTheme("light")}
	// 		>
	// 			<Image
	// 				alt="icon light mode"
	// 				src="/icons/light-mode_icon.svg"
	// 				height={24}
	// 				width={24}
	// 			/>
	// 		</button>
	// 	);
	// }

	return (
		<button
			className="rounded-md px-2 py-2 m-2 bg-customViolet absolute top-0 right-0"
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

	return <div>test</div>;
};

export default ThemeSwitch;
