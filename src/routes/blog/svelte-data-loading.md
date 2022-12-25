---
title: faster (correct) data loading in svelte
date: "2021-12-24"
image: /images/svelte-data-loading.webp
abstract: "loading data cybernetically has its perks!"
---
so, it turns out that i've been getting my data wrong since i switched to svelte.
# the old method
originally, to get around cors, i wrote some api routes that would fetch data from the server. for example, for the projects page, i had written a function called `getProjects` that would fetch the projects from the api route and just return json data. it was pretty simple, and looked something like this:
```javascript
async function getPosts() {
    const res = await fetch('/api/posts');
    return await res.json();
}
```
`/api/posts/+server.ts` looked like this:
```ts
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
```
the blog data did need to be loaded on the server, which is why i had to write it as an api route and couldn't just include it in the client-side code. however, this wasn't the most efficient method of getting this data, especially because of the fact that the blog data wasn't going to be updated so the posts page could just be rendered once during build time.

# the solution
after a short google search, i stumbled across svelte's ability to [prerender](https://kit.svelte.dev/docs/page-options#prerender) pages, which is exactly what i was looking for for the blog posts page. however, i noticed that for it to work and still accept data during build time, i had to use a `+page.server.ts` file that would provide the data through `export let data` in the actual `+page.svelte` file. starting with the blog page, i changed the code to prerender and to provide a `load()` function for the page:
```ts
// +page.server.ts
export const prerender = true; // very important!!

/** @type {import('./$types').PageServerLoad} */
export async function load() {
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

    return {posts: sortedPosts};
}
```
i was then able to replace the `<script>` tag in my `+page.svelte` file with just:
```html
<script>
    export let data;
    let posts = data.posts;
</script>
```
my page load times very much improved after this:

![page load times after prerendering](https://cdn.thrzl.xyz/r/vivaldi_8y4nZxjrjP.png)
> 💡 keep in mind that around 100ms is 'instant' to the human brain!

after switching over to the correct svelte data loading, all of my pages load just under 100ms, greatly improving performance (and making me very happy)