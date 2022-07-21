<script>
	import profilePic from '../../static/logo192.webp';
	const title = "👋🏽 heyo, i'm thrizzle.";
</script>

<div class="App bg-black text-white">
	<header class="App-header m-auto">
		<img
			width="160px"
			height="160px"
			src={profilePic}
			class="rounded-full relative"
			alt="profile"
		/>
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre">
			{#each title.split(' ') as word, index}
				<span class="rise-anim inline-flex" style={`--delay: ${index * 100 + 100}ms`}
					>{`${word}`}{index !== title.split(' ').length - 1 ? ' ' : ''}</span
				>
			{/each}
		</h1>
		<div
			class="links flex text-base align-middle font-mono h-min-content rise-wrapper font-bold transition-all duration-500 ease-in-out"
		>
			<a
				href="https://blog.thrzl.xyz"
				class="text-gradient my-3 mx-6 from-blue-600 to-blue-400 bg-gradient-to-br transition-all leading-tight scale-110 rise-anim inline-flex border-blue-400 hover:border-blue-600"
				style={`--delay: ${(title.split(' ').length + 1) * 100 + 100}ms`}
			>
				blog
			</a>
			<a
				href="/projects"
				class="text-gradient my-3 mx-6 from-purple-600 to-indigo-400 bg-gradient-to-br transition-all leading-tight rise-anim inline-flex border-indigo-400 hover:border-purple-600"
				style={`--delay: ${(title.split(' ').length + 2) * 100 + 100}ms`}
			>
				projects
			</a>
			<a
				href="/music"
				class="text-gradient my-3 mx-6 from-orange-600 to-orange-400 bg-gradient-to-br transition-all leading-tight rise-anim inline-flex border-orange-400 hover:border-orange-600"
				style={`--delay: ${(title.split(' ').length + 3) * 100 + 100}ms`}
			>
				music
			</a>
			<a
				href="/resume"
				class="text-gradient my-3 mx-6 from-gray-300 to-white bg-gradient-to-br transition-all leading-tight rise-anim inline-flex border-gray-400 hover:border-neutral-600"
				style={`--delay: ${(title.split(' ').length + 2) * 100 + 100}ms`}
			>
				resume
			</a>
		</div>
		<p class="text-base my-3 text-left font-bold w-1/2">
			hey there! you've probably never heard of me, but i make random things on the net. i use rust,
			docker, python, go, and of course javascript. you can check out 🔨 <a
				href="/projects"
				class="text-gradient bg-gradient-to-br underline from-purple-600 to-indigo-400 border-indigo-400 hover:border-purple-600"
				>some of my projects</a
			>, or 🎵
			<a
				href="/music"
				class="text-gradient bg-gradient-to-br underline from-orange-600 to-orange-400 border-orange-400 hover:border-orange-600"
				>see what i've been listening to</a
			>. thanks for reading!
		</p>
	</header>
</div>
