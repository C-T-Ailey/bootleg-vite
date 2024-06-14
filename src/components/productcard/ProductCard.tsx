// imports

import { useState } from "react"

export default function ProductCard() {

  const [titleHover, setTitleHover] = useState<boolean>(false)

  return (
    <div className="px-3 mb-5 text-xl font-bold hairline">
      <div className="lg:w-[17vw] bg-white h-full w-full rounded-md overflow-hidden drop-shadow-[2px_2px_3px_rgb(150,150,150)]" onMouseOver={() => setTitleHover(true)} onMouseOut={() => setTitleHover(false)}>
        <div className=" w-full aspect-square bg-slate-300">
          
        </div>
        <div className="w-full p-4">
          <div className={`w-full flex mb-2 marquee truncate`}>
            <p className={!!titleHover ? `w-fit marquee__content` : 'w-fit truncate'}>That song you really really like</p>
            <p className={!!titleHover ? `w-fit marquee__content` : 'hidden'}>That song you really really like</p>
          </div>
          <hr></hr>
          <div className="w-full flex flex-row justify-between my-3">
            <div>
              £X
            </div>
            <div>
              Stock
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mb-1">
            <div>
              - 1 +
            </div>
            <div>
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
