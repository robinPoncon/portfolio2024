"use client";

import { useEffect, useState } from "react";
import "./CookieBar.scss";

const CookieBar = () => {
	const [consent, setConsent] = useState<boolean | null>(false);

	useEffect(() => {
		setConsent(localStorage?.getItem("cookieConsentPortfolio") === "true" ? true : null);
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsentPortfolio", "true");
		setConsent(true);
	};

	const handleDecline = () => {
		localStorage.setItem("cookieConsentPortfolio", "false");
		setConsent(false);
	};

	return consent === null ? (
		<div className="cookieBarComponent flex-col md:flex-row md:gap-10 lg:gap-20 xl:gap-80 xl:px-5">
			<div className="text-sm text-justify">
				<p>
					J'utilise des cookies pour vous offrir la meilleure expérience possible sur mon
					site. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les
					cookies. Si vous préférez ne pas les accepter, vous pouvez choisir de les
					refuser.
				</p>
			</div>
			<div className="flex gap-10 mt-5 justify-center md:mt-0">
				<button onClick={handleAccept}>Accepter</button>
				<button onClick={handleDecline}>Refuser</button>
			</div>
		</div>
	) : null;
};

export default CookieBar;
