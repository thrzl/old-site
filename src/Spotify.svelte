<script lang="ts">
	import { useSWR } from 'sswr';
	const { data: activity } = useSWR('https://api.lanyard.rest/v1/users/536644802595520534');
	let color;
	$: data = $activity ? $activity.data : null;
	$: music = data ? data.spotify : null;
</script>

{#if music}
	<div
		class="hidden bg-cover bg-neutral-900 lg:flex text-white min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat min-w-md border-0 absolute right-5 bottom-5 overflow-clip"
	>
		<div
			class="border-0 group relative snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50"
		>
			<div class="bg-slate-900 rounded-lg overflow-hidden w-fit-content max-h-64 max-w-sm">
				<img
					src={music.album_art_url}
					alt={`${music.song} cover art`}
					class="rounded-lg transition duration-300 m-auto group-hover:scale-[1.02] group-hover:blur-sm"
					id="spotify-album-cover"
				/>
			</div>
			<div
				class="z-20 absolute inset-2 md:inset-4 flex flex-col justify-center transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase items-center"
			>
				<p class="text-xl md:text-2xl truncate leading-none md:leading-none mb-1">
					listening to <span class="font-bold">{music.song}</span>
				</p>
				<p class="text-sm md:text-base leading-tight md:leading-tight opacity-80">
					by <span class="font-bold">{music.artist}</span>
				</p>
				<p class="text-sm md:text-base leading-tight md:leading-tight opacity-80">
					on <span class="font-bold">{music.album}</span>
				</p>
			</div>
		</div>
		<div class="absolute right-2 top-2">
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill="lime"
				fill-rule="evenodd"
				clip-rule="evenodd"
				><path
					d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
				/></svg
			>
		</div>
	</div>
{/if}
