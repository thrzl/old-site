/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const topArtistsRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&api_key=${process.env.LASTFM_API_KEY}&format=json&period=1month&limit=1&user=thrzl`);
	const topArtists = await topArtistsRes.json();
	const topTracksRes = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&api_key=${process.env.LASTFM_API_KEY}&format=json&period=1month&limit=3&user=thrzl`);
	const topTracks = await topTracksRes.json();
	for (const trackn in topTracks.toptracks.track) {
		const track = topTracks.toptracks.track[trackn];
		const info = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${process.env.LASTFM_API_KEY}&format=json&artist=${track.artist.name}&track=${track.name}`);
		const i = await info.json();
		track.image = i.track?.album?.image?.[3]["#text"] || "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
		topTracks.toptracks.track[trackn] = track;
	}
	return {
		body: {
			topArtist: topArtists.topartists.artist[0],
			topTracks: topTracks.toptracks.track,
		}
	};
}
