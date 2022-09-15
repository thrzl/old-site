<script>
    import Presence from "./Presence.svelte"
    import Spotify from "./Spotify.svelte"
    import {useLanyard} from "sk-lanyard"
    const act = useLanyard({method: "rest", id: "536644802595520534"})
</script>
<div id="presence">
    <Presence act={$act ? $act.activities.filter((x) => x.type == 0)?.[0] : null}/>
</div>
<div id="spotify">
    <Spotify music={$act ? $act.spotify: null}/>
</div>