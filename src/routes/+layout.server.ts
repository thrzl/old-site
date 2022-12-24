/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url }) {
    return {
        refresh: url.pathname
    };
}