import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "fr"],

	// Used when no locale matches
	defaultLocale: "fr",
	
	pathnames: {
		"/skills": {
			en: "/skills",
			fr: "/competences"
		},
		"/projects": {
			en: "/projects",
			fr: "/projets"
		},
		"/legal-notices": {
			en: "/legal-notices",
			fr: "/mentions-legales"
		},
		"data-protection": {
			en: "data-protection",
			fr: "protection-des-donnees"
		}
	}
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(fr|en)/:path*"]
};
