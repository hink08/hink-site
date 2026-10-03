// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { SITE } from './src/site.config.ts';

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	integrations: [mdx(), sitemap()],
	markdown: {
		// Code blocks follow the active light/dark theme via CSS light-dark().
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			defaultColor: 'light-dark()',
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['system-ui', 'sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
