import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch('https://pinned.thrzl.xyz/thrzl');
	if (res) {
		const repos = await res.json();
		return json({repos});
	}
	return json({ status: 500 });
}
