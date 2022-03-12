import { Card } from '@nextui-org/react'
import Image from 'next/image'

function Presence({presence}) {
    if (presence) {
      console.log(presence)
      return (
        <Card className="p-5 mt-5 place-content-center h-fit transition-all ease-in-out duration-500 no-repeat w-max bg-gray-800 border-0" shadow hoverable bordered={false}>
          <div className="flex justify-center presence h-full">
            <div className="hidden md:inline-block max-h-0">
              <Image width="135px" height="135px" className="rounded-lg" src={presence.image} layout="intrinsic"/>
            </div>
            
            <div className="pl-5 place-content-start text-left">
              <h3 className="mb-0.5 font-bold">{presence.name}</h3>
              <h4 className="mb-0.5">{presence.details}</h4>
              <h4 className="mb-0.5">{presence.state}</h4>
            </div>
          </div>
        </Card>
      )
    }
    return null
  }

export default Presence