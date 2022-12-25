<script>
    export let data;
    let posts = data.posts;
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
            <div class="w-full h-full whitespace-nowrap md:text-left decoration-none">
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
            </div>
        </div>
    {/each}
</div>
{:then posts}
<div class="mt-5 grid gap-12 gap-y-2 grid-cols-1 w-3/4 md:w-full rise-wrapper rounded-lg">
    {#each posts as post, i}
        <div class="rise-anim rounded-lg" style={`--delay: ${i * 50 + 100}ms`}>
            <a class="w-full h-full whitespace-nowrap md:text-left decoration-none" href={post.path}>
                <div
                    class="border-0 flex-col md:flex-row flex scale-100 rounded-lg shadow-none fontcalc h-fit w-full p-5 bg-neutral-800 v-middle group"
                >
                    <img src="{post.meta.image}" class="-z-20 -mt-5 -ml-5 absolute w-full h-full duration-500 overflow-clip object-cover rounded-lg mr-5 group-hover:scale-[1.05] brightness-70 transition-all" alt="{post.meta.title}"/>
                    <div class="my-auto max-w-5/6">
                        <h2 class="text-white text-left font-bold whitespace-normal break-normal text-3xl inline md:w-full block lowercase leading-none my-3">
                            {post.meta.title}
                        </h2>
                        <h3 class="text-white text-left text-lg block w-full text-base lowercase leading-none whitespace-normal break-normal my-3 max-w-full">
                            {post.meta.abstract}
                        </h3>
                    </div>
                </div>
            </a>
        </div>
    {/each}
    <div class="rise-anim rounded-lg" style={`--delay: ${(posts.length+1) * 50 + 100}ms`}>
        <div class="w-full h-full whitespace-nowrap md:text-left decoration-none brightness-50">
            <div
                class="border-0 flex-col md:flex-row flex scale-100 rounded-lg shadow-none fontcalc h-fit w-full p-5 bg-neutral-800 v-middle group"
            >
                <div class="my-auto max-w-5/6">
                    <h2 class="text-white text-left font-bold whitespace-normal break-normal text-3xl inline md:w-full block lowercase leading-none my-3">
                        more coming soon!
                    </h2>
                    <h3 class="text-white text-left text-lg block w-full text-base lowercase leading-none whitespace-normal break-normal my-3 max-w-full">
                        check back soon to see what i'll write about next :)
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>
{/await}
</header>
</div>