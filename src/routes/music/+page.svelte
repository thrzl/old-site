<script>
	export let data;
	import Music from '../../components/Music.svelte';
</script>

<div class="App bg-black text-white">
	<header class="mx-auto min-h-screen flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen m-auto">
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre">
			{#each ['🎵 ', 'm', 'u', 's', 'i', 'c'] as word, index}
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
		<Music lastfm={data}/>
	</header>
</div>
