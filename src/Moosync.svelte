<script lang="ts">
	import { useSWR } from 'sswr';
	const { data: activity } = useSWR('https://api.lanyard.rest/v1/users/536644802595520534');
	var imgUrl: string;
	var artist: string = '';
	var album: string = '';
	$: act = $activity ? $activity.data.activities : null;
	$: moosyncData = act ? act.filter((a) => a.name.toLowerCase() == 'moosync')[0] : null;
	$: if (moosyncData) {
		[artist, album] = moosyncData.state.split(' - ');
		imgUrl = moosyncData.assets.large_image.replace(
			'mp:external/',
			'https://media.discordapp.net/external/'
		);
	}
</script>

{#if moosyncData && moosyncData.length}
	<div
		class="hidden bg-cover bg-neutral-900 bg-center lg:flex hover:-translate-y-1 text-white min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat min-w-md border-0 absolute right-5 bottom-5 overflow-clip"
		style={`background-image: url(${imgUrl})`}
	>
		<div
			class="justify-center backdrop-blur-sm backdrop-brightness-75 presence min-h-full overflow-clip p-5 rounded-md"
		>
			<div class="p-3 place-content-start text-left text-white min-h-full">
				<h3 class="mb-0.5 font-bold truncate">
					listening to {moosyncData.details ? moosyncData.details.toLowerCase() : null}
				</h3>
				{#if album}<h4 class="mb-0.5 truncate">on {album.toLowerCase()}</h4>{/if}
				<h4 class="mb-0.5 truncate">by {artist.toLowerCase()}</h4>
			</div>
		</div>
	</div>
{/if}
