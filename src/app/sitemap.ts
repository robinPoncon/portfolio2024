import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://portfolio-robin-poncon.com",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en",
					fr: "https://portfolio-robin-poncon.com/fr"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/skills",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://acme.com/en/skills",
					fr: "https://acme.com/fr/competences"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/projects",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en/projects",
					fr: "https://portfolio-robin-poncon.com/fr/projets"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/experiences",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en/experiences",
					fr: "https://portfolio-robin-poncon.com/fr/experiences"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/contact",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en/contact",
					fr: "https://portfolio-robin-poncon.com/fr/contact"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/legal-notices",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en/legal-notices",
					fr: "https://portfolio-robin-poncon.com/fr/mentions-legales"
				}
			}
		},
		{
			url: "https://portfolio-robin-poncon.com/data-protection",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://portfolio-robin-poncon.com/en/data-protection",
					fr: "https://portfolio-robin-poncon.com/fr/protection-des-donnees"
				}
			}
		}
	];
}
