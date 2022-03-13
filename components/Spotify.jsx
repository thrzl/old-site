import { Card } from "@nextui-org/react"
import Image from "next/image"

function Spotify({spotify}) {
    if (spotify) {
        return (
            <Card className="hidden backdrop-blur-3xl bg-cover bg-center lg:flex text-white max-w-md min-h-max p-5 mt-5 place-content-center h-fit transition-all ease-in-out duration-500 no-repeat w-max bg-green-900 border-0 absolute right-5 bottom-5 overflow-clip" shadow hoverable bordered={false} css={{backgroundImage: `url(${spotify.album_art_url})`}}>
                <div className="justify-center backdrop-blur-sm presence min-h-full overflow-clip rounded-md p-1">
                    {/* <div className="hidden md:inline-block">
                        <Image width="135px" height="135px" className="rounded-lg" src={spotify.album_art_url} layout="intrinsic"/>
                    </div> */}
                    
                    <div className="pl-5 place-content-start text-left">
                        <h3 className="mb-0.5 font-bold truncate">listening to {spotify.song.toLowerCase()}</h3>
                        <h4 className="mb-0.5 truncate">on {spotify.album.toLowerCase()}</h4>
                        <h4 className="mb-0.5 truncate">by {spotify.artist.toLowerCase()}</h4>
                    </div>
                </div>
            </Card>
        )
    }  
    return (
        null
    )
}

export default Spotify