import { useQuery } from 'react-query'
import { Grid } from '@nextui-org/react'
import { render } from "preact"

function Projects() {
  const { isLoading, er, data } = useQuery('repoData', async () => {
    const res = await fetch(`https://gh-pinned-repos.egoist.sh/?username=terabyte3`)
    return res.json()
  })

  if (isLoading || !data) return <p>loading projects...</p>

  if (er) return alert('An error has occurred: ' + er.message)
  render(
    <>
      <Grid.Container gap={2} justify="center" wrap='wrap' className='max-w-3/4 p-5' >
      {data.map((repo) => (
        <Grid xs className='w-1/2' key={repo}>
          <a className='w-full h-full' href={repo.link}>
            <div className="bg-gray-900 border-0 duration-500 -translate-y-0 hover:-translate-y-3 relative rounded-lg shadow-none fontcalc h-full w-full p-5">
              <h2 className="text-white font-bold">{repo.repo.toLowerCase()}</h2>
              <h3 className="text-white text-base truncate mb-7">{repo.description.toLowerCase()}</h3>
              <h5 className="text-white fixed font-bold text-sm bottom-3 right-5 clear-both">⭐ {repo.stars}</h5>
              <h5 className="text-white font-bold text-sm fixed bottom-3 left-5 clear-both" style={{ color: data.languageColor }}>{repo.language.toLowerCase()}</h5>
            </div>
          </a>
        </Grid>
      ))}
      </Grid.Container>
    </>
    , document.getElementById("projects"))
}

export default Projects
