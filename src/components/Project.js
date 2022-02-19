// import { Octokit } from "@octokit/rest";
import { Card } from "@geist-ui/core";
import axios from "axios";

export default async function project() {
  await axios
    .get("https://api.github.com/repos/terabyte3/crust")
    .then((res) => {
      let array = [res.data.full_name, res.data.description];
      // array[0] gets the full name of the repo
      // array[1] gets the description of the repo
      // console.log(array[0] + "\n" + array[1]);

      return (
        <Card shadow className="bg-slate-800">
          <h4>{`${array[0]}`}</h4>
          <p>{`${array[1]}`}</p>
        </Card>
      );
    })
    .catch((e) => console.log(e));
}
