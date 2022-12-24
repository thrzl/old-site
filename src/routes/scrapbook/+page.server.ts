/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await fetch('https://scrapbook.hackclub.com/api/users/thrzl');
	const data = await res.json();
	const scrapbookPosts = data.posts;
	return {posts: scrapbookPosts};

}
