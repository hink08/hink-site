// Central place for site-wide settings. Import from anywhere:
//   import { SITE } from '../site.config';

export const SITE = {
	// Production URL — used for canonical URLs, the sitemap, and the RSS feed.
	url: 'https://ryanhinkle.info',
	title: 'Ryan Hinkle',
	description: 'Notes, projects, and writing by Ryan Hinkle.',
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
