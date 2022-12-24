import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(11, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return json(
        sortedPosts
    );
}
