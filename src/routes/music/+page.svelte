<script>
	import Music from '../Music.svelte';
</script>

<div class="App bg-black">
	<header class="App-header m-auto">
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre">
			{#each ['🎵 ', 'm', 'u', 's', 'i', 'c'] as word, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 50 + 100}ms`}
					>{`${word}`}</span
				>
			{/each}
		</h1>
		<div class="links mb-1 text-base align-middle font-mono h-min-content">
			<a href="/" class="font-bold transition-all ease-in-out duration-500 mx-3 leading-tight">
				🏠 home
			</a>
		</div>
		<Music />
	</header>
</div>
