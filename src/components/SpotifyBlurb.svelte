<script lang="ts">
    import {useLanyard} from "sk-lanyard"
    import type {Spotify} from "sk-lanyard"
    const act = useLanyard({method: "rest", id: "536644802595520534"})
    let music: Spotify | undefined
    $: music = $act?.spotify
    function endsWithPunctuation(str: string) {
        return str.endsWith(".") || str.endsWith("!") || str.endsWith("?")
    }
</script>

{#if music}
<span class="lowercase">listening to <a class="text-green" href={`https://open.spotify.com/track/${music.track_id}`}>{music.song}</a> by {music.artist}
    {#if music.song !== music.album} on {music.album}{/if}{#if !endsWithPunctuation(music.album)}.{/if}</span>
{/if}