// Central place for site-wide settings. Import from anywhere:
//   import { SITE } from '../site.config';

export const SITE = {
	// Production URL — used for canonical URLs, the sitemap, and the RSS feed.
	url: 'https://ryanhinkle.info',
	title: 'Ryan Hinkle',
	description: 'CTO and systems architect in Omaha. Writing on architecture, technical design, and what I’m reading.',
	author: 'Ryan Hinkle',
	locale: 'en-US',
};

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/notes', label: 'Notes' },
	{ href: '/books', label: 'Books' },
	{ href: '/now', label: 'Now' },
	{ href: '/about', label: 'About' },
];

// Add more entries (e.g. linkedin, email) — icons live in components/SocialLinks.astro.
export const SOCIAL_LINKS = [
	{ name: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-hinkle-7358ba36/' },
	{ name: 'github', label: 'GitHub', href: 'https://github.com/hink08' },
	{ name: 'rss', label: 'RSS feed', href: '/rss.xml' },
] as const;

// Facts shown in the home page "system overview" diagram and the footer title block.
export const PROFILE = {
	role: 'Chief Technology Officer',
	roleShort: 'CTO',
	/** What the role looks like day to day — shown on the About spec sheet. */
	focus: 'Hands-on architecture & technical design',
	location: 'Omaha, NE',
	employer: { name: 'PS Technology', href: 'https://www.linkedin.com/in/ryan-hinkle-7358ba36/' },
	school: 'Mizzou',
	schoolFull: 'University of Missouri',
	interests: ['Systems architecture', 'Technical design', 'Platform engineering', 'Investing & capital allocation', 'Science'],
	repo: 'https://github.com/hink08/hink-site',
};
