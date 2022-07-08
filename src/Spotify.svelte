<script lang="ts">
	import { useSWR } from 'sswr';
	const { data: activity } = useSWR('https://api.lanyard.rest/v1/users/536644802595520534');
	$: data = $activity ? $activity.data : null;
	$: music = data ? data.spotify : null;
</script>

{#if music}
	<div
		class="hidden bg-cover bg-neutral-900 bg-center lg:flex hover:-translate-y-1 text-white min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat min-w-md border-0 absolute right-5 bottom-5 overflow-clip"
		style={`background-image: url(${data.spotify.album_art_url})`}
	>
		<div
			class="justify-center backdrop-blur-sm backdrop-brightness-75 presence min-h-full overflow-clip p-5 rounded-md"
		>
			<div class="p-3 place-content-start text-left text-white min-h-full">
				<h3 class="mb-0.5 font-bold truncate">
					listening to {music.song.toLowerCase()}
				</h3>
				<h4 class="mb-0.5 truncate">on {music.album.large_text.toLowerCase()}</h4>
				<h4 class="mb-0.5 truncate">by {music.artist.toLowerCase()}</h4>
			</div>
		</div>
	</div>
{/if}
