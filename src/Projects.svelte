<script>
	async function getProjects() {
    	const res = await fetch("/api/pinned_repos");
    	return await res.json();
  	}
	const projects = getProjects();
</script>

{#await projects}
	<div class="mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full">
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
						⭐ 1337
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
{:then data}
	<div class="mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full">
		{#each data.repos as repo, i (repo.name)}
			<div>
				<a class="w-full h-full whitespace-nowrap md:text-left text-center" href={repo.link}>
					<div
						class="border-0 duration-500 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5 bg-neutral-800"
					>
						<h2 class="text-white font-bold inline w-min md:w-full md:block truncate lowercase">
							{repo.name}
						</h2>
						<h3 class="text-white hidden md:block w-min md:w-full text-base truncate lowercase">
							{repo.description}
						</h3>
						<div class="md:mb-7 p-0 m-0" />
						<h4
							class="text-white md:fixed inline font-bold w-max mr-3 text-sm md:bottom-3 md:right-5 md:clear-both"
						>
							⭐ {repo.stars}
						</h4>
						<h5 class="md:fixed inline font-bold w-max text-sm md:bottom-3 md:left-5 md:clear-both lowercase" style={`color: ${repo.language_color}`}>
							{repo.language}
						</h5>
					</div>
				</a>
			</div>
		{/each}
	</div>
{/await}
