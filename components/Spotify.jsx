import { render } from "preact"

function Spotify({ spotify }) {
    if (spotify) {
        render(
            <div className="hidden bg-cover bg-center lg:flex hover:-translate-y-1 text-white min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat min-w-max border-0 absolute right-5 bottom-5 overflow-clip" style={{ backgroundImage: `url(${spotify.album_art_url})` }}>
                <div className="justify-center backdrop-blur-sm backdrop-brightness-75 presence min-h-full overflow-clip p-5 rounded-md">
                    <a href={`https://open.spotify.com/track/${spotify.track_id}`} className="h-full">
                        <div className="p-3 place-content-start text-left text-white min-h-full">
                            <h3 className="mb-0.5 font-bold truncate">listening to {spotify.song.toLowerCase()}</h3>
                            <h4 className="mb-0.5 truncate">on {spotify.album.toLowerCase()}</h4>
                            <h4 className="mb-0.5 truncate">by {spotify.artist.toLowerCase()}</h4>
                        </div>
                    </a>
                </div>
            </div>
            , document.getElementById("spotify"))
    }
    return (
        null
    )
}

export default Spotify