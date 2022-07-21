<script lang="ts">
	async function getMusic() {
		const res = await fetch('/api/music');
		return await res.json();
	}
	const lastfm = getMusic();
	import musicNote from '../static/music.webp';
</script>

{#await lastfm}
	<div class="w-3/4 mx-auto">
		<p class="text-base lowercase">
			i've been listening to <a class="font-bold animate-pulse">someone from lastfm</a> a lot
			lately. my favorite song right now is
			<a class="font-bold animate-pulse">song from lastfm - some artist</a>
		</p>
		<div
			class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 [mask-image:linear-gradient(to_right,#000_0%,#000_75%,#0000_100%)] lg:[mask-image:linear-gradient(to_right,#0000_0%,#000_25%,#000_75%,#0000_100%)] before:z-10"
		>
			<div
				class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid grid-rows-2 grid-cols-[repeat(12,calc(9rem))] md:grid-cols-[repeat(12,calc(12rem))] lg:grid-cols-[repeat(12,calc(14rem))] grid-flow-col gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory rise-wrapper"
			>
				{#each [...Array(24)] as _, i}
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
						class="border-0 group relative snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 rise-anim"
						style={`--delay: ${i * 100 + 200}ms`}
					>
						<div class="bg-slate-900 rounded-lg overflow-hidden">
							<img
								src={musicNote}
								alt={'music note picture'}
								class="rounded-lg transition duration-300 group-hover:scale-[1.02] group-hover:blur-sm"
							/>
						</div>
						<div
							class="z-20 absolute inset-2 md:inset-4 flex flex-col justify-center transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase"
						>
							<p class="font-bold text-xl md:text-2xl truncate leading-none md:leading-none mb-1">
								loading
							</p>
							<p class="text-sm md:text-base leading-tight md:leading-tight opacity-80">
								data's coming soon
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{:then lastfm}
	<div class="w-3/4 mx-auto">
		<p class="text-base lowercase">
			i've been listening to <a class="font-bold" href={lastfm.topArtist.link}
				>{lastfm.topArtist.name}</a
			>
			a lot lately. my favorite song right now is
			<a class="font-bold" href={lastfm.topTracks[0].url}
				>{lastfm.topTracks[0].name} - {lastfm.topTracks[0].artist.name}</a
			>
		</p>
		<div
			class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 [mask-image:linear-gradient(to_right,#000_0%,#000_75%,#0000_100%)] lg:[mask-image:linear-gradient(to_right,#0000_0%,#000_25%,#000_75%,#0000_100%)] before:z-10"
		>
			<div
				class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid grid-rows-2 grid-cols-[repeat(12,calc(9rem))] md:grid-cols-[repeat(12,calc(12rem))] lg:grid-cols-[repeat(12,calc(14rem))] grid-flow-col gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
			>
				{#each lastfm.topTracks as track, i}
					<a
						href={track.url}
						target="_blank"
						rel="noopener noreferrer"
						class="border-0 group relative snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
						style={`--delay: ${i * 100 + 200}ms`}
					>
						<div class="bg-slate-900 rounded-lg overflow-hidden">
							<img
								src={track.image || musicNote}
								alt={`${track.name} cover art`}
								class="rounded-lg transition duration-300 group-hover:scale-[1.02] group-hover:blur-sm"
							/>
						</div>
						<div
							class="z-20 absolute inset-2 md:inset-4 flex flex-col justify-center transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase"
						>
							<p class="font-bold text-xl md:text-2xl truncate leading-none md:leading-none mb-1">
								{track.name}
							</p>
							<p class="text-sm md:text-base leading-tight md:leading-tight opacity-80">
								{track.artist.name}
							</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/await}
