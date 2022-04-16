// import useFetch from "react-async"
import { useQuery } from 'react-query'
import { Grid, Card } from '@nextui-org/react'
import { render } from "preact"

function Projects(d) {
  const { isLoading, er, data } = useQuery('repoData', async () => {
    const res = await fetch(`https://gh-pinned-repos.egoist.sh/?username=terabyte3`)
    return res.json()
  })

  if (isLoading || !data) return <p>loading projects...</p>

  if (er) return alert('An error has occurred: ' + er.message)
  render(
    <>
      {data.map((repo) => (
        <Grid xs className='w-1/2' key={repo}>
          <a className='w-full h-full' href={repo.link}>
            <Card className="bg-gray-900 border-0 duration-500 hover:-translate-y-3 shadow-none fontcalc h-full w-full" wrap="wrap" >
              <h2 className="text-white font-bold">{repo.repo.toLowerCase()}</h2>
              <h3 className="text-white text-md truncate mb-7">{repo.description.toLowerCase()}</h3>
              <h5 className="text-white absolute font-bold text-sm bottom-3 right-5 clear-both">⭐ {repo.stars}</h5>
              <h5 className="text-white font-bold text-sm absolute bottom-3 left-5 clear-both" css={{ backgroundColor: data.languageColor }}>{repo.language.toLowerCase()}</h5>
            </Card>
          </a>
        </Grid>
      ))}
    </>
    , document.getElementById("projects"))
}

export default Projects
