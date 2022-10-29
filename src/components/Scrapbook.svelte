<script>
	async function getPosts() {
		const res = await fetch('/api/scrapbook');
		return await res.json();
	}
	const data = getPosts();
</script>

{#await data}
	<div class="mt-3 grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
		{#each [...Array(6)] as _}
			<div>
				<div
					class={`border-0 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5 animate-pulse bg-neutral-900 duration-1000`}
				>
					<h2 class="invisible font-bold inline w-min md:w-full md:block truncate">
						a litte something
					</h2>
					<h3 class="invisible hidden md:block w-min md:w-full text-base truncate">
						just to reserve
					</h3>
					<div class="invisible md:mb-7 p-0 m-0" />
					<h4
						class="invisible md:fixed inline font-bold w-max mr-3 text-sm md:bottom-3 md:right-5 md:clear-both"
					>
						1337
					</h4>
					<h5
						class="invisible md:fixed inline font-bold w-max text-sm md:bottom-3 md:left-5 md:clear-both"
					>
						some space
					</h5>
				</div>
			</div>
		{/each}
	</div>
{:then posts}
	<div class="mt-3 w-full mx-auto">
		{#each posts as post, i (post.id)}
			<div>
				<div
					class="border-0 duration-500 scale-100 hover:scale-105 relative mx-auto rounded-lg shadow-none fontcalc h-full p-5 bg-neutral-800 my-3"
				>
					<h3 class="text-white md:block md:w-full text-base wrap lowercase">
						{post.text}
					</h3>
					{#each post.attachments as image (image)}
						{#if image.endsWith("mp4")}
							<video class="w-9/10 rounded-sm my-3" autoplay loop muted>
								<source src={image} type="video/mp4" />
							</video>
						{:else}
							<img src={image} class="w-9/10 rounded-sm my-3 mx-auto" alt="what i worked on" />
						{/if}
					{/each}
					<h4
						class="text-white font-bold text-sm lowercase
							"
					>
						{new Date(post.postedAt).toDateString()}
					</h4>
				</div>
			</div>
		{/each}
	</div>
{/await}
