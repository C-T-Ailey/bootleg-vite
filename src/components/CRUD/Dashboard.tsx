import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface Product {
  _id: string,
  productName: string,
  productDescription: string,
  productPrice: number,
  productSource: string,
  productSourceType: string,
  productStock: number,
  productImageUrls: string[],
  productAudio: string,
  productSampleName: string,
  productSampleArtist: string,
  hasVariant: boolean,
  productVariants: string[],
}

export default function Dashboard() {

  useEffect(()=>{
    getProductList()
  },[])

  const [productList, setProductList] = useState<Product[]>([])

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
    <div className='max-h-[calc(100vh-5rem)] h-full overflow-scroll w-fit flex flex-col justify-between'>
      {productList.map((product, index) => (
        <div key={index} className='my-1 flex flex-row w-full'>
          <div className='mr-10 text-left w-[30rem]'>
            {product.productName}
          </div>
          
          <div className='text-right'>
            <Link to='/' />
            Edit
          </div>
        </div>
      )
      )}
    </div>
  )
}
