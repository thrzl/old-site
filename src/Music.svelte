<script lang="ts">
  import { useSWR } from "sswr";
  const { data: lastfm } = useSWR("/music_stats");
</script>

{#if $lastfm}
    <p class="text-base lowercase">i've been listening to <a class="font-bold" href={$lastfm.topArtist.link}>{$lastfm.topArtist.name}</a> a lot lately. my favorite song right now is <a class="font-bold" href={$lastfm.topTracks[0].url}>{$lastfm.topTracks[0].name} - {$lastfm.topTracks[0].artist.name}</a></p>
    <div class="px-8 my-3 grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 no-scrollbar transition-all rise-wrapper">
    {#each $lastfm.topTracks as track, i}
            <!-- thanks to https://dan.onl for the basis of this part -->
            <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                class="group relative snap-start snap-always rounded-lg before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 w-64 h-64 rise-anim"
                style={`--delay: ${i * 100 + 200}ms`}
            >
                <div class="bg-slate-900 rounded-lg overflow-hidden">
                    <img
                        src={track.image}
                        alt={track.name}
                        class="rounded-lg transition duration-300 group-hover:scale-[1.02] group-hover:blur-sm"
                    />
                </div>
                <div class="z-20 absolute inset-2 md:inset-4 flex flex-col justify-end transition duration-300 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase">
                    <p class="font-bold text-xl md:text-2xl overflow-ellipsis leading-none md:leading-none mb-1">
                        {track.name}
                    </p>
                    <p
                        class="text-sm md:text-base leading-tight md:leading-tight opacity-80"
                    >
                        {track.artist.name}
                    </p>
                </div>
            </a>
    {/each}
    </div>
{:else}
    <p class="text-base lowercase">loading information from last.fm...</p>
    <div class="px-8 grid grid-rows-1 grid-cols-3 grid-flow-col gap-4 no-scrollbar animate-pulse transition-all">
    {#each [...Array(3)] as _, i (i)}
        <div class="w-64 h-64 bg-gray-800 rounded-xl animate-pulse"></div>
    {/each}
    </div>
{/if}