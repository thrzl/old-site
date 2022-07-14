/** @type {import('@sveltejs/kit').RequestHandler} */
import musicNote from "../static/music.webp"

export async function get() {
	const topArtistsRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&api_key=${process.env.LASTFM_API_KEY}&format=json&period=1week&limit=1&user=thrzl`);
	const topArtists = await topArtistsRes.json();
	const topTracksRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&api_key=${process.env.LASTFM_API_KEY}&format=json&period=1week&limit=24&user=thrzl`);
	const topTracks = await topTracksRes.json();
	for (const trackn in topTracks.toptracks.track) {
		const track = topTracks.toptracks.track[trackn];
		const info = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.LASTFM_API_KEY}&format=json&artist=${track.artist.name}&track=${track.name}`);
		const i = await info.json();
		track.image = i.track?.album?.image?.[3]["#text"] || musicNote;
		topTracks.toptracks.track[trackn] = track;
	}
	return {
		body: {
			topArtist: topArtists.topartists.artist[0],
			topTracks: topTracks.toptracks.track,
		}
	};
}
