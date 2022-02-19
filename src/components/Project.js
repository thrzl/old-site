// import { Octokit } from "@octokit/rest";
import {Card} from "@geist-ui/core"
import GitHub from "github-api"

let gh = new GitHub();


let rname = "error occurred"
let rdesc = "error, please try again";
function Project(d) {
    let name = d["name"]
    let repo = gh.getRepo("terabyte3", name)
    function changername(data) {
        rname = data.full_name
        rdesc = data.description
        console.log(rname)
        return rname
    }
    let rinfo = repo.getDetails().then((info) => {
        rname = info.data.full_name
        rdesc = info.data.description
        console.log(info.data)
    })
    console.log(`rdesc for ${d["name"]}: ${rdesc}`)
    console.log(`rname for ${d["name"]}: ${rname}`)
    console.log(rinfo)
    return (
        <Card shadow className="bg-slate-800">
            <h4>{ `${rname}` }</h4>
            <p>{ rdesc }</p>
        </Card>
    )
}

export default Project
