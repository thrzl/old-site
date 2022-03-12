// import useFetch from "react-async"
import { useQuery } from 'react-query'
import {Grid, Text, Card, Loading} from '@nextui-org/react'

function Projects(d) {
    const { isLoading, er, data } = useQuery('repoData', () =>
     fetch(`https://github-pinned-repo-api.herokuapp.com/?username=terabyte3`).then(res =>
       res.json()
     )
    )
 
    if (isLoading || !data) return <Loading type="points-opacity" color="secondary" lg="true"/>
  
    if (er) return alert('An error has occurred: ' + er.message)

    console.log(`data: ${data.toString()}`)
    
    return (
      <>
      {data.map((repo) => (
        <Grid xs={2} className="h-3/4">
            <a href={repo.link} className="h-full w-1/2">
              <Card className="bg-gray-800 shadow-2xl max-w-full" hoverable bordered clickable>
                <Text h2 className="text-white font-bold">{repo.repo.toLowerCase()}</Text>
                <Text h3 className="text-white text-md truncate mb-7">{repo.description.toLowerCase().replace(" ", "-")}</Text>
                <Text h5 className="text-white absolute font-bold text-sm bottom-3 right-5 clear-both">⭐ {repo.stars}</Text>
                <Text h5 className="text-white font-bold text-sm absolute bottom-3 left-5 clear-both">{repo.language.toLowerCase()}</Text>
              </Card>
            </a>
          </Grid> 
        ))}
      </>
    )
}

export default Projects
