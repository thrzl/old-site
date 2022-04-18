import { useQuery } from 'react-query'
import { render } from "preact"

function Projects() {
  const { isLoading, er, data } = useQuery('repoData', async () => {
    const res = await fetch(`https://gh-pinned-repos.egoist.sh/?username=terabyte3`)
    return res.json()
  })

  if (isLoading || !data) return <p>loading projects...</p>
  console.log(data)
  console.log(isLoading)
  console.log(er)

  if (er) return alert('An error has occurred: ' + er.message)
  render(
    <>
      <div className='mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full'>
      {data.map((repo) => (
        <div key={repo}>
          <a className='w-full h-full whitespace-nowrap md:text-left text-center' href={repo.link}>
            <div className="bg-gray-900 border-0 duration-500 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5">
              <h2 className="text-white font-bold inline w-min md:w-full md:block">{repo.repo.toLowerCase()}</h2>
              <h3 className="text-white hidden md:block w-min md:w-full text-base truncate">{repo.description.toLowerCase()}</h3>
              <div className='md:mb-7 p-0 m-0'></div>
              <h5 className="text-white md:fixed inline font-bold w-max mr-3 text-sm md:bottom-3 md:right-5 md:clear-both">⭐ {repo.stars}</h5>
              <h5 className="text-white md:fixed inline font-bold w-max text-sm md:bottom-3 md:left-5 md:clear-both" style={{ color: data.languageColor }}>{repo.language.toLowerCase()}</h5>
            </div>
          </a>
        </div>
      ))}
      </div>
    </>
    , document.getElementById("projects"))
}

export default Projects
