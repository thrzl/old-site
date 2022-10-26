import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch('https://scrapbook.hackclub.com/api/users/thrzl');
	if (res) {
        const data = await res.json();
        const scrapbookPosts = data.posts;
		return json(scrapbookPosts);
	}
	return json({ status: 500 });
}
