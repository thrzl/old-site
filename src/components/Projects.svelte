<script>
	import Star from "./icons/StarIcon.svelte"
	import Fork from "./icons/ShareIcon.svelte"
	async function getProjects() {
		const res = await fetch('/api/pinned_repos');
		return await res.json();
	}
	const projects = getProjects();
</script>

{#await projects}
	<div class="mt-5 grid gap-12 gap-y-2 grid-cols-1 md:grid-cols-2 w-full">
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
							<div class="flex justify-between">
								<h5
								class="font-bold invisible w-max text-sm md:bottom-3 md:left-5 md:clear-both lowercase leading-tight my-0"
								>
								some language
								</h5>
								<h4
								class="text-white font-bold w-max mr-3 text-sm md:bottom-1 md:right-5 md:clear-both leading-none my-0
								"
							>
								<Star/> 50 | <Fork/> 50
							</h4>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
{:then data}
	<div class="mt-5 grid gap-12 gap-y-2 grid-cols-1 md:grid-cols-2 w-full">
		{#each data.repos as repo, i (repo.name)}
			<div>
				<a class="w-full h-full whitespace-nowrap md:text-left decoration-none" href={repo.link}>
					<div
						class="border-0 duration-500 scale-100 hover:scale-105 relative rounded-lg shadow-none fontcalc h-fit w-full p-5 bg-neutral-800 v-middle"
					>
						<div class="my-auto">
							<h2 class="text-white font-bold text-3xl inline w-min md:w-full md:block truncate lowercase leading-none my-3">
								{repo.name}
							</h2>
							<h3 class="text-white hidden text-lg md:block w-min md:w-full text-base truncate lowercase leading-none my-3">
								{repo.description}
							</h3>
							<div class="flex justify-between">
								<h5
								class="font-bold w-max text-sm md:bottom-3 md:left-5 md:clear-both lowercase leading-tight my-0"
								style={`color: ${repo.language_color}`}
								>
								{repo.language}
								</h5>
								<h4
								class="text-white font-bold w-max mr-3 text-sm md:bottom-1 md:right-5 md:clear-both leading-none my-0
								"
							>
								<Star/> {repo.stars} | <Fork/> {repo.forks}
							</h4>
							</div>
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
{/await}
