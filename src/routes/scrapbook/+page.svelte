<script>
	import Scrapbook from '../../components/Scrapbook.svelte';
	const title = ['📑 ', 's', 'c', 'r', 'a', 'p', 'b', 'o', 'o', 'k'];
	export let data;
</script>

<div class="App bg-black">
	<header
		class="mx-auto min-h-screen flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen m-auto"
	>
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre">
			{#each title as letter, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 50 + 100}ms`}
					>{`${letter}`}</span
				>
			{/each}
		</h1>
		<div class="links mb-1 text-base align-middle font-mono h-min-content">
			<a
				href="/"
				class="font-bold transition-all ease-in-out duration-500 mx-3 leading-tight hover:scale-110"
			>
				🏠 home
			</a>
		</div>
		<div class="flex w-4/5 md:w-1/2 items-center" id="projects">
			<Scrapbook postsRaw={data}/>
		</div>
	</header>
</div>
