<script lang="ts">
    import { useSWR } from "sswr";
    const {data: activity} = useSWR("https://api.lanyard.rest/v1/users/536644802595520534")
    $: act = $activity ? $activity.data : null
    interface Presence {
        image: string,
        id: BigInt,
        name: string,
        state: string,
        details: string,
        large_text: string
    }
    let p: Presence;
    $: if (act && act.activities.length) {
      for (const i in act.activities) {
        let activity = act.activities[i]
        if (activity.type == 0) {
          let img;
          if (activity.assets) { // find the appropriate image
            if (activity.assets.large_image) {
              img = activity.assets.large_image
            } else if (activity.assets.small_image) {
              img = activity.assets.small_image
            } else {
              img = null
            }
          } else {
            img = null
          }
          let imgUrl;
          if (img) { // discord images are really wierd, we need to parse it to get the actual url
            if (img.includes("mp:external/")) {
              imgUrl = img.replace("mp:external/", "https://media.discordapp.net/external/")
            } else {
              imgUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png?size=300`
            }
          } else {
            imgUrl = "https://raw.githubusercontent.com/NYRI4/Discolored/e0a63e07fbfee073483210feb7778245addb0ce2/assets/arcades.svg"
          }
          p = {
            image: imgUrl,
            id: activity.application_id,
            name: activity.name,
            state: activity.state,
            details: activity.details,
            large_text: activity.assets ? activity.assets.large_text : null
          }
          break
        }
      }
    }
</script>

{#if p && p.name.toLowerCase() !== "moosync"}
<div class="hidden bg-cover bg-center lg:flex hover:-translate-y-1 text-white max-w-xs min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat w-max bg-indigo-800 border-0 absolute left-5 bottom-5 overflow-clip" style={`background-image: url(${p.image})`}>
    <div class="justify-center presence min-h-full backdrop-blur-sm backdrop-brightness-75 rounded-md p-5">
        <div class="p-3 place-content-start text-left text-base">
        <h3 class="mb-0.5 font-bold">{p.name.toLowerCase()}</h3>
        <h4 class="mb-0.5">{p.details.toLowerCase()}</h4>
        <h4 class="mb-0.5">{p.state ? p.state.toLowerCase() : null}</h4>
        </div>
    </div>
</div>
{/if}