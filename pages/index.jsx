// import './App.css';
// import "../styles/globals.css"
import { useLanyard } from 'use-lanyard'
import {Github, ZeroConfig, Square} from "@geist-ui/icons"

import { GeistProvider, CssBaseline, Dot, Tooltip, Avatar } from '@geist-ui/core'
import Image from 'next/image'


function App() {
  var dottype = "error"
  var status = "api error"
  const { data: activity } = useLanyard("536644802595520534");
  console.info(activity)
  var dp;
  var du;
  if (activity === undefined) {
    dp = "offline"
    du = "api error#0000"
  } else {
    dp = activity.discord_status
    du = activity.discord_user
  }
  switch (dp) {
  case "online":
    dottype = "success";
    status = "online"
    break;
  case "offline":
    dottype = null
    status = "offline"
    break;
  case "idle":
    dottype = "warning"
    status = "idle"
    break;
    case "dnd":
      dottype = "error"
      status = "dnd"
      break;
  default:
    break;
  }
  var p;
  if (activity && activity.activities.length > 0) {
    for (let i = 0; i < activity.activities.length; i++) {
      if (activity.activities[i].id !== "custom") {
        var img;
        if (activity.activities[i].assets && activity.activities[i].assets.large_image) {
          img = activity.activities[i].assets.large_image
        } else if (activity.activities[i].assets && activity.activities[i].assets.small_image) {
          img = activity.activities[i].assets.small_image
        } else {
          img = null
        }
        var imgUrl;
        if (img) {
          if (img.includes("mp:external/")) {
            imgUrl = img.replace("mp:external/", "https://media.discordapp.net/external/")
          } else {
            imgUrl = `https://cdn.discordapp.com/app-assets/${activity.activities[i].application_id}/${img}.png?size=300`
          }
        } else {
          imgUrl = "https://raw.githubusercontent.com/NYRI4/Discolored/e0a63e07fbfee073483210feb7778245addb0ce2/assets/arcades.svg"
        }
        console.log(imgUrl)
        p = {
          image: imgUrl,
          id: activity.activities[i].application_id,
          name: activity.activities[i].name,
          state: activity.activities[i].state,
          details: activity.activities[i].details,
          large_text: activity.activities[i].assets ? activity.activities[i].assets.large_text: null
        }
        break
      }
    }
  }

  function Presence(data) {
    let presence = data.presence
    if (data.presence) { 
      return (
        <div className="p-5 mt-5 place-content-center rounded-lg bg-slate-800 shadow-lg hover:shadow-2xl transition-all ease-in-out duration-500">
          <div className="flex justify-center presence">
            {presence.assets && presence.assets.large_text ? <Tooltip text={p.large_text} hideArrow type="dark"> <Avatar isSquare src={p.image} width="100px" height="100px" /> </Tooltip> : <Image src={p.image} width="100px" height="100px" />}
            
            <div className="pl-5 place-content-start text-left">
              <h3 className="mb-0.5">{p.name}</h3>
              <h4 className="mb-0.5 font-normal">{p.details}</h4>
              <h4 className="mb-0.5 font-normal">{p.state}</h4>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="App bg-slate-900">
      <header className="App-header">
        {/* <style data-styled-jsx>{`
        .tooltip-anim {
          transition: all ease-in-out;
          transition-duration: 250ms;
        }
        ` }</style> */}
        <h1 className="headertext font-bold sm:tagline text-gradient bg-gradient-to-r from-blue-500 to-purple-500 m-0 sm:text-small">
          <div className="rounded-full">
            <img width="160px" height="160px" src={`https://cdn.discordapp.com/avatars/536644802595520534/${du.avatar}.webp?size=160`} className="rounded-full mx-auto my-auto w-fit relative" alt="profile"/>
            heyo, i'm thrizzle
            <Tooltip portalClassName="tooltip-anim" text={status} type="dark" hideArrow>
              <Dot type={dottype}></Dot>
            </Tooltip>
          </div>
        </h1>
        <a
          className="App-link"
          href="https://discord.com/users/536644802595520534"
          target="_blank"
          rel="noopener noreferrer"
        >
          {du.username}#{du.discriminator}
        </a>
        <Presence presence={p} />
        <div className="links mt-5 flex">
          <a href="https://github.com/terabyte3" className="text-white transition-all ease-in-out duration-1000 hover:scale-125 mx-3">
            <Github/>
          </a>
          <a href="https://fermi.terabyteis.me" className="text-white transition-all ease-in-out duration-1000 hover:scale-125 mx-3">
            <ZeroConfig/>
          </a>
          <a href="https://crust.terabyteis.me" className="text-white transition-all ease-in-out duration-1000 hover:scale-125 mx-3">
            <Square/>
          </a>
        </div>
      </header>
      {/* <div className="bg-slate-900">
        <Project name="terabyte3/crust"/>
        <Project name="terabyte3/discord-ext-forms"/>
        <Project name="ey3tech/vertigo"/>
        <Project name="terabyte3/repltable"/>
      </div> */}
    </div>
  );
}

function return_app() {
  return (
    <GeistProvider>
    <CssBaseline />
    <App />
  </GeistProvider>
  )
}

export default return_app
