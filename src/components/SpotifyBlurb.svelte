<script lang="ts">
    import {useLanyard} from "sk-lanyard"
    import type {Spotify} from "sk-lanyard"
    const act = useLanyard({method: "rest", id: "536644802595520534"})
    let music: Spotify | undefined
    $: music = $act?.spotify
    function endsWithPunctuation(str: string) {
        return str.endsWith(".") || str.endsWith("!") || str.endsWith("?")
    }
    function humanizeList (list: Array) {
        if (list.length === 1) {return list[0]}
        if (list.length === 2) {return `${list[0]} and ${list[1]}`}

        let humanizedList = ''
        for (let i = 0; i < list.length; i++) {
            if (i === list.length - 1) {
                humanizedList += ', and '
            } else if (i !== 0) {
                humanizedList += ', '
            }
            humanizedList += list[i]
        }
        return humanizedList
    }
</script>

{#if music}
<span class="lowercase">listening to <a class="text-green" href={`https://open.spotify.com/track/${music.track_id}`}>{music.song}</a> by {humanizeList(music.artist.split("; "))}{#if music.song !== music.album}{' '}on {music.album}{/if}{#if !endsWithPunctuation(music.album)}.{/if}</span>
{/if}