import useSWR from 'swr'
import { render } from "preact"
import Skeleton from 'react-loading-skeleton'

function Projects() {
  const { isValidating, er, data } = useSWR('https://gh-pinned-repos.egoist.sh/?username=terabyte3', async (url) => {
    const res = await fetch(url)
    return res.json()
  })

  let colors = ["7f1d1d", '9a3412', 'a16207', '3f6212', '1e3a8a', '4c1d95'] // bro this is so gay fr

  if (isValidating || !data) {
    if (data) {
      render(<div className='mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full'>
        {[...Array(6)].map((x, i) => (
          <div key={x}>
            <div className={`border-0 duration-500 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5`} style={{backgroundColor: `#${colors[i]}`}}>
              <Skeleton count={2} />
            </div>
          </div>
        )
        )}
      </div>, document.getElementById('projects'))
    } else {
      return (<div className='mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full'>
        {[...Array(6)].map((x, i) => (
          <div key={x}>
            <div className={`border-0 duration-500 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5`} style={{backgroundColor: `#${colors[i]}`}}>
              <Skeleton count={2} />
            </div>
          </div>
        )
        )}
      </div>)
    }
  }

  if (er) return <p>whoops... couldn&apos;t reach github</p>;
  
  render(
    <>
      <div className='mt-3 grid gap-4 grid-cols-1 lg:grid-cols-2 w-full'>
        {data.map((repo, i) => (
          <>
            {console.log(repo.name, colors[i])}
          <div key={repo}>
            <a className='w-full h-full whitespace-nowrap md:text-left text-center' href={repo.link}>
              <div className={`border-0 duration-500 -translate-y-0 hover:-translate-y-2 relative rounded-lg shadow-none fontcalc h-full w-full p-5`} style={{backgroundColor: `#${colors[i]}`}}>
                <h2 className="text-white font-bold inline w-min md:w-full md:block truncate">{repo.repo.toLowerCase()}</h2>
                <h3 className="text-white hidden md:block w-min md:w-full text-base truncate">{repo.description.toLowerCase()}</h3>
                <div className='md:mb-7 p-0 m-0'></div>
                <h4 className="text-white md:fixed inline font-bold w-max mr-3 text-sm md:bottom-3 md:right-5 md:clear-both">⭐ {repo.stars}</h4>
                <h5 className="text-white md:fixed inline font-bold w-max text-sm md:bottom-3 md:left-5 md:clear-both" style={{ color: data.languageColor }}>{repo.language.toLowerCase()}</h5>
              </div>
            </a>
            </div>
          </>
          ))}
      </div>
    </>
    , document.getElementById("projects"))
}

export default Projects
