import { useLanyardWs } from 'use-lanyard'
import profilePic from '../public/logo192.webp'
import Image from 'next/image'
import Projects from '../components/Projects'
import Presence from '../components/Presence'
import Spotify from '../components/Spotify'
import { Grid } from '@nextui-org/react'

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
        <Spotify spotify={act ? act.spotify : null} className="hidden" />
        <Presence presence={p} />
        <header className="App-header">
          <Image width="160px" height="160px" src={profilePic} priority blur className="rounded-full m-auto w-fit relative" alt="profile" />
          <h1 className="headertext font-bold sm:tagline text-gradient bg-gradient-to-r from-blue-500 to-purple-500 m-0 sm:text-small">
            heyo, i'm thrizzle.
          </h1>
          <div className="links mt-5 flex align-middle">
            <a href="https://github.com/terabyte3" className="text-white transition-all ease-in-out duration-500 hover:scale-125 mx-3 leading-tight">
              <i className="bx bxl-github my-auto" title='github'></i>
            </a>
            <a href="https://fermi.terabyteis.me" className="text-white transition-all ease-in-out duration-500 hover:scale-125 mx-3 leading-tight">
              <i className="bx bx-planet h-full" title='planet'></i>
            </a>
            <a href="https://crust.terabyteis.me" className="text-white transition-all ease-in-out duration-500 hover:scale-125 mx-3 leading-tight">
              <i className="bx bx-square-rounded h-full" title='square'></i>
            </a>
          </div>
          <div className='hidden md:flex w-1/2 items-center'>
            <Grid.Container gap={2} justify="center" wrap='wrap' className='max-w-3/4 p-5' id="projects">
              <Projects />
            </Grid.Container>
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
