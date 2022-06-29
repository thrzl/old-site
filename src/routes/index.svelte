<script>
	import profilePic from '../../static/logo192.webp';
	import Projects from '../Projects.svelte';
	import Presence from '../Presence.svelte';
	import Moosync from '../Moosync.svelte';
	const title = "heyo, i'm thrizzle."
</script>

<div class="App bg-black">
	<div id="moosync">
		<Moosync />
	</div>
	<div id="presence">
		<Presence />
	</div>
	<header class="App-header m-auto">
		<img
			width="160px"
			height="160px"
			src={profilePic}
			class="rounded-full relative"
			alt="profile"
		/>
		<h1
			class="headertext my-2 font-bold sm:tagline m-0 sm:text-small rise-wrapper"
		>
			{#each title.split(" ") as word, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 100 + 100}ms`}>{`${word}`}{index !== title.split(' ').length - 1 ? ' ' : ''}</span> 
			{/each}
		</h1>
		<div class="links flex text-base align-middle font-mono h-min-content">
			<a
				href="https://github.com/terabyte3"
				class="text-white text-gradient p-3 from-gray-600 to-white bg-gradient-to-br transition-all ease-in-out duration-500 hover:font-boldhover:from-white hover:to-gray-600 mx-3 leading-tight font-mono"
			>
				/gh
			</a>
			<a
				href="https://fermi.thrzl.xyz"
				class="text-white text-gradient p-3 from-purple-600 to-indigo-400 bg-gradient-to-br transition-all ease-in-out duration-500 hover:from-indigo-400 hover:to-purple-600 mx-3 leading-tight font-mono"
			>
				/fermi
			</a>
			<a
				href="https://crust.thrzl.xyz"
				class="text-white text-gradient p-3 from-orange-600 to-orange-400 bg-gradient-to-br transition-all ease-in-out duration-500 hover:from-orange-400 hover:to-orange-600 mx-3 leading-tight font-mono"
			>
				/crust
			</a>
		</div>
		<div class="flex w-1/2 items-center" id="projects">
			<Projects />
		</div>
	</header>
</div>
