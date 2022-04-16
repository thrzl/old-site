import { Card } from '@nextui-org/react'

function Presence({ presence }) {
    if (presence && presence.details) {
      return (
        <Card className="hidden bg-cover bg-center lg:flex p-0 text-white max-w-xs min-h-max mt-5 place-content-center h-fit transition-all ease-in-out duration-500 no-repeat w-max bg-indigo-800 border-0 absolute left-5 bottom-5 overflow-clip" shadow hoverable bordered={false} css={{backgroundImage: `url(${presence.image})`}}>
          <div className="justify-center presence min-h-full backdrop-blur-sm m-3 rounded-md p-5">
            <div className="p-3 place-content-start text-left text-base">
              <h3 className="mb-0.5 font-bold">{presence.name.toLowerCase()}</h3>
              <h4 className="mb-0.5">{presence.details.toLowerCase()}</h4>
              <h4 className="mb-0.5">{presence.state ? presence.state.toLowerCase() : null}</h4>
            </div>
          </div>
        </Card>
      )
    }
    return null
  }

export default Presence