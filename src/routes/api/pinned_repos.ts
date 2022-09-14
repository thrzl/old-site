/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const res = await fetch('https://pinned.thrzl.xyz/thrzl');
	if (res) {
		const repos = await res.json();
		return {
			body: { repos }
		};
	}
	return { status: 500 };
}
