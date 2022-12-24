/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch('https://pinned.thrzl.xyz/thrzl');
    const repos = await res.json();
    return { repos };
}
