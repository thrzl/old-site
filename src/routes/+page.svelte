<script>
import SpotifyBlurb from "../components/SpotifyBlurb.svelte";

	// import profilePic from '/logo192.webp';
	const title = "👋🏽  i'm terry.";
</script>

<div class="text-center bg-black text-white ">
	<header class="mx-auto min-h-screen flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen m-auto">
		<img
			width="160px"
			height="160px"
			src="/profile.webp"
			class="rounded-full relative"
			alt="profile"
		/>
			<h1
				class="headertext mt-2 font-900 pb-2 text-7xl sm:tagline m-0 rise-wrapper whitespace-pre text-left w-fit"
			>
				{#each title.split(' ') as word, index}
					{#if index === 0}
						<span class="rise-anim md:inline-flex block" style={`--delay: ${index * 100 + 100}ms`}
							><span class="wave m-2">{`${word}`} </span>{index !== title.split(' ').length - 1
								? ' '
								: ''}</span
						>
					{:else if index !== 1}
						<span class="rise-anim md:inline-flex block " style={`--delay: ${index * 100 + 100}ms`}
							>{`${word}`}{index !== title.split(' ').length - 1 ? ' ' : ''}</span
						>
					{/if}
				{/each}
			</h1>
			<div
				class="links inline mx-auto text-base h-min-content rise-wrapper font-extrabold transition-all duration-500 ease-in-out"
			>
				<a
					href="/projects"
					class=" my-3 mx-3 text-purple md:mx-6 transition-all leading-tight rise-anim inline-flex"
					style={`--delay: ${(title.split(' ').length + 2) * 100 + 100}ms`}
				>
					projects
				</a>
				<a
					href="/blog"
					class=" my-3 mx-3 text-stone md:mx-6 transition-all leading-tight rise-anim inline-flex"
					style={`--delay: ${(title.split(' ').length + 2) * 100 + 100}ms`}
				>
					blog
				</a>
				<a
					href="/music"
					class=" my-3 mx-3 text-green-300 md:mx-6 transition-all leading-tight rise-anim inline-flex"
					style={`--delay: ${(title.split(' ').length + 3) * 100 + 100}ms`}
				>
					music
				</a>
				<a
					href="/resume"
					class=" my-3 mx-3 md:mx-6 text-white transition-all leading-tight rise-anim inline-flex"
					style={`--delay: ${(title.split(' ').length + 4) * 100 + 100}ms`}
				>
					resume
				</a>
				<a
					href="/scrapbook"
					class=" my-3 mx-3 md:mx-6 text-purple-200 transition-all leading-tight rise-anim inline-flex"
					style={`--delay: ${(title.split(' ').length + 4) * 100 + 100}ms`}
				>
					scrapbook
				</a>
			</div>
			<p class="text-base my-3 text-left font-extrabold w-1/2">
				hey, i'm terry! i currently do research and development @ <a
					href="https://ey3tech.vercel.app/"
					class="group text-blue"
					>ey3 technologies <span
						class="inline-block font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-out"
						>↗</span
					></a
				>. i can create amazing frontend experiences, and speedy backend resources. i use rust,
				python, svelte, javascript, and more! <SpotifyBlurb/>
				
			</p>
	</header>
</div>
