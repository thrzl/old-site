// import useFetch from "react-async"
import { useQuery } from 'react-query'
import { Grid, Text, Card, Link } from '@nextui-org/react'
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
          <Link className='w-full h-full' href={repo.link}>
            <Card className="bg-gray-900 border-0 shadow-none fontcalc h-full w-full" wrap="wrap" >
              <Text h2 className="text-white font-bold">{repo.repo.toLowerCase()}</Text>
              <Text h3 className="text-white text-md truncate mb-7">{repo.description.toLowerCase()}</Text>
              <Text h5 className="text-white absolute font-bold text-sm bottom-3 right-5 clear-both">⭐ {repo.stars}</Text>
              <Text h5 className="text-white font-bold text-sm absolute bottom-3 left-5 clear-both" css={{ backgroundColor: data.languageColor }}>{repo.language.toLowerCase()}</Text>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
    , document.getElementById("projects"))
}

export default Projects
