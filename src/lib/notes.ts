import { type CollectionEntry, getCollection } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

/** Published notes, newest first. Drafts are visible only in `astro dev`. */
export async function getNotes(): Promise<Note[]> {
	const notes = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
	return notes.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function noteUrl(note: Note): string {
	return `/notes/${note.id}/`;
}
