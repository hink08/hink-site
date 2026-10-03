import { type CollectionEntry, getCollection } from 'astro:content';
import type { BOOK_STATUSES } from '../content.config';

export type Book = CollectionEntry<'books'>;
export type BookStatus = (typeof BOOK_STATUSES)[number];

export const STATUS_LABELS: Record<BookStatus, string> = {
	reading: 'Currently reading',
	finished: 'Finished',
	'want-to-read': 'Up next',
	abandoned: 'Put down',
};

/** Order the shelves appear in on /books. */
export const SHELF_ORDER: BookStatus[] = ['reading', 'want-to-read', 'finished', 'abandoned'];

/** Most relevant date for sorting: finished, else started. */
function sortDate(book: Book): number {
	return (book.data.finished ?? book.data.started)?.valueOf() ?? 0;
}

/** All published books, most recent activity first. Drafts are visible only in `astro dev`. */
export async function getBooks(): Promise<Book[]> {
	const books = await getCollection('books', ({ data }) => import.meta.env.DEV || !data.draft);
	return books.sort((a, b) => sortDate(b) - sortDate(a));
}

export async function getBooksByStatus(status: BookStatus): Promise<Book[]> {
	return (await getBooks()).filter((b) => b.data.status === status);
}

/** Books only get their own page if they have notes written in the body. */
export function hasNotes(book: Book): boolean {
	return Boolean(book.body?.trim());
}

export function bookUrl(book: Book): string {
	return `/books/${book.id}/`;
}
