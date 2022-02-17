import avatar from './images/avatar500.jpg';
import './App.css';
import useScript from "./hooks/useScript"
import { useLanyard } from 'use-lanyard'
import DrawBlob from 'blob-animated';
// import './index.css';

import { GeistProvider, CssBaseline, Dot, Tooltip } from '@geist-ui/core'
import { useEffect } from 'react';
function App() {
  var dottype = "error"
  var status = "api error"
  const { data: activity } = useLanyard("536644802595520534");
  console.log(activity)
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
  // useEffect(() => {
  //   const Blob = new DrawBlob({
  //     canvas: document.getElementById('avatar'),
  //     maskedElement: document.getElementById('avimg'),
  //     speed: 1000,
  //     scramble: 0.1,
  //     })
  // },[])
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={avatar} className="rounded-full hidden" id="avimg" width={"250px"} height={"250px"}/>
        <canvas id="avatar" width={"250px"} height={"250px"}/> */}
        <h1 className="font-bold text-gradient bg-gradient-to-r from-purple-300 to-purple-500"><img src={`https://cdn.discordapp.com/avatars/536644802595520534/${du.avatar}.webp?size=80`} className="rounded-full max-w-40"/>heyo, i'm thrizzle<Tooltip text={status} type="dark" hideArrow placement="right"><Dot type={dottype}></Dot></Tooltip></h1>
        <a
          className="App-link"
          href="https://discord.com/users/536644802595520534"
          target="_blank"
          rel="noopener noreferrer"
        >
          {du.username}#{du.discriminator}
        </a>
        {/* <pre>{lanyard.listening_to_spotify ? `Wohoo! I'm listening to Spotify right now.` : `I'm not listening to anything right now :(`}</pre> */}
      </header>
    </div>
  );
}

export default () => (
  <GeistProvider>
    <CssBaseline />
    <App />
  </GeistProvider>
)
