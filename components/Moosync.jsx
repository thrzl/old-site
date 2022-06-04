import { render } from "preact"

function Moosync({ data }) {
    let moosyncData = data ? data.filter(a => a.name.toLowerCase() == "moosync"): null
    if (!moosyncData) {
        return null
    }
    if (moosyncData && moosyncData.length > 0) {
        moosyncData = moosyncData[0]
        let [artist, album] = moosyncData.state.split(" - ")
        var imgUrl;
        if (moosyncData.assets.large_image.includes("mp:external/")) {
            imgUrl = moosyncData.assets.large_image.replace("mp:external/", "https://media.discordapp.net/external/")
        } else {
            imgUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png?size=300`
        }
        render(
            <div className="hidden bg-cover bg-center lg:flex hover:-translate-y-1 text-white min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat min-w-max border-0 absolute right-5 bottom-5 overflow-clip" style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className="justify-center backdrop-blur-sm backdrop-brightness-75 presence min-h-full overflow-clip p-5 rounded-md">
                    {/* <a href={`https://open.spotify.com/track/${moosyncData.track_id}`} className="h-full"> */}
                        <div className="p-3 place-content-start text-left text-white min-h-full">
                            <h3 className="mb-0.5 font-bold truncate">listening to {moosyncData.details.toLowerCase()}</h3>
                            <h4 className="mb-0.5 truncate">on {album.toLowerCase()}</h4>
                            <h4 className="mb-0.5 truncate">by {artist.toLowerCase()}</h4>
                        </div>
                    {/* </a> */}
                </div>
            </div>
            , document.getElementById("moosync"))
    }
    return null
}

export default Moosync