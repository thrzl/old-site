import dynamic from 'next/dynamic'

import { useLanyardWs } from 'use-lanyard'
import profilePic from '../public/logo192.webp'
import Image from 'next/image'
const Projects = dynamic(() => import('../components/Projects'))
const Presence = dynamic(() => import('../components/Presence'))
const Spotify = dynamic(() => import('../components/Spotify'))

function App() {
  const act = useLanyardWs("536644802595520534");
  var p;
  if (act && act.activities.length) {
    for (const i in act.activities) {
      let activity = act.activities[i]
      if (activity.type == 0) {
        var img;
        if (activity.assets) { // find the appropriate image
          if (activity.assets.large_image) {
            img = activity.assets.large_image
          } else if (activity.assets.small_image) {
            img = activity.assets.small_image
          } else {
            img = null
          }
        } else {
          img = null
        }
        var imgUrl;
        if (img) { // discord images are really wierd, we need to parse it to get the actual url
          if (img.includes("mp:external/")) {
            imgUrl = img.replace("mp:external/", "https://media.discordapp.net/external/")
          } else {
            imgUrl = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${img}.png?size=300`
          }
        } else {
          imgUrl = "https://raw.githubusercontent.com/NYRI4/Discolored/e0a63e07fbfee073483210feb7778245addb0ce2/assets/arcades.svg"
        }
        p = {
          image: imgUrl,
          id: activity.application_id,
          name: activity.name,
          state: activity.state,
          details: activity.details,
          large_text: activity.assets ? activity.assets.large_text : null
        }
        break
      }
    }
  }

  return (
    <>
      <div className="App bg-black">
        <div id='spotify'>
          <Spotify spotify={act ? act.spotify : null} className="hidden" />
        </div>
        <div id='presence'>
          <Presence presence={p} />
        </div>
        <header className="App-header">
          <Image width="160px" height="160px" src={profilePic} priority blur className="rounded-full m-auto relative" alt="profile" />
          <h1 className="headertext my-2 font-bold sm:tagline text-gradient bg-gradient-to-r from-blue-500 to-purple-500 m-0 sm:text-small">
            heyo, i'm thrizzle.
          </h1>
          <div className="links flex text-base align-middle font-mono h-min-content">
            <a href="https://github.com/terabyte3" className="text-white text-gradient p-3 from-gray-600 to-white bg-gradient-to-br transition-all ease-in-out duration-500 hover:font-boldhover:from-white hover:to-gray-600 mx-3 leading-tight font-mono">
              /gh
            </a>
            <a href="https://fermi.terabyteis.me" className="text-white text-gradient p-3 from-purple-600 to-indigo-400 bg-gradient-to-br transition-all ease-in-out duration-500 hover:from-indigo-400 hover:to-purple-600 mx-3 leading-tight font-mono">
              /fermi
            </a>
            <a href="https://crust.terabyteis.me" className="text-white text-gradient p-3 from-orange-600 to-orange-400 bg-gradient-to-br transition-all ease-in-out duration-500 hover:from-orange-400 hover:to-orange-600 mx-3 leading-tight font-mono">
              /crust
            </a>
          </div>
          <div className='hidden md:flex w-1/2 items-center' id="projects">
            <Projects />
          </div>
        </header>
      </div>
    </>
  );
}

function return_app() {
  return (
    <App />
  )
}

export default return_app
