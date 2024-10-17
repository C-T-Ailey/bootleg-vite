// imports

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface Product {
  _id: string,
  productName: string,
  productPrice: number,
  productStock: number,
  productImageUrls: string[],
}

interface ProductProps {
  product: Product;
}

export default function ProductCard({product}: ProductProps) {

  const [titleHover, setTitleHover] = useState<boolean>(false)

  return (
    <div className="relative px-3 mb-5 text-xl font-bold hairline">
        <div className="lg:w-[17vw] bg-white h-full w-full rounded-md overflow-hidden drop-shadow-[2px_2px_3px_rgb(150,150,150)]" onMouseOver={() => setTitleHover(true)} onMouseOut={() => setTitleHover(false)} >
          <Link to={`/store/product/${product._id}`} state={JSON.parse(JSON.stringify({ previousLocation: location }))}>
            <div className="w-full aspect-square bg-slate-300">
              <img src={product.productImageUrls[0]}/>
            </div>
            <div className="w-full p-4">
              <div className={`w-full flex mb-2 marquee truncate`}>
                <p className={!!titleHover ? `w-fit marquee__content` : 'w-fit truncate'}>{product.productName}</p>
                <p className={!!titleHover ? `w-fit marquee__content` : 'hidden'}>{product.productName}</p>
              </div>
              <hr></hr>
              <div className="w-full flex flex-row justify-between text-right my-3">
                <div>
                  £{product.productPrice}
                </div>
                <div>
                  {product.productStock} in Stock
                </div>
              </div>
              <div className="w-full flex flex-row justify-between mb-1">
                <div>
                  - 1 +
                </div>
                <div>
                  <div onClick={() => console.log(product)}>
                    Cart
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
    </div>
  )
}
