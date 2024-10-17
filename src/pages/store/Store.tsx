// imports
import { useEffect, useState } from "react"
import ProductCard from "../../components/productcard/ProductCard"
import Filter from "../../components/storefilter/Filter"
import axios from "axios"
import { useLocation } from "react-router-dom"

interface Product {
  _id: string,
  productName: string,
  productPrice: number,
  productStock: number,
  productImageUrls: string[],
}

export default function Store() {

  const location = useLocation()

  const [currentPage, setCurrentPage] = useState<number>(1)

  // const [productList, setProductList] = useState(["Millionaire (You Think I Ain't Worth A Dollar But I Feel Like A)", "Unreasonably Long Track Title (I'm Really Pushing The Limits of What's Subversive and What's Just Plain Obnoxious, And I'm Not Sure There's Much Question About It Anymore)", "Track 3's content to let it be", "Track 4 made everybody walk the dinosaur", "Track 5 thinks I'm still alive", "Track 6 got its kicks down at the corner of Lincoln and 36"])
  const [productList, setProductList] = useState<Product[]>([])

  useEffect(()=>{
    getProductList()
    console.log(location)
  },[])

  const getProductList = async () => {
    try {
      let res = await axios.get('http://localhost:4000/product/index')
      console.log(res.data.product)
      setProductList(res.data.product)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-full flex flex-col items-center w-fit">
        <div>Store</div>
        <Filter/>
        {/* <ProductCard></ProductCard> */}
        {/* Convert this to Grid instead of Flexbox */}
        <div className="grid grid-cols-5 gap-2">
          {productList.map((product, index) => 
          (
            <ProductCard key={index} product={product}/>
          ))}
        </div>
    </div>
  )
}
