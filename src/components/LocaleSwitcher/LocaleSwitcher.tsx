"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocaleSwitcher = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localeActive = useLocale();
	const pathname = usePathname();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		const newPathname = pathname.replace(localeActive, nextLocale);
		startTransition(() => {
			router.replace(newPathname);
		});
	};

	return (
		<label className="border-2 rounded">
			<p className="sr-only">change language</p>
			<select
				defaultValue={localeActive}
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value="en">English</option>
				<option value="fr">Français</option>
			</select>
		</label>
	);
};

export default LocaleSwitcher;
