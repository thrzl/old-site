import { Card } from '@nextui-org/react'

function Presence(data) {
    if (data.presence) {
      return (
        <Card className="p-5 mt-5 place-content-center transition-all ease-in-out duration-500 no-repeat w-max bg-slate-800 border-0" shadow hoverable bordered={false}>
          <div className="flex justify-center presence">
            <div className="hidden md:inline-block max-h-0">
              <Image width="135px" height="135px" className="rounded-lg" src={p.image} layout="intrinsic"/>
            </div>
            
            <div className="pl-5 place-content-start text-left">
              <h3 className="mb-0.5 font-bold">{p.name}</h3>
              <h4 className="mb-0.5">{p.details}</h4>
              <h4 className="mb-0.5">{p.state}</h4>
            </div>
          </div>
        </Card>
      )
    }
    return null
  }

export default Presence