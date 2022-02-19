// import { Octokit } from "@octokit/rest";
import { Card } from "@geist-ui/core";
import axios from "axios";

export default async function project() {
  await axios
    .get("https://api.github.com/repos/terabyte3/crust")
    .then((res) => {
      let array = [res.data.full_name, res.data.description];
      // array[0]   Gets the full name of the repo
      // array[1]   Gets the description of the repo
      // console.log(array[0] + "\n" + array[1]);

      // You can also get the full data from github
      // let data = res.data;
      // data[0]    Gets the id of the repo
      // data[3]    Gets the full_name of the repo
      // data[5].avatar_url     Gets the avatar_url of the repos owner

      //! Delete JSON below for production 
      /*
      {
  "id": 455392662,
  "node_id": "R_kgDOGyS9lg",
  "name": "crust",
  "full_name": "terabyte3/crust",
  "private": false,
  "owner": {
    "login": "terabyte3",
    "id": 73202594,
    "node_id": "MDQ6VXNlcjczMjAyNTk0",
    "avatar_url": "https://avatars.githubusercontent.com/u/73202594?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/terabyte3",
    "html_url": "https://github.com/terabyte3",
    "followers_url": "https://api.github.com/users/terabyte3/followers",
    "following_url": "https://api.github.com/users/terabyte3/following{/other_user}",
    "gists_url": "https://api.github.com/users/terabyte3/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/terabyte3/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/terabyte3/subscriptions",
    "organizations_url": "https://api.github.com/users/terabyte3/orgs",
    "repos_url": "https://api.github.com/users/terabyte3/repos",
    "events_url": "https://api.github.com/users/terabyte3/events{/privacy}",
    "received_events_url": "https://api.github.com/users/terabyte3/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/terabyte3/crust",
  "description": "a real fast minecraft api (wip)",
  "fork": false,
  "url": "https://api.github.com/repos/terabyte3/crust",
  "forks_url": "https://api.github.com/repos/terabyte3/crust/forks",
  "keys_url": "https://api.github.com/repos/terabyte3/crust/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/terabyte3/crust/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/terabyte3/crust/teams",
  "hooks_url": "https://api.github.com/repos/terabyte3/crust/hooks",
  "issue_events_url": "https://api.github.com/repos/terabyte3/crust/issues/events{/number}",
  "events_url": "https://api.github.com/repos/terabyte3/crust/events",
  "assignees_url": "https://api.github.com/repos/terabyte3/crust/assignees{/user}",
  "branches_url": "https://api.github.com/repos/terabyte3/crust/branches{/branch}",
  "tags_url": "https://api.github.com/repos/terabyte3/crust/tags",
  "blobs_url": "https://api.github.com/repos/terabyte3/crust/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/terabyte3/crust/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/terabyte3/crust/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/terabyte3/crust/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/terabyte3/crust/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/terabyte3/crust/languages",
  "stargazers_url": "https://api.github.com/repos/terabyte3/crust/stargazers",
  "contributors_url": "https://api.github.com/repos/terabyte3/crust/contributors",
  "subscribers_url": "https://api.github.com/repos/terabyte3/crust/subscribers",
  "subscription_url": "https://api.github.com/repos/terabyte3/crust/subscription",
  "commits_url": "https://api.github.com/repos/terabyte3/crust/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/terabyte3/crust/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/terabyte3/crust/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/terabyte3/crust/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/terabyte3/crust/contents/{+path}",
  "compare_url": "https://api.github.com/repos/terabyte3/crust/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/terabyte3/crust/merges",
  "archive_url": "https://api.github.com/repos/terabyte3/crust/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/terabyte3/crust/downloads",
  "issues_url": "https://api.github.com/repos/terabyte3/crust/issues{/number}",
  "pulls_url": "https://api.github.com/repos/terabyte3/crust/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/terabyte3/crust/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/terabyte3/crust/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/terabyte3/crust/labels{/name}",
  "releases_url": "https://api.github.com/repos/terabyte3/crust/releases{/id}",
  "deployments_url": "https://api.github.com/repos/terabyte3/crust/deployments",
  "created_at": "2022-02-04T01:58:49Z",
  "updated_at": "2022-02-11T16:38:26Z",
  "pushed_at": "2022-02-10T01:32:19Z",
  "git_url": "git://github.com/terabyte3/crust.git",
  "ssh_url": "git@github.com:terabyte3/crust.git",
  "clone_url": "https://github.com/terabyte3/crust.git",
  "svn_url": "https://github.com/terabyte3/crust",
  "homepage": "https://crust.terabyteis.me",
  "size": 207,
  "stargazers_count": 2,
  "watchers_count": 2,
  "language": "Rust",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 2,
  "license": {
    "key": "apache-2.0",
    "name": "Apache License 2.0",
    "spdx_id": "Apache-2.0",
    "url": "https://api.github.com/licenses/apache-2.0",
    "node_id": "MDc6TGljZW5zZTI="
  },
  "allow_forking": true,
  "is_template": false,
  "topics": [
    "actix-web",
    "minecraft",
    "minecraft-api",
    "mojang",
    "mojang-api",
    "rust",
    "rust-lang",
    "rustlang"
  ],
  "visibility": "public",
  "forks": 0,
  "open_issues": 2,
  "watchers": 2,
  "default_branch": "master",
  "temp_clone_token": null,
  "network_count": 0,
  "subscribers_count": 1
}
      */
      return (
        <Card shadow className="bg-slate-800">
          <h4>{`${array[0]}`}</h4>
          <p>{`${array[1]}`}</p>
        </Card>
      );
    })
    .catch((e) => console.log(e));
}
