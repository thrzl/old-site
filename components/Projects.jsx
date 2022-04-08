// import useFetch from "react-async"
import { useQuery } from 'react-query'
import { Grid, Text, Card, Loading, Link } from '@nextui-org/react'

function Projects(d) {
  const { isLoading, er, data } = useQuery('repoData', async () => {
    const res = await fetch(`https://gh-pinned-repos.egoist.sh/?username=terabyte3`)
    return res.json()
  })

  if (isLoading || !data) return <Loading type="points-opacity" color="primary" lg="true" />

  if (er) return alert('An error has occurred: ' + er.message)

  return (
    <>
      {data.map((repo) => (
        <Grid xs className='w-1/2'>
          <Link className='w-full h-full' href={repo.link}>
            <Card className="bg-gray-800 shadow-2xl border-0 fontcalc h-full w-full" hoverable clickable wrap="wrap" >
              <Text h2 className="text-white font-bold">{repo.repo.toLowerCase()}</Text>
              <Text h3 className="text-white text-md truncate mb-7">{repo.description.toLowerCase()}</Text>
              <Text h5 className="text-white absolute font-bold text-sm bottom-3 right-5 clear-both">⭐ {repo.stars}</Text>
              <Text h5 className="text-white font-bold text-sm absolute bottom-3 left-5 clear-both" css={{ backgroundColor: data.languageColor }}>{repo.language.toLowerCase()}</Text>
            </Card>
          </Link>
        </Grid>
      ))}
    </>
  )
}

export default Projects
