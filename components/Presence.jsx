import { render } from 'preact'

function Presence({ presence }) {
  if (presence) {
    if (presence.name.toLowerCase() == "moosync") {
      render(<></>, document.getElementById('presence'))
    }
    if (presence.details) {
      render(
        <div className="hidden bg-cover bg-center lg:flex hover:-translate-y-1 text-white max-w-xs min-h-max rounded-lg place-content-center transition-all ease-in-out duration-500 no-repeat w-max bg-indigo-800 border-0 absolute left-5 bottom-5 overflow-clip" style={{ backgroundImage: `url(${presence.image})` }}>
          <div className="justify-center presence min-h-full backdrop-blur-sm backdrop-brightness-75 rounded-md p-5">
            <div className="p-3 place-content-start text-left text-base">
              <h3 className="mb-0.5 font-bold">{presence.name.toLowerCase()}</h3>
              <h4 className="mb-0.5">{presence.details.toLowerCase()}</h4>
              <h4 className="mb-0.5">{presence.state ? presence.state.toLowerCase() : null}</h4>
            </div>
          </div>
        </div>
        , document.getElementById('presence'))
    }
  }
  return null
}

export default Presence