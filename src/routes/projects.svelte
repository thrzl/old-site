<script>
	import profilePic from '../../static/logo192.webp';
	import Projects from '../Projects.svelte';
	import Presence from '../Presence.svelte';
	import Spotify from '../Spotify.svelte';
	const title = ["🔨 ", "p", "r", "o", "j", "e", "c", "t", "s"];
</script>

<div class="App bg-black">
	
	<header class="App-header m-auto">
		<h1 class="headertext my-2 font-bold sm:tagline m-0 sm:text-small rise-wrapper">
			{#each title as letter, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 100 + 100}ms`}
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
		<div class="flex w-1/2 items-center" id="projects">
			<Projects />
		</div>
	</header>
</div>
