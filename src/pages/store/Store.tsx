// imports
import { useEffect, useState } from "react"
import ProductCard from "../../components/productcard/ProductCard"
import Filter from "../../components/storefilter/Filter"
import axios from "axios"



export default function Store() {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const [productList, setProductList] = useState(["Millionaire (You Think I Ain't Worth A Dollar But I Feel Like A)", "Unreasonably Long Track Title (I'm Really Pushing The Limits of What's Subversive and What's Just Plain Obnoxious, And I'm Not Sure There's Much Question About It Anymore)", "Track 3's content to let it be", "Track 4 made everybody walk the dinosaur", "Track 5 thinks I'm still alive", "Track 6 got its kicks down at the corner of Lincoln and 36"])
  useEffect(()=>{
    getProductList()
  },[])

  const getProductList = async () => {
    try {
      let res = await axios.get('http://localhost:4000/product/index')
      console.log(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col items-center w-fit">
        <div>Store</div>
        <Filter/>
        {/* <ProductCard></ProductCard> */}
        {/* Convert this to Grid instead of Flexbox */}
        <div className="flex flex-wrap">
          {productList.map((title) => 
          (
            <ProductCard title={title}/>
          ))}
        </div>
    </div>
  )
}
