<script lang="ts">
	async function getMusic() {
		const res = await fetch('/api/music');
		return await res.json();
	}
	const lastfm = getMusic();
</script>

{#await lastfm}
	<div class="w-3/4 mx-auto">
		<p class="text-base lowercase">
			i've been listening to <span class="animate-pulse bg-[#141414] -p-1 rounded-full">
				<p class="font-bold invisible inline"
					>xhulooo</p
				>
			</span>
			a lot lately. my favorite song right now is
			<span class="animate-pulse bg-[#141414] rounded-full"><p class="font-bold invisible inline"
				>suburban - xhulooo</p
			></span>
		</p>
		<div
			class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 before:z-10" style="-webkit-mask-image: linear-gradient(to right,#0000 0%,#000 25%,#000 75%,#0000 100%);"
		>
			<div
				class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid grid-rows-2 grid-cols-[repeat(24,calc(9rem))] md:grid-cols-[repeat(24,calc(12rem))] lg:grid-cols-[repeat(24,calc(14rem))] grid-flow-col gap-4 gap-x-12 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
			>
				{#each [...Array(48)] as _, i}
					<div
						class="border-0 group relative mx-8 snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 max-h-[300px] w-64 h-64"
						style={`--delay: ${i * 100 + 200}ms`}
					>
						<div class="bg-slate-900 rounded-lg overflow-hidden max-h-[300px] w-64 h-64">
							<img
								src={'/music.webp'}
								alt={`placeholder cover art`}
								class="rounded-lg transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-hover:brightness-50 w-64 h-64"
							/>
						</div>
						<div
							class="text-white z-20 absolute text-op-80 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase"
						>
							<p class="font-bold text-xl md:text-2xl truncate leading-none mb-0">
								loading
							</p>
							<p class="text-sm md:text-base leading-none md:leading-tight opacity-80 mt-1">
								mmusic data
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	
{:then lastfm}
	<div class="w-3/4 mx-auto">
		<p class="text-base lowercase">
			i've been listening to <a class="font-bold text-red" href={lastfm.topArtist.url}
				>
				{#if !lastfm.topArtist.image[0]["#text"]}
					<img src={lastfm.topArtist.image[0]["#text"]} alt="artist profile" class="rounded-full relative inline w-4"/> 
				{/if} {lastfm.topArtist.name}</a
			>
			a lot lately. my favorite song right now is
			<a class="font-bold text-red" href={lastfm.topTracks[0].url}
				>{lastfm.topTracks[0].name} - {lastfm.topTracks[0].artist.name}</a
			>
		</p>
		<div
			class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 before:z-10" style="-webkit-mask-image: linear-gradient(to right,#0000 0%,#000 25%,#000 75%,#0000 100%);"
		>
			<div
				class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid grid-rows-2 grid-cols-[repeat(24,calc(9rem))] md:grid-cols-[repeat(24,calc(12rem))] lg:grid-cols-[repeat(24,calc(14rem))] grid-flow-col gap-4 gap-x-12 overflow-x-scroll no-scrollbar snap-x snap-mandatory slide-wrapper"
			>
				{#each lastfm.topTracks as track, i}
					<a
						href={track.url}
						target="_blank"
						rel="noopener noreferrer"
						class="border-0 group relative mx-8 snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 max-h-[300px] w-64 h-64 slide-anim"
						style={`--delay: ${i * 100 + 200}ms`}
					>
						<div class="bg-slate-900 rounded-lg overflow-hidden max-h-[300px] w-64 h-64">
							<img
								src={track.image || '/music.webp'}
								alt={`${track.name} cover art`}
								class="rounded-lg transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-hover:brightness-50 w-64 h-64"
							/>
						</div>
						<div
							class="text-white z-20 absolute text-op-80 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase"
						>
							<p class="font-bold text-xl md:text-2xl truncate leading-none mb-0">
								{track.name}
							</p>
							<p class="text-sm md:text-base leading-none md:leading-tight opacity-80 mt-1">
								{track.artist.name}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/await}
