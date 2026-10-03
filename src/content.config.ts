import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Long-form posts. */
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

/** Short-form thoughts — quick ideas, links, observations. */
const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const BOOK_STATUSES = ['reading', 'finished', 'want-to-read', 'abandoned'] as const;

/** Bookshelf. One file per book; the Markdown body (optional) holds your notes/review. */
const books = defineCollection({
	loader: glob({ base: './src/content/books', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			status: z.enum(BOOK_STATUSES),
			started: z.coerce.date().optional(),
			finished: z.coerce.date().optional(),
			/** 1–5 stars. */
			rating: z.number().int().min(1).max(5).optional(),
			cover: image().optional(),
			/** Link to the book (publisher, Bookshop, Goodreads, …). */
			link: z.url().optional(),
			/** One-line takeaway shown on the bookshelf list. */
			summary: z.string().optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, notes, books };
