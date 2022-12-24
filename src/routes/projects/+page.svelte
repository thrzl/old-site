<script>
	import Projects from '../../components/Projects.svelte';
	const title = ['🔨 ', 'p', 'r', 'o', 'j', 'e', 'c', 't', 's'];
</script>

<div class="App bg-black">
	<header
		class="mx-auto min-h-screen flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen m-auto"
	>
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline rise-wrapper whitespace-pre">
			{#each title as letter, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 50 + 100}ms`}
					>{`${letter}`}</span
				>
			{/each}
		</h1>
		<div class="links mb-1 text-base align-middle font-mono h-min-content">
			<a
				href="/"
				class="font-bold font-sans text-blue mb-4 transition-all ease-in-out duration-500 mx-3 leading-tight hover:scale-110"
			>
				🏠 home
			</a>
		</div>
		<div class="flex w-1/2 items-center" id="projects">
			<Projects />
		</div>
	</header>
</div>
