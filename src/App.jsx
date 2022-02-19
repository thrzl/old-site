import './App.css';
import { useLanyard } from 'use-lanyard'
import Project from "./components/Project"

import { GeistProvider, CssBaseline, Dot, Tooltip } from '@geist-ui/core'

function App() {
  var dottype = "error"
  var status = "api error"
  const { data: activity } = useLanyard("536644802595520534");
  var dp;
  var du;
  console.log(activity);
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
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold text-gradient bg-gradient-to-r from-purple-300 to-purple-500 m-0">
          <div className="rounded-full">
            <img src={`https://cdn.discordapp.com/avatars/536644802595520534/${du.avatar}.webp?size=80`} className="rounded-full mx-auto my-auto w-fit relative" alt="profile"/>
            heyo, i'm thrizzle
            <Tooltip text={status} type="dark" hideArrow placement="right">
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
      </header>
      <div className="bg-slate-900">
        <Project name="crust"/>
        <Project name="discord-ext-forms"/>
        <Project name="obscord"/>
        <Project name="repltable"/>
      </div>
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
