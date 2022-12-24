<script>
    async function getPosts() {
		const res = await fetch('/api/posts');
		return await res.json();
	}
    let posts = getPosts();
</script>

<div class="App bg-black text-white">
	<header class="mx-auto min-h-screen flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen m-auto">
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre">
			{#each ['⌨️ ', 'b', 'l', 'o', 'g'] as word, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 50 + 100}ms`}
					>{`${word}`}</span
				>
			{/each}
		</h1>
		<div class="links mt-4 text-base align-middle font-mono h-min-content">
			<a href="/" class="font-bold text-blue font-sans transition-all ease-in-out duration-500 mx-3 leading-tight">
				🏠 home
			</a>
		</div>
{#await posts}
<div class="mt-5 grid gap-12 gap-y-2 grid-cols-1 w-full">
    {#each [...Array(6)] as _, i}
        <div>
            <a class="w-full h-full whitespace-nowrap md:text-left decoration-none" href="#">
                <div
                    class="border-0 duration-500 scale-100 hover:scale-105 relative rounded-lg shadow-none fontcalc h-fit w-full p-5 bg-neutral-800 v-middle"
                >
                    <div class="my-auto">
                        <h2 class="text-white invisible font-bold text-3xl inline w-min md:w-full md:block truncate lowercase leading-none my-3">
                            repo name
                        </h2>
                        <h3 class="text-white invisible hidden text-lg md:block w-min md:w-full text-base truncate lowercase leading-none my-3">
                            repo description
                        </h3>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</div>
{:then posts}
<div class="mt-5 grid gap-12 gap-y-2 grid-cols-1 w-3/4 md:w-full rise-wrapper">
    {#each posts as post, _}
        <div class="rise-anim">
            <a class="w-full h-full whitespace-nowrap md:text-left decoration-none" href={post.path}>
                <div
                    class="border-0 flex-col md:flex-row flex duration-500 scale-100 hover:scale-105 rounded-lg shadow-none fontcalc h-fit w-full p-5 bg-neutral-800 v-middle bg-op-50 hover:scale-[1.03] group-hover:blur-sm"
                >
                    <img src="{post.meta.image}" class="-z-20 overflow-clip w-32 h-32 m-0 object-cover rounded-lg mr-5" alt="{post.meta.title}"/>
                    <div class="my-auto">
                        <h2 class="text-white text-left font-bold text-3xl inline md:w-full block truncate lowercase leading-none my-3">
                            {post.meta.title}
                        </h2>
                        <h3 class="text-white text-lg block md:w-full text-base truncate lowercase leading-none my-3 max-w-full">
                            {post.meta.abstract}
                        </h3>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</div>
{/await}
</header>
</div>