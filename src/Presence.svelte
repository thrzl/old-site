<script lang="ts">
	import { useSWR } from 'sswr';
	const { data: activity } = useSWR('https://api.lanyard.rest/v1/users/536644802595520534');
	$: act = $activity ? $activity.data.activities[0] : null;
	interface Presence {
		image: string;
		id: BigInt;
		name: string;
		state: string;
		details: string;
		large_text: string;
	}
	let p: Presence;
	$: if (act) {
		let activity = act;
		if (activity.type == 0) {
			let img = activity.assets ? activity.assets.large_image || activity.assets.small_image : null;
			let imgUrl =
				'https://raw.githubusercontent.com/NYRI4/Discolored/e0a63e07fbfee073483210feb7778245addb0ce2/assets/arcades.svg';
			if (img) {
				// discord images are really wierd, we need to parse it to get the actual url
				imgUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png?size=300`;
				if (img.includes('mp:external/')) {
					imgUrl = img.replace('mp:external/', 'https://media.discordapp.net/external/');
				}
			}
			p = {
				image: imgUrl,
				id: activity.application_id,
				name: activity.name,
				state: activity.state,
				details: activity.details,
				large_text: activity.assets ? activity.assets.large_text : null
			};
		}
	}
</script>

{#if p && p.name?.toLowerCase() !== 'moosync'}
	<div
		class="hidden bg-cover bg-center lg:flex hover:-translate-y-1 text-white max-w-xs min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat w-max bg-indigo-800 border-0 absolute left-5 bottom-5 overflow-clip"
		style={`background-image: url(${p.image})`}
	>
		<div
			class="justify-center presence min-h-full backdrop-blur-sm backdrop-brightness-75 rounded-md p-5"
		>
			<div class="p-3 place-content-start text-left text-base">
				<h3 class="mb-0.5 lowercase font-bold">{p.nam}</h3>
				<h4 class="mb-0.5 lowercase">{p.detail}</h4>
				<h4 class="mb-0.5 lowercase">{p.state ? p.stat : null}</h4>
			</div>
		</div>
	</div>
{/if}
