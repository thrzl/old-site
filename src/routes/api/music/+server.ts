import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const data = await fetch(
		`https://last.thrzl.xyz/thrzl`
	);
	const d = await data.json();
	for (const trackn in d.top_tracks) {
		const track = d.top_tracks[trackn];
		track.image = !d.top_tracks[trackn]?.image?.[3]["#text"].includes("2a96cbd8b46e442fc41c2b86b821562f") ? d.top_tracks[trackn]?.image?.[3]['#text']: null;
		d.top_tracks[trackn] = track;
	}
	return json(
		{
			topArtist: d.top_artist,
			topTracks: d.top_tracks
		}
	);
}
