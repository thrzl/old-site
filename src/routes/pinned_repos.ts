/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const res = await fetch('https://pinned.terabyteis.me/terabyte3')
    if (res) {
        let repos = await res.json()
        return {
            body: {repos}
        }
    }
    return {status: 500}
}