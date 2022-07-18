/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	const res = await fetch('https://pinned.thrzl.xyz/terabyte3');
	if (res) {
		const repos = await res.json();
		return {
			body: { repos }
		};
	}
	return { status: 500 };
}
